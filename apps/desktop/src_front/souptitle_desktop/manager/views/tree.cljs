(ns souptitle-desktop.manager.views.tree
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch]]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [souptitle-desktop.common.components.icon :refer [icon]]))

(defn tree-node [{:keys [content] :as node} node-comp tree]
  (let [toggled? (r/atom false)]
    (fn [{:keys [content] :as node} node-comp tree]
      [:div
       [:div
        (when (not (nil? content))
          [:div
           {:on-click #(swap! toggled? not)}
           [icon :angle-right
            {:rotate (and @toggled? 90)
             :style {:float "left"
                     :padding "0 5px"}}]])
        (node-comp node)]
       (when (not (nil? content))
         [tree content node-comp @toggled?])])))

(defn tree-comp [content node-comp toggled?]
  (into [:div {:style {:height (if toggled? "inherit" "0")
                       :overflow "hidden"}}]
        (->> content
             (map #(identity [tree-node % node-comp tree-comp])))))

(defn tree [{:keys [content label-comp]}]
  [tree-comp content label-comp true])

(defstyle style
  [".node" {:font-size "14px"
            :font-family "Roboto"
            :padding "8px"
            :cursor "pointer"
            :transition "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"}
   ["&:hover" {:background-color "#ccc"}]]
  [".active" {:background-color "#eee"}]
  [".season" {:padding-left "18px"}]
  [".chapter" {:padding-left "28px"}])

(defmulti node (fn [el] (-> el :meta :type)))

(defmethod node :serial [{{:keys [title]} :meta id :id active? :active?}]
  [:div
   {:on-click #(dispatch [:set-active-serial id])
    :class (str (:node style) " " (when active? (:active style)))}
   [icon :television]
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
