// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.remote_db_service');
goog.require('cljs.core');
teach_by_friends.remote_db_service.fetch = (function teach_by_friends$remote_db_service$fetch(var_args){
var args18145 = [];
var len__17892__auto___18148 = arguments.length;
var i__17893__auto___18149 = (0);
while(true){
if((i__17893__auto___18149 < len__17892__auto___18148)){
args18145.push((arguments[i__17893__auto___18149]));

var G__18150 = (i__17893__auto___18149 + (1));
i__17893__auto___18149 = G__18150;
continue;
} else {
}
break;
}

var G__18147 = args18145.length;
switch (G__18147) {
case 1:
return teach_by_friends.remote_db_service.fetch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return teach_by_friends.remote_db_service.fetch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18145.length)].join('')));

}
});

teach_by_friends.remote_db_service.fetch.cljs$core$IFn$_invoke$arity$1 = (function (url){
return fetch(url);
});

teach_by_friends.remote_db_service.fetch.cljs$core$IFn$_invoke$arity$2 = (function (url,config){
return fetch(url,cljs.core.clj__GT_js.call(null,config));
});

teach_by_friends.remote_db_service.fetch.cljs$lang$maxFixedArity = 2;
teach_by_friends.remote_db_service.parse_response = (function teach_by_friends$remote_db_service$parse_response(promise){
return promise.then((function (p1__18152_SHARP_){
return p1__18152_SHARP_.text();
}));
});
teach_by_friends.remote_db_service.response_from_json = (function teach_by_friends$remote_db_service$response_from_json(promise){
return promise.then((function (p1__18153_SHARP_){
return cljs.core.js__GT_clj.call(null,JSON.parse(p1__18153_SHARP_),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}));
});
teach_by_friends.remote_db_service.to_json = (function teach_by_friends$remote_db_service$to_json(data){
return JSON.stringify(cljs.core.clj__GT_js.call(null,data));
});

/**
 * @interface
 */
teach_by_friends.remote_db_service.IRemoteDB = function(){};

/**
 * Load any file from file storage
 */
teach_by_friends.remote_db_service.download = (function teach_by_friends$remote_db_service$download(db,path){
if((!((db == null))) && (!((db.teach_by_friends$remote_db_service$IRemoteDB$download$arity$2 == null)))){
return db.teach_by_friends$remote_db_service$IRemoteDB$download$arity$2(db,path);
} else {
var x__17489__auto__ = (((db == null))?null:db);
var m__17490__auto__ = (teach_by_friends.remote_db_service.download[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,db,path);
} else {
var m__17490__auto____$1 = (teach_by_friends.remote_db_service.download["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,db,path);
} else {
throw cljs.core.missing_protocol.call(null,"IRemoteDB.download",db);
}
}
}
});

/**
 * Load JSON from remote file storage
 */
teach_by_friends.remote_db_service.download_json = (function teach_by_friends$remote_db_service$download_json(db,path){
if((!((db == null))) && (!((db.teach_by_friends$remote_db_service$IRemoteDB$download_json$arity$2 == null)))){
return db.teach_by_friends$remote_db_service$IRemoteDB$download_json$arity$2(db,path);
} else {
var x__17489__auto__ = (((db == null))?null:db);
var m__17490__auto__ = (teach_by_friends.remote_db_service.download_json[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,db,path);
} else {
var m__17490__auto____$1 = (teach_by_friends.remote_db_service.download_json["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,db,path);
} else {
throw cljs.core.missing_protocol.call(null,"IRemoteDB.download-json",db);
}
}
}
});

teach_by_friends.remote_db_service.GITHUB_DOWNLOAD_URL = "https://raw.githubusercontent.com/savelichalex/friends-app-db/master";

/**
* @constructor
 * @implements {teach_by_friends.remote_db_service.IRemoteDB}
*/
teach_by_friends.remote_db_service.GithubDB = (function (auth_api_key){
this.auth_api_key = auth_api_key;
})
teach_by_friends.remote_db_service.GithubDB.prototype.teach_by_friends$remote_db_service$IRemoteDB$ = true;

teach_by_friends.remote_db_service.GithubDB.prototype.teach_by_friends$remote_db_service$IRemoteDB$download$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return teach_by_friends.remote_db_service.parse_response.call(null,teach_by_friends.remote_db_service.fetch.call(null,[cljs.core.str(teach_by_friends.remote_db_service.GITHUB_DOWNLOAD_URL),cljs.core.str(path)].join('')));
});

teach_by_friends.remote_db_service.GithubDB.prototype.teach_by_friends$remote_db_service$IRemoteDB$download_json$arity$2 = (function (self,path){
var self__ = this;
var self__$1 = this;
return teach_by_friends.remote_db_service.response_from_json.call(null,teach_by_friends.remote_db_service.download.call(null,self__$1,path));
});

teach_by_friends.remote_db_service.GithubDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auth-api-key","auth-api-key",-533652441,null)], null);
});

teach_by_friends.remote_db_service.GithubDB.cljs$lang$type = true;

teach_by_friends.remote_db_service.GithubDB.cljs$lang$ctorStr = "teach-by-friends.remote-db-service/GithubDB";

teach_by_friends.remote_db_service.GithubDB.cljs$lang$ctorPrWriter = (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"teach-by-friends.remote-db-service/GithubDB");
});

teach_by_friends.remote_db_service.__GT_GithubDB = (function teach_by_friends$remote_db_service$__GT_GithubDB(auth_api_key){
return (new teach_by_friends.remote_db_service.GithubDB(auth_api_key));
});

teach_by_friends.remote_db_service.DROPBOX_DOWNLOAD_URL = "https://content.dropboxapi.com/2/files/download";

/**
* @constructor
 * @implements {teach_by_friends.remote_db_service.IRemoteDB}
*/
teach_by_friends.remote_db_service.DropboxDB = (function (auth_api_key){
this.auth_api_key = auth_api_key;
})
teach_by_friends.remote_db_service.DropboxDB.prototype.teach_by_friends$remote_db_service$IRemoteDB$ = true;

teach_by_friends.remote_db_service.DropboxDB.prototype.teach_by_friends$remote_db_service$IRemoteDB$download$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
cljs.core.print.call(null,path);

return teach_by_friends.remote_db_service.parse_response.call(null,teach_by_friends.remote_db_service.fetch.call(null,teach_by_friends.remote_db_service.DROPBOX_DOWNLOAD_URL,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),[cljs.core.str("Bearer "),cljs.core.str(self__.auth_api_key)].join(''),new cljs.core.Keyword(null,"Dropbox-API-Arg","Dropbox-API-Arg",-574693786),teach_by_friends.remote_db_service.to_json.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null))], null)], null))).catch(((function (___$1){
return (function (p1__18154_SHARP_){
return cljs.core.print.call(null,p1__18154_SHARP_);
});})(___$1))
);
});

teach_by_friends.remote_db_service.DropboxDB.prototype.teach_by_friends$remote_db_service$IRemoteDB$download_json$arity$2 = (function (self,path){
var self__ = this;
var self__$1 = this;
return teach_by_friends.remote_db_service.response_from_json.call(null,teach_by_friends.remote_db_service.download.call(null,self__$1,path));
});

teach_by_friends.remote_db_service.DropboxDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"auth-api-key","auth-api-key",-533652441,null)], null);
});

teach_by_friends.remote_db_service.DropboxDB.cljs$lang$type = true;

teach_by_friends.remote_db_service.DropboxDB.cljs$lang$ctorStr = "teach-by-friends.remote-db-service/DropboxDB";

teach_by_friends.remote_db_service.DropboxDB.cljs$lang$ctorPrWriter = (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"teach-by-friends.remote-db-service/DropboxDB");
});

teach_by_friends.remote_db_service.__GT_DropboxDB = (function teach_by_friends$remote_db_service$__GT_DropboxDB(auth_api_key){
return (new teach_by_friends.remote_db_service.DropboxDB(auth_api_key));
});


//# sourceMappingURL=remote_db_service.js.map