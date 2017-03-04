(ns souptitle-mobile.shared.components.translate-modal
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch]]
            [clojure.string :as string]
            [souptitle-mobile.shared.ui :as ui]
            [souptitle-mobile.shared.icons :refer [get-icon]]))

(defn sentence-with-term [sentence raw-term]
  (let [pattern (re-pattern raw-term)
        splited-sentence (string/split sentence pattern)]
    [ui/text
     [ui/text {:style {:font-size 14 :color "rgb(155,155,155)"}} (first splited-sentence)]
     [ui/text {:style {:font-size 14 :color "white"}} raw-term]
     [ui/text {:style {:font-size 14 :color "rgb(155,155,155)"}} (first (rest splited-sentence))]]))

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
