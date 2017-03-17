(ns souptitle-desktop.manager.views.content)

(defmulti content (fn [el] (-> el :meta :type)))

(defmethod content :nothing-active [{{:keys [title]} :meta}]
  [:span (str "Choose some in tree")])

(defmethod content :serial [{{:keys [title]} :meta}]
  [:span (str "This is serial: " title)])

(defmethod content :season [{{:keys [title]} :meta}]
  [:span (str "This is season: " title)])

(defmethod content :chapter [{{:keys [title]} :meta}]
  [:span (str "This is chapter: " title)])
