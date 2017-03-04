(ns souptitle-mobile.shared.scenes.chapters-scene
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [souptitle-mobile.shared.ui :as ui]
            [clojure.string :as string]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch]]
            [souptitle-mobile.consts :as const]
            [souptitle-mobile.shared.navigation :as nav]
            [souptitle-mobile.shared.icons :refer [get-icon]]
            [souptitle-mobile.shared.components.term-row :refer [term-row]]
            [souptitle-mobile.shared.components.timeline-and-table :refer [timeline-and-table]]
            [souptitle-mobile.shared.components.translate-modal :refer [translate-modal]]))

(defn serial-item [number last-number item active? on-change]
  [ui/touchable-opacity {:style    {:justify-content  "center"
                                    :align-items      "center"
                                    :width 44
                                    :height 44
                                    :border-radius 22
                                    :border-top-width (if active? 1 0)
                                    :border-top-color "white"
                                    :border-right-width (if active? 1 0)
                                    :border-right-color "white"
                                    :border-bottom-width (if active? 1 0)
                                    :border-bottom-color "white"
                                    :border-left-width (if active? 1 0)
                                    :border-left-color "white"
                                    :margin-right     (when (not= (dec last-number) number)
                                                        25)
                                    :background-color "transparent"}
                         :on-press #(on-change item)}
   [ui/text {:style {:font-size 14
                     :color (if active? "white" "rgb(155,155,155)")}}
    (inc number)]])

(defn serial-item-bar [seasons-list on-change]
  (let [last-number (count seasons-list)]
    [ui/view {:style {:height 64}}
     (into [ui/scroll-view {:padding-top 10
                            :padding-bottom 10
                            :horizontal                     true
                            :showsHorizontalScrollIndicator false}]
           (map-indexed
             (fn [index item] [serial-item index last-number item (:active? item) on-change])
             seasons-list))]))

(defn serials-items-bar-creator [blur-view activity-indicator]
  (fn serial-items-bar [seasons-list chapters-list on-close on-change-season on-change-chapter]
    [ui/view {:style {:position       "absolute"
                      :top            0
                      :bottom         0
                      :left           0
                      :right          0
                      :flex           1
                      :flex-direction "column"}}
     [ui/view
      {:style {:background-color "black"
               :flex-direction "row"
               :height 64
               :padding-top 20
               :align-items "center"}}
      [ui/touchable-opacity
       {:style {:padding-left 15
                :width 44}
        :on-press on-close}
       [ui/image {:source (get-icon :close)}]]
      [ui/view
       {:style {:flex 1
                :flex-direction "row"
                :justify-content "center"}}
       [ui/text
        {:style {:font-size 18
                 :color "white"}}
        "Episode selection"]]
      [ui/view
       {:style {:width 44}}]]
     [ui/view {:style {:background-color "black"}}
      [ui/view {:style {:margin-left         13
                        :margin-right        13
                        :border-bottom-width 1
                        :border-bottom-color "rgb(155,155,155)"}}]]
     [ui/view {:style {:background-color "black"}}
      [ui/view {:style {:margin-top  17
                        :align-items "center"}}
       [ui/text {:style {:color "white" :font-size 13}} "Season"]]
      (if (empty? seasons-list)
        [ui/view {:style {:height 64
                          :align-items "center"
                          :justify-content "center"}}
         [activity-indicator {:color "rgb(155, 155, 155)"}]]
        [serial-item-bar seasons-list on-change-season])
      [ui/view {:style {:margin-left         13
                        :margin-right        13
                        :border-bottom-width 1
                        :border-bottom-color "rgb(155,155,155)"}}]
      [ui/view {:style {:margin-top  17
                        :align-items "center"}}
       [ui/text {:style {:color "white" :font-size 13}} "Episode"]]
      (if (empty? chapters-list)
        [ui/view {:style {:height 64
                          :align-items "center"
                          :justify-content "center"}}
         [activity-indicator {:color "rgb(155, 155, 155)"}]]
        [serial-item-bar chapters-list on-change-chapter])
      [ui/view {:style {:border-bottom-width 1
                        :border-bottom-color "rgb(155,155,155)"}}]]
     [blur-view {:style     {:flex             1
                             :background-color "transparent"}
                 :blur-type "dark"}]]))

(defn sort-row [sort-type]
  [ui/view {:style {:margin-top 64
                    :margin-left         13
                    :margin-right        13
                    :margin-bottom       2
                    :border-top-width    1
                    :border-top-color    "rgb(155,155,155)"
                    :border-bottom-width 1
                    :border-bottom-color "rgb(155,155,155)"
                    :flex-direction      "row"}}
   [ui/touchable-opacity {:style    {:flex            1
                                     :align-items     "center"
                                     :justify-content "center"
                                     :padding-top     13
                                     :padding-bottom  13}
                          :on-press #(dispatch [:resort-chapter :by-rank])}
    [ui/text {:style {:color (if (= sort-type :by-rank) "white" "rgb(155,155,155)")
                      :background-color "transparent"}}
     "Timeline"]]
   [ui/touchable-opacity {:style    {:flex            1
                                     :align-items     "center"
                                     :justify-content "center"
                                     :padding-top     13
                                     :padding-bottom  13}
                          :on-press #(dispatch [:resort-chapter :by-alphabet])}
    [ui/text {:style {:color (if (= sort-type :by-alphabet) "white" "rgb(155,155,155)")
                      :background-color "transparent"}}
     "Alphabet"]]])

(defn serial-bars-modal [blur-view activity-view]
  (let [serial-items-bar (serials-items-bar-creator blur-view activity-view)
        seasons (subscribe [:seasons])
        chapters (subscribe [:chapters])
        show-bars? (subscribe [:show-serial-bars?])]
    (fn []
      [ui/modal
       {:visible @show-bars?
        :transparent true
        :animation-type "fade"}
       [serial-items-bar
        @seasons
        @chapters
        #(dispatch [:toggle-serials-bars])
        #(do
           (dispatch [:chapters-load %]))
        #(do
           (dispatch [:chapter-load %])
           (dispatch [:toggle-serials-bars]))]])))

(defn serial-cover [image-uri sort-type]
  (let [height (r/atom 0)
        on-layout (fn [event _] (swap! height (fn [_] (.. event -nativeEvent -layout -height))))]
    (fn serial-cover-comp [image-uri sort-type]
      [ui/view {:style {:position "relative"}
                :on-layout on-layout}
       (when (not (nil? image-uri))
         [ui/image {:source {:uri image-uri}
                    :resize-mode "cover"
                    :style {:width (ui/get-device-width)
                            :height @height
                            :position "absolute"
                            :top 0}}])
       [ui/linear-gradient {:colors ["rgba(0,0,0,1)" "rgba(0,0,0,0.3)"]
                            :start  {:x 0.5 :y 1.0} :end {:x 0.5 :y 0.0}
                            :style  {:width (ui/get-device-width)
                                     :height @height
                                     :position "absolute"
                                     :top 0}}]
       [sort-row sort-type]])))

(defn chapters-content [blur-view activity-indicator]
  (let [chapter (subscribe [:get-chapter])
        sort-type (subscribe [:get-sort-type])
        timeline-list (subscribe [:get-timeline-list])
        cover (subscribe [:get-cover-image])]
    (fn chapters-content-comp [{:keys [navigation]}]
      [ui/view {:style {:flex 1
                        :padding-bottom   2
                        :flex-direction   "column"
                        :align-items      "stretch"
                        :background-color "black"
                        :position "relative"}}
       [serial-cover @cover @sort-type]
       [ui/view {:style {:flex     1
                         :position "relative"}}
        (if (not (empty? @chapter))
          [timeline-and-table {:style           {:flex           1
                                                 :flex-direction "row"}
                               :render-row      (fn [index]
                                                  (if (< index (count @chapter))
                                                    [term-row
                                                     (nth @chapter index)
                                                     #(dispatch [:translate-term (nth @chapter index)])]
                                                    [term-row
                                                     {:term ""}]))
                               :chapter         @chapter
                               :timeline-list   @timeline-list
                               :term-row-height const/TERM_ROW_HEIGHT}]
          [ui/view {:style {:flex             1
                            :background-color "black"
                            :justify-content  "center"
                            :align-items      "center"}}
           [activity-indicator {:color "rgb(155, 155, 155)"}]])]
       [serial-bars-modal blur-view activity-indicator]
       [translate-modal blur-view activity-indicator]])))

(defn chapter-nav-left-button [go-back]
  (r/as-element
   [ui/touchable-opacity
    {:on-press #(go-back)
     :style {:padding-left 15}}
    [ui/image {:source (get-icon :back)}]]))

(defn chapter-nav-right-button []
  (r/as-element
   [ui/touchable-opacity
    {:on-press #(dispatch [:toggle-serials-bars])
     :style {:padding-right 15}}
    [ui/image {:source (get-icon :episodes)}]]))

(defn get-screen-header [{:keys [goBack]}]
  {:style {:background-color "transparent"
           :position "absolute"
           :top 20 ;; TODO: Should various depend on platform
           :left 0
           :right 0
           :paddingTop 0
           }
   :title-style {:color "white"}
   :left (chapter-nav-left-button goBack)
   :right (chapter-nav-right-button)})

(defn get-chapter-screen [blur-view activity-indicator]
  (nav/create-screen
   {:title #(str (-> % .-state .-params .-title string/capitalize))
    :header (nav/screen-cb get-screen-header)
    :card-stack {:gestures-enabled false}
    :gestures-enabled false ;; TODO: looks like it is old version of config
    }
   (chapters-content blur-view activity-indicator)))
