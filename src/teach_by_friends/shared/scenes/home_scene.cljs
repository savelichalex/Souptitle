(ns teach-by-friends.shared.scenes.home-scene
	(:require [teach-by-friends.shared.ui :as ui :refer [DataSource]]
						[reagent.core :as r]
						[re-frame.core :refer [subscribe dispatch dispatch-sync]]
						[teach-by-friends.shared.components.season-row :refer [season-row]]
						[teach-by-friends.shared.components.chapter-row :refer [chapter-row]]))

(def ReactNative (js/require "react-native"))

(def seasons-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))
(def chapters-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn get-home-scene [activity-indicator]
	(fn home-scene []
		(let [seasons (subscribe [:seasons])
					chapters (subscribe [:chapters])]
			(fn []
				[ui/view {:style {:flex 1 :margin-top 15 :flex-direction "column" :align-items "stretch"}}
				 (if (not (nil? @seasons))
					 [ui/list-view {:dataSource (.cloneWithRows seasons-ds (clj->js @seasons))
													:render-row #(r/as-element (season-row %))
													:style      {:flex 1}}]
					 [ui/view {:style {:flex 1 :justify-content "center" :align-items "center"}}
						[activity-indicator]])
				 (if (not (nil? @chapters))
					 [ui/list-view {:dataSource (.cloneWithRows chapters-ds (clj->js @chapters))
													:render-row #(r/as-element (chapter-row %))
													:style      {:flex 1}}]
					 [ui/view {:style {:flex 1}}])]))))