(ns souptitle-desktop.manager.main
  (:require [souptitle-desktop.manager.views.tree :refer [tree node]]
            [souptitle-desktop.manager.views.content :refer [content]]
            [re-frame.core :refer [subscribe]]))

(defn layout [left right]
  [:div {:style {:display "flex"
                 :flex-direction "row"
                 :height "100%"}}
   [:div {:style {:flex 1}} left]
   [:div {:style {:flex 3 :display "flex"}} right]])

(defn manager []
  (let [tree-structure (subscribe [:get-content])
        active-content (subscribe [:get-active-content])]
    [layout
     [tree {:content @tree-structure
            :label-comp node}]
     [content @active-content]]))
