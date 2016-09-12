// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__26312__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26312 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26313__i = 0, G__26313__a = new Array(arguments.length -  0);
while (G__26313__i < G__26313__a.length) {G__26313__a[G__26313__i] = arguments[G__26313__i + 0]; ++G__26313__i;}
  args = new cljs.core.IndexedSeq(G__26313__a,0);
} 
return G__26312__delegate.call(this,args);};
G__26312.cljs$lang$maxFixedArity = 0;
G__26312.cljs$lang$applyTo = (function (arglist__26314){
var args = cljs.core.seq(arglist__26314);
return G__26312__delegate(args);
});
G__26312.cljs$core$IFn$_invoke$arity$variadic = G__26312__delegate;
return G__26312;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26315__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26316__i = 0, G__26316__a = new Array(arguments.length -  0);
while (G__26316__i < G__26316__a.length) {G__26316__a[G__26316__i] = arguments[G__26316__i + 0]; ++G__26316__i;}
  args = new cljs.core.IndexedSeq(G__26316__a,0);
} 
return G__26315__delegate.call(this,args);};
G__26315.cljs$lang$maxFixedArity = 0;
G__26315.cljs$lang$applyTo = (function (arglist__26317){
var args = cljs.core.seq(arglist__26317);
return G__26315__delegate(args);
});
G__26315.cljs$core$IFn$_invoke$arity$variadic = G__26315__delegate;
return G__26315;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map