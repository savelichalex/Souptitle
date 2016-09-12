// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__31851_SHARP_){
return console.log(p1__31851_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__31852_SHARP_){
return console.warn(p1__31852_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__31853_SHARP_){
return console.error(p1__31853_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__31854_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__31854_SHARP_);
} else {
return console.log(p1__31854_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__17899__auto__ = [];
var len__17892__auto___31856 = arguments.length;
var i__17893__auto___31857 = (0);
while(true){
if((i__17893__auto___31857 < len__17892__auto___31856)){
args__17899__auto__.push((arguments[i__17893__auto___31857]));

var G__31858 = (i__17893__auto___31857 + (1));
i__17893__auto___31857 = G__31858;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((0) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__17900__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq31855){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31855));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__17899__auto__ = [];
var len__17892__auto___31860 = arguments.length;
var i__17893__auto___31861 = (0);
while(true){
if((i__17893__auto___31861 < len__17892__auto___31860)){
args__17899__auto__.push((arguments[i__17893__auto___31861]));

var G__31862 = (i__17893__auto___31861 + (1));
i__17893__auto___31861 = G__31862;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((0) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__17900__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq31859){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31859));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__17899__auto__ = [];
var len__17892__auto___31864 = arguments.length;
var i__17893__auto___31865 = (0);
while(true){
if((i__17893__auto___31865 < len__17892__auto___31864)){
args__17899__auto__.push((arguments[i__17893__auto___31865]));

var G__31866 = (i__17893__auto___31865 + (1));
i__17893__auto___31865 = G__31866;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((0) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__17900__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq31863){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31863));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__17899__auto__ = [];
var len__17892__auto___31868 = arguments.length;
var i__17893__auto___31869 = (0);
while(true){
if((i__17893__auto___31869 < len__17892__auto___31868)){
args__17899__auto__.push((arguments[i__17893__auto___31869]));

var G__31870 = (i__17893__auto___31869 + (1));
i__17893__auto___31869 = G__31870;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((0) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__17900__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq31867){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31867));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__17899__auto__ = [];
var len__17892__auto___31872 = arguments.length;
var i__17893__auto___31873 = (0);
while(true){
if((i__17893__auto___31873 < len__17892__auto___31872)){
args__17899__auto__.push((arguments[i__17893__auto___31873]));

var G__31874 = (i__17893__auto___31873 + (1));
i__17893__auto___31873 = G__31874;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((0) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__17900__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq31871){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31871));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map