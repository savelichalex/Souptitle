(ns teach-by-friends.shared.scenes.chapters-scene
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [teach-by-friends.shared.ui :as ui]
            [clojure.string :as string]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch]]
            [teach-by-friends.consts :as const]
            [teach-by-friends.shared.components.timeline :refer [timeline]]))

(def menu-icon-source (js/require "./images/menu-icon.png"))
(def search-icon-source (js/require "./images/search-icon.png"))
(def back-icon-source (js/require "./images/back-icon.png"))
(defn menu-icon [{:keys [style]}]
  [ui/image {:source menu-icon-source :style style}])
(defn search-icon [{:keys [style]}]
  [ui/image {:source search-icon-source :style style}])
(defn back-icon [{:keys [style]}]
  [ui/image {:source back-icon-source :style style}])

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

(def TERM_ROW_HEIGHT 60)

(defn term-row [term-raw activity-indicator]
  (if (= (:status term-raw) const/ACTIVE_TERM)
    [detailed-term-row term-raw activity-indicator]
    [ui/touchable-opacity {:style    {:height              TERM_ROW_HEIGHT
                                      :border-bottom-width 1
                                      :border-color        "rgba(0,0,0,.1)"
                                      :flex-direction      "column"
                                      :justify-content     "center"
                                      :padding-left        30}
                           :on-press #(dispatch [:translate-term (:term term-raw)])}
     [ui/text {:style {:font-size 20 :color "rgb(72, 86, 155)"}} (:term term-raw)]]))

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


;(сomment (when (not (nil? @chapters)))
;         [seasons-bar @chapters
;          #(dispatch [:chapter-load %1 %2])])

(defn update-positions [tPosition get-words-list fullHeight visibleHeight lock event _]
  (swap! lock (fn [_] true))
  (let [words-list (get-words-list)
        timeline-y (aget event "nativeEvent" "pageY")
        y-ratio (/ timeline-y @visibleHeight)
        words-list-y-temp (* @fullHeight y-ratio)
        words-list-y (if (> words-list-y-temp (- @fullHeight @visibleHeight))
                       (- @fullHeight @visibleHeight)
                       words-list-y-temp)]
    (ui/animated-set-value tPosition timeline-y)
    (.scrollTo words-list (clj->js {:y words-list-y :animated false}))))

(defn update-timeline-position [tPosition fullHeight visibleHeight lock event]
  (when (false? @lock)
    (let [words-list-y (aget event "nativeEvent" "contentOffset" "y")
          y-ratio (/ words-list-y @fullHeight)
          timeline-y (* @visibleHeight y-ratio)]
      (print words-list-y timeline-y)
      (ui/animated-set-value tPosition timeline-y))))

(defn chapters-content [activity-indicator]
  (let [chapters (subscribe [:chapters])
        chapter (reaction (take 100 @(subscribe [:get-chapter])))
        tPosition (ui/animated-value 0.0)
        wordsListHeight (reaction (* (count @chapter) TERM_ROW_HEIGHT))
        visibleHeight (atom 0)
        _this (atom nil)
        timeline-pan-lock (atom false)
        pan-responder (ui/create-pan-responder {:onStartShouldSetPanResponder        (fn [_ _] true)
                                                :onStartShouldSetPanResponderCapture (fn [_ _] true)
                                                :onMoveShouldSetPanResponder         (fn [_ _] true)
                                                :onMoveShouldSetPanResponderCapture  (fn [_ _] true)
                                                :onPanResponderTerminationRequest    (fn [_ _] true)
                                                :onPanResponderGrant                 (partial update-positions tPosition #(.. @_this -refs -wordsList) wordsListHeight visibleHeight timeline-pan-lock)
                                                :onPanResponderMove                  (partial update-positions tPosition #(.. @_this -refs -wordsList) wordsListHeight visibleHeight timeline-pan-lock)
                                                :onPanResponderTerminate             (fn [_ _] (swap! timeline-pan-lock (fn [_] false)))
                                                :onPanResponderRelease               (fn [_ _] (swap! timeline-pan-lock (fn [_] false)))})]
    (r/create-class
      {:render
       (fn chapters-content-comp [this]
         (if (nil? @_this)
           (swap! _this #(identity this)))
         [ui/view {:style {:position       "absolute"
                           :left           0
                           :right          0
                           :top            0
                           :bottom         0
                           :flex           1
                           :flex-direction "column"
                           :align-items    "stretch"}}
          (if (not (empty? @chapter))
            [ui/view {:style {:flex             12
                              :background-color "white"
                              :flex-direction   "row"}}
             [timeline (-> {:tPosition          tPosition
                            :countWordsOnScreen 11
                            :timestamps         (clj->js @chapter)
                            :style              {:flex 1}}
                           (merge (ui/get-pan-handlers pan-responder)))]
             [ui/list-view {:ref                          "wordsList"
                            :on-layout                    (fn []
                                                            (swap! visibleHeight (fn [_] (.. @_this -refs -wordsList -scrollProperties -visibleLength))))
                            :on-scroll                    (partial update-timeline-position tPosition wordsListHeight visibleHeight timeline-pan-lock)
                            :scrollEventThrottle          16
                            :showsVerticalScrollIndicator false
                            :dataSource                   (.cloneWithRows chapter-ds (clj->js @chapter))
                            :enable-empty-sections        true
                            :render-row                   #(r/as-element [term-row (js->clj % :keywordize-keys true) activity-indicator])
                            :style                        {:flex             5
                                                           :background-color "white"}}]]
            [ui/view {:style {:flex             (if (nil? @chapters) 13 12)
                              :background-color "white"
                              :justify-content  "center"
                              :align-items      "center"}}
             [activity-indicator {:color "rgb(72, 86, 155)"}]])])})))


(defn get-chapters-scene [activity-indicator]
  (fn chapters-scene []
    {:nav-bar {:left-button  back-button
               :title        chapter-title
               :right-button right-button}
     :content (chapters-content activity-indicator)}))