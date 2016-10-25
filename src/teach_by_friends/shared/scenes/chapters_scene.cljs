(ns teach-by-friends.shared.scenes.chapters-scene
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [teach-by-friends.shared.ui :as ui]
            [clojure.string :as string]
            [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch]]
            [teach-by-friends.consts :as const]
            [teach-by-friends.shared.navigation :as nav]
            [teach-by-friends.shared.icons :refer [get-icon]]
            [teach-by-friends.shared.components.term-row :refer [term-row]]
            [teach-by-friends.shared.components.timeline-and-table :refer [timeline-and-table]]))

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

(defn on-navigator-event [nav event]
  (when (= (.-type event) "NavBarButtonPress")
    (when (= (.-id event) "toggle")
      (dispatch [:save-seasons-and-chapters])
      (nav/show-modal! nav :serial-bars-screen {}))
    (when (= (.-id event) "back")
      (nav/pop! nav))))

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

(defn translate-creator [blur-view activity-view]
  (fn [{:keys [navigator]}]
    (let [translate (subscribe [:term-translate])
          well-known-words (subscribe [:get-raw-well-known-words])]
      (fn [{:keys [term sentence]}]
        [blur-view {:style {:position "absolute"
                            :top 0
                            :right 0
                            :bottom 0
                            :left 0
                            :flex 1
                            :align-items "center"
                            :justify-content "center"}
                    :blur-type "dark"}
         [ui/touchable-opacity {:style {:position "absolute"
                                        :top 0
                                        :right 0
                                        :bottom 0
                                        :left 0}
                                :on-press #(nav/dismiss-modal! navigator "none")}]
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
           [ui/text {:style {:color "white" :font-size 14 :flex 1}} term]
           (if (contains? @well-known-words term)
             [ui/touchable-opacity {:on-press #(dispatch [:remove-from-well-known term])
                                    :style {:margin-right 26}
                                    :hit-slop {:top 10
                                               :right 10
                                               :bottom 10
                                               :left 10}}
              [ui/image {:source (get-icon :favorites-fill)
                         :style {:width 16
                                 :height 16}}]]
             [ui/touchable-opacity {:on-press #(dispatch [:add-to-well-known term sentence])
                                    :style {:margin-right 26}
                                    :hit-slop {:top 10
                                               :right 10
                                               :bottom 10
                                               :left 10}}
              [ui/image {:source (get-icon :favorites-active)
                         :style {:width 16
                                 :height 16}}]])
           [ui/touchable-opacity {:on-press #(nav/dismiss-modal! navigator "none")
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
           (if (nil? @translate)
             [activity-view {:color "rgb(155,155,155)"}]
             (into [ui/view]
                   (for [tr-term @translate]
                     [ui/text {:style {:color "white" :font-size 14}} tr-term])))
           [ui/text {:style {:color "rgb(155,155,155)"
                             :font-size 14
                             :margin-top 10}}
            "In sentence:"]
           [sentence-with-term sentence term]]]]))))


(defn serial-cover [image-uri sort-type]
  (let [height (r/atom 0)
        on-layout (fn [event _] (swap! height (fn [_] (.. event -nativeEvent -layout -height))))]
    (fn serial-cover-comp [image-uri sort-type]
      [ui/view {:style {:position "relative"}
                :on-layout on-layout}
       [ui/image {:source {:uri image-uri}
                  :resize-mode "cover"
                  :style {:width (ui/get-device-width)
                          :height @height
                          :position "absolute"
                          :top 0}}]
       [ui/linear-gradient {:colors ["rgba(0,0,0,1)" "rgba(0,0,0,0.3)"]
                            :start  [0.5 1.0] :end [0.5 0.0]
                            :style  {:width (ui/get-device-width)
                                     :height @height
                                     :position "absolute"
                                     :top 0}}]
       [sort-row sort-type]])))

(defn chapters-content [activity-indicator]
  (let [chapter (subscribe [:get-chapter])
        sort-type (subscribe [:get-sort-type])
        timeline-list (subscribe [:get-timeline-list])
        cover (subscribe [:get-cover-image])]
    (fn [{:keys [navigator]}]
      (. navigator (setOnNavigatorEvent (partial on-navigator-event navigator)))
      (fn chapters-content-comp [{:keys [navigator]}]
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
                                                       #(do
                                                         (dispatch [:translate-term (:term (nth @chapter index))])
                                                         (nav/show-modal! navigator :translate-screen (nth @chapter index)))]
                                                      [term-row
                                                       {:term ""}]))
                                 :chapter         @chapter
                                 :timeline-list   @timeline-list
                                 :term-row-height const/TERM_ROW_HEIGHT}]
            [ui/view {:style {:flex             1
                              :background-color "black"
                              :justify-content  "center"
                              :align-items      "center"}}
             [activity-indicator {:color "rgb(155, 155, 155)"}]])]]))))