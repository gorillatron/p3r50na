// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t28007 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28007 = (function (fn_handler,f,meta28008){
this.fn_handler = fn_handler;
this.f = f;
this.meta28008 = meta28008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28009,meta28008__$1){
var self__ = this;
var _28009__$1 = this;
return (new cljs.core.async.t28007(self__.fn_handler,self__.f,meta28008__$1));
});

cljs.core.async.t28007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28009){
var self__ = this;
var _28009__$1 = this;
return self__.meta28008;
});

cljs.core.async.t28007.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28007.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t28007.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t28007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta28008","meta28008",-203838542,null)], null);
});

cljs.core.async.t28007.cljs$lang$type = true;

cljs.core.async.t28007.cljs$lang$ctorStr = "cljs.core.async/t28007";

cljs.core.async.t28007.cljs$lang$ctorPrWriter = (function (this__19119__auto__,writer__19120__auto__,opt__19121__auto__){
return cljs.core._write.call(null,writer__19120__auto__,"cljs.core.async/t28007");
});

cljs.core.async.__GT_t28007 = (function cljs$core$async$fn_handler_$___GT_t28007(fn_handler__$1,f__$1,meta28008){
return (new cljs.core.async.t28007(fn_handler__$1,f__$1,meta28008));
});

}

return (new cljs.core.async.t28007(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
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
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args28012 = [];
var len__19579__auto___28015 = arguments.length;
var i__19580__auto___28016 = (0);
while(true){
if((i__19580__auto___28016 < len__19579__auto___28015)){
args28012.push((arguments[i__19580__auto___28016]));

var G__28017 = (i__19580__auto___28016 + (1));
i__19580__auto___28016 = G__28017;
continue;
} else {
}
break;
}

var G__28014 = args28012.length;
switch (G__28014) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28012.length)].join('')));

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
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args28019 = [];
var len__19579__auto___28022 = arguments.length;
var i__19580__auto___28023 = (0);
while(true){
if((i__19580__auto___28023 < len__19579__auto___28022)){
args28019.push((arguments[i__19580__auto___28023]));

var G__28024 = (i__19580__auto___28023 + (1));
i__19580__auto___28023 = G__28024;
continue;
} else {
}
break;
}

var G__28021 = args28019.length;
switch (G__28021) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28019.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28026 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28026);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28026,ret){
return (function (){
return fn1.call(null,val_28026);
});})(val_28026,ret))
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
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args28027 = [];
var len__19579__auto___28030 = arguments.length;
var i__19580__auto___28031 = (0);
while(true){
if((i__19580__auto___28031 < len__19579__auto___28030)){
args28027.push((arguments[i__19580__auto___28031]));

var G__28032 = (i__19580__auto___28031 + (1));
i__19580__auto___28031 = G__28032;
continue;
} else {
}
break;
}

var G__28029 = args28027.length;
switch (G__28029) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28027.length)].join('')));

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
var n__19424__auto___28034 = n;
var x_28035 = (0);
while(true){
if((x_28035 < n__19424__auto___28034)){
(a[x_28035] = (0));

var G__28036 = (x_28035 + (1));
x_28035 = G__28036;
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

var G__28037 = (i + (1));
i = G__28037;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t28041 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28041 = (function (alt_flag,flag,meta28042){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28042 = meta28042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28043,meta28042__$1){
var self__ = this;
var _28043__$1 = this;
return (new cljs.core.async.t28041(self__.alt_flag,self__.flag,meta28042__$1));
});})(flag))
;

cljs.core.async.t28041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28043){
var self__ = this;
var _28043__$1 = this;
return self__.meta28042;
});})(flag))
;

cljs.core.async.t28041.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28041.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t28041.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t28041.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28042","meta28042",1619838771,null)], null);
});})(flag))
;

cljs.core.async.t28041.cljs$lang$type = true;

cljs.core.async.t28041.cljs$lang$ctorStr = "cljs.core.async/t28041";

cljs.core.async.t28041.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19119__auto__,writer__19120__auto__,opt__19121__auto__){
return cljs.core._write.call(null,writer__19120__auto__,"cljs.core.async/t28041");
});})(flag))
;

cljs.core.async.__GT_t28041 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t28041(alt_flag__$1,flag__$1,meta28042){
return (new cljs.core.async.t28041(alt_flag__$1,flag__$1,meta28042));
});})(flag))
;

}

return (new cljs.core.async.t28041(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t28047 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28047 = (function (alt_handler,flag,cb,meta28048){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28048 = meta28048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28049,meta28048__$1){
var self__ = this;
var _28049__$1 = this;
return (new cljs.core.async.t28047(self__.alt_handler,self__.flag,self__.cb,meta28048__$1));
});

cljs.core.async.t28047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28049){
var self__ = this;
var _28049__$1 = this;
return self__.meta28048;
});

cljs.core.async.t28047.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t28047.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t28047.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t28047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28048","meta28048",346832577,null)], null);
});

cljs.core.async.t28047.cljs$lang$type = true;

cljs.core.async.t28047.cljs$lang$ctorStr = "cljs.core.async/t28047";

cljs.core.async.t28047.cljs$lang$ctorPrWriter = (function (this__19119__auto__,writer__19120__auto__,opt__19121__auto__){
return cljs.core._write.call(null,writer__19120__auto__,"cljs.core.async/t28047");
});

cljs.core.async.__GT_t28047 = (function cljs$core$async$alt_handler_$___GT_t28047(alt_handler__$1,flag__$1,cb__$1,meta28048){
return (new cljs.core.async.t28047(alt_handler__$1,flag__$1,cb__$1,meta28048));
});

}

return (new cljs.core.async.t28047(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__28050_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28050_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28051_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28051_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18540__auto__ = wport;
if(cljs.core.truth_(or__18540__auto__)){
return or__18540__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28052 = (i + (1));
i = G__28052;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18540__auto__ = ret;
if(cljs.core.truth_(or__18540__auto__)){
return or__18540__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__18528__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18528__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18528__auto__;
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
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__19586__auto__ = [];
var len__19579__auto___28058 = arguments.length;
var i__19580__auto___28059 = (0);
while(true){
if((i__19580__auto___28059 < len__19579__auto___28058)){
args__19586__auto__.push((arguments[i__19580__auto___28059]));

var G__28060 = (i__19580__auto___28059 + (1));
i__19580__auto___28059 = G__28060;
continue;
} else {
}
break;
}

var argseq__19587__auto__ = ((((1) < args__19586__auto__.length))?(new cljs.core.IndexedSeq(args__19586__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19587__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28055){
var map__28056 = p__28055;
var map__28056__$1 = ((((!((map__28056 == null)))?((((map__28056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28056):map__28056);
var opts = map__28056__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28053){
var G__28054 = cljs.core.first.call(null,seq28053);
var seq28053__$1 = cljs.core.next.call(null,seq28053);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28054,seq28053__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args28061 = [];
var len__19579__auto___28111 = arguments.length;
var i__19580__auto___28112 = (0);
while(true){
if((i__19580__auto___28112 < len__19579__auto___28111)){
args28061.push((arguments[i__19580__auto___28112]));

var G__28113 = (i__19580__auto___28112 + (1));
i__19580__auto___28112 = G__28113;
continue;
} else {
}
break;
}

var G__28063 = args28061.length;
switch (G__28063) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28061.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21723__auto___28115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___28115){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___28115){
return (function (state_28087){
var state_val_28088 = (state_28087[(1)]);
if((state_val_28088 === (7))){
var inst_28083 = (state_28087[(2)]);
var state_28087__$1 = state_28087;
var statearr_28089_28116 = state_28087__$1;
(statearr_28089_28116[(2)] = inst_28083);

(statearr_28089_28116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (1))){
var state_28087__$1 = state_28087;
var statearr_28090_28117 = state_28087__$1;
(statearr_28090_28117[(2)] = null);

(statearr_28090_28117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (4))){
var inst_28066 = (state_28087[(7)]);
var inst_28066__$1 = (state_28087[(2)]);
var inst_28067 = (inst_28066__$1 == null);
var state_28087__$1 = (function (){var statearr_28091 = state_28087;
(statearr_28091[(7)] = inst_28066__$1);

return statearr_28091;
})();
if(cljs.core.truth_(inst_28067)){
var statearr_28092_28118 = state_28087__$1;
(statearr_28092_28118[(1)] = (5));

} else {
var statearr_28093_28119 = state_28087__$1;
(statearr_28093_28119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (13))){
var state_28087__$1 = state_28087;
var statearr_28094_28120 = state_28087__$1;
(statearr_28094_28120[(2)] = null);

(statearr_28094_28120[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (6))){
var inst_28066 = (state_28087[(7)]);
var state_28087__$1 = state_28087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28087__$1,(11),to,inst_28066);
} else {
if((state_val_28088 === (3))){
var inst_28085 = (state_28087[(2)]);
var state_28087__$1 = state_28087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28087__$1,inst_28085);
} else {
if((state_val_28088 === (12))){
var state_28087__$1 = state_28087;
var statearr_28095_28121 = state_28087__$1;
(statearr_28095_28121[(2)] = null);

(statearr_28095_28121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (2))){
var state_28087__$1 = state_28087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28087__$1,(4),from);
} else {
if((state_val_28088 === (11))){
var inst_28076 = (state_28087[(2)]);
var state_28087__$1 = state_28087;
if(cljs.core.truth_(inst_28076)){
var statearr_28096_28122 = state_28087__$1;
(statearr_28096_28122[(1)] = (12));

} else {
var statearr_28097_28123 = state_28087__$1;
(statearr_28097_28123[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (9))){
var state_28087__$1 = state_28087;
var statearr_28098_28124 = state_28087__$1;
(statearr_28098_28124[(2)] = null);

(statearr_28098_28124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (5))){
var state_28087__$1 = state_28087;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28099_28125 = state_28087__$1;
(statearr_28099_28125[(1)] = (8));

} else {
var statearr_28100_28126 = state_28087__$1;
(statearr_28100_28126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (14))){
var inst_28081 = (state_28087[(2)]);
var state_28087__$1 = state_28087;
var statearr_28101_28127 = state_28087__$1;
(statearr_28101_28127[(2)] = inst_28081);

(statearr_28101_28127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (10))){
var inst_28073 = (state_28087[(2)]);
var state_28087__$1 = state_28087;
var statearr_28102_28128 = state_28087__$1;
(statearr_28102_28128[(2)] = inst_28073);

(statearr_28102_28128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (8))){
var inst_28070 = cljs.core.async.close_BANG_.call(null,to);
var state_28087__$1 = state_28087;
var statearr_28103_28129 = state_28087__$1;
(statearr_28103_28129[(2)] = inst_28070);

(statearr_28103_28129[(1)] = (10));


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
});})(c__21723__auto___28115))
;
return ((function (switch__21658__auto__,c__21723__auto___28115){
return (function() {
var cljs$core$async$state_machine__21659__auto__ = null;
var cljs$core$async$state_machine__21659__auto____0 = (function (){
var statearr_28107 = [null,null,null,null,null,null,null,null];
(statearr_28107[(0)] = cljs$core$async$state_machine__21659__auto__);

(statearr_28107[(1)] = (1));

return statearr_28107;
});
var cljs$core$async$state_machine__21659__auto____1 = (function (state_28087){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_28087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e28108){if((e28108 instanceof Object)){
var ex__21662__auto__ = e28108;
var statearr_28109_28130 = state_28087;
(statearr_28109_28130[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28131 = state_28087;
state_28087 = G__28131;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$state_machine__21659__auto__ = function(state_28087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21659__auto____1.call(this,state_28087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21659__auto____0;
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21659__auto____1;
return cljs$core$async$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___28115))
})();
var state__21725__auto__ = (function (){var statearr_28110 = f__21724__auto__.call(null);
(statearr_28110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___28115);

return statearr_28110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___28115))
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
return (function (p__28315){
var vec__28316 = p__28315;
var v = cljs.core.nth.call(null,vec__28316,(0),null);
var p = cljs.core.nth.call(null,vec__28316,(1),null);
var job = vec__28316;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21723__auto___28498 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___28498,res,vec__28316,v,p,job,jobs,results){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___28498,res,vec__28316,v,p,job,jobs,results){
return (function (state_28321){
var state_val_28322 = (state_28321[(1)]);
if((state_val_28322 === (1))){
var state_28321__$1 = state_28321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28321__$1,(2),res,v);
} else {
if((state_val_28322 === (2))){
var inst_28318 = (state_28321[(2)]);
var inst_28319 = cljs.core.async.close_BANG_.call(null,res);
var state_28321__$1 = (function (){var statearr_28323 = state_28321;
(statearr_28323[(7)] = inst_28318);

return statearr_28323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28321__$1,inst_28319);
} else {
return null;
}
}
});})(c__21723__auto___28498,res,vec__28316,v,p,job,jobs,results))
;
return ((function (switch__21658__auto__,c__21723__auto___28498,res,vec__28316,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0 = (function (){
var statearr_28327 = [null,null,null,null,null,null,null,null];
(statearr_28327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__);

(statearr_28327[(1)] = (1));

return statearr_28327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1 = (function (state_28321){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_28321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e28328){if((e28328 instanceof Object)){
var ex__21662__auto__ = e28328;
var statearr_28329_28499 = state_28321;
(statearr_28329_28499[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28500 = state_28321;
state_28321 = G__28500;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__ = function(state_28321){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1.call(this,state_28321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___28498,res,vec__28316,v,p,job,jobs,results))
})();
var state__21725__auto__ = (function (){var statearr_28330 = f__21724__auto__.call(null);
(statearr_28330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___28498);

return statearr_28330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___28498,res,vec__28316,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28331){
var vec__28332 = p__28331;
var v = cljs.core.nth.call(null,vec__28332,(0),null);
var p = cljs.core.nth.call(null,vec__28332,(1),null);
var job = vec__28332;
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
var n__19424__auto___28501 = n;
var __28502 = (0);
while(true){
if((__28502 < n__19424__auto___28501)){
var G__28333_28503 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28333_28503) {
case "compute":
var c__21723__auto___28505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28502,c__21723__auto___28505,G__28333_28503,n__19424__auto___28501,jobs,results,process,async){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (__28502,c__21723__auto___28505,G__28333_28503,n__19424__auto___28501,jobs,results,process,async){
return (function (state_28346){
var state_val_28347 = (state_28346[(1)]);
if((state_val_28347 === (1))){
var state_28346__$1 = state_28346;
var statearr_28348_28506 = state_28346__$1;
(statearr_28348_28506[(2)] = null);

(statearr_28348_28506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (2))){
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28346__$1,(4),jobs);
} else {
if((state_val_28347 === (3))){
var inst_28344 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28346__$1,inst_28344);
} else {
if((state_val_28347 === (4))){
var inst_28336 = (state_28346[(2)]);
var inst_28337 = process.call(null,inst_28336);
var state_28346__$1 = state_28346;
if(cljs.core.truth_(inst_28337)){
var statearr_28349_28507 = state_28346__$1;
(statearr_28349_28507[(1)] = (5));

} else {
var statearr_28350_28508 = state_28346__$1;
(statearr_28350_28508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (5))){
var state_28346__$1 = state_28346;
var statearr_28351_28509 = state_28346__$1;
(statearr_28351_28509[(2)] = null);

(statearr_28351_28509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (6))){
var state_28346__$1 = state_28346;
var statearr_28352_28510 = state_28346__$1;
(statearr_28352_28510[(2)] = null);

(statearr_28352_28510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28347 === (7))){
var inst_28342 = (state_28346[(2)]);
var state_28346__$1 = state_28346;
var statearr_28353_28511 = state_28346__$1;
(statearr_28353_28511[(2)] = inst_28342);

(statearr_28353_28511[(1)] = (3));


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
});})(__28502,c__21723__auto___28505,G__28333_28503,n__19424__auto___28501,jobs,results,process,async))
;
return ((function (__28502,switch__21658__auto__,c__21723__auto___28505,G__28333_28503,n__19424__auto___28501,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0 = (function (){
var statearr_28357 = [null,null,null,null,null,null,null];
(statearr_28357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__);

(statearr_28357[(1)] = (1));

return statearr_28357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1 = (function (state_28346){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_28346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e28358){if((e28358 instanceof Object)){
var ex__21662__auto__ = e28358;
var statearr_28359_28512 = state_28346;
(statearr_28359_28512[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28513 = state_28346;
state_28346 = G__28513;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__ = function(state_28346){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1.call(this,state_28346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__;
})()
;})(__28502,switch__21658__auto__,c__21723__auto___28505,G__28333_28503,n__19424__auto___28501,jobs,results,process,async))
})();
var state__21725__auto__ = (function (){var statearr_28360 = f__21724__auto__.call(null);
(statearr_28360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___28505);

return statearr_28360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(__28502,c__21723__auto___28505,G__28333_28503,n__19424__auto___28501,jobs,results,process,async))
);


break;
case "async":
var c__21723__auto___28514 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28502,c__21723__auto___28514,G__28333_28503,n__19424__auto___28501,jobs,results,process,async){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (__28502,c__21723__auto___28514,G__28333_28503,n__19424__auto___28501,jobs,results,process,async){
return (function (state_28373){
var state_val_28374 = (state_28373[(1)]);
if((state_val_28374 === (1))){
var state_28373__$1 = state_28373;
var statearr_28375_28515 = state_28373__$1;
(statearr_28375_28515[(2)] = null);

(statearr_28375_28515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28374 === (2))){
var state_28373__$1 = state_28373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28373__$1,(4),jobs);
} else {
if((state_val_28374 === (3))){
var inst_28371 = (state_28373[(2)]);
var state_28373__$1 = state_28373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28373__$1,inst_28371);
} else {
if((state_val_28374 === (4))){
var inst_28363 = (state_28373[(2)]);
var inst_28364 = async.call(null,inst_28363);
var state_28373__$1 = state_28373;
if(cljs.core.truth_(inst_28364)){
var statearr_28376_28516 = state_28373__$1;
(statearr_28376_28516[(1)] = (5));

} else {
var statearr_28377_28517 = state_28373__$1;
(statearr_28377_28517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28374 === (5))){
var state_28373__$1 = state_28373;
var statearr_28378_28518 = state_28373__$1;
(statearr_28378_28518[(2)] = null);

(statearr_28378_28518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28374 === (6))){
var state_28373__$1 = state_28373;
var statearr_28379_28519 = state_28373__$1;
(statearr_28379_28519[(2)] = null);

(statearr_28379_28519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28374 === (7))){
var inst_28369 = (state_28373[(2)]);
var state_28373__$1 = state_28373;
var statearr_28380_28520 = state_28373__$1;
(statearr_28380_28520[(2)] = inst_28369);

(statearr_28380_28520[(1)] = (3));


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
});})(__28502,c__21723__auto___28514,G__28333_28503,n__19424__auto___28501,jobs,results,process,async))
;
return ((function (__28502,switch__21658__auto__,c__21723__auto___28514,G__28333_28503,n__19424__auto___28501,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0 = (function (){
var statearr_28384 = [null,null,null,null,null,null,null];
(statearr_28384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__);

(statearr_28384[(1)] = (1));

return statearr_28384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1 = (function (state_28373){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_28373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e28385){if((e28385 instanceof Object)){
var ex__21662__auto__ = e28385;
var statearr_28386_28521 = state_28373;
(statearr_28386_28521[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28522 = state_28373;
state_28373 = G__28522;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__ = function(state_28373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1.call(this,state_28373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__;
})()
;})(__28502,switch__21658__auto__,c__21723__auto___28514,G__28333_28503,n__19424__auto___28501,jobs,results,process,async))
})();
var state__21725__auto__ = (function (){var statearr_28387 = f__21724__auto__.call(null);
(statearr_28387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___28514);

return statearr_28387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(__28502,c__21723__auto___28514,G__28333_28503,n__19424__auto___28501,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28523 = (__28502 + (1));
__28502 = G__28523;
continue;
} else {
}
break;
}

var c__21723__auto___28524 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___28524,jobs,results,process,async){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___28524,jobs,results,process,async){
return (function (state_28409){
var state_val_28410 = (state_28409[(1)]);
if((state_val_28410 === (1))){
var state_28409__$1 = state_28409;
var statearr_28411_28525 = state_28409__$1;
(statearr_28411_28525[(2)] = null);

(statearr_28411_28525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (2))){
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28409__$1,(4),from);
} else {
if((state_val_28410 === (3))){
var inst_28407 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28409__$1,inst_28407);
} else {
if((state_val_28410 === (4))){
var inst_28390 = (state_28409[(7)]);
var inst_28390__$1 = (state_28409[(2)]);
var inst_28391 = (inst_28390__$1 == null);
var state_28409__$1 = (function (){var statearr_28412 = state_28409;
(statearr_28412[(7)] = inst_28390__$1);

return statearr_28412;
})();
if(cljs.core.truth_(inst_28391)){
var statearr_28413_28526 = state_28409__$1;
(statearr_28413_28526[(1)] = (5));

} else {
var statearr_28414_28527 = state_28409__$1;
(statearr_28414_28527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (5))){
var inst_28393 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28409__$1 = state_28409;
var statearr_28415_28528 = state_28409__$1;
(statearr_28415_28528[(2)] = inst_28393);

(statearr_28415_28528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (6))){
var inst_28395 = (state_28409[(8)]);
var inst_28390 = (state_28409[(7)]);
var inst_28395__$1 = cljs.core.async.chan.call(null,(1));
var inst_28396 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28397 = [inst_28390,inst_28395__$1];
var inst_28398 = (new cljs.core.PersistentVector(null,2,(5),inst_28396,inst_28397,null));
var state_28409__$1 = (function (){var statearr_28416 = state_28409;
(statearr_28416[(8)] = inst_28395__$1);

return statearr_28416;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28409__$1,(8),jobs,inst_28398);
} else {
if((state_val_28410 === (7))){
var inst_28405 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28417_28529 = state_28409__$1;
(statearr_28417_28529[(2)] = inst_28405);

(statearr_28417_28529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (8))){
var inst_28395 = (state_28409[(8)]);
var inst_28400 = (state_28409[(2)]);
var state_28409__$1 = (function (){var statearr_28418 = state_28409;
(statearr_28418[(9)] = inst_28400);

return statearr_28418;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28409__$1,(9),results,inst_28395);
} else {
if((state_val_28410 === (9))){
var inst_28402 = (state_28409[(2)]);
var state_28409__$1 = (function (){var statearr_28419 = state_28409;
(statearr_28419[(10)] = inst_28402);

return statearr_28419;
})();
var statearr_28420_28530 = state_28409__$1;
(statearr_28420_28530[(2)] = null);

(statearr_28420_28530[(1)] = (2));


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
});})(c__21723__auto___28524,jobs,results,process,async))
;
return ((function (switch__21658__auto__,c__21723__auto___28524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0 = (function (){
var statearr_28424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__);

(statearr_28424[(1)] = (1));

return statearr_28424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1 = (function (state_28409){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_28409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e28425){if((e28425 instanceof Object)){
var ex__21662__auto__ = e28425;
var statearr_28426_28531 = state_28409;
(statearr_28426_28531[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28532 = state_28409;
state_28409 = G__28532;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__ = function(state_28409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1.call(this,state_28409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___28524,jobs,results,process,async))
})();
var state__21725__auto__ = (function (){var statearr_28427 = f__21724__auto__.call(null);
(statearr_28427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___28524);

return statearr_28427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___28524,jobs,results,process,async))
);


var c__21723__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto__,jobs,results,process,async){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto__,jobs,results,process,async){
return (function (state_28465){
var state_val_28466 = (state_28465[(1)]);
if((state_val_28466 === (7))){
var inst_28461 = (state_28465[(2)]);
var state_28465__$1 = state_28465;
var statearr_28467_28533 = state_28465__$1;
(statearr_28467_28533[(2)] = inst_28461);

(statearr_28467_28533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (20))){
var state_28465__$1 = state_28465;
var statearr_28468_28534 = state_28465__$1;
(statearr_28468_28534[(2)] = null);

(statearr_28468_28534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (1))){
var state_28465__$1 = state_28465;
var statearr_28469_28535 = state_28465__$1;
(statearr_28469_28535[(2)] = null);

(statearr_28469_28535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (4))){
var inst_28430 = (state_28465[(7)]);
var inst_28430__$1 = (state_28465[(2)]);
var inst_28431 = (inst_28430__$1 == null);
var state_28465__$1 = (function (){var statearr_28470 = state_28465;
(statearr_28470[(7)] = inst_28430__$1);

return statearr_28470;
})();
if(cljs.core.truth_(inst_28431)){
var statearr_28471_28536 = state_28465__$1;
(statearr_28471_28536[(1)] = (5));

} else {
var statearr_28472_28537 = state_28465__$1;
(statearr_28472_28537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (15))){
var inst_28443 = (state_28465[(8)]);
var state_28465__$1 = state_28465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28465__$1,(18),to,inst_28443);
} else {
if((state_val_28466 === (21))){
var inst_28456 = (state_28465[(2)]);
var state_28465__$1 = state_28465;
var statearr_28473_28538 = state_28465__$1;
(statearr_28473_28538[(2)] = inst_28456);

(statearr_28473_28538[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (13))){
var inst_28458 = (state_28465[(2)]);
var state_28465__$1 = (function (){var statearr_28474 = state_28465;
(statearr_28474[(9)] = inst_28458);

return statearr_28474;
})();
var statearr_28475_28539 = state_28465__$1;
(statearr_28475_28539[(2)] = null);

(statearr_28475_28539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (6))){
var inst_28430 = (state_28465[(7)]);
var state_28465__$1 = state_28465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28465__$1,(11),inst_28430);
} else {
if((state_val_28466 === (17))){
var inst_28451 = (state_28465[(2)]);
var state_28465__$1 = state_28465;
if(cljs.core.truth_(inst_28451)){
var statearr_28476_28540 = state_28465__$1;
(statearr_28476_28540[(1)] = (19));

} else {
var statearr_28477_28541 = state_28465__$1;
(statearr_28477_28541[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (3))){
var inst_28463 = (state_28465[(2)]);
var state_28465__$1 = state_28465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28465__$1,inst_28463);
} else {
if((state_val_28466 === (12))){
var inst_28440 = (state_28465[(10)]);
var state_28465__$1 = state_28465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28465__$1,(14),inst_28440);
} else {
if((state_val_28466 === (2))){
var state_28465__$1 = state_28465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28465__$1,(4),results);
} else {
if((state_val_28466 === (19))){
var state_28465__$1 = state_28465;
var statearr_28478_28542 = state_28465__$1;
(statearr_28478_28542[(2)] = null);

(statearr_28478_28542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (11))){
var inst_28440 = (state_28465[(2)]);
var state_28465__$1 = (function (){var statearr_28479 = state_28465;
(statearr_28479[(10)] = inst_28440);

return statearr_28479;
})();
var statearr_28480_28543 = state_28465__$1;
(statearr_28480_28543[(2)] = null);

(statearr_28480_28543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (9))){
var state_28465__$1 = state_28465;
var statearr_28481_28544 = state_28465__$1;
(statearr_28481_28544[(2)] = null);

(statearr_28481_28544[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (5))){
var state_28465__$1 = state_28465;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28482_28545 = state_28465__$1;
(statearr_28482_28545[(1)] = (8));

} else {
var statearr_28483_28546 = state_28465__$1;
(statearr_28483_28546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (14))){
var inst_28443 = (state_28465[(8)]);
var inst_28445 = (state_28465[(11)]);
var inst_28443__$1 = (state_28465[(2)]);
var inst_28444 = (inst_28443__$1 == null);
var inst_28445__$1 = cljs.core.not.call(null,inst_28444);
var state_28465__$1 = (function (){var statearr_28484 = state_28465;
(statearr_28484[(8)] = inst_28443__$1);

(statearr_28484[(11)] = inst_28445__$1);

return statearr_28484;
})();
if(inst_28445__$1){
var statearr_28485_28547 = state_28465__$1;
(statearr_28485_28547[(1)] = (15));

} else {
var statearr_28486_28548 = state_28465__$1;
(statearr_28486_28548[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (16))){
var inst_28445 = (state_28465[(11)]);
var state_28465__$1 = state_28465;
var statearr_28487_28549 = state_28465__$1;
(statearr_28487_28549[(2)] = inst_28445);

(statearr_28487_28549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (10))){
var inst_28437 = (state_28465[(2)]);
var state_28465__$1 = state_28465;
var statearr_28488_28550 = state_28465__$1;
(statearr_28488_28550[(2)] = inst_28437);

(statearr_28488_28550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (18))){
var inst_28448 = (state_28465[(2)]);
var state_28465__$1 = state_28465;
var statearr_28489_28551 = state_28465__$1;
(statearr_28489_28551[(2)] = inst_28448);

(statearr_28489_28551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28466 === (8))){
var inst_28434 = cljs.core.async.close_BANG_.call(null,to);
var state_28465__$1 = state_28465;
var statearr_28490_28552 = state_28465__$1;
(statearr_28490_28552[(2)] = inst_28434);

(statearr_28490_28552[(1)] = (10));


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
});})(c__21723__auto__,jobs,results,process,async))
;
return ((function (switch__21658__auto__,c__21723__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0 = (function (){
var statearr_28494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28494[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__);

(statearr_28494[(1)] = (1));

return statearr_28494;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1 = (function (state_28465){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_28465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e28495){if((e28495 instanceof Object)){
var ex__21662__auto__ = e28495;
var statearr_28496_28553 = state_28465;
(statearr_28496_28553[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28554 = state_28465;
state_28465 = G__28554;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__ = function(state_28465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1.call(this,state_28465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21659__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto__,jobs,results,process,async))
})();
var state__21725__auto__ = (function (){var statearr_28497 = f__21724__auto__.call(null);
(statearr_28497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto__);

return statearr_28497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto__,jobs,results,process,async))
);

return c__21723__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args28555 = [];
var len__19579__auto___28558 = arguments.length;
var i__19580__auto___28559 = (0);
while(true){
if((i__19580__auto___28559 < len__19579__auto___28558)){
args28555.push((arguments[i__19580__auto___28559]));

var G__28560 = (i__19580__auto___28559 + (1));
i__19580__auto___28559 = G__28560;
continue;
} else {
}
break;
}

var G__28557 = args28555.length;
switch (G__28557) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28555.length)].join('')));

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
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args28562 = [];
var len__19579__auto___28565 = arguments.length;
var i__19580__auto___28566 = (0);
while(true){
if((i__19580__auto___28566 < len__19579__auto___28565)){
args28562.push((arguments[i__19580__auto___28566]));

var G__28567 = (i__19580__auto___28566 + (1));
i__19580__auto___28566 = G__28567;
continue;
} else {
}
break;
}

var G__28564 = args28562.length;
switch (G__28564) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28562.length)].join('')));

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
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args28569 = [];
var len__19579__auto___28622 = arguments.length;
var i__19580__auto___28623 = (0);
while(true){
if((i__19580__auto___28623 < len__19579__auto___28622)){
args28569.push((arguments[i__19580__auto___28623]));

var G__28624 = (i__19580__auto___28623 + (1));
i__19580__auto___28623 = G__28624;
continue;
} else {
}
break;
}

var G__28571 = args28569.length;
switch (G__28571) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28569.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21723__auto___28626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___28626,tc,fc){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___28626,tc,fc){
return (function (state_28597){
var state_val_28598 = (state_28597[(1)]);
if((state_val_28598 === (7))){
var inst_28593 = (state_28597[(2)]);
var state_28597__$1 = state_28597;
var statearr_28599_28627 = state_28597__$1;
(statearr_28599_28627[(2)] = inst_28593);

(statearr_28599_28627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (1))){
var state_28597__$1 = state_28597;
var statearr_28600_28628 = state_28597__$1;
(statearr_28600_28628[(2)] = null);

(statearr_28600_28628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (4))){
var inst_28574 = (state_28597[(7)]);
var inst_28574__$1 = (state_28597[(2)]);
var inst_28575 = (inst_28574__$1 == null);
var state_28597__$1 = (function (){var statearr_28601 = state_28597;
(statearr_28601[(7)] = inst_28574__$1);

return statearr_28601;
})();
if(cljs.core.truth_(inst_28575)){
var statearr_28602_28629 = state_28597__$1;
(statearr_28602_28629[(1)] = (5));

} else {
var statearr_28603_28630 = state_28597__$1;
(statearr_28603_28630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (13))){
var state_28597__$1 = state_28597;
var statearr_28604_28631 = state_28597__$1;
(statearr_28604_28631[(2)] = null);

(statearr_28604_28631[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (6))){
var inst_28574 = (state_28597[(7)]);
var inst_28580 = p.call(null,inst_28574);
var state_28597__$1 = state_28597;
if(cljs.core.truth_(inst_28580)){
var statearr_28605_28632 = state_28597__$1;
(statearr_28605_28632[(1)] = (9));

} else {
var statearr_28606_28633 = state_28597__$1;
(statearr_28606_28633[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (3))){
var inst_28595 = (state_28597[(2)]);
var state_28597__$1 = state_28597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28597__$1,inst_28595);
} else {
if((state_val_28598 === (12))){
var state_28597__$1 = state_28597;
var statearr_28607_28634 = state_28597__$1;
(statearr_28607_28634[(2)] = null);

(statearr_28607_28634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (2))){
var state_28597__$1 = state_28597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28597__$1,(4),ch);
} else {
if((state_val_28598 === (11))){
var inst_28574 = (state_28597[(7)]);
var inst_28584 = (state_28597[(2)]);
var state_28597__$1 = state_28597;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28597__$1,(8),inst_28584,inst_28574);
} else {
if((state_val_28598 === (9))){
var state_28597__$1 = state_28597;
var statearr_28608_28635 = state_28597__$1;
(statearr_28608_28635[(2)] = tc);

(statearr_28608_28635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (5))){
var inst_28577 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28578 = cljs.core.async.close_BANG_.call(null,fc);
var state_28597__$1 = (function (){var statearr_28609 = state_28597;
(statearr_28609[(8)] = inst_28577);

return statearr_28609;
})();
var statearr_28610_28636 = state_28597__$1;
(statearr_28610_28636[(2)] = inst_28578);

(statearr_28610_28636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (14))){
var inst_28591 = (state_28597[(2)]);
var state_28597__$1 = state_28597;
var statearr_28611_28637 = state_28597__$1;
(statearr_28611_28637[(2)] = inst_28591);

(statearr_28611_28637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (10))){
var state_28597__$1 = state_28597;
var statearr_28612_28638 = state_28597__$1;
(statearr_28612_28638[(2)] = fc);

(statearr_28612_28638[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28598 === (8))){
var inst_28586 = (state_28597[(2)]);
var state_28597__$1 = state_28597;
if(cljs.core.truth_(inst_28586)){
var statearr_28613_28639 = state_28597__$1;
(statearr_28613_28639[(1)] = (12));

} else {
var statearr_28614_28640 = state_28597__$1;
(statearr_28614_28640[(1)] = (13));

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
});})(c__21723__auto___28626,tc,fc))
;
return ((function (switch__21658__auto__,c__21723__auto___28626,tc,fc){
return (function() {
var cljs$core$async$state_machine__21659__auto__ = null;
var cljs$core$async$state_machine__21659__auto____0 = (function (){
var statearr_28618 = [null,null,null,null,null,null,null,null,null];
(statearr_28618[(0)] = cljs$core$async$state_machine__21659__auto__);

(statearr_28618[(1)] = (1));

return statearr_28618;
});
var cljs$core$async$state_machine__21659__auto____1 = (function (state_28597){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_28597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e28619){if((e28619 instanceof Object)){
var ex__21662__auto__ = e28619;
var statearr_28620_28641 = state_28597;
(statearr_28620_28641[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28642 = state_28597;
state_28597 = G__28642;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$state_machine__21659__auto__ = function(state_28597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21659__auto____1.call(this,state_28597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21659__auto____0;
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21659__auto____1;
return cljs$core$async$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___28626,tc,fc))
})();
var state__21725__auto__ = (function (){var statearr_28621 = f__21724__auto__.call(null);
(statearr_28621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___28626);

return statearr_28621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___28626,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21723__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto__){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto__){
return (function (state_28689){
var state_val_28690 = (state_28689[(1)]);
if((state_val_28690 === (1))){
var inst_28675 = init;
var state_28689__$1 = (function (){var statearr_28691 = state_28689;
(statearr_28691[(7)] = inst_28675);

return statearr_28691;
})();
var statearr_28692_28707 = state_28689__$1;
(statearr_28692_28707[(2)] = null);

(statearr_28692_28707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (2))){
var state_28689__$1 = state_28689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28689__$1,(4),ch);
} else {
if((state_val_28690 === (3))){
var inst_28687 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28689__$1,inst_28687);
} else {
if((state_val_28690 === (4))){
var inst_28678 = (state_28689[(8)]);
var inst_28678__$1 = (state_28689[(2)]);
var inst_28679 = (inst_28678__$1 == null);
var state_28689__$1 = (function (){var statearr_28693 = state_28689;
(statearr_28693[(8)] = inst_28678__$1);

return statearr_28693;
})();
if(cljs.core.truth_(inst_28679)){
var statearr_28694_28708 = state_28689__$1;
(statearr_28694_28708[(1)] = (5));

} else {
var statearr_28695_28709 = state_28689__$1;
(statearr_28695_28709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (5))){
var inst_28675 = (state_28689[(7)]);
var state_28689__$1 = state_28689;
var statearr_28696_28710 = state_28689__$1;
(statearr_28696_28710[(2)] = inst_28675);

(statearr_28696_28710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (6))){
var inst_28675 = (state_28689[(7)]);
var inst_28678 = (state_28689[(8)]);
var inst_28682 = f.call(null,inst_28675,inst_28678);
var inst_28675__$1 = inst_28682;
var state_28689__$1 = (function (){var statearr_28697 = state_28689;
(statearr_28697[(7)] = inst_28675__$1);

return statearr_28697;
})();
var statearr_28698_28711 = state_28689__$1;
(statearr_28698_28711[(2)] = null);

(statearr_28698_28711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28690 === (7))){
var inst_28685 = (state_28689[(2)]);
var state_28689__$1 = state_28689;
var statearr_28699_28712 = state_28689__$1;
(statearr_28699_28712[(2)] = inst_28685);

(statearr_28699_28712[(1)] = (3));


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
});})(c__21723__auto__))
;
return ((function (switch__21658__auto__,c__21723__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21659__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21659__auto____0 = (function (){
var statearr_28703 = [null,null,null,null,null,null,null,null,null];
(statearr_28703[(0)] = cljs$core$async$reduce_$_state_machine__21659__auto__);

(statearr_28703[(1)] = (1));

return statearr_28703;
});
var cljs$core$async$reduce_$_state_machine__21659__auto____1 = (function (state_28689){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_28689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e28704){if((e28704 instanceof Object)){
var ex__21662__auto__ = e28704;
var statearr_28705_28713 = state_28689;
(statearr_28705_28713[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28714 = state_28689;
state_28689 = G__28714;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21659__auto__ = function(state_28689){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21659__auto____1.call(this,state_28689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21659__auto____0;
cljs$core$async$reduce_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21659__auto____1;
return cljs$core$async$reduce_$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto__))
})();
var state__21725__auto__ = (function (){var statearr_28706 = f__21724__auto__.call(null);
(statearr_28706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto__);

return statearr_28706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto__))
);

return c__21723__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args28715 = [];
var len__19579__auto___28767 = arguments.length;
var i__19580__auto___28768 = (0);
while(true){
if((i__19580__auto___28768 < len__19579__auto___28767)){
args28715.push((arguments[i__19580__auto___28768]));

var G__28769 = (i__19580__auto___28768 + (1));
i__19580__auto___28768 = G__28769;
continue;
} else {
}
break;
}

var G__28717 = args28715.length;
switch (G__28717) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28715.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21723__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto__){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto__){
return (function (state_28742){
var state_val_28743 = (state_28742[(1)]);
if((state_val_28743 === (7))){
var inst_28724 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
var statearr_28744_28771 = state_28742__$1;
(statearr_28744_28771[(2)] = inst_28724);

(statearr_28744_28771[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (1))){
var inst_28718 = cljs.core.seq.call(null,coll);
var inst_28719 = inst_28718;
var state_28742__$1 = (function (){var statearr_28745 = state_28742;
(statearr_28745[(7)] = inst_28719);

return statearr_28745;
})();
var statearr_28746_28772 = state_28742__$1;
(statearr_28746_28772[(2)] = null);

(statearr_28746_28772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (4))){
var inst_28719 = (state_28742[(7)]);
var inst_28722 = cljs.core.first.call(null,inst_28719);
var state_28742__$1 = state_28742;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28742__$1,(7),ch,inst_28722);
} else {
if((state_val_28743 === (13))){
var inst_28736 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
var statearr_28747_28773 = state_28742__$1;
(statearr_28747_28773[(2)] = inst_28736);

(statearr_28747_28773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (6))){
var inst_28727 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
if(cljs.core.truth_(inst_28727)){
var statearr_28748_28774 = state_28742__$1;
(statearr_28748_28774[(1)] = (8));

} else {
var statearr_28749_28775 = state_28742__$1;
(statearr_28749_28775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (3))){
var inst_28740 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28742__$1,inst_28740);
} else {
if((state_val_28743 === (12))){
var state_28742__$1 = state_28742;
var statearr_28750_28776 = state_28742__$1;
(statearr_28750_28776[(2)] = null);

(statearr_28750_28776[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (2))){
var inst_28719 = (state_28742[(7)]);
var state_28742__$1 = state_28742;
if(cljs.core.truth_(inst_28719)){
var statearr_28751_28777 = state_28742__$1;
(statearr_28751_28777[(1)] = (4));

} else {
var statearr_28752_28778 = state_28742__$1;
(statearr_28752_28778[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (11))){
var inst_28733 = cljs.core.async.close_BANG_.call(null,ch);
var state_28742__$1 = state_28742;
var statearr_28753_28779 = state_28742__$1;
(statearr_28753_28779[(2)] = inst_28733);

(statearr_28753_28779[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (9))){
var state_28742__$1 = state_28742;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28754_28780 = state_28742__$1;
(statearr_28754_28780[(1)] = (11));

} else {
var statearr_28755_28781 = state_28742__$1;
(statearr_28755_28781[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (5))){
var inst_28719 = (state_28742[(7)]);
var state_28742__$1 = state_28742;
var statearr_28756_28782 = state_28742__$1;
(statearr_28756_28782[(2)] = inst_28719);

(statearr_28756_28782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (10))){
var inst_28738 = (state_28742[(2)]);
var state_28742__$1 = state_28742;
var statearr_28757_28783 = state_28742__$1;
(statearr_28757_28783[(2)] = inst_28738);

(statearr_28757_28783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28743 === (8))){
var inst_28719 = (state_28742[(7)]);
var inst_28729 = cljs.core.next.call(null,inst_28719);
var inst_28719__$1 = inst_28729;
var state_28742__$1 = (function (){var statearr_28758 = state_28742;
(statearr_28758[(7)] = inst_28719__$1);

return statearr_28758;
})();
var statearr_28759_28784 = state_28742__$1;
(statearr_28759_28784[(2)] = null);

(statearr_28759_28784[(1)] = (2));


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
});})(c__21723__auto__))
;
return ((function (switch__21658__auto__,c__21723__auto__){
return (function() {
var cljs$core$async$state_machine__21659__auto__ = null;
var cljs$core$async$state_machine__21659__auto____0 = (function (){
var statearr_28763 = [null,null,null,null,null,null,null,null];
(statearr_28763[(0)] = cljs$core$async$state_machine__21659__auto__);

(statearr_28763[(1)] = (1));

return statearr_28763;
});
var cljs$core$async$state_machine__21659__auto____1 = (function (state_28742){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_28742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e28764){if((e28764 instanceof Object)){
var ex__21662__auto__ = e28764;
var statearr_28765_28785 = state_28742;
(statearr_28765_28785[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28786 = state_28742;
state_28742 = G__28786;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$state_machine__21659__auto__ = function(state_28742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21659__auto____1.call(this,state_28742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21659__auto____0;
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21659__auto____1;
return cljs$core$async$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto__))
})();
var state__21725__auto__ = (function (){var statearr_28766 = f__21724__auto__.call(null);
(statearr_28766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto__);

return statearr_28766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto__))
);

return c__21723__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19176__auto__ = (((_ == null))?null:_);
var m__19177__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,_);
} else {
var m__19177__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19176__auto__ = (((m == null))?null:m);
var m__19177__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19177__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__19176__auto__ = (((m == null))?null:m);
var m__19177__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,m,ch);
} else {
var m__19177__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,m,ch);
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
var x__19176__auto__ = (((m == null))?null:m);
var m__19177__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,m);
} else {
var m__19177__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t29012 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29012 = (function (mult,ch,cs,meta29013){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29013 = meta29013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29014,meta29013__$1){
var self__ = this;
var _29014__$1 = this;
return (new cljs.core.async.t29012(self__.mult,self__.ch,self__.cs,meta29013__$1));
});})(cs))
;

cljs.core.async.t29012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29014){
var self__ = this;
var _29014__$1 = this;
return self__.meta29013;
});})(cs))
;

cljs.core.async.t29012.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29012.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t29012.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t29012.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t29012.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t29012.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t29012.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29013","meta29013",1468675772,null)], null);
});})(cs))
;

cljs.core.async.t29012.cljs$lang$type = true;

cljs.core.async.t29012.cljs$lang$ctorStr = "cljs.core.async/t29012";

cljs.core.async.t29012.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19119__auto__,writer__19120__auto__,opt__19121__auto__){
return cljs.core._write.call(null,writer__19120__auto__,"cljs.core.async/t29012");
});})(cs))
;

cljs.core.async.__GT_t29012 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t29012(mult__$1,ch__$1,cs__$1,meta29013){
return (new cljs.core.async.t29012(mult__$1,ch__$1,cs__$1,meta29013));
});})(cs))
;

}

return (new cljs.core.async.t29012(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21723__auto___29233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___29233,cs,m,dchan,dctr,done){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___29233,cs,m,dchan,dctr,done){
return (function (state_29145){
var state_val_29146 = (state_29145[(1)]);
if((state_val_29146 === (7))){
var inst_29141 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29147_29234 = state_29145__$1;
(statearr_29147_29234[(2)] = inst_29141);

(statearr_29147_29234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (20))){
var inst_29046 = (state_29145[(7)]);
var inst_29056 = cljs.core.first.call(null,inst_29046);
var inst_29057 = cljs.core.nth.call(null,inst_29056,(0),null);
var inst_29058 = cljs.core.nth.call(null,inst_29056,(1),null);
var state_29145__$1 = (function (){var statearr_29148 = state_29145;
(statearr_29148[(8)] = inst_29057);

return statearr_29148;
})();
if(cljs.core.truth_(inst_29058)){
var statearr_29149_29235 = state_29145__$1;
(statearr_29149_29235[(1)] = (22));

} else {
var statearr_29150_29236 = state_29145__$1;
(statearr_29150_29236[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (27))){
var inst_29086 = (state_29145[(9)]);
var inst_29093 = (state_29145[(10)]);
var inst_29017 = (state_29145[(11)]);
var inst_29088 = (state_29145[(12)]);
var inst_29093__$1 = cljs.core._nth.call(null,inst_29086,inst_29088);
var inst_29094 = cljs.core.async.put_BANG_.call(null,inst_29093__$1,inst_29017,done);
var state_29145__$1 = (function (){var statearr_29151 = state_29145;
(statearr_29151[(10)] = inst_29093__$1);

return statearr_29151;
})();
if(cljs.core.truth_(inst_29094)){
var statearr_29152_29237 = state_29145__$1;
(statearr_29152_29237[(1)] = (30));

} else {
var statearr_29153_29238 = state_29145__$1;
(statearr_29153_29238[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (1))){
var state_29145__$1 = state_29145;
var statearr_29154_29239 = state_29145__$1;
(statearr_29154_29239[(2)] = null);

(statearr_29154_29239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (24))){
var inst_29046 = (state_29145[(7)]);
var inst_29063 = (state_29145[(2)]);
var inst_29064 = cljs.core.next.call(null,inst_29046);
var inst_29026 = inst_29064;
var inst_29027 = null;
var inst_29028 = (0);
var inst_29029 = (0);
var state_29145__$1 = (function (){var statearr_29155 = state_29145;
(statearr_29155[(13)] = inst_29029);

(statearr_29155[(14)] = inst_29027);

(statearr_29155[(15)] = inst_29026);

(statearr_29155[(16)] = inst_29028);

(statearr_29155[(17)] = inst_29063);

return statearr_29155;
})();
var statearr_29156_29240 = state_29145__$1;
(statearr_29156_29240[(2)] = null);

(statearr_29156_29240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (39))){
var state_29145__$1 = state_29145;
var statearr_29160_29241 = state_29145__$1;
(statearr_29160_29241[(2)] = null);

(statearr_29160_29241[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (4))){
var inst_29017 = (state_29145[(11)]);
var inst_29017__$1 = (state_29145[(2)]);
var inst_29018 = (inst_29017__$1 == null);
var state_29145__$1 = (function (){var statearr_29161 = state_29145;
(statearr_29161[(11)] = inst_29017__$1);

return statearr_29161;
})();
if(cljs.core.truth_(inst_29018)){
var statearr_29162_29242 = state_29145__$1;
(statearr_29162_29242[(1)] = (5));

} else {
var statearr_29163_29243 = state_29145__$1;
(statearr_29163_29243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (15))){
var inst_29029 = (state_29145[(13)]);
var inst_29027 = (state_29145[(14)]);
var inst_29026 = (state_29145[(15)]);
var inst_29028 = (state_29145[(16)]);
var inst_29042 = (state_29145[(2)]);
var inst_29043 = (inst_29029 + (1));
var tmp29157 = inst_29027;
var tmp29158 = inst_29026;
var tmp29159 = inst_29028;
var inst_29026__$1 = tmp29158;
var inst_29027__$1 = tmp29157;
var inst_29028__$1 = tmp29159;
var inst_29029__$1 = inst_29043;
var state_29145__$1 = (function (){var statearr_29164 = state_29145;
(statearr_29164[(13)] = inst_29029__$1);

(statearr_29164[(14)] = inst_29027__$1);

(statearr_29164[(15)] = inst_29026__$1);

(statearr_29164[(16)] = inst_29028__$1);

(statearr_29164[(18)] = inst_29042);

return statearr_29164;
})();
var statearr_29165_29244 = state_29145__$1;
(statearr_29165_29244[(2)] = null);

(statearr_29165_29244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (21))){
var inst_29067 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29169_29245 = state_29145__$1;
(statearr_29169_29245[(2)] = inst_29067);

(statearr_29169_29245[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (31))){
var inst_29093 = (state_29145[(10)]);
var inst_29097 = done.call(null,null);
var inst_29098 = cljs.core.async.untap_STAR_.call(null,m,inst_29093);
var state_29145__$1 = (function (){var statearr_29170 = state_29145;
(statearr_29170[(19)] = inst_29097);

return statearr_29170;
})();
var statearr_29171_29246 = state_29145__$1;
(statearr_29171_29246[(2)] = inst_29098);

(statearr_29171_29246[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (32))){
var inst_29086 = (state_29145[(9)]);
var inst_29085 = (state_29145[(20)]);
var inst_29087 = (state_29145[(21)]);
var inst_29088 = (state_29145[(12)]);
var inst_29100 = (state_29145[(2)]);
var inst_29101 = (inst_29088 + (1));
var tmp29166 = inst_29086;
var tmp29167 = inst_29085;
var tmp29168 = inst_29087;
var inst_29085__$1 = tmp29167;
var inst_29086__$1 = tmp29166;
var inst_29087__$1 = tmp29168;
var inst_29088__$1 = inst_29101;
var state_29145__$1 = (function (){var statearr_29172 = state_29145;
(statearr_29172[(9)] = inst_29086__$1);

(statearr_29172[(20)] = inst_29085__$1);

(statearr_29172[(22)] = inst_29100);

(statearr_29172[(21)] = inst_29087__$1);

(statearr_29172[(12)] = inst_29088__$1);

return statearr_29172;
})();
var statearr_29173_29247 = state_29145__$1;
(statearr_29173_29247[(2)] = null);

(statearr_29173_29247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (40))){
var inst_29113 = (state_29145[(23)]);
var inst_29117 = done.call(null,null);
var inst_29118 = cljs.core.async.untap_STAR_.call(null,m,inst_29113);
var state_29145__$1 = (function (){var statearr_29174 = state_29145;
(statearr_29174[(24)] = inst_29117);

return statearr_29174;
})();
var statearr_29175_29248 = state_29145__$1;
(statearr_29175_29248[(2)] = inst_29118);

(statearr_29175_29248[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (33))){
var inst_29104 = (state_29145[(25)]);
var inst_29106 = cljs.core.chunked_seq_QMARK_.call(null,inst_29104);
var state_29145__$1 = state_29145;
if(inst_29106){
var statearr_29176_29249 = state_29145__$1;
(statearr_29176_29249[(1)] = (36));

} else {
var statearr_29177_29250 = state_29145__$1;
(statearr_29177_29250[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (13))){
var inst_29036 = (state_29145[(26)]);
var inst_29039 = cljs.core.async.close_BANG_.call(null,inst_29036);
var state_29145__$1 = state_29145;
var statearr_29178_29251 = state_29145__$1;
(statearr_29178_29251[(2)] = inst_29039);

(statearr_29178_29251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (22))){
var inst_29057 = (state_29145[(8)]);
var inst_29060 = cljs.core.async.close_BANG_.call(null,inst_29057);
var state_29145__$1 = state_29145;
var statearr_29179_29252 = state_29145__$1;
(statearr_29179_29252[(2)] = inst_29060);

(statearr_29179_29252[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (36))){
var inst_29104 = (state_29145[(25)]);
var inst_29108 = cljs.core.chunk_first.call(null,inst_29104);
var inst_29109 = cljs.core.chunk_rest.call(null,inst_29104);
var inst_29110 = cljs.core.count.call(null,inst_29108);
var inst_29085 = inst_29109;
var inst_29086 = inst_29108;
var inst_29087 = inst_29110;
var inst_29088 = (0);
var state_29145__$1 = (function (){var statearr_29180 = state_29145;
(statearr_29180[(9)] = inst_29086);

(statearr_29180[(20)] = inst_29085);

(statearr_29180[(21)] = inst_29087);

(statearr_29180[(12)] = inst_29088);

return statearr_29180;
})();
var statearr_29181_29253 = state_29145__$1;
(statearr_29181_29253[(2)] = null);

(statearr_29181_29253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (41))){
var inst_29104 = (state_29145[(25)]);
var inst_29120 = (state_29145[(2)]);
var inst_29121 = cljs.core.next.call(null,inst_29104);
var inst_29085 = inst_29121;
var inst_29086 = null;
var inst_29087 = (0);
var inst_29088 = (0);
var state_29145__$1 = (function (){var statearr_29182 = state_29145;
(statearr_29182[(9)] = inst_29086);

(statearr_29182[(20)] = inst_29085);

(statearr_29182[(21)] = inst_29087);

(statearr_29182[(27)] = inst_29120);

(statearr_29182[(12)] = inst_29088);

return statearr_29182;
})();
var statearr_29183_29254 = state_29145__$1;
(statearr_29183_29254[(2)] = null);

(statearr_29183_29254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (43))){
var state_29145__$1 = state_29145;
var statearr_29184_29255 = state_29145__$1;
(statearr_29184_29255[(2)] = null);

(statearr_29184_29255[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (29))){
var inst_29129 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29185_29256 = state_29145__$1;
(statearr_29185_29256[(2)] = inst_29129);

(statearr_29185_29256[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (44))){
var inst_29138 = (state_29145[(2)]);
var state_29145__$1 = (function (){var statearr_29186 = state_29145;
(statearr_29186[(28)] = inst_29138);

return statearr_29186;
})();
var statearr_29187_29257 = state_29145__$1;
(statearr_29187_29257[(2)] = null);

(statearr_29187_29257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (6))){
var inst_29077 = (state_29145[(29)]);
var inst_29076 = cljs.core.deref.call(null,cs);
var inst_29077__$1 = cljs.core.keys.call(null,inst_29076);
var inst_29078 = cljs.core.count.call(null,inst_29077__$1);
var inst_29079 = cljs.core.reset_BANG_.call(null,dctr,inst_29078);
var inst_29084 = cljs.core.seq.call(null,inst_29077__$1);
var inst_29085 = inst_29084;
var inst_29086 = null;
var inst_29087 = (0);
var inst_29088 = (0);
var state_29145__$1 = (function (){var statearr_29188 = state_29145;
(statearr_29188[(9)] = inst_29086);

(statearr_29188[(20)] = inst_29085);

(statearr_29188[(21)] = inst_29087);

(statearr_29188[(12)] = inst_29088);

(statearr_29188[(29)] = inst_29077__$1);

(statearr_29188[(30)] = inst_29079);

return statearr_29188;
})();
var statearr_29189_29258 = state_29145__$1;
(statearr_29189_29258[(2)] = null);

(statearr_29189_29258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (28))){
var inst_29085 = (state_29145[(20)]);
var inst_29104 = (state_29145[(25)]);
var inst_29104__$1 = cljs.core.seq.call(null,inst_29085);
var state_29145__$1 = (function (){var statearr_29190 = state_29145;
(statearr_29190[(25)] = inst_29104__$1);

return statearr_29190;
})();
if(inst_29104__$1){
var statearr_29191_29259 = state_29145__$1;
(statearr_29191_29259[(1)] = (33));

} else {
var statearr_29192_29260 = state_29145__$1;
(statearr_29192_29260[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (25))){
var inst_29087 = (state_29145[(21)]);
var inst_29088 = (state_29145[(12)]);
var inst_29090 = (inst_29088 < inst_29087);
var inst_29091 = inst_29090;
var state_29145__$1 = state_29145;
if(cljs.core.truth_(inst_29091)){
var statearr_29193_29261 = state_29145__$1;
(statearr_29193_29261[(1)] = (27));

} else {
var statearr_29194_29262 = state_29145__$1;
(statearr_29194_29262[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (34))){
var state_29145__$1 = state_29145;
var statearr_29195_29263 = state_29145__$1;
(statearr_29195_29263[(2)] = null);

(statearr_29195_29263[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (17))){
var state_29145__$1 = state_29145;
var statearr_29196_29264 = state_29145__$1;
(statearr_29196_29264[(2)] = null);

(statearr_29196_29264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (3))){
var inst_29143 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29145__$1,inst_29143);
} else {
if((state_val_29146 === (12))){
var inst_29072 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29197_29265 = state_29145__$1;
(statearr_29197_29265[(2)] = inst_29072);

(statearr_29197_29265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (2))){
var state_29145__$1 = state_29145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29145__$1,(4),ch);
} else {
if((state_val_29146 === (23))){
var state_29145__$1 = state_29145;
var statearr_29198_29266 = state_29145__$1;
(statearr_29198_29266[(2)] = null);

(statearr_29198_29266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (35))){
var inst_29127 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29199_29267 = state_29145__$1;
(statearr_29199_29267[(2)] = inst_29127);

(statearr_29199_29267[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (19))){
var inst_29046 = (state_29145[(7)]);
var inst_29050 = cljs.core.chunk_first.call(null,inst_29046);
var inst_29051 = cljs.core.chunk_rest.call(null,inst_29046);
var inst_29052 = cljs.core.count.call(null,inst_29050);
var inst_29026 = inst_29051;
var inst_29027 = inst_29050;
var inst_29028 = inst_29052;
var inst_29029 = (0);
var state_29145__$1 = (function (){var statearr_29200 = state_29145;
(statearr_29200[(13)] = inst_29029);

(statearr_29200[(14)] = inst_29027);

(statearr_29200[(15)] = inst_29026);

(statearr_29200[(16)] = inst_29028);

return statearr_29200;
})();
var statearr_29201_29268 = state_29145__$1;
(statearr_29201_29268[(2)] = null);

(statearr_29201_29268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (11))){
var inst_29046 = (state_29145[(7)]);
var inst_29026 = (state_29145[(15)]);
var inst_29046__$1 = cljs.core.seq.call(null,inst_29026);
var state_29145__$1 = (function (){var statearr_29202 = state_29145;
(statearr_29202[(7)] = inst_29046__$1);

return statearr_29202;
})();
if(inst_29046__$1){
var statearr_29203_29269 = state_29145__$1;
(statearr_29203_29269[(1)] = (16));

} else {
var statearr_29204_29270 = state_29145__$1;
(statearr_29204_29270[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (9))){
var inst_29074 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29205_29271 = state_29145__$1;
(statearr_29205_29271[(2)] = inst_29074);

(statearr_29205_29271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (5))){
var inst_29024 = cljs.core.deref.call(null,cs);
var inst_29025 = cljs.core.seq.call(null,inst_29024);
var inst_29026 = inst_29025;
var inst_29027 = null;
var inst_29028 = (0);
var inst_29029 = (0);
var state_29145__$1 = (function (){var statearr_29206 = state_29145;
(statearr_29206[(13)] = inst_29029);

(statearr_29206[(14)] = inst_29027);

(statearr_29206[(15)] = inst_29026);

(statearr_29206[(16)] = inst_29028);

return statearr_29206;
})();
var statearr_29207_29272 = state_29145__$1;
(statearr_29207_29272[(2)] = null);

(statearr_29207_29272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (14))){
var state_29145__$1 = state_29145;
var statearr_29208_29273 = state_29145__$1;
(statearr_29208_29273[(2)] = null);

(statearr_29208_29273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (45))){
var inst_29135 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29209_29274 = state_29145__$1;
(statearr_29209_29274[(2)] = inst_29135);

(statearr_29209_29274[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (26))){
var inst_29077 = (state_29145[(29)]);
var inst_29131 = (state_29145[(2)]);
var inst_29132 = cljs.core.seq.call(null,inst_29077);
var state_29145__$1 = (function (){var statearr_29210 = state_29145;
(statearr_29210[(31)] = inst_29131);

return statearr_29210;
})();
if(inst_29132){
var statearr_29211_29275 = state_29145__$1;
(statearr_29211_29275[(1)] = (42));

} else {
var statearr_29212_29276 = state_29145__$1;
(statearr_29212_29276[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (16))){
var inst_29046 = (state_29145[(7)]);
var inst_29048 = cljs.core.chunked_seq_QMARK_.call(null,inst_29046);
var state_29145__$1 = state_29145;
if(inst_29048){
var statearr_29213_29277 = state_29145__$1;
(statearr_29213_29277[(1)] = (19));

} else {
var statearr_29214_29278 = state_29145__$1;
(statearr_29214_29278[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (38))){
var inst_29124 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29215_29279 = state_29145__$1;
(statearr_29215_29279[(2)] = inst_29124);

(statearr_29215_29279[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (30))){
var state_29145__$1 = state_29145;
var statearr_29216_29280 = state_29145__$1;
(statearr_29216_29280[(2)] = null);

(statearr_29216_29280[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (10))){
var inst_29029 = (state_29145[(13)]);
var inst_29027 = (state_29145[(14)]);
var inst_29035 = cljs.core._nth.call(null,inst_29027,inst_29029);
var inst_29036 = cljs.core.nth.call(null,inst_29035,(0),null);
var inst_29037 = cljs.core.nth.call(null,inst_29035,(1),null);
var state_29145__$1 = (function (){var statearr_29217 = state_29145;
(statearr_29217[(26)] = inst_29036);

return statearr_29217;
})();
if(cljs.core.truth_(inst_29037)){
var statearr_29218_29281 = state_29145__$1;
(statearr_29218_29281[(1)] = (13));

} else {
var statearr_29219_29282 = state_29145__$1;
(statearr_29219_29282[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (18))){
var inst_29070 = (state_29145[(2)]);
var state_29145__$1 = state_29145;
var statearr_29220_29283 = state_29145__$1;
(statearr_29220_29283[(2)] = inst_29070);

(statearr_29220_29283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (42))){
var state_29145__$1 = state_29145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29145__$1,(45),dchan);
} else {
if((state_val_29146 === (37))){
var inst_29113 = (state_29145[(23)]);
var inst_29104 = (state_29145[(25)]);
var inst_29017 = (state_29145[(11)]);
var inst_29113__$1 = cljs.core.first.call(null,inst_29104);
var inst_29114 = cljs.core.async.put_BANG_.call(null,inst_29113__$1,inst_29017,done);
var state_29145__$1 = (function (){var statearr_29221 = state_29145;
(statearr_29221[(23)] = inst_29113__$1);

return statearr_29221;
})();
if(cljs.core.truth_(inst_29114)){
var statearr_29222_29284 = state_29145__$1;
(statearr_29222_29284[(1)] = (39));

} else {
var statearr_29223_29285 = state_29145__$1;
(statearr_29223_29285[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29146 === (8))){
var inst_29029 = (state_29145[(13)]);
var inst_29028 = (state_29145[(16)]);
var inst_29031 = (inst_29029 < inst_29028);
var inst_29032 = inst_29031;
var state_29145__$1 = state_29145;
if(cljs.core.truth_(inst_29032)){
var statearr_29224_29286 = state_29145__$1;
(statearr_29224_29286[(1)] = (10));

} else {
var statearr_29225_29287 = state_29145__$1;
(statearr_29225_29287[(1)] = (11));

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
});})(c__21723__auto___29233,cs,m,dchan,dctr,done))
;
return ((function (switch__21658__auto__,c__21723__auto___29233,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21659__auto__ = null;
var cljs$core$async$mult_$_state_machine__21659__auto____0 = (function (){
var statearr_29229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29229[(0)] = cljs$core$async$mult_$_state_machine__21659__auto__);

(statearr_29229[(1)] = (1));

return statearr_29229;
});
var cljs$core$async$mult_$_state_machine__21659__auto____1 = (function (state_29145){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_29145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e29230){if((e29230 instanceof Object)){
var ex__21662__auto__ = e29230;
var statearr_29231_29288 = state_29145;
(statearr_29231_29288[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29289 = state_29145;
state_29145 = G__29289;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21659__auto__ = function(state_29145){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21659__auto____1.call(this,state_29145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21659__auto____0;
cljs$core$async$mult_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21659__auto____1;
return cljs$core$async$mult_$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___29233,cs,m,dchan,dctr,done))
})();
var state__21725__auto__ = (function (){var statearr_29232 = f__21724__auto__.call(null);
(statearr_29232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___29233);

return statearr_29232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___29233,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args29290 = [];
var len__19579__auto___29293 = arguments.length;
var i__19580__auto___29294 = (0);
while(true){
if((i__19580__auto___29294 < len__19579__auto___29293)){
args29290.push((arguments[i__19580__auto___29294]));

var G__29295 = (i__19580__auto___29294 + (1));
i__19580__auto___29294 = G__29295;
continue;
} else {
}
break;
}

var G__29292 = args29290.length;
switch (G__29292) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29290.length)].join('')));

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

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19176__auto__ = (((m == null))?null:m);
var m__19177__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,m,ch);
} else {
var m__19177__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,m,ch);
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
var x__19176__auto__ = (((m == null))?null:m);
var m__19177__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,m,ch);
} else {
var m__19177__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,m,ch);
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
var x__19176__auto__ = (((m == null))?null:m);
var m__19177__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,m);
} else {
var m__19177__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,m);
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
var x__19176__auto__ = (((m == null))?null:m);
var m__19177__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,m,state_map);
} else {
var m__19177__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,m,state_map);
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
var x__19176__auto__ = (((m == null))?null:m);
var m__19177__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,m,mode);
} else {
var m__19177__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__19586__auto__ = [];
var len__19579__auto___29309 = arguments.length;
var i__19580__auto___29310 = (0);
while(true){
if((i__19580__auto___29310 < len__19579__auto___29309)){
args__19586__auto__.push((arguments[i__19580__auto___29310]));

var G__29311 = (i__19580__auto___29310 + (1));
i__19580__auto___29310 = G__29311;
continue;
} else {
}
break;
}

var argseq__19587__auto__ = ((((3) < args__19586__auto__.length))?(new cljs.core.IndexedSeq(args__19586__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19587__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29303){
var map__29304 = p__29303;
var map__29304__$1 = ((((!((map__29304 == null)))?((((map__29304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29304):map__29304);
var opts = map__29304__$1;
var statearr_29306_29312 = state;
(statearr_29306_29312[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29304,map__29304__$1,opts){
return (function (val){
var statearr_29307_29313 = state;
(statearr_29307_29313[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29304,map__29304__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29308_29314 = state;
(statearr_29308_29314[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29299){
var G__29300 = cljs.core.first.call(null,seq29299);
var seq29299__$1 = cljs.core.next.call(null,seq29299);
var G__29301 = cljs.core.first.call(null,seq29299__$1);
var seq29299__$2 = cljs.core.next.call(null,seq29299__$1);
var G__29302 = cljs.core.first.call(null,seq29299__$2);
var seq29299__$3 = cljs.core.next.call(null,seq29299__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29300,G__29301,G__29302,seq29299__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t29478 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29478 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29479){
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
this.meta29479 = meta29479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29480,meta29479__$1){
var self__ = this;
var _29480__$1 = this;
return (new cljs.core.async.t29478(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29479__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29480){
var self__ = this;
var _29480__$1 = this;
return self__.meta29479;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29478.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29478.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29478.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29478.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29478.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29478.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29478.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29478.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t29478.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29479","meta29479",1557330551,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29478.cljs$lang$type = true;

cljs.core.async.t29478.cljs$lang$ctorStr = "cljs.core.async/t29478";

cljs.core.async.t29478.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19119__auto__,writer__19120__auto__,opt__19121__auto__){
return cljs.core._write.call(null,writer__19120__auto__,"cljs.core.async/t29478");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29478 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29478(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29479){
return (new cljs.core.async.t29478(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29479));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29478(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21723__auto___29641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___29641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___29641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29578){
var state_val_29579 = (state_29578[(1)]);
if((state_val_29579 === (7))){
var inst_29496 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
var statearr_29580_29642 = state_29578__$1;
(statearr_29580_29642[(2)] = inst_29496);

(statearr_29580_29642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (20))){
var inst_29508 = (state_29578[(7)]);
var state_29578__$1 = state_29578;
var statearr_29581_29643 = state_29578__$1;
(statearr_29581_29643[(2)] = inst_29508);

(statearr_29581_29643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (27))){
var state_29578__$1 = state_29578;
var statearr_29582_29644 = state_29578__$1;
(statearr_29582_29644[(2)] = null);

(statearr_29582_29644[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (1))){
var inst_29484 = (state_29578[(8)]);
var inst_29484__$1 = calc_state.call(null);
var inst_29486 = (inst_29484__$1 == null);
var inst_29487 = cljs.core.not.call(null,inst_29486);
var state_29578__$1 = (function (){var statearr_29583 = state_29578;
(statearr_29583[(8)] = inst_29484__$1);

return statearr_29583;
})();
if(inst_29487){
var statearr_29584_29645 = state_29578__$1;
(statearr_29584_29645[(1)] = (2));

} else {
var statearr_29585_29646 = state_29578__$1;
(statearr_29585_29646[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (24))){
var inst_29538 = (state_29578[(9)]);
var inst_29552 = (state_29578[(10)]);
var inst_29531 = (state_29578[(11)]);
var inst_29552__$1 = inst_29531.call(null,inst_29538);
var state_29578__$1 = (function (){var statearr_29586 = state_29578;
(statearr_29586[(10)] = inst_29552__$1);

return statearr_29586;
})();
if(cljs.core.truth_(inst_29552__$1)){
var statearr_29587_29647 = state_29578__$1;
(statearr_29587_29647[(1)] = (29));

} else {
var statearr_29588_29648 = state_29578__$1;
(statearr_29588_29648[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (4))){
var inst_29499 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
if(cljs.core.truth_(inst_29499)){
var statearr_29589_29649 = state_29578__$1;
(statearr_29589_29649[(1)] = (8));

} else {
var statearr_29590_29650 = state_29578__$1;
(statearr_29590_29650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (15))){
var inst_29525 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
if(cljs.core.truth_(inst_29525)){
var statearr_29591_29651 = state_29578__$1;
(statearr_29591_29651[(1)] = (19));

} else {
var statearr_29592_29652 = state_29578__$1;
(statearr_29592_29652[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (21))){
var inst_29530 = (state_29578[(12)]);
var inst_29530__$1 = (state_29578[(2)]);
var inst_29531 = cljs.core.get.call(null,inst_29530__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29532 = cljs.core.get.call(null,inst_29530__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29533 = cljs.core.get.call(null,inst_29530__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29578__$1 = (function (){var statearr_29593 = state_29578;
(statearr_29593[(12)] = inst_29530__$1);

(statearr_29593[(13)] = inst_29532);

(statearr_29593[(11)] = inst_29531);

return statearr_29593;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29578__$1,(22),inst_29533);
} else {
if((state_val_29579 === (31))){
var inst_29560 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
if(cljs.core.truth_(inst_29560)){
var statearr_29594_29653 = state_29578__$1;
(statearr_29594_29653[(1)] = (32));

} else {
var statearr_29595_29654 = state_29578__$1;
(statearr_29595_29654[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (32))){
var inst_29537 = (state_29578[(14)]);
var state_29578__$1 = state_29578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29578__$1,(35),out,inst_29537);
} else {
if((state_val_29579 === (33))){
var inst_29530 = (state_29578[(12)]);
var inst_29508 = inst_29530;
var state_29578__$1 = (function (){var statearr_29596 = state_29578;
(statearr_29596[(7)] = inst_29508);

return statearr_29596;
})();
var statearr_29597_29655 = state_29578__$1;
(statearr_29597_29655[(2)] = null);

(statearr_29597_29655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (13))){
var inst_29508 = (state_29578[(7)]);
var inst_29515 = inst_29508.cljs$lang$protocol_mask$partition0$;
var inst_29516 = (inst_29515 & (64));
var inst_29517 = inst_29508.cljs$core$ISeq$;
var inst_29518 = (inst_29516) || (inst_29517);
var state_29578__$1 = state_29578;
if(cljs.core.truth_(inst_29518)){
var statearr_29598_29656 = state_29578__$1;
(statearr_29598_29656[(1)] = (16));

} else {
var statearr_29599_29657 = state_29578__$1;
(statearr_29599_29657[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (22))){
var inst_29538 = (state_29578[(9)]);
var inst_29537 = (state_29578[(14)]);
var inst_29536 = (state_29578[(2)]);
var inst_29537__$1 = cljs.core.nth.call(null,inst_29536,(0),null);
var inst_29538__$1 = cljs.core.nth.call(null,inst_29536,(1),null);
var inst_29539 = (inst_29537__$1 == null);
var inst_29540 = cljs.core._EQ_.call(null,inst_29538__$1,change);
var inst_29541 = (inst_29539) || (inst_29540);
var state_29578__$1 = (function (){var statearr_29600 = state_29578;
(statearr_29600[(9)] = inst_29538__$1);

(statearr_29600[(14)] = inst_29537__$1);

return statearr_29600;
})();
if(cljs.core.truth_(inst_29541)){
var statearr_29601_29658 = state_29578__$1;
(statearr_29601_29658[(1)] = (23));

} else {
var statearr_29602_29659 = state_29578__$1;
(statearr_29602_29659[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (36))){
var inst_29530 = (state_29578[(12)]);
var inst_29508 = inst_29530;
var state_29578__$1 = (function (){var statearr_29603 = state_29578;
(statearr_29603[(7)] = inst_29508);

return statearr_29603;
})();
var statearr_29604_29660 = state_29578__$1;
(statearr_29604_29660[(2)] = null);

(statearr_29604_29660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (29))){
var inst_29552 = (state_29578[(10)]);
var state_29578__$1 = state_29578;
var statearr_29605_29661 = state_29578__$1;
(statearr_29605_29661[(2)] = inst_29552);

(statearr_29605_29661[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (6))){
var state_29578__$1 = state_29578;
var statearr_29606_29662 = state_29578__$1;
(statearr_29606_29662[(2)] = false);

(statearr_29606_29662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (28))){
var inst_29548 = (state_29578[(2)]);
var inst_29549 = calc_state.call(null);
var inst_29508 = inst_29549;
var state_29578__$1 = (function (){var statearr_29607 = state_29578;
(statearr_29607[(7)] = inst_29508);

(statearr_29607[(15)] = inst_29548);

return statearr_29607;
})();
var statearr_29608_29663 = state_29578__$1;
(statearr_29608_29663[(2)] = null);

(statearr_29608_29663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (25))){
var inst_29574 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
var statearr_29609_29664 = state_29578__$1;
(statearr_29609_29664[(2)] = inst_29574);

(statearr_29609_29664[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (34))){
var inst_29572 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
var statearr_29610_29665 = state_29578__$1;
(statearr_29610_29665[(2)] = inst_29572);

(statearr_29610_29665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (17))){
var state_29578__$1 = state_29578;
var statearr_29611_29666 = state_29578__$1;
(statearr_29611_29666[(2)] = false);

(statearr_29611_29666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (3))){
var state_29578__$1 = state_29578;
var statearr_29612_29667 = state_29578__$1;
(statearr_29612_29667[(2)] = false);

(statearr_29612_29667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (12))){
var inst_29576 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29578__$1,inst_29576);
} else {
if((state_val_29579 === (2))){
var inst_29484 = (state_29578[(8)]);
var inst_29489 = inst_29484.cljs$lang$protocol_mask$partition0$;
var inst_29490 = (inst_29489 & (64));
var inst_29491 = inst_29484.cljs$core$ISeq$;
var inst_29492 = (inst_29490) || (inst_29491);
var state_29578__$1 = state_29578;
if(cljs.core.truth_(inst_29492)){
var statearr_29613_29668 = state_29578__$1;
(statearr_29613_29668[(1)] = (5));

} else {
var statearr_29614_29669 = state_29578__$1;
(statearr_29614_29669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (23))){
var inst_29537 = (state_29578[(14)]);
var inst_29543 = (inst_29537 == null);
var state_29578__$1 = state_29578;
if(cljs.core.truth_(inst_29543)){
var statearr_29615_29670 = state_29578__$1;
(statearr_29615_29670[(1)] = (26));

} else {
var statearr_29616_29671 = state_29578__$1;
(statearr_29616_29671[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (35))){
var inst_29563 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
if(cljs.core.truth_(inst_29563)){
var statearr_29617_29672 = state_29578__$1;
(statearr_29617_29672[(1)] = (36));

} else {
var statearr_29618_29673 = state_29578__$1;
(statearr_29618_29673[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (19))){
var inst_29508 = (state_29578[(7)]);
var inst_29527 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29508);
var state_29578__$1 = state_29578;
var statearr_29619_29674 = state_29578__$1;
(statearr_29619_29674[(2)] = inst_29527);

(statearr_29619_29674[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (11))){
var inst_29508 = (state_29578[(7)]);
var inst_29512 = (inst_29508 == null);
var inst_29513 = cljs.core.not.call(null,inst_29512);
var state_29578__$1 = state_29578;
if(inst_29513){
var statearr_29620_29675 = state_29578__$1;
(statearr_29620_29675[(1)] = (13));

} else {
var statearr_29621_29676 = state_29578__$1;
(statearr_29621_29676[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (9))){
var inst_29484 = (state_29578[(8)]);
var state_29578__$1 = state_29578;
var statearr_29622_29677 = state_29578__$1;
(statearr_29622_29677[(2)] = inst_29484);

(statearr_29622_29677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (5))){
var state_29578__$1 = state_29578;
var statearr_29623_29678 = state_29578__$1;
(statearr_29623_29678[(2)] = true);

(statearr_29623_29678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (14))){
var state_29578__$1 = state_29578;
var statearr_29624_29679 = state_29578__$1;
(statearr_29624_29679[(2)] = false);

(statearr_29624_29679[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (26))){
var inst_29538 = (state_29578[(9)]);
var inst_29545 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29538);
var state_29578__$1 = state_29578;
var statearr_29625_29680 = state_29578__$1;
(statearr_29625_29680[(2)] = inst_29545);

(statearr_29625_29680[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (16))){
var state_29578__$1 = state_29578;
var statearr_29626_29681 = state_29578__$1;
(statearr_29626_29681[(2)] = true);

(statearr_29626_29681[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (38))){
var inst_29568 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
var statearr_29627_29682 = state_29578__$1;
(statearr_29627_29682[(2)] = inst_29568);

(statearr_29627_29682[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (30))){
var inst_29538 = (state_29578[(9)]);
var inst_29532 = (state_29578[(13)]);
var inst_29531 = (state_29578[(11)]);
var inst_29555 = cljs.core.empty_QMARK_.call(null,inst_29531);
var inst_29556 = inst_29532.call(null,inst_29538);
var inst_29557 = cljs.core.not.call(null,inst_29556);
var inst_29558 = (inst_29555) && (inst_29557);
var state_29578__$1 = state_29578;
var statearr_29628_29683 = state_29578__$1;
(statearr_29628_29683[(2)] = inst_29558);

(statearr_29628_29683[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (10))){
var inst_29484 = (state_29578[(8)]);
var inst_29504 = (state_29578[(2)]);
var inst_29505 = cljs.core.get.call(null,inst_29504,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29506 = cljs.core.get.call(null,inst_29504,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29507 = cljs.core.get.call(null,inst_29504,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29508 = inst_29484;
var state_29578__$1 = (function (){var statearr_29629 = state_29578;
(statearr_29629[(16)] = inst_29505);

(statearr_29629[(17)] = inst_29507);

(statearr_29629[(7)] = inst_29508);

(statearr_29629[(18)] = inst_29506);

return statearr_29629;
})();
var statearr_29630_29684 = state_29578__$1;
(statearr_29630_29684[(2)] = null);

(statearr_29630_29684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (18))){
var inst_29522 = (state_29578[(2)]);
var state_29578__$1 = state_29578;
var statearr_29631_29685 = state_29578__$1;
(statearr_29631_29685[(2)] = inst_29522);

(statearr_29631_29685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (37))){
var state_29578__$1 = state_29578;
var statearr_29632_29686 = state_29578__$1;
(statearr_29632_29686[(2)] = null);

(statearr_29632_29686[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29579 === (8))){
var inst_29484 = (state_29578[(8)]);
var inst_29501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29484);
var state_29578__$1 = state_29578;
var statearr_29633_29687 = state_29578__$1;
(statearr_29633_29687[(2)] = inst_29501);

(statearr_29633_29687[(1)] = (10));


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
});})(c__21723__auto___29641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21658__auto__,c__21723__auto___29641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21659__auto__ = null;
var cljs$core$async$mix_$_state_machine__21659__auto____0 = (function (){
var statearr_29637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29637[(0)] = cljs$core$async$mix_$_state_machine__21659__auto__);

(statearr_29637[(1)] = (1));

return statearr_29637;
});
var cljs$core$async$mix_$_state_machine__21659__auto____1 = (function (state_29578){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_29578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e29638){if((e29638 instanceof Object)){
var ex__21662__auto__ = e29638;
var statearr_29639_29688 = state_29578;
(statearr_29639_29688[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29689 = state_29578;
state_29578 = G__29689;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21659__auto__ = function(state_29578){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21659__auto____1.call(this,state_29578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21659__auto____0;
cljs$core$async$mix_$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21659__auto____1;
return cljs$core$async$mix_$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___29641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21725__auto__ = (function (){var statearr_29640 = f__21724__auto__.call(null);
(statearr_29640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___29641);

return statearr_29640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___29641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
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

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19176__auto__ = (((p == null))?null:p);
var m__19177__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19177__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__19176__auto__ = (((p == null))?null:p);
var m__19177__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,p,v,ch);
} else {
var m__19177__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args29692 = [];
var len__19579__auto___29695 = arguments.length;
var i__19580__auto___29696 = (0);
while(true){
if((i__19580__auto___29696 < len__19579__auto___29695)){
args29692.push((arguments[i__19580__auto___29696]));

var G__29697 = (i__19580__auto___29696 + (1));
i__19580__auto___29696 = G__29697;
continue;
} else {
}
break;
}

var G__29694 = args29692.length;
switch (G__29694) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29692.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19176__auto__ = (((p == null))?null:p);
var m__19177__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,p);
} else {
var m__19177__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,p);
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
var x__19176__auto__ = (((p == null))?null:p);
var m__19177__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19176__auto__)]);
if(!((m__19177__auto__ == null))){
return m__19177__auto__.call(null,p,v);
} else {
var m__19177__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19177__auto____$1 == null))){
return m__19177__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args29700 = [];
var len__19579__auto___29825 = arguments.length;
var i__19580__auto___29826 = (0);
while(true){
if((i__19580__auto___29826 < len__19579__auto___29825)){
args29700.push((arguments[i__19580__auto___29826]));

var G__29827 = (i__19580__auto___29826 + (1));
i__19580__auto___29826 = G__29827;
continue;
} else {
}
break;
}

var G__29702 = args29700.length;
switch (G__29702) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29700.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18540__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18540__auto__)){
return or__18540__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18540__auto__,mults){
return (function (p1__29699_SHARP_){
if(cljs.core.truth_(p1__29699_SHARP_.call(null,topic))){
return p1__29699_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29699_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18540__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29703 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29703 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29704){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29704 = meta29704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29705,meta29704__$1){
var self__ = this;
var _29705__$1 = this;
return (new cljs.core.async.t29703(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29704__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29705){
var self__ = this;
var _29705__$1 = this;
return self__.meta29704;
});})(mults,ensure_mult))
;

cljs.core.async.t29703.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29703.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29703.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29703.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t29703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29703.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29703.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29704","meta29704",1255478264,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t29703.cljs$lang$type = true;

cljs.core.async.t29703.cljs$lang$ctorStr = "cljs.core.async/t29703";

cljs.core.async.t29703.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19119__auto__,writer__19120__auto__,opt__19121__auto__){
return cljs.core._write.call(null,writer__19120__auto__,"cljs.core.async/t29703");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29703 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t29703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29704){
return (new cljs.core.async.t29703(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29704));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29703(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21723__auto___29829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___29829,mults,ensure_mult,p){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___29829,mults,ensure_mult,p){
return (function (state_29777){
var state_val_29778 = (state_29777[(1)]);
if((state_val_29778 === (7))){
var inst_29773 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29779_29830 = state_29777__$1;
(statearr_29779_29830[(2)] = inst_29773);

(statearr_29779_29830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (20))){
var state_29777__$1 = state_29777;
var statearr_29780_29831 = state_29777__$1;
(statearr_29780_29831[(2)] = null);

(statearr_29780_29831[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (1))){
var state_29777__$1 = state_29777;
var statearr_29781_29832 = state_29777__$1;
(statearr_29781_29832[(2)] = null);

(statearr_29781_29832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (24))){
var inst_29756 = (state_29777[(7)]);
var inst_29765 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29756);
var state_29777__$1 = state_29777;
var statearr_29782_29833 = state_29777__$1;
(statearr_29782_29833[(2)] = inst_29765);

(statearr_29782_29833[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (4))){
var inst_29708 = (state_29777[(8)]);
var inst_29708__$1 = (state_29777[(2)]);
var inst_29709 = (inst_29708__$1 == null);
var state_29777__$1 = (function (){var statearr_29783 = state_29777;
(statearr_29783[(8)] = inst_29708__$1);

return statearr_29783;
})();
if(cljs.core.truth_(inst_29709)){
var statearr_29784_29834 = state_29777__$1;
(statearr_29784_29834[(1)] = (5));

} else {
var statearr_29785_29835 = state_29777__$1;
(statearr_29785_29835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (15))){
var inst_29750 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29786_29836 = state_29777__$1;
(statearr_29786_29836[(2)] = inst_29750);

(statearr_29786_29836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (21))){
var inst_29770 = (state_29777[(2)]);
var state_29777__$1 = (function (){var statearr_29787 = state_29777;
(statearr_29787[(9)] = inst_29770);

return statearr_29787;
})();
var statearr_29788_29837 = state_29777__$1;
(statearr_29788_29837[(2)] = null);

(statearr_29788_29837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (13))){
var inst_29732 = (state_29777[(10)]);
var inst_29734 = cljs.core.chunked_seq_QMARK_.call(null,inst_29732);
var state_29777__$1 = state_29777;
if(inst_29734){
var statearr_29789_29838 = state_29777__$1;
(statearr_29789_29838[(1)] = (16));

} else {
var statearr_29790_29839 = state_29777__$1;
(statearr_29790_29839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (22))){
var inst_29762 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29762)){
var statearr_29791_29840 = state_29777__$1;
(statearr_29791_29840[(1)] = (23));

} else {
var statearr_29792_29841 = state_29777__$1;
(statearr_29792_29841[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (6))){
var inst_29708 = (state_29777[(8)]);
var inst_29758 = (state_29777[(11)]);
var inst_29756 = (state_29777[(7)]);
var inst_29756__$1 = topic_fn.call(null,inst_29708);
var inst_29757 = cljs.core.deref.call(null,mults);
var inst_29758__$1 = cljs.core.get.call(null,inst_29757,inst_29756__$1);
var state_29777__$1 = (function (){var statearr_29793 = state_29777;
(statearr_29793[(11)] = inst_29758__$1);

(statearr_29793[(7)] = inst_29756__$1);

return statearr_29793;
})();
if(cljs.core.truth_(inst_29758__$1)){
var statearr_29794_29842 = state_29777__$1;
(statearr_29794_29842[(1)] = (19));

} else {
var statearr_29795_29843 = state_29777__$1;
(statearr_29795_29843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (25))){
var inst_29767 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29796_29844 = state_29777__$1;
(statearr_29796_29844[(2)] = inst_29767);

(statearr_29796_29844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (17))){
var inst_29732 = (state_29777[(10)]);
var inst_29741 = cljs.core.first.call(null,inst_29732);
var inst_29742 = cljs.core.async.muxch_STAR_.call(null,inst_29741);
var inst_29743 = cljs.core.async.close_BANG_.call(null,inst_29742);
var inst_29744 = cljs.core.next.call(null,inst_29732);
var inst_29718 = inst_29744;
var inst_29719 = null;
var inst_29720 = (0);
var inst_29721 = (0);
var state_29777__$1 = (function (){var statearr_29797 = state_29777;
(statearr_29797[(12)] = inst_29719);

(statearr_29797[(13)] = inst_29718);

(statearr_29797[(14)] = inst_29721);

(statearr_29797[(15)] = inst_29743);

(statearr_29797[(16)] = inst_29720);

return statearr_29797;
})();
var statearr_29798_29845 = state_29777__$1;
(statearr_29798_29845[(2)] = null);

(statearr_29798_29845[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (3))){
var inst_29775 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29777__$1,inst_29775);
} else {
if((state_val_29778 === (12))){
var inst_29752 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29799_29846 = state_29777__$1;
(statearr_29799_29846[(2)] = inst_29752);

(statearr_29799_29846[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (2))){
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29777__$1,(4),ch);
} else {
if((state_val_29778 === (23))){
var state_29777__$1 = state_29777;
var statearr_29800_29847 = state_29777__$1;
(statearr_29800_29847[(2)] = null);

(statearr_29800_29847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (19))){
var inst_29708 = (state_29777[(8)]);
var inst_29758 = (state_29777[(11)]);
var inst_29760 = cljs.core.async.muxch_STAR_.call(null,inst_29758);
var state_29777__$1 = state_29777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29777__$1,(22),inst_29760,inst_29708);
} else {
if((state_val_29778 === (11))){
var inst_29718 = (state_29777[(13)]);
var inst_29732 = (state_29777[(10)]);
var inst_29732__$1 = cljs.core.seq.call(null,inst_29718);
var state_29777__$1 = (function (){var statearr_29801 = state_29777;
(statearr_29801[(10)] = inst_29732__$1);

return statearr_29801;
})();
if(inst_29732__$1){
var statearr_29802_29848 = state_29777__$1;
(statearr_29802_29848[(1)] = (13));

} else {
var statearr_29803_29849 = state_29777__$1;
(statearr_29803_29849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (9))){
var inst_29754 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29804_29850 = state_29777__$1;
(statearr_29804_29850[(2)] = inst_29754);

(statearr_29804_29850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (5))){
var inst_29715 = cljs.core.deref.call(null,mults);
var inst_29716 = cljs.core.vals.call(null,inst_29715);
var inst_29717 = cljs.core.seq.call(null,inst_29716);
var inst_29718 = inst_29717;
var inst_29719 = null;
var inst_29720 = (0);
var inst_29721 = (0);
var state_29777__$1 = (function (){var statearr_29805 = state_29777;
(statearr_29805[(12)] = inst_29719);

(statearr_29805[(13)] = inst_29718);

(statearr_29805[(14)] = inst_29721);

(statearr_29805[(16)] = inst_29720);

return statearr_29805;
})();
var statearr_29806_29851 = state_29777__$1;
(statearr_29806_29851[(2)] = null);

(statearr_29806_29851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (14))){
var state_29777__$1 = state_29777;
var statearr_29810_29852 = state_29777__$1;
(statearr_29810_29852[(2)] = null);

(statearr_29810_29852[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (16))){
var inst_29732 = (state_29777[(10)]);
var inst_29736 = cljs.core.chunk_first.call(null,inst_29732);
var inst_29737 = cljs.core.chunk_rest.call(null,inst_29732);
var inst_29738 = cljs.core.count.call(null,inst_29736);
var inst_29718 = inst_29737;
var inst_29719 = inst_29736;
var inst_29720 = inst_29738;
var inst_29721 = (0);
var state_29777__$1 = (function (){var statearr_29811 = state_29777;
(statearr_29811[(12)] = inst_29719);

(statearr_29811[(13)] = inst_29718);

(statearr_29811[(14)] = inst_29721);

(statearr_29811[(16)] = inst_29720);

return statearr_29811;
})();
var statearr_29812_29853 = state_29777__$1;
(statearr_29812_29853[(2)] = null);

(statearr_29812_29853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (10))){
var inst_29719 = (state_29777[(12)]);
var inst_29718 = (state_29777[(13)]);
var inst_29721 = (state_29777[(14)]);
var inst_29720 = (state_29777[(16)]);
var inst_29726 = cljs.core._nth.call(null,inst_29719,inst_29721);
var inst_29727 = cljs.core.async.muxch_STAR_.call(null,inst_29726);
var inst_29728 = cljs.core.async.close_BANG_.call(null,inst_29727);
var inst_29729 = (inst_29721 + (1));
var tmp29807 = inst_29719;
var tmp29808 = inst_29718;
var tmp29809 = inst_29720;
var inst_29718__$1 = tmp29808;
var inst_29719__$1 = tmp29807;
var inst_29720__$1 = tmp29809;
var inst_29721__$1 = inst_29729;
var state_29777__$1 = (function (){var statearr_29813 = state_29777;
(statearr_29813[(12)] = inst_29719__$1);

(statearr_29813[(13)] = inst_29718__$1);

(statearr_29813[(14)] = inst_29721__$1);

(statearr_29813[(16)] = inst_29720__$1);

(statearr_29813[(17)] = inst_29728);

return statearr_29813;
})();
var statearr_29814_29854 = state_29777__$1;
(statearr_29814_29854[(2)] = null);

(statearr_29814_29854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (18))){
var inst_29747 = (state_29777[(2)]);
var state_29777__$1 = state_29777;
var statearr_29815_29855 = state_29777__$1;
(statearr_29815_29855[(2)] = inst_29747);

(statearr_29815_29855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29778 === (8))){
var inst_29721 = (state_29777[(14)]);
var inst_29720 = (state_29777[(16)]);
var inst_29723 = (inst_29721 < inst_29720);
var inst_29724 = inst_29723;
var state_29777__$1 = state_29777;
if(cljs.core.truth_(inst_29724)){
var statearr_29816_29856 = state_29777__$1;
(statearr_29816_29856[(1)] = (10));

} else {
var statearr_29817_29857 = state_29777__$1;
(statearr_29817_29857[(1)] = (11));

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
});})(c__21723__auto___29829,mults,ensure_mult,p))
;
return ((function (switch__21658__auto__,c__21723__auto___29829,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21659__auto__ = null;
var cljs$core$async$state_machine__21659__auto____0 = (function (){
var statearr_29821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29821[(0)] = cljs$core$async$state_machine__21659__auto__);

(statearr_29821[(1)] = (1));

return statearr_29821;
});
var cljs$core$async$state_machine__21659__auto____1 = (function (state_29777){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_29777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e29822){if((e29822 instanceof Object)){
var ex__21662__auto__ = e29822;
var statearr_29823_29858 = state_29777;
(statearr_29823_29858[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29859 = state_29777;
state_29777 = G__29859;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$state_machine__21659__auto__ = function(state_29777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21659__auto____1.call(this,state_29777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21659__auto____0;
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21659__auto____1;
return cljs$core$async$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___29829,mults,ensure_mult,p))
})();
var state__21725__auto__ = (function (){var statearr_29824 = f__21724__auto__.call(null);
(statearr_29824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___29829);

return statearr_29824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___29829,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args29860 = [];
var len__19579__auto___29863 = arguments.length;
var i__19580__auto___29864 = (0);
while(true){
if((i__19580__auto___29864 < len__19579__auto___29863)){
args29860.push((arguments[i__19580__auto___29864]));

var G__29865 = (i__19580__auto___29864 + (1));
i__19580__auto___29864 = G__29865;
continue;
} else {
}
break;
}

var G__29862 = args29860.length;
switch (G__29862) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29860.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args29867 = [];
var len__19579__auto___29870 = arguments.length;
var i__19580__auto___29871 = (0);
while(true){
if((i__19580__auto___29871 < len__19579__auto___29870)){
args29867.push((arguments[i__19580__auto___29871]));

var G__29872 = (i__19580__auto___29871 + (1));
i__19580__auto___29871 = G__29872;
continue;
} else {
}
break;
}

var G__29869 = args29867.length;
switch (G__29869) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29867.length)].join('')));

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
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args29874 = [];
var len__19579__auto___29945 = arguments.length;
var i__19580__auto___29946 = (0);
while(true){
if((i__19580__auto___29946 < len__19579__auto___29945)){
args29874.push((arguments[i__19580__auto___29946]));

var G__29947 = (i__19580__auto___29946 + (1));
i__19580__auto___29946 = G__29947;
continue;
} else {
}
break;
}

var G__29876 = args29874.length;
switch (G__29876) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29874.length)].join('')));

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
var c__21723__auto___29949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29915){
var state_val_29916 = (state_29915[(1)]);
if((state_val_29916 === (7))){
var state_29915__$1 = state_29915;
var statearr_29917_29950 = state_29915__$1;
(statearr_29917_29950[(2)] = null);

(statearr_29917_29950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (1))){
var state_29915__$1 = state_29915;
var statearr_29918_29951 = state_29915__$1;
(statearr_29918_29951[(2)] = null);

(statearr_29918_29951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (4))){
var inst_29879 = (state_29915[(7)]);
var inst_29881 = (inst_29879 < cnt);
var state_29915__$1 = state_29915;
if(cljs.core.truth_(inst_29881)){
var statearr_29919_29952 = state_29915__$1;
(statearr_29919_29952[(1)] = (6));

} else {
var statearr_29920_29953 = state_29915__$1;
(statearr_29920_29953[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (15))){
var inst_29911 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29921_29954 = state_29915__$1;
(statearr_29921_29954[(2)] = inst_29911);

(statearr_29921_29954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (13))){
var inst_29904 = cljs.core.async.close_BANG_.call(null,out);
var state_29915__$1 = state_29915;
var statearr_29922_29955 = state_29915__$1;
(statearr_29922_29955[(2)] = inst_29904);

(statearr_29922_29955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (6))){
var state_29915__$1 = state_29915;
var statearr_29923_29956 = state_29915__$1;
(statearr_29923_29956[(2)] = null);

(statearr_29923_29956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (3))){
var inst_29913 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29915__$1,inst_29913);
} else {
if((state_val_29916 === (12))){
var inst_29901 = (state_29915[(8)]);
var inst_29901__$1 = (state_29915[(2)]);
var inst_29902 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29901__$1);
var state_29915__$1 = (function (){var statearr_29924 = state_29915;
(statearr_29924[(8)] = inst_29901__$1);

return statearr_29924;
})();
if(cljs.core.truth_(inst_29902)){
var statearr_29925_29957 = state_29915__$1;
(statearr_29925_29957[(1)] = (13));

} else {
var statearr_29926_29958 = state_29915__$1;
(statearr_29926_29958[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (2))){
var inst_29878 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29879 = (0);
var state_29915__$1 = (function (){var statearr_29927 = state_29915;
(statearr_29927[(9)] = inst_29878);

(statearr_29927[(7)] = inst_29879);

return statearr_29927;
})();
var statearr_29928_29959 = state_29915__$1;
(statearr_29928_29959[(2)] = null);

(statearr_29928_29959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (11))){
var inst_29879 = (state_29915[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29915,(10),Object,null,(9));
var inst_29888 = chs__$1.call(null,inst_29879);
var inst_29889 = done.call(null,inst_29879);
var inst_29890 = cljs.core.async.take_BANG_.call(null,inst_29888,inst_29889);
var state_29915__$1 = state_29915;
var statearr_29929_29960 = state_29915__$1;
(statearr_29929_29960[(2)] = inst_29890);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29915__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (9))){
var inst_29879 = (state_29915[(7)]);
var inst_29892 = (state_29915[(2)]);
var inst_29893 = (inst_29879 + (1));
var inst_29879__$1 = inst_29893;
var state_29915__$1 = (function (){var statearr_29930 = state_29915;
(statearr_29930[(7)] = inst_29879__$1);

(statearr_29930[(10)] = inst_29892);

return statearr_29930;
})();
var statearr_29931_29961 = state_29915__$1;
(statearr_29931_29961[(2)] = null);

(statearr_29931_29961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (5))){
var inst_29899 = (state_29915[(2)]);
var state_29915__$1 = (function (){var statearr_29932 = state_29915;
(statearr_29932[(11)] = inst_29899);

return statearr_29932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29915__$1,(12),dchan);
} else {
if((state_val_29916 === (14))){
var inst_29901 = (state_29915[(8)]);
var inst_29906 = cljs.core.apply.call(null,f,inst_29901);
var state_29915__$1 = state_29915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29915__$1,(16),out,inst_29906);
} else {
if((state_val_29916 === (16))){
var inst_29908 = (state_29915[(2)]);
var state_29915__$1 = (function (){var statearr_29933 = state_29915;
(statearr_29933[(12)] = inst_29908);

return statearr_29933;
})();
var statearr_29934_29962 = state_29915__$1;
(statearr_29934_29962[(2)] = null);

(statearr_29934_29962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (10))){
var inst_29883 = (state_29915[(2)]);
var inst_29884 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29915__$1 = (function (){var statearr_29935 = state_29915;
(statearr_29935[(13)] = inst_29883);

return statearr_29935;
})();
var statearr_29936_29963 = state_29915__$1;
(statearr_29936_29963[(2)] = inst_29884);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29915__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29916 === (8))){
var inst_29897 = (state_29915[(2)]);
var state_29915__$1 = state_29915;
var statearr_29937_29964 = state_29915__$1;
(statearr_29937_29964[(2)] = inst_29897);

(statearr_29937_29964[(1)] = (5));


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
});})(c__21723__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21658__auto__,c__21723__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21659__auto__ = null;
var cljs$core$async$state_machine__21659__auto____0 = (function (){
var statearr_29941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29941[(0)] = cljs$core$async$state_machine__21659__auto__);

(statearr_29941[(1)] = (1));

return statearr_29941;
});
var cljs$core$async$state_machine__21659__auto____1 = (function (state_29915){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_29915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e29942){if((e29942 instanceof Object)){
var ex__21662__auto__ = e29942;
var statearr_29943_29965 = state_29915;
(statearr_29943_29965[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29966 = state_29915;
state_29915 = G__29966;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$state_machine__21659__auto__ = function(state_29915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21659__auto____1.call(this,state_29915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21659__auto____0;
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21659__auto____1;
return cljs$core$async$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21725__auto__ = (function (){var statearr_29944 = f__21724__auto__.call(null);
(statearr_29944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___29949);

return statearr_29944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___29949,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args29968 = [];
var len__19579__auto___30024 = arguments.length;
var i__19580__auto___30025 = (0);
while(true){
if((i__19580__auto___30025 < len__19579__auto___30024)){
args29968.push((arguments[i__19580__auto___30025]));

var G__30026 = (i__19580__auto___30025 + (1));
i__19580__auto___30025 = G__30026;
continue;
} else {
}
break;
}

var G__29970 = args29968.length;
switch (G__29970) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29968.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21723__auto___30028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___30028,out){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___30028,out){
return (function (state_30000){
var state_val_30001 = (state_30000[(1)]);
if((state_val_30001 === (7))){
var inst_29980 = (state_30000[(7)]);
var inst_29979 = (state_30000[(8)]);
var inst_29979__$1 = (state_30000[(2)]);
var inst_29980__$1 = cljs.core.nth.call(null,inst_29979__$1,(0),null);
var inst_29981 = cljs.core.nth.call(null,inst_29979__$1,(1),null);
var inst_29982 = (inst_29980__$1 == null);
var state_30000__$1 = (function (){var statearr_30002 = state_30000;
(statearr_30002[(7)] = inst_29980__$1);

(statearr_30002[(9)] = inst_29981);

(statearr_30002[(8)] = inst_29979__$1);

return statearr_30002;
})();
if(cljs.core.truth_(inst_29982)){
var statearr_30003_30029 = state_30000__$1;
(statearr_30003_30029[(1)] = (8));

} else {
var statearr_30004_30030 = state_30000__$1;
(statearr_30004_30030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30001 === (1))){
var inst_29971 = cljs.core.vec.call(null,chs);
var inst_29972 = inst_29971;
var state_30000__$1 = (function (){var statearr_30005 = state_30000;
(statearr_30005[(10)] = inst_29972);

return statearr_30005;
})();
var statearr_30006_30031 = state_30000__$1;
(statearr_30006_30031[(2)] = null);

(statearr_30006_30031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30001 === (4))){
var inst_29972 = (state_30000[(10)]);
var state_30000__$1 = state_30000;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30000__$1,(7),inst_29972);
} else {
if((state_val_30001 === (6))){
var inst_29996 = (state_30000[(2)]);
var state_30000__$1 = state_30000;
var statearr_30007_30032 = state_30000__$1;
(statearr_30007_30032[(2)] = inst_29996);

(statearr_30007_30032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30001 === (3))){
var inst_29998 = (state_30000[(2)]);
var state_30000__$1 = state_30000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30000__$1,inst_29998);
} else {
if((state_val_30001 === (2))){
var inst_29972 = (state_30000[(10)]);
var inst_29974 = cljs.core.count.call(null,inst_29972);
var inst_29975 = (inst_29974 > (0));
var state_30000__$1 = state_30000;
if(cljs.core.truth_(inst_29975)){
var statearr_30009_30033 = state_30000__$1;
(statearr_30009_30033[(1)] = (4));

} else {
var statearr_30010_30034 = state_30000__$1;
(statearr_30010_30034[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30001 === (11))){
var inst_29972 = (state_30000[(10)]);
var inst_29989 = (state_30000[(2)]);
var tmp30008 = inst_29972;
var inst_29972__$1 = tmp30008;
var state_30000__$1 = (function (){var statearr_30011 = state_30000;
(statearr_30011[(11)] = inst_29989);

(statearr_30011[(10)] = inst_29972__$1);

return statearr_30011;
})();
var statearr_30012_30035 = state_30000__$1;
(statearr_30012_30035[(2)] = null);

(statearr_30012_30035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30001 === (9))){
var inst_29980 = (state_30000[(7)]);
var state_30000__$1 = state_30000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30000__$1,(11),out,inst_29980);
} else {
if((state_val_30001 === (5))){
var inst_29994 = cljs.core.async.close_BANG_.call(null,out);
var state_30000__$1 = state_30000;
var statearr_30013_30036 = state_30000__$1;
(statearr_30013_30036[(2)] = inst_29994);

(statearr_30013_30036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30001 === (10))){
var inst_29992 = (state_30000[(2)]);
var state_30000__$1 = state_30000;
var statearr_30014_30037 = state_30000__$1;
(statearr_30014_30037[(2)] = inst_29992);

(statearr_30014_30037[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30001 === (8))){
var inst_29980 = (state_30000[(7)]);
var inst_29981 = (state_30000[(9)]);
var inst_29979 = (state_30000[(8)]);
var inst_29972 = (state_30000[(10)]);
var inst_29984 = (function (){var cs = inst_29972;
var vec__29977 = inst_29979;
var v = inst_29980;
var c = inst_29981;
return ((function (cs,vec__29977,v,c,inst_29980,inst_29981,inst_29979,inst_29972,state_val_30001,c__21723__auto___30028,out){
return (function (p1__29967_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29967_SHARP_);
});
;})(cs,vec__29977,v,c,inst_29980,inst_29981,inst_29979,inst_29972,state_val_30001,c__21723__auto___30028,out))
})();
var inst_29985 = cljs.core.filterv.call(null,inst_29984,inst_29972);
var inst_29972__$1 = inst_29985;
var state_30000__$1 = (function (){var statearr_30015 = state_30000;
(statearr_30015[(10)] = inst_29972__$1);

return statearr_30015;
})();
var statearr_30016_30038 = state_30000__$1;
(statearr_30016_30038[(2)] = null);

(statearr_30016_30038[(1)] = (2));


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
});})(c__21723__auto___30028,out))
;
return ((function (switch__21658__auto__,c__21723__auto___30028,out){
return (function() {
var cljs$core$async$state_machine__21659__auto__ = null;
var cljs$core$async$state_machine__21659__auto____0 = (function (){
var statearr_30020 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30020[(0)] = cljs$core$async$state_machine__21659__auto__);

(statearr_30020[(1)] = (1));

return statearr_30020;
});
var cljs$core$async$state_machine__21659__auto____1 = (function (state_30000){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_30000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e30021){if((e30021 instanceof Object)){
var ex__21662__auto__ = e30021;
var statearr_30022_30039 = state_30000;
(statearr_30022_30039[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30040 = state_30000;
state_30000 = G__30040;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$state_machine__21659__auto__ = function(state_30000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21659__auto____1.call(this,state_30000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21659__auto____0;
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21659__auto____1;
return cljs$core$async$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___30028,out))
})();
var state__21725__auto__ = (function (){var statearr_30023 = f__21724__auto__.call(null);
(statearr_30023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___30028);

return statearr_30023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___30028,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args30041 = [];
var len__19579__auto___30090 = arguments.length;
var i__19580__auto___30091 = (0);
while(true){
if((i__19580__auto___30091 < len__19579__auto___30090)){
args30041.push((arguments[i__19580__auto___30091]));

var G__30092 = (i__19580__auto___30091 + (1));
i__19580__auto___30091 = G__30092;
continue;
} else {
}
break;
}

var G__30043 = args30041.length;
switch (G__30043) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30041.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21723__auto___30094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___30094,out){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___30094,out){
return (function (state_30067){
var state_val_30068 = (state_30067[(1)]);
if((state_val_30068 === (7))){
var inst_30049 = (state_30067[(7)]);
var inst_30049__$1 = (state_30067[(2)]);
var inst_30050 = (inst_30049__$1 == null);
var inst_30051 = cljs.core.not.call(null,inst_30050);
var state_30067__$1 = (function (){var statearr_30069 = state_30067;
(statearr_30069[(7)] = inst_30049__$1);

return statearr_30069;
})();
if(inst_30051){
var statearr_30070_30095 = state_30067__$1;
(statearr_30070_30095[(1)] = (8));

} else {
var statearr_30071_30096 = state_30067__$1;
(statearr_30071_30096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (1))){
var inst_30044 = (0);
var state_30067__$1 = (function (){var statearr_30072 = state_30067;
(statearr_30072[(8)] = inst_30044);

return statearr_30072;
})();
var statearr_30073_30097 = state_30067__$1;
(statearr_30073_30097[(2)] = null);

(statearr_30073_30097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (4))){
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30067__$1,(7),ch);
} else {
if((state_val_30068 === (6))){
var inst_30062 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30074_30098 = state_30067__$1;
(statearr_30074_30098[(2)] = inst_30062);

(statearr_30074_30098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (3))){
var inst_30064 = (state_30067[(2)]);
var inst_30065 = cljs.core.async.close_BANG_.call(null,out);
var state_30067__$1 = (function (){var statearr_30075 = state_30067;
(statearr_30075[(9)] = inst_30064);

return statearr_30075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30067__$1,inst_30065);
} else {
if((state_val_30068 === (2))){
var inst_30044 = (state_30067[(8)]);
var inst_30046 = (inst_30044 < n);
var state_30067__$1 = state_30067;
if(cljs.core.truth_(inst_30046)){
var statearr_30076_30099 = state_30067__$1;
(statearr_30076_30099[(1)] = (4));

} else {
var statearr_30077_30100 = state_30067__$1;
(statearr_30077_30100[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (11))){
var inst_30044 = (state_30067[(8)]);
var inst_30054 = (state_30067[(2)]);
var inst_30055 = (inst_30044 + (1));
var inst_30044__$1 = inst_30055;
var state_30067__$1 = (function (){var statearr_30078 = state_30067;
(statearr_30078[(8)] = inst_30044__$1);

(statearr_30078[(10)] = inst_30054);

return statearr_30078;
})();
var statearr_30079_30101 = state_30067__$1;
(statearr_30079_30101[(2)] = null);

(statearr_30079_30101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (9))){
var state_30067__$1 = state_30067;
var statearr_30080_30102 = state_30067__$1;
(statearr_30080_30102[(2)] = null);

(statearr_30080_30102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (5))){
var state_30067__$1 = state_30067;
var statearr_30081_30103 = state_30067__$1;
(statearr_30081_30103[(2)] = null);

(statearr_30081_30103[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (10))){
var inst_30059 = (state_30067[(2)]);
var state_30067__$1 = state_30067;
var statearr_30082_30104 = state_30067__$1;
(statearr_30082_30104[(2)] = inst_30059);

(statearr_30082_30104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30068 === (8))){
var inst_30049 = (state_30067[(7)]);
var state_30067__$1 = state_30067;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30067__$1,(11),out,inst_30049);
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
});})(c__21723__auto___30094,out))
;
return ((function (switch__21658__auto__,c__21723__auto___30094,out){
return (function() {
var cljs$core$async$state_machine__21659__auto__ = null;
var cljs$core$async$state_machine__21659__auto____0 = (function (){
var statearr_30086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30086[(0)] = cljs$core$async$state_machine__21659__auto__);

(statearr_30086[(1)] = (1));

return statearr_30086;
});
var cljs$core$async$state_machine__21659__auto____1 = (function (state_30067){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_30067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e30087){if((e30087 instanceof Object)){
var ex__21662__auto__ = e30087;
var statearr_30088_30105 = state_30067;
(statearr_30088_30105[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30106 = state_30067;
state_30067 = G__30106;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$state_machine__21659__auto__ = function(state_30067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21659__auto____1.call(this,state_30067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21659__auto____0;
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21659__auto____1;
return cljs$core$async$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___30094,out))
})();
var state__21725__auto__ = (function (){var statearr_30089 = f__21724__auto__.call(null);
(statearr_30089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___30094);

return statearr_30089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___30094,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t30114 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30114 = (function (map_LT_,f,ch,meta30115){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30115 = meta30115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30116,meta30115__$1){
var self__ = this;
var _30116__$1 = this;
return (new cljs.core.async.t30114(self__.map_LT_,self__.f,self__.ch,meta30115__$1));
});

cljs.core.async.t30114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30116){
var self__ = this;
var _30116__$1 = this;
return self__.meta30115;
});

cljs.core.async.t30114.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30114.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30114.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30114.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30114.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t30117 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30117 = (function (map_LT_,f,ch,meta30115,_,fn1,meta30118){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30115 = meta30115;
this._ = _;
this.fn1 = fn1;
this.meta30118 = meta30118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30119,meta30118__$1){
var self__ = this;
var _30119__$1 = this;
return (new cljs.core.async.t30117(self__.map_LT_,self__.f,self__.ch,self__.meta30115,self__._,self__.fn1,meta30118__$1));
});})(___$1))
;

cljs.core.async.t30117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30119){
var self__ = this;
var _30119__$1 = this;
return self__.meta30118;
});})(___$1))
;

cljs.core.async.t30117.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t30117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t30117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30107_SHARP_){
return f1.call(null,(((p1__30107_SHARP_ == null))?null:self__.f.call(null,p1__30107_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t30117.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30115","meta30115",282928346,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t30114","cljs.core.async/t30114",1760965013,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30118","meta30118",597482900,null)], null);
});})(___$1))
;

cljs.core.async.t30117.cljs$lang$type = true;

cljs.core.async.t30117.cljs$lang$ctorStr = "cljs.core.async/t30117";

cljs.core.async.t30117.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19119__auto__,writer__19120__auto__,opt__19121__auto__){
return cljs.core._write.call(null,writer__19120__auto__,"cljs.core.async/t30117");
});})(___$1))
;

cljs.core.async.__GT_t30117 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t30117(map_LT___$1,f__$1,ch__$1,meta30115__$1,___$2,fn1__$1,meta30118){
return (new cljs.core.async.t30117(map_LT___$1,f__$1,ch__$1,meta30115__$1,___$2,fn1__$1,meta30118));
});})(___$1))
;

}

return (new cljs.core.async.t30117(self__.map_LT_,self__.f,self__.ch,self__.meta30115,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18528__auto__ = ret;
if(cljs.core.truth_(and__18528__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18528__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t30114.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30114.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t30114.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30115","meta30115",282928346,null)], null);
});

cljs.core.async.t30114.cljs$lang$type = true;

cljs.core.async.t30114.cljs$lang$ctorStr = "cljs.core.async/t30114";

cljs.core.async.t30114.cljs$lang$ctorPrWriter = (function (this__19119__auto__,writer__19120__auto__,opt__19121__auto__){
return cljs.core._write.call(null,writer__19120__auto__,"cljs.core.async/t30114");
});

cljs.core.async.__GT_t30114 = (function cljs$core$async$map_LT__$___GT_t30114(map_LT___$1,f__$1,ch__$1,meta30115){
return (new cljs.core.async.t30114(map_LT___$1,f__$1,ch__$1,meta30115));
});

}

return (new cljs.core.async.t30114(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t30123 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30123 = (function (map_GT_,f,ch,meta30124){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30124 = meta30124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30125,meta30124__$1){
var self__ = this;
var _30125__$1 = this;
return (new cljs.core.async.t30123(self__.map_GT_,self__.f,self__.ch,meta30124__$1));
});

cljs.core.async.t30123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30125){
var self__ = this;
var _30125__$1 = this;
return self__.meta30124;
});

cljs.core.async.t30123.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30123.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30123.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30123.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30123.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30123.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t30123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30124","meta30124",-1740089088,null)], null);
});

cljs.core.async.t30123.cljs$lang$type = true;

cljs.core.async.t30123.cljs$lang$ctorStr = "cljs.core.async/t30123";

cljs.core.async.t30123.cljs$lang$ctorPrWriter = (function (this__19119__auto__,writer__19120__auto__,opt__19121__auto__){
return cljs.core._write.call(null,writer__19120__auto__,"cljs.core.async/t30123");
});

cljs.core.async.__GT_t30123 = (function cljs$core$async$map_GT__$___GT_t30123(map_GT___$1,f__$1,ch__$1,meta30124){
return (new cljs.core.async.t30123(map_GT___$1,f__$1,ch__$1,meta30124));
});

}

return (new cljs.core.async.t30123(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t30129 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t30129 = (function (filter_GT_,p,ch,meta30130){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30130 = meta30130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t30129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30131,meta30130__$1){
var self__ = this;
var _30131__$1 = this;
return (new cljs.core.async.t30129(self__.filter_GT_,self__.p,self__.ch,meta30130__$1));
});

cljs.core.async.t30129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30131){
var self__ = this;
var _30131__$1 = this;
return self__.meta30130;
});

cljs.core.async.t30129.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t30129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t30129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t30129.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t30129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t30129.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t30129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t30129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30130","meta30130",1434330832,null)], null);
});

cljs.core.async.t30129.cljs$lang$type = true;

cljs.core.async.t30129.cljs$lang$ctorStr = "cljs.core.async/t30129";

cljs.core.async.t30129.cljs$lang$ctorPrWriter = (function (this__19119__auto__,writer__19120__auto__,opt__19121__auto__){
return cljs.core._write.call(null,writer__19120__auto__,"cljs.core.async/t30129");
});

cljs.core.async.__GT_t30129 = (function cljs$core$async$filter_GT__$___GT_t30129(filter_GT___$1,p__$1,ch__$1,meta30130){
return (new cljs.core.async.t30129(filter_GT___$1,p__$1,ch__$1,meta30130));
});

}

return (new cljs.core.async.t30129(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args30132 = [];
var len__19579__auto___30176 = arguments.length;
var i__19580__auto___30177 = (0);
while(true){
if((i__19580__auto___30177 < len__19579__auto___30176)){
args30132.push((arguments[i__19580__auto___30177]));

var G__30178 = (i__19580__auto___30177 + (1));
i__19580__auto___30177 = G__30178;
continue;
} else {
}
break;
}

var G__30134 = args30132.length;
switch (G__30134) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30132.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21723__auto___30180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___30180,out){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___30180,out){
return (function (state_30155){
var state_val_30156 = (state_30155[(1)]);
if((state_val_30156 === (7))){
var inst_30151 = (state_30155[(2)]);
var state_30155__$1 = state_30155;
var statearr_30157_30181 = state_30155__$1;
(statearr_30157_30181[(2)] = inst_30151);

(statearr_30157_30181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (1))){
var state_30155__$1 = state_30155;
var statearr_30158_30182 = state_30155__$1;
(statearr_30158_30182[(2)] = null);

(statearr_30158_30182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (4))){
var inst_30137 = (state_30155[(7)]);
var inst_30137__$1 = (state_30155[(2)]);
var inst_30138 = (inst_30137__$1 == null);
var state_30155__$1 = (function (){var statearr_30159 = state_30155;
(statearr_30159[(7)] = inst_30137__$1);

return statearr_30159;
})();
if(cljs.core.truth_(inst_30138)){
var statearr_30160_30183 = state_30155__$1;
(statearr_30160_30183[(1)] = (5));

} else {
var statearr_30161_30184 = state_30155__$1;
(statearr_30161_30184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (6))){
var inst_30137 = (state_30155[(7)]);
var inst_30142 = p.call(null,inst_30137);
var state_30155__$1 = state_30155;
if(cljs.core.truth_(inst_30142)){
var statearr_30162_30185 = state_30155__$1;
(statearr_30162_30185[(1)] = (8));

} else {
var statearr_30163_30186 = state_30155__$1;
(statearr_30163_30186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (3))){
var inst_30153 = (state_30155[(2)]);
var state_30155__$1 = state_30155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30155__$1,inst_30153);
} else {
if((state_val_30156 === (2))){
var state_30155__$1 = state_30155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30155__$1,(4),ch);
} else {
if((state_val_30156 === (11))){
var inst_30145 = (state_30155[(2)]);
var state_30155__$1 = state_30155;
var statearr_30164_30187 = state_30155__$1;
(statearr_30164_30187[(2)] = inst_30145);

(statearr_30164_30187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (9))){
var state_30155__$1 = state_30155;
var statearr_30165_30188 = state_30155__$1;
(statearr_30165_30188[(2)] = null);

(statearr_30165_30188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (5))){
var inst_30140 = cljs.core.async.close_BANG_.call(null,out);
var state_30155__$1 = state_30155;
var statearr_30166_30189 = state_30155__$1;
(statearr_30166_30189[(2)] = inst_30140);

(statearr_30166_30189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (10))){
var inst_30148 = (state_30155[(2)]);
var state_30155__$1 = (function (){var statearr_30167 = state_30155;
(statearr_30167[(8)] = inst_30148);

return statearr_30167;
})();
var statearr_30168_30190 = state_30155__$1;
(statearr_30168_30190[(2)] = null);

(statearr_30168_30190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30156 === (8))){
var inst_30137 = (state_30155[(7)]);
var state_30155__$1 = state_30155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30155__$1,(11),out,inst_30137);
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
});})(c__21723__auto___30180,out))
;
return ((function (switch__21658__auto__,c__21723__auto___30180,out){
return (function() {
var cljs$core$async$state_machine__21659__auto__ = null;
var cljs$core$async$state_machine__21659__auto____0 = (function (){
var statearr_30172 = [null,null,null,null,null,null,null,null,null];
(statearr_30172[(0)] = cljs$core$async$state_machine__21659__auto__);

(statearr_30172[(1)] = (1));

return statearr_30172;
});
var cljs$core$async$state_machine__21659__auto____1 = (function (state_30155){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_30155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e30173){if((e30173 instanceof Object)){
var ex__21662__auto__ = e30173;
var statearr_30174_30191 = state_30155;
(statearr_30174_30191[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30192 = state_30155;
state_30155 = G__30192;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$state_machine__21659__auto__ = function(state_30155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21659__auto____1.call(this,state_30155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21659__auto____0;
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21659__auto____1;
return cljs$core$async$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___30180,out))
})();
var state__21725__auto__ = (function (){var statearr_30175 = f__21724__auto__.call(null);
(statearr_30175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___30180);

return statearr_30175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___30180,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args30193 = [];
var len__19579__auto___30196 = arguments.length;
var i__19580__auto___30197 = (0);
while(true){
if((i__19580__auto___30197 < len__19579__auto___30196)){
args30193.push((arguments[i__19580__auto___30197]));

var G__30198 = (i__19580__auto___30197 + (1));
i__19580__auto___30197 = G__30198;
continue;
} else {
}
break;
}

var G__30195 = args30193.length;
switch (G__30195) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30193.length)].join('')));

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
var c__21723__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto__){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto__){
return (function (state_30365){
var state_val_30366 = (state_30365[(1)]);
if((state_val_30366 === (7))){
var inst_30361 = (state_30365[(2)]);
var state_30365__$1 = state_30365;
var statearr_30367_30408 = state_30365__$1;
(statearr_30367_30408[(2)] = inst_30361);

(statearr_30367_30408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (20))){
var inst_30331 = (state_30365[(7)]);
var inst_30342 = (state_30365[(2)]);
var inst_30343 = cljs.core.next.call(null,inst_30331);
var inst_30317 = inst_30343;
var inst_30318 = null;
var inst_30319 = (0);
var inst_30320 = (0);
var state_30365__$1 = (function (){var statearr_30368 = state_30365;
(statearr_30368[(8)] = inst_30342);

(statearr_30368[(9)] = inst_30320);

(statearr_30368[(10)] = inst_30317);

(statearr_30368[(11)] = inst_30318);

(statearr_30368[(12)] = inst_30319);

return statearr_30368;
})();
var statearr_30369_30409 = state_30365__$1;
(statearr_30369_30409[(2)] = null);

(statearr_30369_30409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (1))){
var state_30365__$1 = state_30365;
var statearr_30370_30410 = state_30365__$1;
(statearr_30370_30410[(2)] = null);

(statearr_30370_30410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (4))){
var inst_30306 = (state_30365[(13)]);
var inst_30306__$1 = (state_30365[(2)]);
var inst_30307 = (inst_30306__$1 == null);
var state_30365__$1 = (function (){var statearr_30371 = state_30365;
(statearr_30371[(13)] = inst_30306__$1);

return statearr_30371;
})();
if(cljs.core.truth_(inst_30307)){
var statearr_30372_30411 = state_30365__$1;
(statearr_30372_30411[(1)] = (5));

} else {
var statearr_30373_30412 = state_30365__$1;
(statearr_30373_30412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (15))){
var state_30365__$1 = state_30365;
var statearr_30377_30413 = state_30365__$1;
(statearr_30377_30413[(2)] = null);

(statearr_30377_30413[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (21))){
var state_30365__$1 = state_30365;
var statearr_30378_30414 = state_30365__$1;
(statearr_30378_30414[(2)] = null);

(statearr_30378_30414[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (13))){
var inst_30320 = (state_30365[(9)]);
var inst_30317 = (state_30365[(10)]);
var inst_30318 = (state_30365[(11)]);
var inst_30319 = (state_30365[(12)]);
var inst_30327 = (state_30365[(2)]);
var inst_30328 = (inst_30320 + (1));
var tmp30374 = inst_30317;
var tmp30375 = inst_30318;
var tmp30376 = inst_30319;
var inst_30317__$1 = tmp30374;
var inst_30318__$1 = tmp30375;
var inst_30319__$1 = tmp30376;
var inst_30320__$1 = inst_30328;
var state_30365__$1 = (function (){var statearr_30379 = state_30365;
(statearr_30379[(14)] = inst_30327);

(statearr_30379[(9)] = inst_30320__$1);

(statearr_30379[(10)] = inst_30317__$1);

(statearr_30379[(11)] = inst_30318__$1);

(statearr_30379[(12)] = inst_30319__$1);

return statearr_30379;
})();
var statearr_30380_30415 = state_30365__$1;
(statearr_30380_30415[(2)] = null);

(statearr_30380_30415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (22))){
var state_30365__$1 = state_30365;
var statearr_30381_30416 = state_30365__$1;
(statearr_30381_30416[(2)] = null);

(statearr_30381_30416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (6))){
var inst_30306 = (state_30365[(13)]);
var inst_30315 = f.call(null,inst_30306);
var inst_30316 = cljs.core.seq.call(null,inst_30315);
var inst_30317 = inst_30316;
var inst_30318 = null;
var inst_30319 = (0);
var inst_30320 = (0);
var state_30365__$1 = (function (){var statearr_30382 = state_30365;
(statearr_30382[(9)] = inst_30320);

(statearr_30382[(10)] = inst_30317);

(statearr_30382[(11)] = inst_30318);

(statearr_30382[(12)] = inst_30319);

return statearr_30382;
})();
var statearr_30383_30417 = state_30365__$1;
(statearr_30383_30417[(2)] = null);

(statearr_30383_30417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (17))){
var inst_30331 = (state_30365[(7)]);
var inst_30335 = cljs.core.chunk_first.call(null,inst_30331);
var inst_30336 = cljs.core.chunk_rest.call(null,inst_30331);
var inst_30337 = cljs.core.count.call(null,inst_30335);
var inst_30317 = inst_30336;
var inst_30318 = inst_30335;
var inst_30319 = inst_30337;
var inst_30320 = (0);
var state_30365__$1 = (function (){var statearr_30384 = state_30365;
(statearr_30384[(9)] = inst_30320);

(statearr_30384[(10)] = inst_30317);

(statearr_30384[(11)] = inst_30318);

(statearr_30384[(12)] = inst_30319);

return statearr_30384;
})();
var statearr_30385_30418 = state_30365__$1;
(statearr_30385_30418[(2)] = null);

(statearr_30385_30418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (3))){
var inst_30363 = (state_30365[(2)]);
var state_30365__$1 = state_30365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30365__$1,inst_30363);
} else {
if((state_val_30366 === (12))){
var inst_30351 = (state_30365[(2)]);
var state_30365__$1 = state_30365;
var statearr_30386_30419 = state_30365__$1;
(statearr_30386_30419[(2)] = inst_30351);

(statearr_30386_30419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (2))){
var state_30365__$1 = state_30365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30365__$1,(4),in$);
} else {
if((state_val_30366 === (23))){
var inst_30359 = (state_30365[(2)]);
var state_30365__$1 = state_30365;
var statearr_30387_30420 = state_30365__$1;
(statearr_30387_30420[(2)] = inst_30359);

(statearr_30387_30420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (19))){
var inst_30346 = (state_30365[(2)]);
var state_30365__$1 = state_30365;
var statearr_30388_30421 = state_30365__$1;
(statearr_30388_30421[(2)] = inst_30346);

(statearr_30388_30421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (11))){
var inst_30317 = (state_30365[(10)]);
var inst_30331 = (state_30365[(7)]);
var inst_30331__$1 = cljs.core.seq.call(null,inst_30317);
var state_30365__$1 = (function (){var statearr_30389 = state_30365;
(statearr_30389[(7)] = inst_30331__$1);

return statearr_30389;
})();
if(inst_30331__$1){
var statearr_30390_30422 = state_30365__$1;
(statearr_30390_30422[(1)] = (14));

} else {
var statearr_30391_30423 = state_30365__$1;
(statearr_30391_30423[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (9))){
var inst_30353 = (state_30365[(2)]);
var inst_30354 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30365__$1 = (function (){var statearr_30392 = state_30365;
(statearr_30392[(15)] = inst_30353);

return statearr_30392;
})();
if(cljs.core.truth_(inst_30354)){
var statearr_30393_30424 = state_30365__$1;
(statearr_30393_30424[(1)] = (21));

} else {
var statearr_30394_30425 = state_30365__$1;
(statearr_30394_30425[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (5))){
var inst_30309 = cljs.core.async.close_BANG_.call(null,out);
var state_30365__$1 = state_30365;
var statearr_30395_30426 = state_30365__$1;
(statearr_30395_30426[(2)] = inst_30309);

(statearr_30395_30426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (14))){
var inst_30331 = (state_30365[(7)]);
var inst_30333 = cljs.core.chunked_seq_QMARK_.call(null,inst_30331);
var state_30365__$1 = state_30365;
if(inst_30333){
var statearr_30396_30427 = state_30365__$1;
(statearr_30396_30427[(1)] = (17));

} else {
var statearr_30397_30428 = state_30365__$1;
(statearr_30397_30428[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (16))){
var inst_30349 = (state_30365[(2)]);
var state_30365__$1 = state_30365;
var statearr_30398_30429 = state_30365__$1;
(statearr_30398_30429[(2)] = inst_30349);

(statearr_30398_30429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30366 === (10))){
var inst_30320 = (state_30365[(9)]);
var inst_30318 = (state_30365[(11)]);
var inst_30325 = cljs.core._nth.call(null,inst_30318,inst_30320);
var state_30365__$1 = state_30365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30365__$1,(13),out,inst_30325);
} else {
if((state_val_30366 === (18))){
var inst_30331 = (state_30365[(7)]);
var inst_30340 = cljs.core.first.call(null,inst_30331);
var state_30365__$1 = state_30365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30365__$1,(20),out,inst_30340);
} else {
if((state_val_30366 === (8))){
var inst_30320 = (state_30365[(9)]);
var inst_30319 = (state_30365[(12)]);
var inst_30322 = (inst_30320 < inst_30319);
var inst_30323 = inst_30322;
var state_30365__$1 = state_30365;
if(cljs.core.truth_(inst_30323)){
var statearr_30399_30430 = state_30365__$1;
(statearr_30399_30430[(1)] = (10));

} else {
var statearr_30400_30431 = state_30365__$1;
(statearr_30400_30431[(1)] = (11));

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
});})(c__21723__auto__))
;
return ((function (switch__21658__auto__,c__21723__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21659__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21659__auto____0 = (function (){
var statearr_30404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30404[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21659__auto__);

(statearr_30404[(1)] = (1));

return statearr_30404;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21659__auto____1 = (function (state_30365){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_30365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e30405){if((e30405 instanceof Object)){
var ex__21662__auto__ = e30405;
var statearr_30406_30432 = state_30365;
(statearr_30406_30432[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30433 = state_30365;
state_30365 = G__30433;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21659__auto__ = function(state_30365){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21659__auto____1.call(this,state_30365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21659__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21659__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto__))
})();
var state__21725__auto__ = (function (){var statearr_30407 = f__21724__auto__.call(null);
(statearr_30407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto__);

return statearr_30407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto__))
);

return c__21723__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args30434 = [];
var len__19579__auto___30437 = arguments.length;
var i__19580__auto___30438 = (0);
while(true){
if((i__19580__auto___30438 < len__19579__auto___30437)){
args30434.push((arguments[i__19580__auto___30438]));

var G__30439 = (i__19580__auto___30438 + (1));
i__19580__auto___30438 = G__30439;
continue;
} else {
}
break;
}

var G__30436 = args30434.length;
switch (G__30436) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30434.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args30441 = [];
var len__19579__auto___30444 = arguments.length;
var i__19580__auto___30445 = (0);
while(true){
if((i__19580__auto___30445 < len__19579__auto___30444)){
args30441.push((arguments[i__19580__auto___30445]));

var G__30446 = (i__19580__auto___30445 + (1));
i__19580__auto___30445 = G__30446;
continue;
} else {
}
break;
}

var G__30443 = args30441.length;
switch (G__30443) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30441.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(){
var args30448 = [];
var len__19579__auto___30499 = arguments.length;
var i__19580__auto___30500 = (0);
while(true){
if((i__19580__auto___30500 < len__19579__auto___30499)){
args30448.push((arguments[i__19580__auto___30500]));

var G__30501 = (i__19580__auto___30500 + (1));
i__19580__auto___30500 = G__30501;
continue;
} else {
}
break;
}

var G__30450 = args30448.length;
switch (G__30450) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30448.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21723__auto___30503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___30503,out){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___30503,out){
return (function (state_30474){
var state_val_30475 = (state_30474[(1)]);
if((state_val_30475 === (7))){
var inst_30469 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30476_30504 = state_30474__$1;
(statearr_30476_30504[(2)] = inst_30469);

(statearr_30476_30504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (1))){
var inst_30451 = null;
var state_30474__$1 = (function (){var statearr_30477 = state_30474;
(statearr_30477[(7)] = inst_30451);

return statearr_30477;
})();
var statearr_30478_30505 = state_30474__$1;
(statearr_30478_30505[(2)] = null);

(statearr_30478_30505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (4))){
var inst_30454 = (state_30474[(8)]);
var inst_30454__$1 = (state_30474[(2)]);
var inst_30455 = (inst_30454__$1 == null);
var inst_30456 = cljs.core.not.call(null,inst_30455);
var state_30474__$1 = (function (){var statearr_30479 = state_30474;
(statearr_30479[(8)] = inst_30454__$1);

return statearr_30479;
})();
if(inst_30456){
var statearr_30480_30506 = state_30474__$1;
(statearr_30480_30506[(1)] = (5));

} else {
var statearr_30481_30507 = state_30474__$1;
(statearr_30481_30507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (6))){
var state_30474__$1 = state_30474;
var statearr_30482_30508 = state_30474__$1;
(statearr_30482_30508[(2)] = null);

(statearr_30482_30508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (3))){
var inst_30471 = (state_30474[(2)]);
var inst_30472 = cljs.core.async.close_BANG_.call(null,out);
var state_30474__$1 = (function (){var statearr_30483 = state_30474;
(statearr_30483[(9)] = inst_30471);

return statearr_30483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30474__$1,inst_30472);
} else {
if((state_val_30475 === (2))){
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30474__$1,(4),ch);
} else {
if((state_val_30475 === (11))){
var inst_30454 = (state_30474[(8)]);
var inst_30463 = (state_30474[(2)]);
var inst_30451 = inst_30454;
var state_30474__$1 = (function (){var statearr_30484 = state_30474;
(statearr_30484[(10)] = inst_30463);

(statearr_30484[(7)] = inst_30451);

return statearr_30484;
})();
var statearr_30485_30509 = state_30474__$1;
(statearr_30485_30509[(2)] = null);

(statearr_30485_30509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (9))){
var inst_30454 = (state_30474[(8)]);
var state_30474__$1 = state_30474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30474__$1,(11),out,inst_30454);
} else {
if((state_val_30475 === (5))){
var inst_30451 = (state_30474[(7)]);
var inst_30454 = (state_30474[(8)]);
var inst_30458 = cljs.core._EQ_.call(null,inst_30454,inst_30451);
var state_30474__$1 = state_30474;
if(inst_30458){
var statearr_30487_30510 = state_30474__$1;
(statearr_30487_30510[(1)] = (8));

} else {
var statearr_30488_30511 = state_30474__$1;
(statearr_30488_30511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (10))){
var inst_30466 = (state_30474[(2)]);
var state_30474__$1 = state_30474;
var statearr_30489_30512 = state_30474__$1;
(statearr_30489_30512[(2)] = inst_30466);

(statearr_30489_30512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30475 === (8))){
var inst_30451 = (state_30474[(7)]);
var tmp30486 = inst_30451;
var inst_30451__$1 = tmp30486;
var state_30474__$1 = (function (){var statearr_30490 = state_30474;
(statearr_30490[(7)] = inst_30451__$1);

return statearr_30490;
})();
var statearr_30491_30513 = state_30474__$1;
(statearr_30491_30513[(2)] = null);

(statearr_30491_30513[(1)] = (2));


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
});})(c__21723__auto___30503,out))
;
return ((function (switch__21658__auto__,c__21723__auto___30503,out){
return (function() {
var cljs$core$async$state_machine__21659__auto__ = null;
var cljs$core$async$state_machine__21659__auto____0 = (function (){
var statearr_30495 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30495[(0)] = cljs$core$async$state_machine__21659__auto__);

(statearr_30495[(1)] = (1));

return statearr_30495;
});
var cljs$core$async$state_machine__21659__auto____1 = (function (state_30474){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_30474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e30496){if((e30496 instanceof Object)){
var ex__21662__auto__ = e30496;
var statearr_30497_30514 = state_30474;
(statearr_30497_30514[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30515 = state_30474;
state_30474 = G__30515;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$state_machine__21659__auto__ = function(state_30474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21659__auto____1.call(this,state_30474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21659__auto____0;
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21659__auto____1;
return cljs$core$async$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___30503,out))
})();
var state__21725__auto__ = (function (){var statearr_30498 = f__21724__auto__.call(null);
(statearr_30498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___30503);

return statearr_30498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___30503,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args30516 = [];
var len__19579__auto___30586 = arguments.length;
var i__19580__auto___30587 = (0);
while(true){
if((i__19580__auto___30587 < len__19579__auto___30586)){
args30516.push((arguments[i__19580__auto___30587]));

var G__30588 = (i__19580__auto___30587 + (1));
i__19580__auto___30587 = G__30588;
continue;
} else {
}
break;
}

var G__30518 = args30516.length;
switch (G__30518) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30516.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21723__auto___30590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___30590,out){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___30590,out){
return (function (state_30556){
var state_val_30557 = (state_30556[(1)]);
if((state_val_30557 === (7))){
var inst_30552 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30558_30591 = state_30556__$1;
(statearr_30558_30591[(2)] = inst_30552);

(statearr_30558_30591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (1))){
var inst_30519 = (new Array(n));
var inst_30520 = inst_30519;
var inst_30521 = (0);
var state_30556__$1 = (function (){var statearr_30559 = state_30556;
(statearr_30559[(7)] = inst_30520);

(statearr_30559[(8)] = inst_30521);

return statearr_30559;
})();
var statearr_30560_30592 = state_30556__$1;
(statearr_30560_30592[(2)] = null);

(statearr_30560_30592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (4))){
var inst_30524 = (state_30556[(9)]);
var inst_30524__$1 = (state_30556[(2)]);
var inst_30525 = (inst_30524__$1 == null);
var inst_30526 = cljs.core.not.call(null,inst_30525);
var state_30556__$1 = (function (){var statearr_30561 = state_30556;
(statearr_30561[(9)] = inst_30524__$1);

return statearr_30561;
})();
if(inst_30526){
var statearr_30562_30593 = state_30556__$1;
(statearr_30562_30593[(1)] = (5));

} else {
var statearr_30563_30594 = state_30556__$1;
(statearr_30563_30594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (15))){
var inst_30546 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30564_30595 = state_30556__$1;
(statearr_30564_30595[(2)] = inst_30546);

(statearr_30564_30595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (13))){
var state_30556__$1 = state_30556;
var statearr_30565_30596 = state_30556__$1;
(statearr_30565_30596[(2)] = null);

(statearr_30565_30596[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (6))){
var inst_30521 = (state_30556[(8)]);
var inst_30542 = (inst_30521 > (0));
var state_30556__$1 = state_30556;
if(cljs.core.truth_(inst_30542)){
var statearr_30566_30597 = state_30556__$1;
(statearr_30566_30597[(1)] = (12));

} else {
var statearr_30567_30598 = state_30556__$1;
(statearr_30567_30598[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (3))){
var inst_30554 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30556__$1,inst_30554);
} else {
if((state_val_30557 === (12))){
var inst_30520 = (state_30556[(7)]);
var inst_30544 = cljs.core.vec.call(null,inst_30520);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30556__$1,(15),out,inst_30544);
} else {
if((state_val_30557 === (2))){
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30556__$1,(4),ch);
} else {
if((state_val_30557 === (11))){
var inst_30536 = (state_30556[(2)]);
var inst_30537 = (new Array(n));
var inst_30520 = inst_30537;
var inst_30521 = (0);
var state_30556__$1 = (function (){var statearr_30568 = state_30556;
(statearr_30568[(7)] = inst_30520);

(statearr_30568[(10)] = inst_30536);

(statearr_30568[(8)] = inst_30521);

return statearr_30568;
})();
var statearr_30569_30599 = state_30556__$1;
(statearr_30569_30599[(2)] = null);

(statearr_30569_30599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (9))){
var inst_30520 = (state_30556[(7)]);
var inst_30534 = cljs.core.vec.call(null,inst_30520);
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30556__$1,(11),out,inst_30534);
} else {
if((state_val_30557 === (5))){
var inst_30529 = (state_30556[(11)]);
var inst_30524 = (state_30556[(9)]);
var inst_30520 = (state_30556[(7)]);
var inst_30521 = (state_30556[(8)]);
var inst_30528 = (inst_30520[inst_30521] = inst_30524);
var inst_30529__$1 = (inst_30521 + (1));
var inst_30530 = (inst_30529__$1 < n);
var state_30556__$1 = (function (){var statearr_30570 = state_30556;
(statearr_30570[(12)] = inst_30528);

(statearr_30570[(11)] = inst_30529__$1);

return statearr_30570;
})();
if(cljs.core.truth_(inst_30530)){
var statearr_30571_30600 = state_30556__$1;
(statearr_30571_30600[(1)] = (8));

} else {
var statearr_30572_30601 = state_30556__$1;
(statearr_30572_30601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (14))){
var inst_30549 = (state_30556[(2)]);
var inst_30550 = cljs.core.async.close_BANG_.call(null,out);
var state_30556__$1 = (function (){var statearr_30574 = state_30556;
(statearr_30574[(13)] = inst_30549);

return statearr_30574;
})();
var statearr_30575_30602 = state_30556__$1;
(statearr_30575_30602[(2)] = inst_30550);

(statearr_30575_30602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (10))){
var inst_30540 = (state_30556[(2)]);
var state_30556__$1 = state_30556;
var statearr_30576_30603 = state_30556__$1;
(statearr_30576_30603[(2)] = inst_30540);

(statearr_30576_30603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30557 === (8))){
var inst_30529 = (state_30556[(11)]);
var inst_30520 = (state_30556[(7)]);
var tmp30573 = inst_30520;
var inst_30520__$1 = tmp30573;
var inst_30521 = inst_30529;
var state_30556__$1 = (function (){var statearr_30577 = state_30556;
(statearr_30577[(7)] = inst_30520__$1);

(statearr_30577[(8)] = inst_30521);

return statearr_30577;
})();
var statearr_30578_30604 = state_30556__$1;
(statearr_30578_30604[(2)] = null);

(statearr_30578_30604[(1)] = (2));


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
});})(c__21723__auto___30590,out))
;
return ((function (switch__21658__auto__,c__21723__auto___30590,out){
return (function() {
var cljs$core$async$state_machine__21659__auto__ = null;
var cljs$core$async$state_machine__21659__auto____0 = (function (){
var statearr_30582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30582[(0)] = cljs$core$async$state_machine__21659__auto__);

(statearr_30582[(1)] = (1));

return statearr_30582;
});
var cljs$core$async$state_machine__21659__auto____1 = (function (state_30556){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_30556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e30583){if((e30583 instanceof Object)){
var ex__21662__auto__ = e30583;
var statearr_30584_30605 = state_30556;
(statearr_30584_30605[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30606 = state_30556;
state_30556 = G__30606;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$state_machine__21659__auto__ = function(state_30556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21659__auto____1.call(this,state_30556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21659__auto____0;
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21659__auto____1;
return cljs$core$async$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___30590,out))
})();
var state__21725__auto__ = (function (){var statearr_30585 = f__21724__auto__.call(null);
(statearr_30585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___30590);

return statearr_30585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___30590,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args30607 = [];
var len__19579__auto___30681 = arguments.length;
var i__19580__auto___30682 = (0);
while(true){
if((i__19580__auto___30682 < len__19579__auto___30681)){
args30607.push((arguments[i__19580__auto___30682]));

var G__30683 = (i__19580__auto___30682 + (1));
i__19580__auto___30682 = G__30683;
continue;
} else {
}
break;
}

var G__30609 = args30607.length;
switch (G__30609) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30607.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21723__auto___30685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21723__auto___30685,out){
return (function (){
var f__21724__auto__ = (function (){var switch__21658__auto__ = ((function (c__21723__auto___30685,out){
return (function (state_30651){
var state_val_30652 = (state_30651[(1)]);
if((state_val_30652 === (7))){
var inst_30647 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30653_30686 = state_30651__$1;
(statearr_30653_30686[(2)] = inst_30647);

(statearr_30653_30686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (1))){
var inst_30610 = [];
var inst_30611 = inst_30610;
var inst_30612 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30651__$1 = (function (){var statearr_30654 = state_30651;
(statearr_30654[(7)] = inst_30612);

(statearr_30654[(8)] = inst_30611);

return statearr_30654;
})();
var statearr_30655_30687 = state_30651__$1;
(statearr_30655_30687[(2)] = null);

(statearr_30655_30687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (4))){
var inst_30615 = (state_30651[(9)]);
var inst_30615__$1 = (state_30651[(2)]);
var inst_30616 = (inst_30615__$1 == null);
var inst_30617 = cljs.core.not.call(null,inst_30616);
var state_30651__$1 = (function (){var statearr_30656 = state_30651;
(statearr_30656[(9)] = inst_30615__$1);

return statearr_30656;
})();
if(inst_30617){
var statearr_30657_30688 = state_30651__$1;
(statearr_30657_30688[(1)] = (5));

} else {
var statearr_30658_30689 = state_30651__$1;
(statearr_30658_30689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (15))){
var inst_30641 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30659_30690 = state_30651__$1;
(statearr_30659_30690[(2)] = inst_30641);

(statearr_30659_30690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (13))){
var state_30651__$1 = state_30651;
var statearr_30660_30691 = state_30651__$1;
(statearr_30660_30691[(2)] = null);

(statearr_30660_30691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (6))){
var inst_30611 = (state_30651[(8)]);
var inst_30636 = inst_30611.length;
var inst_30637 = (inst_30636 > (0));
var state_30651__$1 = state_30651;
if(cljs.core.truth_(inst_30637)){
var statearr_30661_30692 = state_30651__$1;
(statearr_30661_30692[(1)] = (12));

} else {
var statearr_30662_30693 = state_30651__$1;
(statearr_30662_30693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (3))){
var inst_30649 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30651__$1,inst_30649);
} else {
if((state_val_30652 === (12))){
var inst_30611 = (state_30651[(8)]);
var inst_30639 = cljs.core.vec.call(null,inst_30611);
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30651__$1,(15),out,inst_30639);
} else {
if((state_val_30652 === (2))){
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30651__$1,(4),ch);
} else {
if((state_val_30652 === (11))){
var inst_30619 = (state_30651[(10)]);
var inst_30615 = (state_30651[(9)]);
var inst_30629 = (state_30651[(2)]);
var inst_30630 = [];
var inst_30631 = inst_30630.push(inst_30615);
var inst_30611 = inst_30630;
var inst_30612 = inst_30619;
var state_30651__$1 = (function (){var statearr_30663 = state_30651;
(statearr_30663[(7)] = inst_30612);

(statearr_30663[(11)] = inst_30629);

(statearr_30663[(12)] = inst_30631);

(statearr_30663[(8)] = inst_30611);

return statearr_30663;
})();
var statearr_30664_30694 = state_30651__$1;
(statearr_30664_30694[(2)] = null);

(statearr_30664_30694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (9))){
var inst_30611 = (state_30651[(8)]);
var inst_30627 = cljs.core.vec.call(null,inst_30611);
var state_30651__$1 = state_30651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30651__$1,(11),out,inst_30627);
} else {
if((state_val_30652 === (5))){
var inst_30619 = (state_30651[(10)]);
var inst_30612 = (state_30651[(7)]);
var inst_30615 = (state_30651[(9)]);
var inst_30619__$1 = f.call(null,inst_30615);
var inst_30620 = cljs.core._EQ_.call(null,inst_30619__$1,inst_30612);
var inst_30621 = cljs.core.keyword_identical_QMARK_.call(null,inst_30612,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30622 = (inst_30620) || (inst_30621);
var state_30651__$1 = (function (){var statearr_30665 = state_30651;
(statearr_30665[(10)] = inst_30619__$1);

return statearr_30665;
})();
if(cljs.core.truth_(inst_30622)){
var statearr_30666_30695 = state_30651__$1;
(statearr_30666_30695[(1)] = (8));

} else {
var statearr_30667_30696 = state_30651__$1;
(statearr_30667_30696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (14))){
var inst_30644 = (state_30651[(2)]);
var inst_30645 = cljs.core.async.close_BANG_.call(null,out);
var state_30651__$1 = (function (){var statearr_30669 = state_30651;
(statearr_30669[(13)] = inst_30644);

return statearr_30669;
})();
var statearr_30670_30697 = state_30651__$1;
(statearr_30670_30697[(2)] = inst_30645);

(statearr_30670_30697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (10))){
var inst_30634 = (state_30651[(2)]);
var state_30651__$1 = state_30651;
var statearr_30671_30698 = state_30651__$1;
(statearr_30671_30698[(2)] = inst_30634);

(statearr_30671_30698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30652 === (8))){
var inst_30619 = (state_30651[(10)]);
var inst_30615 = (state_30651[(9)]);
var inst_30611 = (state_30651[(8)]);
var inst_30624 = inst_30611.push(inst_30615);
var tmp30668 = inst_30611;
var inst_30611__$1 = tmp30668;
var inst_30612 = inst_30619;
var state_30651__$1 = (function (){var statearr_30672 = state_30651;
(statearr_30672[(7)] = inst_30612);

(statearr_30672[(14)] = inst_30624);

(statearr_30672[(8)] = inst_30611__$1);

return statearr_30672;
})();
var statearr_30673_30699 = state_30651__$1;
(statearr_30673_30699[(2)] = null);

(statearr_30673_30699[(1)] = (2));


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
});})(c__21723__auto___30685,out))
;
return ((function (switch__21658__auto__,c__21723__auto___30685,out){
return (function() {
var cljs$core$async$state_machine__21659__auto__ = null;
var cljs$core$async$state_machine__21659__auto____0 = (function (){
var statearr_30677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30677[(0)] = cljs$core$async$state_machine__21659__auto__);

(statearr_30677[(1)] = (1));

return statearr_30677;
});
var cljs$core$async$state_machine__21659__auto____1 = (function (state_30651){
while(true){
var ret_value__21660__auto__ = (function (){try{while(true){
var result__21661__auto__ = switch__21658__auto__.call(null,state_30651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21661__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21661__auto__;
}
break;
}
}catch (e30678){if((e30678 instanceof Object)){
var ex__21662__auto__ = e30678;
var statearr_30679_30700 = state_30651;
(statearr_30679_30700[(5)] = ex__21662__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21660__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30701 = state_30651;
state_30651 = G__30701;
continue;
} else {
return ret_value__21660__auto__;
}
break;
}
});
cljs$core$async$state_machine__21659__auto__ = function(state_30651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21659__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21659__auto____1.call(this,state_30651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21659__auto____0;
cljs$core$async$state_machine__21659__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21659__auto____1;
return cljs$core$async$state_machine__21659__auto__;
})()
;})(switch__21658__auto__,c__21723__auto___30685,out))
})();
var state__21725__auto__ = (function (){var statearr_30680 = f__21724__auto__.call(null);
(statearr_30680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21723__auto___30685);

return statearr_30680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21725__auto__);
});})(c__21723__auto___30685,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map