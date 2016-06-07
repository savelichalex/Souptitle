(ns teach-by-friends.shared.scenes.term-scene
	(:require [teach-by-friends.shared.ui :as ui]
						[re-frame.core :refer [subscribe dispatch dispatch-sync]]))

(defn get-term-scene [activity-indicator]
	(fn term-scene [{:keys [term values]}]
		(let [translate (subscribe [:term-translate])]
			(fn []
				(if (nil? @translate)
					[ui/view {:style {:flex             1
														:background-color "white"
														:justify-content  "center"
														:align-items      "center"}}
					 [activity-indicator]
					 [ui/touchable-opacity {:on-press #(dispatch [:nav/pop-term])}
						[ui/text "Back"]]]
					[ui/view {:style {:flex             1
														:background-color "white"
														:justify-content  "center"
														:align-items      "center"}}
					 [ui/text {:style {:font-size 20 :font-weight "bold"}} (first @translate)]
					 [ui/touchable-opacity {:on-press #(dispatch [:nav/pop-term])}
						[ui/text "Back"]]])))))