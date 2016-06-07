(ns teach-by-friends.shared.scenes.chapter-scene
	(:require [reagent.core :as r]
						[teach-by-friends.shared.ui :as ui :refer [DataSource]]
						[re-frame.core :refer [subscribe dispatch dispatch-sync]]
						[teach-by-friends.shared.components.term-row :refer [term-row]]))

(def ReactNative (js/require "react-native"))

(def chapter-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn chapter-scene []
	(let [chapter (subscribe [:get-chapter])]
		(fn []
			[ui/view {:style {:margin-top       15
												:flex             1
												:flex-direction   "column"
												:background-color "white"}}
			 [ui/view {:style {:flex           1
												 :flex-direction "row"
												 :align-items    "stretch"}}
				[ui/touchable-opacity {:style    {:flex 1 :justify-content "center" :align-items "center"}
															 :on-press #(dispatch [:resort-chapter :by-rank])}
				 [ui/text "In time order"]]
				[ui/touchable-opacity {:style    {:flex 1 :justify-content "center" :align-items "center"}
															 :on-press #(dispatch [:resort-chapter :by-alphabet])}
				 [ui/text "In alph order"]]]
			 [ui/list-view {:dataSource (.cloneWithRows chapter-ds (clj->js @chapter))
											:render-row #(r/as-element (term-row %))
											:style      {:flex 9}}]])))