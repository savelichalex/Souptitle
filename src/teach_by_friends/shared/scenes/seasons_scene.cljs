(ns teach-by-friends.shared.scenes.seasons-scene
  (:require [teach-by-friends.shared.ui :as ui :refer [DataSource]]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [teach-by-friends.shared.components.row :refer [row]]
            [clojure.string :as string]))

(def ReactNative (js/require "react-native"))

(def seasons-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

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
       (str "seasons"))]]])

;(defn get-seasons-scene [activity-indicator]
;  (fn seasons-scene []
;    (let [seasons (subscribe [:seasons])]
;      (fn []
;        [ui/view {:style {:flex 1 :flex-direction "column" :align-items "stretch"}}
;         [nav-bar]
;         (if (not (nil? @seasons))
;           [ui/list-view {:dataSource (.cloneWithRows seasons-ds (clj->js @seasons))
;                          :render-row #(r/as-element (row % (fn [season] (dispatch [:chapters-load season]))))
;                          :style      {:flex 13}}]
;           [ui/view {:style {:flex 14 :justify-content "center" :align-items "center"}}
;            [activity-indicator {:color "rgb(72, 86, 155)"}]])]))))

(defn seasons-content [activity-indicator]
  (let [seasons (subscribe [:seasons])]
    (fn seasons-content []
      [ui/view {:style {:position "absolute"
                        :left 0
                        :right 0
                        :top 0
                        :bottom 0
                        :flex 1
                        :flex-direction "column"
                        :align-items "stretch"}}
       (if (not (nil? @seasons))
         [ui/list-view {:dataSource (.cloneWithRows seasons-ds (clj->js @seasons))
                        :render-row #(r/as-element (row % (fn [season] (dispatch [:chapters-load season]))))
                        :style      {:flex 13}}]
         [ui/view {:style {:flex 14 :justify-content "center" :align-items "center"}}
          [activity-indicator {:color "rgb(72, 86, 155)"}]])])))

(defn back-button []
  [ui/text {:style {:color     "white"
                    :font-size 20}
            :on-press #(dispatch [:back-to-serials])}
   (clojure.string/upper-case "back")])

(defn seasons-title []
  [ui/text {:style {:color     "white"
                    :font-size 30}}
   (clojure.string/upper-case "seasons")])

(defn get-seasons-scene [activity-indicator]
  (fn serials-scene []
    {:nav-bar {:left-button  back-button
               :title        seasons-title
               :right-button nil}
     :content (seasons-content activity-indicator)}))