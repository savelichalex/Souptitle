(ns souptitle-mobile.android.ui
  (:require [reagent.core :as r]
            [souptitle-mobile.shared.ui :as ui]))

(def ReactNative (js/require "react-native"))

(def activity-indicator (r/adapt-react-class (. ui/ReactNative -ActivityIndicator)))

(def react-native-blur (js/require "react-native-blur"))
(def blur-view (r/adapt-react-class (. react-native-blur -BlurView)))
(def vibrancy-view (r/adapt-react-class (. react-native-blur -VibrancyView)))
