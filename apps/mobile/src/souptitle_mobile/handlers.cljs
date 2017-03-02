(ns souptitle-mobile.handlers
  (:require
    [re-frame.core :refer [register-handler after dispatch]]
    [souptitle-mobile.db :refer [app-db]]
    [souptitle-mobile.parser :refer [parse-srt]]
    [souptitle-mobile.shared.ui :as ui]
    [souptitle-mobile.remote-db-service :as rdb]
    [souptitle-mobile.consts :as const]
    [souptitle-mobile.shared.well-known-words-service :as wservice]
    [souptitle-mobile.shared.navigation :as nav]))

;; -- Middleware ------------------------------------------------------------
;;
;; See https://github.com/Day8/re-frame/wiki/Using-Handler-Middleware
;;

;; -- Handlers --------------------------------------------------------------


;; Config loading
(def ReactNative (js/require "react-native"))
(def NativeModules (.-NativeModules ReactNative))

(def SecretConfigManager (.-SecretConfigManager NativeModules))
(defmulti initialize (fn [type] type))
(defmethod initialize :load-config
  [_]
  (.getConfig
    SecretConfigManager
    "SecretConfig"
    (fn [a] (dispatch [:initialize-db (js->clj a :keywordize-keys true)]))))
(defmethod initialize :load-well-known-words
  [_]
  (-> (wservice/restore-well-known-words)
      (.then #(dispatch [:restore-well-known-words %]))))

(defn inject-on-app-start [& args]
  (initialize :load-config)
  (initialize :load-well-known-words))

(inject-on-app-start)

(defn get-query-string-for-translate [term lang]
  (str
    "https://translate.yandex.net/api/v1.5/tr.json/translate?"
    "text=" term
    "&lang=en-" lang
    "&key=" const/YANDEX_TRANSLATE_API_KEY))

;;------- API proxy to save last request ---------
;; need to decide how make it better!!!
;; I thought about make it trough interceptors while migrate to re-frame 0.8
(def ^:private last-api-call (atom nil))
(defn api-proxy [cb]
  (swap! last-api-call (fn [_] cb))
  (cb))
(defn apply-last-api-call []
  (when-let [last @last-api-call]
    (last)))
;;------------------------------------------------

(register-handler
  :initialize-db
  ;validate-schema-mw
  (fn [_ [_ app-config]]
    (let [remote-db (rdb/->DropboxDB. (:DropboxOAuthToken app-config))]
      (api-proxy
        #(-> (rdb/download-json remote-db const/SERIALS_ENTRY_URL)
             (.then (fn [s]
                      (dispatch [:serials-load-success s])))
             (.catch (fn [err]
                       (print err)
                       (when (= (.-message err) "Network request failed")
                         (dispatch [:show-network-error]))))))
      (-> app-db
          (assoc :remote-db remote-db)))))

(defn create-node
  ([id {path :path, :as all}]
   {:id id
    :meta (dissoc all :path)
    :path path
    :content []}))

(defn create-leaf [id raw]
  (-> (create-node id raw)
      (dissoc :content)))

(defn parse-serials [serials]
  (->> serials (map-indexed create-node)))

(defn parse-seasons [seasons]
  (->> seasons (map-indexed create-node)))

(defn parse-chapters [chapters]
  (->> chapters (map-indexed create-leaf)))

(defn set-active-serial [serial-id active-content-index]
  (assoc active-content-index 0 serial-id))

(defn set-active-season [season-id active-content-index]
  (assoc active-content-index 1 season-id))

(defn set-active-chapter [chapter-id active-content-index]
  (assoc active-content-index 2 chapter-id))

;; TODO: think about lenses

(defn save-apply [& args]
  (try
    (apply (first args) (rest args))
    (catch js/Object _
      nil)))

(defn update-serials [content index updater]
  (updater content))

(defn get-serial-by-index [content index]
  (-> content
      (save-apply nth (first index))))

(defn update-serial [content index updater]
  (update-serials
   content
   index
   (fn [serials]
     (-> (vec serials)
         (update (first index) updater)))))

(defn get-seasons-by-index [content index]
  (-> (get-serial-by-index content index)
      (:content)))

(defn update-seasons [content index updater]
  (update-serial
   content
   index
   (fn [serial]
     (-> serial
         (update :content updater)))))

(defn get-season-by-index [content index]
  (-> (get-seasons-by-index content index)
      (save-apply nth (-> index (rest) (first)))))

(defn update-season [content index updater]
  (update-seasons
   content
   index
   (fn [seasons]
     (-> (vec seasons)
         (update (-> index (rest) (first)) updater)))))

(defn get-chapters-by-index [content index]
  (-> (get-season-by-index content index)
      (:content)))

(defn update-chapters [content index updater]
  (update-season
   content
   index
   (fn [season]
     (-> season
         (update :content updater)))))

(defn get-chapter-by-index [content index]
  (-> (get-chapters-by-index content index)
      (save-apply nth (-> index (rest) (rest) (first)))))

(defn update-chapter [content index updater]
  (update-chapters
   content
   index
   (fn [chapters]
     (-> (vec chapters)
         (update (-> index (rest) (rest) (first)) updater)))))

;; -------- Content loading -----------

(defn load-if-not-exist
  ([getter load-fn on-loaded]
   (if-let [entity (getter)]
     (promise.resolve entity)
     (-> (load-fn)
         (.then on-loaded))))
  ([promise getter load-fn on-loaded]
   (if-let [entity (getter)]
     (-> promise
         (.then #(identity entity)))
     (-> promise
         (.then load-fn)
         (.then on-loaded)))))

(register-handler
  :serials-load-success
  (fn [db [_ serials]]
    (-> db
        (assoc :content (parse-serials serials)))))

(register-handler
  :serials-load-error
  (fn [db [_ error]]
    (print error)
    db))

(defn load-serial-content [content active-content remote-db seasons-path]
  (-> (load-if-not-exist
       (partial get-seasons-by-index content active-content)
       (partial rdb/download-json remote-db seasons-path)
       (fn [s]
         (dispatch [:seasons-load-success s])
         s))
      (load-if-not-exist
       (partial get-chapters-by-index active-content)
       (fn [[_ {path :path}]]
         (rdb/download-json remote-db path))
       (fn [chapters]
         (dispatch [:chapter-load (create-leaf 0 (nth chapters 0))])
         (dispatch [:chapters-load-success chapters])))
      (.catch (fn [err]
                (if (= (.-message err) "Network request failed")
                  (dispatch [:show-network-error])
                  (print err))))))

(register-handler
  :seasons-load
  (fn [{:keys [content active-content remote-db] :as db}
       [_ {id :id seasons-path :path}]]
    (let [new-active-content (set-active-serial id active-content)]
      (api-proxy
       (partial load-serial-content
                content
                new-active-content
                remote-db
                seasons-path))
      (-> db
          (assoc :active-content new-active-content)))))

(register-handler
  :seasons-load-success
  (fn [{:keys [content active-content] :as db} [_ seasons]]
    (-> db
        (assoc :content (update-seasons content active-content #(parse-seasons seasons))))))

(register-handler
  :seasons-load-error
  (fn [db [_ err]]
    (if (= (.-message err) "Network request failed")
      (dispatch [:show-network-error])
      (print err))
    db))

(defn load-chapters-content [content active-content remote-db chapters-path]
  (-> (load-if-not-exist
       (partial get-chapters-by-index content active-content)
       (partial rdb/download-json remote-db chapters-path)
       (fn [chapters]
         (dispatch [:chapters-load-success chapters])))
      (.catch
       (fn [err]
         (dispatch [:chapters-load-error err])))))

(register-handler
  :chapters-load
  (fn [{:keys [content active-content remote-db] :as db}
       [_ {id :id chapters-path :path}]]
    (let [new-active-content (set-active-season id active-content)]
      (api-proxy
       (partial load-chapters-content
                content
                active-content
                remote-db
                chapters-path))
      (-> db
          (assoc :active-content new-active-content)))))

(register-handler
  :chapters-load-success
  (fn [{:keys [content active-content] :as db} [_ chapters]]
    (-> db
        (assoc :content (update-chapters
                         content
                         active-content
                         #(parse-chapters chapters))))))

(register-handler
  :chapters-load-error
  (fn [db [_ err]]
    (if (= (.-message err) "Network request failed")
      (dispatch [:show-network-error])
      (print err))
    db))

(defn load-srt-content [content active-content remote-db srt-path]
  (-> (load-if-not-exist
       (partial get-chapter-by-index content active-content)
       (partial rdb/download remote-db srt-path)
       (fn [srt]
         (dispatch [:srt-load-success srt])))
      (.catch
       (fn [err]
         (dispatch [:srt-load-error err])))))

(register-handler
  :chapter-load
  (fn [{:keys [content active-content remote-db] :as db}
       [_ {id :id srt-path :path}]]
    (let [new-active-content (set-active-chapter id active-content)]
      (api-proxy
       (partial load-srt-content
                content
                active-content
                remote-db
                srt-path))
      (-> db
          (assoc :active-content new-active-content)))))

(register-handler
  :srt-load-success
  (fn [{:keys [content active-content] :as db} [_ chapter]]
    (-> db
        (assoc :content (update-chapter
                         content
                         active-content
                         #(assoc % :content (parse-srt chapter)))))))

(register-handler
  :srt-load-error
  (fn [db [_ err]]
    (if (= (.-message err) "Network request failed")
      (dispatch [:show-network-error])
      (print err))
    db))

;; ------ Translate -------
;; TODO: need to cache translations

(register-handler
  :translate-term
  (fn [db [_ term-object]]
    (let [term (:term term-object)]
      (if (= (get-in db [:translate :term]) term)
        (-> db
            (assoc-in [:translate :show?] true))
        (do
          (api-proxy
           #(-> (js/fetch (get-query-string-for-translate term (:target-lang db)))
                (rdb/parse-response)
                (rdb/response-from-json)
                (.then (fn [translate] (dispatch [:term-translate-success term (:text translate)])))
                (.catch (fn [err]
                          (if (= (.-message err) "Network request failed")
                            (dispatch [:show-network-error])
                            (print err))))))
          (-> db
              (assoc-in [:translate :show?] true)
              (assoc-in [:translate :term] term)
              (assoc-in [:translate :translate] nil)
              (assoc-in [:translate :sentence] (:sentence term-object))))))))

(register-handler
  :term-translate-success
  (fn [db [_ term translate]]
    (if (= (get-in db [:translate :term]) term)
      (-> db
          (assoc-in [:translate :translate] translate))
      db)))

(register-handler
  :close-translate
  (fn [db _]
    (-> db
        (assoc-in [:translate :show?] false))))

;; ------- Other --------

(register-handler
 :resort-chapter
 (fn [db [_ sort-type]]
   (assoc db :sort-chapter sort-type)))

;; TODO: what is it???
(register-handler
  :reset-seasons-and-chapter
  (fn [db _]
    (let [saved-seasons (:saved-seasons-list db)
          saved-chapters (:saved-chapters-list db)]
      (-> db
          (assoc :seasons-list saved-seasons)
          (assoc :chapters-list saved-chapters)))))
;; TODO: what is it???
(register-handler
  :save-seasons-and-chapters
  (fn [db _]
    (let [seasons (:seasons-list db)
          chapters (:chapters-list db)]
      (-> db
          (assoc :saved-seasons-list seasons)
          (assoc :saved-chapters-list chapters)))))

(register-handler
  :toggle-search
  (fn [db _]
    (-> db
        (assoc :search-predicate "")
        (update :show-search? not))))

(register-handler
  :change-search-predicate
  (fn [db [_ predicate]]
    (-> db
        (assoc :search-predicate predicate))))

(register-handler
  :add-to-well-known
  (fn [db [_ term sentence]]
    (let [old-well-known-words (:well-known-terms db)
          new-well-known-words (-> old-well-known-words
                                   (assoc term {:term term
                                                :sentence sentence}))]
      (wservice/save-well-known-words new-well-known-words)
      (-> db
          (assoc :well-known-terms new-well-known-words)))))

(register-handler
  :remove-from-well-known
  (fn [db [_ term]]
    (let [old-well-known-words (:well-known-terms db)
          new-well-known-words (-> old-well-known-words
                                   (dissoc term))]
      (wservice/save-well-known-words new-well-known-words)
      (-> db
          (assoc :well-known-terms new-well-known-words)))))

(register-handler
  :restore-well-known-words
  (fn [db [_ well-known-words]]
    (-> db
        (assoc :well-known-terms well-known-words))))

;; Serials bars
(register-handler
  :toggle-serials-bars
  (fn [db _]
    (let [current-status (:show-serial-bars? db)]
      (assoc db :show-serial-bars? (not current-status)))))

;; Navigation

;; Errors handling
(register-handler
  :show-network-error
  (fn [db _]
    (-> db
        (assoc :show-network-error? true))))

(register-handler
  :call-last-api
  (fn [db _]
    (apply-last-api-call)
    (-> db
        (assoc :show-network-error? false))))
