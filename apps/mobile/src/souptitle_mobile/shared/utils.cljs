(ns souptitle-mobile.shared.utils
  (:require [camel-snake-kebab.core :refer [->camelCase]]))

(defn check-value [func]
  (fn [[key val]]
    (if (map? val)
      [(->camelCase key) (func val)]
      [(->camelCase key) val])))

(defn transform-params [params]
  (into {} (map (check-value transform-params) params)))
