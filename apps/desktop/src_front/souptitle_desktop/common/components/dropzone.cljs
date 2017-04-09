(ns souptitle-desktop.common.components.dropzone
  (:require [reagent.core :as r]
            [souptitle-desktop.common.utils.maybe :refer [>>= just nothing]]))

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
    (if (and (some? files)
             (> (. files -length) 0))
      (just (-> files array-seq first))
      (if (and (some? items)
               (> (. items -length) 0))
        (just (-> items array-seq first))
        (nothing)))))

(defn- get-from-target [target]
  (let [files (. target -files)]
    (if (and (not (nil? files))
             (> 0 (. files -length)))
      (just (first files))
      (nothing))))

(defn- get-file-from-event [event]
  (cond
    (some? (. event -dataTransfer)) (get-from-data-transfer (. event -dataTransfer))
    (some? (. event -target)) (get-from-target (. event -target))
    :else (nothing)))

(defn- check-file-type [accepted? file]
  (if (and (fn? accepted?)
           (accepted? (. file -type)))
    (just [:accepted file])
    (just [:rejected file])))

(defn- file-accepted? [[status file]]
  (if (= status :accepted)
    (just file)
    (nothing)))

(defn- on-drag-enter [state props event]
  (prevent-default! event)
  ;; check file type and choose accept or reject (and set state)
  (-> (get-file-from-event event)
      (>>= (partial check-file-type (:accepted? props)))
      (>>= (fn [[status _]]
             (swap! state #(-> % (assoc :status status))))))
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

(defn- get-onload-data [type event]
  (if-let [data (.. event -target -result)]
    (just [type data])
    (nothing)))

(defn- check-onload-data [result [type data]]
  (let [res (-> @result (assoc type data))]
    (if (and (some? (:url res))
             (some? (:binary res)))
      (just res)
      (do (reset! result res)
          (nothing)))))

(defn- reader-onload [type result on-file-loaded event]
  (-> (get-onload-data type event)
      (>>= (partial check-onload-data result))
      (>>= (fn [data]
             (on-file-loaded data)))))

(defn- load-droppped-file [on-file-will-load on-file-loaded file]
  (let [reader-url (js/FileReader.)
        reader-binary (js/FileReader.)
        result (atom {})]
    (on-file-will-load)
    (set!
     (. reader-url -onload)
     (partial reader-onload :url result on-file-loaded))
    (set!
     (. reader-binary -onload)
     (partial reader-onload :binary result on-file-loaded))
    (. reader-url (readAsDataURL file))
    (. reader-binary (readAsBinaryString file))))

(defn- on-drop [state props event]
  (stop-propagation! event)
  (prevent-default! event)
  ;; get file from event
  (-> (get-file-from-event event)
      (>>= (partial check-file-type (:accepted? props)))
      (>>= file-accepted?)
      (>>= (partial
            load-droppped-file
            (:on-file-will-load props)
            (:on-file-loaded props))))
  (swap! state #(-> % (assoc :status :usual))))

(defmulti get-class-by-status (fn [_ {status :status}] status))

(defmethod get-class-by-status :usual [{class :class} _]
  class)

(defmethod get-class-by-status :accepted [{:keys [class accepted-class]} _]
  (str class " " (or accepted-class "")))

(defmethod get-class-by-status :rejected [{:keys [class rejected-class]} _]
  (str class " " (or rejected-class "")))

(defn dropzone [props children]
  (let [file-input (atom nil)
        state (r/atom {:status :usual})
        -on-click (partial on-click file-input)
        -on-drag-start (partial on-drag-start state)
        -on-drag-enter (partial on-drag-enter state)
        -on-drag-over (partial on-drag-over state)
        -on-drag-leave (partial on-drag-leave state)
        -on-drop (partial on-drop state)]
    (fn [props children]
      [:div (-> props
                (dissoc :accepted?)
                (dissoc :accepted-class)
                (dissoc :rejected-class)
                (dissoc :on-file-will-load)
                (dissoc :on-file-loaded)
                (merge
                 {:class (get-class-by-status props @state)
                  :on-click -on-click
                  :on-drag-start -on-drag-start
                  :on-drag-enter (partial -on-drag-enter props)
                  :on-drag-over -on-drag-over
                  :on-drag-leave -on-drag-leave
                  :on-drop (partial -on-drop props)}))
       children
       [:input {:style {:display "none"}
                :accept true
                :type "file"
                :multiple false
                :on-change (partial -on-drop props)
                :ref #(reset! file-input %)}]])))
