(ns souptitle-desktop.common.utils.debounce)

(defn debounce
  ([f] (debounce f 1000))
  ([f timeout]
   (let [id (atom nil)]
     (fn [evt]
       (js/clearTimeout @id)
       (reset! id (js/setTimeout
                   (partial f evt)
                   timeout))))))
