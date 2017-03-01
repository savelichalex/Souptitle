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
  (->> serials (map create-node)))

(defn parse-seasons [seasons]
  (->> seasons (map-indexed create-node)))

(defn parse-chapters [chapters]
  (->> chapters (map-indexed create-leaf)))

(defn set-active-serial [serial-id active-content-index]
  (assoc active-content-index 0 serial-id))

;; TODO: think about lenses

(defn save-apply [& args]
  (try
    (apply (first args) (rest args))
    (catch js/Object _
      nil)))

(defn get-serial-by-index [content index]
  (-> content
      (save-apply nth (first index))))

(defn get-seasons-by-index [content index]
  (-> (get-serial-by-index content index)
      (:content)))

(defn get-season-by-index [content index]
  (-> (get-seasons-by-index content index)
      (save-apply nth (-> index (rest) (first)))))

(defn get-chapters-by-index [content index]
  (-> (get-season-by-index content index)
      (:content)))

(defn get-chapter-by-index [content index]
  (-> (get-chapters-by-index content index)
      (save-nth (-> index (rest) (rest) (first)))))

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
         (dispatch [:chapter-load 0 (nth chapters 0)])
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
  (fn [db [_ seasons]]
    (-> db
        (assoc :seasons-list (->> seasons
                                  (map-indexed #(assoc %2 :active? (= %1 0))))))))

(register-handler
  :seasons-load-error
  (fn [db [_ error]]
    (print error)
    db))

(register-handler
  :resort-chapter
  (fn [db [_ sort-type]]
    (assoc db :sort-chapter sort-type)))

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

(register-handler
  :reset-seasons-and-chapter
  (fn [db _]
    (let [saved-seasons (:saved-seasons-list db)
          saved-chapters (:saved-chapters-list db)]
      (-> db
          (assoc :seasons-list saved-seasons)
          (assoc :chapters-list saved-chapters)))))

(register-handler
  :save-seasons-and-chapters
  (fn [db _]
    (let [seasons (:seasons-list db)
          chapters (:chapters-list db)]
      (-> db
          (assoc :saved-seasons-list seasons)
          (assoc :saved-chapters-list chapters)))))

(register-handler
  :chapters-load
  (fn [db [_ season-number {chapters :path}]]
    (api-proxy
      #(-> (rdb/download-json (get db :remote-db) chapters)
           (.then (fn [chts] (dispatch [:chapters-load-success chts])))
           (.catch (fn [err]
                     (if (= (.-message err) "Network request failed")
                       (dispatch [:show-network-error])
                       (print err))))))
    (-> db
        (update :seasons-list #(->> %
                                    (map-indexed (fn [index season]
                                                   (assoc season :active? (= index season-number))))))
        (assoc :chapters-list nil))))

(register-handler
  :chapters-load-success
  (fn [db [_ chapters]]
    (-> db
        (assoc :chapters-list (->> chapters
                                   (map-indexed #(assoc %2 :active? (= %1 0))))))))

(register-handler
  :chapters-load-error
  (fn [db [_ error]]
    (-> db
        (assoc :chapters-list nil))))

(register-handler
  :chapter-load
  (fn [db [_ number {srt :path}]]
    (api-proxy
      #(-> (rdb/download (get db :remote-db) srt)
           (.then (fn [srt] (dispatch [:srt-load-success (parse-srt srt)])))
           (.catch (fn [err]
                     (if (= (.-message err) "Network request failed")
                       (dispatch [:show-network-error])
                       (print err))))))
    (-> db
        (update :chapters-list #(->> %
                                     (map-indexed (fn [index chapter]
                                                    (assoc chapter :active? (= index number))))))
        (assoc :chapter nil)
        (assoc :sort-chapter :by-rank))))

(register-handler
  :srt-load-success
  (fn [db [_ chapter]]
    (-> db
        (assoc :chapter chapter))))

(register-handler
  :srt-load-error
  (fn [db [_ error]]
    (print error)
    (-> db
        (assoc :chapter nil))))

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
