(ns teach-by-friends.shared.ui
	(:require-macros [reagent.ratom :refer [reaction]])
	(:require [reagent.core :as r]))

(def React (js/require "react"))
(def ReactNative (js/require "react-native"))

(def DataSource (.. ReactNative -ListView -DataSource))
(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def touchable-opacity (r/adapt-react-class (.-TouchableOpacity ReactNative)))
(def list-view (r/adapt-react-class (.-ListView ReactNative)))
(def scroll-view (r/adapt-react-class (.-ScrollView ReactNative)))

(defn alert [title]
	(.alert (.-Alert ReactNative) title))

(def navigator
	(r/adapt-react-class (. ReactNative -Navigator)))

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

(defn navigation [props]
	(r/create-class
		{:component-did-mount
		 (fn [this]
			 (r/track! (fn []
									 (let [nav (reaction (get @re-frame.db/app-db :nav))
												 route (:route @nav)
												 props (:props @nav)]
										 (cond
											 (nil? route) nil
											 (= route :pop) (.. this -refs -navigator (pop))
											 :else (.. this -refs -navigator (push (clj->js {:name      (name route)
																																			 :passProps props}))))))))
		 :reagent-render
		 (fn [{:keys [initial-route render-scene configure-scene]}]
			 [navigator {:ref             "navigator"
									 :style           {:flex 1}
									 :initial-route   {:name (name initial-route)}
									 :render-scene    (choose-scene render-scene)
									 :configure-scene (choose-scene-transition configure-scene)}])
		 }))