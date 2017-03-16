(ns souptitle-desktop.common.components.icon)

(defn get-rotate-class [{rotate :rotate}]
  (if (not (number? rotate))
    ""
    (str " fa-rotate-" rotate)))

(defn icon [type props]
  [:i
   (-> (or props {})
       (dissoc :rotate)
       (merge {:class (str
                       "fa fa-" (name type)
                       (get-rotate-class props))}))])
