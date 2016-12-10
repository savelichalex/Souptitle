(ns teach-by-friends.db)

;; initial state of app-db
(def app-db {:chapter nil
             :sort-chapter :by-rank
             :term-to-translate nil
             :term-translate nil
             :target-lang "ru"
             :seasons-list nil
             :chapters-list nil
             :show-search? false
             :search-predicate ""
             :show-serial-bars? false
             :well-known-terms {}
             :nav {:route :serials
                   :props nil}})