(ns souptitle-desktop.common.components.dropzone
  (:require [reagent.core :as r]
            [souptitle-desktop.common.utils.maybe :refer [just nothing]]))

(defn- open-file-dialog [file-input-el]
  (set! (. file-input-el -value) nil)
  (. file-input-el (click)))

(defn- stop-propagation! [event]
  (. event (stopPropagation)))

(defn- prevent-default! [event]
  (. event (preventDefault)))

(defn- on-click [file-input-atom event]
  (stop-propagation! event)
  (open-file-dialog @file-input-atom))

(defn- on-drag-start [state event])

(defn- get-from-data-transfer [dt]
  (let [files (. dt -files)
        items (. dt -items)]
    (if (and (not (nil? files))
             (> 0 (. files -length)))
      (just (first files))
      (if (and (not (nil? items))
               (> 0 (. items -length)))
        (just (first items))
        (nothing)))))

(defn- get-from-target [target]
  (let [files (. target -files)]
    (if (and (not (nil? files))
             (> 0 (. files -length)))
      (just (first files))
      (nothing))))

(defn- get-file-from-event [event]
  (cond
    (not (nil? (. event -dataTransfer))) (get-from-data-transfer (. event -dataTransfer))
    (not (nil? (. event -target))) (get-from-target (. event -target))
    :else (nothing)))

(defn- on-drag-enter [state event]
  (prevent-default! event)
  ;; check file type and choose accept or reject (and set state)
  (-> (get-file-from-event event)
      (>>= (fn [file]
             )))
  )

(defn- on-drag-over [_ event]
  (prevent-default! event)
  (stop-propagation! event)
  (try
    (set! (.. event -dataTransfer -dropEffect) "copy")
    (catch js/Error e
      nil)))

(defn- on-drag-leave [state event]
  (prevent-default! event)
  (swap! state #(-> % (assoc :status :usual))))

(defn- on-drop [state event]
  ;; get file from event
  (swap! state #(-> % (assoc :status :usual)))))

(defmulti get-class-by-status (fn [_ {status :status}] status))

(defmethod get-class-by-status :usual [{class :class} _]
  class)

(defmethod get-class-by-status :accepted [{:keys [class accepted-class]} _]
  (str class " " (or accepted-class "")))

(defmethod get-class-by-status :rejected [{:keys [class rejected-class]} _]
  (str class " " (or rejected-class "")))

(defn dropzone [props]
  (let [file-input (atom nil)
        state (r/atom {:status :usual})
        -on-click (partial on-click file-input)
        -on-drag-start (partial on-drag-start state)
        -on-drag-enter (partial on-drag-enter state)
        -on-drag-over (partial on-drag-over state)
        -on-drag-leave (partial on-drag-leave state)
        -on-drop (partial on-drop state)]
    (fn [props]
      [:div (-> props
                (merge
                 {:class (get-class-by-status props @state)
                  :on-click -on-click
                  :on-drag-start -on-drag-start
                  :on-drag-enter -on-drag-enter
                  :on-drag-over -on-drag-over
                  :on-drag-leave -on-drag-leave
                  :on-drop -on-drop}))
       [:input {:style {:display "none"}
                :accept true
                :type "file"
                :multiple false
                :on-change -on-drop
                :ref #(reset! file-input %)}]])))
