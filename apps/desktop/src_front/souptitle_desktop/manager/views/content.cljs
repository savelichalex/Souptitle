(ns souptitle-desktop.manager.views.content
  (:require [re-frame.core :refer [dispatch]]
            [reagent.core :as r]
            [cljs-css-modules.macro :refer-macros [defstyle]]
            [souptitle-desktop.common.components.inputview :refer [inputview]]
            [souptitle-desktop.common.components.centered-box :refer [centered-box]]
            [souptitle-desktop.common.components.dropzone :refer [dropzone]]
            [souptitle-desktop.common.components.cropper :refer [cropper]]))

(defstyle style
  [".dropzone" {:border "2px dashed #ccc"
                :border-radius "5px"
                :flex 1
                :display "flex"
                :align-items "center"
                :justify-content "center"}]
  [".dropzone-accepted" {:border "2px dashed #9cf49c"}]
  [".dropzone-rejected" {:border "2px dashed #f39389"}])

(defmulti content (fn [el] (-> el :meta :type)))

(defmethod content :nothing-active [{{:keys [title]} :meta}]
  [:span (str "Choose some in tree")])

(defn serial-dropzone []
  (let [loading? (r/atom false)]
    (fn []
      [centered-box
       [dropzone {:class (:dropzone style)
                  :accepted-class (:dropzone-accepted style)
                  :rejected-class (:dropzone-rejected style)
                  :accepted? #(-> (re-find #"png|jpeg" %)
                                  (some?))
                  :on-file-will-load #(reset! loading? true)
                  :on-file-loaded #(dispatch [:loaded-serial-cover %])}
        [:div
         [:span
          (if @loading?
            "Loading..."
            "Drop file here")]]]])))


(defmethod content :serial [{{:keys [title cover]} :meta}]
  [:div {:style {:flex 1
                 :display "flex"
                 :flex-direction "column"}}
   [:span (str "This is serial: " title)]
   (if (some? cover)
     [centered-box
      {:space 80}
      [cropper {:src (:url cover)
                :on-crop #(dispatch [:update-serial-crop-data %])
                :crop-props {:data (clj->js (:crop-data cover))
                             :aspectRatio 1.9}}]]
     [serial-dropzone])])

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
   [srt-link]
   [textview {:style {:flex 1}
              :value src
              :on-blur #(dispatch [:update-chapter-raw-srt %])}]])
