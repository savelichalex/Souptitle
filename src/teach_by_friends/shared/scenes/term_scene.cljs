(ns teach-by-friends.shared.scenes.term-scene
	(:require [teach-by-friends.shared.ui :as ui]
						[re-frame.core :refer [subscribe dispatch dispatch-sync]]
						[clojure.string :as string]))

(defn sentence-with-term [sentence raw-term]
	(let [pattern (re-pattern raw-term)
				splited-sentence (string/split sentence pattern)]
		[ui/text
		 [ui/text {:style {:font-size 20 :font-style "italic"}} (first splited-sentence)]
		 [ui/text {:style {:font-size 20 :font-weight "bold"}} raw-term]
		 [ui/text {:style {:font-size 20 :font-style "italic"}} (first (rest splited-sentence))]]))

(defn get-term-scene [activity-indicator]
	(fn term-scene [{:keys [term values]}]
		(let [translate (subscribe [:term-translate])]
			(fn []
				(if (nil? @translate)
					[ui/view {:style {:flex             1
														:background-color "white"
														:justify-content  "center"
														:align-items      "center"}}
					 [activity-indicator]]
					[ui/view {:style {:flex             1
														:background-color "white"
														:justify-content  "center"
														:align-items      "center"}}
					 [sentence-with-term (:sentence @translate) (:raw @translate)]
					 [ui/text {:style {:font-size 20 :font-weight "bold"}} (first (:translate @translate))]])))))