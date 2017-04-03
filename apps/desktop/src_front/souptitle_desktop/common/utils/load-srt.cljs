(ns souptitle-desktop.common.utils.load-srt
  (:require [goog.dom :as dom]
            [goog.array :refer [isEmpty]])
  (:import [goog.dom TagName]))

(defn- create-script [url]
  (let [script (dom/createElement TagName.IFRAME)
        props #js {:src url}]
    (-> script
        (dom/setProperties props))
    script))

(defn- cleanup-script
  ([script remove-script-node?]
   (set! (. script -onload) js/goog.nullFunction)
   ;; (set! (. script -onerror) js/goog.nullFunction)
   ;; (set! (. script -onreadystatechange) js/goog.nullFunction)
   (when remove-script-node?
     (js/window.setTimeout
      #(dom/removeNode script)
      0)))
  ([script-node remove-script-node? timeout]
   (js/goog.global.clearTimeout timeout)
   (cleanup-script script-node remove-script-node?)))

(defn- set-timeout-on-script-load! [script-node deferred]
  (js/window.setTimeout
   (fn []
     (cleanup-script script-node true)
     ((. deferred -reject) :timeout))
   5000))

(defn- set-onload! [script-node deferred timeout]
  (let [cb (fn [data]
             (cleanup-script script-node true timeout)
             ((. deferred -resolve) (.. script-node -contentWindow -document -body -innerText)))]
    (set! (. script-node -onload) cb)
    ;; (set! (. script-node -onreadystatechange) cb)
    script-node))

(defn- set-onerror! [script-node deferred timeout]
  (let [cb (fn []
             (cleanup-script script-node true timeout)
             ((. deferred -reject) :error))]
    (set! (. script-node -onerror) cb)
    script-node))

(defn- create-deferred []
  (let [deferred #js {:promise nil
                      :resolve nil
                      :reject nil}]
    (set! (. deferred -promise)
          (js/Promise. (fn [resolve reject]
                         (set! (. deferred -resolve) resolve)
                         (set! (. deferred -reject) reject))))
    deferred))

(defn- get-head []
  (let [head-elements (js/document.getElementsByTagName (js/String. TagName.HEAD))]
    (if (or (not head-elements) (isEmpty head-elements))
      (. js/document -documentElement)
      (aget head-elements 0))))

(defn- append-script [script-node]
  (-> (get-head)
      (.appendChild script-node)))

(defn load-srt [url]
  (let [script (create-script url)
        deferred (create-deferred)
        timeout (set-timeout-on-script-load! script deferred)]
    (-> script
        (set-onload! deferred timeout)
        ;; (set-onerror! deferred timeout)
        (append-script))
    (. deferred -promise)))
