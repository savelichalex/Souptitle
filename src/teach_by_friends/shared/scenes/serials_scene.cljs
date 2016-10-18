(ns teach-by-friends.shared.scenes.serials-scene
  (:require [teach-by-friends.shared.ui :as ui :refer [DataSource]]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [teach-by-friends.shared.components.row :refer [row]]
            [teach-by-friends.shared.navigation :as nav]))

(def ReactNative (js/require "react-native"))

(def serials-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn serials-content [activity-indicator]
  (let [serials (subscribe [:serials])]
    (fn serials-content-comp [{:keys [navigator]}]
      [ui/view {:style {:flex 1
                        :flex-direction "column"
                        :align-items "stretch"}}
       (if (not (nil? @serials))
         [ui/list-view {:dataSource (.cloneWithRows serials-ds (clj->js @serials))
                        :render-row #(r/as-element
                                      (row %
                                           (fn [serial]
                                             (dispatch [:seasons-load serial])
                                             (nav/push! navigator :chapter-screen {:title (:title serial)}))))
                        :style      {:flex 1}}]
         [ui/view {:style {:flex 1 :justify-content "center" :align-items "center"}}
          [activity-indicator {:color "rgb(155, 155, 155)"}]])])))

(defn serials-title []
  [ui/text {:style {:color "white"
                    :font-size 30}}
   (clojure.string/upper-case "serials")])

(defn get-serials-scene [activity-indicator]
  (fn serials-scene []
    {:nav-bar {:left-button nil
               :title serials-title
               :right-button nil}
     :content (serials-content activity-indicator)}))