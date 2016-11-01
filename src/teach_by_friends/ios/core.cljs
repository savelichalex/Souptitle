(ns teach-by-friends.ios.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch]]
            [clojure.string :refer [capitalize]]
            [teach-by-friends.handlers]
            [teach-by-friends.subs]
            [teach-by-friends.shared.ui :as ui]
            [teach-by-friends.ios.ui :as ios-ui]
            [teach-by-friends.shared.scenes.serials-scene :refer [get-serials-scene serials-content]]
            [teach-by-friends.shared.scenes.chapters-scene :refer [chapters-content serial-bars-creator translate-creator]]
            [teach-by-friends.shared.scenes.well-known-screen :refer [well-known-screen]]
            [teach-by-friends.shared.scenes.about-screen :refer [about-screen]]
            [teach-by-friends.shared.layouts.root-layout :refer [create-root-layout]]
            [teach-by-friends.shared.components.timeline :refer [timeline]]
            [teach-by-friends.shared.navigation :refer [navigation-tabs push! dismiss-modal!]]
            [teach-by-friends.shared.icons :refer [get-icon]])
  (:require-macros [teach-by-friends.shared.navigation :refer [defscreen]]))

(enable-console-print!)

(def root-layout (create-root-layout {:bar-style "light-content"}))
(def serials-scene (get-serials-scene ios-ui/activity-indicator))

(def serials (serials-content ios-ui/activity-indicator))
(def chapter (chapters-content ios-ui/activity-indicator))
(def translate (translate-creator ios-ui/blur-view ios-ui/activity-indicator))
(def serial-bars (serial-bars-creator ios-ui/blur-view ios-ui/activity-indicator))

(def logo-image (js/require "./images/logo.png"))

(declare serials-screen chapter-screen empty-scene1-screen empty-scene2-screen)
(defscreen
  serials-screen
  ([props]
   [serials props])
  ([_]
   {:title "Souptitle"
    :titleImage logo-image
    :navigatorStyle {:navBarTextColor          "#fff"
                     :navBarTransparent        true
                     :navBarButtonColor        "#fff"
                     :statusBarTextColorScheme "light"}}))
(defscreen
  chapter-screen
  ([props] [chapter props])
  ([{:keys [title]}]
   {:title (capitalize title)
    :navigatorStyle {:navBarTextColor          "#fff"
                     :navBarTransparent        true
                     :navBarTranslucent        true
                     :drawUnderNavBar          true
                     :navBarButtonColor        "#fff"
                     :statusBarTextColorScheme "light"
                     :screenColor "black"}
    :navigatorButtons {:leftButtons [{:icon (get-icon :back) :id "back"}]
                       :rightButtons [{:icon (get-icon :episodes) :id "toggle"}]}}))

(defscreen
  serial-bars-screen
  ([props] [serial-bars props])
  ([_]
   {:title "Episode selection"
    :animationType "none"
    :navigatorStyle {:navBarTextColor          "#fff"
                     :navBarTransparent        true
                     :navBarButtonColor        "#fff"
                     :navBarNoBorder false
                     :statusBarTextColorScheme "light"}
    :navigatorButtons {:leftButtons [{:icon (get-icon :close) :id "close"}]}}))

(defscreen
  translate-screen
  ([props] [translate props])
  ([_]
   {:animationType "none"
    :navigatorStyle {:navBarHidden true}}))

(def inet-error-image (js/require "./images/internet_error.png"))
(defscreen
  network-error-screen
  ([{:keys [navigator]}]
   [ui/view {:style {:flex 1
                     :flex-direction "column"
                     :align-items "center"
                     :justify-content "center"
                     :background-color "#000"}}
    [ui/image {:source inet-error-image
               :style {:width 120
                       :height 72
                       :margin-top -100
                       :margin-bottom 40}}]
    [ui/text {:style {:color "rgb(151,151,151)"
                      :font-size 18
                      :text-align "center"}}
     "Oops!\n Looks like Internet is not working"]
    [ui/touchable-opacity {:on-press (fn [_]
                                       (do
                                         (dismiss-modal! navigator "none")
                                         (dispatch [:call-last-api])))}
     [ui/text {:style {:color "white"
                       :font-size 20
                       :margin-top 20}}
      "TRY AGAIN"]]])
  ([_]
   {:title "Network error"
    :navigatorStyle {:navBarTextColor          "#fff"
                     :navBarBackgroundColor    "#000"
                     :navBarButtonColor        "#fff"
                     :statusBarTextColorScheme "light"}}))

(defn app-root []
  (navigation-tabs {:tabsStyle {:tabBarButtonColor         "rgb(151,151,151)"
                                :tabBarSelectedButtonColor "#fff"
                                :tabBarBackgroundColor     "#000"}}
                   [serials-screen {:label "Words"
                                    :icon (get-icon :words)
                                    :selectedIcon (get-icon :words-active)}]
                   [well-known-screen {:label "Favorite"
                                       :icon (get-icon :favorites)
                                       :selectedIcon (get-icon :favorites-fill)}]
                   [about-screen {:label "About"
                                  :icon (get-icon :information)
                                  :selectedIcon (get-icon :information-active)}]))

(defn init []
  (app-root))
