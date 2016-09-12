// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30703_30717 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30704_30718 = null;
var count__30705_30719 = (0);
var i__30706_30720 = (0);
while(true){
if((i__30706_30720 < count__30705_30719)){
var f_30721 = cljs.core._nth.call(null,chunk__30704_30718,i__30706_30720);
cljs.core.println.call(null,"  ",f_30721);

var G__30722 = seq__30703_30717;
var G__30723 = chunk__30704_30718;
var G__30724 = count__30705_30719;
var G__30725 = (i__30706_30720 + (1));
seq__30703_30717 = G__30722;
chunk__30704_30718 = G__30723;
count__30705_30719 = G__30724;
i__30706_30720 = G__30725;
continue;
} else {
var temp__4425__auto___30726 = cljs.core.seq.call(null,seq__30703_30717);
if(temp__4425__auto___30726){
var seq__30703_30727__$1 = temp__4425__auto___30726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30703_30727__$1)){
var c__17637__auto___30728 = cljs.core.chunk_first.call(null,seq__30703_30727__$1);
var G__30729 = cljs.core.chunk_rest.call(null,seq__30703_30727__$1);
var G__30730 = c__17637__auto___30728;
var G__30731 = cljs.core.count.call(null,c__17637__auto___30728);
var G__30732 = (0);
seq__30703_30717 = G__30729;
chunk__30704_30718 = G__30730;
count__30705_30719 = G__30731;
i__30706_30720 = G__30732;
continue;
} else {
var f_30733 = cljs.core.first.call(null,seq__30703_30727__$1);
cljs.core.println.call(null,"  ",f_30733);

var G__30734 = cljs.core.next.call(null,seq__30703_30727__$1);
var G__30735 = null;
var G__30736 = (0);
var G__30737 = (0);
seq__30703_30717 = G__30734;
chunk__30704_30718 = G__30735;
count__30705_30719 = G__30736;
i__30706_30720 = G__30737;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30738 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16834__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30738);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30738)))?cljs.core.second.call(null,arglists_30738):arglists_30738));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30707 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30708 = null;
var count__30709 = (0);
var i__30710 = (0);
while(true){
if((i__30710 < count__30709)){
var vec__30711 = cljs.core._nth.call(null,chunk__30708,i__30710);
var name = cljs.core.nth.call(null,vec__30711,(0),null);
var map__30712 = cljs.core.nth.call(null,vec__30711,(1),null);
var map__30712__$1 = ((((!((map__30712 == null)))?((((map__30712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30712):map__30712);
var doc = cljs.core.get.call(null,map__30712__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30712__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30739 = seq__30707;
var G__30740 = chunk__30708;
var G__30741 = count__30709;
var G__30742 = (i__30710 + (1));
seq__30707 = G__30739;
chunk__30708 = G__30740;
count__30709 = G__30741;
i__30710 = G__30742;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30707);
if(temp__4425__auto__){
var seq__30707__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30707__$1)){
var c__17637__auto__ = cljs.core.chunk_first.call(null,seq__30707__$1);
var G__30743 = cljs.core.chunk_rest.call(null,seq__30707__$1);
var G__30744 = c__17637__auto__;
var G__30745 = cljs.core.count.call(null,c__17637__auto__);
var G__30746 = (0);
seq__30707 = G__30743;
chunk__30708 = G__30744;
count__30709 = G__30745;
i__30710 = G__30746;
continue;
} else {
var vec__30714 = cljs.core.first.call(null,seq__30707__$1);
var name = cljs.core.nth.call(null,vec__30714,(0),null);
var map__30715 = cljs.core.nth.call(null,vec__30714,(1),null);
var map__30715__$1 = ((((!((map__30715 == null)))?((((map__30715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30715):map__30715);
var doc = cljs.core.get.call(null,map__30715__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30715__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30747 = cljs.core.next.call(null,seq__30707__$1);
var G__30748 = null;
var G__30749 = (0);
var G__30750 = (0);
seq__30707 = G__30747;
chunk__30708 = G__30748;
count__30709 = G__30749;
i__30710 = G__30750;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map