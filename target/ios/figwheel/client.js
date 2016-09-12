// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31122 = cljs.core._EQ_;
var expr__31123 = (function (){var or__16834__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e31126){if((e31126 instanceof Error)){
var e = e31126;
return false;
} else {
throw e31126;

}
}})();
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31122.call(null,"true",expr__31123))){
return true;
} else {
if(cljs.core.truth_(pred__31122.call(null,"false",expr__31123))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31123)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e31128){if((e31128 instanceof Error)){
var e = e31128;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e31128;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17899__auto__ = [];
var len__17892__auto___31130 = arguments.length;
var i__17893__auto___31131 = (0);
while(true){
if((i__17893__auto___31131 < len__17892__auto___31130)){
args__17899__auto__.push((arguments[i__17893__auto___31131]));

var G__31132 = (i__17893__auto___31131 + (1));
i__17893__auto___31131 = G__31132;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((0) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17900__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq31129){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31129));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31133){
var map__31136 = p__31133;
var map__31136__$1 = ((((!((map__31136 == null)))?((((map__31136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31136):map__31136);
var message = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31136__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16834__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16822__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16822__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16822__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20811__auto___31298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___31298,ch){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___31298,ch){
return (function (state_31267){
var state_val_31268 = (state_31267[(1)]);
if((state_val_31268 === (7))){
var inst_31263 = (state_31267[(2)]);
var state_31267__$1 = state_31267;
var statearr_31269_31299 = state_31267__$1;
(statearr_31269_31299[(2)] = inst_31263);

(statearr_31269_31299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (1))){
var state_31267__$1 = state_31267;
var statearr_31270_31300 = state_31267__$1;
(statearr_31270_31300[(2)] = null);

(statearr_31270_31300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (4))){
var inst_31220 = (state_31267[(7)]);
var inst_31220__$1 = (state_31267[(2)]);
var state_31267__$1 = (function (){var statearr_31271 = state_31267;
(statearr_31271[(7)] = inst_31220__$1);

return statearr_31271;
})();
if(cljs.core.truth_(inst_31220__$1)){
var statearr_31272_31301 = state_31267__$1;
(statearr_31272_31301[(1)] = (5));

} else {
var statearr_31273_31302 = state_31267__$1;
(statearr_31273_31302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (15))){
var inst_31227 = (state_31267[(8)]);
var inst_31242 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31227);
var inst_31243 = cljs.core.first.call(null,inst_31242);
var inst_31244 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31243);
var inst_31245 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31244)].join('');
var inst_31246 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31245);
var state_31267__$1 = state_31267;
var statearr_31274_31303 = state_31267__$1;
(statearr_31274_31303[(2)] = inst_31246);

(statearr_31274_31303[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (13))){
var inst_31251 = (state_31267[(2)]);
var state_31267__$1 = state_31267;
var statearr_31275_31304 = state_31267__$1;
(statearr_31275_31304[(2)] = inst_31251);

(statearr_31275_31304[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (6))){
var state_31267__$1 = state_31267;
var statearr_31276_31305 = state_31267__$1;
(statearr_31276_31305[(2)] = null);

(statearr_31276_31305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (17))){
var inst_31249 = (state_31267[(2)]);
var state_31267__$1 = state_31267;
var statearr_31277_31306 = state_31267__$1;
(statearr_31277_31306[(2)] = inst_31249);

(statearr_31277_31306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (3))){
var inst_31265 = (state_31267[(2)]);
var state_31267__$1 = state_31267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31267__$1,inst_31265);
} else {
if((state_val_31268 === (12))){
var inst_31226 = (state_31267[(9)]);
var inst_31240 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31226,opts);
var state_31267__$1 = state_31267;
if(cljs.core.truth_(inst_31240)){
var statearr_31278_31307 = state_31267__$1;
(statearr_31278_31307[(1)] = (15));

} else {
var statearr_31279_31308 = state_31267__$1;
(statearr_31279_31308[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (2))){
var state_31267__$1 = state_31267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31267__$1,(4),ch);
} else {
if((state_val_31268 === (11))){
var inst_31227 = (state_31267[(8)]);
var inst_31232 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31233 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31227);
var inst_31234 = cljs.core.async.timeout.call(null,(1000));
var inst_31235 = [inst_31233,inst_31234];
var inst_31236 = (new cljs.core.PersistentVector(null,2,(5),inst_31232,inst_31235,null));
var state_31267__$1 = state_31267;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31267__$1,(14),inst_31236);
} else {
if((state_val_31268 === (9))){
var inst_31227 = (state_31267[(8)]);
var inst_31253 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31254 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31227);
var inst_31255 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31254);
var inst_31256 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31255)].join('');
var inst_31257 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31256);
var state_31267__$1 = (function (){var statearr_31280 = state_31267;
(statearr_31280[(10)] = inst_31253);

return statearr_31280;
})();
var statearr_31281_31309 = state_31267__$1;
(statearr_31281_31309[(2)] = inst_31257);

(statearr_31281_31309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (5))){
var inst_31220 = (state_31267[(7)]);
var inst_31222 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31223 = (new cljs.core.PersistentArrayMap(null,2,inst_31222,null));
var inst_31224 = (new cljs.core.PersistentHashSet(null,inst_31223,null));
var inst_31225 = figwheel.client.focus_msgs.call(null,inst_31224,inst_31220);
var inst_31226 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31225);
var inst_31227 = cljs.core.first.call(null,inst_31225);
var inst_31228 = figwheel.client.autoload_QMARK_.call(null);
var state_31267__$1 = (function (){var statearr_31282 = state_31267;
(statearr_31282[(9)] = inst_31226);

(statearr_31282[(8)] = inst_31227);

return statearr_31282;
})();
if(cljs.core.truth_(inst_31228)){
var statearr_31283_31310 = state_31267__$1;
(statearr_31283_31310[(1)] = (8));

} else {
var statearr_31284_31311 = state_31267__$1;
(statearr_31284_31311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (14))){
var inst_31238 = (state_31267[(2)]);
var state_31267__$1 = state_31267;
var statearr_31285_31312 = state_31267__$1;
(statearr_31285_31312[(2)] = inst_31238);

(statearr_31285_31312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (16))){
var state_31267__$1 = state_31267;
var statearr_31286_31313 = state_31267__$1;
(statearr_31286_31313[(2)] = null);

(statearr_31286_31313[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (10))){
var inst_31259 = (state_31267[(2)]);
var state_31267__$1 = (function (){var statearr_31287 = state_31267;
(statearr_31287[(11)] = inst_31259);

return statearr_31287;
})();
var statearr_31288_31314 = state_31267__$1;
(statearr_31288_31314[(2)] = null);

(statearr_31288_31314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31268 === (8))){
var inst_31226 = (state_31267[(9)]);
var inst_31230 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31226,opts);
var state_31267__$1 = state_31267;
if(cljs.core.truth_(inst_31230)){
var statearr_31289_31315 = state_31267__$1;
(statearr_31289_31315[(1)] = (11));

} else {
var statearr_31290_31316 = state_31267__$1;
(statearr_31290_31316[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20811__auto___31298,ch))
;
return ((function (switch__20790__auto__,c__20811__auto___31298,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20791__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20791__auto____0 = (function (){
var statearr_31294 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31294[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20791__auto__);

(statearr_31294[(1)] = (1));

return statearr_31294;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20791__auto____1 = (function (state_31267){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_31267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e31295){if((e31295 instanceof Object)){
var ex__20794__auto__ = e31295;
var statearr_31296_31317 = state_31267;
(statearr_31296_31317[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31318 = state_31267;
state_31267 = G__31318;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20791__auto__ = function(state_31267){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20791__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20791__auto____1.call(this,state_31267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20791__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20791__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___31298,ch))
})();
var state__20813__auto__ = (function (){var statearr_31297 = f__20812__auto__.call(null);
(statearr_31297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___31298);

return statearr_31297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___31298,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31319_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31319_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31326 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31326){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31324 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31325 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31325;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31324;
}}catch (e31323){if((e31323 instanceof Error)){
var e = e31323;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31326], null));
} else {
var e = e31323;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31326))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31327){
var map__31334 = p__31327;
var map__31334__$1 = ((((!((map__31334 == null)))?((((map__31334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31334):map__31334);
var opts = map__31334__$1;
var build_id = cljs.core.get.call(null,map__31334__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31334,map__31334__$1,opts,build_id){
return (function (p__31336){
var vec__31337 = p__31336;
var map__31338 = cljs.core.nth.call(null,vec__31337,(0),null);
var map__31338__$1 = ((((!((map__31338 == null)))?((((map__31338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31338):map__31338);
var msg = map__31338__$1;
var msg_name = cljs.core.get.call(null,map__31338__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31337,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31337,map__31338,map__31338__$1,msg,msg_name,_,map__31334,map__31334__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31337,map__31338,map__31338__$1,msg,msg_name,_,map__31334,map__31334__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31334,map__31334__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31344){
var vec__31345 = p__31344;
var map__31346 = cljs.core.nth.call(null,vec__31345,(0),null);
var map__31346__$1 = ((((!((map__31346 == null)))?((((map__31346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31346):map__31346);
var msg = map__31346__$1;
var msg_name = cljs.core.get.call(null,map__31346__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31345,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31348){
var map__31358 = p__31348;
var map__31358__$1 = ((((!((map__31358 == null)))?((((map__31358.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31358.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31358):map__31358);
var on_compile_warning = cljs.core.get.call(null,map__31358__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31358__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31358,map__31358__$1,on_compile_warning,on_compile_fail){
return (function (p__31360){
var vec__31361 = p__31360;
var map__31362 = cljs.core.nth.call(null,vec__31361,(0),null);
var map__31362__$1 = ((((!((map__31362 == null)))?((((map__31362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31362):map__31362);
var msg = map__31362__$1;
var msg_name = cljs.core.get.call(null,map__31362__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31361,(1));
var pred__31364 = cljs.core._EQ_;
var expr__31365 = msg_name;
if(cljs.core.truth_(pred__31364.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31365))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31364.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31365))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31358,map__31358__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20811__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto__,msg_hist,msg_names,msg){
return (function (state_31581){
var state_val_31582 = (state_31581[(1)]);
if((state_val_31582 === (7))){
var inst_31505 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31505)){
var statearr_31583_31629 = state_31581__$1;
(statearr_31583_31629[(1)] = (8));

} else {
var statearr_31584_31630 = state_31581__$1;
(statearr_31584_31630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (20))){
var inst_31575 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31585_31631 = state_31581__$1;
(statearr_31585_31631[(2)] = inst_31575);

(statearr_31585_31631[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (27))){
var inst_31571 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31586_31632 = state_31581__$1;
(statearr_31586_31632[(2)] = inst_31571);

(statearr_31586_31632[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (1))){
var inst_31498 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31498)){
var statearr_31587_31633 = state_31581__$1;
(statearr_31587_31633[(1)] = (2));

} else {
var statearr_31588_31634 = state_31581__$1;
(statearr_31588_31634[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (24))){
var inst_31573 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31589_31635 = state_31581__$1;
(statearr_31589_31635[(2)] = inst_31573);

(statearr_31589_31635[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (4))){
var inst_31579 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31581__$1,inst_31579);
} else {
if((state_val_31582 === (15))){
var inst_31577 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31590_31636 = state_31581__$1;
(statearr_31590_31636[(2)] = inst_31577);

(statearr_31590_31636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (21))){
var inst_31536 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31591_31637 = state_31581__$1;
(statearr_31591_31637[(2)] = inst_31536);

(statearr_31591_31637[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (31))){
var inst_31560 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31560)){
var statearr_31592_31638 = state_31581__$1;
(statearr_31592_31638[(1)] = (34));

} else {
var statearr_31593_31639 = state_31581__$1;
(statearr_31593_31639[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (32))){
var inst_31569 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31594_31640 = state_31581__$1;
(statearr_31594_31640[(2)] = inst_31569);

(statearr_31594_31640[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (33))){
var inst_31558 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31595_31641 = state_31581__$1;
(statearr_31595_31641[(2)] = inst_31558);

(statearr_31595_31641[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (13))){
var inst_31519 = figwheel.client.heads_up.clear.call(null);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31581__$1,(16),inst_31519);
} else {
if((state_val_31582 === (22))){
var inst_31540 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31541 = figwheel.client.heads_up.append_message.call(null,inst_31540);
var state_31581__$1 = state_31581;
var statearr_31596_31642 = state_31581__$1;
(statearr_31596_31642[(2)] = inst_31541);

(statearr_31596_31642[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (36))){
var inst_31567 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31597_31643 = state_31581__$1;
(statearr_31597_31643[(2)] = inst_31567);

(statearr_31597_31643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (29))){
var inst_31551 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31598_31644 = state_31581__$1;
(statearr_31598_31644[(2)] = inst_31551);

(statearr_31598_31644[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (6))){
var inst_31500 = (state_31581[(7)]);
var state_31581__$1 = state_31581;
var statearr_31599_31645 = state_31581__$1;
(statearr_31599_31645[(2)] = inst_31500);

(statearr_31599_31645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (28))){
var inst_31547 = (state_31581[(2)]);
var inst_31548 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31549 = figwheel.client.heads_up.display_warning.call(null,inst_31548);
var state_31581__$1 = (function (){var statearr_31600 = state_31581;
(statearr_31600[(8)] = inst_31547);

return statearr_31600;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31581__$1,(29),inst_31549);
} else {
if((state_val_31582 === (25))){
var inst_31545 = figwheel.client.heads_up.clear.call(null);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31581__$1,(28),inst_31545);
} else {
if((state_val_31582 === (34))){
var inst_31562 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31581__$1,(37),inst_31562);
} else {
if((state_val_31582 === (17))){
var inst_31527 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31601_31646 = state_31581__$1;
(statearr_31601_31646[(2)] = inst_31527);

(statearr_31601_31646[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (3))){
var inst_31517 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31517)){
var statearr_31602_31647 = state_31581__$1;
(statearr_31602_31647[(1)] = (13));

} else {
var statearr_31603_31648 = state_31581__$1;
(statearr_31603_31648[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (12))){
var inst_31513 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31604_31649 = state_31581__$1;
(statearr_31604_31649[(2)] = inst_31513);

(statearr_31604_31649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (2))){
var inst_31500 = (state_31581[(7)]);
var inst_31500__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31581__$1 = (function (){var statearr_31605 = state_31581;
(statearr_31605[(7)] = inst_31500__$1);

return statearr_31605;
})();
if(cljs.core.truth_(inst_31500__$1)){
var statearr_31606_31650 = state_31581__$1;
(statearr_31606_31650[(1)] = (5));

} else {
var statearr_31607_31651 = state_31581__$1;
(statearr_31607_31651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (23))){
var inst_31543 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31543)){
var statearr_31608_31652 = state_31581__$1;
(statearr_31608_31652[(1)] = (25));

} else {
var statearr_31609_31653 = state_31581__$1;
(statearr_31609_31653[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (35))){
var state_31581__$1 = state_31581;
var statearr_31610_31654 = state_31581__$1;
(statearr_31610_31654[(2)] = null);

(statearr_31610_31654[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (19))){
var inst_31538 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31538)){
var statearr_31611_31655 = state_31581__$1;
(statearr_31611_31655[(1)] = (22));

} else {
var statearr_31612_31656 = state_31581__$1;
(statearr_31612_31656[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (11))){
var inst_31509 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31613_31657 = state_31581__$1;
(statearr_31613_31657[(2)] = inst_31509);

(statearr_31613_31657[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (9))){
var inst_31511 = figwheel.client.heads_up.clear.call(null);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31581__$1,(12),inst_31511);
} else {
if((state_val_31582 === (5))){
var inst_31502 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31581__$1 = state_31581;
var statearr_31614_31658 = state_31581__$1;
(statearr_31614_31658[(2)] = inst_31502);

(statearr_31614_31658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (14))){
var inst_31529 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31529)){
var statearr_31615_31659 = state_31581__$1;
(statearr_31615_31659[(1)] = (18));

} else {
var statearr_31616_31660 = state_31581__$1;
(statearr_31616_31660[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (26))){
var inst_31553 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31553)){
var statearr_31617_31661 = state_31581__$1;
(statearr_31617_31661[(1)] = (30));

} else {
var statearr_31618_31662 = state_31581__$1;
(statearr_31618_31662[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (16))){
var inst_31521 = (state_31581[(2)]);
var inst_31522 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31523 = figwheel.client.format_messages.call(null,inst_31522);
var inst_31524 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31525 = figwheel.client.heads_up.display_error.call(null,inst_31523,inst_31524);
var state_31581__$1 = (function (){var statearr_31619 = state_31581;
(statearr_31619[(9)] = inst_31521);

return statearr_31619;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31581__$1,(17),inst_31525);
} else {
if((state_val_31582 === (30))){
var inst_31555 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31556 = figwheel.client.heads_up.display_warning.call(null,inst_31555);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31581__$1,(33),inst_31556);
} else {
if((state_val_31582 === (10))){
var inst_31515 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31620_31663 = state_31581__$1;
(statearr_31620_31663[(2)] = inst_31515);

(statearr_31620_31663[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (18))){
var inst_31531 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31532 = figwheel.client.format_messages.call(null,inst_31531);
var inst_31533 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31534 = figwheel.client.heads_up.display_error.call(null,inst_31532,inst_31533);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31581__$1,(21),inst_31534);
} else {
if((state_val_31582 === (37))){
var inst_31564 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31621_31664 = state_31581__$1;
(statearr_31621_31664[(2)] = inst_31564);

(statearr_31621_31664[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (8))){
var inst_31507 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31581__$1,(11),inst_31507);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20811__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20790__auto__,c__20811__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto____0 = (function (){
var statearr_31625 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31625[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto__);

(statearr_31625[(1)] = (1));

return statearr_31625;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto____1 = (function (state_31581){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_31581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e31626){if((e31626 instanceof Object)){
var ex__20794__auto__ = e31626;
var statearr_31627_31665 = state_31581;
(statearr_31627_31665[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31666 = state_31581;
state_31581 = G__31666;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto__ = function(state_31581){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto____1.call(this,state_31581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto__,msg_hist,msg_names,msg))
})();
var state__20813__auto__ = (function (){var statearr_31628 = f__20812__auto__.call(null);
(statearr_31628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto__);

return statearr_31628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto__,msg_hist,msg_names,msg))
);

return c__20811__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20811__auto___31729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___31729,ch){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___31729,ch){
return (function (state_31712){
var state_val_31713 = (state_31712[(1)]);
if((state_val_31713 === (1))){
var state_31712__$1 = state_31712;
var statearr_31714_31730 = state_31712__$1;
(statearr_31714_31730[(2)] = null);

(statearr_31714_31730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (2))){
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31712__$1,(4),ch);
} else {
if((state_val_31713 === (3))){
var inst_31710 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31712__$1,inst_31710);
} else {
if((state_val_31713 === (4))){
var inst_31700 = (state_31712[(7)]);
var inst_31700__$1 = (state_31712[(2)]);
var state_31712__$1 = (function (){var statearr_31715 = state_31712;
(statearr_31715[(7)] = inst_31700__$1);

return statearr_31715;
})();
if(cljs.core.truth_(inst_31700__$1)){
var statearr_31716_31731 = state_31712__$1;
(statearr_31716_31731[(1)] = (5));

} else {
var statearr_31717_31732 = state_31712__$1;
(statearr_31717_31732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (5))){
var inst_31700 = (state_31712[(7)]);
var inst_31702 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31700);
var state_31712__$1 = state_31712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31712__$1,(8),inst_31702);
} else {
if((state_val_31713 === (6))){
var state_31712__$1 = state_31712;
var statearr_31718_31733 = state_31712__$1;
(statearr_31718_31733[(2)] = null);

(statearr_31718_31733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (7))){
var inst_31708 = (state_31712[(2)]);
var state_31712__$1 = state_31712;
var statearr_31719_31734 = state_31712__$1;
(statearr_31719_31734[(2)] = inst_31708);

(statearr_31719_31734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31713 === (8))){
var inst_31704 = (state_31712[(2)]);
var state_31712__$1 = (function (){var statearr_31720 = state_31712;
(statearr_31720[(8)] = inst_31704);

return statearr_31720;
})();
var statearr_31721_31735 = state_31712__$1;
(statearr_31721_31735[(2)] = null);

(statearr_31721_31735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20811__auto___31729,ch))
;
return ((function (switch__20790__auto__,c__20811__auto___31729,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20791__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20791__auto____0 = (function (){
var statearr_31725 = [null,null,null,null,null,null,null,null,null];
(statearr_31725[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20791__auto__);

(statearr_31725[(1)] = (1));

return statearr_31725;
});
var figwheel$client$heads_up_plugin_$_state_machine__20791__auto____1 = (function (state_31712){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_31712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e31726){if((e31726 instanceof Object)){
var ex__20794__auto__ = e31726;
var statearr_31727_31736 = state_31712;
(statearr_31727_31736[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31737 = state_31712;
state_31712 = G__31737;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20791__auto__ = function(state_31712){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20791__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20791__auto____1.call(this,state_31712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20791__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20791__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___31729,ch))
})();
var state__20813__auto__ = (function (){var statearr_31728 = f__20812__auto__.call(null);
(statearr_31728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___31729);

return statearr_31728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___31729,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20811__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto__){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto__){
return (function (state_31758){
var state_val_31759 = (state_31758[(1)]);
if((state_val_31759 === (1))){
var inst_31753 = cljs.core.async.timeout.call(null,(3000));
var state_31758__$1 = state_31758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31758__$1,(2),inst_31753);
} else {
if((state_val_31759 === (2))){
var inst_31755 = (state_31758[(2)]);
var inst_31756 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31758__$1 = (function (){var statearr_31760 = state_31758;
(statearr_31760[(7)] = inst_31755);

return statearr_31760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31758__$1,inst_31756);
} else {
return null;
}
}
});})(c__20811__auto__))
;
return ((function (switch__20790__auto__,c__20811__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20791__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20791__auto____0 = (function (){
var statearr_31764 = [null,null,null,null,null,null,null,null];
(statearr_31764[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20791__auto__);

(statearr_31764[(1)] = (1));

return statearr_31764;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20791__auto____1 = (function (state_31758){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_31758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e31765){if((e31765 instanceof Object)){
var ex__20794__auto__ = e31765;
var statearr_31766_31768 = state_31758;
(statearr_31766_31768[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31769 = state_31758;
state_31758 = G__31769;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20791__auto__ = function(state_31758){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20791__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20791__auto____1.call(this,state_31758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20791__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20791__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto__))
})();
var state__20813__auto__ = (function (){var statearr_31767 = f__20812__auto__.call(null);
(statearr_31767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto__);

return statearr_31767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto__))
);

return c__20811__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31770){
var map__31777 = p__31770;
var map__31777__$1 = ((((!((map__31777 == null)))?((((map__31777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31777):map__31777);
var ed = map__31777__$1;
var formatted_exception = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31777__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31779_31783 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31780_31784 = null;
var count__31781_31785 = (0);
var i__31782_31786 = (0);
while(true){
if((i__31782_31786 < count__31781_31785)){
var msg_31787 = cljs.core._nth.call(null,chunk__31780_31784,i__31782_31786);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31787);

var G__31788 = seq__31779_31783;
var G__31789 = chunk__31780_31784;
var G__31790 = count__31781_31785;
var G__31791 = (i__31782_31786 + (1));
seq__31779_31783 = G__31788;
chunk__31780_31784 = G__31789;
count__31781_31785 = G__31790;
i__31782_31786 = G__31791;
continue;
} else {
var temp__4425__auto___31792 = cljs.core.seq.call(null,seq__31779_31783);
if(temp__4425__auto___31792){
var seq__31779_31793__$1 = temp__4425__auto___31792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31779_31793__$1)){
var c__17637__auto___31794 = cljs.core.chunk_first.call(null,seq__31779_31793__$1);
var G__31795 = cljs.core.chunk_rest.call(null,seq__31779_31793__$1);
var G__31796 = c__17637__auto___31794;
var G__31797 = cljs.core.count.call(null,c__17637__auto___31794);
var G__31798 = (0);
seq__31779_31783 = G__31795;
chunk__31780_31784 = G__31796;
count__31781_31785 = G__31797;
i__31782_31786 = G__31798;
continue;
} else {
var msg_31799 = cljs.core.first.call(null,seq__31779_31793__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31799);

var G__31800 = cljs.core.next.call(null,seq__31779_31793__$1);
var G__31801 = null;
var G__31802 = (0);
var G__31803 = (0);
seq__31779_31783 = G__31800;
chunk__31780_31784 = G__31801;
count__31781_31785 = G__31802;
i__31782_31786 = G__31803;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31804){
var map__31807 = p__31804;
var map__31807__$1 = ((((!((map__31807 == null)))?((((map__31807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31807):map__31807);
var w = map__31807__$1;
var message = cljs.core.get.call(null,map__31807__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16822__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16822__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16822__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31815 = cljs.core.seq.call(null,plugins);
var chunk__31816 = null;
var count__31817 = (0);
var i__31818 = (0);
while(true){
if((i__31818 < count__31817)){
var vec__31819 = cljs.core._nth.call(null,chunk__31816,i__31818);
var k = cljs.core.nth.call(null,vec__31819,(0),null);
var plugin = cljs.core.nth.call(null,vec__31819,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31821 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31815,chunk__31816,count__31817,i__31818,pl_31821,vec__31819,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31821.call(null,msg_hist);
});})(seq__31815,chunk__31816,count__31817,i__31818,pl_31821,vec__31819,k,plugin))
);
} else {
}

var G__31822 = seq__31815;
var G__31823 = chunk__31816;
var G__31824 = count__31817;
var G__31825 = (i__31818 + (1));
seq__31815 = G__31822;
chunk__31816 = G__31823;
count__31817 = G__31824;
i__31818 = G__31825;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31815);
if(temp__4425__auto__){
var seq__31815__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31815__$1)){
var c__17637__auto__ = cljs.core.chunk_first.call(null,seq__31815__$1);
var G__31826 = cljs.core.chunk_rest.call(null,seq__31815__$1);
var G__31827 = c__17637__auto__;
var G__31828 = cljs.core.count.call(null,c__17637__auto__);
var G__31829 = (0);
seq__31815 = G__31826;
chunk__31816 = G__31827;
count__31817 = G__31828;
i__31818 = G__31829;
continue;
} else {
var vec__31820 = cljs.core.first.call(null,seq__31815__$1);
var k = cljs.core.nth.call(null,vec__31820,(0),null);
var plugin = cljs.core.nth.call(null,vec__31820,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31830 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31815,chunk__31816,count__31817,i__31818,pl_31830,vec__31820,k,plugin,seq__31815__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31830.call(null,msg_hist);
});})(seq__31815,chunk__31816,count__31817,i__31818,pl_31830,vec__31820,k,plugin,seq__31815__$1,temp__4425__auto__))
);
} else {
}

var G__31831 = cljs.core.next.call(null,seq__31815__$1);
var G__31832 = null;
var G__31833 = (0);
var G__31834 = (0);
seq__31815 = G__31831;
chunk__31816 = G__31832;
count__31817 = G__31833;
i__31818 = G__31834;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31835 = [];
var len__17892__auto___31838 = arguments.length;
var i__17893__auto___31839 = (0);
while(true){
if((i__17893__auto___31839 < len__17892__auto___31838)){
args31835.push((arguments[i__17893__auto___31839]));

var G__31840 = (i__17893__auto___31839 + (1));
i__17893__auto___31839 = G__31840;
continue;
} else {
}
break;
}

var G__31837 = args31835.length;
switch (G__31837) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31835.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17899__auto__ = [];
var len__17892__auto___31846 = arguments.length;
var i__17893__auto___31847 = (0);
while(true){
if((i__17893__auto___31847 < len__17892__auto___31846)){
args__17899__auto__.push((arguments[i__17893__auto___31847]));

var G__31848 = (i__17893__auto___31847 + (1));
i__17893__auto___31847 = G__31848;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((0) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17900__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31843){
var map__31844 = p__31843;
var map__31844__$1 = ((((!((map__31844 == null)))?((((map__31844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31844):map__31844);
var opts = map__31844__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31842){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31842));
});

//# sourceMappingURL=client.js.map