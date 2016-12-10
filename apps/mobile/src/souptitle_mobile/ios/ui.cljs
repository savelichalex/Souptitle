(ns teach-by-friends.ios.ui
  (:require [reagent.core :as r]
            [teach-by-friends.shared.ui :as ui]))

(def activity-indicator (r/adapt-react-class (. ui/ReactNative -ActivityIndicatorIOS)))

(def react-native-blur (js/require "react-native-blur"))
(def blur-view (r/adapt-react-class (. react-native-blur -BlurView)))
(def vibrancy-view (r/adapt-react-class (. react-native-blur -VibrancyView)))