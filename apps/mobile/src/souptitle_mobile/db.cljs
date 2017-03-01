(ns souptitle-mobile.db)

;; initial state of app-db
(def app-db {:sort-chapter :by-rank
             :translate {:show? false
                         :term nil
                         :translate nil
                         :sentence nil}
             :target-lang "ru"
             :show-search? false
             :search-predicate ""
             :show-serial-bars? false
             :active-content [0 0 0]
             :content nil
             :well-known-terms {}
             :nav {:route :serials
                   :props nil}
             :show-network-error? false})
