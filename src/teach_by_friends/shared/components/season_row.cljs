(ns teach-by-friends.shared.components.season-row
	(:require [teach-by-friends.shared.ui :as ui]
						[re-frame.core :refer [dispatch]]))

(defn season-row [s]
	(let [season (js->clj s :keywordize-keys true)]
		[ui/touchable-opacity {:style    {:border-bottom-width 1
																				:border-color        "rgba(0,0,0,.1)"
																				:padding-top         20
																				:padding-bottom      20
																				:padding-left        30}
														 :on-press #(dispatch [:chapters-load season])}
		 [ui/text {:style {:font-size 20 :color "rgb(72, 86, 155)"}} (:title season)]]))