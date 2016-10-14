(ns teach-by-friends.shared.navigation
  (:require [cljs.analyzer.api :refer [resolve]]))

(defmacro get-component-name
  [fn]
  (-> (resolve &env fn) :name str))

(defmacro defscreen
  [screen-component & on-route]
  (let [screen-component-name (gensym)]
    `(let [~screen-component-name (get-component-name ~screen-component)]
       (teach-by-friends.shared.navigation/register-component
         ~screen-component-name
         (fn [] (reagent.core/reactify-component ~screen-component)))
       (defmethod teach-by-friends.shared.navigation/on-route
          (keyword ~screen-component-name)
          ~@on-route))))
