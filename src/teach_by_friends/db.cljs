(ns teach-by-friends.db
  (:require [schema.core :as s :include-macros true]
            [teach-by-friends.parser :refer [parse-srt]]
						[teach-by-friends.srt :refer [FriendsS02-05]]))

(enable-console-print!)

(def chapter (parse-srt FriendsS02-05))

;; initial state of app-db
(def app-db {:chapter chapter
						 :sort-chapter :by-rank
						 :term-translate nil
						 :target-lang "ru"
						 :seasons-list nil
						 :chapters-list nil
						 :nav {:route nil
									 :props nil}})