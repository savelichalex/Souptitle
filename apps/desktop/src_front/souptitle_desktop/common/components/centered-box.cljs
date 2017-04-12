(ns souptitle-desktop.common.components.centered-box
  (:require [cljs-css-modules.macro :refer-macros [defstyle]]))

(defstyle style
  [".wrapper" {:flex 1
               :display "flex"
               :align-items "center"
               :justify-content "center"}]
  [".outter" {:width "50%"
              :padding-top "50%"
              :position "relative"}]
  [".inner" {:position "absolute"
             :top 0
             :left 0
             :right 0
             :bottom 0
             :display "flex"
             :align-items "stretch"}])

(defn centered-box
  ([children]
   (centered-box {} children))
  ([props & children]
   [:div {:class (:wrapper style)}
    [:div {:class (:outter style)}
     [:div (-> props
               (merge {:class (:inner style)}))
      children]]]))
