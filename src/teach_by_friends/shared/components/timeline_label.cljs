(ns teach-by-friends.shared.components.timeline-label
  (:require [reagent.core :as r]
            [teach-by-friends.shared.ui :as ui]))

(def st-text
  (r/adapt-react-class
    (ui/Animated.createAnimatedComponent
      (ui/require-native-component "STText" nil))))

(def timeline-label-image (js/require "./images/timeline_label.png"))

(defn timeline-label [{:keys [height top label right]}]
  [ui/animated-view {:style {:position "absolute"
                             :top top
                             :right right
                             :flex 1}}
   [ui/image {:source timeline-label-image
              :style {:width (* 2 height)
                      :height height}}
    [st-text {:stText label :stFontSize 12}]]])