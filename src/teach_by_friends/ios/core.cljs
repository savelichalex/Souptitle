(ns teach-by-friends.ios.core
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

(defn row-comp [{:keys [row]}]
	[touchable-highlight {:style {:border-bottom-width 1
																:border-color "#000"
																:padding-top 10
																:padding-bottom 10
																:align-items "center"}
												:on-press #(alert (. js/JSON (stringify row)))}
	 [text {:style {:font-size 20 :color "#000"}} row]])

(defn app-root []
  (let [chapter (subscribe [:get-chapter])]
    (fn []
			[view {:style {:margin-top 15 :flex 1 :flex-direction "column"}}
			 [view {:style {:flex 1
											:flex-direction "row"
											:align-items "stretch"}}
				[touchable-opacity {:style {:flex 1 :justify-content "center" :align-items "center"}
														:on-press #(dispatch [:resort-chapter :by-rank])}
				 [text "In time order"]]
				[touchable-opacity {:style {:flex 1 :justify-content "center" :align-items "center"}
														:on-press #(dispatch [:resort-chapter :by-alphabet])}
				 [text "In alph order"]]]
			 [list-view {:dataSource (.cloneWithRows ds (clj->js @chapter))
									 :render-row #(r/as-element (row-comp {:row %}))
									 :style {:flex 9}}]])))

(defn init []
      (dispatch-sync [:initialize-db])
      (.registerComponent app-registry "TeachByFriends" #(r/reactify-component app-root)))
