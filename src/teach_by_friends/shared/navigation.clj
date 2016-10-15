(ns teach-by-friends.shared.navigation)

(defmacro defscreen
  [name screen-component settings]
  (let [screen-component-fn (gensym)
        settings-fn (gensym)
        new-screen (gensym)]
    `(let [~screen-component-fn (fn ~(first screen-component) ~@(rest screen-component))
           ~settings-fn (fn ~(first settings) ~@(rest settings))
           ~new-screen (teach-by-friends.shared.navigation/Screen. '~name ~screen-component-fn ~settings-fn)]
       (teach-by-friends.shared.navigation/register-component
         (str '~name)
         (fn [] (reagent.core/reactify-component (teach-by-friends.shared.navigation/get-component ~new-screen))))
       (defmethod teach-by-friends.shared.navigation/on-route
         (keyword ~name) [~(gensym)] ~new-screen)
       (def ~name ~new-screen))))
