(ns teach-by-friends.handlers
  (:require
    [re-frame.core :refer [register-handler after dispatch]]
    [teach-by-friends.db :refer [app-db]]
    [teach-by-friends.parser :refer [parse-srt]]
    [teach-by-friends.shared.ui :as ui]
    [teach-by-friends.remote-db-service :as rdb]
    [teach-by-friends.consts :as const]))

;; -- Middleware ------------------------------------------------------------
;;
;; See https://github.com/Day8/re-frame/wiki/Using-Handler-Middleware
;;

;; -- Handlers --------------------------------------------------------------


;; Config loading
(def ReactNative (js/require "react-native"))
(def NativeModules (.-NativeModules ReactNative))

(def SecretConfigManager (.-SecretConfigManager NativeModules))
(.getConfig
  SecretConfigManager
  "SecretConfig"
  (fn [a] (dispatch [:initialize-db (js->clj a :keywordize-keys true)])))
;;

(defn get-query-string-for-translate [term lang]
  (str
    "https://translate.yandex.net/api/v1.5/tr.json/translate?"
    "text=" term
    "&lang=en-" lang
    "&key=" const/YANDEX_TRANSLATE_API_KEY))

(register-handler
  :initialize-db
  ;validate-schema-mw
  (fn [_ [_ app-config]]
    (let [remote-db (rdb/->DropboxDB. (:DropboxOAuthToken app-config))]
      ;(-> (rdb/download-json remote-db const/SERIALS_ENTRY_URL)
      ;    (.then #(dispatch [:serials-load-success %]))
      ;    (.catch #(dispatch [:serials-load-error %])))
      (-> (rdb/download-json remote-db const/SERIALS_ENTRY_URL)
          (.then (fn [s]
                   (dispatch [:serials-load-success s])
                   (rdb/download-json remote-db (:path (first s))))))

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
      (-> (rdb/download-json remote-db seasons)
          (.then (fn [s]
                   (dispatch [:seasons-load-success s])
                   (rdb/download-json remote-db (:path (first (rest s))))))
          (.then (fn [chapters]
                   (dispatch [:chapter-load 0 (nth chapters 0)])
                   (dispatch [:chapters-load-success chapters])))
          (.catch #(dispatch [:seasons-load-error %])))
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
    (-> (js/fetch (get-query-string-for-translate term (:target-lang db)))
        (rdb/parse-response)
        (rdb/response-from-json)
        (.then #(dispatch [:term-translate-success term %]))
        (.catch #(print %)))
    (-> db
        (assoc :term-to-translate term)
        (assoc :term-translate nil))))

(register-handler
  :term-translate-success
  (fn [db [_ term translate]]
    (let [in-chapter (first (get-in db [:chapter term]))]
      (-> db
          (assoc :term-translate (-> in-chapter
                                     (assoc :translate (:text translate))))))))

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
    (-> (rdb/download-json (get db :remote-db) chapters)
        (.then #(dispatch [:chapters-load-success %]))
        (.catch #(dispatch [:chapters-load-error %])))
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
    (-> (rdb/download (get db :remote-db) srt)
        (.then #(dispatch [:srt-load-success (parse-srt %)]))
        (.catch #(dispatch [:srt-load-error %])))
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
  (fn [db [_ term]]
    (-> db
        (update :well-known-terms conj term))))

;; Serials bars
(register-handler
  :toggle-serials-bars
  (fn [db _]
    (let [current-status (:show-serial-bars? db)]
      (assoc db :show-serial-bars? (not current-status)))))