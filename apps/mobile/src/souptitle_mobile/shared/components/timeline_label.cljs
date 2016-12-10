(ns teach-by-friends.shared.components.timeline-label
  (:require [reagent.core :as r]
            [teach-by-friends.shared.ui :as ui]))

(def st-text
  (r/adapt-react-class
    (ui/Animated.createAnimatedComponent
      (ui/require-native-component "STText" nil))))

(def timeline-label-image (js/require "./images/timeline_label.png"))

(defn timeline-label [{:keys [height top label right]}]
  (print st-text)
  [ui/animated-view {:style {:position "absolute"
                             :top top
                             :right right
                             :flex 1}}
   [ui/image {:source timeline-label-image
              :style {:width (+ (* 2 height) 5)
                      :height height
                      :flex 1
                      :align-items "center"
                      :justify-content "center"}}
    [st-text {:style {:height (/ height 2)
                      :width (* (+ (* 2 height) 5) 0.6)
                      :margin-left -5}
              :stText label
              :stFontSize 10}]]])
