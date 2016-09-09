(ns teach-by-friends.remote-db-service)

(defn fetch
  ([url]
   (js/fetch url))
  ([url config]
   (js/fetch url (clj->js config))))


(defn parse-response [promise]
  (-> promise
      (.then #(.text %))))

(defn response-from-json [promise]
  (-> promise
      (.then #(js->clj (js/JSON.parse %) :keywordize-keys true))))

(defn to-json [data]
  (js/JSON.stringify (clj->js data)))

(defprotocol IRemoteDB
  (download [db path] "Load any file from file storage")
  (download-json [db path] "Load JSON from remote file storage"))

(def ^:private GITHUB_DOWNLOAD_URL
  "https://raw.githubusercontent.com/savelichalex/friends-app-db/master")
(deftype GithubDB [auth-api-key]
  IRemoteDB
  (download [_ path]
    (-> (fetch (str GITHUB_DOWNLOAD_URL path))
        (parse-response)))
  (download-json [self path]
    (-> (download self path)
        (response-from-json))))

(def ^:private DROPBOX_DOWNLOAD_URL
  "https://content.dropboxapi.com/2/files/download")
(deftype DropboxDB [auth-api-key]
  IRemoteDB
  (download [_ path]
    (print path)
    (-> (fetch
          DROPBOX_DOWNLOAD_URL
          {:headers {:Authorization (str "Bearer " auth-api-key)
                     :Dropbox-API-Arg (to-json {:path path})}})
        (parse-response)
        (.catch #(print %))))
  (download-json [self path]
    (-> (download self path)
        (response-from-json))))