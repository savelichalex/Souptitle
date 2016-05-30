(ns teach-by-friends.handlers
  (:require
    [re-frame.core :refer [register-handler after dispatch]]
    [schema.core :as s :include-macros true]
    [teach-by-friends.db :refer [app-db]]
		[ajax.core :refer [GET]]))

(enable-console-print!)

;; -- Middleware ------------------------------------------------------------
;;
;; See https://github.com/Day8/re-frame/wiki/Using-Handler-Middleware
;;

;; -- Handlers --------------------------------------------------------------

(def YANDEX_TRANSLATE_API_KEY
	"trnsl.1.1.20160530T190821Z.59ce9ff185d1c573.e05024eb700b7792b46b29fd152cecc6e2aa0ca4")

(register-handler
  :initialize-db
  ;validate-schema-mw
  (fn [_ _]
    app-db))

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
	:nav/chapter
	(fn [db _]
		(assoc-in db [:nav :route] :chapter)))

(register-handler
	:nav/term
	(fn [db [_ term]]
		(GET
			(str
				"https://translate.yandex.net/api/v1.5/tr.json/translate?"
				"text=" term
				"&lang=en-" (:target-lang db)
				"&key=" YANDEX_TRANSLATE_API_KEY)
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