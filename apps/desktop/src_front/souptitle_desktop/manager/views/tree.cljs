(ns souptitle-desktop.manager.views.tree
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch]]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [souptitle-desktop.common.components.icon :refer [icon]]
            [souptitle-desktop.common.components.inputview :refer [inputview]]))

(defn tree-node [{:keys [content] :as node} node-comp tree]
  (let [toggled? (r/atom false)]
    (fn [{:keys [content] :as node} node-comp tree]
      [:div
       [:div
        (node-comp
         node
         (when (not (nil? content))
           [:div
            {:on-click #(swap! toggled? not)
             :style {:padding-right "5px"}}
            [icon :angle-right
             {:rotate (and @toggled? 90)}]]))]
       (when (not (nil? content))
         [tree content node-comp @toggled?])])))

(defn tree-comp [content node-comp toggled?]
  (into [:div {:style {:height (if toggled? "inherit" "0")
                       :overflow "hidden"}}]
        (->> content
             (map #(identity [tree-node % node-comp tree-comp])))))

(defstyle style
  [".node" {:font-size "14px"
            :font-family "Roboto"
            :padding "8px"
            :cursor "pointer"
            :transition "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms"
            :display "flex"
            :flex-direction "row"
            :align-items "center"
            :color "#aabac7"}
   ["&:hover" {:background-color "#1c232d"}]]
  [".node-inner" {:flex 1
                  :display "flex"
                  :flex-direction "row"}]
  [".active" {:background-color "#242d3a"
              :color "#fff"}]
  [".season" {:padding-left "18px"}]
  [".chapter" {:padding-left "38px"}]
  [".settings" {:display "flex"
                :flex-direction "row"
                :padding "5px 8px"}]
  [".add-icon" {:color "#aabac7"
                :font-size "14px"}
   ["&:hover" {:color "#fff"
               :cursor "pointer"}]])

(defn add-icon [type]
  [:div {:class (:add-icon style)
         :on-click #(dispatch [type])}
   [icon :plus]])

(defn settings-bar []
  [:div {:class (:settings style)}
   [:div {:style {:flex 1}}]
   [add-icon :add-new-serial]])

(defn tree [{:keys [content label-comp]}]
  [:div {:style {:background-color "#303945"
                 :display "flex"
                 :flex 1
                 :flex-direction "column"}}
   [settings-bar]
   [tree-comp content label-comp true]])

(defn node-title [{:keys [change-event-type title]}]
  (let [as-input? (r/atom false)]
    (fn [{:keys [change-event-type title]}]
      (if @as-input?
        [:div {:style {:flex 1}}
         [inputview {:style {:border "none"
                             :background "transparent"
                             :color "#fff"
                             :font-size "14px"
                             :outline "none"
                             :width "100%"
                             :height "14px"}
                     :on-blur #(do
                                 (dispatch [change-event-type %])
                                 (reset! as-input? false))
                     :value title
                     :autofocus true}]]
        [:span
         {:on-double-click #(reset! as-input? true)}
         title]))))

(defmulti node (fn [el] (-> el :meta :type)))

(defmethod node :serial [{{:keys [title]} :meta id :id active? :active?} shevron]
  [:div
   {:on-click #(dispatch [:set-active-serial id])
    :class (str (:node style) " " (when active? (:active style)))}
   [:div {:class (:node-inner style)}
    shevron
    [node-title {:change-event-type :update-serial-title
                 :title title}]]
   (when active?
     [add-icon :add-new-season])])

(defmethod node :season [{{:keys [title]} :meta id :id active? :active?} shevron]
  [:div
   {:on-click #(dispatch [:set-active-season id])
    :class (str (:node style) " " (:season style) " " (when active? (:active style)))}
   [:div {:class (:node-inner style)}
    shevron
    [node-title {:change-event-type :update-season-title
                 :title title}]]
   (when active?
     [add-icon :add-new-chapter])])

(defmethod node :chapter [{{:keys [title]} :meta id :id active? :active?} shevron]
  [:div
   {:on-click #(dispatch [:set-active-chapter id])
    :class (str (:node style) " " (:chapter style) " " (when active? (:active style)))}
   shevron
   [node-title {:change-event-type :update-chapter-title
                :title title}]])
