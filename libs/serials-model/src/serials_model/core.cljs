(ns serials-model.core)

(defn foo []
  "Hi from Serials Model!")

(defn create-node
  ([id {path :path, :as all}]
   {:id id
    :meta (dissoc all :path)
    :path path
    :content []}))

(defn create-leaf [id raw]
  (-> (create-node id raw)
      (dissoc :content)))

(defn parse-serials [serials]
  (->> serials (map-indexed create-node)))

(defn parse-seasons [seasons]
  (->> seasons (map-indexed create-node)))

(defn parse-chapters [chapters]
  (->> chapters (map-indexed create-leaf)))

(defn set-active-serial [serial-id active-content-index]
  (assoc active-content-index 0 serial-id))

(defn set-active-season [season-id active-content-index]
  (assoc active-content-index 1 season-id))

(defn set-active-chapter [chapter-id active-content-index]
  (assoc active-content-index 2 chapter-id))

;; TODO: think about lenses

(defn save-nth [arr el-num]
  (if (>= el-num (count arr))
    nil
    (nth arr el-num)))

(defn update-serials [content index updater]
  (updater content))

(defn get-serial-by-index [content index]
  (-> content
      (save-nth (first index))))

(defn update-serial [content index updater]
  (update-serials
   content
   index
   (fn [serials]
     (-> (vec serials)
         (update (first index) updater)))))

(defn get-seasons-by-index [content index]
  (-> (get-serial-by-index content index)
      (:content)))

(defn update-seasons [content index updater]
  (update-serial
   content
   index
   (fn [serial]
     (-> serial
         (update :content updater)))))

(defn get-season-by-index [content index]
  (-> (get-seasons-by-index content index)
      (save-nth (-> index (rest) (first)))))

(defn update-season [content index updater]
  (update-seasons
   content
   index
   (fn [seasons]
     (-> (vec seasons)
         (update (-> index (rest) (first)) updater)))))

(defn get-chapters-by-index [content index]
  (-> (get-season-by-index content index)
      (:content)))

(defn update-chapters [content index updater]
  (update-season
   content
   index
   (fn [season]
     (-> season
         (update :content updater)))))

(defn get-chapter-by-index [content index]
  (-> (get-chapters-by-index content index)
      (save-nth (-> index (rest) (rest) (first)))))

(defn get-chapter-content-by-index [content index]
  (-> (get-chapter-by-index content index)
      (:content)))

(defn update-chapter [content index updater]
  (update-chapters
   content
   index
   (fn [chapters]
     (-> (vec chapters)
         (update (-> index (rest) (rest) (first)) updater)))))
