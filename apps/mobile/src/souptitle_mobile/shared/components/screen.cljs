(ns souptitle.shared.components.screen
  (:require [camel-snake-kebab.extras :refer [transform-keys]
             camel-snake-kebab :refer [->camelCaseString]
             reagent.core :as r]))

;; TODO: add camel-snake-kebab to deps

(def ExScreen (r/adapt-react-class (js/require "./screen.js")))

(defn check-value [func]
  (fn [[key val]]
    (if (map? val)
      [(->camelCaseString key) (func val)]
      [(->camelCaseString key) val])))

(defn transform-params [params]
  (into {}
        (map params (check-value transform-params))))

(defn screen [route-params children]
  [ExScreen (transform-keys route-params)
   children])
