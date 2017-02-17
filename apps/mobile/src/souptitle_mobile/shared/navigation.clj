(ns souptitle-mobile.shared.navigation)

(defmacro defscreen
  [name screen-component settings]
  (let [screen-component-fn (gensym)
        settings-fn (gensym)
        new-screen (gensym)]
    `(let [~screen-component-fn (fn ~(first screen-component) ~@(rest screen-component))
           ~settings-fn (fn ~(first settings) ~@(rest settings))
           ~new-screen (souptitle-mobile.shared.navigation/Screen. ~(str name) ~screen-component-fn ~settings-fn)]
       (souptitle-mobile.shared.navigation/register-component
         ~(str name)
         (fn [] (reagent.core/reactify-component (souptitle-mobile.shared.navigation/get-component ~new-screen))))
       (defmethod souptitle-mobile.shared.navigation/on-route
         ~(keyword name) [~(gensym)] ~new-screen)
       (def ~name ~new-screen))))
