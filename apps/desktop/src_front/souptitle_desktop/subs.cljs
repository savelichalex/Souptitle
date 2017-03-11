(ns souptitle-desktop.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :get-message
 (fn [db _]
   (:message db)))
