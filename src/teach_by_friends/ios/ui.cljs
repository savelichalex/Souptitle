(ns teach-by-friends.ios.ui
  (:require [reagent.core :as r]))

(def ReactNative (js/require "react-native"))

(def activity-indicator (r/adapt-react-class (. ReactNative -ActivityIndicatorIOS)))