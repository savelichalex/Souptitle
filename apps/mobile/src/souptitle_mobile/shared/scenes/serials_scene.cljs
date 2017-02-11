(ns souptitle-mobile.shared.scenes.serials-scene
  (:require [souptitle-mobile.shared.ui :as ui :refer [DataSource]]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [souptitle-mobile.shared.components.row :refer [row]]
            [souptitle-mobile.shared.navigation :as nav]
            [souptitle-mobile.shared.components.screen :refer [screen]]))

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

(defn get-serials-screen [activity-indicator]
  (fn []
    [screen {:navigation-bar {:title (clojure.string/upper-case "serials")
                              :title-style {:color "white"
                                            :font-size 30}}}
     [serials-content activity-indicator]]))
