(ns teach-by-friends.shared.scenes.chapters-scene
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [teach-by-friends.shared.ui :as ui]
            [clojure.string :as string]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch]]
            [teach-by-friends.consts :as const]
            [teach-by-friends.shared.navigation :as nav]
            [teach-by-friends.shared.components.timeline-and-table :refer [timeline-and-table]]))

(def menu-icon-source (js/require "./images/menu-icon.png"))
(def search-icon-source (js/require "./images/search-icon.png"))
(def back-icon-source (js/require "./images/back-icon.png"))
(defn menu-icon [{:keys [style]}]
  [ui/image {:source menu-icon-source :style style}])
(defn search-icon [{:keys [style]}]
  [ui/image {:source search-icon-source :style style}])
(defn back-icon [{:keys [style]}]
  [ui/image {:source back-icon-source :style style}])

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
                         :on-press #(on-change number item)}
   [ui/text {:style {:font-size 14
                     :color (if active? "white" "rgb(155,155,155)")}}
    (inc number)]])

(defn serial-item-bar [seasons-list on-change]
  (let [last-number (count seasons-list)]
    [ui/view {:style {:height 64}}
     (into [ui/scroll-view {:padding-top 10
                            :padding-bottom 10
                            :horizontal                     true
                            :showsHorizontalScrollIndicator false
                            :content-container-style        {:flex        1
                                                             :align-items "stretch"}}]
           (map-indexed
             (fn [index item] [serial-item index last-number item (:active? item) on-change])
             seasons-list))]))

(defn serials-items-bar-creator [blur-view activity-indicator]
  (fn serial-items-bar [seasons-list chapters-list on-change-season on-change-chapter]
    [ui/view {:style {:position       "absolute"
                      :top            0
                      :bottom         0
                      :left           0
                      :right          0
                      :flex           1
                      :flex-direction "column"}}
     [ui/view {:style {:margin-left         13
                       :margin-right        13
                       :border-bottom-width 1
                       :border-bottom-color "rgb(155,155,155)"}}]
     [ui/view {:style {:background-color "black"}}
      [ui/view {:style {:margin-top  17
                        :align-items "center"}}
       [ui/text {:style {:color "white" :font-size 13}} "Season"]]
      (if (nil? seasons-list)
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
      (if (nil? chapters-list)
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


(def ReactNative (js/require "react-native"))

(def chapter-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn sentence-with-term [props sentence raw-term]
  (let [pattern (re-pattern raw-term)
        splited-sentence (string/split sentence pattern)]
    [ui/text props
     [ui/text {:style {:font-size 20 :color "rgba(255,255,255,.6)"}} (first splited-sentence)]
     [ui/text {:style {:font-size 20 :color "white"}} raw-term]
     [ui/text {:style {:font-size 20 :color "rgba(255,255,255,.6)"}} (first (rest splited-sentence))]]))

(defn detailed-term-row [{:keys [term translate]} activity-indicator]
  [ui/view {:style {:padding-left  10
                    :padding-right 10}}
   (if (nil? translate)
     [ui/view {:style {:border-radius    15
                       :background-color "rgb(132, 145, 206)"
                       :padding-top      15
                       :padding-bottom   15
                       :padding-left     15
                       :padding-right    15
                       :flex-direction   "column"
                       :align-items      "stretch"}}

      [ui/text {:style {:font-size 20 :color "white"}} term]
      [ui/view {:style {:justify-content "center"
                        :align-items     "center"}}
       [activity-indicator {:color "white"}]]]
     [ui/view {:style {:border-radius    15
                       :background-color "rgb(132, 145, 206)"
                       :flex-direction   "column"
                       :align-items      "stretch"}}

      [ui/view {:style {:margin-top   15
                        :margin-left  15
                        :margin-right 15}}

       [ui/text {:style {:font-size 20 :color "white" :margin-bottom 10}} term]
       [ui/text {:style {:font-size 20 :color "white" :margin-bottom 10}} (first (:translate translate))]
       [sentence-with-term {:style {:margin-bottom 10}} (:sentence translate) (:raw translate)]]
      [ui/touchable-opacity {:style    {:background-color           "rgb(72, 86, 155)"
                                        :justify-content            "center"
                                        :align-items                "center"
                                        :border-bottom-left-radius  15
                                        :border-bottom-right-radius 15
                                        :padding-top                10
                                        :padding-bottom             10}
                             :on-press #(dispatch [:add-to-well-known term])}
       [ui/text {:style {:color "white"}} "I remember this"]]])])

(def TERM_ROW_HEIGHT 40)

(defn term-row [item]
  [ui/touchable-opacity {:style    {:height          TERM_ROW_HEIGHT
                                    :flex-direction  "column"
                                    :justify-content "center"
                                    :padding-left    13}
                         :on-press #(ui/alert item)}
   [ui/text {:style {:font-size 16 :color "rgb(155,155,155)"}} item]])

(defn back-button []
  [ui/touchable-opacity {:style    {:flex        1
                                    :align-items "center"}
                         :on-press #(dispatch [:back-to-seasons])}
   [back-icon {:style {:width 20 :height 20}}]])

(defn chapter-title []
  (let [title (subscribe [:season-title])
        show-search? (subscribe [:show-search?])]
    (if (not @show-search?)
      [ui/text {:style {:color     "white"
                        :font-size 30}}
       (string/upper-case
         (str "season " @title))]
      [ui/view {:style {:position    "absolute"
                        :top         0
                        :left        5
                        :right       5
                        :bottom      0
                        :flex        5
                        :align-items "stretch"}}
       [ui/view {:style {:border-radius    15
                         :background-color "white"
                         :padding-left     15
                         :padding-right    15}}
        [ui/text-input {:auto-capitalize "none"
                        :style           {:color  "rgb(72, 86, 155)"
                                          :height 30}
                        :on-change-text  #(dispatch [:change-search-predicate %])}]]])))

(defn right-button []
  [ui/touchable-opacity {:style    {:flex        1
                                    :align-items "center"}
                         :on-press #(dispatch [:toggle-search])}
   [search-icon {:style {:width 15 :height 15}}]])

(defn sort-row [sort-type]
  [ui/view {:style {:margin-left         13
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
    [ui/text {:style {:color (if (= sort-type :by-rank) "white" "rgb(155,155,155)")}} "Timeline"]]
   [ui/touchable-opacity {:style    {:flex            1
                                     :align-items     "center"
                                     :justify-content "center"
                                     :padding-top     13
                                     :padding-bottom  13}
                          :on-press #(dispatch [:resort-chapter :by-alphabet])}
    [ui/text {:style {:color (if (= sort-type :by-alphabet) "white" "rgb(155,155,155)")}} "Alphabet"]]])

(defn on-navigator-event [nav event]
  (when (= (.-type event) "NavBarButtonPress")
    (when (= (.-id event) "toggle")
      (dispatch [:save-seasons-and-chapters])
      (nav/show-modal! nav :serial-bars-screen {}))))

(defn on-bars-navigator-event [nav event]
  (when (= (.-type event) "NavBarButtonPress")
    (when (= (.-id event) "close")
      (dispatch [:reset-seasons-and-chapter])
      (nav/dismiss-modal! nav "none"))))

(defn serial-bars-creator [blur-view activity-view]
  (let [serial-items-bar (serials-items-bar-creator blur-view activity-view)]
    (fn [{:keys [navigator]}]
      (let [seasons (subscribe [:seasons])
            chapters (subscribe [:chapters])]
        (. navigator (setOnNavigatorEvent (partial on-bars-navigator-event navigator)))
        (fn []
          [serial-items-bar
           @seasons
           @chapters
           #(do
             (dispatch [:chapters-load %1 %2]))
           #(do
             (dispatch [:chapter-load %1 %2])
             (nav/dismiss-modal! navigator "none"))
           navigator])))))

(defn chapters-content [activity-indicator]
  (let [chapters (subscribe [:chapters])
        chapter (subscribe [:get-chapter])
        sort-type (subscribe [:get-sort-type])
        chapter-terms (reaction (map #(:term %) @chapter))]
    (fn [{:keys [navigator]}]
      (. navigator (setOnNavigatorEvent (partial on-navigator-event navigator)))
      (fn chapters-content-comp [{:keys [navigator]}]
        [ui/view {:style {:position         "absolute"
                          :left             0
                          :right            0
                          :top              0
                          :bottom           0
                          :flex             1
                          :padding-bottom   2
                          :flex-direction   "column"
                          :align-items      "stretch"
                          :background-color "black"}}
         [sort-row @sort-type]
         [ui/view {:style {:flex     1
                           :position "relative"}}
          (if (not (empty? @chapter))
            [timeline-and-table {:style           {:flex           1
                                                   :flex-direction "row"}
                                 :render-row      #(identity [term-row (nth @chapter-terms %)])
                                 :chapter         @chapter-terms
                                 :term-row-height TERM_ROW_HEIGHT}]
            [ui/view {:style {:flex             1
                              :background-color "black"
                              :justify-content  "center"
                              :align-items      "center"}}
             [activity-indicator {:color "rgb(155, 155, 155)"}]])]]))))

(defn get-chapters-scene [activity-indicator]
  (fn chapters-scene []
    {:nav-bar {:left-button  back-button
               :title        chapter-title
               :right-button right-button}
     :content (chapters-content activity-indicator)}))