(ns teach-by-friends.shared.components.row
  (:require [teach-by-friends.shared.ui :as ui]
            [clojure.string :refer [capitalize]]))

(defn row [data press-handler]
  (let [data-to-clj (js->clj data :keywordize-keys true)]
    [ui/touchable-opacity {:style    {:border-bottom-width 1
                                      :border-color        "rgba(0,0,0,.1)"
                                      :padding-top         20
                                      :padding-bottom      20
                                      :padding-left        30}
                           :on-press (partial press-handler data-to-clj)}
     [ui/text {:style {:font-size 30 :color "white"}} (capitalize (:title data-to-clj))]]))
