(ns teach-by-friends.shared.components.season-row
	(:require [teach-by-friends.shared.ui :as ui]
						[re-frame.core :refer [dispatch]]))

(defn season-row [s]
	(let [season (js->clj s :keywordize-keys true)]
		[ui/touchable-highlight {:style    {:border-bottom-width 1
																				:border-color        "#000"
																				:padding-top         10
																				:padding-bottom      10
																				:align-items         "center"}
														 :on-press #(dispatch [:chapters-load season])}
		 [ui/text {:style {:font-size 20 :color "#000"}} (:title season)]]))