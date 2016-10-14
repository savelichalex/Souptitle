(ns teach-by-friends.shared.navigation
  (:require-macros [teach-by-friends.shared.navigation :refer [defscreen]]))

;(def Navigation (.. (js/require "react-native-navigation") -Navigation))
;
;(def register-component (.-registerComponent Navigation))

(defmulti on-route (fn [nav] (:route nav)))