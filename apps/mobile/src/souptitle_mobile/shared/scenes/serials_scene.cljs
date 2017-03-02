(ns souptitle-mobile.shared.scenes.serials-scene
  (:require [souptitle-mobile.shared.ui :as ui :refer [DataSource]]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [souptitle-mobile.shared.components.serial-row :refer [serial-row]]
            [souptitle-mobile.shared.navigation :as nav]
            [souptitle-mobile.shared.icons :refer [get-icon]]))

(def ReactNative (js/require "react-native"))

(def serials-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn serial-row-lv [navigation serial]
  [serial-row serial
   (fn [serial]
     (dispatch [:seasons-load serial])
     (nav/navigate! navigation :chapter {:title (-> serial (:meta) (:title))}))])

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
         [ui/list-view {:source @serials
                        :render-row (partial serial-row-lv navigation)
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
             :title-style {:color "white"}}
    :card-stack {:gestures-enabled false}
    :gestures-enabled false ;; TODO: looks like it is old version of config
    }
   (serials-content activity-indicator)))
