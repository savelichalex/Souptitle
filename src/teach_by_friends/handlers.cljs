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
          (.then (fn [s] (rdb/download-json remote-db (:path (first s)))))
          (.then (fn [s] (rdb/download-json remote-db (:path (first (rest s))))))
          (.then (fn [chapters]
                   (dispatch [:chapter-load 0 (nth chapters 0)]))))
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
  (fn [db [_ {seasons :path title :title}]]
    (js/setTimeout
      (fn []
        (-> (rdb/download-json (get db :remote-db) seasons)
            (.then #(dispatch [:seasons-load-success %]))
            (.catch #(dispatch [:seasons-load-error %]))))
      400)
    (-> db
        (assoc :seasons-list nil)
        (assoc-in [:nav :route] :seasons)
        (assoc-in [:nav :props] {:title title})
        (assoc-in [:nav :type] :push))))

(register-handler
  :seasons-load-success
  (fn [db [_ seasons]]
    (-> db
        (assoc :seasons-list seasons))))

(register-handler
  :seasons-load-error
  (fn [db [_ error]]
    (print error)
    db))

(register-handler
  :back-to-serials
  (fn [db _]
    (-> db
        (assoc-in [:nav :route] :serials)
        (assoc-in [:nav :type] :pop))))

(register-handler
  :resort-chapter
  (fn [db [_ sort-type]]
    (assoc db :sort-chapter sort-type)))

(register-handler
  :nav/pop
  (fn [db [_ route]]
    (-> db
        (assoc-in [:nav :route] route)
        (assoc-in [:nav :type] :pop))))

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
    (dispatch [:nav/pop :chapter])
    (assoc db :term-translate nil)))

(register-handler
  :chapters-load
  (fn [db [_ {chapters :path title :title}]]
    (js/setTimeout
      (fn []
        (-> (rdb/download-json (get db :remote-db) chapters)
            (.then (fn [chapters]
                     (dispatch [:chapter-load 0 (first chapters)])
                     chapters))
            (.then #(dispatch [:chapters-load-success %]))
            (.catch #(dispatch [:chapters-load-error %]))))
      300)
    (-> db
        (assoc :chapter nil)
        (assoc :chapters-list nil)
        (assoc :season-title title)
        (assoc-in [:nav :route] :chapters)
        (assoc-in [:nav :props] {:title title})
        (assoc-in [:nav :type] :push))))

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
  :back-to-seasons
  (fn [db _]
    (-> db
        (assoc-in [:nav :route] :seasons)
        (assoc-in [:nav :type] :pop))))

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