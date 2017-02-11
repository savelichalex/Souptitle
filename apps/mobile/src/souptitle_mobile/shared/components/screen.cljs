(ns souptitle-mobile.shared.components.screen
  (:require [reagent.core :as r]
            [souptitle-mobile.shared.utils :refer [transform-params]]))

;; TODO: add camel-snake-kebab to deps

(def ExScreen (r/adapt-react-class (js/require "./screen.js")))

(defn screen [route-params children]
  [ExScreen (transform-params route-params)
   children])
