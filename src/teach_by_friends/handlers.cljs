(ns teach-by-friends.handlers
  (:require
    [re-frame.core :refer [register-handler after]]
    [schema.core :as s :include-macros true]
    [teach-by-friends.db :refer [app-db]]))

;; -- Middleware ------------------------------------------------------------
;;
;; See https://github.com/Day8/re-frame/wiki/Using-Handler-Middleware
;;

;; -- Handlers --------------------------------------------------------------

(register-handler
  :initialize-db
  ;validate-schema-mw
  (fn [_ _]
    app-db))

(register-handler
  :set-greeting
  ;validate-schema-mw
  (fn [db [_ value]]
    (assoc db :greeting value)))