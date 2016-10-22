(ns teach-by-friends.android.core
  (:require [reagent.core :as r :refer [atom]]
            [teach-by-friends.handlers]
            [teach-by-friends.subs]
            [teach-by-friends.shared.ui :as ui]
            [teach-by-friends.android.ui :as android-ui]
            [teach-by-friends.shared.scenes.serials-scene :refer [get-serials-scene]]
            [teach-by-friends.shared.scenes.chapters-scene :refer [get-chapters-scene]]
            [teach-by-friends.shared.layouts.root-layout :refer [create-root-layout]]
            [teach-by-friends.shared.components.timeline :refer [timeline]]))

(enable-console-print!)

(def root-layout (create-root-layout {:background-color "rgb(72, 86, 155)"}))
(def serials-scene (get-serials-scene android-ui/activity-indicator))
(def chapters-scene (get-chapters-scene android-ui/activity-indicator))

(defmulti render-scene (fn [nav] (:route nav)))
(defmethod render-scene :serials
  [{{direction :direction} :props}]
  [root-layout (serials-scene) {:direction direction :time 400}])

(defmethod render-scene :chapters
  [{{direction :direction} :props}]
  [root-layout (chapters-scene) {:direction direction :time 400}])

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
