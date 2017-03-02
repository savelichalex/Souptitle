(ns souptitle-mobile.shared.ui
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]
            [re-frame.core :refer [dispatch]]))

(enable-console-print!)

(def React (js/require "react"))
(def ReactNative (js/require "react-native"))

(def require-native-component (.-requireNativeComponent ReactNative))

(def LinearGradient (.-default (js/require "react-native-linear-gradient")))
(def linear-gradient (r/adapt-react-class LinearGradient))

(def DataSource (.. ReactNative -ListView -DataSource))
(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def touchable-opacity (r/adapt-react-class (.-TouchableOpacity ReactNative)))
(def list-view-default (r/adapt-react-class (.-ListView ReactNative)))
(def scroll-view (r/adapt-react-class (.-ScrollView ReactNative)))
(def text-input (r/adapt-react-class (.-TextInput ReactNative)))
(def status-bar (r/adapt-react-class (.-StatusBar ReactNative)))
(def modal (r/adapt-react-class (.-Modal ReactNative)))

(defn list-view []
  (let [list-ds (ReactNative.ListView.DataSource. #js {:rowHasChanged not=})]
    (fn [{:keys [render-row source] :as props}]
      [list-view
       (-> props
           (dissoc :source)
           (assoc :render-row #(r/as-element [render-row %]))
           (assoc :data-source (.cloneWithRows list-ds (clj->js source))))])))

(def Dimensions (. ReactNative -Dimensions))

(defn get-device-width []
  (-> Dimensions (.get "window") (.-width)))
(defn get-device-height []
  (-> Dimensions (.get "window") (.-height)))

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

(defn animated-get-value [an]
  (.__getValue an))

(defn animated-parallel
  ([& animations]
   (.. Animated (parallel (clj->js animations)))))

(defn animated-sequence
  ([& animations]
   (.. Animated (sequence (clj->js animations)))))

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

(def PanResponder
  (. ReactNative -PanResponder))

(defn create-pan-responder [a]
  (. PanResponder (create (clj->js a))))

(defn get-pan-handlers [pan-responder]
  (js->clj (. pan-responder -panHandlers) :keywordize-keys true))
