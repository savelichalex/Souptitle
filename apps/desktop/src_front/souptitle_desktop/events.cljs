(ns souptitle-desktop.events
  (:require [souptitle-desktop.db :refer [default-db]]
            [re-frame.core :refer [reg-event-db]]
            [serials-model.core :as sm]))

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

(reg-event-db
 :update-chapter-raw-srt
 (fn [{:keys [content active-content] :as db} [_ new-srt]]
   (-> db
       (assoc
        :content
        (sm/update-chapter
         content
         active-content
         (fn [chapter]
           (assoc-in chapter [:meta :src] new-srt)))))))
