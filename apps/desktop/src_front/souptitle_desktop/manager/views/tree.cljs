(ns souptitle-desktop.manager.views.tree
  (:require [re-frame.core :refer [dispatch]]))

(defn tree-node [{:keys [content] :as node} node-comp tree]
  [:div
   [:div (node-comp node)]
   (when (not (nil? content))
     [tree content node-comp {:padding-left "10px"}])])

(defn tree-comp [content node-comp style]
  (into [:div {:style style}]
        (->> content
             (map #(identity [tree-node % node-comp tree-comp])))))

(defn tree [{:keys [content label-comp]}]
  [tree-comp content label-comp nil])

(defmulti node (fn [el] (-> el :meta :type)))

(defmethod node :serial [{{:keys [title]} :meta id :id active? :active?}]
  [:span
   {:on-click #(dispatch [:set-active-serial id])
    :style {:color (if active? "red" "black")}}
   (str "Serial: " title)])

(defmethod node :season [{{:keys [title]} :meta id :id active? :active?}]
  [:span
   {:on-click #(dispatch [:set-active-season id])
    :style {:color (if active? "red" "black")}}
   (str "Season: " title)])

(defmethod node :chapter [{{:keys [title]} :meta id :id active? :active?}]
  [:span
   {:on-click #(dispatch [:set-active-chapter id])
    :style {:color (if active? "red" "black")}}
   (str "Chapter: " title)])
