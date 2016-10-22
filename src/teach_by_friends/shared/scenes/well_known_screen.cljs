(ns teach-by-friends.shared.scenes.well-known-screen
  (:require [reagent.core :as r]
            [re-frame.core :refer [subscribe dispatch]]
            [teach-by-friends.shared.ui :as ui]
            [teach-by-friends.shared.components.term-row :refer [term-row]]
            [teach-by-friends.shared.components.table-view :refer [table-view]]
            [teach-by-friends.consts :as const]
            [teach-by-friends.shared.navigation :as nav])
  (:require-macros [teach-by-friends.shared.navigation :refer [defscreen]]))

(def empty-text "Here you can see your well known words to repeat them")

(defn empty-well-known-words []
  [ui/text {:style {:color "rgb(155,155,155)"
                    :font-size 14}}
   empty-text])

(defn well-known-words-comp []
  (let [well-known-words (subscribe [:get-well-known-words])]
    (fn [{:keys [navigator]}]
      [ui/view {:style {:flex 1
                        :flex-direction "column"
                        :align-items "center"
                        :justify-content "center"}}
       (if (or (nil? @well-known-words) (empty? @well-known-words))
         [empty-well-known-words]
         [table-view {:num-rows   (count @well-known-words)
                      :row-height const/TERM_ROW_HEIGHT
                      :render-row (fn [index]
                                    [term-row
                                     (nth @well-known-words index)
                                     #(do
                                       (dispatch [:translate-term (:term (nth @well-known-words index))])
                                       (nav/show-modal! navigator :translate-screen (nth @well-known-words index)))])
                      :back-color "black"
                      :style      {:flex 5}}])])))


(defscreen
  well-known-screen
  ([props]
   [well-known-words-comp props])
  ([_]
   {:title          "Favorite"
    :navigatorStyle {:navBarTextColor          "#fff"
                     :navBarTransparent        true
                     :navBarButtonColor        "#fff"
                     :statusBarTextColorScheme "light"
                     :screenColor "black"}}))
