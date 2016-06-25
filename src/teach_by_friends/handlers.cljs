(ns teach-by-friends.handlers
	(:require
		[re-frame.core :refer [register-handler after dispatch]]
		[schema.core :as s :include-macros true]
		[teach-by-friends.db :refer [app-db]]
		[teach-by-friends.parser :refer [parse-srt]]
		[teach-by-friends.shared.ui :as ui]))

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

(defn get-query-string-for-translate [term lang]
	(str
		"https://translate.yandex.net/api/v1.5/tr.json/translate?"
		"text=" term
		"&lang=en-" lang
		"&key=" YANDEX_TRANSLATE_API_KEY))

(defn parse-fetch-response [promise]
	(-> promise
			(.then #(.text %))
			(.then #(js->clj (js/JSON.parse %) :keywordize-keys true))))

(register-handler
	:initialize-db
	;validate-schema-mw
	(fn [_ _]
		(-> (js/fetch FRIENDS_SEASONS_URL)
				(parse-fetch-response)
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
	(fn [db [_ route]]
		(-> db
				(assoc-in [:nav :route] route)
				(assoc-in [:nav :type] :pop))))

(register-handler
	:nav/term
	(fn [db [_ term]]
		(-> (js/fetch (get-query-string-for-translate term (:target-lang db)))
				(parse-fetch-response)
				(.then #(dispatch [:term-translate-success term %]))
				(.catch #(print %)))
		(-> db
				(assoc-in [:nav :route] :term)
				(assoc-in [:nav :type] :push)
				(assoc-in [:nav :props] {:term   term
																 :values (get-in db [:chapter term])}))))

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
	(fn [db [_ {chapters :chapters title :title}]]
		(-> (js/fetch chapters)
				(parse-fetch-response)
				(.then (fn [chapters]
								 (dispatch [:chapter-load 0 (first chapters)])
								 chapters))
				(.then #(dispatch [:chapters-load-success %]))
				(.catch #(dispatch [:chapters-load-error %])))
		(-> db
				(assoc :chapter nil)
				(assoc :chapters-list nil)
				;(assoc-in [:nav :route] :chapter)
				(assoc-in [:nav :route] :new-design)
				(assoc-in [:nav :props] title)
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
	:chapter-load
	(fn [db [_ number {srt :srt}]]
		(-> (js/fetch srt)
				(.then #(.text %))
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