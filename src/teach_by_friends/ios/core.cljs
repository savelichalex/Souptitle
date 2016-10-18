(ns teach-by-friends.ios.core
  (:require [reagent.core :as r]
            [teach-by-friends.handlers]
            [teach-by-friends.subs]
            [teach-by-friends.shared.ui :as ui]
            [teach-by-friends.ios.ui :as ios-ui]
            [teach-by-friends.shared.scenes.serials-scene :refer [get-serials-scene]]
            [teach-by-friends.shared.scenes.seasons-scene :refer [get-seasons-scene]]
            [teach-by-friends.shared.scenes.chapters-scene :refer [get-chapters-scene chapters-content serial-bars-creator]]
            [teach-by-friends.shared.layouts.root-layout :refer [create-root-layout]]
            [teach-by-friends.shared.components.timeline :refer [timeline]]
            [teach-by-friends.shared.navigation :refer [navigation-tabs push!]])
  (:require-macros [teach-by-friends.shared.navigation :refer [defscreen]]))

(enable-console-print!)

(def root-layout (create-root-layout {:bar-style "light-content"}))
(def serials-scene (get-serials-scene ios-ui/activity-indicator))
(def seasons-scene (get-seasons-scene ios-ui/activity-indicator))
(def chapters-scene (get-chapters-scene ios-ui/activity-indicator))

(def chapter (chapters-content ios-ui/activity-indicator))
(def serial-bars (serial-bars-creator ios-ui/blur-view ios-ui/activity-indicator))

(declare serials-screen chapter-screen empty-scene1-screen empty-scene2-screen)
(defscreen
  serials-screen
  ([{:keys [navigator]}]
   [ui/view {:style {:flex 1
                     :background-color "black"
                     :flex-direction "column"}}
    [ui/touchable-opacity {:style {:justify-content "center"
                                   :padding-top 20
                                   :padding-bottom 20
                                   :padding-left 13}
                           :on-press #(push! navigator :chapter-screen {:title "Friends"})}
     [ui/text {:style {:font-size 30
                       :color "white"}}
      "Friends"]]])
  ([_]
   {:title "Serials"
    :navigatorStyle {:navBarTextColor          "#fff"
                     :navBarTransparent        true
                     :navBarButtonColor        "#fff"
                     :statusBarTextColorScheme "light"}}))
(defscreen
  chapter-screen
  ([props] [chapter props])
  ([{:keys [title]}]
   {:title title
    :navigatorStyle {:navBarTextColor          "#fff"
                     :navBarTransparent        true
                     :navBarButtonColor        "#fff"
                     :statusBarTextColorScheme "light"
                     :screenColor "black"}
    :navigatorButtons {:rightButtons [{:title "Toggle" :id "toggle"}]}}))

(defscreen
  serial-bars-screen
  ([props] [serial-bars props])
  ([_]
   {:title "Episode selection"
    :animationType "none"
    :navigatorStyle {:navBarTextColor          "#fff"
                     :navBarTransparent        true
                     :navBarButtonColor        "#fff"
                     :statusBarTextColorScheme "light"}
    :navigatorButtons {:leftButtons [{:title "Close" :id "close"}]}}))

(defscreen
  empty-scene1-screen
  ([]
   [ui/view {:style {:flex             1
                     :background-color "red"}}])
  ([_]
   {:title          "Favorite"
    :navigatorStyle {:navBarTextColor          "#fff"
                     :navBarTransparent        true
                     :navBarButtonColor        "#fff"
                     :statusBarTextColorScheme "light"
                     :screenColor "red"}}))
(defscreen
  empty-scene2-screen
  ([]
   [ui/view {:style {:flex             1
                     :background-color "green"}}])
  ([_]
   {:title          "About"
    :navigatorStyle {:navBarTextColor          "#fff"
                     :navBarTransparent        true
                     :navBarButtonColor        "#fff"
                     :statusBarTextColorScheme "light"
                     :screenColor "green"}}))

(defn app-root []
  (navigation-tabs {:tabsStyle {:tabBarButtonColor         "rgb(151,151,151)"
                                :tabBarSelectedButtonColor "#fff"
                                :tabBarBackgroundColor     "#000"}}
                   [serials-screen {:label "Words"}]
                   [empty-scene1-screen {:label "Favorite"}]
                   [empty-scene2-screen {:label "About"}]))

(defn init []
  (app-root))
