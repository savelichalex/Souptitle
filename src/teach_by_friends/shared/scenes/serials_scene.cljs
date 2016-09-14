(ns teach-by-friends.shared.scenes.serials-scene
  (:require [teach-by-friends.shared.ui :as ui :refer [DataSource]]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [teach-by-friends.shared.components.row :refer [row]]
            [clojure.string :as string]))

(def ReactNative (js/require "react-native"))

(def serials-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn nav-bar []
  [ui/linear-gradient {:colors ["#834d9b" "#48569B"]
                       :start  [1.0 1.0] :end [0.0 0.0]
                       :style  {:flex           3
                                :flex-direction "row"
                                :align-items    "center"}}
   [ui/view {:style {:flex        5
                     :align-items "center"}}
    [ui/text {:style {:color     "white"
                      :font-size 30}}
     (string/upper-case
       (str "serials"))]]])

;(defn get-serials-scene [activity-indicator status-bar-props]
;  (fn serials-scene []
;    (let [serials (subscribe [:serials])]
;      (fn []
;        [ui/view {:style {:flex 1 :flex-direction "column" :align-items "stretch"}}
;         [ui/status-bar status-bar-props]
;         [nav-bar]
;         (if (not (nil? @serials))
;           [ui/list-view {:dataSource (.cloneWithRows serials-ds (clj->js @serials))
;                          :render-row #(r/as-element (row % (fn [serial] (dispatch [:seasons-load serial]))))
;                          :style      {:flex 13}}]
;           [ui/view {:style {:flex 14 :justify-content "center" :align-items "center"}}
;            [activity-indicator {:color "rgb(72, 86, 155)"}]])]))))

(defn serials-content [activity-indicator]
  (let [serials (subscribe [:serials])]
    (fn serials-content-comp []
      [ui/view {:style {:position "absolute"
                        :left 0
                        :right 0
                        :top 0
                        :bottom 0
                        :flex 1 :flex-direction "column" :align-items "stretch"}}
       (if (not (nil? @serials))
         [ui/list-view {:dataSource (.cloneWithRows serials-ds (clj->js @serials))
                        :render-row #(r/as-element (row % (fn [serial] (dispatch [:seasons-load serial]))))
                        :style      {:flex 13}}]
         [ui/view {:style {:flex 14 :justify-content "center" :align-items "center"}}
          [activity-indicator {:color "rgb(72, 86, 155)"}]])])))

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