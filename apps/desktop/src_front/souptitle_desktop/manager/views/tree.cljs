(ns souptitle-desktop.manager.views.tree
  (:require [re-frame.core :refer [dispatch]]
            [cljs-css-modules.macro :refer-macros [defstyle]]))

(defn tree-node [{:keys [content] :as node} node-comp tree]
  [:div
   [:div (node-comp node)]
   (when (not (nil? content))
     [tree content node-comp])])

(defn tree-comp [content node-comp]
  (into [:div]
        (->> content
             (map #(identity [tree-node % node-comp tree-comp])))))

(defn tree [{:keys [content label-comp]}]
  [tree-comp content label-comp nil])

(defstyle style
  [".node" {:font-size "14px"
            :cursor "pointer"}
   ["&:hover" {:background-color "#ccc"}]]
  [".active" {:background-color "#eee"}]
  [".season" {:padding-left "10px"}]
  [".chapter" {:padding-left "20px"}])

(defmulti node (fn [el] (-> el :meta :type)))

(defmethod node :serial [{{:keys [title]} :meta id :id active? :active?}]
  [:div
   {:on-click #(dispatch [:set-active-serial id])
    :class (str (:node style) " " (when active? (:active style)))}
   title])

(defmethod node :season [{{:keys [title]} :meta id :id active? :active?}]
  [:div
   {:on-click #(dispatch [:set-active-season id])
    :class (str (:node style) " " (:season style) " " (when active? (:active style)))}
   title])

(defmethod node :chapter [{{:keys [title]} :meta id :id active? :active?}]
  [:div
   {:on-click #(dispatch [:set-active-chapter id])
    :class (str (:node style) " " (:chapter style) " " (when active? (:active style)))}
   title])
