(ns teach-by-friends.shared.navigation)

(defmacro defscreen
  [name screen-component & on-route]
  `(do
     (teach-by-friends.shared.navigation/register-component
       (str '~name)
       (fn [] (reagent.core/reactify-component ~screen-component)))
     (defmethod teach-by-friends.shared.navigation/on-route
       (keyword ~name)
       ~@on-route)
     (def ~name {:screen-name (str '~name) :fn ~screen-component})))
