(ns souptitle-desktop.manager.views.tree)

(defn tree-node [{:keys [content] :as node} node-comp tree]
  [:div
   [:div (node-comp node)]
   (when (not (nil? content))
     [tree content node-comp {:padding-left "10px"}])])

(defn tree-comp [content node-comp style]
  (into [:div {:style style}]
        (->> content
             (map #(identity [tree-node % node-comp tree-comp])))))

(defn tree [{:keys [content node-comp]}]
  [tree-comp content node-comp nil])

(defmulti node (fn [el] (-> el :meta :type)))

(defmethod node :serial [{{:keys [title]} :meta}]
  [:span (str "Serial: " title)])

(defmethod node :season [{{:keys [title]} :meta}]
  [:span (str "Season: " title)])

(defmethod node :chapter [{{:keys [title]} :meta}]
  [:span (str "Chapter: " title)])
