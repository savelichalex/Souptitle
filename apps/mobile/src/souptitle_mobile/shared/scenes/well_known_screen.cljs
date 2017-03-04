(ns souptitle-mobile.shared.scenes.well-known-screen
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch]]
            [souptitle-mobile.shared.ui :as ui]
            [souptitle-mobile.shared.components.term-row :refer [term-row]]
            [souptitle-mobile.shared.components.table-view :refer [table-view]]
            [souptitle-mobile.consts :as const]
            [souptitle-mobile.shared.navigation :as nav]
            [souptitle-mobile.shared.icons :refer [get-icon]]
            [souptitle-mobile.shared.components.translate-modal :refer [translate-modal]]))

(def empty-text "Here you can see your well known words to repeat them")

(defn empty-well-known-words []
  [ui/text {:style {:color "rgb(155,155,155)"
                    :font-size 14}}
   empty-text])

(defn well-known [blur-view activity-indicator]
  (let [well-known-words (subscribe [:get-well-known-words])]
    (fn well-known-words-comp []
      (let [words-empty? (or (nil? @well-known-words) (empty? @well-known-words))]
        (print @well-known-words)
        [ui/view {:style {:flex 1
                          :flex-direction "column"
                          :align-items (if words-empty? "center" "stretch")
                          :justify-content "center"
                          :margin-top 20}}
         (if words-empty?
           [empty-well-known-words]
           [table-view {:num-rows   (count @well-known-words)
                        :row-height const/TERM_ROW_HEIGHT
                        :render-row (fn [index]
                                      [term-row
                                       (nth @well-known-words index)
                                       #(do
                                          (dispatch [:translate-term (nth @well-known-words index)]))])
                        :back-color "black"
                        :style      {:flex 1}}])
         [translate-modal blur-view activity-indicator]]))))

(defn well-known-tab-icon [props]
  (r/as-element
   (if (true? (.-focused props))
     [ui/image {:source (get-icon :favorites-fill)}]
     [ui/image {:source (get-icon :favorites)}])))

(defn get-well-known-screen [blur-view activity-indicator]
  (nav/create-screen
   {:navigation-bar {:title "Favorite"
                     :tintColor "#fff"}
    :tab-bar {:label "Favorite"
              :icon well-known-tab-icon}}
   (well-known blur-view activity-indicator)))
