(ns teach-by-friends.shared.components.chapter-row
	(:require [teach-by-friends.shared.ui :as ui]
						[re-frame.core :refer [dispatch]]))

(defn chapter-row [c]
	(let [chapter (js->clj c :keywordize-keys true)]
		[ui/touchable-highlight {:style    {:border-bottom-width 1
																				:border-color        "#000"
																				:padding-top         10
																				:padding-bottom      10
																				:align-items         "center"}
														 :on-press #(dispatch [:chapter-load chapter])}
		 [ui/text {:style {:font-size 20 :color "#000"}} (:title chapter)]]))
