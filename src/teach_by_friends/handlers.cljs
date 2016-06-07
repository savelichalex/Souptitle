(ns teach-by-friends.handlers
  (:require
    [re-frame.core :refer [register-handler after dispatch]]
    [schema.core :as s :include-macros true]
    [teach-by-friends.db :refer [app-db]]
    [teach-by-friends.parser :refer [parse-srt]]
    [ajax.core :refer [GET]]))

(enable-console-print!)

;; -- Middleware ------------------------------------------------------------
;;
;; See https://github.com/Day8/re-frame/wiki/Using-Handler-Middleware
;;

;; -- Handlers --------------------------------------------------------------

(def YANDEX_TRANSLATE_API_KEY
	"trnsl.1.1.20160530T190821Z.59ce9ff185d1c573.e05024eb700b7792b46b29fd152cecc6e2aa0ca4")

(def FRIENDS_SEASONS_URL
	"https://raw.githubusercontent.com/savelichalex/friends-app-db/master/friends/seasons.json")

(register-handler
  :initialize-db
  ;validate-schema-mw
  (fn [_ _]
		(-> (js/fetch FRIENDS_SEASONS_URL)
				(.then #(.text %))
				(.then #(js->clj (js/JSON.parse %) :keywordize-keys true)) ;use transit!
				(.then #(dispatch [:seasons-load-success %]))
				(.catch #(dispatch [:seasons-load-error %])))
    app-db))

(register-handler
	:seasons-load-success
	(fn [db [_ seasons]]
		(-> db
				(assoc :seasons-list seasons))))

(register-handler
	:seasons-load-error
	(fn [db [_ error]]
		db))

(register-handler
  :set-greeting
  ;validate-schema-mw
  (fn [db [_ value]]
    (assoc db :greeting value)))

(register-handler
	:resort-chapter
	(fn [db [_ sort-type]]
		(assoc db :sort-chapter sort-type)))

(register-handler
	:nav/pop
	(fn [db _]
		(assoc-in db [:nav :route] :pop)))

(register-handler
	:nav/term
	(fn [db [_ term]]
		(GET
			(str
				"https://translate.yandex.net/api/v1.5/tr.json/translate?"
				"text=" term
				"&lang=en-" (:target-lang db)
				"&key=" YANDEX_TRANSLATE_API_KEY)                       ;todo: move to fetch
			{:handler #(dispatch [:term-translate-success %])
			 :error-handler #(print %)})
		(-> db
				(assoc-in [:nav :route] :term)
				(assoc-in [:nav :props] {:term term
																 :values (get-in db [:chapter term])}))))

(register-handler
	:term-translate-success
	(fn [db [_ translate]]
		(-> db
				(assoc :term-translate (get translate "text")))))

(register-handler
	:nav/pop-term
	(fn [db _]
		(dispatch [:nav/pop])
		(assoc db :term-translate nil)))

(register-handler
	:chapters-load
	(fn [db [_ {chapters :chapters}]]
		(-> (js/fetch chapters)
				(.then #(.text %))
				(.then #(js->clj (js/JSON.parse %) :keywordize-keys true))
				(.then #(dispatch [:chapters-load-success %]))
				(.catch #(dispatch [:chapters-load-error %])))
		(-> db
				(assoc :chapters-list nil))))

(register-handler
	:chapters-load-success
	(fn [db [_ chapters]]
		(-> db
				(assoc :chapters-list chapters))))

(register-handler
	:chapters-load-error
	(fn [db [_ error]]
		(-> db
				(assoc :chapters-list nil))))

(register-handler
  :chapter-load
  (fn [db [_ {srt :srt}]]
    (-> (js/fetch srt)
        (.then #(.text %))
        (.then #(dispatch [:srt-load-success (parse-srt %)]))
        (.catch #(dispatch [:srt-load-error %])))
    (-> db
        (assoc :chapter nil)
        (assoc :sort-chapter :by-rank)
        (assoc-in [:nav :route] :chapter))))

(register-handler
  :srt-load-success
  (fn [db [_ chapter]]
    (print chapter)
    (-> db
        (assoc :chapter chapter))))

(register-handler
  :srt-load-error
  (fn [db [_ error]]
    (print error)
    (-> db
        (assoc :chapter nil))))