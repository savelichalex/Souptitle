(ns souptitle-mobile.ios.core
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch]]
            [clojure.string :refer [capitalize]]
            [souptitle-mobile.handlers]
            [souptitle-mobile.subs]
            [souptitle-mobile.shared.ui :as ui]
            [souptitle-mobile.ios.ui :as ios-ui]
            [souptitle-mobile.shared.scenes.serials-scene :refer [get-serials-scene serials-content]]
            [souptitle-mobile.shared.scenes.chapters-scene :refer [chapters-content serial-bars-creator translate-creator]]
            [souptitle-mobile.shared.scenes.well-known-screen :refer [well-known-screen]]
            [souptitle-mobile.shared.scenes.about-screen :refer [about-screen]]
            [souptitle-mobile.shared.layouts.root-layout :refer [create-root-layout]]
            [souptitle-mobile.shared.components.timeline :refer [timeline]]
            [souptitle-mobile.shared.navigation :refer [navigation-tabs push! dismiss-modal!]]
            [souptitle-mobile.shared.icons :refer [get-icon]])
  (:require-macros [souptitle-mobile.shared.navigation :refer [defscreen]]))

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
