// Compiled by ClojureScript 1.7.170 {}
goog.provide('teach_by_friends.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('schema.core');
goog.require('teach_by_friends.db');
goog.require('teach_by_friends.parser');
goog.require('teach_by_friends.shared.ui');
goog.require('teach_by_friends.remote_db_service');
cljs.core.enable_console_print_BANG_.call(null);
teach_by_friends.handlers.ReactNative = require("react-native");
teach_by_friends.handlers.NativeModules = teach_by_friends.handlers.ReactNative.NativeModules;
teach_by_friends.handlers.SecretConfigManager = teach_by_friends.handlers.NativeModules.SecretConfigManager;
teach_by_friends.handlers.SecretConfigManager.getConfig("SecretConfig",(function (a){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),cljs.core.js__GT_clj.call(null,a,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null));
}));
teach_by_friends.handlers.YANDEX_TRANSLATE_API_KEY = "trnsl.1.1.20160530T190821Z.59ce9ff185d1c573.e05024eb700b7792b46b29fd152cecc6e2aa0ca4";
teach_by_friends.handlers.SERIALS_URL = "/serials.json";
teach_by_friends.handlers.get_query_string_for_translate = (function teach_by_friends$handlers$get_query_string_for_translate(term,lang){
return [cljs.core.str("https://translate.yandex.net/api/v1.5/tr.json/translate?"),cljs.core.str("text="),cljs.core.str(term),cljs.core.str("&lang=en-"),cljs.core.str(lang),cljs.core.str("&key="),cljs.core.str(teach_by_friends.handlers.YANDEX_TRANSLATE_API_KEY)].join('');
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,p__20059){
var vec__20060 = p__20059;
var ___$1 = cljs.core.nth.call(null,vec__20060,(0),null);
var app_config = cljs.core.nth.call(null,vec__20060,(1),null);
var remote_db = (new teach_by_friends.remote_db_service.__GT_DropboxDB(new cljs.core.Keyword(null,"DropboxOAuthToken","DropboxOAuthToken",-1008051842).cljs$core$IFn$_invoke$arity$1(app_config)));
return cljs.core.assoc.call(null,teach_by_friends.db.app_db,new cljs.core.Keyword(null,"remote-db","remote-db",-1151515528),remote_db);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"serials-load-success","serials-load-success",1802279900),(function (db,p__20061){
var vec__20062 = p__20061;
var _ = cljs.core.nth.call(null,vec__20062,(0),null);
var serials = cljs.core.nth.call(null,vec__20062,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"serials-list","serials-list",741269226),serials);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"serials-load-error","serials-load-error",52431066),(function (db,p__20063){
var vec__20064 = p__20063;
var _ = cljs.core.nth.call(null,vec__20064,(0),null);
var error = cljs.core.nth.call(null,vec__20064,(1),null);
cljs.core.print.call(null,error);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"seasons-load","seasons-load",950204241),(function (db,p__20067){
var vec__20068 = p__20067;
var _ = cljs.core.nth.call(null,vec__20068,(0),null);
var map__20069 = cljs.core.nth.call(null,vec__20068,(1),null);
var map__20069__$1 = ((((!((map__20069 == null)))?((((map__20069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20069):map__20069);
var seasons = cljs.core.get.call(null,map__20069__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var title = cljs.core.get.call(null,map__20069__$1,new cljs.core.Keyword(null,"title","title",636505583));
setTimeout(((function (vec__20068,_,map__20069,map__20069__$1,seasons,title){
return (function (){
return teach_by_friends.remote_db_service.download_json.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"remote-db","remote-db",-1151515528)),seasons).then(((function (vec__20068,_,map__20069,map__20069__$1,seasons,title){
return (function (p1__20065_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seasons-load-success","seasons-load-success",-347476544),p1__20065_SHARP_], null));
});})(vec__20068,_,map__20069,map__20069__$1,seasons,title))
).catch(((function (vec__20068,_,map__20069,map__20069__$1,seasons,title){
return (function (p1__20066_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seasons-load-error","seasons-load-error",1711712249),p1__20066_SHARP_], null));
});})(vec__20068,_,map__20069,map__20069__$1,seasons,title))
);
});})(vec__20068,_,map__20069,map__20069__$1,seasons,title))
,(300));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"seasons-list","seasons-list",1682515118),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"route","route",329891309)], null),new cljs.core.Keyword(null,"seasons","seasons",1033111474)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"props","props",453281727)], null),title),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"push","push",799791267));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"seasons-load-success","seasons-load-success",-347476544),(function (db,p__20071){
var vec__20072 = p__20071;
var _ = cljs.core.nth.call(null,vec__20072,(0),null);
var seasons = cljs.core.nth.call(null,vec__20072,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"seasons-list","seasons-list",1682515118),seasons);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"seasons-load-error","seasons-load-error",1711712249),(function (db,p__20073){
var vec__20074 = p__20073;
var _ = cljs.core.nth.call(null,vec__20074,(0),null);
var error = cljs.core.nth.call(null,vec__20074,(1),null);
cljs.core.print.call(null,error);

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"resort-chapter","resort-chapter",-606074972),(function (db,p__20075){
var vec__20076 = p__20075;
var _ = cljs.core.nth.call(null,vec__20076,(0),null);
var sort_type = cljs.core.nth.call(null,vec__20076,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sort-chapter","sort-chapter",-1653976856),sort_type);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword("nav","pop","nav/pop",-1734698693),(function (db,p__20077){
var vec__20078 = p__20077;
var _ = cljs.core.nth.call(null,vec__20078,(0),null);
var route = cljs.core.nth.call(null,vec__20078,(1),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"route","route",329891309)], null),route),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"pop","pop",-1734778776));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"translate-term","translate-term",767769496),(function (db,p__20081){
var vec__20082 = p__20081;
var _ = cljs.core.nth.call(null,vec__20082,(0),null);
var term = cljs.core.nth.call(null,vec__20082,(1),null);
teach_by_friends.remote_db_service.response_from_json.call(null,teach_by_friends.remote_db_service.parse_response.call(null,fetch(teach_by_friends.handlers.get_query_string_for_translate.call(null,term,new cljs.core.Keyword(null,"target-lang","target-lang",1237032111).cljs$core$IFn$_invoke$arity$1(db))))).then(((function (vec__20082,_,term){
return (function (p1__20079_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"term-translate-success","term-translate-success",-999551347),term,p1__20079_SHARP_], null));
});})(vec__20082,_,term))
).catch(((function (vec__20082,_,term){
return (function (p1__20080_SHARP_){
return cljs.core.print.call(null,p1__20080_SHARP_);
});})(vec__20082,_,term))
);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"term-to-translate","term-to-translate",-797183124),term),new cljs.core.Keyword(null,"term-translate","term-translate",-1448030054),null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"term-translate-success","term-translate-success",-999551347),(function (db,p__20083){
var vec__20084 = p__20083;
var _ = cljs.core.nth.call(null,vec__20084,(0),null);
var term = cljs.core.nth.call(null,vec__20084,(1),null);
var translate = cljs.core.nth.call(null,vec__20084,(2),null);
var in_chapter = cljs.core.first.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chapter","chapter",-238644368),term], null)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"term-translate","term-translate",-1448030054),cljs.core.assoc.call(null,in_chapter,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(translate)));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword("nav","pop-term","nav/pop-term",-2035197625),(function (db,_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nav","pop","nav/pop",-1734698693),new cljs.core.Keyword(null,"chapter","chapter",-238644368)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"term-translate","term-translate",-1448030054),null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"chapters-load","chapters-load",-629452251),(function (db,p__20087){
var vec__20088 = p__20087;
var _ = cljs.core.nth.call(null,vec__20088,(0),null);
var map__20089 = cljs.core.nth.call(null,vec__20088,(1),null);
var map__20089__$1 = ((((!((map__20089 == null)))?((((map__20089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20089):map__20089);
var chapters = cljs.core.get.call(null,map__20089__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var title = cljs.core.get.call(null,map__20089__$1,new cljs.core.Keyword(null,"title","title",636505583));
setTimeout(((function (vec__20088,_,map__20089,map__20089__$1,chapters,title){
return (function (){
return teach_by_friends.remote_db_service.download_json.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"remote-db","remote-db",-1151515528)),chapters).then(((function (vec__20088,_,map__20089,map__20089__$1,chapters,title){
return (function (chapters__$1){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chapter-load","chapter-load",-1996615859),(0),cljs.core.first.call(null,chapters__$1)], null));

return chapters__$1;
});})(vec__20088,_,map__20089,map__20089__$1,chapters,title))
).then(((function (vec__20088,_,map__20089,map__20089__$1,chapters,title){
return (function (p1__20085_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chapters-load-success","chapters-load-success",1099664111),p1__20085_SHARP_], null));
});})(vec__20088,_,map__20089,map__20089__$1,chapters,title))
).catch(((function (vec__20088,_,map__20089,map__20089__$1,chapters,title){
return (function (p1__20086_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chapters-load-error","chapters-load-error",462135402),p1__20086_SHARP_], null));
});})(vec__20088,_,map__20089,map__20089__$1,chapters,title))
);
});})(vec__20088,_,map__20089,map__20089__$1,chapters,title))
,(300));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chapter","chapter",-238644368),null),new cljs.core.Keyword(null,"chapters-list","chapters-list",-1697596234),null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"route","route",329891309)], null),new cljs.core.Keyword(null,"chapter","chapter",-238644368)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"props","props",453281727)], null),title),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"type","type",1174270348)], null),new cljs.core.Keyword(null,"push","push",799791267));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"chapters-load-success","chapters-load-success",1099664111),(function (db,p__20093){
var vec__20094 = p__20093;
var _ = cljs.core.nth.call(null,vec__20094,(0),null);
var chapters = cljs.core.nth.call(null,vec__20094,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chapters-list","chapters-list",-1697596234),cljs.core.map_indexed.call(null,((function (vec__20094,_,chapters){
return (function (p1__20092_SHARP_,p2__20091_SHARP_){
return cljs.core.assoc.call(null,p2__20091_SHARP_,new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.call(null,p1__20092_SHARP_,(0)));
});})(vec__20094,_,chapters))
,chapters));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"chapters-load-error","chapters-load-error",462135402),(function (db,p__20095){
var vec__20096 = p__20095;
var _ = cljs.core.nth.call(null,vec__20096,(0),null);
var error = cljs.core.nth.call(null,vec__20096,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chapters-list","chapters-list",-1697596234),null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"chapter-load","chapter-load",-1996615859),(function (db,p__20100){
var vec__20101 = p__20100;
var _ = cljs.core.nth.call(null,vec__20101,(0),null);
var number = cljs.core.nth.call(null,vec__20101,(1),null);
var map__20102 = cljs.core.nth.call(null,vec__20101,(2),null);
var map__20102__$1 = ((((!((map__20102 == null)))?((((map__20102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20102):map__20102);
var srt = cljs.core.get.call(null,map__20102__$1,new cljs.core.Keyword(null,"path","path",-188191168));
teach_by_friends.remote_db_service.download.call(null,cljs.core.get.call(null,db,new cljs.core.Keyword(null,"remote-db","remote-db",-1151515528)),srt).then(((function (vec__20101,_,number,map__20102,map__20102__$1,srt){
return (function (p1__20097_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srt-load-success","srt-load-success",2015081144),teach_by_friends.parser.parse_srt.call(null,p1__20097_SHARP_)], null));
});})(vec__20101,_,number,map__20102,map__20102__$1,srt))
).catch(((function (vec__20101,_,number,map__20102,map__20102__$1,srt){
return (function (p1__20098_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srt-load-error","srt-load-error",-1882753327),p1__20098_SHARP_], null));
});})(vec__20101,_,number,map__20102,map__20102__$1,srt))
);

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"chapters-list","chapters-list",-1697596234),((function (vec__20101,_,number,map__20102,map__20102__$1,srt){
return (function (p1__20099_SHARP_){
return cljs.core.map_indexed.call(null,((function (vec__20101,_,number,map__20102,map__20102__$1,srt){
return (function (index,chapter){
return cljs.core.assoc.call(null,chapter,new cljs.core.Keyword(null,"active?","active?",459499776),cljs.core._EQ_.call(null,index,number));
});})(vec__20101,_,number,map__20102,map__20102__$1,srt))
,p1__20099_SHARP_);
});})(vec__20101,_,number,map__20102,map__20102__$1,srt))
),new cljs.core.Keyword(null,"chapter","chapter",-238644368),null),new cljs.core.Keyword(null,"sort-chapter","sort-chapter",-1653976856),new cljs.core.Keyword(null,"by-rank","by-rank",-1696056256));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"srt-load-success","srt-load-success",2015081144),(function (db,p__20104){
var vec__20105 = p__20104;
var _ = cljs.core.nth.call(null,vec__20105,(0),null);
var chapter = cljs.core.nth.call(null,vec__20105,(1),null);
cljs.core.print.call(null,chapter);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chapter","chapter",-238644368),chapter);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"srt-load-error","srt-load-error",-1882753327),(function (db,p__20106){
var vec__20107 = p__20106;
var _ = cljs.core.nth.call(null,vec__20107,(0),null);
var error = cljs.core.nth.call(null,vec__20107,(1),null);
cljs.core.print.call(null,error);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chapter","chapter",-238644368),null);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"toggle-search","toggle-search",-171716059),(function (db,_){
return cljs.core.update.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-predicate","search-predicate",-1704442311),""),new cljs.core.Keyword(null,"show-search?","show-search?",684663920),cljs.core.not);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"change-search-predicate","change-search-predicate",345055281),(function (db,p__20108){
var vec__20109 = p__20108;
var _ = cljs.core.nth.call(null,vec__20109,(0),null);
var predicate = cljs.core.nth.call(null,vec__20109,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"search-predicate","search-predicate",-1704442311),predicate);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-to-well-known","add-to-well-known",1817994438),(function (db,p__20110){
var vec__20111 = p__20110;
var _ = cljs.core.nth.call(null,vec__20111,(0),null);
var term = cljs.core.nth.call(null,vec__20111,(1),null);
return cljs.core.update.call(null,db,new cljs.core.Keyword(null,"well-known-terms","well-known-terms",953034400),cljs.core.conj,term);
}));

//# sourceMappingURL=handlers.js.map