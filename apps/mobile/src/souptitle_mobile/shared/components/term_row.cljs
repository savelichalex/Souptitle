(ns souptitle-mobile.shared.components.term-row
  (:require [souptitle-mobile.shared.ui :as ui]
            [souptitle-mobile.consts :as const]))

(defn term-row [item on-press]
  (let [term (:term item)]
    [ui/touchable-opacity {:style    {:height          const/TERM_ROW_HEIGHT
                                      :flex-direction  "column"
                                      :justify-content "center"
                                      :padding-left    13}
                           :on-press on-press}
     [ui/text {:style {:font-size 16 :color "rgb(155,155,155)"}} term]]))
