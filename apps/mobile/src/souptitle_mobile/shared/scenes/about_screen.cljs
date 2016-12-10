(ns teach-by-friends.shared.scenes.about-screen
  (:require [reagent.core :as r]
    [teach-by-friends.shared.ui :as ui])
  (:require-macros [teach-by-friends.shared.navigation :refer [defscreen]]))

(def about-text "
Made with love
to great TV shows
by Alexey Savelev and Eugene Bondarev")

(defn about-comp []
  [ui/view {:style {:flex 1
                    :flex-direction "column"
                    :align-items "center"
                    :justify-content "center"
                    :padding-left 30
                    :padding-right 30}}
   [ui/text {:style {:color "rgb(155,155,155)"
                     :font-size 14
                     :text-align "center"}}
    about-text]])

(defscreen
  about-screen
  ([props]
   [about-comp props])
  ([_]
   {:title          "About"
    :navigatorStyle {:navBarTextColor          "#fff"
                     :navBarTransparent        true
                     :navBarButtonColor        "#fff"
                     :statusBarTextColorScheme "light"
                     :screenColor "black"}}))