(ns souptitle-mobile.android.core
  (:require [reagent.core :as r :refer [atom]]
            [souptitle-mobile.handlers]
            [souptitle-mobile.subs]
            [souptitle-mobile.shared.ui :as ui]
            [souptitle-mobile.android.ui :as android-ui]
            [souptitle-mobile.shared.scenes.serials-scene :refer [get-serials-scene]]
            [souptitle-mobile.shared.layouts.root-layout :refer [create-root-layout]]
            [souptitle-mobile.shared.components.timeline :refer [timeline]]))

(enable-console-print!)

(def root-layout (create-root-layout {:background-color "rgb(72, 86, 155)"}))
(def serials-scene (get-serials-scene android-ui/activity-indicator))

(defmulti render-scene (fn [nav] (:route nav)))
(defmethod render-scene :serials
  [{{direction :direction} :props}]
  [root-layout (serials-scene) {:direction direction :time 400}])

(defn app-root []
  (let [tPosition (ui/animated-value 100.0)
        pan-responder (ui/create-pan-responder {:onStartShouldSetPanResponder        (fn [_ _] true)
                                                :onStartShouldSetPanResponderCapture (fn [_ _] true)
                                                :onMoveShouldSetPanResponder         (fn [_ _] true)
                                                :onMoveShouldSetPanResponderCapture  (fn [_ _] true)
                                                :onPanResponderGrant                 (fn [event _]
                                                                                       (print
                                                                                         (ui/animated-set-value tPosition (aget event "nativeEvent" "pageY"))))
                                                :onPanResponderMove                  (fn [event _]
                                                                                       (print
                                                                                         (ui/animated-set-value tPosition (aget event "nativeEvent" "pageY"))))})]

    [ui/view {:style {:flex           1
                      :flex-direction "row"}}
     [timeline (-> {:tPosition          tPosition
                    :countWordsOnScreen 11
                    :timestamps         (clj->js (->> (range 0 70) (map #(str %))))
                    :style              {:flex 1}}
                   (merge (ui/get-pan-handlers pan-responder)))]
     [ui/view {:style {:flex 5}}]]))

;(defn app-root []
;  [ui/navigation {:render-scene render-scene}])

(defn init []
  (.registerComponent ui/app-registry "TeachByFriends" #(r/reactify-component app-root)))
