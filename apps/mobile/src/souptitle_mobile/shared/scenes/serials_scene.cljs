(ns souptitle-mobile.shared.scenes.serials-scene
  (:require [souptitle-mobile.shared.ui :as ui :refer [DataSource]]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [souptitle-mobile.shared.components.row :refer [row]]
            [souptitle-mobile.shared.navigation :as nav]
            [souptitle-mobile.shared.icons :refer [get-icon]]))

(def ReactNative (js/require "react-native"))

(def serials-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn serials-content [activity-indicator]
  (let [serials (subscribe [:serials])]
    (fn serials-content-comp [{:keys [navigation]}]
      [ui/view {:style {:flex 1
                        :flex-direction "column"
                        :align-items "stretch"
                        :background-color "black"
                        :padding-top 60}}
       [ui/status-bar {:bar-style "light-content"}]
       (if (not (nil? @serials))
         [ui/list-view {:dataSource (.cloneWithRows serials-ds (clj->js @serials))
                        :render-row #(r/as-element
                                      (row %
                                           (fn [serial]
                                             (dispatch [:seasons-load serial])
                                             (nav/navigate! navigation :chapter {:title (:title serial)}))))
                        :style      {:flex 1}}]
         [ui/view {:style {:flex 1 :justify-content "center" :align-items "center"}}
          [activity-indicator {:color "rgb(155, 155, 155)"}]])])))

;; TODO: Create function in icons namespace
(defn serials-tab-icon [props]
  (r/as-element
   (if (true? (.-focused props))
     [ui/image {:source (get-icon :words-active)}]
     [ui/image {:source (get-icon :words)}])))

(defn get-serials-options []
  {:tab-bar {:label "Serials"
             :icon serials-tab-icon}})

(defn get-serials-screen [activity-indicator]
  (nav/create-screen
   {:title (clojure.string/upper-case "serials")
    :header {:style {:background-color "transparent"
                     :position "absolute"
                     :top 20 ;; TODO: Should various depend on platform
                     :left 0
                     :right 0
                     :paddingTop 0}
             :title-style {:color "white"}}}
   (serials-content activity-indicator)))
