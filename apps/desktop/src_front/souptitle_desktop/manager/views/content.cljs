(ns souptitle-desktop.manager.views.content
  (:require [re-frame.core :refer [dispatch]]
            [reagent.core :as r]
            [souptitle-desktop.common.components.inputview :refer [inputview]]))

(defmulti content (fn [el] (-> el :meta :type)))

(defmethod content :nothing-active [{{:keys [title]} :meta}]
  [:span (str "Choose some in tree")])

(defmethod content :serial [{{:keys [title]} :meta}]
  [:span (str "This is serial: " title)])

(defmethod content :season [{{:keys [title]} :meta}]
  [:span (str "This is season: " title)])

(defn textview [{:keys [value]}]
  (let [state (r/atom (or value ""))]
    (r/create-class
     {:component-will-receive-props
      (fn [_ [_ {:keys [value]}]]
        (reset! state value))
      :reagent-render
      (fn [{:keys [style on-blur]}]
        [:textarea {:style style
                    :value @state
                    :on-change #(reset! state (.. % -target -value))
                    :on-blur #(on-blur @state)}])})))

(defn srt-link []
  (let [link (r/atom "")]
    (fn []
      [:div {:style {:display "flex" :flex-direction "row"}}
       [:input {:style {:flex 3}
                :value @link
                :on-change #(reset! link (.. % -target -value))}]
       [:button {:style {:flex 1}
                 :on-click #(when (not (empty? @link))
                              (dispatch [:load-link-with-srt @link])
                              (reset! link ""))}
        "Load"]])))

(defmethod content :chapter [{{:keys [title src]} :meta}]
  [:div {:style {:flex 1
                 :display "flex"
                 :flex-direction "column"
                 :padding "10px 20px"}}
   [inputview {:style {:font-size "18px"
                       :font-family "Roboto"}
               :value title
               :on-blur #(dispatch [:update-chapter-title %])}]
   [srt-link]
   [textview {:style {:flex 1}
              :value src
              :on-blur #(dispatch [:update-chapter-raw-srt %])}]])
