(ns teach-by-friends.shared.navigation)

(defmacro defscreen
  [screen-component & on-route]
  (let [screen-component-name (gensym)]
    `(let [~screen-component-name (-> ~screen-component var meta :name str)]
       (defmethod teach-by-friends.shared.navigation/on-route
          (keyword ~screen-component-name)
          ~@on-route))))

;(defmacro register
;  [screen-component on-route]
;  `(let [screen-component-name `(-> ~screen-component var meta :name str)]
;     `(teach-by-friends.shared.navigation/register
;        ~screen-component-name
;        `(fn [] `(reagent.core/reactify-component ~screen-component)))
;     `(defmethod teach-by-friends.shared.navigation/on-route
;        `(keyword ~screen-component-name)
;        ~on-route)))
