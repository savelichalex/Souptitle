(ns teach-by-friends.shared.components.term-row
  (:require [teach-by-friends.shared.ui :as ui]
            [re-frame.core :refer [dispatch]]))

(defn term-row [term]
  [ui/touchable-highlight {:style    {:border-bottom-width 1
                                      :border-color        "#000"
                                      :padding-top         10
                                      :padding-bottom      10
                                      :align-items         "center"}
                           :on-press #(dispatch [:nav/term term])}
   [ui/text {:style {:font-size 20 :color "#000"}} term]])