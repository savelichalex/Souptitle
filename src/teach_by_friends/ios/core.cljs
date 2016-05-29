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

(defn alert [title]
	(.alert (.-Alert ReactNative) title))

(def ds (ReactNative.ListView.DataSource. #js{:rowHasChanged not=}))

(def navigator (r/adapt-react-class (. ReactNative -Navigator)))

(defn home-scene []
	[view {:style {:flex 1 :justify-content "center" :align-items "center"}}
	 [touchable-opacity {:on-press #(dispatch [:nav/chapter])}
		[text "Move to chapter"]]])

(defn row-comp [{:keys [row]}]
	[touchable-highlight {:style    {:border-bottom-width 1
																	 :border-color        "#000"
																	 :padding-top         10
																	 :padding-bottom      10
																	 :align-items         "center"}
												:on-press #(dispatch [:nav/term row])}
	 [text {:style {:font-size 20 :color "#000"}} row]])

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
			 [list-view {:dataSource (.cloneWithRows ds (clj->js @chapter))
									 :render-row #(r/as-element (row-comp {:row %}))
									 :style      {:flex 9}}]])))

(defn term-scene [{:keys [term values]}]
	(print values)
	[view {:style {:flex             1
								 :background-color "white"
								 :justify-content  "center"
								 :align-items      "center"}}
	 [text term]
	 [touchable-opacity {:on-press #(dispatch [:nav/pop])}
		[text "Back"]]])

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
