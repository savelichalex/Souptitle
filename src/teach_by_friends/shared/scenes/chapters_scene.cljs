(ns teach-by-friends.shared.scenes.chapters-scene
  (:require [teach-by-friends.shared.ui :as ui]
            [clojure.string :as string]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch]]
            [teach-by-friends.consts :as const]))

(def menu-icon-source (js/require "./images/menu-icon.png"))
(def search-icon-source (js/require "./images/search-icon.png"))
(defn menu-icon [{:keys [style]}]
  [ui/image {:source menu-icon-source :style style}])
(defn search-icon [{:keys [style]}]
  [ui/image {:source search-icon-source :style style}])

(defn season-bar-item [style number last-number item on-change]
  [ui/touchable-opacity {:style    {:justify-content  "center"
                                    :align-items      "center"
                                    :padding-left     10
                                    :padding-right    10
                                    :margin-right     (when (not= (dec last-number) number)
                                                        25)
                                    :background-color "transparent"}
                         :on-press #(on-change number item)}
   [ui/text {:style (-> style
                        (merge {:font-size 25}))}
    (inc number)]])

(defn seasons-bar [seasons-list on-change]
  (let [last-number (count seasons-list)]
    [ui/view {:style {:flex             1
                      :border-radius    15
                      :margin-top       -15
                      :background-color "rgb(132, 145, 206)"}}
     (into [ui/scroll-view {:horizontal                     true
                            :showsHorizontalScrollIndicator false
                            :content-container-style        {:flex          1
                                                             :align-items   "stretch"
                                                             :padding-left  15
                                                             :padding-right 15}}]
           (map-indexed
             (fn [index item] (if (:active? item)
                                [season-bar-item
                                 {:color "rgb(72, 86, 155)"}
                                 index
                                 last-number
                                 item
                                 on-change]
                                [season-bar-item
                                 {:color "white"}
                                 index
                                 last-number
                                 item
                                 on-change]))
             seasons-list))]))

(def ReactNative (js/require "react-native"))

(def chapter-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn sentence-with-term [props sentence raw-term]
  (let [pattern (re-pattern raw-term)
        splited-sentence (string/split sentence pattern)]
    [ui/text props
     [ui/text {:style {:font-size 20 :color "rgba(255,255,255,.6)"}} (first splited-sentence)]
     [ui/text {:style {:font-size 20 :color "white"}} raw-term]
     [ui/text {:style {:font-size 20 :color "rgba(255,255,255,.6)"}} (first (rest splited-sentence))]]))

(defn term-row [{:keys [status term translate]} activity-indicator]
  (if (= status const/ACTIVE_TERM)
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
         [ui/text {:style {:color "white"}} "I remember this"]]])]

    [ui/touchable-opacity {:style    {:border-bottom-width 1
                                      :border-color        "rgba(0,0,0,.1)"
                                      :padding-top         20
                                      :padding-bottom      20
                                      :padding-left        30}
                           :on-press #(dispatch [:translate-term term])}
     [ui/text {:style {:font-size 20 :color "rgb(72, 86, 155)"}} term]]))

(defn back-button []
  [ui/text {:style    {:color     "white"
                       :font-size 20}
            :on-press #(dispatch [:back-to-seasons])}
   (clojure.string/upper-case "back")])

(defn chapter-title []
  (let [title (subscribe [:season-title])
        show-search? (subscribe [:show-search?])]
    (if (not @show-search?)
      [ui/text {:style {:color     "white"
                        :font-size 30}}
       (string/upper-case
         (str "season " @title))]
      [ui/view {:style {:position "absolute"
                        :top 0
                        :left 5
                        :right 5
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

(defn chapters-content [activity-indicator]
  (let [chapters (subscribe [:chapters])
        chapter (subscribe [:get-chapter])]
    (fn chapters-content-comp []
      [ui/view {:style {:position       "absolute"
                        :left           0
                        :right          0
                        :top            0
                        :bottom         0
                        :flex           1
                        :flex-direction "column"
                        :align-items    "stretch"}}
       (when (not (nil? @chapters))
         [seasons-bar @chapters
          #(dispatch [:chapter-load %1 %2])])
       (if (not (empty? @chapter))
         [ui/list-view {:dataSource            (.cloneWithRows chapter-ds (clj->js @chapter))
                        :enable-empty-sections true
                        :render-row            #(r/as-element [term-row (js->clj % :keywordize-keys true) activity-indicator])
                        :style                 {:flex             12
                                                :background-color "white"}}]
         [ui/view {:style {:flex             (if (nil? @chapters) 13 12)
                           :background-color "white"
                           :justify-content  "center"
                           :align-items      "center"}}
          [activity-indicator {:color "rgb(72, 86, 155)"}]])])))

(defn get-chapters-scene [activity-indicator]
  (fn chapters-scene []
    {:nav-bar {:left-button  back-button
               :title        chapter-title
               :right-button right-button}
     :content (chapters-content activity-indicator)}))