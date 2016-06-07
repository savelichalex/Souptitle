(ns teach-by-friends.ios.core
  (:refer-clojure :exclude [pop])
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [teach-by-friends.handlers]
            [teach-by-friends.subs]))

(enable-console-print!)

(def React (js/require "react"))
(def ReactNative (js/require "react-native"))

(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def touchable-opacity (r/adapt-react-class (.-TouchableOpacity ReactNative)))
(def list-view (r/adapt-react-class (.-ListView ReactNative)))
(def scroll-view (r/adapt-react-class (.-ScrollView ReactNative)))
(def activity-indicator-ios (r/adapt-react-class (. ReactNative -ActivityIndicatorIOS)))

(defn alert [title]
  (.alert (.-Alert ReactNative) title))

(def navigator (r/adapt-react-class (. ReactNative -Navigator)))

(def seasons-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))
(def chapters-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn season-comp [s]
  (let [season (js->clj s :keywordize-keys true)]
    [touchable-highlight {:style    {:border-bottom-width 1
                                     :border-color        "#000"
                                     :padding-top         10
                                     :padding-bottom      10
                                     :align-items         "center"}
                          :on-press #(dispatch [:chapters-load season])}
     [text {:style {:font-size 20 :color "#000"}} (:title season)]]))

(defn chapter-comp [c]
  (let [chapter (js->clj c :keywordize-keys true)]
    [touchable-highlight {:style    {:border-bottom-width 1
                                     :border-color        "#000"
                                     :padding-top         10
                                     :padding-bottom      10
                                     :align-items         "center"}
                          :on-press #(dispatch [:chapter-load chapter])}
     [text {:style {:font-size 20 :color "#000"}} (:title chapter)]]))

(defn home-scene []
  (let [seasons (subscribe [:seasons])
        chapters (subscribe [:chapters])]
    (fn []
      [view {:style {:flex 1 :margin-top 15 :flex-direction "column" :align-items "stretch"}}
       (if (not (nil? @seasons))
         [list-view {:dataSource (.cloneWithRows seasons-ds (clj->js @seasons))
                     :render-row #(r/as-element (season-comp %))
                     :style      {:flex 1}}]
         [view {:style {:flex 1 :justify-content "center" :align-items "center"}}
          [activity-indicator-ios]])
       (if (not (nil? @chapters))
         [list-view {:dataSource (.cloneWithRows chapters-ds (clj->js @chapters))
                     :render-row #(r/as-element (chapter-comp %))
                     :style      {:flex 1}}]
         [view {:style {:flex 1}}])])))

(defn row-comp [{:keys [row]}]
  [touchable-highlight {:style    {:border-bottom-width 1
                                   :border-color        "#000"
                                   :padding-top         10
                                   :padding-bottom      10
                                   :align-items         "center"}
                        :on-press #(dispatch [:nav/term row])}
   [text {:style {:font-size 20 :color "#000"}} row]])

(def chapter-ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(defn chapter-scene []
  (let [chapter (subscribe [:get-chapter])]
    (fn []
      [view {:style {:margin-top       15
                     :flex             1
                     :flex-direction   "column"
                     :background-color "white"}}
       [view {:style {:flex           1
                      :flex-direction "row"
                      :align-items    "stretch"}}
        [touchable-opacity {:style    {:flex 1 :justify-content "center" :align-items "center"}
                            :on-press #(dispatch [:resort-chapter :by-rank])}
         [text "In time order"]]
        [touchable-opacity {:style    {:flex 1 :justify-content "center" :align-items "center"}
                            :on-press #(dispatch [:resort-chapter :by-alphabet])}
         [text "In alph order"]]]
       [list-view {:dataSource (.cloneWithRows chapter-ds (clj->js @chapter))
                   :render-row #(r/as-element (row-comp {:row %}))
                   :style      {:flex 9}}]])))

(defn term-scene [{:keys [term values]}]
  (let [translate (subscribe [:term-translate])]
    (fn []
      (if (nil? @translate)
        [view {:style {:flex             1
                       :background-color "white"
                       :justify-content  "center"
                       :align-items      "center"}}
         [activity-indicator-ios]
         [touchable-opacity {:on-press #(dispatch [:nav/pop-term])}
          [text "Back"]]]
        [view {:style {:flex             1
                       :background-color "white"
                       :justify-content  "center"
                       :align-items      "center"}}
         [text {:style {:font-size 20 :font-weight "bold"}} (first @translate)]
         [touchable-opacity {:on-press #(dispatch [:nav/pop-term])}
          [text "Back"]]]))))

(defmulti render-scene (fn [nav] (:route nav)))
(defmethod render-scene :home
  [_]
  [home-scene])

(defmethod render-scene :chapter
  [_]
  [chapter-scene])

(defmethod render-scene :term
  [{props :props}]
  (print "Props " props)
  [term-scene props])

;(defn navigation []
;	(let [nav-state (subscribe [:nav-changes])]
;		(render-scene @nav-state)))

(defn choose-scene [route _]
  (r/as-element
    (render-scene {:route (keyword (.-name route)) :props (js->clj (.-passProps route) :keywordize-keys true)})))

(defn navigation-component []
  (r/create-class
    {:component-did-mount
     (fn [this]
       (r/track! (fn []
                   (let [nav (reaction (get @re-frame.db/app-db :nav))
                         route (:route @nav)
                         props (:props @nav)]
                     (cond
                       (nil? route) nil
                       (= route :pop) (.. this
                                          -refs
                                          -navigator
                                          (pop))
                       :else (.. this
                                 -refs
                                 -navigator
                                 (push (clj->js {:name      (name route)
                                                 :passProps props})))
                       )))))
     :reagent-render
     (fn []
       [navigator {:ref          "navigator"
                   :style        {:flex 1}
                   :initialRoute {:name "home"}
                   :render-scene choose-scene}])}))

(defn app-root []
  [navigation-component])

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent app-registry "TeachByFriends" #(r/reactify-component app-root)))
