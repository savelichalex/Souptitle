(ns teach-by-friends.shared.components.timeline
  (:require [teach-by-friends.shared.ui :as ui]
            [reagent.core :as r]))

(def timeline
  (r/adapt-react-class
    (ui/Animated.createAnimatedComponent (ui/require-native-component "RCTTimeline" nil))))