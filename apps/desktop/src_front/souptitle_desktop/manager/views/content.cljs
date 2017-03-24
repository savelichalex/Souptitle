(ns souptitle-desktop.manager.views.content)

(defmulti content (fn [el] (-> el :meta :type)))

(defmethod content :nothing-active [{{:keys [title]} :meta}]
  [:span (str "Choose some in tree")])

(defmethod content :serial [{{:keys [title]} :meta}]
  [:span (str "This is serial: " title)])

(defmethod content :season [{{:keys [title]} :meta}]
  [:span (str "This is season: " title)])

(defmethod content :chapter [{{:keys [title src]} :meta}]
  [:div {:style {:flex 1
                 :display "flex"
                 :flex-direction "column"
                 :padding "10px 20px"}}
   [:h1 {:style {:font-size "18px"
                 :font-family "Roboto"}} title]
   [:div {:style {:display "flex" :flex-direction "row"}}
    [:input {:style {:flex 3}}]
    [:button {:style {:flex 1}} "Load"]]
   [:textarea {:style {:flex 1}
               :value src}]])
