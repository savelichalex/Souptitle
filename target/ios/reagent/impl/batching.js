// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.impl.batching');
goog.require('cljs.core');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('reagent.impl.util');
goog.require('clojure.string');
if(typeof reagent.impl.batching.mount_count !== 'undefined'){
} else {
reagent.impl.batching.mount_count = (0);
}
reagent.impl.batching.next_mount_count = (function reagent$impl$batching$next_mount_count(){
return reagent.impl.batching.mount_count = (reagent.impl.batching.mount_count + (1));
});
reagent.impl.batching.fake_raf = (function reagent$impl$batching$fake_raf(f){
return setTimeout(f,(16));
});
reagent.impl.batching.next_tick = ((cljs.core.not.call(null,reagent.impl.util.is_client))?reagent.impl.batching.fake_raf:(function (){var w = window;
var or__16834__auto__ = (w["requestAnimationFrame"]);
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
var or__16834__auto____$1 = (w["webkitRequestAnimationFrame"]);
if(cljs.core.truth_(or__16834__auto____$1)){
return or__16834__auto____$1;
} else {
var or__16834__auto____$2 = (w["mozRequestAnimationFrame"]);
if(cljs.core.truth_(or__16834__auto____$2)){
return or__16834__auto____$2;
} else {
var or__16834__auto____$3 = (w["msRequestAnimationFrame"]);
if(cljs.core.truth_(or__16834__auto____$3)){
return or__16834__auto____$3;
} else {
return reagent.impl.batching.fake_raf;
}
}
}
}
})());
reagent.impl.batching.compare_mount_order = (function reagent$impl$batching$compare_mount_order(c1,c2){
return ((c1["cljsMountOrder"]) - (c2["cljsMountOrder"]));
});
reagent.impl.batching.run_queue = (function reagent$impl$batching$run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__17737__auto__ = a.length;
var i = (0);
while(true){
if((i < n__17737__auto__)){
var c_26445 = (a[i]);
if((c_26445["cljsIsDirty"]) === true){
(c_26445["forceUpdate"])();
} else {
}

var G__26446 = (i + (1));
i = G__26446;
continue;
} else {
return null;
}
break;
}
});
if(typeof reagent.impl.batching.ratom_flush !== 'undefined'){
} else {
reagent.impl.batching.ratom_flush = cljs.core.identity;
}

/**
* @constructor
 * @implements {reagent.impl.batching.Object}
*/
reagent.impl.batching.RenderQueue = (function (scheduled_QMARK_){
this.scheduled_QMARK_ = scheduled_QMARK_;
})
reagent.impl.batching.RenderQueue.prototype.enqueue = (function (k,f){
var self__ = this;
var this$ = this;
if(cljs.core.some_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((this$[k]) == null)){
(this$[k] = []);
} else {
}

(this$[k]).push(f);

return this$.schedule();
});

reagent.impl.batching.RenderQueue.prototype.run_funs = (function (k){
var self__ = this;
var this$ = this;
var temp__4429__auto__ = (this$[k]);
if((temp__4429__auto__ == null)){
return null;
} else {
var fs = temp__4429__auto__;
(this$[k] = null);

var n__17737__auto__ = fs.length;
var i = (0);
while(true){
if((i < n__17737__auto__)){
(fs[i]).call(null);

var G__26447 = (i + (1));
i = G__26447;
continue;
} else {
return null;
}
break;
}
}
});

reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(self__.scheduled_QMARK_){
return null;
} else {
self__.scheduled_QMARK_ = true;

return reagent.impl.batching.next_tick.call(null,((function (this$){
return (function (){
return this$.run_queues();
});})(this$))
);
}
});

reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
return this$.enqueue("componentQueue",c);
});

reagent.impl.batching.RenderQueue.prototype.add_before_flush = (function (f){
var self__ = this;
var this$ = this;
return this$.enqueue("beforeFlush",f);
});

reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var this$ = this;
return this$.enqueue("afterRender",f);
});

reagent.impl.batching.RenderQueue.prototype.run_queues = (function (){
var self__ = this;
var this$ = this;
self__.scheduled_QMARK_ = false;

return this$.flush_queues();
});

reagent.impl.batching.RenderQueue.prototype.flush_queues = (function (){
var self__ = this;
var this$ = this;
this$.run_funs("beforeFlush");

reagent.impl.batching.ratom_flush.call(null);

var temp__4429__auto___26448 = (this$["componentQueue"]);
if((temp__4429__auto___26448 == null)){
} else {
var cs_26449 = temp__4429__auto___26448;
(this$["componentQueue"] = null);

reagent.impl.batching.run_queue.call(null,cs_26449);
}

return this$.run_funs("afterRender");
});

reagent.impl.batching.RenderQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled?","scheduled?",579986609,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.impl.batching.RenderQueue.cljs$lang$type = true;

reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue";

reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"reagent.impl.batching/RenderQueue");
});

reagent.impl.batching.__GT_RenderQueue = (function reagent$impl$batching$__GT_RenderQueue(scheduled_QMARK_){
return (new reagent.impl.batching.RenderQueue(scheduled_QMARK_));
});

if(typeof reagent.impl.batching.render_queue !== 'undefined'){
} else {
reagent.impl.batching.render_queue = (new reagent.impl.batching.RenderQueue(false));
}
reagent.impl.batching.flush = (function reagent$impl$batching$flush(){
return reagent.impl.batching.render_queue.flush_queues();
});
reagent.impl.batching.queue_render = (function reagent$impl$batching$queue_render(c){
(c["cljsIsDirty"] = true);

return reagent.impl.batching.render_queue.queue_render(c);
});
reagent.impl.batching.mark_rendered = (function reagent$impl$batching$mark_rendered(c){
return (c["cljsIsDirty"] = false);
});
reagent.impl.batching.do_before_flush = (function reagent$impl$batching$do_before_flush(f){
return reagent.impl.batching.render_queue.add_before_flush(f);
});
reagent.impl.batching.do_after_render = (function reagent$impl$batching$do_after_render(f){
return reagent.impl.batching.render_queue.add_after_render(f);
});
reagent.impl.batching.schedule = (function reagent$impl$batching$schedule(){
if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
return reagent.impl.batching.render_queue.schedule();
} else {
return null;
}
});

//# sourceMappingURL=batching.js.map