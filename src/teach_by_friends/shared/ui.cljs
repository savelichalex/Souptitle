(ns teach-by-friends.shared.ui
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch]]))

(enable-console-print!)

(def React (js/require "react"))
(def ReactNative (js/require "react-native"))

(def LinearGradient (.-default (js/require "react-native-linear-gradient")))
(def linear-gradient (r/adapt-react-class LinearGradient))

(def DataSource (.. ReactNative -ListView -DataSource))
(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def touchable-opacity (r/adapt-react-class (.-TouchableOpacity ReactNative)))
(def list-view (r/adapt-react-class (.-ListView ReactNative)))
(def scroll-view (r/adapt-react-class (.-ScrollView ReactNative)))
(def text-input (r/adapt-react-class (.-TextInput ReactNative)))
(def status-bar (r/adapt-react-class (.-StatusBar ReactNative)))

(defn alert [title]
  (.alert (.-Alert ReactNative) title))

(def Animated
  (. ReactNative -Animated))

(def AnimatedValue
  (. Animated -Value))

(defn animated-value [val]
  (AnimatedValue. val))

(defn animated-set-value [an val]
  (.setValue an val))

(defn animated-parallel
  ([& animations]
   (.. Animated (parallel (clj->js animations)))))

(defn animated-timing [animated-value config]
  (.. Animated (timing animated-value (clj->js config))))

(defn start-animated
  ([animated]
   (.. animated (start)))
  ([animated end-cb]
   (.. animated (start end-cb))))

(defn start-animated-timing
  ([animated-value config]
   (-> (animated-timing animated-value config)
       (start-animated)))
  ([animated-value config end-cb]
   (-> (animated-timing animated-value config)
       (start-animated end-cb))))

(def animated-view (r/adapt-react-class (.-View Animated)))

(def InteractionManager (. ReactNative -InteractionManager))

(defn run-after-interaction [cb]
  (. InteractionManager
     (runAfterInteractions
       (cb))))

(def navigator
  (r/adapt-react-class (. ReactNative -Navigator)))

(def navigation-bar
  (r/adapt-react-class (.. ReactNative -Navigator -NavigationBar)))

(defn get-navigation-bar-height []
  (.. ReactNative -Navigator -NavigationBar -Styles -General -TotalNavHeight))

(defn choose-scene [render-scene]
  (fn [route _]
    (r/as-element
      (render-scene {:route (keyword (.-name route)) :props (js->clj (.-passProps route) :keywordize-keys true)}))))

(defn choose-scene-transition [renderer]
  (let [Config (.. ReactNative -Navigator -SceneConfigs)
        types {:push-from-right                  (. Config -PushFromRight)
               :float-from-right                 (. Config -FloatFromRight)
               :float-from-left                  (. Config -FloatFromLeft)
               :float-from-bottom                (. Config -FloatFromBottom)
               :float-from-bottom-android        (. Config -FloatFromBottomAndroid)
               :fade-android                     (. Config -FadeAndroid)
               :horizontal-swipe-jump            (. Config -HorizontalSwipeJump)
               :horizontal-swipe-jump-from-right (. Config -HorizontalSwipeJumpFromRight)
               :vertical-up-swipe-jump           (. Config -VerticalUpSwipeJump)
               :vertical-down-swipe-jump         (. Config -VerticalDownSwipeJump)}]
    (fn [route _]
      (let [type (renderer (keyword (.-name route)))]
        (if (contains? types type)
          (type types)
          (:push-from-right types))))))

(def navigation-mapper {:LeftButton
                        (fn [route navigator index nav-state]
                          (when (not (= index 0))
                            (let [prev-route (aget nav-state "routeStack" (dec index) "name")]
                              (r/as-element
                                [touchable-opacity
                                 {:style {:padding-left 10
                                          :padding-top 10}
                                  :on-press #(dispatch [:nav/pop (keyword prev-route)])}
                                 [text
                                  {:style {:color "#373E4D"}}
                                  "Back"]]))))
                        :RightButton
                        (fn []
                          nil)
                        :Title
                        (fn [route navigator index nav-state]
                          (r/as-element
                            [text
                             {:style {:font-weight "bold"
                                      :margin-top 10}}
                             "Title"]))})

(defn navigation [props]
  (let [track-id (atom nil)]
    (r/create-class
      {:component-did-mount
       (fn [this]
         (let [id (r/track! (fn []
                              (let [nav (reaction (get @re-frame.db/app-db :nav))
                                    route (:route @nav)
                                    props (:props @nav)
                                    type (:type @nav)]
                                (cond
                                  (nil? route) nil
                                  (= type :pop) (.. this -refs -navigator (pop))
                                  (= type :push) (.. this -refs -navigator (push (clj->js {:name      (name route)
                                                                                           :passProps props})))))))]

           (swap! track-id (fn [_] id))))
       :component-will-unmount
       (fn [this]
         (r/dispose! @track-id))
       :reagent-render
       (fn [{:keys [initial-route render-scene configure-scene]}]
         [navigator {:ref             "navigator"
                     :style           {:flex 1}
                     :initial-route   {:name (name initial-route)}
                     :render-scene    (choose-scene render-scene)
                     :configure-scene (choose-scene-transition configure-scene)}])})))
