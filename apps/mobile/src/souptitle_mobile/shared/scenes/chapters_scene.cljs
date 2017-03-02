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
            [souptitle-mobile.shared.components.timeline-and-table :refer [timeline-and-table]]))

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


(defn sentence-with-term [sentence raw-term]
  (let [pattern (re-pattern raw-term)
        splited-sentence (string/split sentence pattern)]
    [ui/text
     [ui/text {:style {:font-size 14 :color "rgb(155,155,155)"}} (first splited-sentence)]
     [ui/text {:style {:font-size 14 :color "white"}} raw-term]
     [ui/text {:style {:font-size 14 :color "rgb(155,155,155)"}} (first (rest splited-sentence))]]))

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
           (dispatch [:chapters-load %1 %2]))
        #(do
           (dispatch [:chapter-load %1 %2])
           (dispatch [:toggle-serials-bars]))]])))

(defn translate-modal [blur-view activity-view]
  (let [translate (subscribe [:get-translate])
        well-known-words (subscribe [:get-raw-well-known-words])
        term (reaction (:term @translate))
        sentence (reaction (:sentence @translate))
        translated (reaction (:translate @translate))]
    (fn []
      [ui/modal
       {:visible (:show? @translate)
        :transparent true
        :animation-type "fade"}
       [ui/view {:style {:position "relative"
                         :flex 1
                         :align-items "center"
                         :justify-content "center"}}
        [blur-view {:style {:position "absolute"
                            :top 0
                            :right 0
                            :bottom 0
                            :left 0
                            :flex 1}
                    :blur-type "dark"
                    :blur-amount 1}]
        [ui/touchable-opacity {:style {:position "absolute"
                                      :top 0
                                      :right 0
                                      :bottom 0
                                      :left 0}
                              :on-press #(dispatch [:close-translate])}]
        [ui/view {:style {:border-top-color "rgb(155,155,155)"
                          :border-top-width 1
                          :border-bottom-color "rgb(155,155,155)"
                          :border-bottom-width 1
                          :background-color "black"
                          :flex-direction "column"
                          :position "relative"
                          :width (ui/get-device-width)
                          :padding-top 10
                          :padding-bottom 10
                          :padding-left 15
                          :padding-right 15}}
         [ui/view {:style {:flex-direction "row"}}
          [ui/text {:style {:color "white" :font-size 14 :flex 1}} @term]
          (if (contains? @well-known-words @term)
            [ui/touchable-opacity {:on-press #(dispatch [:remove-from-well-known @term])
                                   :style {:margin-right 26}
                                   :hit-slop {:top 10
                                              :right 10
                                              :bottom 10
                                              :left 10}}
             [ui/image {:source (get-icon :favorites-fill)
                        :style {:width 16
                                :height 16}}]]
            [ui/touchable-opacity {:on-press #(dispatch [:add-to-well-known @term @sentence])
                                   :style {:margin-right 26}
                                   :hit-slop {:top 10
                                              :right 10
                                              :bottom 10
                                              :left 10}}
             [ui/image {:source (get-icon :favorites-active)
                        :style {:width 16
                                :height 16}}]])
          [ui/touchable-opacity {:on-press #(dispatch [:close-translate])
                                 :hit-slop {:top 10
                                            :right 10
                                            :bottom 10
                                            :left 10}}
           [ui/image {:source (get-icon :close)
                      :style {:width 16
                              :height 16}}]]]
         [ui/view {:style {:margin-top 10
                           :padding-left 10
                           :padding-right 10
                           :border-left-color "white"
                           :border-left-width 1
                           :flex-direction "column"}}
          (if (nil? @translated)
            [activity-view {:color "rgb(155,155,155)"}]
            (into [ui/view]
                  (for [tr-term @translated]
                    [ui/text {:style {:color "white" :font-size 14}} tr-term])))
          [ui/text {:style {:color "rgb(155,155,155)"
                            :font-size 14
                            :margin-top 10}}
             "In sentence:"]
          [sentence-with-term @sentence @term]]]]])))

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
      (print @chapter)
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
