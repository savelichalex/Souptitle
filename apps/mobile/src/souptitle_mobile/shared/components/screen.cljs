(ns souptitle.shared.components.screen
  (:require [camel-snake-kebab.extras :refer [transform-keys]
             camel-snake-kebab :refer [->camelCaseString]
             reagent.core :as r]))

;; TODO: add camel-snake-kebab to deps

(def ExScreen (r/adapt-react-class (js/require "./screen.js")))

(defn screen [route-params children]
  [ExScreen (transform-keys ->camelCaseString route-params)
   children])
