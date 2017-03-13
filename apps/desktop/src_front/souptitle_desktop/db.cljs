(ns souptitle-desktop.db
  (:require [serials-model.core :refer [create-node create-leaf]]))

(def fake-content
  (->> [(create-node
         0
         {:path "" :title "First serial" :type :serial})
        (create-node
         1
         {:path "" :title "Second serial" :type :serial})]
       (map
        (fn [el]
          (assoc
           el
           :content
           (->> [(create-node
                  0
                  {:path "" :title "First season" :type :season})
                 (create-node
                  1
                  {:path "" :title "Second season" :type :season})]
                (map #(assoc
                       %
                       :content
                       [(create-leaf
                         0
                         {:path "" :title "First chapter" :type :chapter})
                        (create-leaf
                         1
                         {:path "" :title "Second chapter" :type :chapter})]))))))))

(def default-db
  {:message "Hello from Souptitle db"
   :content fake-content})
