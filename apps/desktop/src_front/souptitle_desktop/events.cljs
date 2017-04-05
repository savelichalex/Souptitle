(ns souptitle-desktop.events
  (:require [souptitle-desktop.db :refer [default-db]]
            [re-frame.core :refer [reg-event-db reg-event-fx reg-fx dispatch]]
            [serials-model.core :as sm]
            [souptitle-desktop.common.utils.load-srt :refer [load-srt]]))

;; ----- Effects -------------

(reg-fx
 :load-srt
 (fn load-srt-effect [{:keys [url on-load]}]
   (-> (load-srt url)
       (.then #(dispatch [on-load %]))
       (.catch #(print %)))))

;; ----- Event Handlers -------

(reg-event-db
 :initialize-db
 (fn [db _]
   default-db))

(reg-event-db
 :set-active-serial
 (fn [db [_ id]]
   (-> db
       (assoc :active-content id))))

(reg-event-db
 :set-active-season
 (fn [db [_ id]]
   (-> db
       (assoc :active-content id))))

(reg-event-db
 :set-active-chapter
 (fn [db [_ id]]
   (-> db
       (assoc :active-content id))))

(defn update-chapter-meta [key]
  (fn [{:keys [content active-content] :as db} [_ val]]
    (-> db
        (assoc
         :content
         (sm/update-chapter
          content
          active-content
          (fn [chapter]
            (assoc-in chapter [:meta key] val)))))))

(reg-event-db
 :update-chapter-title
 (update-chapter-meta :title))

(reg-event-db
 :update-chapter-raw-srt
 (update-chapter-meta :src))

;; TODO: make new entity active

(reg-event-db
 :add-new-serial
 (fn [{:keys [content active-content] :as db} [_ val]]
   (-> db
       (update
        :content
        (fn [content]
          (-> content
              (conj (sm/create-node {:title "New serial"}))))))))

(reg-event-db
 :add-new-season
 (fn [{:keys [content active-content] :as db} [_ val]]
   (-> db
       (update
        :content
        (sm/update-seasons
         content
         active-content
         (fn [seasons]
           (-> seasons
               (conj (sm/create-node {:title "New season"})))))))))

(reg-event-db
 :add-new-chapter
 (fn [{:keys [content active-content] :as db} [_ val]]
   (-> db
       (update
        :content
        (sm/update-chapters
         content
         active-content
         (fn [chapters]
           (-> chapters
               (conj (sm/create-leaf {:title "New season"})))))))))

(reg-event-fx
 :load-link-with-srt
 (fn [_ [_ url]]
   {:load-srt {:url url :on-load :update-chapter-raw-srt}}))
