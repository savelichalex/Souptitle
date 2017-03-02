(ns souptitle-mobile.shared.components.serial-row
  (:require [souptitle-mobile.shared.ui :as ui]
            [clojure.string :refer [capitalize]]))

(defn serial-row [{{:keys [cover title]} :meta :as data} press-handler]
  [ui/touchable-opacity {:style    {:position "relative"
                                    :height 100}
                         :on-press (partial press-handler data)}
   [ui/image {:source {:uri cover}
              :resize-mode "cover"
              :style {:width (ui/get-device-width)
                      :height 100}}]
   [ui/linear-gradient {:colors ["rgba(0,0,0,0.6)" "rgba(0,0,0,0)"]
                        :start  {:x 0.0 :y 0.5} :end {:x 1.0 :y 0.5}
                        :style  {:width (ui/get-device-width)
                                 :height 100
                                 :position "absolute"
                                 :top 0}}]
   [ui/view {:style {:background-color "transparent"}}
    [ui/text {:style {:position "absolute"
                      :font-size 14
                      :color "white"
                      :left 16
                      :bottom 10}}
     (capitalize title)]]])
