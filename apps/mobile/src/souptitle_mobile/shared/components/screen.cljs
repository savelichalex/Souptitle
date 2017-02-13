(ns souptitle-mobile.shared.components.screen
  (:require [reagent.core :as r]
            [souptitle-mobile.shared.utils :refer [transform-params]]
            [souptitleMobile.js.screenBase :as screen-base]))

;; TODO: add camel-snake-kebab to deps

(def ExScreen (r/adapt-react-class (screen-base/getScreenComponent (js/require "react"))))

(defn screen [route-params children]
  [ExScreen (transform-params route-params)
   children])
