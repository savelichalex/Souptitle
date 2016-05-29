(ns teach-by-friends.db
  (:require [schema.core :as s :include-macros true]
            [teach-by-friends.parser :refer [parse-srt]]
						[teach-by-friends.srt :refer [FriendsS02-05]]))

(def chapter (parse-srt FriendsS02-05))

;; initial state of app-db
(def app-db {:chapter chapter :sort-chapter :by-rank})
