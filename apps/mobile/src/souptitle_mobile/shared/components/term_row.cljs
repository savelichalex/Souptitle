(ns teach-by-friends.shared.components.term-row
  (:require [teach-by-friends.shared.ui :as ui]
            [teach-by-friends.consts :as const]))

(defn term-row [item on-press]
  (let [term (:term item)]
    [ui/touchable-opacity {:style    {:height          const/TERM_ROW_HEIGHT
                                      :flex-direction  "column"
                                      :justify-content "center"
                                      :padding-left    13}
                           :on-press on-press}
     [ui/text {:style {:font-size 16 :color "rgb(155,155,155)"}} term]]))