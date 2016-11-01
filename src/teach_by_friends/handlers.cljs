(ns teach-by-friends.handlers
  (:require
    [re-frame.core :refer [register-handler after dispatch]]
    [teach-by-friends.db :refer [app-db]]
    [teach-by-friends.parser :refer [parse-srt]]
    [teach-by-friends.shared.ui :as ui]
    [teach-by-friends.remote-db-service :as rdb]
    [teach-by-friends.consts :as const]
    [teach-by-friends.shared.well-known-words-service :as wservice]
    [teach-by-friends.shared.navigation :as nav]))

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
                       (if (= (.-message err) "Network request failed")
                         (dispatch [:show-network-error])
                         (print err))))))
      (-> app-db
          (assoc :remote-db remote-db)))))

(register-handler
  :serials-load-success
  (fn [db [_ serials]]
    (-> db
        (assoc :serials-list serials))))

(register-handler
  :serials-load-error
  (fn [db [_ error]]
    (print error)
    db))

(register-handler
  :seasons-load
  (fn [db [_ {seasons :path title :title cover :cover}]]
    (let [remote-db (get db :remote-db)]
      (api-proxy
        #(-> (rdb/download-json remote-db seasons)
             (.then (fn [s]
                      (dispatch [:seasons-load-success s])
                      (rdb/download-json remote-db (:path (first (rest s))))))
             (.then (fn [chapters]
                      (dispatch [:chapter-load 0 (nth chapters 0)])
                      (dispatch [:chapters-load-success chapters])))
             (.catch (fn [err]
                       (if (= (.-message err) "Network request failed")
                         (dispatch [:show-network-error])
                         (print err))))))
      (-> db
          (assoc :serial-cover-image cover)
          (assoc :chapter nil)
          (assoc :seasons-list nil)
          (assoc :chapters-list nil)))))

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
  (fn [db [_ term]]
    (api-proxy
      #(-> (js/fetch (get-query-string-for-translate term (:target-lang db)))
           (rdb/parse-response)
           (rdb/response-from-json)
           (.then (fn [translate] (dispatch [:term-translate-success term translate])))
           (.catch (fn [err]
                     (if (= (.-message err) "Network request failed")
                       (dispatch [:show-network-error])
                       (print err))))))
    (-> db
        (assoc :term-translate nil))))

(register-handler
  :term-translate-success
  (fn [db [_ term translate]]
    (-> db
        (assoc :term-translate (:text translate)))))

(register-handler
  :nav/pop-term
  (fn [db _]
    (assoc db :term-translate nil)))

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
    (nav/show-modal! (nav/get-current-navigator) :network-error-screen)
    db))

(register-handler
  :call-last-api
  (fn [db _]
    (apply-last-api-call)
    db))