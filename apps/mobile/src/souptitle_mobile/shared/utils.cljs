(ns souptitle-mobile.shared.utils
  (:require [camel-snake-kebab.core :refer [->camelCaseString]]))

(defn check-value [func]
  (fn [[key val]]
    (if (map? val)
      [(->camelCaseString key) (func val)]
      [(->camelCaseString key) val])))

(defn transform-params [params]
  (-> (into {}
            (map params (check-value transform-params)))
      (clj->js)))
