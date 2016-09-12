// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args26923 = [];
var len__17892__auto___26929 = arguments.length;
var i__17893__auto___26930 = (0);
while(true){
if((i__17893__auto___26930 < len__17892__auto___26929)){
args26923.push((arguments[i__17893__auto___26930]));

var G__26931 = (i__17893__auto___26930 + (1));
i__17893__auto___26930 = G__26931;
continue;
} else {
}
break;
}

var G__26925 = args26923.length;
switch (G__26925) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26923.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async26926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26926 = (function (f,blockable,meta26927){
this.f = f;
this.blockable = blockable;
this.meta26927 = meta26927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26928,meta26927__$1){
var self__ = this;
var _26928__$1 = this;
return (new cljs.core.async.t_cljs$core$async26926(self__.f,self__.blockable,meta26927__$1));
});

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26928){
var self__ = this;
var _26928__$1 = this;
return self__.meta26927;
});

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26927","meta26927",565569326,null)], null);
});

cljs.core.async.t_cljs$core$async26926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26926";

cljs.core.async.t_cljs$core$async26926.cljs$lang$ctorPrWriter = (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"cljs.core.async/t_cljs$core$async26926");
});

cljs.core.async.__GT_t_cljs$core$async26926 = (function cljs$core$async$__GT_t_cljs$core$async26926(f__$1,blockable__$1,meta26927){
return (new cljs.core.async.t_cljs$core$async26926(f__$1,blockable__$1,meta26927));
});

}

return (new cljs.core.async.t_cljs$core$async26926(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26935 = [];
var len__17892__auto___26938 = arguments.length;
var i__17893__auto___26939 = (0);
while(true){
if((i__17893__auto___26939 < len__17892__auto___26938)){
args26935.push((arguments[i__17893__auto___26939]));

var G__26940 = (i__17893__auto___26939 + (1));
i__17893__auto___26939 = G__26940;
continue;
} else {
}
break;
}

var G__26937 = args26935.length;
switch (G__26937) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26935.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args26942 = [];
var len__17892__auto___26945 = arguments.length;
var i__17893__auto___26946 = (0);
while(true){
if((i__17893__auto___26946 < len__17892__auto___26945)){
args26942.push((arguments[i__17893__auto___26946]));

var G__26947 = (i__17893__auto___26946 + (1));
i__17893__auto___26946 = G__26947;
continue;
} else {
}
break;
}

var G__26944 = args26942.length;
switch (G__26944) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26942.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26949 = [];
var len__17892__auto___26952 = arguments.length;
var i__17893__auto___26953 = (0);
while(true){
if((i__17893__auto___26953 < len__17892__auto___26952)){
args26949.push((arguments[i__17893__auto___26953]));

var G__26954 = (i__17893__auto___26953 + (1));
i__17893__auto___26953 = G__26954;
continue;
} else {
}
break;
}

var G__26951 = args26949.length;
switch (G__26951) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26949.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26956 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26956);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26956,ret){
return (function (){
return fn1.call(null,val_26956);
});})(val_26956,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26957 = [];
var len__17892__auto___26960 = arguments.length;
var i__17893__auto___26961 = (0);
while(true){
if((i__17893__auto___26961 < len__17892__auto___26960)){
args26957.push((arguments[i__17893__auto___26961]));

var G__26962 = (i__17893__auto___26961 + (1));
i__17893__auto___26961 = G__26962;
continue;
} else {
}
break;
}

var G__26959 = args26957.length;
switch (G__26959) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26957.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17737__auto___26964 = n;
var x_26965 = (0);
while(true){
if((x_26965 < n__17737__auto___26964)){
(a[x_26965] = (0));

var G__26966 = (x_26965 + (1));
x_26965 = G__26966;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26967 = (i + (1));
i = G__26967;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26971 = (function (alt_flag,flag,meta26972){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26972 = meta26972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26973,meta26972__$1){
var self__ = this;
var _26973__$1 = this;
return (new cljs.core.async.t_cljs$core$async26971(self__.alt_flag,self__.flag,meta26972__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26973){
var self__ = this;
var _26973__$1 = this;
return self__.meta26972;
});})(flag))
;

cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26971.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26972","meta26972",-736896792,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26971";

cljs.core.async.t_cljs$core$async26971.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"cljs.core.async/t_cljs$core$async26971");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26971 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26971(alt_flag__$1,flag__$1,meta26972){
return (new cljs.core.async.t_cljs$core$async26971(alt_flag__$1,flag__$1,meta26972));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26971(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26977 = (function (alt_handler,flag,cb,meta26978){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26978 = meta26978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26979,meta26978__$1){
var self__ = this;
var _26979__$1 = this;
return (new cljs.core.async.t_cljs$core$async26977(self__.alt_handler,self__.flag,self__.cb,meta26978__$1));
});

cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26979){
var self__ = this;
var _26979__$1 = this;
return self__.meta26978;
});

cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26977.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26978","meta26978",-1494981030,null)], null);
});

cljs.core.async.t_cljs$core$async26977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26977";

cljs.core.async.t_cljs$core$async26977.cljs$lang$ctorPrWriter = (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"cljs.core.async/t_cljs$core$async26977");
});

cljs.core.async.__GT_t_cljs$core$async26977 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26977(alt_handler__$1,flag__$1,cb__$1,meta26978){
return (new cljs.core.async.t_cljs$core$async26977(alt_handler__$1,flag__$1,cb__$1,meta26978));
});

}

return (new cljs.core.async.t_cljs$core$async26977(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26980_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26980_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26981_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26981_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16834__auto__ = wport;
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26982 = (i + (1));
i = G__26982;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16834__auto__ = ret;
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16822__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16822__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16822__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17899__auto__ = [];
var len__17892__auto___26988 = arguments.length;
var i__17893__auto___26989 = (0);
while(true){
if((i__17893__auto___26989 < len__17892__auto___26988)){
args__17899__auto__.push((arguments[i__17893__auto___26989]));

var G__26990 = (i__17893__auto___26989 + (1));
i__17893__auto___26989 = G__26990;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((1) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17900__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26985){
var map__26986 = p__26985;
var map__26986__$1 = ((((!((map__26986 == null)))?((((map__26986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26986):map__26986);
var opts = map__26986__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26983){
var G__26984 = cljs.core.first.call(null,seq26983);
var seq26983__$1 = cljs.core.next.call(null,seq26983);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26984,seq26983__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26991 = [];
var len__17892__auto___27041 = arguments.length;
var i__17893__auto___27042 = (0);
while(true){
if((i__17893__auto___27042 < len__17892__auto___27041)){
args26991.push((arguments[i__17893__auto___27042]));

var G__27043 = (i__17893__auto___27042 + (1));
i__17893__auto___27042 = G__27043;
continue;
} else {
}
break;
}

var G__26993 = args26991.length;
switch (G__26993) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26991.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20811__auto___27045 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___27045){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___27045){
return (function (state_27017){
var state_val_27018 = (state_27017[(1)]);
if((state_val_27018 === (7))){
var inst_27013 = (state_27017[(2)]);
var state_27017__$1 = state_27017;
var statearr_27019_27046 = state_27017__$1;
(statearr_27019_27046[(2)] = inst_27013);

(statearr_27019_27046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (1))){
var state_27017__$1 = state_27017;
var statearr_27020_27047 = state_27017__$1;
(statearr_27020_27047[(2)] = null);

(statearr_27020_27047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (4))){
var inst_26996 = (state_27017[(7)]);
var inst_26996__$1 = (state_27017[(2)]);
var inst_26997 = (inst_26996__$1 == null);
var state_27017__$1 = (function (){var statearr_27021 = state_27017;
(statearr_27021[(7)] = inst_26996__$1);

return statearr_27021;
})();
if(cljs.core.truth_(inst_26997)){
var statearr_27022_27048 = state_27017__$1;
(statearr_27022_27048[(1)] = (5));

} else {
var statearr_27023_27049 = state_27017__$1;
(statearr_27023_27049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (13))){
var state_27017__$1 = state_27017;
var statearr_27024_27050 = state_27017__$1;
(statearr_27024_27050[(2)] = null);

(statearr_27024_27050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (6))){
var inst_26996 = (state_27017[(7)]);
var state_27017__$1 = state_27017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27017__$1,(11),to,inst_26996);
} else {
if((state_val_27018 === (3))){
var inst_27015 = (state_27017[(2)]);
var state_27017__$1 = state_27017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27017__$1,inst_27015);
} else {
if((state_val_27018 === (12))){
var state_27017__$1 = state_27017;
var statearr_27025_27051 = state_27017__$1;
(statearr_27025_27051[(2)] = null);

(statearr_27025_27051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (2))){
var state_27017__$1 = state_27017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27017__$1,(4),from);
} else {
if((state_val_27018 === (11))){
var inst_27006 = (state_27017[(2)]);
var state_27017__$1 = state_27017;
if(cljs.core.truth_(inst_27006)){
var statearr_27026_27052 = state_27017__$1;
(statearr_27026_27052[(1)] = (12));

} else {
var statearr_27027_27053 = state_27017__$1;
(statearr_27027_27053[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (9))){
var state_27017__$1 = state_27017;
var statearr_27028_27054 = state_27017__$1;
(statearr_27028_27054[(2)] = null);

(statearr_27028_27054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (5))){
var state_27017__$1 = state_27017;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27029_27055 = state_27017__$1;
(statearr_27029_27055[(1)] = (8));

} else {
var statearr_27030_27056 = state_27017__$1;
(statearr_27030_27056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (14))){
var inst_27011 = (state_27017[(2)]);
var state_27017__$1 = state_27017;
var statearr_27031_27057 = state_27017__$1;
(statearr_27031_27057[(2)] = inst_27011);

(statearr_27031_27057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (10))){
var inst_27003 = (state_27017[(2)]);
var state_27017__$1 = state_27017;
var statearr_27032_27058 = state_27017__$1;
(statearr_27032_27058[(2)] = inst_27003);

(statearr_27032_27058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27018 === (8))){
var inst_27000 = cljs.core.async.close_BANG_.call(null,to);
var state_27017__$1 = state_27017;
var statearr_27033_27059 = state_27017__$1;
(statearr_27033_27059[(2)] = inst_27000);

(statearr_27033_27059[(1)] = (10));


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
});})(c__20811__auto___27045))
;
return ((function (switch__20790__auto__,c__20811__auto___27045){
return (function() {
var cljs$core$async$state_machine__20791__auto__ = null;
var cljs$core$async$state_machine__20791__auto____0 = (function (){
var statearr_27037 = [null,null,null,null,null,null,null,null];
(statearr_27037[(0)] = cljs$core$async$state_machine__20791__auto__);

(statearr_27037[(1)] = (1));

return statearr_27037;
});
var cljs$core$async$state_machine__20791__auto____1 = (function (state_27017){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_27017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e27038){if((e27038 instanceof Object)){
var ex__20794__auto__ = e27038;
var statearr_27039_27060 = state_27017;
(statearr_27039_27060[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27061 = state_27017;
state_27017 = G__27061;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$state_machine__20791__auto__ = function(state_27017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20791__auto____1.call(this,state_27017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20791__auto____0;
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20791__auto____1;
return cljs$core$async$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___27045))
})();
var state__20813__auto__ = (function (){var statearr_27040 = f__20812__auto__.call(null);
(statearr_27040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___27045);

return statearr_27040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___27045))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27245){
var vec__27246 = p__27245;
var v = cljs.core.nth.call(null,vec__27246,(0),null);
var p = cljs.core.nth.call(null,vec__27246,(1),null);
var job = vec__27246;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20811__auto___27428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___27428,res,vec__27246,v,p,job,jobs,results){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___27428,res,vec__27246,v,p,job,jobs,results){
return (function (state_27251){
var state_val_27252 = (state_27251[(1)]);
if((state_val_27252 === (1))){
var state_27251__$1 = state_27251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27251__$1,(2),res,v);
} else {
if((state_val_27252 === (2))){
var inst_27248 = (state_27251[(2)]);
var inst_27249 = cljs.core.async.close_BANG_.call(null,res);
var state_27251__$1 = (function (){var statearr_27253 = state_27251;
(statearr_27253[(7)] = inst_27248);

return statearr_27253;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27251__$1,inst_27249);
} else {
return null;
}
}
});})(c__20811__auto___27428,res,vec__27246,v,p,job,jobs,results))
;
return ((function (switch__20790__auto__,c__20811__auto___27428,res,vec__27246,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0 = (function (){
var statearr_27257 = [null,null,null,null,null,null,null,null];
(statearr_27257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__);

(statearr_27257[(1)] = (1));

return statearr_27257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1 = (function (state_27251){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_27251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e27258){if((e27258 instanceof Object)){
var ex__20794__auto__ = e27258;
var statearr_27259_27429 = state_27251;
(statearr_27259_27429[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27430 = state_27251;
state_27251 = G__27430;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__ = function(state_27251){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1.call(this,state_27251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___27428,res,vec__27246,v,p,job,jobs,results))
})();
var state__20813__auto__ = (function (){var statearr_27260 = f__20812__auto__.call(null);
(statearr_27260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___27428);

return statearr_27260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___27428,res,vec__27246,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27261){
var vec__27262 = p__27261;
var v = cljs.core.nth.call(null,vec__27262,(0),null);
var p = cljs.core.nth.call(null,vec__27262,(1),null);
var job = vec__27262;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17737__auto___27431 = n;
var __27432 = (0);
while(true){
if((__27432 < n__17737__auto___27431)){
var G__27263_27433 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27263_27433) {
case "compute":
var c__20811__auto___27435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27432,c__20811__auto___27435,G__27263_27433,n__17737__auto___27431,jobs,results,process,async){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (__27432,c__20811__auto___27435,G__27263_27433,n__17737__auto___27431,jobs,results,process,async){
return (function (state_27276){
var state_val_27277 = (state_27276[(1)]);
if((state_val_27277 === (1))){
var state_27276__$1 = state_27276;
var statearr_27278_27436 = state_27276__$1;
(statearr_27278_27436[(2)] = null);

(statearr_27278_27436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (2))){
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27276__$1,(4),jobs);
} else {
if((state_val_27277 === (3))){
var inst_27274 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27276__$1,inst_27274);
} else {
if((state_val_27277 === (4))){
var inst_27266 = (state_27276[(2)]);
var inst_27267 = process.call(null,inst_27266);
var state_27276__$1 = state_27276;
if(cljs.core.truth_(inst_27267)){
var statearr_27279_27437 = state_27276__$1;
(statearr_27279_27437[(1)] = (5));

} else {
var statearr_27280_27438 = state_27276__$1;
(statearr_27280_27438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (5))){
var state_27276__$1 = state_27276;
var statearr_27281_27439 = state_27276__$1;
(statearr_27281_27439[(2)] = null);

(statearr_27281_27439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (6))){
var state_27276__$1 = state_27276;
var statearr_27282_27440 = state_27276__$1;
(statearr_27282_27440[(2)] = null);

(statearr_27282_27440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27277 === (7))){
var inst_27272 = (state_27276[(2)]);
var state_27276__$1 = state_27276;
var statearr_27283_27441 = state_27276__$1;
(statearr_27283_27441[(2)] = inst_27272);

(statearr_27283_27441[(1)] = (3));


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
});})(__27432,c__20811__auto___27435,G__27263_27433,n__17737__auto___27431,jobs,results,process,async))
;
return ((function (__27432,switch__20790__auto__,c__20811__auto___27435,G__27263_27433,n__17737__auto___27431,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0 = (function (){
var statearr_27287 = [null,null,null,null,null,null,null];
(statearr_27287[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__);

(statearr_27287[(1)] = (1));

return statearr_27287;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1 = (function (state_27276){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_27276);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e27288){if((e27288 instanceof Object)){
var ex__20794__auto__ = e27288;
var statearr_27289_27442 = state_27276;
(statearr_27289_27442[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27443 = state_27276;
state_27276 = G__27443;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__ = function(state_27276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1.call(this,state_27276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__;
})()
;})(__27432,switch__20790__auto__,c__20811__auto___27435,G__27263_27433,n__17737__auto___27431,jobs,results,process,async))
})();
var state__20813__auto__ = (function (){var statearr_27290 = f__20812__auto__.call(null);
(statearr_27290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___27435);

return statearr_27290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(__27432,c__20811__auto___27435,G__27263_27433,n__17737__auto___27431,jobs,results,process,async))
);


break;
case "async":
var c__20811__auto___27444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27432,c__20811__auto___27444,G__27263_27433,n__17737__auto___27431,jobs,results,process,async){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (__27432,c__20811__auto___27444,G__27263_27433,n__17737__auto___27431,jobs,results,process,async){
return (function (state_27303){
var state_val_27304 = (state_27303[(1)]);
if((state_val_27304 === (1))){
var state_27303__$1 = state_27303;
var statearr_27305_27445 = state_27303__$1;
(statearr_27305_27445[(2)] = null);

(statearr_27305_27445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (2))){
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27303__$1,(4),jobs);
} else {
if((state_val_27304 === (3))){
var inst_27301 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27303__$1,inst_27301);
} else {
if((state_val_27304 === (4))){
var inst_27293 = (state_27303[(2)]);
var inst_27294 = async.call(null,inst_27293);
var state_27303__$1 = state_27303;
if(cljs.core.truth_(inst_27294)){
var statearr_27306_27446 = state_27303__$1;
(statearr_27306_27446[(1)] = (5));

} else {
var statearr_27307_27447 = state_27303__$1;
(statearr_27307_27447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (5))){
var state_27303__$1 = state_27303;
var statearr_27308_27448 = state_27303__$1;
(statearr_27308_27448[(2)] = null);

(statearr_27308_27448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (6))){
var state_27303__$1 = state_27303;
var statearr_27309_27449 = state_27303__$1;
(statearr_27309_27449[(2)] = null);

(statearr_27309_27449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27304 === (7))){
var inst_27299 = (state_27303[(2)]);
var state_27303__$1 = state_27303;
var statearr_27310_27450 = state_27303__$1;
(statearr_27310_27450[(2)] = inst_27299);

(statearr_27310_27450[(1)] = (3));


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
});})(__27432,c__20811__auto___27444,G__27263_27433,n__17737__auto___27431,jobs,results,process,async))
;
return ((function (__27432,switch__20790__auto__,c__20811__auto___27444,G__27263_27433,n__17737__auto___27431,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0 = (function (){
var statearr_27314 = [null,null,null,null,null,null,null];
(statearr_27314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__);

(statearr_27314[(1)] = (1));

return statearr_27314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1 = (function (state_27303){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_27303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e27315){if((e27315 instanceof Object)){
var ex__20794__auto__ = e27315;
var statearr_27316_27451 = state_27303;
(statearr_27316_27451[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27452 = state_27303;
state_27303 = G__27452;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__ = function(state_27303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1.call(this,state_27303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__;
})()
;})(__27432,switch__20790__auto__,c__20811__auto___27444,G__27263_27433,n__17737__auto___27431,jobs,results,process,async))
})();
var state__20813__auto__ = (function (){var statearr_27317 = f__20812__auto__.call(null);
(statearr_27317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___27444);

return statearr_27317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(__27432,c__20811__auto___27444,G__27263_27433,n__17737__auto___27431,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__27453 = (__27432 + (1));
__27432 = G__27453;
continue;
} else {
}
break;
}

var c__20811__auto___27454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___27454,jobs,results,process,async){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___27454,jobs,results,process,async){
return (function (state_27339){
var state_val_27340 = (state_27339[(1)]);
if((state_val_27340 === (1))){
var state_27339__$1 = state_27339;
var statearr_27341_27455 = state_27339__$1;
(statearr_27341_27455[(2)] = null);

(statearr_27341_27455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (2))){
var state_27339__$1 = state_27339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27339__$1,(4),from);
} else {
if((state_val_27340 === (3))){
var inst_27337 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27339__$1,inst_27337);
} else {
if((state_val_27340 === (4))){
var inst_27320 = (state_27339[(7)]);
var inst_27320__$1 = (state_27339[(2)]);
var inst_27321 = (inst_27320__$1 == null);
var state_27339__$1 = (function (){var statearr_27342 = state_27339;
(statearr_27342[(7)] = inst_27320__$1);

return statearr_27342;
})();
if(cljs.core.truth_(inst_27321)){
var statearr_27343_27456 = state_27339__$1;
(statearr_27343_27456[(1)] = (5));

} else {
var statearr_27344_27457 = state_27339__$1;
(statearr_27344_27457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (5))){
var inst_27323 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27339__$1 = state_27339;
var statearr_27345_27458 = state_27339__$1;
(statearr_27345_27458[(2)] = inst_27323);

(statearr_27345_27458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (6))){
var inst_27320 = (state_27339[(7)]);
var inst_27325 = (state_27339[(8)]);
var inst_27325__$1 = cljs.core.async.chan.call(null,(1));
var inst_27326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27327 = [inst_27320,inst_27325__$1];
var inst_27328 = (new cljs.core.PersistentVector(null,2,(5),inst_27326,inst_27327,null));
var state_27339__$1 = (function (){var statearr_27346 = state_27339;
(statearr_27346[(8)] = inst_27325__$1);

return statearr_27346;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27339__$1,(8),jobs,inst_27328);
} else {
if((state_val_27340 === (7))){
var inst_27335 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
var statearr_27347_27459 = state_27339__$1;
(statearr_27347_27459[(2)] = inst_27335);

(statearr_27347_27459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (8))){
var inst_27325 = (state_27339[(8)]);
var inst_27330 = (state_27339[(2)]);
var state_27339__$1 = (function (){var statearr_27348 = state_27339;
(statearr_27348[(9)] = inst_27330);

return statearr_27348;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27339__$1,(9),results,inst_27325);
} else {
if((state_val_27340 === (9))){
var inst_27332 = (state_27339[(2)]);
var state_27339__$1 = (function (){var statearr_27349 = state_27339;
(statearr_27349[(10)] = inst_27332);

return statearr_27349;
})();
var statearr_27350_27460 = state_27339__$1;
(statearr_27350_27460[(2)] = null);

(statearr_27350_27460[(1)] = (2));


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
});})(c__20811__auto___27454,jobs,results,process,async))
;
return ((function (switch__20790__auto__,c__20811__auto___27454,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0 = (function (){
var statearr_27354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__);

(statearr_27354[(1)] = (1));

return statearr_27354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1 = (function (state_27339){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_27339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e27355){if((e27355 instanceof Object)){
var ex__20794__auto__ = e27355;
var statearr_27356_27461 = state_27339;
(statearr_27356_27461[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27462 = state_27339;
state_27339 = G__27462;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__ = function(state_27339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1.call(this,state_27339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___27454,jobs,results,process,async))
})();
var state__20813__auto__ = (function (){var statearr_27357 = f__20812__auto__.call(null);
(statearr_27357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___27454);

return statearr_27357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___27454,jobs,results,process,async))
);


var c__20811__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto__,jobs,results,process,async){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto__,jobs,results,process,async){
return (function (state_27395){
var state_val_27396 = (state_27395[(1)]);
if((state_val_27396 === (7))){
var inst_27391 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
var statearr_27397_27463 = state_27395__$1;
(statearr_27397_27463[(2)] = inst_27391);

(statearr_27397_27463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (20))){
var state_27395__$1 = state_27395;
var statearr_27398_27464 = state_27395__$1;
(statearr_27398_27464[(2)] = null);

(statearr_27398_27464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (1))){
var state_27395__$1 = state_27395;
var statearr_27399_27465 = state_27395__$1;
(statearr_27399_27465[(2)] = null);

(statearr_27399_27465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (4))){
var inst_27360 = (state_27395[(7)]);
var inst_27360__$1 = (state_27395[(2)]);
var inst_27361 = (inst_27360__$1 == null);
var state_27395__$1 = (function (){var statearr_27400 = state_27395;
(statearr_27400[(7)] = inst_27360__$1);

return statearr_27400;
})();
if(cljs.core.truth_(inst_27361)){
var statearr_27401_27466 = state_27395__$1;
(statearr_27401_27466[(1)] = (5));

} else {
var statearr_27402_27467 = state_27395__$1;
(statearr_27402_27467[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (15))){
var inst_27373 = (state_27395[(8)]);
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27395__$1,(18),to,inst_27373);
} else {
if((state_val_27396 === (21))){
var inst_27386 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
var statearr_27403_27468 = state_27395__$1;
(statearr_27403_27468[(2)] = inst_27386);

(statearr_27403_27468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (13))){
var inst_27388 = (state_27395[(2)]);
var state_27395__$1 = (function (){var statearr_27404 = state_27395;
(statearr_27404[(9)] = inst_27388);

return statearr_27404;
})();
var statearr_27405_27469 = state_27395__$1;
(statearr_27405_27469[(2)] = null);

(statearr_27405_27469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (6))){
var inst_27360 = (state_27395[(7)]);
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27395__$1,(11),inst_27360);
} else {
if((state_val_27396 === (17))){
var inst_27381 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
if(cljs.core.truth_(inst_27381)){
var statearr_27406_27470 = state_27395__$1;
(statearr_27406_27470[(1)] = (19));

} else {
var statearr_27407_27471 = state_27395__$1;
(statearr_27407_27471[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (3))){
var inst_27393 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27395__$1,inst_27393);
} else {
if((state_val_27396 === (12))){
var inst_27370 = (state_27395[(10)]);
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27395__$1,(14),inst_27370);
} else {
if((state_val_27396 === (2))){
var state_27395__$1 = state_27395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27395__$1,(4),results);
} else {
if((state_val_27396 === (19))){
var state_27395__$1 = state_27395;
var statearr_27408_27472 = state_27395__$1;
(statearr_27408_27472[(2)] = null);

(statearr_27408_27472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (11))){
var inst_27370 = (state_27395[(2)]);
var state_27395__$1 = (function (){var statearr_27409 = state_27395;
(statearr_27409[(10)] = inst_27370);

return statearr_27409;
})();
var statearr_27410_27473 = state_27395__$1;
(statearr_27410_27473[(2)] = null);

(statearr_27410_27473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (9))){
var state_27395__$1 = state_27395;
var statearr_27411_27474 = state_27395__$1;
(statearr_27411_27474[(2)] = null);

(statearr_27411_27474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (5))){
var state_27395__$1 = state_27395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27412_27475 = state_27395__$1;
(statearr_27412_27475[(1)] = (8));

} else {
var statearr_27413_27476 = state_27395__$1;
(statearr_27413_27476[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (14))){
var inst_27373 = (state_27395[(8)]);
var inst_27375 = (state_27395[(11)]);
var inst_27373__$1 = (state_27395[(2)]);
var inst_27374 = (inst_27373__$1 == null);
var inst_27375__$1 = cljs.core.not.call(null,inst_27374);
var state_27395__$1 = (function (){var statearr_27414 = state_27395;
(statearr_27414[(8)] = inst_27373__$1);

(statearr_27414[(11)] = inst_27375__$1);

return statearr_27414;
})();
if(inst_27375__$1){
var statearr_27415_27477 = state_27395__$1;
(statearr_27415_27477[(1)] = (15));

} else {
var statearr_27416_27478 = state_27395__$1;
(statearr_27416_27478[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (16))){
var inst_27375 = (state_27395[(11)]);
var state_27395__$1 = state_27395;
var statearr_27417_27479 = state_27395__$1;
(statearr_27417_27479[(2)] = inst_27375);

(statearr_27417_27479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (10))){
var inst_27367 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
var statearr_27418_27480 = state_27395__$1;
(statearr_27418_27480[(2)] = inst_27367);

(statearr_27418_27480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (18))){
var inst_27378 = (state_27395[(2)]);
var state_27395__$1 = state_27395;
var statearr_27419_27481 = state_27395__$1;
(statearr_27419_27481[(2)] = inst_27378);

(statearr_27419_27481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27396 === (8))){
var inst_27364 = cljs.core.async.close_BANG_.call(null,to);
var state_27395__$1 = state_27395;
var statearr_27420_27482 = state_27395__$1;
(statearr_27420_27482[(2)] = inst_27364);

(statearr_27420_27482[(1)] = (10));


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
}
}
}
}
});})(c__20811__auto__,jobs,results,process,async))
;
return ((function (switch__20790__auto__,c__20811__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0 = (function (){
var statearr_27424 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__);

(statearr_27424[(1)] = (1));

return statearr_27424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1 = (function (state_27395){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_27395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e27425){if((e27425 instanceof Object)){
var ex__20794__auto__ = e27425;
var statearr_27426_27483 = state_27395;
(statearr_27426_27483[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27484 = state_27395;
state_27395 = G__27484;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__ = function(state_27395){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1.call(this,state_27395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20791__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto__,jobs,results,process,async))
})();
var state__20813__auto__ = (function (){var statearr_27427 = f__20812__auto__.call(null);
(statearr_27427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto__);

return statearr_27427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto__,jobs,results,process,async))
);

return c__20811__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args27485 = [];
var len__17892__auto___27488 = arguments.length;
var i__17893__auto___27489 = (0);
while(true){
if((i__17893__auto___27489 < len__17892__auto___27488)){
args27485.push((arguments[i__17893__auto___27489]));

var G__27490 = (i__17893__auto___27489 + (1));
i__17893__auto___27489 = G__27490;
continue;
} else {
}
break;
}

var G__27487 = args27485.length;
switch (G__27487) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27485.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args27492 = [];
var len__17892__auto___27495 = arguments.length;
var i__17893__auto___27496 = (0);
while(true){
if((i__17893__auto___27496 < len__17892__auto___27495)){
args27492.push((arguments[i__17893__auto___27496]));

var G__27497 = (i__17893__auto___27496 + (1));
i__17893__auto___27496 = G__27497;
continue;
} else {
}
break;
}

var G__27494 = args27492.length;
switch (G__27494) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27492.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args27499 = [];
var len__17892__auto___27552 = arguments.length;
var i__17893__auto___27553 = (0);
while(true){
if((i__17893__auto___27553 < len__17892__auto___27552)){
args27499.push((arguments[i__17893__auto___27553]));

var G__27554 = (i__17893__auto___27553 + (1));
i__17893__auto___27553 = G__27554;
continue;
} else {
}
break;
}

var G__27501 = args27499.length;
switch (G__27501) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27499.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20811__auto___27556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___27556,tc,fc){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___27556,tc,fc){
return (function (state_27527){
var state_val_27528 = (state_27527[(1)]);
if((state_val_27528 === (7))){
var inst_27523 = (state_27527[(2)]);
var state_27527__$1 = state_27527;
var statearr_27529_27557 = state_27527__$1;
(statearr_27529_27557[(2)] = inst_27523);

(statearr_27529_27557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (1))){
var state_27527__$1 = state_27527;
var statearr_27530_27558 = state_27527__$1;
(statearr_27530_27558[(2)] = null);

(statearr_27530_27558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (4))){
var inst_27504 = (state_27527[(7)]);
var inst_27504__$1 = (state_27527[(2)]);
var inst_27505 = (inst_27504__$1 == null);
var state_27527__$1 = (function (){var statearr_27531 = state_27527;
(statearr_27531[(7)] = inst_27504__$1);

return statearr_27531;
})();
if(cljs.core.truth_(inst_27505)){
var statearr_27532_27559 = state_27527__$1;
(statearr_27532_27559[(1)] = (5));

} else {
var statearr_27533_27560 = state_27527__$1;
(statearr_27533_27560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (13))){
var state_27527__$1 = state_27527;
var statearr_27534_27561 = state_27527__$1;
(statearr_27534_27561[(2)] = null);

(statearr_27534_27561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (6))){
var inst_27504 = (state_27527[(7)]);
var inst_27510 = p.call(null,inst_27504);
var state_27527__$1 = state_27527;
if(cljs.core.truth_(inst_27510)){
var statearr_27535_27562 = state_27527__$1;
(statearr_27535_27562[(1)] = (9));

} else {
var statearr_27536_27563 = state_27527__$1;
(statearr_27536_27563[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (3))){
var inst_27525 = (state_27527[(2)]);
var state_27527__$1 = state_27527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27527__$1,inst_27525);
} else {
if((state_val_27528 === (12))){
var state_27527__$1 = state_27527;
var statearr_27537_27564 = state_27527__$1;
(statearr_27537_27564[(2)] = null);

(statearr_27537_27564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (2))){
var state_27527__$1 = state_27527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27527__$1,(4),ch);
} else {
if((state_val_27528 === (11))){
var inst_27504 = (state_27527[(7)]);
var inst_27514 = (state_27527[(2)]);
var state_27527__$1 = state_27527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27527__$1,(8),inst_27514,inst_27504);
} else {
if((state_val_27528 === (9))){
var state_27527__$1 = state_27527;
var statearr_27538_27565 = state_27527__$1;
(statearr_27538_27565[(2)] = tc);

(statearr_27538_27565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (5))){
var inst_27507 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27508 = cljs.core.async.close_BANG_.call(null,fc);
var state_27527__$1 = (function (){var statearr_27539 = state_27527;
(statearr_27539[(8)] = inst_27507);

return statearr_27539;
})();
var statearr_27540_27566 = state_27527__$1;
(statearr_27540_27566[(2)] = inst_27508);

(statearr_27540_27566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (14))){
var inst_27521 = (state_27527[(2)]);
var state_27527__$1 = state_27527;
var statearr_27541_27567 = state_27527__$1;
(statearr_27541_27567[(2)] = inst_27521);

(statearr_27541_27567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (10))){
var state_27527__$1 = state_27527;
var statearr_27542_27568 = state_27527__$1;
(statearr_27542_27568[(2)] = fc);

(statearr_27542_27568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27528 === (8))){
var inst_27516 = (state_27527[(2)]);
var state_27527__$1 = state_27527;
if(cljs.core.truth_(inst_27516)){
var statearr_27543_27569 = state_27527__$1;
(statearr_27543_27569[(1)] = (12));

} else {
var statearr_27544_27570 = state_27527__$1;
(statearr_27544_27570[(1)] = (13));

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
});})(c__20811__auto___27556,tc,fc))
;
return ((function (switch__20790__auto__,c__20811__auto___27556,tc,fc){
return (function() {
var cljs$core$async$state_machine__20791__auto__ = null;
var cljs$core$async$state_machine__20791__auto____0 = (function (){
var statearr_27548 = [null,null,null,null,null,null,null,null,null];
(statearr_27548[(0)] = cljs$core$async$state_machine__20791__auto__);

(statearr_27548[(1)] = (1));

return statearr_27548;
});
var cljs$core$async$state_machine__20791__auto____1 = (function (state_27527){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_27527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e27549){if((e27549 instanceof Object)){
var ex__20794__auto__ = e27549;
var statearr_27550_27571 = state_27527;
(statearr_27550_27571[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27572 = state_27527;
state_27527 = G__27572;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$state_machine__20791__auto__ = function(state_27527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20791__auto____1.call(this,state_27527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20791__auto____0;
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20791__auto____1;
return cljs$core$async$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___27556,tc,fc))
})();
var state__20813__auto__ = (function (){var statearr_27551 = f__20812__auto__.call(null);
(statearr_27551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___27556);

return statearr_27551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___27556,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20811__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto__){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto__){
return (function (state_27636){
var state_val_27637 = (state_27636[(1)]);
if((state_val_27637 === (7))){
var inst_27632 = (state_27636[(2)]);
var state_27636__$1 = state_27636;
var statearr_27638_27659 = state_27636__$1;
(statearr_27638_27659[(2)] = inst_27632);

(statearr_27638_27659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (1))){
var inst_27616 = init;
var state_27636__$1 = (function (){var statearr_27639 = state_27636;
(statearr_27639[(7)] = inst_27616);

return statearr_27639;
})();
var statearr_27640_27660 = state_27636__$1;
(statearr_27640_27660[(2)] = null);

(statearr_27640_27660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (4))){
var inst_27619 = (state_27636[(8)]);
var inst_27619__$1 = (state_27636[(2)]);
var inst_27620 = (inst_27619__$1 == null);
var state_27636__$1 = (function (){var statearr_27641 = state_27636;
(statearr_27641[(8)] = inst_27619__$1);

return statearr_27641;
})();
if(cljs.core.truth_(inst_27620)){
var statearr_27642_27661 = state_27636__$1;
(statearr_27642_27661[(1)] = (5));

} else {
var statearr_27643_27662 = state_27636__$1;
(statearr_27643_27662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (6))){
var inst_27623 = (state_27636[(9)]);
var inst_27619 = (state_27636[(8)]);
var inst_27616 = (state_27636[(7)]);
var inst_27623__$1 = f.call(null,inst_27616,inst_27619);
var inst_27624 = cljs.core.reduced_QMARK_.call(null,inst_27623__$1);
var state_27636__$1 = (function (){var statearr_27644 = state_27636;
(statearr_27644[(9)] = inst_27623__$1);

return statearr_27644;
})();
if(inst_27624){
var statearr_27645_27663 = state_27636__$1;
(statearr_27645_27663[(1)] = (8));

} else {
var statearr_27646_27664 = state_27636__$1;
(statearr_27646_27664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (3))){
var inst_27634 = (state_27636[(2)]);
var state_27636__$1 = state_27636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27636__$1,inst_27634);
} else {
if((state_val_27637 === (2))){
var state_27636__$1 = state_27636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27636__$1,(4),ch);
} else {
if((state_val_27637 === (9))){
var inst_27623 = (state_27636[(9)]);
var inst_27616 = inst_27623;
var state_27636__$1 = (function (){var statearr_27647 = state_27636;
(statearr_27647[(7)] = inst_27616);

return statearr_27647;
})();
var statearr_27648_27665 = state_27636__$1;
(statearr_27648_27665[(2)] = null);

(statearr_27648_27665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (5))){
var inst_27616 = (state_27636[(7)]);
var state_27636__$1 = state_27636;
var statearr_27649_27666 = state_27636__$1;
(statearr_27649_27666[(2)] = inst_27616);

(statearr_27649_27666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (10))){
var inst_27630 = (state_27636[(2)]);
var state_27636__$1 = state_27636;
var statearr_27650_27667 = state_27636__$1;
(statearr_27650_27667[(2)] = inst_27630);

(statearr_27650_27667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27637 === (8))){
var inst_27623 = (state_27636[(9)]);
var inst_27626 = cljs.core.deref.call(null,inst_27623);
var state_27636__$1 = state_27636;
var statearr_27651_27668 = state_27636__$1;
(statearr_27651_27668[(2)] = inst_27626);

(statearr_27651_27668[(1)] = (10));


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
});})(c__20811__auto__))
;
return ((function (switch__20790__auto__,c__20811__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20791__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20791__auto____0 = (function (){
var statearr_27655 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27655[(0)] = cljs$core$async$reduce_$_state_machine__20791__auto__);

(statearr_27655[(1)] = (1));

return statearr_27655;
});
var cljs$core$async$reduce_$_state_machine__20791__auto____1 = (function (state_27636){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_27636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e27656){if((e27656 instanceof Object)){
var ex__20794__auto__ = e27656;
var statearr_27657_27669 = state_27636;
(statearr_27657_27669[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27670 = state_27636;
state_27636 = G__27670;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20791__auto__ = function(state_27636){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20791__auto____1.call(this,state_27636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20791__auto____0;
cljs$core$async$reduce_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20791__auto____1;
return cljs$core$async$reduce_$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto__))
})();
var state__20813__auto__ = (function (){var statearr_27658 = f__20812__auto__.call(null);
(statearr_27658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto__);

return statearr_27658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto__))
);

return c__20811__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27671 = [];
var len__17892__auto___27723 = arguments.length;
var i__17893__auto___27724 = (0);
while(true){
if((i__17893__auto___27724 < len__17892__auto___27723)){
args27671.push((arguments[i__17893__auto___27724]));

var G__27725 = (i__17893__auto___27724 + (1));
i__17893__auto___27724 = G__27725;
continue;
} else {
}
break;
}

var G__27673 = args27671.length;
switch (G__27673) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27671.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20811__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto__){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto__){
return (function (state_27698){
var state_val_27699 = (state_27698[(1)]);
if((state_val_27699 === (7))){
var inst_27680 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27700_27727 = state_27698__$1;
(statearr_27700_27727[(2)] = inst_27680);

(statearr_27700_27727[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (1))){
var inst_27674 = cljs.core.seq.call(null,coll);
var inst_27675 = inst_27674;
var state_27698__$1 = (function (){var statearr_27701 = state_27698;
(statearr_27701[(7)] = inst_27675);

return statearr_27701;
})();
var statearr_27702_27728 = state_27698__$1;
(statearr_27702_27728[(2)] = null);

(statearr_27702_27728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (4))){
var inst_27675 = (state_27698[(7)]);
var inst_27678 = cljs.core.first.call(null,inst_27675);
var state_27698__$1 = state_27698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27698__$1,(7),ch,inst_27678);
} else {
if((state_val_27699 === (13))){
var inst_27692 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27703_27729 = state_27698__$1;
(statearr_27703_27729[(2)] = inst_27692);

(statearr_27703_27729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (6))){
var inst_27683 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
if(cljs.core.truth_(inst_27683)){
var statearr_27704_27730 = state_27698__$1;
(statearr_27704_27730[(1)] = (8));

} else {
var statearr_27705_27731 = state_27698__$1;
(statearr_27705_27731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (3))){
var inst_27696 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27698__$1,inst_27696);
} else {
if((state_val_27699 === (12))){
var state_27698__$1 = state_27698;
var statearr_27706_27732 = state_27698__$1;
(statearr_27706_27732[(2)] = null);

(statearr_27706_27732[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (2))){
var inst_27675 = (state_27698[(7)]);
var state_27698__$1 = state_27698;
if(cljs.core.truth_(inst_27675)){
var statearr_27707_27733 = state_27698__$1;
(statearr_27707_27733[(1)] = (4));

} else {
var statearr_27708_27734 = state_27698__$1;
(statearr_27708_27734[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (11))){
var inst_27689 = cljs.core.async.close_BANG_.call(null,ch);
var state_27698__$1 = state_27698;
var statearr_27709_27735 = state_27698__$1;
(statearr_27709_27735[(2)] = inst_27689);

(statearr_27709_27735[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (9))){
var state_27698__$1 = state_27698;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27710_27736 = state_27698__$1;
(statearr_27710_27736[(1)] = (11));

} else {
var statearr_27711_27737 = state_27698__$1;
(statearr_27711_27737[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (5))){
var inst_27675 = (state_27698[(7)]);
var state_27698__$1 = state_27698;
var statearr_27712_27738 = state_27698__$1;
(statearr_27712_27738[(2)] = inst_27675);

(statearr_27712_27738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (10))){
var inst_27694 = (state_27698[(2)]);
var state_27698__$1 = state_27698;
var statearr_27713_27739 = state_27698__$1;
(statearr_27713_27739[(2)] = inst_27694);

(statearr_27713_27739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27699 === (8))){
var inst_27675 = (state_27698[(7)]);
var inst_27685 = cljs.core.next.call(null,inst_27675);
var inst_27675__$1 = inst_27685;
var state_27698__$1 = (function (){var statearr_27714 = state_27698;
(statearr_27714[(7)] = inst_27675__$1);

return statearr_27714;
})();
var statearr_27715_27740 = state_27698__$1;
(statearr_27715_27740[(2)] = null);

(statearr_27715_27740[(1)] = (2));


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
});})(c__20811__auto__))
;
return ((function (switch__20790__auto__,c__20811__auto__){
return (function() {
var cljs$core$async$state_machine__20791__auto__ = null;
var cljs$core$async$state_machine__20791__auto____0 = (function (){
var statearr_27719 = [null,null,null,null,null,null,null,null];
(statearr_27719[(0)] = cljs$core$async$state_machine__20791__auto__);

(statearr_27719[(1)] = (1));

return statearr_27719;
});
var cljs$core$async$state_machine__20791__auto____1 = (function (state_27698){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_27698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e27720){if((e27720 instanceof Object)){
var ex__20794__auto__ = e27720;
var statearr_27721_27741 = state_27698;
(statearr_27721_27741[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27742 = state_27698;
state_27698 = G__27742;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$state_machine__20791__auto__ = function(state_27698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20791__auto____1.call(this,state_27698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20791__auto____0;
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20791__auto____1;
return cljs$core$async$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto__))
})();
var state__20813__auto__ = (function (){var statearr_27722 = f__20812__auto__.call(null);
(statearr_27722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto__);

return statearr_27722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto__))
);

return c__20811__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17489__auto__ = (((_ == null))?null:_);
var m__17490__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,_);
} else {
var m__17490__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17489__auto__ = (((m == null))?null:m);
var m__17490__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17490__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17489__auto__ = (((m == null))?null:m);
var m__17490__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,m,ch);
} else {
var m__17490__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17489__auto__ = (((m == null))?null:m);
var m__17490__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,m);
} else {
var m__17490__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27964 = (function (mult,ch,cs,meta27965){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27965 = meta27965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27966,meta27965__$1){
var self__ = this;
var _27966__$1 = this;
return (new cljs.core.async.t_cljs$core$async27964(self__.mult,self__.ch,self__.cs,meta27965__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27966){
var self__ = this;
var _27966__$1 = this;
return self__.meta27965;
});})(cs))
;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27964.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27964.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27965","meta27965",256327472,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27964";

cljs.core.async.t_cljs$core$async27964.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"cljs.core.async/t_cljs$core$async27964");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27964 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27964(mult__$1,ch__$1,cs__$1,meta27965){
return (new cljs.core.async.t_cljs$core$async27964(mult__$1,ch__$1,cs__$1,meta27965));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27964(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20811__auto___28185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___28185,cs,m,dchan,dctr,done){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___28185,cs,m,dchan,dctr,done){
return (function (state_28097){
var state_val_28098 = (state_28097[(1)]);
if((state_val_28098 === (7))){
var inst_28093 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28099_28186 = state_28097__$1;
(statearr_28099_28186[(2)] = inst_28093);

(statearr_28099_28186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (20))){
var inst_27998 = (state_28097[(7)]);
var inst_28008 = cljs.core.first.call(null,inst_27998);
var inst_28009 = cljs.core.nth.call(null,inst_28008,(0),null);
var inst_28010 = cljs.core.nth.call(null,inst_28008,(1),null);
var state_28097__$1 = (function (){var statearr_28100 = state_28097;
(statearr_28100[(8)] = inst_28009);

return statearr_28100;
})();
if(cljs.core.truth_(inst_28010)){
var statearr_28101_28187 = state_28097__$1;
(statearr_28101_28187[(1)] = (22));

} else {
var statearr_28102_28188 = state_28097__$1;
(statearr_28102_28188[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (27))){
var inst_28038 = (state_28097[(9)]);
var inst_28045 = (state_28097[(10)]);
var inst_27969 = (state_28097[(11)]);
var inst_28040 = (state_28097[(12)]);
var inst_28045__$1 = cljs.core._nth.call(null,inst_28038,inst_28040);
var inst_28046 = cljs.core.async.put_BANG_.call(null,inst_28045__$1,inst_27969,done);
var state_28097__$1 = (function (){var statearr_28103 = state_28097;
(statearr_28103[(10)] = inst_28045__$1);

return statearr_28103;
})();
if(cljs.core.truth_(inst_28046)){
var statearr_28104_28189 = state_28097__$1;
(statearr_28104_28189[(1)] = (30));

} else {
var statearr_28105_28190 = state_28097__$1;
(statearr_28105_28190[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (1))){
var state_28097__$1 = state_28097;
var statearr_28106_28191 = state_28097__$1;
(statearr_28106_28191[(2)] = null);

(statearr_28106_28191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (24))){
var inst_27998 = (state_28097[(7)]);
var inst_28015 = (state_28097[(2)]);
var inst_28016 = cljs.core.next.call(null,inst_27998);
var inst_27978 = inst_28016;
var inst_27979 = null;
var inst_27980 = (0);
var inst_27981 = (0);
var state_28097__$1 = (function (){var statearr_28107 = state_28097;
(statearr_28107[(13)] = inst_28015);

(statearr_28107[(14)] = inst_27978);

(statearr_28107[(15)] = inst_27979);

(statearr_28107[(16)] = inst_27980);

(statearr_28107[(17)] = inst_27981);

return statearr_28107;
})();
var statearr_28108_28192 = state_28097__$1;
(statearr_28108_28192[(2)] = null);

(statearr_28108_28192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (39))){
var state_28097__$1 = state_28097;
var statearr_28112_28193 = state_28097__$1;
(statearr_28112_28193[(2)] = null);

(statearr_28112_28193[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (4))){
var inst_27969 = (state_28097[(11)]);
var inst_27969__$1 = (state_28097[(2)]);
var inst_27970 = (inst_27969__$1 == null);
var state_28097__$1 = (function (){var statearr_28113 = state_28097;
(statearr_28113[(11)] = inst_27969__$1);

return statearr_28113;
})();
if(cljs.core.truth_(inst_27970)){
var statearr_28114_28194 = state_28097__$1;
(statearr_28114_28194[(1)] = (5));

} else {
var statearr_28115_28195 = state_28097__$1;
(statearr_28115_28195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (15))){
var inst_27978 = (state_28097[(14)]);
var inst_27979 = (state_28097[(15)]);
var inst_27980 = (state_28097[(16)]);
var inst_27981 = (state_28097[(17)]);
var inst_27994 = (state_28097[(2)]);
var inst_27995 = (inst_27981 + (1));
var tmp28109 = inst_27978;
var tmp28110 = inst_27979;
var tmp28111 = inst_27980;
var inst_27978__$1 = tmp28109;
var inst_27979__$1 = tmp28110;
var inst_27980__$1 = tmp28111;
var inst_27981__$1 = inst_27995;
var state_28097__$1 = (function (){var statearr_28116 = state_28097;
(statearr_28116[(18)] = inst_27994);

(statearr_28116[(14)] = inst_27978__$1);

(statearr_28116[(15)] = inst_27979__$1);

(statearr_28116[(16)] = inst_27980__$1);

(statearr_28116[(17)] = inst_27981__$1);

return statearr_28116;
})();
var statearr_28117_28196 = state_28097__$1;
(statearr_28117_28196[(2)] = null);

(statearr_28117_28196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (21))){
var inst_28019 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28121_28197 = state_28097__$1;
(statearr_28121_28197[(2)] = inst_28019);

(statearr_28121_28197[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (31))){
var inst_28045 = (state_28097[(10)]);
var inst_28049 = done.call(null,null);
var inst_28050 = cljs.core.async.untap_STAR_.call(null,m,inst_28045);
var state_28097__$1 = (function (){var statearr_28122 = state_28097;
(statearr_28122[(19)] = inst_28049);

return statearr_28122;
})();
var statearr_28123_28198 = state_28097__$1;
(statearr_28123_28198[(2)] = inst_28050);

(statearr_28123_28198[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (32))){
var inst_28038 = (state_28097[(9)]);
var inst_28037 = (state_28097[(20)]);
var inst_28040 = (state_28097[(12)]);
var inst_28039 = (state_28097[(21)]);
var inst_28052 = (state_28097[(2)]);
var inst_28053 = (inst_28040 + (1));
var tmp28118 = inst_28038;
var tmp28119 = inst_28037;
var tmp28120 = inst_28039;
var inst_28037__$1 = tmp28119;
var inst_28038__$1 = tmp28118;
var inst_28039__$1 = tmp28120;
var inst_28040__$1 = inst_28053;
var state_28097__$1 = (function (){var statearr_28124 = state_28097;
(statearr_28124[(22)] = inst_28052);

(statearr_28124[(9)] = inst_28038__$1);

(statearr_28124[(20)] = inst_28037__$1);

(statearr_28124[(12)] = inst_28040__$1);

(statearr_28124[(21)] = inst_28039__$1);

return statearr_28124;
})();
var statearr_28125_28199 = state_28097__$1;
(statearr_28125_28199[(2)] = null);

(statearr_28125_28199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (40))){
var inst_28065 = (state_28097[(23)]);
var inst_28069 = done.call(null,null);
var inst_28070 = cljs.core.async.untap_STAR_.call(null,m,inst_28065);
var state_28097__$1 = (function (){var statearr_28126 = state_28097;
(statearr_28126[(24)] = inst_28069);

return statearr_28126;
})();
var statearr_28127_28200 = state_28097__$1;
(statearr_28127_28200[(2)] = inst_28070);

(statearr_28127_28200[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (33))){
var inst_28056 = (state_28097[(25)]);
var inst_28058 = cljs.core.chunked_seq_QMARK_.call(null,inst_28056);
var state_28097__$1 = state_28097;
if(inst_28058){
var statearr_28128_28201 = state_28097__$1;
(statearr_28128_28201[(1)] = (36));

} else {
var statearr_28129_28202 = state_28097__$1;
(statearr_28129_28202[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (13))){
var inst_27988 = (state_28097[(26)]);
var inst_27991 = cljs.core.async.close_BANG_.call(null,inst_27988);
var state_28097__$1 = state_28097;
var statearr_28130_28203 = state_28097__$1;
(statearr_28130_28203[(2)] = inst_27991);

(statearr_28130_28203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (22))){
var inst_28009 = (state_28097[(8)]);
var inst_28012 = cljs.core.async.close_BANG_.call(null,inst_28009);
var state_28097__$1 = state_28097;
var statearr_28131_28204 = state_28097__$1;
(statearr_28131_28204[(2)] = inst_28012);

(statearr_28131_28204[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (36))){
var inst_28056 = (state_28097[(25)]);
var inst_28060 = cljs.core.chunk_first.call(null,inst_28056);
var inst_28061 = cljs.core.chunk_rest.call(null,inst_28056);
var inst_28062 = cljs.core.count.call(null,inst_28060);
var inst_28037 = inst_28061;
var inst_28038 = inst_28060;
var inst_28039 = inst_28062;
var inst_28040 = (0);
var state_28097__$1 = (function (){var statearr_28132 = state_28097;
(statearr_28132[(9)] = inst_28038);

(statearr_28132[(20)] = inst_28037);

(statearr_28132[(12)] = inst_28040);

(statearr_28132[(21)] = inst_28039);

return statearr_28132;
})();
var statearr_28133_28205 = state_28097__$1;
(statearr_28133_28205[(2)] = null);

(statearr_28133_28205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (41))){
var inst_28056 = (state_28097[(25)]);
var inst_28072 = (state_28097[(2)]);
var inst_28073 = cljs.core.next.call(null,inst_28056);
var inst_28037 = inst_28073;
var inst_28038 = null;
var inst_28039 = (0);
var inst_28040 = (0);
var state_28097__$1 = (function (){var statearr_28134 = state_28097;
(statearr_28134[(9)] = inst_28038);

(statearr_28134[(20)] = inst_28037);

(statearr_28134[(12)] = inst_28040);

(statearr_28134[(21)] = inst_28039);

(statearr_28134[(27)] = inst_28072);

return statearr_28134;
})();
var statearr_28135_28206 = state_28097__$1;
(statearr_28135_28206[(2)] = null);

(statearr_28135_28206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (43))){
var state_28097__$1 = state_28097;
var statearr_28136_28207 = state_28097__$1;
(statearr_28136_28207[(2)] = null);

(statearr_28136_28207[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (29))){
var inst_28081 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28137_28208 = state_28097__$1;
(statearr_28137_28208[(2)] = inst_28081);

(statearr_28137_28208[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (44))){
var inst_28090 = (state_28097[(2)]);
var state_28097__$1 = (function (){var statearr_28138 = state_28097;
(statearr_28138[(28)] = inst_28090);

return statearr_28138;
})();
var statearr_28139_28209 = state_28097__$1;
(statearr_28139_28209[(2)] = null);

(statearr_28139_28209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (6))){
var inst_28029 = (state_28097[(29)]);
var inst_28028 = cljs.core.deref.call(null,cs);
var inst_28029__$1 = cljs.core.keys.call(null,inst_28028);
var inst_28030 = cljs.core.count.call(null,inst_28029__$1);
var inst_28031 = cljs.core.reset_BANG_.call(null,dctr,inst_28030);
var inst_28036 = cljs.core.seq.call(null,inst_28029__$1);
var inst_28037 = inst_28036;
var inst_28038 = null;
var inst_28039 = (0);
var inst_28040 = (0);
var state_28097__$1 = (function (){var statearr_28140 = state_28097;
(statearr_28140[(9)] = inst_28038);

(statearr_28140[(20)] = inst_28037);

(statearr_28140[(12)] = inst_28040);

(statearr_28140[(21)] = inst_28039);

(statearr_28140[(30)] = inst_28031);

(statearr_28140[(29)] = inst_28029__$1);

return statearr_28140;
})();
var statearr_28141_28210 = state_28097__$1;
(statearr_28141_28210[(2)] = null);

(statearr_28141_28210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (28))){
var inst_28037 = (state_28097[(20)]);
var inst_28056 = (state_28097[(25)]);
var inst_28056__$1 = cljs.core.seq.call(null,inst_28037);
var state_28097__$1 = (function (){var statearr_28142 = state_28097;
(statearr_28142[(25)] = inst_28056__$1);

return statearr_28142;
})();
if(inst_28056__$1){
var statearr_28143_28211 = state_28097__$1;
(statearr_28143_28211[(1)] = (33));

} else {
var statearr_28144_28212 = state_28097__$1;
(statearr_28144_28212[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (25))){
var inst_28040 = (state_28097[(12)]);
var inst_28039 = (state_28097[(21)]);
var inst_28042 = (inst_28040 < inst_28039);
var inst_28043 = inst_28042;
var state_28097__$1 = state_28097;
if(cljs.core.truth_(inst_28043)){
var statearr_28145_28213 = state_28097__$1;
(statearr_28145_28213[(1)] = (27));

} else {
var statearr_28146_28214 = state_28097__$1;
(statearr_28146_28214[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (34))){
var state_28097__$1 = state_28097;
var statearr_28147_28215 = state_28097__$1;
(statearr_28147_28215[(2)] = null);

(statearr_28147_28215[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (17))){
var state_28097__$1 = state_28097;
var statearr_28148_28216 = state_28097__$1;
(statearr_28148_28216[(2)] = null);

(statearr_28148_28216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (3))){
var inst_28095 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28097__$1,inst_28095);
} else {
if((state_val_28098 === (12))){
var inst_28024 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28149_28217 = state_28097__$1;
(statearr_28149_28217[(2)] = inst_28024);

(statearr_28149_28217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (2))){
var state_28097__$1 = state_28097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28097__$1,(4),ch);
} else {
if((state_val_28098 === (23))){
var state_28097__$1 = state_28097;
var statearr_28150_28218 = state_28097__$1;
(statearr_28150_28218[(2)] = null);

(statearr_28150_28218[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (35))){
var inst_28079 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28151_28219 = state_28097__$1;
(statearr_28151_28219[(2)] = inst_28079);

(statearr_28151_28219[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (19))){
var inst_27998 = (state_28097[(7)]);
var inst_28002 = cljs.core.chunk_first.call(null,inst_27998);
var inst_28003 = cljs.core.chunk_rest.call(null,inst_27998);
var inst_28004 = cljs.core.count.call(null,inst_28002);
var inst_27978 = inst_28003;
var inst_27979 = inst_28002;
var inst_27980 = inst_28004;
var inst_27981 = (0);
var state_28097__$1 = (function (){var statearr_28152 = state_28097;
(statearr_28152[(14)] = inst_27978);

(statearr_28152[(15)] = inst_27979);

(statearr_28152[(16)] = inst_27980);

(statearr_28152[(17)] = inst_27981);

return statearr_28152;
})();
var statearr_28153_28220 = state_28097__$1;
(statearr_28153_28220[(2)] = null);

(statearr_28153_28220[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (11))){
var inst_27998 = (state_28097[(7)]);
var inst_27978 = (state_28097[(14)]);
var inst_27998__$1 = cljs.core.seq.call(null,inst_27978);
var state_28097__$1 = (function (){var statearr_28154 = state_28097;
(statearr_28154[(7)] = inst_27998__$1);

return statearr_28154;
})();
if(inst_27998__$1){
var statearr_28155_28221 = state_28097__$1;
(statearr_28155_28221[(1)] = (16));

} else {
var statearr_28156_28222 = state_28097__$1;
(statearr_28156_28222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (9))){
var inst_28026 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28157_28223 = state_28097__$1;
(statearr_28157_28223[(2)] = inst_28026);

(statearr_28157_28223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (5))){
var inst_27976 = cljs.core.deref.call(null,cs);
var inst_27977 = cljs.core.seq.call(null,inst_27976);
var inst_27978 = inst_27977;
var inst_27979 = null;
var inst_27980 = (0);
var inst_27981 = (0);
var state_28097__$1 = (function (){var statearr_28158 = state_28097;
(statearr_28158[(14)] = inst_27978);

(statearr_28158[(15)] = inst_27979);

(statearr_28158[(16)] = inst_27980);

(statearr_28158[(17)] = inst_27981);

return statearr_28158;
})();
var statearr_28159_28224 = state_28097__$1;
(statearr_28159_28224[(2)] = null);

(statearr_28159_28224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (14))){
var state_28097__$1 = state_28097;
var statearr_28160_28225 = state_28097__$1;
(statearr_28160_28225[(2)] = null);

(statearr_28160_28225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (45))){
var inst_28087 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28161_28226 = state_28097__$1;
(statearr_28161_28226[(2)] = inst_28087);

(statearr_28161_28226[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (26))){
var inst_28029 = (state_28097[(29)]);
var inst_28083 = (state_28097[(2)]);
var inst_28084 = cljs.core.seq.call(null,inst_28029);
var state_28097__$1 = (function (){var statearr_28162 = state_28097;
(statearr_28162[(31)] = inst_28083);

return statearr_28162;
})();
if(inst_28084){
var statearr_28163_28227 = state_28097__$1;
(statearr_28163_28227[(1)] = (42));

} else {
var statearr_28164_28228 = state_28097__$1;
(statearr_28164_28228[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (16))){
var inst_27998 = (state_28097[(7)]);
var inst_28000 = cljs.core.chunked_seq_QMARK_.call(null,inst_27998);
var state_28097__$1 = state_28097;
if(inst_28000){
var statearr_28165_28229 = state_28097__$1;
(statearr_28165_28229[(1)] = (19));

} else {
var statearr_28166_28230 = state_28097__$1;
(statearr_28166_28230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (38))){
var inst_28076 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28167_28231 = state_28097__$1;
(statearr_28167_28231[(2)] = inst_28076);

(statearr_28167_28231[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (30))){
var state_28097__$1 = state_28097;
var statearr_28168_28232 = state_28097__$1;
(statearr_28168_28232[(2)] = null);

(statearr_28168_28232[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (10))){
var inst_27979 = (state_28097[(15)]);
var inst_27981 = (state_28097[(17)]);
var inst_27987 = cljs.core._nth.call(null,inst_27979,inst_27981);
var inst_27988 = cljs.core.nth.call(null,inst_27987,(0),null);
var inst_27989 = cljs.core.nth.call(null,inst_27987,(1),null);
var state_28097__$1 = (function (){var statearr_28169 = state_28097;
(statearr_28169[(26)] = inst_27988);

return statearr_28169;
})();
if(cljs.core.truth_(inst_27989)){
var statearr_28170_28233 = state_28097__$1;
(statearr_28170_28233[(1)] = (13));

} else {
var statearr_28171_28234 = state_28097__$1;
(statearr_28171_28234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (18))){
var inst_28022 = (state_28097[(2)]);
var state_28097__$1 = state_28097;
var statearr_28172_28235 = state_28097__$1;
(statearr_28172_28235[(2)] = inst_28022);

(statearr_28172_28235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (42))){
var state_28097__$1 = state_28097;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28097__$1,(45),dchan);
} else {
if((state_val_28098 === (37))){
var inst_28065 = (state_28097[(23)]);
var inst_27969 = (state_28097[(11)]);
var inst_28056 = (state_28097[(25)]);
var inst_28065__$1 = cljs.core.first.call(null,inst_28056);
var inst_28066 = cljs.core.async.put_BANG_.call(null,inst_28065__$1,inst_27969,done);
var state_28097__$1 = (function (){var statearr_28173 = state_28097;
(statearr_28173[(23)] = inst_28065__$1);

return statearr_28173;
})();
if(cljs.core.truth_(inst_28066)){
var statearr_28174_28236 = state_28097__$1;
(statearr_28174_28236[(1)] = (39));

} else {
var statearr_28175_28237 = state_28097__$1;
(statearr_28175_28237[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28098 === (8))){
var inst_27980 = (state_28097[(16)]);
var inst_27981 = (state_28097[(17)]);
var inst_27983 = (inst_27981 < inst_27980);
var inst_27984 = inst_27983;
var state_28097__$1 = state_28097;
if(cljs.core.truth_(inst_27984)){
var statearr_28176_28238 = state_28097__$1;
(statearr_28176_28238[(1)] = (10));

} else {
var statearr_28177_28239 = state_28097__$1;
(statearr_28177_28239[(1)] = (11));

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
});})(c__20811__auto___28185,cs,m,dchan,dctr,done))
;
return ((function (switch__20790__auto__,c__20811__auto___28185,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20791__auto__ = null;
var cljs$core$async$mult_$_state_machine__20791__auto____0 = (function (){
var statearr_28181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28181[(0)] = cljs$core$async$mult_$_state_machine__20791__auto__);

(statearr_28181[(1)] = (1));

return statearr_28181;
});
var cljs$core$async$mult_$_state_machine__20791__auto____1 = (function (state_28097){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_28097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e28182){if((e28182 instanceof Object)){
var ex__20794__auto__ = e28182;
var statearr_28183_28240 = state_28097;
(statearr_28183_28240[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28241 = state_28097;
state_28097 = G__28241;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20791__auto__ = function(state_28097){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20791__auto____1.call(this,state_28097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20791__auto____0;
cljs$core$async$mult_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20791__auto____1;
return cljs$core$async$mult_$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___28185,cs,m,dchan,dctr,done))
})();
var state__20813__auto__ = (function (){var statearr_28184 = f__20812__auto__.call(null);
(statearr_28184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___28185);

return statearr_28184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___28185,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28242 = [];
var len__17892__auto___28245 = arguments.length;
var i__17893__auto___28246 = (0);
while(true){
if((i__17893__auto___28246 < len__17892__auto___28245)){
args28242.push((arguments[i__17893__auto___28246]));

var G__28247 = (i__17893__auto___28246 + (1));
i__17893__auto___28246 = G__28247;
continue;
} else {
}
break;
}

var G__28244 = args28242.length;
switch (G__28244) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28242.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17489__auto__ = (((m == null))?null:m);
var m__17490__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,m,ch);
} else {
var m__17490__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17489__auto__ = (((m == null))?null:m);
var m__17490__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,m,ch);
} else {
var m__17490__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17489__auto__ = (((m == null))?null:m);
var m__17490__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,m);
} else {
var m__17490__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17489__auto__ = (((m == null))?null:m);
var m__17490__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,m,state_map);
} else {
var m__17490__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17489__auto__ = (((m == null))?null:m);
var m__17490__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,m,mode);
} else {
var m__17490__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17899__auto__ = [];
var len__17892__auto___28259 = arguments.length;
var i__17893__auto___28260 = (0);
while(true){
if((i__17893__auto___28260 < len__17892__auto___28259)){
args__17899__auto__.push((arguments[i__17893__auto___28260]));

var G__28261 = (i__17893__auto___28260 + (1));
i__17893__auto___28260 = G__28261;
continue;
} else {
}
break;
}

var argseq__17900__auto__ = ((((3) < args__17899__auto__.length))?(new cljs.core.IndexedSeq(args__17899__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17900__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28253){
var map__28254 = p__28253;
var map__28254__$1 = ((((!((map__28254 == null)))?((((map__28254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28254):map__28254);
var opts = map__28254__$1;
var statearr_28256_28262 = state;
(statearr_28256_28262[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28254,map__28254__$1,opts){
return (function (val){
var statearr_28257_28263 = state;
(statearr_28257_28263[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28254,map__28254__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28258_28264 = state;
(statearr_28258_28264[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28249){
var G__28250 = cljs.core.first.call(null,seq28249);
var seq28249__$1 = cljs.core.next.call(null,seq28249);
var G__28251 = cljs.core.first.call(null,seq28249__$1);
var seq28249__$2 = cljs.core.next.call(null,seq28249__$1);
var G__28252 = cljs.core.first.call(null,seq28249__$2);
var seq28249__$3 = cljs.core.next.call(null,seq28249__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28250,G__28251,G__28252,seq28249__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28428 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28429){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28429 = meta28429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28430,meta28429__$1){
var self__ = this;
var _28430__$1 = this;
return (new cljs.core.async.t_cljs$core$async28428(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28429__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28430){
var self__ = this;
var _28430__$1 = this;
return self__.meta28429;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28428.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28428.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28428.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async28428.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28428.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28428.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28428.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28428.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28428.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28429","meta28429",981292832,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28428";

cljs.core.async.t_cljs$core$async28428.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"cljs.core.async/t_cljs$core$async28428");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28428 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28428(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28429){
return (new cljs.core.async.t_cljs$core$async28428(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28429));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28428(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20811__auto___28591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___28591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___28591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28528){
var state_val_28529 = (state_28528[(1)]);
if((state_val_28529 === (7))){
var inst_28446 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
var statearr_28530_28592 = state_28528__$1;
(statearr_28530_28592[(2)] = inst_28446);

(statearr_28530_28592[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (20))){
var inst_28458 = (state_28528[(7)]);
var state_28528__$1 = state_28528;
var statearr_28531_28593 = state_28528__$1;
(statearr_28531_28593[(2)] = inst_28458);

(statearr_28531_28593[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (27))){
var state_28528__$1 = state_28528;
var statearr_28532_28594 = state_28528__$1;
(statearr_28532_28594[(2)] = null);

(statearr_28532_28594[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (1))){
var inst_28434 = (state_28528[(8)]);
var inst_28434__$1 = calc_state.call(null);
var inst_28436 = (inst_28434__$1 == null);
var inst_28437 = cljs.core.not.call(null,inst_28436);
var state_28528__$1 = (function (){var statearr_28533 = state_28528;
(statearr_28533[(8)] = inst_28434__$1);

return statearr_28533;
})();
if(inst_28437){
var statearr_28534_28595 = state_28528__$1;
(statearr_28534_28595[(1)] = (2));

} else {
var statearr_28535_28596 = state_28528__$1;
(statearr_28535_28596[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (24))){
var inst_28488 = (state_28528[(9)]);
var inst_28502 = (state_28528[(10)]);
var inst_28481 = (state_28528[(11)]);
var inst_28502__$1 = inst_28481.call(null,inst_28488);
var state_28528__$1 = (function (){var statearr_28536 = state_28528;
(statearr_28536[(10)] = inst_28502__$1);

return statearr_28536;
})();
if(cljs.core.truth_(inst_28502__$1)){
var statearr_28537_28597 = state_28528__$1;
(statearr_28537_28597[(1)] = (29));

} else {
var statearr_28538_28598 = state_28528__$1;
(statearr_28538_28598[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (4))){
var inst_28449 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
if(cljs.core.truth_(inst_28449)){
var statearr_28539_28599 = state_28528__$1;
(statearr_28539_28599[(1)] = (8));

} else {
var statearr_28540_28600 = state_28528__$1;
(statearr_28540_28600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (15))){
var inst_28475 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
if(cljs.core.truth_(inst_28475)){
var statearr_28541_28601 = state_28528__$1;
(statearr_28541_28601[(1)] = (19));

} else {
var statearr_28542_28602 = state_28528__$1;
(statearr_28542_28602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (21))){
var inst_28480 = (state_28528[(12)]);
var inst_28480__$1 = (state_28528[(2)]);
var inst_28481 = cljs.core.get.call(null,inst_28480__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28482 = cljs.core.get.call(null,inst_28480__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28483 = cljs.core.get.call(null,inst_28480__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28528__$1 = (function (){var statearr_28543 = state_28528;
(statearr_28543[(12)] = inst_28480__$1);

(statearr_28543[(13)] = inst_28482);

(statearr_28543[(11)] = inst_28481);

return statearr_28543;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28528__$1,(22),inst_28483);
} else {
if((state_val_28529 === (31))){
var inst_28510 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
if(cljs.core.truth_(inst_28510)){
var statearr_28544_28603 = state_28528__$1;
(statearr_28544_28603[(1)] = (32));

} else {
var statearr_28545_28604 = state_28528__$1;
(statearr_28545_28604[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (32))){
var inst_28487 = (state_28528[(14)]);
var state_28528__$1 = state_28528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28528__$1,(35),out,inst_28487);
} else {
if((state_val_28529 === (33))){
var inst_28480 = (state_28528[(12)]);
var inst_28458 = inst_28480;
var state_28528__$1 = (function (){var statearr_28546 = state_28528;
(statearr_28546[(7)] = inst_28458);

return statearr_28546;
})();
var statearr_28547_28605 = state_28528__$1;
(statearr_28547_28605[(2)] = null);

(statearr_28547_28605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (13))){
var inst_28458 = (state_28528[(7)]);
var inst_28465 = inst_28458.cljs$lang$protocol_mask$partition0$;
var inst_28466 = (inst_28465 & (64));
var inst_28467 = inst_28458.cljs$core$ISeq$;
var inst_28468 = (inst_28466) || (inst_28467);
var state_28528__$1 = state_28528;
if(cljs.core.truth_(inst_28468)){
var statearr_28548_28606 = state_28528__$1;
(statearr_28548_28606[(1)] = (16));

} else {
var statearr_28549_28607 = state_28528__$1;
(statearr_28549_28607[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (22))){
var inst_28488 = (state_28528[(9)]);
var inst_28487 = (state_28528[(14)]);
var inst_28486 = (state_28528[(2)]);
var inst_28487__$1 = cljs.core.nth.call(null,inst_28486,(0),null);
var inst_28488__$1 = cljs.core.nth.call(null,inst_28486,(1),null);
var inst_28489 = (inst_28487__$1 == null);
var inst_28490 = cljs.core._EQ_.call(null,inst_28488__$1,change);
var inst_28491 = (inst_28489) || (inst_28490);
var state_28528__$1 = (function (){var statearr_28550 = state_28528;
(statearr_28550[(9)] = inst_28488__$1);

(statearr_28550[(14)] = inst_28487__$1);

return statearr_28550;
})();
if(cljs.core.truth_(inst_28491)){
var statearr_28551_28608 = state_28528__$1;
(statearr_28551_28608[(1)] = (23));

} else {
var statearr_28552_28609 = state_28528__$1;
(statearr_28552_28609[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (36))){
var inst_28480 = (state_28528[(12)]);
var inst_28458 = inst_28480;
var state_28528__$1 = (function (){var statearr_28553 = state_28528;
(statearr_28553[(7)] = inst_28458);

return statearr_28553;
})();
var statearr_28554_28610 = state_28528__$1;
(statearr_28554_28610[(2)] = null);

(statearr_28554_28610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (29))){
var inst_28502 = (state_28528[(10)]);
var state_28528__$1 = state_28528;
var statearr_28555_28611 = state_28528__$1;
(statearr_28555_28611[(2)] = inst_28502);

(statearr_28555_28611[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (6))){
var state_28528__$1 = state_28528;
var statearr_28556_28612 = state_28528__$1;
(statearr_28556_28612[(2)] = false);

(statearr_28556_28612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (28))){
var inst_28498 = (state_28528[(2)]);
var inst_28499 = calc_state.call(null);
var inst_28458 = inst_28499;
var state_28528__$1 = (function (){var statearr_28557 = state_28528;
(statearr_28557[(15)] = inst_28498);

(statearr_28557[(7)] = inst_28458);

return statearr_28557;
})();
var statearr_28558_28613 = state_28528__$1;
(statearr_28558_28613[(2)] = null);

(statearr_28558_28613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (25))){
var inst_28524 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
var statearr_28559_28614 = state_28528__$1;
(statearr_28559_28614[(2)] = inst_28524);

(statearr_28559_28614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (34))){
var inst_28522 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
var statearr_28560_28615 = state_28528__$1;
(statearr_28560_28615[(2)] = inst_28522);

(statearr_28560_28615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (17))){
var state_28528__$1 = state_28528;
var statearr_28561_28616 = state_28528__$1;
(statearr_28561_28616[(2)] = false);

(statearr_28561_28616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (3))){
var state_28528__$1 = state_28528;
var statearr_28562_28617 = state_28528__$1;
(statearr_28562_28617[(2)] = false);

(statearr_28562_28617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (12))){
var inst_28526 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28528__$1,inst_28526);
} else {
if((state_val_28529 === (2))){
var inst_28434 = (state_28528[(8)]);
var inst_28439 = inst_28434.cljs$lang$protocol_mask$partition0$;
var inst_28440 = (inst_28439 & (64));
var inst_28441 = inst_28434.cljs$core$ISeq$;
var inst_28442 = (inst_28440) || (inst_28441);
var state_28528__$1 = state_28528;
if(cljs.core.truth_(inst_28442)){
var statearr_28563_28618 = state_28528__$1;
(statearr_28563_28618[(1)] = (5));

} else {
var statearr_28564_28619 = state_28528__$1;
(statearr_28564_28619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (23))){
var inst_28487 = (state_28528[(14)]);
var inst_28493 = (inst_28487 == null);
var state_28528__$1 = state_28528;
if(cljs.core.truth_(inst_28493)){
var statearr_28565_28620 = state_28528__$1;
(statearr_28565_28620[(1)] = (26));

} else {
var statearr_28566_28621 = state_28528__$1;
(statearr_28566_28621[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (35))){
var inst_28513 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
if(cljs.core.truth_(inst_28513)){
var statearr_28567_28622 = state_28528__$1;
(statearr_28567_28622[(1)] = (36));

} else {
var statearr_28568_28623 = state_28528__$1;
(statearr_28568_28623[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (19))){
var inst_28458 = (state_28528[(7)]);
var inst_28477 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28458);
var state_28528__$1 = state_28528;
var statearr_28569_28624 = state_28528__$1;
(statearr_28569_28624[(2)] = inst_28477);

(statearr_28569_28624[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (11))){
var inst_28458 = (state_28528[(7)]);
var inst_28462 = (inst_28458 == null);
var inst_28463 = cljs.core.not.call(null,inst_28462);
var state_28528__$1 = state_28528;
if(inst_28463){
var statearr_28570_28625 = state_28528__$1;
(statearr_28570_28625[(1)] = (13));

} else {
var statearr_28571_28626 = state_28528__$1;
(statearr_28571_28626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (9))){
var inst_28434 = (state_28528[(8)]);
var state_28528__$1 = state_28528;
var statearr_28572_28627 = state_28528__$1;
(statearr_28572_28627[(2)] = inst_28434);

(statearr_28572_28627[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (5))){
var state_28528__$1 = state_28528;
var statearr_28573_28628 = state_28528__$1;
(statearr_28573_28628[(2)] = true);

(statearr_28573_28628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (14))){
var state_28528__$1 = state_28528;
var statearr_28574_28629 = state_28528__$1;
(statearr_28574_28629[(2)] = false);

(statearr_28574_28629[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (26))){
var inst_28488 = (state_28528[(9)]);
var inst_28495 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28488);
var state_28528__$1 = state_28528;
var statearr_28575_28630 = state_28528__$1;
(statearr_28575_28630[(2)] = inst_28495);

(statearr_28575_28630[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (16))){
var state_28528__$1 = state_28528;
var statearr_28576_28631 = state_28528__$1;
(statearr_28576_28631[(2)] = true);

(statearr_28576_28631[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (38))){
var inst_28518 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
var statearr_28577_28632 = state_28528__$1;
(statearr_28577_28632[(2)] = inst_28518);

(statearr_28577_28632[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (30))){
var inst_28488 = (state_28528[(9)]);
var inst_28482 = (state_28528[(13)]);
var inst_28481 = (state_28528[(11)]);
var inst_28505 = cljs.core.empty_QMARK_.call(null,inst_28481);
var inst_28506 = inst_28482.call(null,inst_28488);
var inst_28507 = cljs.core.not.call(null,inst_28506);
var inst_28508 = (inst_28505) && (inst_28507);
var state_28528__$1 = state_28528;
var statearr_28578_28633 = state_28528__$1;
(statearr_28578_28633[(2)] = inst_28508);

(statearr_28578_28633[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (10))){
var inst_28434 = (state_28528[(8)]);
var inst_28454 = (state_28528[(2)]);
var inst_28455 = cljs.core.get.call(null,inst_28454,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28456 = cljs.core.get.call(null,inst_28454,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28457 = cljs.core.get.call(null,inst_28454,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28458 = inst_28434;
var state_28528__$1 = (function (){var statearr_28579 = state_28528;
(statearr_28579[(16)] = inst_28455);

(statearr_28579[(17)] = inst_28457);

(statearr_28579[(18)] = inst_28456);

(statearr_28579[(7)] = inst_28458);

return statearr_28579;
})();
var statearr_28580_28634 = state_28528__$1;
(statearr_28580_28634[(2)] = null);

(statearr_28580_28634[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (18))){
var inst_28472 = (state_28528[(2)]);
var state_28528__$1 = state_28528;
var statearr_28581_28635 = state_28528__$1;
(statearr_28581_28635[(2)] = inst_28472);

(statearr_28581_28635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (37))){
var state_28528__$1 = state_28528;
var statearr_28582_28636 = state_28528__$1;
(statearr_28582_28636[(2)] = null);

(statearr_28582_28636[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28529 === (8))){
var inst_28434 = (state_28528[(8)]);
var inst_28451 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28434);
var state_28528__$1 = state_28528;
var statearr_28583_28637 = state_28528__$1;
(statearr_28583_28637[(2)] = inst_28451);

(statearr_28583_28637[(1)] = (10));


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
});})(c__20811__auto___28591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20790__auto__,c__20811__auto___28591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20791__auto__ = null;
var cljs$core$async$mix_$_state_machine__20791__auto____0 = (function (){
var statearr_28587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28587[(0)] = cljs$core$async$mix_$_state_machine__20791__auto__);

(statearr_28587[(1)] = (1));

return statearr_28587;
});
var cljs$core$async$mix_$_state_machine__20791__auto____1 = (function (state_28528){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_28528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e28588){if((e28588 instanceof Object)){
var ex__20794__auto__ = e28588;
var statearr_28589_28638 = state_28528;
(statearr_28589_28638[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28639 = state_28528;
state_28528 = G__28639;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20791__auto__ = function(state_28528){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20791__auto____1.call(this,state_28528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20791__auto____0;
cljs$core$async$mix_$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20791__auto____1;
return cljs$core$async$mix_$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___28591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20813__auto__ = (function (){var statearr_28590 = f__20812__auto__.call(null);
(statearr_28590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___28591);

return statearr_28590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___28591,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17489__auto__ = (((p == null))?null:p);
var m__17490__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17490__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17489__auto__ = (((p == null))?null:p);
var m__17490__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,p,v,ch);
} else {
var m__17490__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args28640 = [];
var len__17892__auto___28643 = arguments.length;
var i__17893__auto___28644 = (0);
while(true){
if((i__17893__auto___28644 < len__17892__auto___28643)){
args28640.push((arguments[i__17893__auto___28644]));

var G__28645 = (i__17893__auto___28644 + (1));
i__17893__auto___28644 = G__28645;
continue;
} else {
}
break;
}

var G__28642 = args28640.length;
switch (G__28642) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28640.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17489__auto__ = (((p == null))?null:p);
var m__17490__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,p);
} else {
var m__17490__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17489__auto__ = (((p == null))?null:p);
var m__17490__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17489__auto__)]);
if(!((m__17490__auto__ == null))){
return m__17490__auto__.call(null,p,v);
} else {
var m__17490__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17490__auto____$1 == null))){
return m__17490__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28648 = [];
var len__17892__auto___28773 = arguments.length;
var i__17893__auto___28774 = (0);
while(true){
if((i__17893__auto___28774 < len__17892__auto___28773)){
args28648.push((arguments[i__17893__auto___28774]));

var G__28775 = (i__17893__auto___28774 + (1));
i__17893__auto___28774 = G__28775;
continue;
} else {
}
break;
}

var G__28650 = args28648.length;
switch (G__28650) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28648.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16834__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16834__auto__)){
return or__16834__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16834__auto__,mults){
return (function (p1__28647_SHARP_){
if(cljs.core.truth_(p1__28647_SHARP_.call(null,topic))){
return p1__28647_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28647_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16834__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28651 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28651 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28652){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28652 = meta28652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28653,meta28652__$1){
var self__ = this;
var _28653__$1 = this;
return (new cljs.core.async.t_cljs$core$async28651(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28652__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28653){
var self__ = this;
var _28653__$1 = this;
return self__.meta28652;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28651.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28652","meta28652",-1732531208,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28651.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28651";

cljs.core.async.t_cljs$core$async28651.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"cljs.core.async/t_cljs$core$async28651");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28651 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28651(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28652){
return (new cljs.core.async.t_cljs$core$async28651(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28652));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28651(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20811__auto___28777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___28777,mults,ensure_mult,p){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___28777,mults,ensure_mult,p){
return (function (state_28725){
var state_val_28726 = (state_28725[(1)]);
if((state_val_28726 === (7))){
var inst_28721 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28727_28778 = state_28725__$1;
(statearr_28727_28778[(2)] = inst_28721);

(statearr_28727_28778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (20))){
var state_28725__$1 = state_28725;
var statearr_28728_28779 = state_28725__$1;
(statearr_28728_28779[(2)] = null);

(statearr_28728_28779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (1))){
var state_28725__$1 = state_28725;
var statearr_28729_28780 = state_28725__$1;
(statearr_28729_28780[(2)] = null);

(statearr_28729_28780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (24))){
var inst_28704 = (state_28725[(7)]);
var inst_28713 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28704);
var state_28725__$1 = state_28725;
var statearr_28730_28781 = state_28725__$1;
(statearr_28730_28781[(2)] = inst_28713);

(statearr_28730_28781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (4))){
var inst_28656 = (state_28725[(8)]);
var inst_28656__$1 = (state_28725[(2)]);
var inst_28657 = (inst_28656__$1 == null);
var state_28725__$1 = (function (){var statearr_28731 = state_28725;
(statearr_28731[(8)] = inst_28656__$1);

return statearr_28731;
})();
if(cljs.core.truth_(inst_28657)){
var statearr_28732_28782 = state_28725__$1;
(statearr_28732_28782[(1)] = (5));

} else {
var statearr_28733_28783 = state_28725__$1;
(statearr_28733_28783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (15))){
var inst_28698 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28734_28784 = state_28725__$1;
(statearr_28734_28784[(2)] = inst_28698);

(statearr_28734_28784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (21))){
var inst_28718 = (state_28725[(2)]);
var state_28725__$1 = (function (){var statearr_28735 = state_28725;
(statearr_28735[(9)] = inst_28718);

return statearr_28735;
})();
var statearr_28736_28785 = state_28725__$1;
(statearr_28736_28785[(2)] = null);

(statearr_28736_28785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (13))){
var inst_28680 = (state_28725[(10)]);
var inst_28682 = cljs.core.chunked_seq_QMARK_.call(null,inst_28680);
var state_28725__$1 = state_28725;
if(inst_28682){
var statearr_28737_28786 = state_28725__$1;
(statearr_28737_28786[(1)] = (16));

} else {
var statearr_28738_28787 = state_28725__$1;
(statearr_28738_28787[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (22))){
var inst_28710 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
if(cljs.core.truth_(inst_28710)){
var statearr_28739_28788 = state_28725__$1;
(statearr_28739_28788[(1)] = (23));

} else {
var statearr_28740_28789 = state_28725__$1;
(statearr_28740_28789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (6))){
var inst_28704 = (state_28725[(7)]);
var inst_28706 = (state_28725[(11)]);
var inst_28656 = (state_28725[(8)]);
var inst_28704__$1 = topic_fn.call(null,inst_28656);
var inst_28705 = cljs.core.deref.call(null,mults);
var inst_28706__$1 = cljs.core.get.call(null,inst_28705,inst_28704__$1);
var state_28725__$1 = (function (){var statearr_28741 = state_28725;
(statearr_28741[(7)] = inst_28704__$1);

(statearr_28741[(11)] = inst_28706__$1);

return statearr_28741;
})();
if(cljs.core.truth_(inst_28706__$1)){
var statearr_28742_28790 = state_28725__$1;
(statearr_28742_28790[(1)] = (19));

} else {
var statearr_28743_28791 = state_28725__$1;
(statearr_28743_28791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (25))){
var inst_28715 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28744_28792 = state_28725__$1;
(statearr_28744_28792[(2)] = inst_28715);

(statearr_28744_28792[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (17))){
var inst_28680 = (state_28725[(10)]);
var inst_28689 = cljs.core.first.call(null,inst_28680);
var inst_28690 = cljs.core.async.muxch_STAR_.call(null,inst_28689);
var inst_28691 = cljs.core.async.close_BANG_.call(null,inst_28690);
var inst_28692 = cljs.core.next.call(null,inst_28680);
var inst_28666 = inst_28692;
var inst_28667 = null;
var inst_28668 = (0);
var inst_28669 = (0);
var state_28725__$1 = (function (){var statearr_28745 = state_28725;
(statearr_28745[(12)] = inst_28667);

(statearr_28745[(13)] = inst_28691);

(statearr_28745[(14)] = inst_28668);

(statearr_28745[(15)] = inst_28666);

(statearr_28745[(16)] = inst_28669);

return statearr_28745;
})();
var statearr_28746_28793 = state_28725__$1;
(statearr_28746_28793[(2)] = null);

(statearr_28746_28793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (3))){
var inst_28723 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28725__$1,inst_28723);
} else {
if((state_val_28726 === (12))){
var inst_28700 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28747_28794 = state_28725__$1;
(statearr_28747_28794[(2)] = inst_28700);

(statearr_28747_28794[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (2))){
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28725__$1,(4),ch);
} else {
if((state_val_28726 === (23))){
var state_28725__$1 = state_28725;
var statearr_28748_28795 = state_28725__$1;
(statearr_28748_28795[(2)] = null);

(statearr_28748_28795[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (19))){
var inst_28706 = (state_28725[(11)]);
var inst_28656 = (state_28725[(8)]);
var inst_28708 = cljs.core.async.muxch_STAR_.call(null,inst_28706);
var state_28725__$1 = state_28725;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28725__$1,(22),inst_28708,inst_28656);
} else {
if((state_val_28726 === (11))){
var inst_28680 = (state_28725[(10)]);
var inst_28666 = (state_28725[(15)]);
var inst_28680__$1 = cljs.core.seq.call(null,inst_28666);
var state_28725__$1 = (function (){var statearr_28749 = state_28725;
(statearr_28749[(10)] = inst_28680__$1);

return statearr_28749;
})();
if(inst_28680__$1){
var statearr_28750_28796 = state_28725__$1;
(statearr_28750_28796[(1)] = (13));

} else {
var statearr_28751_28797 = state_28725__$1;
(statearr_28751_28797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (9))){
var inst_28702 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28752_28798 = state_28725__$1;
(statearr_28752_28798[(2)] = inst_28702);

(statearr_28752_28798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (5))){
var inst_28663 = cljs.core.deref.call(null,mults);
var inst_28664 = cljs.core.vals.call(null,inst_28663);
var inst_28665 = cljs.core.seq.call(null,inst_28664);
var inst_28666 = inst_28665;
var inst_28667 = null;
var inst_28668 = (0);
var inst_28669 = (0);
var state_28725__$1 = (function (){var statearr_28753 = state_28725;
(statearr_28753[(12)] = inst_28667);

(statearr_28753[(14)] = inst_28668);

(statearr_28753[(15)] = inst_28666);

(statearr_28753[(16)] = inst_28669);

return statearr_28753;
})();
var statearr_28754_28799 = state_28725__$1;
(statearr_28754_28799[(2)] = null);

(statearr_28754_28799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (14))){
var state_28725__$1 = state_28725;
var statearr_28758_28800 = state_28725__$1;
(statearr_28758_28800[(2)] = null);

(statearr_28758_28800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (16))){
var inst_28680 = (state_28725[(10)]);
var inst_28684 = cljs.core.chunk_first.call(null,inst_28680);
var inst_28685 = cljs.core.chunk_rest.call(null,inst_28680);
var inst_28686 = cljs.core.count.call(null,inst_28684);
var inst_28666 = inst_28685;
var inst_28667 = inst_28684;
var inst_28668 = inst_28686;
var inst_28669 = (0);
var state_28725__$1 = (function (){var statearr_28759 = state_28725;
(statearr_28759[(12)] = inst_28667);

(statearr_28759[(14)] = inst_28668);

(statearr_28759[(15)] = inst_28666);

(statearr_28759[(16)] = inst_28669);

return statearr_28759;
})();
var statearr_28760_28801 = state_28725__$1;
(statearr_28760_28801[(2)] = null);

(statearr_28760_28801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (10))){
var inst_28667 = (state_28725[(12)]);
var inst_28668 = (state_28725[(14)]);
var inst_28666 = (state_28725[(15)]);
var inst_28669 = (state_28725[(16)]);
var inst_28674 = cljs.core._nth.call(null,inst_28667,inst_28669);
var inst_28675 = cljs.core.async.muxch_STAR_.call(null,inst_28674);
var inst_28676 = cljs.core.async.close_BANG_.call(null,inst_28675);
var inst_28677 = (inst_28669 + (1));
var tmp28755 = inst_28667;
var tmp28756 = inst_28668;
var tmp28757 = inst_28666;
var inst_28666__$1 = tmp28757;
var inst_28667__$1 = tmp28755;
var inst_28668__$1 = tmp28756;
var inst_28669__$1 = inst_28677;
var state_28725__$1 = (function (){var statearr_28761 = state_28725;
(statearr_28761[(12)] = inst_28667__$1);

(statearr_28761[(14)] = inst_28668__$1);

(statearr_28761[(15)] = inst_28666__$1);

(statearr_28761[(16)] = inst_28669__$1);

(statearr_28761[(17)] = inst_28676);

return statearr_28761;
})();
var statearr_28762_28802 = state_28725__$1;
(statearr_28762_28802[(2)] = null);

(statearr_28762_28802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (18))){
var inst_28695 = (state_28725[(2)]);
var state_28725__$1 = state_28725;
var statearr_28763_28803 = state_28725__$1;
(statearr_28763_28803[(2)] = inst_28695);

(statearr_28763_28803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28726 === (8))){
var inst_28668 = (state_28725[(14)]);
var inst_28669 = (state_28725[(16)]);
var inst_28671 = (inst_28669 < inst_28668);
var inst_28672 = inst_28671;
var state_28725__$1 = state_28725;
if(cljs.core.truth_(inst_28672)){
var statearr_28764_28804 = state_28725__$1;
(statearr_28764_28804[(1)] = (10));

} else {
var statearr_28765_28805 = state_28725__$1;
(statearr_28765_28805[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__20811__auto___28777,mults,ensure_mult,p))
;
return ((function (switch__20790__auto__,c__20811__auto___28777,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20791__auto__ = null;
var cljs$core$async$state_machine__20791__auto____0 = (function (){
var statearr_28769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28769[(0)] = cljs$core$async$state_machine__20791__auto__);

(statearr_28769[(1)] = (1));

return statearr_28769;
});
var cljs$core$async$state_machine__20791__auto____1 = (function (state_28725){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_28725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e28770){if((e28770 instanceof Object)){
var ex__20794__auto__ = e28770;
var statearr_28771_28806 = state_28725;
(statearr_28771_28806[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28807 = state_28725;
state_28725 = G__28807;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$state_machine__20791__auto__ = function(state_28725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20791__auto____1.call(this,state_28725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20791__auto____0;
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20791__auto____1;
return cljs$core$async$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___28777,mults,ensure_mult,p))
})();
var state__20813__auto__ = (function (){var statearr_28772 = f__20812__auto__.call(null);
(statearr_28772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___28777);

return statearr_28772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___28777,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28808 = [];
var len__17892__auto___28811 = arguments.length;
var i__17893__auto___28812 = (0);
while(true){
if((i__17893__auto___28812 < len__17892__auto___28811)){
args28808.push((arguments[i__17893__auto___28812]));

var G__28813 = (i__17893__auto___28812 + (1));
i__17893__auto___28812 = G__28813;
continue;
} else {
}
break;
}

var G__28810 = args28808.length;
switch (G__28810) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28808.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28815 = [];
var len__17892__auto___28818 = arguments.length;
var i__17893__auto___28819 = (0);
while(true){
if((i__17893__auto___28819 < len__17892__auto___28818)){
args28815.push((arguments[i__17893__auto___28819]));

var G__28820 = (i__17893__auto___28819 + (1));
i__17893__auto___28819 = G__28820;
continue;
} else {
}
break;
}

var G__28817 = args28815.length;
switch (G__28817) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28815.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28822 = [];
var len__17892__auto___28893 = arguments.length;
var i__17893__auto___28894 = (0);
while(true){
if((i__17893__auto___28894 < len__17892__auto___28893)){
args28822.push((arguments[i__17893__auto___28894]));

var G__28895 = (i__17893__auto___28894 + (1));
i__17893__auto___28894 = G__28895;
continue;
} else {
}
break;
}

var G__28824 = args28822.length;
switch (G__28824) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28822.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20811__auto___28897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___28897,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___28897,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28863){
var state_val_28864 = (state_28863[(1)]);
if((state_val_28864 === (7))){
var state_28863__$1 = state_28863;
var statearr_28865_28898 = state_28863__$1;
(statearr_28865_28898[(2)] = null);

(statearr_28865_28898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (1))){
var state_28863__$1 = state_28863;
var statearr_28866_28899 = state_28863__$1;
(statearr_28866_28899[(2)] = null);

(statearr_28866_28899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (4))){
var inst_28827 = (state_28863[(7)]);
var inst_28829 = (inst_28827 < cnt);
var state_28863__$1 = state_28863;
if(cljs.core.truth_(inst_28829)){
var statearr_28867_28900 = state_28863__$1;
(statearr_28867_28900[(1)] = (6));

} else {
var statearr_28868_28901 = state_28863__$1;
(statearr_28868_28901[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (15))){
var inst_28859 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28869_28902 = state_28863__$1;
(statearr_28869_28902[(2)] = inst_28859);

(statearr_28869_28902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (13))){
var inst_28852 = cljs.core.async.close_BANG_.call(null,out);
var state_28863__$1 = state_28863;
var statearr_28870_28903 = state_28863__$1;
(statearr_28870_28903[(2)] = inst_28852);

(statearr_28870_28903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (6))){
var state_28863__$1 = state_28863;
var statearr_28871_28904 = state_28863__$1;
(statearr_28871_28904[(2)] = null);

(statearr_28871_28904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (3))){
var inst_28861 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28863__$1,inst_28861);
} else {
if((state_val_28864 === (12))){
var inst_28849 = (state_28863[(8)]);
var inst_28849__$1 = (state_28863[(2)]);
var inst_28850 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28849__$1);
var state_28863__$1 = (function (){var statearr_28872 = state_28863;
(statearr_28872[(8)] = inst_28849__$1);

return statearr_28872;
})();
if(cljs.core.truth_(inst_28850)){
var statearr_28873_28905 = state_28863__$1;
(statearr_28873_28905[(1)] = (13));

} else {
var statearr_28874_28906 = state_28863__$1;
(statearr_28874_28906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (2))){
var inst_28826 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28827 = (0);
var state_28863__$1 = (function (){var statearr_28875 = state_28863;
(statearr_28875[(9)] = inst_28826);

(statearr_28875[(7)] = inst_28827);

return statearr_28875;
})();
var statearr_28876_28907 = state_28863__$1;
(statearr_28876_28907[(2)] = null);

(statearr_28876_28907[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (11))){
var inst_28827 = (state_28863[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28863,(10),Object,null,(9));
var inst_28836 = chs__$1.call(null,inst_28827);
var inst_28837 = done.call(null,inst_28827);
var inst_28838 = cljs.core.async.take_BANG_.call(null,inst_28836,inst_28837);
var state_28863__$1 = state_28863;
var statearr_28877_28908 = state_28863__$1;
(statearr_28877_28908[(2)] = inst_28838);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (9))){
var inst_28827 = (state_28863[(7)]);
var inst_28840 = (state_28863[(2)]);
var inst_28841 = (inst_28827 + (1));
var inst_28827__$1 = inst_28841;
var state_28863__$1 = (function (){var statearr_28878 = state_28863;
(statearr_28878[(10)] = inst_28840);

(statearr_28878[(7)] = inst_28827__$1);

return statearr_28878;
})();
var statearr_28879_28909 = state_28863__$1;
(statearr_28879_28909[(2)] = null);

(statearr_28879_28909[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (5))){
var inst_28847 = (state_28863[(2)]);
var state_28863__$1 = (function (){var statearr_28880 = state_28863;
(statearr_28880[(11)] = inst_28847);

return statearr_28880;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28863__$1,(12),dchan);
} else {
if((state_val_28864 === (14))){
var inst_28849 = (state_28863[(8)]);
var inst_28854 = cljs.core.apply.call(null,f,inst_28849);
var state_28863__$1 = state_28863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28863__$1,(16),out,inst_28854);
} else {
if((state_val_28864 === (16))){
var inst_28856 = (state_28863[(2)]);
var state_28863__$1 = (function (){var statearr_28881 = state_28863;
(statearr_28881[(12)] = inst_28856);

return statearr_28881;
})();
var statearr_28882_28910 = state_28863__$1;
(statearr_28882_28910[(2)] = null);

(statearr_28882_28910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (10))){
var inst_28831 = (state_28863[(2)]);
var inst_28832 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28863__$1 = (function (){var statearr_28883 = state_28863;
(statearr_28883[(13)] = inst_28831);

return statearr_28883;
})();
var statearr_28884_28911 = state_28863__$1;
(statearr_28884_28911[(2)] = inst_28832);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28863__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28864 === (8))){
var inst_28845 = (state_28863[(2)]);
var state_28863__$1 = state_28863;
var statearr_28885_28912 = state_28863__$1;
(statearr_28885_28912[(2)] = inst_28845);

(statearr_28885_28912[(1)] = (5));


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
});})(c__20811__auto___28897,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20790__auto__,c__20811__auto___28897,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20791__auto__ = null;
var cljs$core$async$state_machine__20791__auto____0 = (function (){
var statearr_28889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28889[(0)] = cljs$core$async$state_machine__20791__auto__);

(statearr_28889[(1)] = (1));

return statearr_28889;
});
var cljs$core$async$state_machine__20791__auto____1 = (function (state_28863){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_28863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e28890){if((e28890 instanceof Object)){
var ex__20794__auto__ = e28890;
var statearr_28891_28913 = state_28863;
(statearr_28891_28913[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28914 = state_28863;
state_28863 = G__28914;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$state_machine__20791__auto__ = function(state_28863){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20791__auto____1.call(this,state_28863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20791__auto____0;
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20791__auto____1;
return cljs$core$async$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___28897,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20813__auto__ = (function (){var statearr_28892 = f__20812__auto__.call(null);
(statearr_28892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___28897);

return statearr_28892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___28897,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28916 = [];
var len__17892__auto___28972 = arguments.length;
var i__17893__auto___28973 = (0);
while(true){
if((i__17893__auto___28973 < len__17892__auto___28972)){
args28916.push((arguments[i__17893__auto___28973]));

var G__28974 = (i__17893__auto___28973 + (1));
i__17893__auto___28973 = G__28974;
continue;
} else {
}
break;
}

var G__28918 = args28916.length;
switch (G__28918) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28916.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20811__auto___28976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___28976,out){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___28976,out){
return (function (state_28948){
var state_val_28949 = (state_28948[(1)]);
if((state_val_28949 === (7))){
var inst_28928 = (state_28948[(7)]);
var inst_28927 = (state_28948[(8)]);
var inst_28927__$1 = (state_28948[(2)]);
var inst_28928__$1 = cljs.core.nth.call(null,inst_28927__$1,(0),null);
var inst_28929 = cljs.core.nth.call(null,inst_28927__$1,(1),null);
var inst_28930 = (inst_28928__$1 == null);
var state_28948__$1 = (function (){var statearr_28950 = state_28948;
(statearr_28950[(9)] = inst_28929);

(statearr_28950[(7)] = inst_28928__$1);

(statearr_28950[(8)] = inst_28927__$1);

return statearr_28950;
})();
if(cljs.core.truth_(inst_28930)){
var statearr_28951_28977 = state_28948__$1;
(statearr_28951_28977[(1)] = (8));

} else {
var statearr_28952_28978 = state_28948__$1;
(statearr_28952_28978[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (1))){
var inst_28919 = cljs.core.vec.call(null,chs);
var inst_28920 = inst_28919;
var state_28948__$1 = (function (){var statearr_28953 = state_28948;
(statearr_28953[(10)] = inst_28920);

return statearr_28953;
})();
var statearr_28954_28979 = state_28948__$1;
(statearr_28954_28979[(2)] = null);

(statearr_28954_28979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (4))){
var inst_28920 = (state_28948[(10)]);
var state_28948__$1 = state_28948;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28948__$1,(7),inst_28920);
} else {
if((state_val_28949 === (6))){
var inst_28944 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28955_28980 = state_28948__$1;
(statearr_28955_28980[(2)] = inst_28944);

(statearr_28955_28980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (3))){
var inst_28946 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28948__$1,inst_28946);
} else {
if((state_val_28949 === (2))){
var inst_28920 = (state_28948[(10)]);
var inst_28922 = cljs.core.count.call(null,inst_28920);
var inst_28923 = (inst_28922 > (0));
var state_28948__$1 = state_28948;
if(cljs.core.truth_(inst_28923)){
var statearr_28957_28981 = state_28948__$1;
(statearr_28957_28981[(1)] = (4));

} else {
var statearr_28958_28982 = state_28948__$1;
(statearr_28958_28982[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (11))){
var inst_28920 = (state_28948[(10)]);
var inst_28937 = (state_28948[(2)]);
var tmp28956 = inst_28920;
var inst_28920__$1 = tmp28956;
var state_28948__$1 = (function (){var statearr_28959 = state_28948;
(statearr_28959[(10)] = inst_28920__$1);

(statearr_28959[(11)] = inst_28937);

return statearr_28959;
})();
var statearr_28960_28983 = state_28948__$1;
(statearr_28960_28983[(2)] = null);

(statearr_28960_28983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (9))){
var inst_28928 = (state_28948[(7)]);
var state_28948__$1 = state_28948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28948__$1,(11),out,inst_28928);
} else {
if((state_val_28949 === (5))){
var inst_28942 = cljs.core.async.close_BANG_.call(null,out);
var state_28948__$1 = state_28948;
var statearr_28961_28984 = state_28948__$1;
(statearr_28961_28984[(2)] = inst_28942);

(statearr_28961_28984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (10))){
var inst_28940 = (state_28948[(2)]);
var state_28948__$1 = state_28948;
var statearr_28962_28985 = state_28948__$1;
(statearr_28962_28985[(2)] = inst_28940);

(statearr_28962_28985[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28949 === (8))){
var inst_28920 = (state_28948[(10)]);
var inst_28929 = (state_28948[(9)]);
var inst_28928 = (state_28948[(7)]);
var inst_28927 = (state_28948[(8)]);
var inst_28932 = (function (){var cs = inst_28920;
var vec__28925 = inst_28927;
var v = inst_28928;
var c = inst_28929;
return ((function (cs,vec__28925,v,c,inst_28920,inst_28929,inst_28928,inst_28927,state_val_28949,c__20811__auto___28976,out){
return (function (p1__28915_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28915_SHARP_);
});
;})(cs,vec__28925,v,c,inst_28920,inst_28929,inst_28928,inst_28927,state_val_28949,c__20811__auto___28976,out))
})();
var inst_28933 = cljs.core.filterv.call(null,inst_28932,inst_28920);
var inst_28920__$1 = inst_28933;
var state_28948__$1 = (function (){var statearr_28963 = state_28948;
(statearr_28963[(10)] = inst_28920__$1);

return statearr_28963;
})();
var statearr_28964_28986 = state_28948__$1;
(statearr_28964_28986[(2)] = null);

(statearr_28964_28986[(1)] = (2));


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
});})(c__20811__auto___28976,out))
;
return ((function (switch__20790__auto__,c__20811__auto___28976,out){
return (function() {
var cljs$core$async$state_machine__20791__auto__ = null;
var cljs$core$async$state_machine__20791__auto____0 = (function (){
var statearr_28968 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28968[(0)] = cljs$core$async$state_machine__20791__auto__);

(statearr_28968[(1)] = (1));

return statearr_28968;
});
var cljs$core$async$state_machine__20791__auto____1 = (function (state_28948){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_28948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e28969){if((e28969 instanceof Object)){
var ex__20794__auto__ = e28969;
var statearr_28970_28987 = state_28948;
(statearr_28970_28987[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28988 = state_28948;
state_28948 = G__28988;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$state_machine__20791__auto__ = function(state_28948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20791__auto____1.call(this,state_28948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20791__auto____0;
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20791__auto____1;
return cljs$core$async$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___28976,out))
})();
var state__20813__auto__ = (function (){var statearr_28971 = f__20812__auto__.call(null);
(statearr_28971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___28976);

return statearr_28971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___28976,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28989 = [];
var len__17892__auto___29038 = arguments.length;
var i__17893__auto___29039 = (0);
while(true){
if((i__17893__auto___29039 < len__17892__auto___29038)){
args28989.push((arguments[i__17893__auto___29039]));

var G__29040 = (i__17893__auto___29039 + (1));
i__17893__auto___29039 = G__29040;
continue;
} else {
}
break;
}

var G__28991 = args28989.length;
switch (G__28991) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28989.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20811__auto___29042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___29042,out){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___29042,out){
return (function (state_29015){
var state_val_29016 = (state_29015[(1)]);
if((state_val_29016 === (7))){
var inst_28997 = (state_29015[(7)]);
var inst_28997__$1 = (state_29015[(2)]);
var inst_28998 = (inst_28997__$1 == null);
var inst_28999 = cljs.core.not.call(null,inst_28998);
var state_29015__$1 = (function (){var statearr_29017 = state_29015;
(statearr_29017[(7)] = inst_28997__$1);

return statearr_29017;
})();
if(inst_28999){
var statearr_29018_29043 = state_29015__$1;
(statearr_29018_29043[(1)] = (8));

} else {
var statearr_29019_29044 = state_29015__$1;
(statearr_29019_29044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (1))){
var inst_28992 = (0);
var state_29015__$1 = (function (){var statearr_29020 = state_29015;
(statearr_29020[(8)] = inst_28992);

return statearr_29020;
})();
var statearr_29021_29045 = state_29015__$1;
(statearr_29021_29045[(2)] = null);

(statearr_29021_29045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (4))){
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29015__$1,(7),ch);
} else {
if((state_val_29016 === (6))){
var inst_29010 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
var statearr_29022_29046 = state_29015__$1;
(statearr_29022_29046[(2)] = inst_29010);

(statearr_29022_29046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (3))){
var inst_29012 = (state_29015[(2)]);
var inst_29013 = cljs.core.async.close_BANG_.call(null,out);
var state_29015__$1 = (function (){var statearr_29023 = state_29015;
(statearr_29023[(9)] = inst_29012);

return statearr_29023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29015__$1,inst_29013);
} else {
if((state_val_29016 === (2))){
var inst_28992 = (state_29015[(8)]);
var inst_28994 = (inst_28992 < n);
var state_29015__$1 = state_29015;
if(cljs.core.truth_(inst_28994)){
var statearr_29024_29047 = state_29015__$1;
(statearr_29024_29047[(1)] = (4));

} else {
var statearr_29025_29048 = state_29015__$1;
(statearr_29025_29048[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (11))){
var inst_28992 = (state_29015[(8)]);
var inst_29002 = (state_29015[(2)]);
var inst_29003 = (inst_28992 + (1));
var inst_28992__$1 = inst_29003;
var state_29015__$1 = (function (){var statearr_29026 = state_29015;
(statearr_29026[(10)] = inst_29002);

(statearr_29026[(8)] = inst_28992__$1);

return statearr_29026;
})();
var statearr_29027_29049 = state_29015__$1;
(statearr_29027_29049[(2)] = null);

(statearr_29027_29049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (9))){
var state_29015__$1 = state_29015;
var statearr_29028_29050 = state_29015__$1;
(statearr_29028_29050[(2)] = null);

(statearr_29028_29050[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (5))){
var state_29015__$1 = state_29015;
var statearr_29029_29051 = state_29015__$1;
(statearr_29029_29051[(2)] = null);

(statearr_29029_29051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (10))){
var inst_29007 = (state_29015[(2)]);
var state_29015__$1 = state_29015;
var statearr_29030_29052 = state_29015__$1;
(statearr_29030_29052[(2)] = inst_29007);

(statearr_29030_29052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29016 === (8))){
var inst_28997 = (state_29015[(7)]);
var state_29015__$1 = state_29015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29015__$1,(11),out,inst_28997);
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
});})(c__20811__auto___29042,out))
;
return ((function (switch__20790__auto__,c__20811__auto___29042,out){
return (function() {
var cljs$core$async$state_machine__20791__auto__ = null;
var cljs$core$async$state_machine__20791__auto____0 = (function (){
var statearr_29034 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29034[(0)] = cljs$core$async$state_machine__20791__auto__);

(statearr_29034[(1)] = (1));

return statearr_29034;
});
var cljs$core$async$state_machine__20791__auto____1 = (function (state_29015){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_29015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e29035){if((e29035 instanceof Object)){
var ex__20794__auto__ = e29035;
var statearr_29036_29053 = state_29015;
(statearr_29036_29053[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29054 = state_29015;
state_29015 = G__29054;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$state_machine__20791__auto__ = function(state_29015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20791__auto____1.call(this,state_29015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20791__auto____0;
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20791__auto____1;
return cljs$core$async$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___29042,out))
})();
var state__20813__auto__ = (function (){var statearr_29037 = f__20812__auto__.call(null);
(statearr_29037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___29042);

return statearr_29037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___29042,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29062 = (function (map_LT_,f,ch,meta29063){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29063 = meta29063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29064,meta29063__$1){
var self__ = this;
var _29064__$1 = this;
return (new cljs.core.async.t_cljs$core$async29062(self__.map_LT_,self__.f,self__.ch,meta29063__$1));
});

cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29064){
var self__ = this;
var _29064__$1 = this;
return self__.meta29063;
});

cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29065 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29065 = (function (map_LT_,f,ch,meta29063,_,fn1,meta29066){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29063 = meta29063;
this._ = _;
this.fn1 = fn1;
this.meta29066 = meta29066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29067,meta29066__$1){
var self__ = this;
var _29067__$1 = this;
return (new cljs.core.async.t_cljs$core$async29065(self__.map_LT_,self__.f,self__.ch,self__.meta29063,self__._,self__.fn1,meta29066__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29067){
var self__ = this;
var _29067__$1 = this;
return self__.meta29066;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29055_SHARP_){
return f1.call(null,(((p1__29055_SHARP_ == null))?null:self__.f.call(null,p1__29055_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29065.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29063","meta29063",151087499,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29062","cljs.core.async/t_cljs$core$async29062",661609046,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29066","meta29066",-1041163106,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29065";

cljs.core.async.t_cljs$core$async29065.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"cljs.core.async/t_cljs$core$async29065");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29065 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29065(map_LT___$1,f__$1,ch__$1,meta29063__$1,___$2,fn1__$1,meta29066){
return (new cljs.core.async.t_cljs$core$async29065(map_LT___$1,f__$1,ch__$1,meta29063__$1,___$2,fn1__$1,meta29066));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29065(self__.map_LT_,self__.f,self__.ch,self__.meta29063,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16822__auto__ = ret;
if(cljs.core.truth_(and__16822__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16822__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29062.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29063","meta29063",151087499,null)], null);
});

cljs.core.async.t_cljs$core$async29062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29062";

cljs.core.async.t_cljs$core$async29062.cljs$lang$ctorPrWriter = (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"cljs.core.async/t_cljs$core$async29062");
});

cljs.core.async.__GT_t_cljs$core$async29062 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29062(map_LT___$1,f__$1,ch__$1,meta29063){
return (new cljs.core.async.t_cljs$core$async29062(map_LT___$1,f__$1,ch__$1,meta29063));
});

}

return (new cljs.core.async.t_cljs$core$async29062(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29071 = (function (map_GT_,f,ch,meta29072){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29072 = meta29072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29073,meta29072__$1){
var self__ = this;
var _29073__$1 = this;
return (new cljs.core.async.t_cljs$core$async29071(self__.map_GT_,self__.f,self__.ch,meta29072__$1));
});

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29073){
var self__ = this;
var _29073__$1 = this;
return self__.meta29072;
});

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29072","meta29072",664860802,null)], null);
});

cljs.core.async.t_cljs$core$async29071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29071";

cljs.core.async.t_cljs$core$async29071.cljs$lang$ctorPrWriter = (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"cljs.core.async/t_cljs$core$async29071");
});

cljs.core.async.__GT_t_cljs$core$async29071 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29071(map_GT___$1,f__$1,ch__$1,meta29072){
return (new cljs.core.async.t_cljs$core$async29071(map_GT___$1,f__$1,ch__$1,meta29072));
});

}

return (new cljs.core.async.t_cljs$core$async29071(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29077 = (function (filter_GT_,p,ch,meta29078){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29078 = meta29078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29079,meta29078__$1){
var self__ = this;
var _29079__$1 = this;
return (new cljs.core.async.t_cljs$core$async29077(self__.filter_GT_,self__.p,self__.ch,meta29078__$1));
});

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29079){
var self__ = this;
var _29079__$1 = this;
return self__.meta29078;
});

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29077.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29078","meta29078",242576089,null)], null);
});

cljs.core.async.t_cljs$core$async29077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29077";

cljs.core.async.t_cljs$core$async29077.cljs$lang$ctorPrWriter = (function (this__17432__auto__,writer__17433__auto__,opt__17434__auto__){
return cljs.core._write.call(null,writer__17433__auto__,"cljs.core.async/t_cljs$core$async29077");
});

cljs.core.async.__GT_t_cljs$core$async29077 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29077(filter_GT___$1,p__$1,ch__$1,meta29078){
return (new cljs.core.async.t_cljs$core$async29077(filter_GT___$1,p__$1,ch__$1,meta29078));
});

}

return (new cljs.core.async.t_cljs$core$async29077(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29080 = [];
var len__17892__auto___29124 = arguments.length;
var i__17893__auto___29125 = (0);
while(true){
if((i__17893__auto___29125 < len__17892__auto___29124)){
args29080.push((arguments[i__17893__auto___29125]));

var G__29126 = (i__17893__auto___29125 + (1));
i__17893__auto___29125 = G__29126;
continue;
} else {
}
break;
}

var G__29082 = args29080.length;
switch (G__29082) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29080.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20811__auto___29128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___29128,out){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___29128,out){
return (function (state_29103){
var state_val_29104 = (state_29103[(1)]);
if((state_val_29104 === (7))){
var inst_29099 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29105_29129 = state_29103__$1;
(statearr_29105_29129[(2)] = inst_29099);

(statearr_29105_29129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (1))){
var state_29103__$1 = state_29103;
var statearr_29106_29130 = state_29103__$1;
(statearr_29106_29130[(2)] = null);

(statearr_29106_29130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (4))){
var inst_29085 = (state_29103[(7)]);
var inst_29085__$1 = (state_29103[(2)]);
var inst_29086 = (inst_29085__$1 == null);
var state_29103__$1 = (function (){var statearr_29107 = state_29103;
(statearr_29107[(7)] = inst_29085__$1);

return statearr_29107;
})();
if(cljs.core.truth_(inst_29086)){
var statearr_29108_29131 = state_29103__$1;
(statearr_29108_29131[(1)] = (5));

} else {
var statearr_29109_29132 = state_29103__$1;
(statearr_29109_29132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (6))){
var inst_29085 = (state_29103[(7)]);
var inst_29090 = p.call(null,inst_29085);
var state_29103__$1 = state_29103;
if(cljs.core.truth_(inst_29090)){
var statearr_29110_29133 = state_29103__$1;
(statearr_29110_29133[(1)] = (8));

} else {
var statearr_29111_29134 = state_29103__$1;
(statearr_29111_29134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (3))){
var inst_29101 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29103__$1,inst_29101);
} else {
if((state_val_29104 === (2))){
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29103__$1,(4),ch);
} else {
if((state_val_29104 === (11))){
var inst_29093 = (state_29103[(2)]);
var state_29103__$1 = state_29103;
var statearr_29112_29135 = state_29103__$1;
(statearr_29112_29135[(2)] = inst_29093);

(statearr_29112_29135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (9))){
var state_29103__$1 = state_29103;
var statearr_29113_29136 = state_29103__$1;
(statearr_29113_29136[(2)] = null);

(statearr_29113_29136[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (5))){
var inst_29088 = cljs.core.async.close_BANG_.call(null,out);
var state_29103__$1 = state_29103;
var statearr_29114_29137 = state_29103__$1;
(statearr_29114_29137[(2)] = inst_29088);

(statearr_29114_29137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (10))){
var inst_29096 = (state_29103[(2)]);
var state_29103__$1 = (function (){var statearr_29115 = state_29103;
(statearr_29115[(8)] = inst_29096);

return statearr_29115;
})();
var statearr_29116_29138 = state_29103__$1;
(statearr_29116_29138[(2)] = null);

(statearr_29116_29138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29104 === (8))){
var inst_29085 = (state_29103[(7)]);
var state_29103__$1 = state_29103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29103__$1,(11),out,inst_29085);
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
});})(c__20811__auto___29128,out))
;
return ((function (switch__20790__auto__,c__20811__auto___29128,out){
return (function() {
var cljs$core$async$state_machine__20791__auto__ = null;
var cljs$core$async$state_machine__20791__auto____0 = (function (){
var statearr_29120 = [null,null,null,null,null,null,null,null,null];
(statearr_29120[(0)] = cljs$core$async$state_machine__20791__auto__);

(statearr_29120[(1)] = (1));

return statearr_29120;
});
var cljs$core$async$state_machine__20791__auto____1 = (function (state_29103){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_29103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e29121){if((e29121 instanceof Object)){
var ex__20794__auto__ = e29121;
var statearr_29122_29139 = state_29103;
(statearr_29122_29139[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29140 = state_29103;
state_29103 = G__29140;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$state_machine__20791__auto__ = function(state_29103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20791__auto____1.call(this,state_29103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20791__auto____0;
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20791__auto____1;
return cljs$core$async$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___29128,out))
})();
var state__20813__auto__ = (function (){var statearr_29123 = f__20812__auto__.call(null);
(statearr_29123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___29128);

return statearr_29123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___29128,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29141 = [];
var len__17892__auto___29144 = arguments.length;
var i__17893__auto___29145 = (0);
while(true){
if((i__17893__auto___29145 < len__17892__auto___29144)){
args29141.push((arguments[i__17893__auto___29145]));

var G__29146 = (i__17893__auto___29145 + (1));
i__17893__auto___29145 = G__29146;
continue;
} else {
}
break;
}

var G__29143 = args29141.length;
switch (G__29143) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29141.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20811__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto__){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto__){
return (function (state_29313){
var state_val_29314 = (state_29313[(1)]);
if((state_val_29314 === (7))){
var inst_29309 = (state_29313[(2)]);
var state_29313__$1 = state_29313;
var statearr_29315_29356 = state_29313__$1;
(statearr_29315_29356[(2)] = inst_29309);

(statearr_29315_29356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (20))){
var inst_29279 = (state_29313[(7)]);
var inst_29290 = (state_29313[(2)]);
var inst_29291 = cljs.core.next.call(null,inst_29279);
var inst_29265 = inst_29291;
var inst_29266 = null;
var inst_29267 = (0);
var inst_29268 = (0);
var state_29313__$1 = (function (){var statearr_29316 = state_29313;
(statearr_29316[(8)] = inst_29267);

(statearr_29316[(9)] = inst_29265);

(statearr_29316[(10)] = inst_29290);

(statearr_29316[(11)] = inst_29266);

(statearr_29316[(12)] = inst_29268);

return statearr_29316;
})();
var statearr_29317_29357 = state_29313__$1;
(statearr_29317_29357[(2)] = null);

(statearr_29317_29357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (1))){
var state_29313__$1 = state_29313;
var statearr_29318_29358 = state_29313__$1;
(statearr_29318_29358[(2)] = null);

(statearr_29318_29358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (4))){
var inst_29254 = (state_29313[(13)]);
var inst_29254__$1 = (state_29313[(2)]);
var inst_29255 = (inst_29254__$1 == null);
var state_29313__$1 = (function (){var statearr_29319 = state_29313;
(statearr_29319[(13)] = inst_29254__$1);

return statearr_29319;
})();
if(cljs.core.truth_(inst_29255)){
var statearr_29320_29359 = state_29313__$1;
(statearr_29320_29359[(1)] = (5));

} else {
var statearr_29321_29360 = state_29313__$1;
(statearr_29321_29360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (15))){
var state_29313__$1 = state_29313;
var statearr_29325_29361 = state_29313__$1;
(statearr_29325_29361[(2)] = null);

(statearr_29325_29361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (21))){
var state_29313__$1 = state_29313;
var statearr_29326_29362 = state_29313__$1;
(statearr_29326_29362[(2)] = null);

(statearr_29326_29362[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (13))){
var inst_29267 = (state_29313[(8)]);
var inst_29265 = (state_29313[(9)]);
var inst_29266 = (state_29313[(11)]);
var inst_29268 = (state_29313[(12)]);
var inst_29275 = (state_29313[(2)]);
var inst_29276 = (inst_29268 + (1));
var tmp29322 = inst_29267;
var tmp29323 = inst_29265;
var tmp29324 = inst_29266;
var inst_29265__$1 = tmp29323;
var inst_29266__$1 = tmp29324;
var inst_29267__$1 = tmp29322;
var inst_29268__$1 = inst_29276;
var state_29313__$1 = (function (){var statearr_29327 = state_29313;
(statearr_29327[(8)] = inst_29267__$1);

(statearr_29327[(9)] = inst_29265__$1);

(statearr_29327[(14)] = inst_29275);

(statearr_29327[(11)] = inst_29266__$1);

(statearr_29327[(12)] = inst_29268__$1);

return statearr_29327;
})();
var statearr_29328_29363 = state_29313__$1;
(statearr_29328_29363[(2)] = null);

(statearr_29328_29363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (22))){
var state_29313__$1 = state_29313;
var statearr_29329_29364 = state_29313__$1;
(statearr_29329_29364[(2)] = null);

(statearr_29329_29364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (6))){
var inst_29254 = (state_29313[(13)]);
var inst_29263 = f.call(null,inst_29254);
var inst_29264 = cljs.core.seq.call(null,inst_29263);
var inst_29265 = inst_29264;
var inst_29266 = null;
var inst_29267 = (0);
var inst_29268 = (0);
var state_29313__$1 = (function (){var statearr_29330 = state_29313;
(statearr_29330[(8)] = inst_29267);

(statearr_29330[(9)] = inst_29265);

(statearr_29330[(11)] = inst_29266);

(statearr_29330[(12)] = inst_29268);

return statearr_29330;
})();
var statearr_29331_29365 = state_29313__$1;
(statearr_29331_29365[(2)] = null);

(statearr_29331_29365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (17))){
var inst_29279 = (state_29313[(7)]);
var inst_29283 = cljs.core.chunk_first.call(null,inst_29279);
var inst_29284 = cljs.core.chunk_rest.call(null,inst_29279);
var inst_29285 = cljs.core.count.call(null,inst_29283);
var inst_29265 = inst_29284;
var inst_29266 = inst_29283;
var inst_29267 = inst_29285;
var inst_29268 = (0);
var state_29313__$1 = (function (){var statearr_29332 = state_29313;
(statearr_29332[(8)] = inst_29267);

(statearr_29332[(9)] = inst_29265);

(statearr_29332[(11)] = inst_29266);

(statearr_29332[(12)] = inst_29268);

return statearr_29332;
})();
var statearr_29333_29366 = state_29313__$1;
(statearr_29333_29366[(2)] = null);

(statearr_29333_29366[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (3))){
var inst_29311 = (state_29313[(2)]);
var state_29313__$1 = state_29313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29313__$1,inst_29311);
} else {
if((state_val_29314 === (12))){
var inst_29299 = (state_29313[(2)]);
var state_29313__$1 = state_29313;
var statearr_29334_29367 = state_29313__$1;
(statearr_29334_29367[(2)] = inst_29299);

(statearr_29334_29367[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (2))){
var state_29313__$1 = state_29313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29313__$1,(4),in$);
} else {
if((state_val_29314 === (23))){
var inst_29307 = (state_29313[(2)]);
var state_29313__$1 = state_29313;
var statearr_29335_29368 = state_29313__$1;
(statearr_29335_29368[(2)] = inst_29307);

(statearr_29335_29368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (19))){
var inst_29294 = (state_29313[(2)]);
var state_29313__$1 = state_29313;
var statearr_29336_29369 = state_29313__$1;
(statearr_29336_29369[(2)] = inst_29294);

(statearr_29336_29369[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (11))){
var inst_29265 = (state_29313[(9)]);
var inst_29279 = (state_29313[(7)]);
var inst_29279__$1 = cljs.core.seq.call(null,inst_29265);
var state_29313__$1 = (function (){var statearr_29337 = state_29313;
(statearr_29337[(7)] = inst_29279__$1);

return statearr_29337;
})();
if(inst_29279__$1){
var statearr_29338_29370 = state_29313__$1;
(statearr_29338_29370[(1)] = (14));

} else {
var statearr_29339_29371 = state_29313__$1;
(statearr_29339_29371[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (9))){
var inst_29301 = (state_29313[(2)]);
var inst_29302 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29313__$1 = (function (){var statearr_29340 = state_29313;
(statearr_29340[(15)] = inst_29301);

return statearr_29340;
})();
if(cljs.core.truth_(inst_29302)){
var statearr_29341_29372 = state_29313__$1;
(statearr_29341_29372[(1)] = (21));

} else {
var statearr_29342_29373 = state_29313__$1;
(statearr_29342_29373[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (5))){
var inst_29257 = cljs.core.async.close_BANG_.call(null,out);
var state_29313__$1 = state_29313;
var statearr_29343_29374 = state_29313__$1;
(statearr_29343_29374[(2)] = inst_29257);

(statearr_29343_29374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (14))){
var inst_29279 = (state_29313[(7)]);
var inst_29281 = cljs.core.chunked_seq_QMARK_.call(null,inst_29279);
var state_29313__$1 = state_29313;
if(inst_29281){
var statearr_29344_29375 = state_29313__$1;
(statearr_29344_29375[(1)] = (17));

} else {
var statearr_29345_29376 = state_29313__$1;
(statearr_29345_29376[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (16))){
var inst_29297 = (state_29313[(2)]);
var state_29313__$1 = state_29313;
var statearr_29346_29377 = state_29313__$1;
(statearr_29346_29377[(2)] = inst_29297);

(statearr_29346_29377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29314 === (10))){
var inst_29266 = (state_29313[(11)]);
var inst_29268 = (state_29313[(12)]);
var inst_29273 = cljs.core._nth.call(null,inst_29266,inst_29268);
var state_29313__$1 = state_29313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29313__$1,(13),out,inst_29273);
} else {
if((state_val_29314 === (18))){
var inst_29279 = (state_29313[(7)]);
var inst_29288 = cljs.core.first.call(null,inst_29279);
var state_29313__$1 = state_29313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29313__$1,(20),out,inst_29288);
} else {
if((state_val_29314 === (8))){
var inst_29267 = (state_29313[(8)]);
var inst_29268 = (state_29313[(12)]);
var inst_29270 = (inst_29268 < inst_29267);
var inst_29271 = inst_29270;
var state_29313__$1 = state_29313;
if(cljs.core.truth_(inst_29271)){
var statearr_29347_29378 = state_29313__$1;
(statearr_29347_29378[(1)] = (10));

} else {
var statearr_29348_29379 = state_29313__$1;
(statearr_29348_29379[(1)] = (11));

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
}
}
}
}
}
}
});})(c__20811__auto__))
;
return ((function (switch__20790__auto__,c__20811__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20791__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20791__auto____0 = (function (){
var statearr_29352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29352[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20791__auto__);

(statearr_29352[(1)] = (1));

return statearr_29352;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20791__auto____1 = (function (state_29313){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_29313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e29353){if((e29353 instanceof Object)){
var ex__20794__auto__ = e29353;
var statearr_29354_29380 = state_29313;
(statearr_29354_29380[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29381 = state_29313;
state_29313 = G__29381;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20791__auto__ = function(state_29313){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20791__auto____1.call(this,state_29313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20791__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20791__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto__))
})();
var state__20813__auto__ = (function (){var statearr_29355 = f__20812__auto__.call(null);
(statearr_29355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto__);

return statearr_29355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto__))
);

return c__20811__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29382 = [];
var len__17892__auto___29385 = arguments.length;
var i__17893__auto___29386 = (0);
while(true){
if((i__17893__auto___29386 < len__17892__auto___29385)){
args29382.push((arguments[i__17893__auto___29386]));

var G__29387 = (i__17893__auto___29386 + (1));
i__17893__auto___29386 = G__29387;
continue;
} else {
}
break;
}

var G__29384 = args29382.length;
switch (G__29384) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29382.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29389 = [];
var len__17892__auto___29392 = arguments.length;
var i__17893__auto___29393 = (0);
while(true){
if((i__17893__auto___29393 < len__17892__auto___29392)){
args29389.push((arguments[i__17893__auto___29393]));

var G__29394 = (i__17893__auto___29393 + (1));
i__17893__auto___29393 = G__29394;
continue;
} else {
}
break;
}

var G__29391 = args29389.length;
switch (G__29391) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29389.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29396 = [];
var len__17892__auto___29447 = arguments.length;
var i__17893__auto___29448 = (0);
while(true){
if((i__17893__auto___29448 < len__17892__auto___29447)){
args29396.push((arguments[i__17893__auto___29448]));

var G__29449 = (i__17893__auto___29448 + (1));
i__17893__auto___29448 = G__29449;
continue;
} else {
}
break;
}

var G__29398 = args29396.length;
switch (G__29398) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29396.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20811__auto___29451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___29451,out){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___29451,out){
return (function (state_29422){
var state_val_29423 = (state_29422[(1)]);
if((state_val_29423 === (7))){
var inst_29417 = (state_29422[(2)]);
var state_29422__$1 = state_29422;
var statearr_29424_29452 = state_29422__$1;
(statearr_29424_29452[(2)] = inst_29417);

(statearr_29424_29452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (1))){
var inst_29399 = null;
var state_29422__$1 = (function (){var statearr_29425 = state_29422;
(statearr_29425[(7)] = inst_29399);

return statearr_29425;
})();
var statearr_29426_29453 = state_29422__$1;
(statearr_29426_29453[(2)] = null);

(statearr_29426_29453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (4))){
var inst_29402 = (state_29422[(8)]);
var inst_29402__$1 = (state_29422[(2)]);
var inst_29403 = (inst_29402__$1 == null);
var inst_29404 = cljs.core.not.call(null,inst_29403);
var state_29422__$1 = (function (){var statearr_29427 = state_29422;
(statearr_29427[(8)] = inst_29402__$1);

return statearr_29427;
})();
if(inst_29404){
var statearr_29428_29454 = state_29422__$1;
(statearr_29428_29454[(1)] = (5));

} else {
var statearr_29429_29455 = state_29422__$1;
(statearr_29429_29455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (6))){
var state_29422__$1 = state_29422;
var statearr_29430_29456 = state_29422__$1;
(statearr_29430_29456[(2)] = null);

(statearr_29430_29456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (3))){
var inst_29419 = (state_29422[(2)]);
var inst_29420 = cljs.core.async.close_BANG_.call(null,out);
var state_29422__$1 = (function (){var statearr_29431 = state_29422;
(statearr_29431[(9)] = inst_29419);

return statearr_29431;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29422__$1,inst_29420);
} else {
if((state_val_29423 === (2))){
var state_29422__$1 = state_29422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29422__$1,(4),ch);
} else {
if((state_val_29423 === (11))){
var inst_29402 = (state_29422[(8)]);
var inst_29411 = (state_29422[(2)]);
var inst_29399 = inst_29402;
var state_29422__$1 = (function (){var statearr_29432 = state_29422;
(statearr_29432[(10)] = inst_29411);

(statearr_29432[(7)] = inst_29399);

return statearr_29432;
})();
var statearr_29433_29457 = state_29422__$1;
(statearr_29433_29457[(2)] = null);

(statearr_29433_29457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (9))){
var inst_29402 = (state_29422[(8)]);
var state_29422__$1 = state_29422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29422__$1,(11),out,inst_29402);
} else {
if((state_val_29423 === (5))){
var inst_29399 = (state_29422[(7)]);
var inst_29402 = (state_29422[(8)]);
var inst_29406 = cljs.core._EQ_.call(null,inst_29402,inst_29399);
var state_29422__$1 = state_29422;
if(inst_29406){
var statearr_29435_29458 = state_29422__$1;
(statearr_29435_29458[(1)] = (8));

} else {
var statearr_29436_29459 = state_29422__$1;
(statearr_29436_29459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (10))){
var inst_29414 = (state_29422[(2)]);
var state_29422__$1 = state_29422;
var statearr_29437_29460 = state_29422__$1;
(statearr_29437_29460[(2)] = inst_29414);

(statearr_29437_29460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29423 === (8))){
var inst_29399 = (state_29422[(7)]);
var tmp29434 = inst_29399;
var inst_29399__$1 = tmp29434;
var state_29422__$1 = (function (){var statearr_29438 = state_29422;
(statearr_29438[(7)] = inst_29399__$1);

return statearr_29438;
})();
var statearr_29439_29461 = state_29422__$1;
(statearr_29439_29461[(2)] = null);

(statearr_29439_29461[(1)] = (2));


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
});})(c__20811__auto___29451,out))
;
return ((function (switch__20790__auto__,c__20811__auto___29451,out){
return (function() {
var cljs$core$async$state_machine__20791__auto__ = null;
var cljs$core$async$state_machine__20791__auto____0 = (function (){
var statearr_29443 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29443[(0)] = cljs$core$async$state_machine__20791__auto__);

(statearr_29443[(1)] = (1));

return statearr_29443;
});
var cljs$core$async$state_machine__20791__auto____1 = (function (state_29422){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_29422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e29444){if((e29444 instanceof Object)){
var ex__20794__auto__ = e29444;
var statearr_29445_29462 = state_29422;
(statearr_29445_29462[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29463 = state_29422;
state_29422 = G__29463;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$state_machine__20791__auto__ = function(state_29422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20791__auto____1.call(this,state_29422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20791__auto____0;
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20791__auto____1;
return cljs$core$async$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___29451,out))
})();
var state__20813__auto__ = (function (){var statearr_29446 = f__20812__auto__.call(null);
(statearr_29446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___29451);

return statearr_29446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___29451,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args29464 = [];
var len__17892__auto___29534 = arguments.length;
var i__17893__auto___29535 = (0);
while(true){
if((i__17893__auto___29535 < len__17892__auto___29534)){
args29464.push((arguments[i__17893__auto___29535]));

var G__29536 = (i__17893__auto___29535 + (1));
i__17893__auto___29535 = G__29536;
continue;
} else {
}
break;
}

var G__29466 = args29464.length;
switch (G__29466) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29464.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20811__auto___29538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___29538,out){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___29538,out){
return (function (state_29504){
var state_val_29505 = (state_29504[(1)]);
if((state_val_29505 === (7))){
var inst_29500 = (state_29504[(2)]);
var state_29504__$1 = state_29504;
var statearr_29506_29539 = state_29504__$1;
(statearr_29506_29539[(2)] = inst_29500);

(statearr_29506_29539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29505 === (1))){
var inst_29467 = (new Array(n));
var inst_29468 = inst_29467;
var inst_29469 = (0);
var state_29504__$1 = (function (){var statearr_29507 = state_29504;
(statearr_29507[(7)] = inst_29468);

(statearr_29507[(8)] = inst_29469);

return statearr_29507;
})();
var statearr_29508_29540 = state_29504__$1;
(statearr_29508_29540[(2)] = null);

(statearr_29508_29540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29505 === (4))){
var inst_29472 = (state_29504[(9)]);
var inst_29472__$1 = (state_29504[(2)]);
var inst_29473 = (inst_29472__$1 == null);
var inst_29474 = cljs.core.not.call(null,inst_29473);
var state_29504__$1 = (function (){var statearr_29509 = state_29504;
(statearr_29509[(9)] = inst_29472__$1);

return statearr_29509;
})();
if(inst_29474){
var statearr_29510_29541 = state_29504__$1;
(statearr_29510_29541[(1)] = (5));

} else {
var statearr_29511_29542 = state_29504__$1;
(statearr_29511_29542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29505 === (15))){
var inst_29494 = (state_29504[(2)]);
var state_29504__$1 = state_29504;
var statearr_29512_29543 = state_29504__$1;
(statearr_29512_29543[(2)] = inst_29494);

(statearr_29512_29543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29505 === (13))){
var state_29504__$1 = state_29504;
var statearr_29513_29544 = state_29504__$1;
(statearr_29513_29544[(2)] = null);

(statearr_29513_29544[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29505 === (6))){
var inst_29469 = (state_29504[(8)]);
var inst_29490 = (inst_29469 > (0));
var state_29504__$1 = state_29504;
if(cljs.core.truth_(inst_29490)){
var statearr_29514_29545 = state_29504__$1;
(statearr_29514_29545[(1)] = (12));

} else {
var statearr_29515_29546 = state_29504__$1;
(statearr_29515_29546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29505 === (3))){
var inst_29502 = (state_29504[(2)]);
var state_29504__$1 = state_29504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29504__$1,inst_29502);
} else {
if((state_val_29505 === (12))){
var inst_29468 = (state_29504[(7)]);
var inst_29492 = cljs.core.vec.call(null,inst_29468);
var state_29504__$1 = state_29504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29504__$1,(15),out,inst_29492);
} else {
if((state_val_29505 === (2))){
var state_29504__$1 = state_29504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29504__$1,(4),ch);
} else {
if((state_val_29505 === (11))){
var inst_29484 = (state_29504[(2)]);
var inst_29485 = (new Array(n));
var inst_29468 = inst_29485;
var inst_29469 = (0);
var state_29504__$1 = (function (){var statearr_29516 = state_29504;
(statearr_29516[(10)] = inst_29484);

(statearr_29516[(7)] = inst_29468);

(statearr_29516[(8)] = inst_29469);

return statearr_29516;
})();
var statearr_29517_29547 = state_29504__$1;
(statearr_29517_29547[(2)] = null);

(statearr_29517_29547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29505 === (9))){
var inst_29468 = (state_29504[(7)]);
var inst_29482 = cljs.core.vec.call(null,inst_29468);
var state_29504__$1 = state_29504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29504__$1,(11),out,inst_29482);
} else {
if((state_val_29505 === (5))){
var inst_29468 = (state_29504[(7)]);
var inst_29477 = (state_29504[(11)]);
var inst_29469 = (state_29504[(8)]);
var inst_29472 = (state_29504[(9)]);
var inst_29476 = (inst_29468[inst_29469] = inst_29472);
var inst_29477__$1 = (inst_29469 + (1));
var inst_29478 = (inst_29477__$1 < n);
var state_29504__$1 = (function (){var statearr_29518 = state_29504;
(statearr_29518[(11)] = inst_29477__$1);

(statearr_29518[(12)] = inst_29476);

return statearr_29518;
})();
if(cljs.core.truth_(inst_29478)){
var statearr_29519_29548 = state_29504__$1;
(statearr_29519_29548[(1)] = (8));

} else {
var statearr_29520_29549 = state_29504__$1;
(statearr_29520_29549[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29505 === (14))){
var inst_29497 = (state_29504[(2)]);
var inst_29498 = cljs.core.async.close_BANG_.call(null,out);
var state_29504__$1 = (function (){var statearr_29522 = state_29504;
(statearr_29522[(13)] = inst_29497);

return statearr_29522;
})();
var statearr_29523_29550 = state_29504__$1;
(statearr_29523_29550[(2)] = inst_29498);

(statearr_29523_29550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29505 === (10))){
var inst_29488 = (state_29504[(2)]);
var state_29504__$1 = state_29504;
var statearr_29524_29551 = state_29504__$1;
(statearr_29524_29551[(2)] = inst_29488);

(statearr_29524_29551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29505 === (8))){
var inst_29468 = (state_29504[(7)]);
var inst_29477 = (state_29504[(11)]);
var tmp29521 = inst_29468;
var inst_29468__$1 = tmp29521;
var inst_29469 = inst_29477;
var state_29504__$1 = (function (){var statearr_29525 = state_29504;
(statearr_29525[(7)] = inst_29468__$1);

(statearr_29525[(8)] = inst_29469);

return statearr_29525;
})();
var statearr_29526_29552 = state_29504__$1;
(statearr_29526_29552[(2)] = null);

(statearr_29526_29552[(1)] = (2));


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
});})(c__20811__auto___29538,out))
;
return ((function (switch__20790__auto__,c__20811__auto___29538,out){
return (function() {
var cljs$core$async$state_machine__20791__auto__ = null;
var cljs$core$async$state_machine__20791__auto____0 = (function (){
var statearr_29530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29530[(0)] = cljs$core$async$state_machine__20791__auto__);

(statearr_29530[(1)] = (1));

return statearr_29530;
});
var cljs$core$async$state_machine__20791__auto____1 = (function (state_29504){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_29504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e29531){if((e29531 instanceof Object)){
var ex__20794__auto__ = e29531;
var statearr_29532_29553 = state_29504;
(statearr_29532_29553[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29554 = state_29504;
state_29504 = G__29554;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$state_machine__20791__auto__ = function(state_29504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20791__auto____1.call(this,state_29504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20791__auto____0;
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20791__auto____1;
return cljs$core$async$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___29538,out))
})();
var state__20813__auto__ = (function (){var statearr_29533 = f__20812__auto__.call(null);
(statearr_29533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___29538);

return statearr_29533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___29538,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29555 = [];
var len__17892__auto___29629 = arguments.length;
var i__17893__auto___29630 = (0);
while(true){
if((i__17893__auto___29630 < len__17892__auto___29629)){
args29555.push((arguments[i__17893__auto___29630]));

var G__29631 = (i__17893__auto___29630 + (1));
i__17893__auto___29630 = G__29631;
continue;
} else {
}
break;
}

var G__29557 = args29555.length;
switch (G__29557) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29555.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20811__auto___29633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20811__auto___29633,out){
return (function (){
var f__20812__auto__ = (function (){var switch__20790__auto__ = ((function (c__20811__auto___29633,out){
return (function (state_29599){
var state_val_29600 = (state_29599[(1)]);
if((state_val_29600 === (7))){
var inst_29595 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29601_29634 = state_29599__$1;
(statearr_29601_29634[(2)] = inst_29595);

(statearr_29601_29634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (1))){
var inst_29558 = [];
var inst_29559 = inst_29558;
var inst_29560 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29599__$1 = (function (){var statearr_29602 = state_29599;
(statearr_29602[(7)] = inst_29560);

(statearr_29602[(8)] = inst_29559);

return statearr_29602;
})();
var statearr_29603_29635 = state_29599__$1;
(statearr_29603_29635[(2)] = null);

(statearr_29603_29635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (4))){
var inst_29563 = (state_29599[(9)]);
var inst_29563__$1 = (state_29599[(2)]);
var inst_29564 = (inst_29563__$1 == null);
var inst_29565 = cljs.core.not.call(null,inst_29564);
var state_29599__$1 = (function (){var statearr_29604 = state_29599;
(statearr_29604[(9)] = inst_29563__$1);

return statearr_29604;
})();
if(inst_29565){
var statearr_29605_29636 = state_29599__$1;
(statearr_29605_29636[(1)] = (5));

} else {
var statearr_29606_29637 = state_29599__$1;
(statearr_29606_29637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (15))){
var inst_29589 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29607_29638 = state_29599__$1;
(statearr_29607_29638[(2)] = inst_29589);

(statearr_29607_29638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (13))){
var state_29599__$1 = state_29599;
var statearr_29608_29639 = state_29599__$1;
(statearr_29608_29639[(2)] = null);

(statearr_29608_29639[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (6))){
var inst_29559 = (state_29599[(8)]);
var inst_29584 = inst_29559.length;
var inst_29585 = (inst_29584 > (0));
var state_29599__$1 = state_29599;
if(cljs.core.truth_(inst_29585)){
var statearr_29609_29640 = state_29599__$1;
(statearr_29609_29640[(1)] = (12));

} else {
var statearr_29610_29641 = state_29599__$1;
(statearr_29610_29641[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (3))){
var inst_29597 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29599__$1,inst_29597);
} else {
if((state_val_29600 === (12))){
var inst_29559 = (state_29599[(8)]);
var inst_29587 = cljs.core.vec.call(null,inst_29559);
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29599__$1,(15),out,inst_29587);
} else {
if((state_val_29600 === (2))){
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29599__$1,(4),ch);
} else {
if((state_val_29600 === (11))){
var inst_29567 = (state_29599[(10)]);
var inst_29563 = (state_29599[(9)]);
var inst_29577 = (state_29599[(2)]);
var inst_29578 = [];
var inst_29579 = inst_29578.push(inst_29563);
var inst_29559 = inst_29578;
var inst_29560 = inst_29567;
var state_29599__$1 = (function (){var statearr_29611 = state_29599;
(statearr_29611[(7)] = inst_29560);

(statearr_29611[(11)] = inst_29577);

(statearr_29611[(12)] = inst_29579);

(statearr_29611[(8)] = inst_29559);

return statearr_29611;
})();
var statearr_29612_29642 = state_29599__$1;
(statearr_29612_29642[(2)] = null);

(statearr_29612_29642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (9))){
var inst_29559 = (state_29599[(8)]);
var inst_29575 = cljs.core.vec.call(null,inst_29559);
var state_29599__$1 = state_29599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29599__$1,(11),out,inst_29575);
} else {
if((state_val_29600 === (5))){
var inst_29560 = (state_29599[(7)]);
var inst_29567 = (state_29599[(10)]);
var inst_29563 = (state_29599[(9)]);
var inst_29567__$1 = f.call(null,inst_29563);
var inst_29568 = cljs.core._EQ_.call(null,inst_29567__$1,inst_29560);
var inst_29569 = cljs.core.keyword_identical_QMARK_.call(null,inst_29560,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29570 = (inst_29568) || (inst_29569);
var state_29599__$1 = (function (){var statearr_29613 = state_29599;
(statearr_29613[(10)] = inst_29567__$1);

return statearr_29613;
})();
if(cljs.core.truth_(inst_29570)){
var statearr_29614_29643 = state_29599__$1;
(statearr_29614_29643[(1)] = (8));

} else {
var statearr_29615_29644 = state_29599__$1;
(statearr_29615_29644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (14))){
var inst_29592 = (state_29599[(2)]);
var inst_29593 = cljs.core.async.close_BANG_.call(null,out);
var state_29599__$1 = (function (){var statearr_29617 = state_29599;
(statearr_29617[(13)] = inst_29592);

return statearr_29617;
})();
var statearr_29618_29645 = state_29599__$1;
(statearr_29618_29645[(2)] = inst_29593);

(statearr_29618_29645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (10))){
var inst_29582 = (state_29599[(2)]);
var state_29599__$1 = state_29599;
var statearr_29619_29646 = state_29599__$1;
(statearr_29619_29646[(2)] = inst_29582);

(statearr_29619_29646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29600 === (8))){
var inst_29567 = (state_29599[(10)]);
var inst_29563 = (state_29599[(9)]);
var inst_29559 = (state_29599[(8)]);
var inst_29572 = inst_29559.push(inst_29563);
var tmp29616 = inst_29559;
var inst_29559__$1 = tmp29616;
var inst_29560 = inst_29567;
var state_29599__$1 = (function (){var statearr_29620 = state_29599;
(statearr_29620[(7)] = inst_29560);

(statearr_29620[(14)] = inst_29572);

(statearr_29620[(8)] = inst_29559__$1);

return statearr_29620;
})();
var statearr_29621_29647 = state_29599__$1;
(statearr_29621_29647[(2)] = null);

(statearr_29621_29647[(1)] = (2));


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
});})(c__20811__auto___29633,out))
;
return ((function (switch__20790__auto__,c__20811__auto___29633,out){
return (function() {
var cljs$core$async$state_machine__20791__auto__ = null;
var cljs$core$async$state_machine__20791__auto____0 = (function (){
var statearr_29625 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29625[(0)] = cljs$core$async$state_machine__20791__auto__);

(statearr_29625[(1)] = (1));

return statearr_29625;
});
var cljs$core$async$state_machine__20791__auto____1 = (function (state_29599){
while(true){
var ret_value__20792__auto__ = (function (){try{while(true){
var result__20793__auto__ = switch__20790__auto__.call(null,state_29599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20793__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20793__auto__;
}
break;
}
}catch (e29626){if((e29626 instanceof Object)){
var ex__20794__auto__ = e29626;
var statearr_29627_29648 = state_29599;
(statearr_29627_29648[(5)] = ex__20794__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29649 = state_29599;
state_29599 = G__29649;
continue;
} else {
return ret_value__20792__auto__;
}
break;
}
});
cljs$core$async$state_machine__20791__auto__ = function(state_29599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20791__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20791__auto____1.call(this,state_29599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20791__auto____0;
cljs$core$async$state_machine__20791__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20791__auto____1;
return cljs$core$async$state_machine__20791__auto__;
})()
;})(switch__20790__auto__,c__20811__auto___29633,out))
})();
var state__20813__auto__ = (function (){var statearr_29628 = f__20812__auto__.call(null);
(statearr_29628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20811__auto___29633);

return statearr_29628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20813__auto__);
});})(c__20811__auto___29633,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map