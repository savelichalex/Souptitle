(ns souptitle-mobile.shared.components.timeline
  (:require [souptitle-mobile.shared.ui :as ui]
            [reagent.core :as r]))

(def timeline
  (r/adapt-react-class
    (ui/Animated.createAnimatedComponent (ui/require-native-component "RCTTimeline" nil))))
