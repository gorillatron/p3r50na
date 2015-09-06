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
if(typeof cljs.core.async.t31501 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31501 = (function (fn_handler,f,meta31502){
this.fn_handler = fn_handler;
this.f = f;
this.meta31502 = meta31502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31503,meta31502__$1){
var self__ = this;
var _31503__$1 = this;
return (new cljs.core.async.t31501(self__.fn_handler,self__.f,meta31502__$1));
});

cljs.core.async.t31501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31503){
var self__ = this;
var _31503__$1 = this;
return self__.meta31502;
});

cljs.core.async.t31501.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t31501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t31501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta31502","meta31502",-792714068,null)], null);
});

cljs.core.async.t31501.cljs$lang$type = true;

cljs.core.async.t31501.cljs$lang$ctorStr = "cljs.core.async/t31501";

cljs.core.async.t31501.cljs$lang$ctorPrWriter = (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"cljs.core.async/t31501");
});

cljs.core.async.__GT_t31501 = (function cljs$core$async$fn_handler_$___GT_t31501(fn_handler__$1,f__$1,meta31502){
return (new cljs.core.async.t31501(fn_handler__$1,f__$1,meta31502));
});

}

return (new cljs.core.async.t31501(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args31506 = [];
var len__20610__auto___31509 = arguments.length;
var i__20611__auto___31510 = (0);
while(true){
if((i__20611__auto___31510 < len__20610__auto___31509)){
args31506.push((arguments[i__20611__auto___31510]));

var G__31511 = (i__20611__auto___31510 + (1));
i__20611__auto___31510 = G__31511;
continue;
} else {
}
break;
}

var G__31508 = args31506.length;
switch (G__31508) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31506.length)].join('')));

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
var args31513 = [];
var len__20610__auto___31516 = arguments.length;
var i__20611__auto___31517 = (0);
while(true){
if((i__20611__auto___31517 < len__20610__auto___31516)){
args31513.push((arguments[i__20611__auto___31517]));

var G__31518 = (i__20611__auto___31517 + (1));
i__20611__auto___31517 = G__31518;
continue;
} else {
}
break;
}

var G__31515 = args31513.length;
switch (G__31515) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31513.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31520 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31520);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31520,ret){
return (function (){
return fn1.call(null,val_31520);
});})(val_31520,ret))
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
var args31521 = [];
var len__20610__auto___31524 = arguments.length;
var i__20611__auto___31525 = (0);
while(true){
if((i__20611__auto___31525 < len__20610__auto___31524)){
args31521.push((arguments[i__20611__auto___31525]));

var G__31526 = (i__20611__auto___31525 + (1));
i__20611__auto___31525 = G__31526;
continue;
} else {
}
break;
}

var G__31523 = args31521.length;
switch (G__31523) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31521.length)].join('')));

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
var n__20455__auto___31528 = n;
var x_31529 = (0);
while(true){
if((x_31529 < n__20455__auto___31528)){
(a[x_31529] = (0));

var G__31530 = (x_31529 + (1));
x_31529 = G__31530;
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

var G__31531 = (i + (1));
i = G__31531;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t31535 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31535 = (function (alt_flag,flag,meta31536){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31536 = meta31536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31537,meta31536__$1){
var self__ = this;
var _31537__$1 = this;
return (new cljs.core.async.t31535(self__.alt_flag,self__.flag,meta31536__$1));
});})(flag))
;

cljs.core.async.t31535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31537){
var self__ = this;
var _31537__$1 = this;
return self__.meta31536;
});})(flag))
;

cljs.core.async.t31535.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t31535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t31535.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31536","meta31536",-781438679,null)], null);
});})(flag))
;

cljs.core.async.t31535.cljs$lang$type = true;

cljs.core.async.t31535.cljs$lang$ctorStr = "cljs.core.async/t31535";

cljs.core.async.t31535.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"cljs.core.async/t31535");
});})(flag))
;

cljs.core.async.__GT_t31535 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t31535(alt_flag__$1,flag__$1,meta31536){
return (new cljs.core.async.t31535(alt_flag__$1,flag__$1,meta31536));
});})(flag))
;

}

return (new cljs.core.async.t31535(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t31541 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t31541 = (function (alt_handler,flag,cb,meta31542){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31542 = meta31542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t31541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31543,meta31542__$1){
var self__ = this;
var _31543__$1 = this;
return (new cljs.core.async.t31541(self__.alt_handler,self__.flag,self__.cb,meta31542__$1));
});

cljs.core.async.t31541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31543){
var self__ = this;
var _31543__$1 = this;
return self__.meta31542;
});

cljs.core.async.t31541.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t31541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t31541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t31541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31542","meta31542",173895790,null)], null);
});

cljs.core.async.t31541.cljs$lang$type = true;

cljs.core.async.t31541.cljs$lang$ctorStr = "cljs.core.async/t31541";

cljs.core.async.t31541.cljs$lang$ctorPrWriter = (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"cljs.core.async/t31541");
});

cljs.core.async.__GT_t31541 = (function cljs$core$async$alt_handler_$___GT_t31541(alt_handler__$1,flag__$1,cb__$1,meta31542){
return (new cljs.core.async.t31541(alt_handler__$1,flag__$1,cb__$1,meta31542));
});

}

return (new cljs.core.async.t31541(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31544_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31544_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31545_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31545_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__19571__auto__ = wport;
if(cljs.core.truth_(or__19571__auto__)){
return or__19571__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31546 = (i + (1));
i = G__31546;
continue;
}
} else {
return null;
}
break;
}
})();
var or__19571__auto__ = ret;
if(cljs.core.truth_(or__19571__auto__)){
return or__19571__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__19559__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__19559__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__19559__auto__;
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
var args__20617__auto__ = [];
var len__20610__auto___31552 = arguments.length;
var i__20611__auto___31553 = (0);
while(true){
if((i__20611__auto___31553 < len__20610__auto___31552)){
args__20617__auto__.push((arguments[i__20611__auto___31553]));

var G__31554 = (i__20611__auto___31553 + (1));
i__20611__auto___31553 = G__31554;
continue;
} else {
}
break;
}

var argseq__20618__auto__ = ((((1) < args__20617__auto__.length))?(new cljs.core.IndexedSeq(args__20617__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20618__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31549){
var map__31550 = p__31549;
var map__31550__$1 = ((((!((map__31550 == null)))?((((map__31550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31550):map__31550);
var opts = map__31550__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31547){
var G__31548 = cljs.core.first.call(null,seq31547);
var seq31547__$1 = cljs.core.next.call(null,seq31547);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31548,seq31547__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args31555 = [];
var len__20610__auto___31605 = arguments.length;
var i__20611__auto___31606 = (0);
while(true){
if((i__20611__auto___31606 < len__20610__auto___31605)){
args31555.push((arguments[i__20611__auto___31606]));

var G__31607 = (i__20611__auto___31606 + (1));
i__20611__auto___31606 = G__31607;
continue;
} else {
}
break;
}

var G__31557 = args31555.length;
switch (G__31557) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31555.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24018__auto___31609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___31609){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___31609){
return (function (state_31581){
var state_val_31582 = (state_31581[(1)]);
if((state_val_31582 === (7))){
var inst_31577 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31583_31610 = state_31581__$1;
(statearr_31583_31610[(2)] = inst_31577);

(statearr_31583_31610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (1))){
var state_31581__$1 = state_31581;
var statearr_31584_31611 = state_31581__$1;
(statearr_31584_31611[(2)] = null);

(statearr_31584_31611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (4))){
var inst_31560 = (state_31581[(7)]);
var inst_31560__$1 = (state_31581[(2)]);
var inst_31561 = (inst_31560__$1 == null);
var state_31581__$1 = (function (){var statearr_31585 = state_31581;
(statearr_31585[(7)] = inst_31560__$1);

return statearr_31585;
})();
if(cljs.core.truth_(inst_31561)){
var statearr_31586_31612 = state_31581__$1;
(statearr_31586_31612[(1)] = (5));

} else {
var statearr_31587_31613 = state_31581__$1;
(statearr_31587_31613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (13))){
var state_31581__$1 = state_31581;
var statearr_31588_31614 = state_31581__$1;
(statearr_31588_31614[(2)] = null);

(statearr_31588_31614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (6))){
var inst_31560 = (state_31581[(7)]);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31581__$1,(11),to,inst_31560);
} else {
if((state_val_31582 === (3))){
var inst_31579 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31581__$1,inst_31579);
} else {
if((state_val_31582 === (12))){
var state_31581__$1 = state_31581;
var statearr_31589_31615 = state_31581__$1;
(statearr_31589_31615[(2)] = null);

(statearr_31589_31615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (2))){
var state_31581__$1 = state_31581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31581__$1,(4),from);
} else {
if((state_val_31582 === (11))){
var inst_31570 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
if(cljs.core.truth_(inst_31570)){
var statearr_31590_31616 = state_31581__$1;
(statearr_31590_31616[(1)] = (12));

} else {
var statearr_31591_31617 = state_31581__$1;
(statearr_31591_31617[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (9))){
var state_31581__$1 = state_31581;
var statearr_31592_31618 = state_31581__$1;
(statearr_31592_31618[(2)] = null);

(statearr_31592_31618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (5))){
var state_31581__$1 = state_31581;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31593_31619 = state_31581__$1;
(statearr_31593_31619[(1)] = (8));

} else {
var statearr_31594_31620 = state_31581__$1;
(statearr_31594_31620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (14))){
var inst_31575 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31595_31621 = state_31581__$1;
(statearr_31595_31621[(2)] = inst_31575);

(statearr_31595_31621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (10))){
var inst_31567 = (state_31581[(2)]);
var state_31581__$1 = state_31581;
var statearr_31596_31622 = state_31581__$1;
(statearr_31596_31622[(2)] = inst_31567);

(statearr_31596_31622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31582 === (8))){
var inst_31564 = cljs.core.async.close_BANG_.call(null,to);
var state_31581__$1 = state_31581;
var statearr_31597_31623 = state_31581__$1;
(statearr_31597_31623[(2)] = inst_31564);

(statearr_31597_31623[(1)] = (10));


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
});})(c__24018__auto___31609))
;
return ((function (switch__23953__auto__,c__24018__auto___31609){
return (function() {
var cljs$core$async$state_machine__23954__auto__ = null;
var cljs$core$async$state_machine__23954__auto____0 = (function (){
var statearr_31601 = [null,null,null,null,null,null,null,null];
(statearr_31601[(0)] = cljs$core$async$state_machine__23954__auto__);

(statearr_31601[(1)] = (1));

return statearr_31601;
});
var cljs$core$async$state_machine__23954__auto____1 = (function (state_31581){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_31581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e31602){if((e31602 instanceof Object)){
var ex__23957__auto__ = e31602;
var statearr_31603_31624 = state_31581;
(statearr_31603_31624[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31625 = state_31581;
state_31581 = G__31625;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$state_machine__23954__auto__ = function(state_31581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23954__auto____1.call(this,state_31581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23954__auto____0;
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23954__auto____1;
return cljs$core$async$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___31609))
})();
var state__24020__auto__ = (function (){var statearr_31604 = f__24019__auto__.call(null);
(statearr_31604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___31609);

return statearr_31604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___31609))
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
return (function (p__31809){
var vec__31810 = p__31809;
var v = cljs.core.nth.call(null,vec__31810,(0),null);
var p = cljs.core.nth.call(null,vec__31810,(1),null);
var job = vec__31810;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24018__auto___31992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___31992,res,vec__31810,v,p,job,jobs,results){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___31992,res,vec__31810,v,p,job,jobs,results){
return (function (state_31815){
var state_val_31816 = (state_31815[(1)]);
if((state_val_31816 === (1))){
var state_31815__$1 = state_31815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31815__$1,(2),res,v);
} else {
if((state_val_31816 === (2))){
var inst_31812 = (state_31815[(2)]);
var inst_31813 = cljs.core.async.close_BANG_.call(null,res);
var state_31815__$1 = (function (){var statearr_31817 = state_31815;
(statearr_31817[(7)] = inst_31812);

return statearr_31817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31815__$1,inst_31813);
} else {
return null;
}
}
});})(c__24018__auto___31992,res,vec__31810,v,p,job,jobs,results))
;
return ((function (switch__23953__auto__,c__24018__auto___31992,res,vec__31810,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0 = (function (){
var statearr_31821 = [null,null,null,null,null,null,null,null];
(statearr_31821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__);

(statearr_31821[(1)] = (1));

return statearr_31821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1 = (function (state_31815){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_31815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e31822){if((e31822 instanceof Object)){
var ex__23957__auto__ = e31822;
var statearr_31823_31993 = state_31815;
(statearr_31823_31993[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31822;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31994 = state_31815;
state_31815 = G__31994;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__ = function(state_31815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1.call(this,state_31815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___31992,res,vec__31810,v,p,job,jobs,results))
})();
var state__24020__auto__ = (function (){var statearr_31824 = f__24019__auto__.call(null);
(statearr_31824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___31992);

return statearr_31824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___31992,res,vec__31810,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31825){
var vec__31826 = p__31825;
var v = cljs.core.nth.call(null,vec__31826,(0),null);
var p = cljs.core.nth.call(null,vec__31826,(1),null);
var job = vec__31826;
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
var n__20455__auto___31995 = n;
var __31996 = (0);
while(true){
if((__31996 < n__20455__auto___31995)){
var G__31827_31997 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31827_31997) {
case "compute":
var c__24018__auto___31999 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31996,c__24018__auto___31999,G__31827_31997,n__20455__auto___31995,jobs,results,process,async){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (__31996,c__24018__auto___31999,G__31827_31997,n__20455__auto___31995,jobs,results,process,async){
return (function (state_31840){
var state_val_31841 = (state_31840[(1)]);
if((state_val_31841 === (1))){
var state_31840__$1 = state_31840;
var statearr_31842_32000 = state_31840__$1;
(statearr_31842_32000[(2)] = null);

(statearr_31842_32000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (2))){
var state_31840__$1 = state_31840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31840__$1,(4),jobs);
} else {
if((state_val_31841 === (3))){
var inst_31838 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31840__$1,inst_31838);
} else {
if((state_val_31841 === (4))){
var inst_31830 = (state_31840[(2)]);
var inst_31831 = process.call(null,inst_31830);
var state_31840__$1 = state_31840;
if(cljs.core.truth_(inst_31831)){
var statearr_31843_32001 = state_31840__$1;
(statearr_31843_32001[(1)] = (5));

} else {
var statearr_31844_32002 = state_31840__$1;
(statearr_31844_32002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (5))){
var state_31840__$1 = state_31840;
var statearr_31845_32003 = state_31840__$1;
(statearr_31845_32003[(2)] = null);

(statearr_31845_32003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (6))){
var state_31840__$1 = state_31840;
var statearr_31846_32004 = state_31840__$1;
(statearr_31846_32004[(2)] = null);

(statearr_31846_32004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31841 === (7))){
var inst_31836 = (state_31840[(2)]);
var state_31840__$1 = state_31840;
var statearr_31847_32005 = state_31840__$1;
(statearr_31847_32005[(2)] = inst_31836);

(statearr_31847_32005[(1)] = (3));


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
});})(__31996,c__24018__auto___31999,G__31827_31997,n__20455__auto___31995,jobs,results,process,async))
;
return ((function (__31996,switch__23953__auto__,c__24018__auto___31999,G__31827_31997,n__20455__auto___31995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0 = (function (){
var statearr_31851 = [null,null,null,null,null,null,null];
(statearr_31851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__);

(statearr_31851[(1)] = (1));

return statearr_31851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1 = (function (state_31840){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_31840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e31852){if((e31852 instanceof Object)){
var ex__23957__auto__ = e31852;
var statearr_31853_32006 = state_31840;
(statearr_31853_32006[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32007 = state_31840;
state_31840 = G__32007;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__ = function(state_31840){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1.call(this,state_31840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__;
})()
;})(__31996,switch__23953__auto__,c__24018__auto___31999,G__31827_31997,n__20455__auto___31995,jobs,results,process,async))
})();
var state__24020__auto__ = (function (){var statearr_31854 = f__24019__auto__.call(null);
(statearr_31854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___31999);

return statearr_31854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(__31996,c__24018__auto___31999,G__31827_31997,n__20455__auto___31995,jobs,results,process,async))
);


break;
case "async":
var c__24018__auto___32008 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31996,c__24018__auto___32008,G__31827_31997,n__20455__auto___31995,jobs,results,process,async){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (__31996,c__24018__auto___32008,G__31827_31997,n__20455__auto___31995,jobs,results,process,async){
return (function (state_31867){
var state_val_31868 = (state_31867[(1)]);
if((state_val_31868 === (1))){
var state_31867__$1 = state_31867;
var statearr_31869_32009 = state_31867__$1;
(statearr_31869_32009[(2)] = null);

(statearr_31869_32009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (2))){
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31867__$1,(4),jobs);
} else {
if((state_val_31868 === (3))){
var inst_31865 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31867__$1,inst_31865);
} else {
if((state_val_31868 === (4))){
var inst_31857 = (state_31867[(2)]);
var inst_31858 = async.call(null,inst_31857);
var state_31867__$1 = state_31867;
if(cljs.core.truth_(inst_31858)){
var statearr_31870_32010 = state_31867__$1;
(statearr_31870_32010[(1)] = (5));

} else {
var statearr_31871_32011 = state_31867__$1;
(statearr_31871_32011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (5))){
var state_31867__$1 = state_31867;
var statearr_31872_32012 = state_31867__$1;
(statearr_31872_32012[(2)] = null);

(statearr_31872_32012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (6))){
var state_31867__$1 = state_31867;
var statearr_31873_32013 = state_31867__$1;
(statearr_31873_32013[(2)] = null);

(statearr_31873_32013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31868 === (7))){
var inst_31863 = (state_31867[(2)]);
var state_31867__$1 = state_31867;
var statearr_31874_32014 = state_31867__$1;
(statearr_31874_32014[(2)] = inst_31863);

(statearr_31874_32014[(1)] = (3));


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
});})(__31996,c__24018__auto___32008,G__31827_31997,n__20455__auto___31995,jobs,results,process,async))
;
return ((function (__31996,switch__23953__auto__,c__24018__auto___32008,G__31827_31997,n__20455__auto___31995,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0 = (function (){
var statearr_31878 = [null,null,null,null,null,null,null];
(statearr_31878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__);

(statearr_31878[(1)] = (1));

return statearr_31878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1 = (function (state_31867){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_31867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e31879){if((e31879 instanceof Object)){
var ex__23957__auto__ = e31879;
var statearr_31880_32015 = state_31867;
(statearr_31880_32015[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32016 = state_31867;
state_31867 = G__32016;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__ = function(state_31867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1.call(this,state_31867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__;
})()
;})(__31996,switch__23953__auto__,c__24018__auto___32008,G__31827_31997,n__20455__auto___31995,jobs,results,process,async))
})();
var state__24020__auto__ = (function (){var statearr_31881 = f__24019__auto__.call(null);
(statearr_31881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___32008);

return statearr_31881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(__31996,c__24018__auto___32008,G__31827_31997,n__20455__auto___31995,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32017 = (__31996 + (1));
__31996 = G__32017;
continue;
} else {
}
break;
}

var c__24018__auto___32018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___32018,jobs,results,process,async){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___32018,jobs,results,process,async){
return (function (state_31903){
var state_val_31904 = (state_31903[(1)]);
if((state_val_31904 === (1))){
var state_31903__$1 = state_31903;
var statearr_31905_32019 = state_31903__$1;
(statearr_31905_32019[(2)] = null);

(statearr_31905_32019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (2))){
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31903__$1,(4),from);
} else {
if((state_val_31904 === (3))){
var inst_31901 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31903__$1,inst_31901);
} else {
if((state_val_31904 === (4))){
var inst_31884 = (state_31903[(7)]);
var inst_31884__$1 = (state_31903[(2)]);
var inst_31885 = (inst_31884__$1 == null);
var state_31903__$1 = (function (){var statearr_31906 = state_31903;
(statearr_31906[(7)] = inst_31884__$1);

return statearr_31906;
})();
if(cljs.core.truth_(inst_31885)){
var statearr_31907_32020 = state_31903__$1;
(statearr_31907_32020[(1)] = (5));

} else {
var statearr_31908_32021 = state_31903__$1;
(statearr_31908_32021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (5))){
var inst_31887 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31903__$1 = state_31903;
var statearr_31909_32022 = state_31903__$1;
(statearr_31909_32022[(2)] = inst_31887);

(statearr_31909_32022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (6))){
var inst_31889 = (state_31903[(8)]);
var inst_31884 = (state_31903[(7)]);
var inst_31889__$1 = cljs.core.async.chan.call(null,(1));
var inst_31890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31891 = [inst_31884,inst_31889__$1];
var inst_31892 = (new cljs.core.PersistentVector(null,2,(5),inst_31890,inst_31891,null));
var state_31903__$1 = (function (){var statearr_31910 = state_31903;
(statearr_31910[(8)] = inst_31889__$1);

return statearr_31910;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31903__$1,(8),jobs,inst_31892);
} else {
if((state_val_31904 === (7))){
var inst_31899 = (state_31903[(2)]);
var state_31903__$1 = state_31903;
var statearr_31911_32023 = state_31903__$1;
(statearr_31911_32023[(2)] = inst_31899);

(statearr_31911_32023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31904 === (8))){
var inst_31889 = (state_31903[(8)]);
var inst_31894 = (state_31903[(2)]);
var state_31903__$1 = (function (){var statearr_31912 = state_31903;
(statearr_31912[(9)] = inst_31894);

return statearr_31912;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31903__$1,(9),results,inst_31889);
} else {
if((state_val_31904 === (9))){
var inst_31896 = (state_31903[(2)]);
var state_31903__$1 = (function (){var statearr_31913 = state_31903;
(statearr_31913[(10)] = inst_31896);

return statearr_31913;
})();
var statearr_31914_32024 = state_31903__$1;
(statearr_31914_32024[(2)] = null);

(statearr_31914_32024[(1)] = (2));


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
});})(c__24018__auto___32018,jobs,results,process,async))
;
return ((function (switch__23953__auto__,c__24018__auto___32018,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0 = (function (){
var statearr_31918 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__);

(statearr_31918[(1)] = (1));

return statearr_31918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1 = (function (state_31903){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_31903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e31919){if((e31919 instanceof Object)){
var ex__23957__auto__ = e31919;
var statearr_31920_32025 = state_31903;
(statearr_31920_32025[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32026 = state_31903;
state_31903 = G__32026;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__ = function(state_31903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1.call(this,state_31903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___32018,jobs,results,process,async))
})();
var state__24020__auto__ = (function (){var statearr_31921 = f__24019__auto__.call(null);
(statearr_31921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___32018);

return statearr_31921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___32018,jobs,results,process,async))
);


var c__24018__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto__,jobs,results,process,async){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto__,jobs,results,process,async){
return (function (state_31959){
var state_val_31960 = (state_31959[(1)]);
if((state_val_31960 === (7))){
var inst_31955 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
var statearr_31961_32027 = state_31959__$1;
(statearr_31961_32027[(2)] = inst_31955);

(statearr_31961_32027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (20))){
var state_31959__$1 = state_31959;
var statearr_31962_32028 = state_31959__$1;
(statearr_31962_32028[(2)] = null);

(statearr_31962_32028[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (1))){
var state_31959__$1 = state_31959;
var statearr_31963_32029 = state_31959__$1;
(statearr_31963_32029[(2)] = null);

(statearr_31963_32029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (4))){
var inst_31924 = (state_31959[(7)]);
var inst_31924__$1 = (state_31959[(2)]);
var inst_31925 = (inst_31924__$1 == null);
var state_31959__$1 = (function (){var statearr_31964 = state_31959;
(statearr_31964[(7)] = inst_31924__$1);

return statearr_31964;
})();
if(cljs.core.truth_(inst_31925)){
var statearr_31965_32030 = state_31959__$1;
(statearr_31965_32030[(1)] = (5));

} else {
var statearr_31966_32031 = state_31959__$1;
(statearr_31966_32031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (15))){
var inst_31937 = (state_31959[(8)]);
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31959__$1,(18),to,inst_31937);
} else {
if((state_val_31960 === (21))){
var inst_31950 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
var statearr_31967_32032 = state_31959__$1;
(statearr_31967_32032[(2)] = inst_31950);

(statearr_31967_32032[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (13))){
var inst_31952 = (state_31959[(2)]);
var state_31959__$1 = (function (){var statearr_31968 = state_31959;
(statearr_31968[(9)] = inst_31952);

return statearr_31968;
})();
var statearr_31969_32033 = state_31959__$1;
(statearr_31969_32033[(2)] = null);

(statearr_31969_32033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (6))){
var inst_31924 = (state_31959[(7)]);
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31959__$1,(11),inst_31924);
} else {
if((state_val_31960 === (17))){
var inst_31945 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
if(cljs.core.truth_(inst_31945)){
var statearr_31970_32034 = state_31959__$1;
(statearr_31970_32034[(1)] = (19));

} else {
var statearr_31971_32035 = state_31959__$1;
(statearr_31971_32035[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (3))){
var inst_31957 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31959__$1,inst_31957);
} else {
if((state_val_31960 === (12))){
var inst_31934 = (state_31959[(10)]);
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31959__$1,(14),inst_31934);
} else {
if((state_val_31960 === (2))){
var state_31959__$1 = state_31959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31959__$1,(4),results);
} else {
if((state_val_31960 === (19))){
var state_31959__$1 = state_31959;
var statearr_31972_32036 = state_31959__$1;
(statearr_31972_32036[(2)] = null);

(statearr_31972_32036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (11))){
var inst_31934 = (state_31959[(2)]);
var state_31959__$1 = (function (){var statearr_31973 = state_31959;
(statearr_31973[(10)] = inst_31934);

return statearr_31973;
})();
var statearr_31974_32037 = state_31959__$1;
(statearr_31974_32037[(2)] = null);

(statearr_31974_32037[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (9))){
var state_31959__$1 = state_31959;
var statearr_31975_32038 = state_31959__$1;
(statearr_31975_32038[(2)] = null);

(statearr_31975_32038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (5))){
var state_31959__$1 = state_31959;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31976_32039 = state_31959__$1;
(statearr_31976_32039[(1)] = (8));

} else {
var statearr_31977_32040 = state_31959__$1;
(statearr_31977_32040[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (14))){
var inst_31937 = (state_31959[(8)]);
var inst_31939 = (state_31959[(11)]);
var inst_31937__$1 = (state_31959[(2)]);
var inst_31938 = (inst_31937__$1 == null);
var inst_31939__$1 = cljs.core.not.call(null,inst_31938);
var state_31959__$1 = (function (){var statearr_31978 = state_31959;
(statearr_31978[(8)] = inst_31937__$1);

(statearr_31978[(11)] = inst_31939__$1);

return statearr_31978;
})();
if(inst_31939__$1){
var statearr_31979_32041 = state_31959__$1;
(statearr_31979_32041[(1)] = (15));

} else {
var statearr_31980_32042 = state_31959__$1;
(statearr_31980_32042[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (16))){
var inst_31939 = (state_31959[(11)]);
var state_31959__$1 = state_31959;
var statearr_31981_32043 = state_31959__$1;
(statearr_31981_32043[(2)] = inst_31939);

(statearr_31981_32043[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (10))){
var inst_31931 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
var statearr_31982_32044 = state_31959__$1;
(statearr_31982_32044[(2)] = inst_31931);

(statearr_31982_32044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (18))){
var inst_31942 = (state_31959[(2)]);
var state_31959__$1 = state_31959;
var statearr_31983_32045 = state_31959__$1;
(statearr_31983_32045[(2)] = inst_31942);

(statearr_31983_32045[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31960 === (8))){
var inst_31928 = cljs.core.async.close_BANG_.call(null,to);
var state_31959__$1 = state_31959;
var statearr_31984_32046 = state_31959__$1;
(statearr_31984_32046[(2)] = inst_31928);

(statearr_31984_32046[(1)] = (10));


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
});})(c__24018__auto__,jobs,results,process,async))
;
return ((function (switch__23953__auto__,c__24018__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0 = (function (){
var statearr_31988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__);

(statearr_31988[(1)] = (1));

return statearr_31988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1 = (function (state_31959){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_31959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e31989){if((e31989 instanceof Object)){
var ex__23957__auto__ = e31989;
var statearr_31990_32047 = state_31959;
(statearr_31990_32047[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32048 = state_31959;
state_31959 = G__32048;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__ = function(state_31959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1.call(this,state_31959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23954__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto__,jobs,results,process,async))
})();
var state__24020__auto__ = (function (){var statearr_31991 = f__24019__auto__.call(null);
(statearr_31991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_31991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto__,jobs,results,process,async))
);

return c__24018__auto__;
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
var args32049 = [];
var len__20610__auto___32052 = arguments.length;
var i__20611__auto___32053 = (0);
while(true){
if((i__20611__auto___32053 < len__20610__auto___32052)){
args32049.push((arguments[i__20611__auto___32053]));

var G__32054 = (i__20611__auto___32053 + (1));
i__20611__auto___32053 = G__32054;
continue;
} else {
}
break;
}

var G__32051 = args32049.length;
switch (G__32051) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32049.length)].join('')));

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
var args32056 = [];
var len__20610__auto___32059 = arguments.length;
var i__20611__auto___32060 = (0);
while(true){
if((i__20611__auto___32060 < len__20610__auto___32059)){
args32056.push((arguments[i__20611__auto___32060]));

var G__32061 = (i__20611__auto___32060 + (1));
i__20611__auto___32060 = G__32061;
continue;
} else {
}
break;
}

var G__32058 = args32056.length;
switch (G__32058) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32056.length)].join('')));

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
var args32063 = [];
var len__20610__auto___32116 = arguments.length;
var i__20611__auto___32117 = (0);
while(true){
if((i__20611__auto___32117 < len__20610__auto___32116)){
args32063.push((arguments[i__20611__auto___32117]));

var G__32118 = (i__20611__auto___32117 + (1));
i__20611__auto___32117 = G__32118;
continue;
} else {
}
break;
}

var G__32065 = args32063.length;
switch (G__32065) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32063.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24018__auto___32120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___32120,tc,fc){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___32120,tc,fc){
return (function (state_32091){
var state_val_32092 = (state_32091[(1)]);
if((state_val_32092 === (7))){
var inst_32087 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
var statearr_32093_32121 = state_32091__$1;
(statearr_32093_32121[(2)] = inst_32087);

(statearr_32093_32121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (1))){
var state_32091__$1 = state_32091;
var statearr_32094_32122 = state_32091__$1;
(statearr_32094_32122[(2)] = null);

(statearr_32094_32122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (4))){
var inst_32068 = (state_32091[(7)]);
var inst_32068__$1 = (state_32091[(2)]);
var inst_32069 = (inst_32068__$1 == null);
var state_32091__$1 = (function (){var statearr_32095 = state_32091;
(statearr_32095[(7)] = inst_32068__$1);

return statearr_32095;
})();
if(cljs.core.truth_(inst_32069)){
var statearr_32096_32123 = state_32091__$1;
(statearr_32096_32123[(1)] = (5));

} else {
var statearr_32097_32124 = state_32091__$1;
(statearr_32097_32124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (13))){
var state_32091__$1 = state_32091;
var statearr_32098_32125 = state_32091__$1;
(statearr_32098_32125[(2)] = null);

(statearr_32098_32125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (6))){
var inst_32068 = (state_32091[(7)]);
var inst_32074 = p.call(null,inst_32068);
var state_32091__$1 = state_32091;
if(cljs.core.truth_(inst_32074)){
var statearr_32099_32126 = state_32091__$1;
(statearr_32099_32126[(1)] = (9));

} else {
var statearr_32100_32127 = state_32091__$1;
(statearr_32100_32127[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (3))){
var inst_32089 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32091__$1,inst_32089);
} else {
if((state_val_32092 === (12))){
var state_32091__$1 = state_32091;
var statearr_32101_32128 = state_32091__$1;
(statearr_32101_32128[(2)] = null);

(statearr_32101_32128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (2))){
var state_32091__$1 = state_32091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32091__$1,(4),ch);
} else {
if((state_val_32092 === (11))){
var inst_32068 = (state_32091[(7)]);
var inst_32078 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32091__$1,(8),inst_32078,inst_32068);
} else {
if((state_val_32092 === (9))){
var state_32091__$1 = state_32091;
var statearr_32102_32129 = state_32091__$1;
(statearr_32102_32129[(2)] = tc);

(statearr_32102_32129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (5))){
var inst_32071 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32072 = cljs.core.async.close_BANG_.call(null,fc);
var state_32091__$1 = (function (){var statearr_32103 = state_32091;
(statearr_32103[(8)] = inst_32071);

return statearr_32103;
})();
var statearr_32104_32130 = state_32091__$1;
(statearr_32104_32130[(2)] = inst_32072);

(statearr_32104_32130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (14))){
var inst_32085 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
var statearr_32105_32131 = state_32091__$1;
(statearr_32105_32131[(2)] = inst_32085);

(statearr_32105_32131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (10))){
var state_32091__$1 = state_32091;
var statearr_32106_32132 = state_32091__$1;
(statearr_32106_32132[(2)] = fc);

(statearr_32106_32132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32092 === (8))){
var inst_32080 = (state_32091[(2)]);
var state_32091__$1 = state_32091;
if(cljs.core.truth_(inst_32080)){
var statearr_32107_32133 = state_32091__$1;
(statearr_32107_32133[(1)] = (12));

} else {
var statearr_32108_32134 = state_32091__$1;
(statearr_32108_32134[(1)] = (13));

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
});})(c__24018__auto___32120,tc,fc))
;
return ((function (switch__23953__auto__,c__24018__auto___32120,tc,fc){
return (function() {
var cljs$core$async$state_machine__23954__auto__ = null;
var cljs$core$async$state_machine__23954__auto____0 = (function (){
var statearr_32112 = [null,null,null,null,null,null,null,null,null];
(statearr_32112[(0)] = cljs$core$async$state_machine__23954__auto__);

(statearr_32112[(1)] = (1));

return statearr_32112;
});
var cljs$core$async$state_machine__23954__auto____1 = (function (state_32091){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_32091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e32113){if((e32113 instanceof Object)){
var ex__23957__auto__ = e32113;
var statearr_32114_32135 = state_32091;
(statearr_32114_32135[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32136 = state_32091;
state_32091 = G__32136;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$state_machine__23954__auto__ = function(state_32091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23954__auto____1.call(this,state_32091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23954__auto____0;
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23954__auto____1;
return cljs$core$async$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___32120,tc,fc))
})();
var state__24020__auto__ = (function (){var statearr_32115 = f__24019__auto__.call(null);
(statearr_32115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___32120);

return statearr_32115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___32120,tc,fc))
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
var c__24018__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto__){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto__){
return (function (state_32183){
var state_val_32184 = (state_32183[(1)]);
if((state_val_32184 === (1))){
var inst_32169 = init;
var state_32183__$1 = (function (){var statearr_32185 = state_32183;
(statearr_32185[(7)] = inst_32169);

return statearr_32185;
})();
var statearr_32186_32201 = state_32183__$1;
(statearr_32186_32201[(2)] = null);

(statearr_32186_32201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (2))){
var state_32183__$1 = state_32183;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32183__$1,(4),ch);
} else {
if((state_val_32184 === (3))){
var inst_32181 = (state_32183[(2)]);
var state_32183__$1 = state_32183;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32183__$1,inst_32181);
} else {
if((state_val_32184 === (4))){
var inst_32172 = (state_32183[(8)]);
var inst_32172__$1 = (state_32183[(2)]);
var inst_32173 = (inst_32172__$1 == null);
var state_32183__$1 = (function (){var statearr_32187 = state_32183;
(statearr_32187[(8)] = inst_32172__$1);

return statearr_32187;
})();
if(cljs.core.truth_(inst_32173)){
var statearr_32188_32202 = state_32183__$1;
(statearr_32188_32202[(1)] = (5));

} else {
var statearr_32189_32203 = state_32183__$1;
(statearr_32189_32203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (5))){
var inst_32169 = (state_32183[(7)]);
var state_32183__$1 = state_32183;
var statearr_32190_32204 = state_32183__$1;
(statearr_32190_32204[(2)] = inst_32169);

(statearr_32190_32204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (6))){
var inst_32169 = (state_32183[(7)]);
var inst_32172 = (state_32183[(8)]);
var inst_32176 = f.call(null,inst_32169,inst_32172);
var inst_32169__$1 = inst_32176;
var state_32183__$1 = (function (){var statearr_32191 = state_32183;
(statearr_32191[(7)] = inst_32169__$1);

return statearr_32191;
})();
var statearr_32192_32205 = state_32183__$1;
(statearr_32192_32205[(2)] = null);

(statearr_32192_32205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (7))){
var inst_32179 = (state_32183[(2)]);
var state_32183__$1 = state_32183;
var statearr_32193_32206 = state_32183__$1;
(statearr_32193_32206[(2)] = inst_32179);

(statearr_32193_32206[(1)] = (3));


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
});})(c__24018__auto__))
;
return ((function (switch__23953__auto__,c__24018__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23954__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23954__auto____0 = (function (){
var statearr_32197 = [null,null,null,null,null,null,null,null,null];
(statearr_32197[(0)] = cljs$core$async$reduce_$_state_machine__23954__auto__);

(statearr_32197[(1)] = (1));

return statearr_32197;
});
var cljs$core$async$reduce_$_state_machine__23954__auto____1 = (function (state_32183){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_32183);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e32198){if((e32198 instanceof Object)){
var ex__23957__auto__ = e32198;
var statearr_32199_32207 = state_32183;
(statearr_32199_32207[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32183);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32208 = state_32183;
state_32183 = G__32208;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23954__auto__ = function(state_32183){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23954__auto____1.call(this,state_32183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23954__auto____0;
cljs$core$async$reduce_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23954__auto____1;
return cljs$core$async$reduce_$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto__))
})();
var state__24020__auto__ = (function (){var statearr_32200 = f__24019__auto__.call(null);
(statearr_32200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_32200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto__))
);

return c__24018__auto__;
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
var args32209 = [];
var len__20610__auto___32261 = arguments.length;
var i__20611__auto___32262 = (0);
while(true){
if((i__20611__auto___32262 < len__20610__auto___32261)){
args32209.push((arguments[i__20611__auto___32262]));

var G__32263 = (i__20611__auto___32262 + (1));
i__20611__auto___32262 = G__32263;
continue;
} else {
}
break;
}

var G__32211 = args32209.length;
switch (G__32211) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32209.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24018__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto__){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto__){
return (function (state_32236){
var state_val_32237 = (state_32236[(1)]);
if((state_val_32237 === (7))){
var inst_32218 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32238_32265 = state_32236__$1;
(statearr_32238_32265[(2)] = inst_32218);

(statearr_32238_32265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (1))){
var inst_32212 = cljs.core.seq.call(null,coll);
var inst_32213 = inst_32212;
var state_32236__$1 = (function (){var statearr_32239 = state_32236;
(statearr_32239[(7)] = inst_32213);

return statearr_32239;
})();
var statearr_32240_32266 = state_32236__$1;
(statearr_32240_32266[(2)] = null);

(statearr_32240_32266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (4))){
var inst_32213 = (state_32236[(7)]);
var inst_32216 = cljs.core.first.call(null,inst_32213);
var state_32236__$1 = state_32236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32236__$1,(7),ch,inst_32216);
} else {
if((state_val_32237 === (13))){
var inst_32230 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32241_32267 = state_32236__$1;
(statearr_32241_32267[(2)] = inst_32230);

(statearr_32241_32267[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (6))){
var inst_32221 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
if(cljs.core.truth_(inst_32221)){
var statearr_32242_32268 = state_32236__$1;
(statearr_32242_32268[(1)] = (8));

} else {
var statearr_32243_32269 = state_32236__$1;
(statearr_32243_32269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (3))){
var inst_32234 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32236__$1,inst_32234);
} else {
if((state_val_32237 === (12))){
var state_32236__$1 = state_32236;
var statearr_32244_32270 = state_32236__$1;
(statearr_32244_32270[(2)] = null);

(statearr_32244_32270[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (2))){
var inst_32213 = (state_32236[(7)]);
var state_32236__$1 = state_32236;
if(cljs.core.truth_(inst_32213)){
var statearr_32245_32271 = state_32236__$1;
(statearr_32245_32271[(1)] = (4));

} else {
var statearr_32246_32272 = state_32236__$1;
(statearr_32246_32272[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (11))){
var inst_32227 = cljs.core.async.close_BANG_.call(null,ch);
var state_32236__$1 = state_32236;
var statearr_32247_32273 = state_32236__$1;
(statearr_32247_32273[(2)] = inst_32227);

(statearr_32247_32273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (9))){
var state_32236__$1 = state_32236;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32248_32274 = state_32236__$1;
(statearr_32248_32274[(1)] = (11));

} else {
var statearr_32249_32275 = state_32236__$1;
(statearr_32249_32275[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (5))){
var inst_32213 = (state_32236[(7)]);
var state_32236__$1 = state_32236;
var statearr_32250_32276 = state_32236__$1;
(statearr_32250_32276[(2)] = inst_32213);

(statearr_32250_32276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (10))){
var inst_32232 = (state_32236[(2)]);
var state_32236__$1 = state_32236;
var statearr_32251_32277 = state_32236__$1;
(statearr_32251_32277[(2)] = inst_32232);

(statearr_32251_32277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32237 === (8))){
var inst_32213 = (state_32236[(7)]);
var inst_32223 = cljs.core.next.call(null,inst_32213);
var inst_32213__$1 = inst_32223;
var state_32236__$1 = (function (){var statearr_32252 = state_32236;
(statearr_32252[(7)] = inst_32213__$1);

return statearr_32252;
})();
var statearr_32253_32278 = state_32236__$1;
(statearr_32253_32278[(2)] = null);

(statearr_32253_32278[(1)] = (2));


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
});})(c__24018__auto__))
;
return ((function (switch__23953__auto__,c__24018__auto__){
return (function() {
var cljs$core$async$state_machine__23954__auto__ = null;
var cljs$core$async$state_machine__23954__auto____0 = (function (){
var statearr_32257 = [null,null,null,null,null,null,null,null];
(statearr_32257[(0)] = cljs$core$async$state_machine__23954__auto__);

(statearr_32257[(1)] = (1));

return statearr_32257;
});
var cljs$core$async$state_machine__23954__auto____1 = (function (state_32236){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_32236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e32258){if((e32258 instanceof Object)){
var ex__23957__auto__ = e32258;
var statearr_32259_32279 = state_32236;
(statearr_32259_32279[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32280 = state_32236;
state_32236 = G__32280;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$state_machine__23954__auto__ = function(state_32236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23954__auto____1.call(this,state_32236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23954__auto____0;
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23954__auto____1;
return cljs$core$async$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto__))
})();
var state__24020__auto__ = (function (){var statearr_32260 = f__24019__auto__.call(null);
(statearr_32260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_32260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto__))
);

return c__24018__auto__;
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
var x__20207__auto__ = (((_ == null))?null:_);
var m__20208__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,_);
} else {
var m__20208__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,_);
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
var x__20207__auto__ = (((m == null))?null:m);
var m__20208__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20208__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__20207__auto__ = (((m == null))?null:m);
var m__20208__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,m,ch);
} else {
var m__20208__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,m,ch);
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
var x__20207__auto__ = (((m == null))?null:m);
var m__20208__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,m);
} else {
var m__20208__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t32506 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32506 = (function (mult,ch,cs,meta32507){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32507 = meta32507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32508,meta32507__$1){
var self__ = this;
var _32508__$1 = this;
return (new cljs.core.async.t32506(self__.mult,self__.ch,self__.cs,meta32507__$1));
});})(cs))
;

cljs.core.async.t32506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32508){
var self__ = this;
var _32508__$1 = this;
return self__.meta32507;
});})(cs))
;

cljs.core.async.t32506.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t32506.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t32506.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t32506.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t32506.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t32506.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32507","meta32507",-1494606313,null)], null);
});})(cs))
;

cljs.core.async.t32506.cljs$lang$type = true;

cljs.core.async.t32506.cljs$lang$ctorStr = "cljs.core.async/t32506";

cljs.core.async.t32506.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"cljs.core.async/t32506");
});})(cs))
;

cljs.core.async.__GT_t32506 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t32506(mult__$1,ch__$1,cs__$1,meta32507){
return (new cljs.core.async.t32506(mult__$1,ch__$1,cs__$1,meta32507));
});})(cs))
;

}

return (new cljs.core.async.t32506(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24018__auto___32727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___32727,cs,m,dchan,dctr,done){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___32727,cs,m,dchan,dctr,done){
return (function (state_32639){
var state_val_32640 = (state_32639[(1)]);
if((state_val_32640 === (7))){
var inst_32635 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32641_32728 = state_32639__$1;
(statearr_32641_32728[(2)] = inst_32635);

(statearr_32641_32728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (20))){
var inst_32540 = (state_32639[(7)]);
var inst_32550 = cljs.core.first.call(null,inst_32540);
var inst_32551 = cljs.core.nth.call(null,inst_32550,(0),null);
var inst_32552 = cljs.core.nth.call(null,inst_32550,(1),null);
var state_32639__$1 = (function (){var statearr_32642 = state_32639;
(statearr_32642[(8)] = inst_32551);

return statearr_32642;
})();
if(cljs.core.truth_(inst_32552)){
var statearr_32643_32729 = state_32639__$1;
(statearr_32643_32729[(1)] = (22));

} else {
var statearr_32644_32730 = state_32639__$1;
(statearr_32644_32730[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (27))){
var inst_32580 = (state_32639[(9)]);
var inst_32582 = (state_32639[(10)]);
var inst_32587 = (state_32639[(11)]);
var inst_32511 = (state_32639[(12)]);
var inst_32587__$1 = cljs.core._nth.call(null,inst_32580,inst_32582);
var inst_32588 = cljs.core.async.put_BANG_.call(null,inst_32587__$1,inst_32511,done);
var state_32639__$1 = (function (){var statearr_32645 = state_32639;
(statearr_32645[(11)] = inst_32587__$1);

return statearr_32645;
})();
if(cljs.core.truth_(inst_32588)){
var statearr_32646_32731 = state_32639__$1;
(statearr_32646_32731[(1)] = (30));

} else {
var statearr_32647_32732 = state_32639__$1;
(statearr_32647_32732[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (1))){
var state_32639__$1 = state_32639;
var statearr_32648_32733 = state_32639__$1;
(statearr_32648_32733[(2)] = null);

(statearr_32648_32733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (24))){
var inst_32540 = (state_32639[(7)]);
var inst_32557 = (state_32639[(2)]);
var inst_32558 = cljs.core.next.call(null,inst_32540);
var inst_32520 = inst_32558;
var inst_32521 = null;
var inst_32522 = (0);
var inst_32523 = (0);
var state_32639__$1 = (function (){var statearr_32649 = state_32639;
(statearr_32649[(13)] = inst_32557);

(statearr_32649[(14)] = inst_32521);

(statearr_32649[(15)] = inst_32522);

(statearr_32649[(16)] = inst_32523);

(statearr_32649[(17)] = inst_32520);

return statearr_32649;
})();
var statearr_32650_32734 = state_32639__$1;
(statearr_32650_32734[(2)] = null);

(statearr_32650_32734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (39))){
var state_32639__$1 = state_32639;
var statearr_32654_32735 = state_32639__$1;
(statearr_32654_32735[(2)] = null);

(statearr_32654_32735[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (4))){
var inst_32511 = (state_32639[(12)]);
var inst_32511__$1 = (state_32639[(2)]);
var inst_32512 = (inst_32511__$1 == null);
var state_32639__$1 = (function (){var statearr_32655 = state_32639;
(statearr_32655[(12)] = inst_32511__$1);

return statearr_32655;
})();
if(cljs.core.truth_(inst_32512)){
var statearr_32656_32736 = state_32639__$1;
(statearr_32656_32736[(1)] = (5));

} else {
var statearr_32657_32737 = state_32639__$1;
(statearr_32657_32737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (15))){
var inst_32521 = (state_32639[(14)]);
var inst_32522 = (state_32639[(15)]);
var inst_32523 = (state_32639[(16)]);
var inst_32520 = (state_32639[(17)]);
var inst_32536 = (state_32639[(2)]);
var inst_32537 = (inst_32523 + (1));
var tmp32651 = inst_32521;
var tmp32652 = inst_32522;
var tmp32653 = inst_32520;
var inst_32520__$1 = tmp32653;
var inst_32521__$1 = tmp32651;
var inst_32522__$1 = tmp32652;
var inst_32523__$1 = inst_32537;
var state_32639__$1 = (function (){var statearr_32658 = state_32639;
(statearr_32658[(14)] = inst_32521__$1);

(statearr_32658[(15)] = inst_32522__$1);

(statearr_32658[(16)] = inst_32523__$1);

(statearr_32658[(17)] = inst_32520__$1);

(statearr_32658[(18)] = inst_32536);

return statearr_32658;
})();
var statearr_32659_32738 = state_32639__$1;
(statearr_32659_32738[(2)] = null);

(statearr_32659_32738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (21))){
var inst_32561 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32663_32739 = state_32639__$1;
(statearr_32663_32739[(2)] = inst_32561);

(statearr_32663_32739[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (31))){
var inst_32587 = (state_32639[(11)]);
var inst_32591 = done.call(null,null);
var inst_32592 = cljs.core.async.untap_STAR_.call(null,m,inst_32587);
var state_32639__$1 = (function (){var statearr_32664 = state_32639;
(statearr_32664[(19)] = inst_32591);

return statearr_32664;
})();
var statearr_32665_32740 = state_32639__$1;
(statearr_32665_32740[(2)] = inst_32592);

(statearr_32665_32740[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (32))){
var inst_32579 = (state_32639[(20)]);
var inst_32581 = (state_32639[(21)]);
var inst_32580 = (state_32639[(9)]);
var inst_32582 = (state_32639[(10)]);
var inst_32594 = (state_32639[(2)]);
var inst_32595 = (inst_32582 + (1));
var tmp32660 = inst_32579;
var tmp32661 = inst_32581;
var tmp32662 = inst_32580;
var inst_32579__$1 = tmp32660;
var inst_32580__$1 = tmp32662;
var inst_32581__$1 = tmp32661;
var inst_32582__$1 = inst_32595;
var state_32639__$1 = (function (){var statearr_32666 = state_32639;
(statearr_32666[(20)] = inst_32579__$1);

(statearr_32666[(22)] = inst_32594);

(statearr_32666[(21)] = inst_32581__$1);

(statearr_32666[(9)] = inst_32580__$1);

(statearr_32666[(10)] = inst_32582__$1);

return statearr_32666;
})();
var statearr_32667_32741 = state_32639__$1;
(statearr_32667_32741[(2)] = null);

(statearr_32667_32741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (40))){
var inst_32607 = (state_32639[(23)]);
var inst_32611 = done.call(null,null);
var inst_32612 = cljs.core.async.untap_STAR_.call(null,m,inst_32607);
var state_32639__$1 = (function (){var statearr_32668 = state_32639;
(statearr_32668[(24)] = inst_32611);

return statearr_32668;
})();
var statearr_32669_32742 = state_32639__$1;
(statearr_32669_32742[(2)] = inst_32612);

(statearr_32669_32742[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (33))){
var inst_32598 = (state_32639[(25)]);
var inst_32600 = cljs.core.chunked_seq_QMARK_.call(null,inst_32598);
var state_32639__$1 = state_32639;
if(inst_32600){
var statearr_32670_32743 = state_32639__$1;
(statearr_32670_32743[(1)] = (36));

} else {
var statearr_32671_32744 = state_32639__$1;
(statearr_32671_32744[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (13))){
var inst_32530 = (state_32639[(26)]);
var inst_32533 = cljs.core.async.close_BANG_.call(null,inst_32530);
var state_32639__$1 = state_32639;
var statearr_32672_32745 = state_32639__$1;
(statearr_32672_32745[(2)] = inst_32533);

(statearr_32672_32745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (22))){
var inst_32551 = (state_32639[(8)]);
var inst_32554 = cljs.core.async.close_BANG_.call(null,inst_32551);
var state_32639__$1 = state_32639;
var statearr_32673_32746 = state_32639__$1;
(statearr_32673_32746[(2)] = inst_32554);

(statearr_32673_32746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (36))){
var inst_32598 = (state_32639[(25)]);
var inst_32602 = cljs.core.chunk_first.call(null,inst_32598);
var inst_32603 = cljs.core.chunk_rest.call(null,inst_32598);
var inst_32604 = cljs.core.count.call(null,inst_32602);
var inst_32579 = inst_32603;
var inst_32580 = inst_32602;
var inst_32581 = inst_32604;
var inst_32582 = (0);
var state_32639__$1 = (function (){var statearr_32674 = state_32639;
(statearr_32674[(20)] = inst_32579);

(statearr_32674[(21)] = inst_32581);

(statearr_32674[(9)] = inst_32580);

(statearr_32674[(10)] = inst_32582);

return statearr_32674;
})();
var statearr_32675_32747 = state_32639__$1;
(statearr_32675_32747[(2)] = null);

(statearr_32675_32747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (41))){
var inst_32598 = (state_32639[(25)]);
var inst_32614 = (state_32639[(2)]);
var inst_32615 = cljs.core.next.call(null,inst_32598);
var inst_32579 = inst_32615;
var inst_32580 = null;
var inst_32581 = (0);
var inst_32582 = (0);
var state_32639__$1 = (function (){var statearr_32676 = state_32639;
(statearr_32676[(20)] = inst_32579);

(statearr_32676[(27)] = inst_32614);

(statearr_32676[(21)] = inst_32581);

(statearr_32676[(9)] = inst_32580);

(statearr_32676[(10)] = inst_32582);

return statearr_32676;
})();
var statearr_32677_32748 = state_32639__$1;
(statearr_32677_32748[(2)] = null);

(statearr_32677_32748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (43))){
var state_32639__$1 = state_32639;
var statearr_32678_32749 = state_32639__$1;
(statearr_32678_32749[(2)] = null);

(statearr_32678_32749[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (29))){
var inst_32623 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32679_32750 = state_32639__$1;
(statearr_32679_32750[(2)] = inst_32623);

(statearr_32679_32750[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (44))){
var inst_32632 = (state_32639[(2)]);
var state_32639__$1 = (function (){var statearr_32680 = state_32639;
(statearr_32680[(28)] = inst_32632);

return statearr_32680;
})();
var statearr_32681_32751 = state_32639__$1;
(statearr_32681_32751[(2)] = null);

(statearr_32681_32751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (6))){
var inst_32571 = (state_32639[(29)]);
var inst_32570 = cljs.core.deref.call(null,cs);
var inst_32571__$1 = cljs.core.keys.call(null,inst_32570);
var inst_32572 = cljs.core.count.call(null,inst_32571__$1);
var inst_32573 = cljs.core.reset_BANG_.call(null,dctr,inst_32572);
var inst_32578 = cljs.core.seq.call(null,inst_32571__$1);
var inst_32579 = inst_32578;
var inst_32580 = null;
var inst_32581 = (0);
var inst_32582 = (0);
var state_32639__$1 = (function (){var statearr_32682 = state_32639;
(statearr_32682[(20)] = inst_32579);

(statearr_32682[(30)] = inst_32573);

(statearr_32682[(29)] = inst_32571__$1);

(statearr_32682[(21)] = inst_32581);

(statearr_32682[(9)] = inst_32580);

(statearr_32682[(10)] = inst_32582);

return statearr_32682;
})();
var statearr_32683_32752 = state_32639__$1;
(statearr_32683_32752[(2)] = null);

(statearr_32683_32752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (28))){
var inst_32579 = (state_32639[(20)]);
var inst_32598 = (state_32639[(25)]);
var inst_32598__$1 = cljs.core.seq.call(null,inst_32579);
var state_32639__$1 = (function (){var statearr_32684 = state_32639;
(statearr_32684[(25)] = inst_32598__$1);

return statearr_32684;
})();
if(inst_32598__$1){
var statearr_32685_32753 = state_32639__$1;
(statearr_32685_32753[(1)] = (33));

} else {
var statearr_32686_32754 = state_32639__$1;
(statearr_32686_32754[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (25))){
var inst_32581 = (state_32639[(21)]);
var inst_32582 = (state_32639[(10)]);
var inst_32584 = (inst_32582 < inst_32581);
var inst_32585 = inst_32584;
var state_32639__$1 = state_32639;
if(cljs.core.truth_(inst_32585)){
var statearr_32687_32755 = state_32639__$1;
(statearr_32687_32755[(1)] = (27));

} else {
var statearr_32688_32756 = state_32639__$1;
(statearr_32688_32756[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (34))){
var state_32639__$1 = state_32639;
var statearr_32689_32757 = state_32639__$1;
(statearr_32689_32757[(2)] = null);

(statearr_32689_32757[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (17))){
var state_32639__$1 = state_32639;
var statearr_32690_32758 = state_32639__$1;
(statearr_32690_32758[(2)] = null);

(statearr_32690_32758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (3))){
var inst_32637 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32639__$1,inst_32637);
} else {
if((state_val_32640 === (12))){
var inst_32566 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32691_32759 = state_32639__$1;
(statearr_32691_32759[(2)] = inst_32566);

(statearr_32691_32759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (2))){
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32639__$1,(4),ch);
} else {
if((state_val_32640 === (23))){
var state_32639__$1 = state_32639;
var statearr_32692_32760 = state_32639__$1;
(statearr_32692_32760[(2)] = null);

(statearr_32692_32760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (35))){
var inst_32621 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32693_32761 = state_32639__$1;
(statearr_32693_32761[(2)] = inst_32621);

(statearr_32693_32761[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (19))){
var inst_32540 = (state_32639[(7)]);
var inst_32544 = cljs.core.chunk_first.call(null,inst_32540);
var inst_32545 = cljs.core.chunk_rest.call(null,inst_32540);
var inst_32546 = cljs.core.count.call(null,inst_32544);
var inst_32520 = inst_32545;
var inst_32521 = inst_32544;
var inst_32522 = inst_32546;
var inst_32523 = (0);
var state_32639__$1 = (function (){var statearr_32694 = state_32639;
(statearr_32694[(14)] = inst_32521);

(statearr_32694[(15)] = inst_32522);

(statearr_32694[(16)] = inst_32523);

(statearr_32694[(17)] = inst_32520);

return statearr_32694;
})();
var statearr_32695_32762 = state_32639__$1;
(statearr_32695_32762[(2)] = null);

(statearr_32695_32762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (11))){
var inst_32540 = (state_32639[(7)]);
var inst_32520 = (state_32639[(17)]);
var inst_32540__$1 = cljs.core.seq.call(null,inst_32520);
var state_32639__$1 = (function (){var statearr_32696 = state_32639;
(statearr_32696[(7)] = inst_32540__$1);

return statearr_32696;
})();
if(inst_32540__$1){
var statearr_32697_32763 = state_32639__$1;
(statearr_32697_32763[(1)] = (16));

} else {
var statearr_32698_32764 = state_32639__$1;
(statearr_32698_32764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (9))){
var inst_32568 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32699_32765 = state_32639__$1;
(statearr_32699_32765[(2)] = inst_32568);

(statearr_32699_32765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (5))){
var inst_32518 = cljs.core.deref.call(null,cs);
var inst_32519 = cljs.core.seq.call(null,inst_32518);
var inst_32520 = inst_32519;
var inst_32521 = null;
var inst_32522 = (0);
var inst_32523 = (0);
var state_32639__$1 = (function (){var statearr_32700 = state_32639;
(statearr_32700[(14)] = inst_32521);

(statearr_32700[(15)] = inst_32522);

(statearr_32700[(16)] = inst_32523);

(statearr_32700[(17)] = inst_32520);

return statearr_32700;
})();
var statearr_32701_32766 = state_32639__$1;
(statearr_32701_32766[(2)] = null);

(statearr_32701_32766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (14))){
var state_32639__$1 = state_32639;
var statearr_32702_32767 = state_32639__$1;
(statearr_32702_32767[(2)] = null);

(statearr_32702_32767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (45))){
var inst_32629 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32703_32768 = state_32639__$1;
(statearr_32703_32768[(2)] = inst_32629);

(statearr_32703_32768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (26))){
var inst_32571 = (state_32639[(29)]);
var inst_32625 = (state_32639[(2)]);
var inst_32626 = cljs.core.seq.call(null,inst_32571);
var state_32639__$1 = (function (){var statearr_32704 = state_32639;
(statearr_32704[(31)] = inst_32625);

return statearr_32704;
})();
if(inst_32626){
var statearr_32705_32769 = state_32639__$1;
(statearr_32705_32769[(1)] = (42));

} else {
var statearr_32706_32770 = state_32639__$1;
(statearr_32706_32770[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (16))){
var inst_32540 = (state_32639[(7)]);
var inst_32542 = cljs.core.chunked_seq_QMARK_.call(null,inst_32540);
var state_32639__$1 = state_32639;
if(inst_32542){
var statearr_32707_32771 = state_32639__$1;
(statearr_32707_32771[(1)] = (19));

} else {
var statearr_32708_32772 = state_32639__$1;
(statearr_32708_32772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (38))){
var inst_32618 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32709_32773 = state_32639__$1;
(statearr_32709_32773[(2)] = inst_32618);

(statearr_32709_32773[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (30))){
var state_32639__$1 = state_32639;
var statearr_32710_32774 = state_32639__$1;
(statearr_32710_32774[(2)] = null);

(statearr_32710_32774[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (10))){
var inst_32521 = (state_32639[(14)]);
var inst_32523 = (state_32639[(16)]);
var inst_32529 = cljs.core._nth.call(null,inst_32521,inst_32523);
var inst_32530 = cljs.core.nth.call(null,inst_32529,(0),null);
var inst_32531 = cljs.core.nth.call(null,inst_32529,(1),null);
var state_32639__$1 = (function (){var statearr_32711 = state_32639;
(statearr_32711[(26)] = inst_32530);

return statearr_32711;
})();
if(cljs.core.truth_(inst_32531)){
var statearr_32712_32775 = state_32639__$1;
(statearr_32712_32775[(1)] = (13));

} else {
var statearr_32713_32776 = state_32639__$1;
(statearr_32713_32776[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (18))){
var inst_32564 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32714_32777 = state_32639__$1;
(statearr_32714_32777[(2)] = inst_32564);

(statearr_32714_32777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (42))){
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32639__$1,(45),dchan);
} else {
if((state_val_32640 === (37))){
var inst_32598 = (state_32639[(25)]);
var inst_32607 = (state_32639[(23)]);
var inst_32511 = (state_32639[(12)]);
var inst_32607__$1 = cljs.core.first.call(null,inst_32598);
var inst_32608 = cljs.core.async.put_BANG_.call(null,inst_32607__$1,inst_32511,done);
var state_32639__$1 = (function (){var statearr_32715 = state_32639;
(statearr_32715[(23)] = inst_32607__$1);

return statearr_32715;
})();
if(cljs.core.truth_(inst_32608)){
var statearr_32716_32778 = state_32639__$1;
(statearr_32716_32778[(1)] = (39));

} else {
var statearr_32717_32779 = state_32639__$1;
(statearr_32717_32779[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (8))){
var inst_32522 = (state_32639[(15)]);
var inst_32523 = (state_32639[(16)]);
var inst_32525 = (inst_32523 < inst_32522);
var inst_32526 = inst_32525;
var state_32639__$1 = state_32639;
if(cljs.core.truth_(inst_32526)){
var statearr_32718_32780 = state_32639__$1;
(statearr_32718_32780[(1)] = (10));

} else {
var statearr_32719_32781 = state_32639__$1;
(statearr_32719_32781[(1)] = (11));

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
});})(c__24018__auto___32727,cs,m,dchan,dctr,done))
;
return ((function (switch__23953__auto__,c__24018__auto___32727,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23954__auto__ = null;
var cljs$core$async$mult_$_state_machine__23954__auto____0 = (function (){
var statearr_32723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32723[(0)] = cljs$core$async$mult_$_state_machine__23954__auto__);

(statearr_32723[(1)] = (1));

return statearr_32723;
});
var cljs$core$async$mult_$_state_machine__23954__auto____1 = (function (state_32639){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_32639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e32724){if((e32724 instanceof Object)){
var ex__23957__auto__ = e32724;
var statearr_32725_32782 = state_32639;
(statearr_32725_32782[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32783 = state_32639;
state_32639 = G__32783;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23954__auto__ = function(state_32639){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23954__auto____1.call(this,state_32639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23954__auto____0;
cljs$core$async$mult_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23954__auto____1;
return cljs$core$async$mult_$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___32727,cs,m,dchan,dctr,done))
})();
var state__24020__auto__ = (function (){var statearr_32726 = f__24019__auto__.call(null);
(statearr_32726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___32727);

return statearr_32726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___32727,cs,m,dchan,dctr,done))
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
var args32784 = [];
var len__20610__auto___32787 = arguments.length;
var i__20611__auto___32788 = (0);
while(true){
if((i__20611__auto___32788 < len__20610__auto___32787)){
args32784.push((arguments[i__20611__auto___32788]));

var G__32789 = (i__20611__auto___32788 + (1));
i__20611__auto___32788 = G__32789;
continue;
} else {
}
break;
}

var G__32786 = args32784.length;
switch (G__32786) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32784.length)].join('')));

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
var x__20207__auto__ = (((m == null))?null:m);
var m__20208__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,m,ch);
} else {
var m__20208__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,m,ch);
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
var x__20207__auto__ = (((m == null))?null:m);
var m__20208__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,m,ch);
} else {
var m__20208__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,m,ch);
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
var x__20207__auto__ = (((m == null))?null:m);
var m__20208__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,m);
} else {
var m__20208__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,m);
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
var x__20207__auto__ = (((m == null))?null:m);
var m__20208__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,m,state_map);
} else {
var m__20208__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,m,state_map);
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
var x__20207__auto__ = (((m == null))?null:m);
var m__20208__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,m,mode);
} else {
var m__20208__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__20617__auto__ = [];
var len__20610__auto___32803 = arguments.length;
var i__20611__auto___32804 = (0);
while(true){
if((i__20611__auto___32804 < len__20610__auto___32803)){
args__20617__auto__.push((arguments[i__20611__auto___32804]));

var G__32805 = (i__20611__auto___32804 + (1));
i__20611__auto___32804 = G__32805;
continue;
} else {
}
break;
}

var argseq__20618__auto__ = ((((3) < args__20617__auto__.length))?(new cljs.core.IndexedSeq(args__20617__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20618__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32797){
var map__32798 = p__32797;
var map__32798__$1 = ((((!((map__32798 == null)))?((((map__32798.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32798.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32798):map__32798);
var opts = map__32798__$1;
var statearr_32800_32806 = state;
(statearr_32800_32806[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__32798,map__32798__$1,opts){
return (function (val){
var statearr_32801_32807 = state;
(statearr_32801_32807[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32798,map__32798__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_32802_32808 = state;
(statearr_32802_32808[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32793){
var G__32794 = cljs.core.first.call(null,seq32793);
var seq32793__$1 = cljs.core.next.call(null,seq32793);
var G__32795 = cljs.core.first.call(null,seq32793__$1);
var seq32793__$2 = cljs.core.next.call(null,seq32793__$1);
var G__32796 = cljs.core.first.call(null,seq32793__$2);
var seq32793__$3 = cljs.core.next.call(null,seq32793__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32794,G__32795,G__32796,seq32793__$3);
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
if(typeof cljs.core.async.t32972 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t32972 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32973){
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
this.meta32973 = meta32973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t32972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32974,meta32973__$1){
var self__ = this;
var _32974__$1 = this;
return (new cljs.core.async.t32972(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32973__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32974){
var self__ = this;
var _32974__$1 = this;
return self__.meta32973;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32972.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t32972.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32972.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t32972.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32972.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32972.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32972.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32972.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t32972.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32973","meta32973",2052404165,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t32972.cljs$lang$type = true;

cljs.core.async.t32972.cljs$lang$ctorStr = "cljs.core.async/t32972";

cljs.core.async.t32972.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"cljs.core.async/t32972");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t32972 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t32972(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32973){
return (new cljs.core.async.t32972(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32973));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t32972(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24018__auto___33135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33072){
var state_val_33073 = (state_33072[(1)]);
if((state_val_33073 === (7))){
var inst_32990 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33074_33136 = state_33072__$1;
(statearr_33074_33136[(2)] = inst_32990);

(statearr_33074_33136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (20))){
var inst_33002 = (state_33072[(7)]);
var state_33072__$1 = state_33072;
var statearr_33075_33137 = state_33072__$1;
(statearr_33075_33137[(2)] = inst_33002);

(statearr_33075_33137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (27))){
var state_33072__$1 = state_33072;
var statearr_33076_33138 = state_33072__$1;
(statearr_33076_33138[(2)] = null);

(statearr_33076_33138[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (1))){
var inst_32978 = (state_33072[(8)]);
var inst_32978__$1 = calc_state.call(null);
var inst_32980 = (inst_32978__$1 == null);
var inst_32981 = cljs.core.not.call(null,inst_32980);
var state_33072__$1 = (function (){var statearr_33077 = state_33072;
(statearr_33077[(8)] = inst_32978__$1);

return statearr_33077;
})();
if(inst_32981){
var statearr_33078_33139 = state_33072__$1;
(statearr_33078_33139[(1)] = (2));

} else {
var statearr_33079_33140 = state_33072__$1;
(statearr_33079_33140[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (24))){
var inst_33032 = (state_33072[(9)]);
var inst_33025 = (state_33072[(10)]);
var inst_33046 = (state_33072[(11)]);
var inst_33046__$1 = inst_33025.call(null,inst_33032);
var state_33072__$1 = (function (){var statearr_33080 = state_33072;
(statearr_33080[(11)] = inst_33046__$1);

return statearr_33080;
})();
if(cljs.core.truth_(inst_33046__$1)){
var statearr_33081_33141 = state_33072__$1;
(statearr_33081_33141[(1)] = (29));

} else {
var statearr_33082_33142 = state_33072__$1;
(statearr_33082_33142[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (4))){
var inst_32993 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
if(cljs.core.truth_(inst_32993)){
var statearr_33083_33143 = state_33072__$1;
(statearr_33083_33143[(1)] = (8));

} else {
var statearr_33084_33144 = state_33072__$1;
(statearr_33084_33144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (15))){
var inst_33019 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
if(cljs.core.truth_(inst_33019)){
var statearr_33085_33145 = state_33072__$1;
(statearr_33085_33145[(1)] = (19));

} else {
var statearr_33086_33146 = state_33072__$1;
(statearr_33086_33146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (21))){
var inst_33024 = (state_33072[(12)]);
var inst_33024__$1 = (state_33072[(2)]);
var inst_33025 = cljs.core.get.call(null,inst_33024__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33026 = cljs.core.get.call(null,inst_33024__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33027 = cljs.core.get.call(null,inst_33024__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33072__$1 = (function (){var statearr_33087 = state_33072;
(statearr_33087[(10)] = inst_33025);

(statearr_33087[(13)] = inst_33026);

(statearr_33087[(12)] = inst_33024__$1);

return statearr_33087;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33072__$1,(22),inst_33027);
} else {
if((state_val_33073 === (31))){
var inst_33054 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
if(cljs.core.truth_(inst_33054)){
var statearr_33088_33147 = state_33072__$1;
(statearr_33088_33147[(1)] = (32));

} else {
var statearr_33089_33148 = state_33072__$1;
(statearr_33089_33148[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (32))){
var inst_33031 = (state_33072[(14)]);
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33072__$1,(35),out,inst_33031);
} else {
if((state_val_33073 === (33))){
var inst_33024 = (state_33072[(12)]);
var inst_33002 = inst_33024;
var state_33072__$1 = (function (){var statearr_33090 = state_33072;
(statearr_33090[(7)] = inst_33002);

return statearr_33090;
})();
var statearr_33091_33149 = state_33072__$1;
(statearr_33091_33149[(2)] = null);

(statearr_33091_33149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (13))){
var inst_33002 = (state_33072[(7)]);
var inst_33009 = inst_33002.cljs$lang$protocol_mask$partition0$;
var inst_33010 = (inst_33009 & (64));
var inst_33011 = inst_33002.cljs$core$ISeq$;
var inst_33012 = (inst_33010) || (inst_33011);
var state_33072__$1 = state_33072;
if(cljs.core.truth_(inst_33012)){
var statearr_33092_33150 = state_33072__$1;
(statearr_33092_33150[(1)] = (16));

} else {
var statearr_33093_33151 = state_33072__$1;
(statearr_33093_33151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (22))){
var inst_33032 = (state_33072[(9)]);
var inst_33031 = (state_33072[(14)]);
var inst_33030 = (state_33072[(2)]);
var inst_33031__$1 = cljs.core.nth.call(null,inst_33030,(0),null);
var inst_33032__$1 = cljs.core.nth.call(null,inst_33030,(1),null);
var inst_33033 = (inst_33031__$1 == null);
var inst_33034 = cljs.core._EQ_.call(null,inst_33032__$1,change);
var inst_33035 = (inst_33033) || (inst_33034);
var state_33072__$1 = (function (){var statearr_33094 = state_33072;
(statearr_33094[(9)] = inst_33032__$1);

(statearr_33094[(14)] = inst_33031__$1);

return statearr_33094;
})();
if(cljs.core.truth_(inst_33035)){
var statearr_33095_33152 = state_33072__$1;
(statearr_33095_33152[(1)] = (23));

} else {
var statearr_33096_33153 = state_33072__$1;
(statearr_33096_33153[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (36))){
var inst_33024 = (state_33072[(12)]);
var inst_33002 = inst_33024;
var state_33072__$1 = (function (){var statearr_33097 = state_33072;
(statearr_33097[(7)] = inst_33002);

return statearr_33097;
})();
var statearr_33098_33154 = state_33072__$1;
(statearr_33098_33154[(2)] = null);

(statearr_33098_33154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (29))){
var inst_33046 = (state_33072[(11)]);
var state_33072__$1 = state_33072;
var statearr_33099_33155 = state_33072__$1;
(statearr_33099_33155[(2)] = inst_33046);

(statearr_33099_33155[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (6))){
var state_33072__$1 = state_33072;
var statearr_33100_33156 = state_33072__$1;
(statearr_33100_33156[(2)] = false);

(statearr_33100_33156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (28))){
var inst_33042 = (state_33072[(2)]);
var inst_33043 = calc_state.call(null);
var inst_33002 = inst_33043;
var state_33072__$1 = (function (){var statearr_33101 = state_33072;
(statearr_33101[(15)] = inst_33042);

(statearr_33101[(7)] = inst_33002);

return statearr_33101;
})();
var statearr_33102_33157 = state_33072__$1;
(statearr_33102_33157[(2)] = null);

(statearr_33102_33157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (25))){
var inst_33068 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33103_33158 = state_33072__$1;
(statearr_33103_33158[(2)] = inst_33068);

(statearr_33103_33158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (34))){
var inst_33066 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33104_33159 = state_33072__$1;
(statearr_33104_33159[(2)] = inst_33066);

(statearr_33104_33159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (17))){
var state_33072__$1 = state_33072;
var statearr_33105_33160 = state_33072__$1;
(statearr_33105_33160[(2)] = false);

(statearr_33105_33160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (3))){
var state_33072__$1 = state_33072;
var statearr_33106_33161 = state_33072__$1;
(statearr_33106_33161[(2)] = false);

(statearr_33106_33161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (12))){
var inst_33070 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33072__$1,inst_33070);
} else {
if((state_val_33073 === (2))){
var inst_32978 = (state_33072[(8)]);
var inst_32983 = inst_32978.cljs$lang$protocol_mask$partition0$;
var inst_32984 = (inst_32983 & (64));
var inst_32985 = inst_32978.cljs$core$ISeq$;
var inst_32986 = (inst_32984) || (inst_32985);
var state_33072__$1 = state_33072;
if(cljs.core.truth_(inst_32986)){
var statearr_33107_33162 = state_33072__$1;
(statearr_33107_33162[(1)] = (5));

} else {
var statearr_33108_33163 = state_33072__$1;
(statearr_33108_33163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (23))){
var inst_33031 = (state_33072[(14)]);
var inst_33037 = (inst_33031 == null);
var state_33072__$1 = state_33072;
if(cljs.core.truth_(inst_33037)){
var statearr_33109_33164 = state_33072__$1;
(statearr_33109_33164[(1)] = (26));

} else {
var statearr_33110_33165 = state_33072__$1;
(statearr_33110_33165[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (35))){
var inst_33057 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
if(cljs.core.truth_(inst_33057)){
var statearr_33111_33166 = state_33072__$1;
(statearr_33111_33166[(1)] = (36));

} else {
var statearr_33112_33167 = state_33072__$1;
(statearr_33112_33167[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (19))){
var inst_33002 = (state_33072[(7)]);
var inst_33021 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33002);
var state_33072__$1 = state_33072;
var statearr_33113_33168 = state_33072__$1;
(statearr_33113_33168[(2)] = inst_33021);

(statearr_33113_33168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (11))){
var inst_33002 = (state_33072[(7)]);
var inst_33006 = (inst_33002 == null);
var inst_33007 = cljs.core.not.call(null,inst_33006);
var state_33072__$1 = state_33072;
if(inst_33007){
var statearr_33114_33169 = state_33072__$1;
(statearr_33114_33169[(1)] = (13));

} else {
var statearr_33115_33170 = state_33072__$1;
(statearr_33115_33170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (9))){
var inst_32978 = (state_33072[(8)]);
var state_33072__$1 = state_33072;
var statearr_33116_33171 = state_33072__$1;
(statearr_33116_33171[(2)] = inst_32978);

(statearr_33116_33171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (5))){
var state_33072__$1 = state_33072;
var statearr_33117_33172 = state_33072__$1;
(statearr_33117_33172[(2)] = true);

(statearr_33117_33172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (14))){
var state_33072__$1 = state_33072;
var statearr_33118_33173 = state_33072__$1;
(statearr_33118_33173[(2)] = false);

(statearr_33118_33173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (26))){
var inst_33032 = (state_33072[(9)]);
var inst_33039 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33032);
var state_33072__$1 = state_33072;
var statearr_33119_33174 = state_33072__$1;
(statearr_33119_33174[(2)] = inst_33039);

(statearr_33119_33174[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (16))){
var state_33072__$1 = state_33072;
var statearr_33120_33175 = state_33072__$1;
(statearr_33120_33175[(2)] = true);

(statearr_33120_33175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (38))){
var inst_33062 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33121_33176 = state_33072__$1;
(statearr_33121_33176[(2)] = inst_33062);

(statearr_33121_33176[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (30))){
var inst_33032 = (state_33072[(9)]);
var inst_33025 = (state_33072[(10)]);
var inst_33026 = (state_33072[(13)]);
var inst_33049 = cljs.core.empty_QMARK_.call(null,inst_33025);
var inst_33050 = inst_33026.call(null,inst_33032);
var inst_33051 = cljs.core.not.call(null,inst_33050);
var inst_33052 = (inst_33049) && (inst_33051);
var state_33072__$1 = state_33072;
var statearr_33122_33177 = state_33072__$1;
(statearr_33122_33177[(2)] = inst_33052);

(statearr_33122_33177[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (10))){
var inst_32978 = (state_33072[(8)]);
var inst_32998 = (state_33072[(2)]);
var inst_32999 = cljs.core.get.call(null,inst_32998,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33000 = cljs.core.get.call(null,inst_32998,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33001 = cljs.core.get.call(null,inst_32998,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33002 = inst_32978;
var state_33072__$1 = (function (){var statearr_33123 = state_33072;
(statearr_33123[(7)] = inst_33002);

(statearr_33123[(16)] = inst_32999);

(statearr_33123[(17)] = inst_33001);

(statearr_33123[(18)] = inst_33000);

return statearr_33123;
})();
var statearr_33124_33178 = state_33072__$1;
(statearr_33124_33178[(2)] = null);

(statearr_33124_33178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (18))){
var inst_33016 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33125_33179 = state_33072__$1;
(statearr_33125_33179[(2)] = inst_33016);

(statearr_33125_33179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (37))){
var state_33072__$1 = state_33072;
var statearr_33126_33180 = state_33072__$1;
(statearr_33126_33180[(2)] = null);

(statearr_33126_33180[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (8))){
var inst_32978 = (state_33072[(8)]);
var inst_32995 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32978);
var state_33072__$1 = state_33072;
var statearr_33127_33181 = state_33072__$1;
(statearr_33127_33181[(2)] = inst_32995);

(statearr_33127_33181[(1)] = (10));


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
});})(c__24018__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23953__auto__,c__24018__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23954__auto__ = null;
var cljs$core$async$mix_$_state_machine__23954__auto____0 = (function (){
var statearr_33131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33131[(0)] = cljs$core$async$mix_$_state_machine__23954__auto__);

(statearr_33131[(1)] = (1));

return statearr_33131;
});
var cljs$core$async$mix_$_state_machine__23954__auto____1 = (function (state_33072){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_33072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e33132){if((e33132 instanceof Object)){
var ex__23957__auto__ = e33132;
var statearr_33133_33182 = state_33072;
(statearr_33133_33182[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33183 = state_33072;
state_33072 = G__33183;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23954__auto__ = function(state_33072){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23954__auto____1.call(this,state_33072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23954__auto____0;
cljs$core$async$mix_$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23954__auto____1;
return cljs$core$async$mix_$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24020__auto__ = (function (){var statearr_33134 = f__24019__auto__.call(null);
(statearr_33134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___33135);

return statearr_33134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__20207__auto__ = (((p == null))?null:p);
var m__20208__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20208__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__20207__auto__ = (((p == null))?null:p);
var m__20208__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,p,v,ch);
} else {
var m__20208__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args33186 = [];
var len__20610__auto___33189 = arguments.length;
var i__20611__auto___33190 = (0);
while(true){
if((i__20611__auto___33190 < len__20610__auto___33189)){
args33186.push((arguments[i__20611__auto___33190]));

var G__33191 = (i__20611__auto___33190 + (1));
i__20611__auto___33190 = G__33191;
continue;
} else {
}
break;
}

var G__33188 = args33186.length;
switch (G__33188) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33186.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20207__auto__ = (((p == null))?null:p);
var m__20208__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,p);
} else {
var m__20208__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,p);
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
var x__20207__auto__ = (((p == null))?null:p);
var m__20208__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20207__auto__)]);
if(!((m__20208__auto__ == null))){
return m__20208__auto__.call(null,p,v);
} else {
var m__20208__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20208__auto____$1 == null))){
return m__20208__auto____$1.call(null,p,v);
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
var args33194 = [];
var len__20610__auto___33319 = arguments.length;
var i__20611__auto___33320 = (0);
while(true){
if((i__20611__auto___33320 < len__20610__auto___33319)){
args33194.push((arguments[i__20611__auto___33320]));

var G__33321 = (i__20611__auto___33320 + (1));
i__20611__auto___33320 = G__33321;
continue;
} else {
}
break;
}

var G__33196 = args33194.length;
switch (G__33196) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33194.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__19571__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__19571__auto__)){
return or__19571__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__19571__auto__,mults){
return (function (p1__33193_SHARP_){
if(cljs.core.truth_(p1__33193_SHARP_.call(null,topic))){
return p1__33193_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33193_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__19571__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t33197 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33197 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33198){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33198 = meta33198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33199,meta33198__$1){
var self__ = this;
var _33199__$1 = this;
return (new cljs.core.async.t33197(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33198__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t33197.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33199){
var self__ = this;
var _33199__$1 = this;
return self__.meta33198;
});})(mults,ensure_mult))
;

cljs.core.async.t33197.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t33197.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t33197.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t33197.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t33197.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t33197.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t33197.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t33197.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33198","meta33198",-1356973235,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t33197.cljs$lang$type = true;

cljs.core.async.t33197.cljs$lang$ctorStr = "cljs.core.async/t33197";

cljs.core.async.t33197.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"cljs.core.async/t33197");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t33197 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t33197(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33198){
return (new cljs.core.async.t33197(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33198));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t33197(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24018__auto___33323 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___33323,mults,ensure_mult,p){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___33323,mults,ensure_mult,p){
return (function (state_33271){
var state_val_33272 = (state_33271[(1)]);
if((state_val_33272 === (7))){
var inst_33267 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33273_33324 = state_33271__$1;
(statearr_33273_33324[(2)] = inst_33267);

(statearr_33273_33324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (20))){
var state_33271__$1 = state_33271;
var statearr_33274_33325 = state_33271__$1;
(statearr_33274_33325[(2)] = null);

(statearr_33274_33325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (1))){
var state_33271__$1 = state_33271;
var statearr_33275_33326 = state_33271__$1;
(statearr_33275_33326[(2)] = null);

(statearr_33275_33326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (24))){
var inst_33250 = (state_33271[(7)]);
var inst_33259 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33250);
var state_33271__$1 = state_33271;
var statearr_33276_33327 = state_33271__$1;
(statearr_33276_33327[(2)] = inst_33259);

(statearr_33276_33327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (4))){
var inst_33202 = (state_33271[(8)]);
var inst_33202__$1 = (state_33271[(2)]);
var inst_33203 = (inst_33202__$1 == null);
var state_33271__$1 = (function (){var statearr_33277 = state_33271;
(statearr_33277[(8)] = inst_33202__$1);

return statearr_33277;
})();
if(cljs.core.truth_(inst_33203)){
var statearr_33278_33328 = state_33271__$1;
(statearr_33278_33328[(1)] = (5));

} else {
var statearr_33279_33329 = state_33271__$1;
(statearr_33279_33329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (15))){
var inst_33244 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33280_33330 = state_33271__$1;
(statearr_33280_33330[(2)] = inst_33244);

(statearr_33280_33330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (21))){
var inst_33264 = (state_33271[(2)]);
var state_33271__$1 = (function (){var statearr_33281 = state_33271;
(statearr_33281[(9)] = inst_33264);

return statearr_33281;
})();
var statearr_33282_33331 = state_33271__$1;
(statearr_33282_33331[(2)] = null);

(statearr_33282_33331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (13))){
var inst_33226 = (state_33271[(10)]);
var inst_33228 = cljs.core.chunked_seq_QMARK_.call(null,inst_33226);
var state_33271__$1 = state_33271;
if(inst_33228){
var statearr_33283_33332 = state_33271__$1;
(statearr_33283_33332[(1)] = (16));

} else {
var statearr_33284_33333 = state_33271__$1;
(statearr_33284_33333[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (22))){
var inst_33256 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
if(cljs.core.truth_(inst_33256)){
var statearr_33285_33334 = state_33271__$1;
(statearr_33285_33334[(1)] = (23));

} else {
var statearr_33286_33335 = state_33271__$1;
(statearr_33286_33335[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (6))){
var inst_33202 = (state_33271[(8)]);
var inst_33250 = (state_33271[(7)]);
var inst_33252 = (state_33271[(11)]);
var inst_33250__$1 = topic_fn.call(null,inst_33202);
var inst_33251 = cljs.core.deref.call(null,mults);
var inst_33252__$1 = cljs.core.get.call(null,inst_33251,inst_33250__$1);
var state_33271__$1 = (function (){var statearr_33287 = state_33271;
(statearr_33287[(7)] = inst_33250__$1);

(statearr_33287[(11)] = inst_33252__$1);

return statearr_33287;
})();
if(cljs.core.truth_(inst_33252__$1)){
var statearr_33288_33336 = state_33271__$1;
(statearr_33288_33336[(1)] = (19));

} else {
var statearr_33289_33337 = state_33271__$1;
(statearr_33289_33337[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (25))){
var inst_33261 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33290_33338 = state_33271__$1;
(statearr_33290_33338[(2)] = inst_33261);

(statearr_33290_33338[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (17))){
var inst_33226 = (state_33271[(10)]);
var inst_33235 = cljs.core.first.call(null,inst_33226);
var inst_33236 = cljs.core.async.muxch_STAR_.call(null,inst_33235);
var inst_33237 = cljs.core.async.close_BANG_.call(null,inst_33236);
var inst_33238 = cljs.core.next.call(null,inst_33226);
var inst_33212 = inst_33238;
var inst_33213 = null;
var inst_33214 = (0);
var inst_33215 = (0);
var state_33271__$1 = (function (){var statearr_33291 = state_33271;
(statearr_33291[(12)] = inst_33215);

(statearr_33291[(13)] = inst_33213);

(statearr_33291[(14)] = inst_33212);

(statearr_33291[(15)] = inst_33237);

(statearr_33291[(16)] = inst_33214);

return statearr_33291;
})();
var statearr_33292_33339 = state_33271__$1;
(statearr_33292_33339[(2)] = null);

(statearr_33292_33339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (3))){
var inst_33269 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33271__$1,inst_33269);
} else {
if((state_val_33272 === (12))){
var inst_33246 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33293_33340 = state_33271__$1;
(statearr_33293_33340[(2)] = inst_33246);

(statearr_33293_33340[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (2))){
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33271__$1,(4),ch);
} else {
if((state_val_33272 === (23))){
var state_33271__$1 = state_33271;
var statearr_33294_33341 = state_33271__$1;
(statearr_33294_33341[(2)] = null);

(statearr_33294_33341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (19))){
var inst_33202 = (state_33271[(8)]);
var inst_33252 = (state_33271[(11)]);
var inst_33254 = cljs.core.async.muxch_STAR_.call(null,inst_33252);
var state_33271__$1 = state_33271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33271__$1,(22),inst_33254,inst_33202);
} else {
if((state_val_33272 === (11))){
var inst_33226 = (state_33271[(10)]);
var inst_33212 = (state_33271[(14)]);
var inst_33226__$1 = cljs.core.seq.call(null,inst_33212);
var state_33271__$1 = (function (){var statearr_33295 = state_33271;
(statearr_33295[(10)] = inst_33226__$1);

return statearr_33295;
})();
if(inst_33226__$1){
var statearr_33296_33342 = state_33271__$1;
(statearr_33296_33342[(1)] = (13));

} else {
var statearr_33297_33343 = state_33271__$1;
(statearr_33297_33343[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (9))){
var inst_33248 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33298_33344 = state_33271__$1;
(statearr_33298_33344[(2)] = inst_33248);

(statearr_33298_33344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (5))){
var inst_33209 = cljs.core.deref.call(null,mults);
var inst_33210 = cljs.core.vals.call(null,inst_33209);
var inst_33211 = cljs.core.seq.call(null,inst_33210);
var inst_33212 = inst_33211;
var inst_33213 = null;
var inst_33214 = (0);
var inst_33215 = (0);
var state_33271__$1 = (function (){var statearr_33299 = state_33271;
(statearr_33299[(12)] = inst_33215);

(statearr_33299[(13)] = inst_33213);

(statearr_33299[(14)] = inst_33212);

(statearr_33299[(16)] = inst_33214);

return statearr_33299;
})();
var statearr_33300_33345 = state_33271__$1;
(statearr_33300_33345[(2)] = null);

(statearr_33300_33345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (14))){
var state_33271__$1 = state_33271;
var statearr_33304_33346 = state_33271__$1;
(statearr_33304_33346[(2)] = null);

(statearr_33304_33346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (16))){
var inst_33226 = (state_33271[(10)]);
var inst_33230 = cljs.core.chunk_first.call(null,inst_33226);
var inst_33231 = cljs.core.chunk_rest.call(null,inst_33226);
var inst_33232 = cljs.core.count.call(null,inst_33230);
var inst_33212 = inst_33231;
var inst_33213 = inst_33230;
var inst_33214 = inst_33232;
var inst_33215 = (0);
var state_33271__$1 = (function (){var statearr_33305 = state_33271;
(statearr_33305[(12)] = inst_33215);

(statearr_33305[(13)] = inst_33213);

(statearr_33305[(14)] = inst_33212);

(statearr_33305[(16)] = inst_33214);

return statearr_33305;
})();
var statearr_33306_33347 = state_33271__$1;
(statearr_33306_33347[(2)] = null);

(statearr_33306_33347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (10))){
var inst_33215 = (state_33271[(12)]);
var inst_33213 = (state_33271[(13)]);
var inst_33212 = (state_33271[(14)]);
var inst_33214 = (state_33271[(16)]);
var inst_33220 = cljs.core._nth.call(null,inst_33213,inst_33215);
var inst_33221 = cljs.core.async.muxch_STAR_.call(null,inst_33220);
var inst_33222 = cljs.core.async.close_BANG_.call(null,inst_33221);
var inst_33223 = (inst_33215 + (1));
var tmp33301 = inst_33213;
var tmp33302 = inst_33212;
var tmp33303 = inst_33214;
var inst_33212__$1 = tmp33302;
var inst_33213__$1 = tmp33301;
var inst_33214__$1 = tmp33303;
var inst_33215__$1 = inst_33223;
var state_33271__$1 = (function (){var statearr_33307 = state_33271;
(statearr_33307[(12)] = inst_33215__$1);

(statearr_33307[(13)] = inst_33213__$1);

(statearr_33307[(14)] = inst_33212__$1);

(statearr_33307[(17)] = inst_33222);

(statearr_33307[(16)] = inst_33214__$1);

return statearr_33307;
})();
var statearr_33308_33348 = state_33271__$1;
(statearr_33308_33348[(2)] = null);

(statearr_33308_33348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (18))){
var inst_33241 = (state_33271[(2)]);
var state_33271__$1 = state_33271;
var statearr_33309_33349 = state_33271__$1;
(statearr_33309_33349[(2)] = inst_33241);

(statearr_33309_33349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33272 === (8))){
var inst_33215 = (state_33271[(12)]);
var inst_33214 = (state_33271[(16)]);
var inst_33217 = (inst_33215 < inst_33214);
var inst_33218 = inst_33217;
var state_33271__$1 = state_33271;
if(cljs.core.truth_(inst_33218)){
var statearr_33310_33350 = state_33271__$1;
(statearr_33310_33350[(1)] = (10));

} else {
var statearr_33311_33351 = state_33271__$1;
(statearr_33311_33351[(1)] = (11));

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
});})(c__24018__auto___33323,mults,ensure_mult,p))
;
return ((function (switch__23953__auto__,c__24018__auto___33323,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23954__auto__ = null;
var cljs$core$async$state_machine__23954__auto____0 = (function (){
var statearr_33315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33315[(0)] = cljs$core$async$state_machine__23954__auto__);

(statearr_33315[(1)] = (1));

return statearr_33315;
});
var cljs$core$async$state_machine__23954__auto____1 = (function (state_33271){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_33271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e33316){if((e33316 instanceof Object)){
var ex__23957__auto__ = e33316;
var statearr_33317_33352 = state_33271;
(statearr_33317_33352[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33353 = state_33271;
state_33271 = G__33353;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$state_machine__23954__auto__ = function(state_33271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23954__auto____1.call(this,state_33271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23954__auto____0;
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23954__auto____1;
return cljs$core$async$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___33323,mults,ensure_mult,p))
})();
var state__24020__auto__ = (function (){var statearr_33318 = f__24019__auto__.call(null);
(statearr_33318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___33323);

return statearr_33318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___33323,mults,ensure_mult,p))
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
var args33354 = [];
var len__20610__auto___33357 = arguments.length;
var i__20611__auto___33358 = (0);
while(true){
if((i__20611__auto___33358 < len__20610__auto___33357)){
args33354.push((arguments[i__20611__auto___33358]));

var G__33359 = (i__20611__auto___33358 + (1));
i__20611__auto___33358 = G__33359;
continue;
} else {
}
break;
}

var G__33356 = args33354.length;
switch (G__33356) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33354.length)].join('')));

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
var args33361 = [];
var len__20610__auto___33364 = arguments.length;
var i__20611__auto___33365 = (0);
while(true){
if((i__20611__auto___33365 < len__20610__auto___33364)){
args33361.push((arguments[i__20611__auto___33365]));

var G__33366 = (i__20611__auto___33365 + (1));
i__20611__auto___33365 = G__33366;
continue;
} else {
}
break;
}

var G__33363 = args33361.length;
switch (G__33363) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33361.length)].join('')));

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
var args33368 = [];
var len__20610__auto___33439 = arguments.length;
var i__20611__auto___33440 = (0);
while(true){
if((i__20611__auto___33440 < len__20610__auto___33439)){
args33368.push((arguments[i__20611__auto___33440]));

var G__33441 = (i__20611__auto___33440 + (1));
i__20611__auto___33440 = G__33441;
continue;
} else {
}
break;
}

var G__33370 = args33368.length;
switch (G__33370) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33368.length)].join('')));

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
var c__24018__auto___33443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___33443,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___33443,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33409){
var state_val_33410 = (state_33409[(1)]);
if((state_val_33410 === (7))){
var state_33409__$1 = state_33409;
var statearr_33411_33444 = state_33409__$1;
(statearr_33411_33444[(2)] = null);

(statearr_33411_33444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (1))){
var state_33409__$1 = state_33409;
var statearr_33412_33445 = state_33409__$1;
(statearr_33412_33445[(2)] = null);

(statearr_33412_33445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (4))){
var inst_33373 = (state_33409[(7)]);
var inst_33375 = (inst_33373 < cnt);
var state_33409__$1 = state_33409;
if(cljs.core.truth_(inst_33375)){
var statearr_33413_33446 = state_33409__$1;
(statearr_33413_33446[(1)] = (6));

} else {
var statearr_33414_33447 = state_33409__$1;
(statearr_33414_33447[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (15))){
var inst_33405 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
var statearr_33415_33448 = state_33409__$1;
(statearr_33415_33448[(2)] = inst_33405);

(statearr_33415_33448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (13))){
var inst_33398 = cljs.core.async.close_BANG_.call(null,out);
var state_33409__$1 = state_33409;
var statearr_33416_33449 = state_33409__$1;
(statearr_33416_33449[(2)] = inst_33398);

(statearr_33416_33449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (6))){
var state_33409__$1 = state_33409;
var statearr_33417_33450 = state_33409__$1;
(statearr_33417_33450[(2)] = null);

(statearr_33417_33450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (3))){
var inst_33407 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33409__$1,inst_33407);
} else {
if((state_val_33410 === (12))){
var inst_33395 = (state_33409[(8)]);
var inst_33395__$1 = (state_33409[(2)]);
var inst_33396 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33395__$1);
var state_33409__$1 = (function (){var statearr_33418 = state_33409;
(statearr_33418[(8)] = inst_33395__$1);

return statearr_33418;
})();
if(cljs.core.truth_(inst_33396)){
var statearr_33419_33451 = state_33409__$1;
(statearr_33419_33451[(1)] = (13));

} else {
var statearr_33420_33452 = state_33409__$1;
(statearr_33420_33452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (2))){
var inst_33372 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33373 = (0);
var state_33409__$1 = (function (){var statearr_33421 = state_33409;
(statearr_33421[(9)] = inst_33372);

(statearr_33421[(7)] = inst_33373);

return statearr_33421;
})();
var statearr_33422_33453 = state_33409__$1;
(statearr_33422_33453[(2)] = null);

(statearr_33422_33453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (11))){
var inst_33373 = (state_33409[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33409,(10),Object,null,(9));
var inst_33382 = chs__$1.call(null,inst_33373);
var inst_33383 = done.call(null,inst_33373);
var inst_33384 = cljs.core.async.take_BANG_.call(null,inst_33382,inst_33383);
var state_33409__$1 = state_33409;
var statearr_33423_33454 = state_33409__$1;
(statearr_33423_33454[(2)] = inst_33384);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33409__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (9))){
var inst_33373 = (state_33409[(7)]);
var inst_33386 = (state_33409[(2)]);
var inst_33387 = (inst_33373 + (1));
var inst_33373__$1 = inst_33387;
var state_33409__$1 = (function (){var statearr_33424 = state_33409;
(statearr_33424[(10)] = inst_33386);

(statearr_33424[(7)] = inst_33373__$1);

return statearr_33424;
})();
var statearr_33425_33455 = state_33409__$1;
(statearr_33425_33455[(2)] = null);

(statearr_33425_33455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (5))){
var inst_33393 = (state_33409[(2)]);
var state_33409__$1 = (function (){var statearr_33426 = state_33409;
(statearr_33426[(11)] = inst_33393);

return statearr_33426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33409__$1,(12),dchan);
} else {
if((state_val_33410 === (14))){
var inst_33395 = (state_33409[(8)]);
var inst_33400 = cljs.core.apply.call(null,f,inst_33395);
var state_33409__$1 = state_33409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33409__$1,(16),out,inst_33400);
} else {
if((state_val_33410 === (16))){
var inst_33402 = (state_33409[(2)]);
var state_33409__$1 = (function (){var statearr_33427 = state_33409;
(statearr_33427[(12)] = inst_33402);

return statearr_33427;
})();
var statearr_33428_33456 = state_33409__$1;
(statearr_33428_33456[(2)] = null);

(statearr_33428_33456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (10))){
var inst_33377 = (state_33409[(2)]);
var inst_33378 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33409__$1 = (function (){var statearr_33429 = state_33409;
(statearr_33429[(13)] = inst_33377);

return statearr_33429;
})();
var statearr_33430_33457 = state_33409__$1;
(statearr_33430_33457[(2)] = inst_33378);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33409__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33410 === (8))){
var inst_33391 = (state_33409[(2)]);
var state_33409__$1 = state_33409;
var statearr_33431_33458 = state_33409__$1;
(statearr_33431_33458[(2)] = inst_33391);

(statearr_33431_33458[(1)] = (5));


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
});})(c__24018__auto___33443,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23953__auto__,c__24018__auto___33443,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23954__auto__ = null;
var cljs$core$async$state_machine__23954__auto____0 = (function (){
var statearr_33435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33435[(0)] = cljs$core$async$state_machine__23954__auto__);

(statearr_33435[(1)] = (1));

return statearr_33435;
});
var cljs$core$async$state_machine__23954__auto____1 = (function (state_33409){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_33409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e33436){if((e33436 instanceof Object)){
var ex__23957__auto__ = e33436;
var statearr_33437_33459 = state_33409;
(statearr_33437_33459[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33460 = state_33409;
state_33409 = G__33460;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$state_machine__23954__auto__ = function(state_33409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23954__auto____1.call(this,state_33409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23954__auto____0;
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23954__auto____1;
return cljs$core$async$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___33443,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24020__auto__ = (function (){var statearr_33438 = f__24019__auto__.call(null);
(statearr_33438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___33443);

return statearr_33438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___33443,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33462 = [];
var len__20610__auto___33518 = arguments.length;
var i__20611__auto___33519 = (0);
while(true){
if((i__20611__auto___33519 < len__20610__auto___33518)){
args33462.push((arguments[i__20611__auto___33519]));

var G__33520 = (i__20611__auto___33519 + (1));
i__20611__auto___33519 = G__33520;
continue;
} else {
}
break;
}

var G__33464 = args33462.length;
switch (G__33464) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33462.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24018__auto___33522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___33522,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___33522,out){
return (function (state_33494){
var state_val_33495 = (state_33494[(1)]);
if((state_val_33495 === (7))){
var inst_33474 = (state_33494[(7)]);
var inst_33473 = (state_33494[(8)]);
var inst_33473__$1 = (state_33494[(2)]);
var inst_33474__$1 = cljs.core.nth.call(null,inst_33473__$1,(0),null);
var inst_33475 = cljs.core.nth.call(null,inst_33473__$1,(1),null);
var inst_33476 = (inst_33474__$1 == null);
var state_33494__$1 = (function (){var statearr_33496 = state_33494;
(statearr_33496[(7)] = inst_33474__$1);

(statearr_33496[(9)] = inst_33475);

(statearr_33496[(8)] = inst_33473__$1);

return statearr_33496;
})();
if(cljs.core.truth_(inst_33476)){
var statearr_33497_33523 = state_33494__$1;
(statearr_33497_33523[(1)] = (8));

} else {
var statearr_33498_33524 = state_33494__$1;
(statearr_33498_33524[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (1))){
var inst_33465 = cljs.core.vec.call(null,chs);
var inst_33466 = inst_33465;
var state_33494__$1 = (function (){var statearr_33499 = state_33494;
(statearr_33499[(10)] = inst_33466);

return statearr_33499;
})();
var statearr_33500_33525 = state_33494__$1;
(statearr_33500_33525[(2)] = null);

(statearr_33500_33525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (4))){
var inst_33466 = (state_33494[(10)]);
var state_33494__$1 = state_33494;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33494__$1,(7),inst_33466);
} else {
if((state_val_33495 === (6))){
var inst_33490 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
var statearr_33501_33526 = state_33494__$1;
(statearr_33501_33526[(2)] = inst_33490);

(statearr_33501_33526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (3))){
var inst_33492 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33494__$1,inst_33492);
} else {
if((state_val_33495 === (2))){
var inst_33466 = (state_33494[(10)]);
var inst_33468 = cljs.core.count.call(null,inst_33466);
var inst_33469 = (inst_33468 > (0));
var state_33494__$1 = state_33494;
if(cljs.core.truth_(inst_33469)){
var statearr_33503_33527 = state_33494__$1;
(statearr_33503_33527[(1)] = (4));

} else {
var statearr_33504_33528 = state_33494__$1;
(statearr_33504_33528[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (11))){
var inst_33466 = (state_33494[(10)]);
var inst_33483 = (state_33494[(2)]);
var tmp33502 = inst_33466;
var inst_33466__$1 = tmp33502;
var state_33494__$1 = (function (){var statearr_33505 = state_33494;
(statearr_33505[(10)] = inst_33466__$1);

(statearr_33505[(11)] = inst_33483);

return statearr_33505;
})();
var statearr_33506_33529 = state_33494__$1;
(statearr_33506_33529[(2)] = null);

(statearr_33506_33529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (9))){
var inst_33474 = (state_33494[(7)]);
var state_33494__$1 = state_33494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33494__$1,(11),out,inst_33474);
} else {
if((state_val_33495 === (5))){
var inst_33488 = cljs.core.async.close_BANG_.call(null,out);
var state_33494__$1 = state_33494;
var statearr_33507_33530 = state_33494__$1;
(statearr_33507_33530[(2)] = inst_33488);

(statearr_33507_33530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (10))){
var inst_33486 = (state_33494[(2)]);
var state_33494__$1 = state_33494;
var statearr_33508_33531 = state_33494__$1;
(statearr_33508_33531[(2)] = inst_33486);

(statearr_33508_33531[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33495 === (8))){
var inst_33466 = (state_33494[(10)]);
var inst_33474 = (state_33494[(7)]);
var inst_33475 = (state_33494[(9)]);
var inst_33473 = (state_33494[(8)]);
var inst_33478 = (function (){var cs = inst_33466;
var vec__33471 = inst_33473;
var v = inst_33474;
var c = inst_33475;
return ((function (cs,vec__33471,v,c,inst_33466,inst_33474,inst_33475,inst_33473,state_val_33495,c__24018__auto___33522,out){
return (function (p1__33461_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33461_SHARP_);
});
;})(cs,vec__33471,v,c,inst_33466,inst_33474,inst_33475,inst_33473,state_val_33495,c__24018__auto___33522,out))
})();
var inst_33479 = cljs.core.filterv.call(null,inst_33478,inst_33466);
var inst_33466__$1 = inst_33479;
var state_33494__$1 = (function (){var statearr_33509 = state_33494;
(statearr_33509[(10)] = inst_33466__$1);

return statearr_33509;
})();
var statearr_33510_33532 = state_33494__$1;
(statearr_33510_33532[(2)] = null);

(statearr_33510_33532[(1)] = (2));


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
});})(c__24018__auto___33522,out))
;
return ((function (switch__23953__auto__,c__24018__auto___33522,out){
return (function() {
var cljs$core$async$state_machine__23954__auto__ = null;
var cljs$core$async$state_machine__23954__auto____0 = (function (){
var statearr_33514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33514[(0)] = cljs$core$async$state_machine__23954__auto__);

(statearr_33514[(1)] = (1));

return statearr_33514;
});
var cljs$core$async$state_machine__23954__auto____1 = (function (state_33494){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_33494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e33515){if((e33515 instanceof Object)){
var ex__23957__auto__ = e33515;
var statearr_33516_33533 = state_33494;
(statearr_33516_33533[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33534 = state_33494;
state_33494 = G__33534;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$state_machine__23954__auto__ = function(state_33494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23954__auto____1.call(this,state_33494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23954__auto____0;
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23954__auto____1;
return cljs$core$async$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___33522,out))
})();
var state__24020__auto__ = (function (){var statearr_33517 = f__24019__auto__.call(null);
(statearr_33517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___33522);

return statearr_33517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___33522,out))
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
var args33535 = [];
var len__20610__auto___33584 = arguments.length;
var i__20611__auto___33585 = (0);
while(true){
if((i__20611__auto___33585 < len__20610__auto___33584)){
args33535.push((arguments[i__20611__auto___33585]));

var G__33586 = (i__20611__auto___33585 + (1));
i__20611__auto___33585 = G__33586;
continue;
} else {
}
break;
}

var G__33537 = args33535.length;
switch (G__33537) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33535.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24018__auto___33588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___33588,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___33588,out){
return (function (state_33561){
var state_val_33562 = (state_33561[(1)]);
if((state_val_33562 === (7))){
var inst_33543 = (state_33561[(7)]);
var inst_33543__$1 = (state_33561[(2)]);
var inst_33544 = (inst_33543__$1 == null);
var inst_33545 = cljs.core.not.call(null,inst_33544);
var state_33561__$1 = (function (){var statearr_33563 = state_33561;
(statearr_33563[(7)] = inst_33543__$1);

return statearr_33563;
})();
if(inst_33545){
var statearr_33564_33589 = state_33561__$1;
(statearr_33564_33589[(1)] = (8));

} else {
var statearr_33565_33590 = state_33561__$1;
(statearr_33565_33590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (1))){
var inst_33538 = (0);
var state_33561__$1 = (function (){var statearr_33566 = state_33561;
(statearr_33566[(8)] = inst_33538);

return statearr_33566;
})();
var statearr_33567_33591 = state_33561__$1;
(statearr_33567_33591[(2)] = null);

(statearr_33567_33591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (4))){
var state_33561__$1 = state_33561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33561__$1,(7),ch);
} else {
if((state_val_33562 === (6))){
var inst_33556 = (state_33561[(2)]);
var state_33561__$1 = state_33561;
var statearr_33568_33592 = state_33561__$1;
(statearr_33568_33592[(2)] = inst_33556);

(statearr_33568_33592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (3))){
var inst_33558 = (state_33561[(2)]);
var inst_33559 = cljs.core.async.close_BANG_.call(null,out);
var state_33561__$1 = (function (){var statearr_33569 = state_33561;
(statearr_33569[(9)] = inst_33558);

return statearr_33569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33561__$1,inst_33559);
} else {
if((state_val_33562 === (2))){
var inst_33538 = (state_33561[(8)]);
var inst_33540 = (inst_33538 < n);
var state_33561__$1 = state_33561;
if(cljs.core.truth_(inst_33540)){
var statearr_33570_33593 = state_33561__$1;
(statearr_33570_33593[(1)] = (4));

} else {
var statearr_33571_33594 = state_33561__$1;
(statearr_33571_33594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (11))){
var inst_33538 = (state_33561[(8)]);
var inst_33548 = (state_33561[(2)]);
var inst_33549 = (inst_33538 + (1));
var inst_33538__$1 = inst_33549;
var state_33561__$1 = (function (){var statearr_33572 = state_33561;
(statearr_33572[(10)] = inst_33548);

(statearr_33572[(8)] = inst_33538__$1);

return statearr_33572;
})();
var statearr_33573_33595 = state_33561__$1;
(statearr_33573_33595[(2)] = null);

(statearr_33573_33595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (9))){
var state_33561__$1 = state_33561;
var statearr_33574_33596 = state_33561__$1;
(statearr_33574_33596[(2)] = null);

(statearr_33574_33596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (5))){
var state_33561__$1 = state_33561;
var statearr_33575_33597 = state_33561__$1;
(statearr_33575_33597[(2)] = null);

(statearr_33575_33597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (10))){
var inst_33553 = (state_33561[(2)]);
var state_33561__$1 = state_33561;
var statearr_33576_33598 = state_33561__$1;
(statearr_33576_33598[(2)] = inst_33553);

(statearr_33576_33598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33562 === (8))){
var inst_33543 = (state_33561[(7)]);
var state_33561__$1 = state_33561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33561__$1,(11),out,inst_33543);
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
});})(c__24018__auto___33588,out))
;
return ((function (switch__23953__auto__,c__24018__auto___33588,out){
return (function() {
var cljs$core$async$state_machine__23954__auto__ = null;
var cljs$core$async$state_machine__23954__auto____0 = (function (){
var statearr_33580 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33580[(0)] = cljs$core$async$state_machine__23954__auto__);

(statearr_33580[(1)] = (1));

return statearr_33580;
});
var cljs$core$async$state_machine__23954__auto____1 = (function (state_33561){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_33561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e33581){if((e33581 instanceof Object)){
var ex__23957__auto__ = e33581;
var statearr_33582_33599 = state_33561;
(statearr_33582_33599[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33600 = state_33561;
state_33561 = G__33600;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$state_machine__23954__auto__ = function(state_33561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23954__auto____1.call(this,state_33561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23954__auto____0;
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23954__auto____1;
return cljs$core$async$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___33588,out))
})();
var state__24020__auto__ = (function (){var statearr_33583 = f__24019__auto__.call(null);
(statearr_33583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___33588);

return statearr_33583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___33588,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t33608 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33608 = (function (map_LT_,f,ch,meta33609){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33609 = meta33609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33610,meta33609__$1){
var self__ = this;
var _33610__$1 = this;
return (new cljs.core.async.t33608(self__.map_LT_,self__.f,self__.ch,meta33609__$1));
});

cljs.core.async.t33608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33610){
var self__ = this;
var _33610__$1 = this;
return self__.meta33609;
});

cljs.core.async.t33608.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33608.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33608.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33608.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33608.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t33611 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33611 = (function (map_LT_,f,ch,meta33609,_,fn1,meta33612){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33609 = meta33609;
this._ = _;
this.fn1 = fn1;
this.meta33612 = meta33612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33613,meta33612__$1){
var self__ = this;
var _33613__$1 = this;
return (new cljs.core.async.t33611(self__.map_LT_,self__.f,self__.ch,self__.meta33609,self__._,self__.fn1,meta33612__$1));
});})(___$1))
;

cljs.core.async.t33611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33613){
var self__ = this;
var _33613__$1 = this;
return self__.meta33612;
});})(___$1))
;

cljs.core.async.t33611.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t33611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t33611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33601_SHARP_){
return f1.call(null,(((p1__33601_SHARP_ == null))?null:self__.f.call(null,p1__33601_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t33611.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33609","meta33609",-540970328,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t33608","cljs.core.async/t33608",1826244032,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33612","meta33612",819460152,null)], null);
});})(___$1))
;

cljs.core.async.t33611.cljs$lang$type = true;

cljs.core.async.t33611.cljs$lang$ctorStr = "cljs.core.async/t33611";

cljs.core.async.t33611.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"cljs.core.async/t33611");
});})(___$1))
;

cljs.core.async.__GT_t33611 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t33611(map_LT___$1,f__$1,ch__$1,meta33609__$1,___$2,fn1__$1,meta33612){
return (new cljs.core.async.t33611(map_LT___$1,f__$1,ch__$1,meta33609__$1,___$2,fn1__$1,meta33612));
});})(___$1))
;

}

return (new cljs.core.async.t33611(self__.map_LT_,self__.f,self__.ch,self__.meta33609,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__19559__auto__ = ret;
if(cljs.core.truth_(and__19559__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__19559__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t33608.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33608.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t33608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33609","meta33609",-540970328,null)], null);
});

cljs.core.async.t33608.cljs$lang$type = true;

cljs.core.async.t33608.cljs$lang$ctorStr = "cljs.core.async/t33608";

cljs.core.async.t33608.cljs$lang$ctorPrWriter = (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"cljs.core.async/t33608");
});

cljs.core.async.__GT_t33608 = (function cljs$core$async$map_LT__$___GT_t33608(map_LT___$1,f__$1,ch__$1,meta33609){
return (new cljs.core.async.t33608(map_LT___$1,f__$1,ch__$1,meta33609));
});

}

return (new cljs.core.async.t33608(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t33617 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33617 = (function (map_GT_,f,ch,meta33618){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33618 = meta33618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33619,meta33618__$1){
var self__ = this;
var _33619__$1 = this;
return (new cljs.core.async.t33617(self__.map_GT_,self__.f,self__.ch,meta33618__$1));
});

cljs.core.async.t33617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33619){
var self__ = this;
var _33619__$1 = this;
return self__.meta33618;
});

cljs.core.async.t33617.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33617.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33617.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t33617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33618","meta33618",1385745087,null)], null);
});

cljs.core.async.t33617.cljs$lang$type = true;

cljs.core.async.t33617.cljs$lang$ctorStr = "cljs.core.async/t33617";

cljs.core.async.t33617.cljs$lang$ctorPrWriter = (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"cljs.core.async/t33617");
});

cljs.core.async.__GT_t33617 = (function cljs$core$async$map_GT__$___GT_t33617(map_GT___$1,f__$1,ch__$1,meta33618){
return (new cljs.core.async.t33617(map_GT___$1,f__$1,ch__$1,meta33618));
});

}

return (new cljs.core.async.t33617(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t33623 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t33623 = (function (filter_GT_,p,ch,meta33624){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33624 = meta33624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t33623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33625,meta33624__$1){
var self__ = this;
var _33625__$1 = this;
return (new cljs.core.async.t33623(self__.filter_GT_,self__.p,self__.ch,meta33624__$1));
});

cljs.core.async.t33623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33625){
var self__ = this;
var _33625__$1 = this;
return self__.meta33624;
});

cljs.core.async.t33623.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t33623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t33623.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t33623.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t33623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t33623.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t33623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t33623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33624","meta33624",508244352,null)], null);
});

cljs.core.async.t33623.cljs$lang$type = true;

cljs.core.async.t33623.cljs$lang$ctorStr = "cljs.core.async/t33623";

cljs.core.async.t33623.cljs$lang$ctorPrWriter = (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"cljs.core.async/t33623");
});

cljs.core.async.__GT_t33623 = (function cljs$core$async$filter_GT__$___GT_t33623(filter_GT___$1,p__$1,ch__$1,meta33624){
return (new cljs.core.async.t33623(filter_GT___$1,p__$1,ch__$1,meta33624));
});

}

return (new cljs.core.async.t33623(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33626 = [];
var len__20610__auto___33670 = arguments.length;
var i__20611__auto___33671 = (0);
while(true){
if((i__20611__auto___33671 < len__20610__auto___33670)){
args33626.push((arguments[i__20611__auto___33671]));

var G__33672 = (i__20611__auto___33671 + (1));
i__20611__auto___33671 = G__33672;
continue;
} else {
}
break;
}

var G__33628 = args33626.length;
switch (G__33628) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33626.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24018__auto___33674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___33674,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___33674,out){
return (function (state_33649){
var state_val_33650 = (state_33649[(1)]);
if((state_val_33650 === (7))){
var inst_33645 = (state_33649[(2)]);
var state_33649__$1 = state_33649;
var statearr_33651_33675 = state_33649__$1;
(statearr_33651_33675[(2)] = inst_33645);

(statearr_33651_33675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33650 === (1))){
var state_33649__$1 = state_33649;
var statearr_33652_33676 = state_33649__$1;
(statearr_33652_33676[(2)] = null);

(statearr_33652_33676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33650 === (4))){
var inst_33631 = (state_33649[(7)]);
var inst_33631__$1 = (state_33649[(2)]);
var inst_33632 = (inst_33631__$1 == null);
var state_33649__$1 = (function (){var statearr_33653 = state_33649;
(statearr_33653[(7)] = inst_33631__$1);

return statearr_33653;
})();
if(cljs.core.truth_(inst_33632)){
var statearr_33654_33677 = state_33649__$1;
(statearr_33654_33677[(1)] = (5));

} else {
var statearr_33655_33678 = state_33649__$1;
(statearr_33655_33678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33650 === (6))){
var inst_33631 = (state_33649[(7)]);
var inst_33636 = p.call(null,inst_33631);
var state_33649__$1 = state_33649;
if(cljs.core.truth_(inst_33636)){
var statearr_33656_33679 = state_33649__$1;
(statearr_33656_33679[(1)] = (8));

} else {
var statearr_33657_33680 = state_33649__$1;
(statearr_33657_33680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33650 === (3))){
var inst_33647 = (state_33649[(2)]);
var state_33649__$1 = state_33649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33649__$1,inst_33647);
} else {
if((state_val_33650 === (2))){
var state_33649__$1 = state_33649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33649__$1,(4),ch);
} else {
if((state_val_33650 === (11))){
var inst_33639 = (state_33649[(2)]);
var state_33649__$1 = state_33649;
var statearr_33658_33681 = state_33649__$1;
(statearr_33658_33681[(2)] = inst_33639);

(statearr_33658_33681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33650 === (9))){
var state_33649__$1 = state_33649;
var statearr_33659_33682 = state_33649__$1;
(statearr_33659_33682[(2)] = null);

(statearr_33659_33682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33650 === (5))){
var inst_33634 = cljs.core.async.close_BANG_.call(null,out);
var state_33649__$1 = state_33649;
var statearr_33660_33683 = state_33649__$1;
(statearr_33660_33683[(2)] = inst_33634);

(statearr_33660_33683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33650 === (10))){
var inst_33642 = (state_33649[(2)]);
var state_33649__$1 = (function (){var statearr_33661 = state_33649;
(statearr_33661[(8)] = inst_33642);

return statearr_33661;
})();
var statearr_33662_33684 = state_33649__$1;
(statearr_33662_33684[(2)] = null);

(statearr_33662_33684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33650 === (8))){
var inst_33631 = (state_33649[(7)]);
var state_33649__$1 = state_33649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33649__$1,(11),out,inst_33631);
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
});})(c__24018__auto___33674,out))
;
return ((function (switch__23953__auto__,c__24018__auto___33674,out){
return (function() {
var cljs$core$async$state_machine__23954__auto__ = null;
var cljs$core$async$state_machine__23954__auto____0 = (function (){
var statearr_33666 = [null,null,null,null,null,null,null,null,null];
(statearr_33666[(0)] = cljs$core$async$state_machine__23954__auto__);

(statearr_33666[(1)] = (1));

return statearr_33666;
});
var cljs$core$async$state_machine__23954__auto____1 = (function (state_33649){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_33649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e33667){if((e33667 instanceof Object)){
var ex__23957__auto__ = e33667;
var statearr_33668_33685 = state_33649;
(statearr_33668_33685[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33686 = state_33649;
state_33649 = G__33686;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$state_machine__23954__auto__ = function(state_33649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23954__auto____1.call(this,state_33649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23954__auto____0;
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23954__auto____1;
return cljs$core$async$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___33674,out))
})();
var state__24020__auto__ = (function (){var statearr_33669 = f__24019__auto__.call(null);
(statearr_33669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___33674);

return statearr_33669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___33674,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args33687 = [];
var len__20610__auto___33690 = arguments.length;
var i__20611__auto___33691 = (0);
while(true){
if((i__20611__auto___33691 < len__20610__auto___33690)){
args33687.push((arguments[i__20611__auto___33691]));

var G__33692 = (i__20611__auto___33691 + (1));
i__20611__auto___33691 = G__33692;
continue;
} else {
}
break;
}

var G__33689 = args33687.length;
switch (G__33689) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33687.length)].join('')));

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
var c__24018__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto__){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto__){
return (function (state_33859){
var state_val_33860 = (state_33859[(1)]);
if((state_val_33860 === (7))){
var inst_33855 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
var statearr_33861_33902 = state_33859__$1;
(statearr_33861_33902[(2)] = inst_33855);

(statearr_33861_33902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (20))){
var inst_33825 = (state_33859[(7)]);
var inst_33836 = (state_33859[(2)]);
var inst_33837 = cljs.core.next.call(null,inst_33825);
var inst_33811 = inst_33837;
var inst_33812 = null;
var inst_33813 = (0);
var inst_33814 = (0);
var state_33859__$1 = (function (){var statearr_33862 = state_33859;
(statearr_33862[(8)] = inst_33811);

(statearr_33862[(9)] = inst_33836);

(statearr_33862[(10)] = inst_33813);

(statearr_33862[(11)] = inst_33812);

(statearr_33862[(12)] = inst_33814);

return statearr_33862;
})();
var statearr_33863_33903 = state_33859__$1;
(statearr_33863_33903[(2)] = null);

(statearr_33863_33903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (1))){
var state_33859__$1 = state_33859;
var statearr_33864_33904 = state_33859__$1;
(statearr_33864_33904[(2)] = null);

(statearr_33864_33904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (4))){
var inst_33800 = (state_33859[(13)]);
var inst_33800__$1 = (state_33859[(2)]);
var inst_33801 = (inst_33800__$1 == null);
var state_33859__$1 = (function (){var statearr_33865 = state_33859;
(statearr_33865[(13)] = inst_33800__$1);

return statearr_33865;
})();
if(cljs.core.truth_(inst_33801)){
var statearr_33866_33905 = state_33859__$1;
(statearr_33866_33905[(1)] = (5));

} else {
var statearr_33867_33906 = state_33859__$1;
(statearr_33867_33906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (15))){
var state_33859__$1 = state_33859;
var statearr_33871_33907 = state_33859__$1;
(statearr_33871_33907[(2)] = null);

(statearr_33871_33907[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (21))){
var state_33859__$1 = state_33859;
var statearr_33872_33908 = state_33859__$1;
(statearr_33872_33908[(2)] = null);

(statearr_33872_33908[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (13))){
var inst_33811 = (state_33859[(8)]);
var inst_33813 = (state_33859[(10)]);
var inst_33812 = (state_33859[(11)]);
var inst_33814 = (state_33859[(12)]);
var inst_33821 = (state_33859[(2)]);
var inst_33822 = (inst_33814 + (1));
var tmp33868 = inst_33811;
var tmp33869 = inst_33813;
var tmp33870 = inst_33812;
var inst_33811__$1 = tmp33868;
var inst_33812__$1 = tmp33870;
var inst_33813__$1 = tmp33869;
var inst_33814__$1 = inst_33822;
var state_33859__$1 = (function (){var statearr_33873 = state_33859;
(statearr_33873[(14)] = inst_33821);

(statearr_33873[(8)] = inst_33811__$1);

(statearr_33873[(10)] = inst_33813__$1);

(statearr_33873[(11)] = inst_33812__$1);

(statearr_33873[(12)] = inst_33814__$1);

return statearr_33873;
})();
var statearr_33874_33909 = state_33859__$1;
(statearr_33874_33909[(2)] = null);

(statearr_33874_33909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (22))){
var state_33859__$1 = state_33859;
var statearr_33875_33910 = state_33859__$1;
(statearr_33875_33910[(2)] = null);

(statearr_33875_33910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (6))){
var inst_33800 = (state_33859[(13)]);
var inst_33809 = f.call(null,inst_33800);
var inst_33810 = cljs.core.seq.call(null,inst_33809);
var inst_33811 = inst_33810;
var inst_33812 = null;
var inst_33813 = (0);
var inst_33814 = (0);
var state_33859__$1 = (function (){var statearr_33876 = state_33859;
(statearr_33876[(8)] = inst_33811);

(statearr_33876[(10)] = inst_33813);

(statearr_33876[(11)] = inst_33812);

(statearr_33876[(12)] = inst_33814);

return statearr_33876;
})();
var statearr_33877_33911 = state_33859__$1;
(statearr_33877_33911[(2)] = null);

(statearr_33877_33911[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (17))){
var inst_33825 = (state_33859[(7)]);
var inst_33829 = cljs.core.chunk_first.call(null,inst_33825);
var inst_33830 = cljs.core.chunk_rest.call(null,inst_33825);
var inst_33831 = cljs.core.count.call(null,inst_33829);
var inst_33811 = inst_33830;
var inst_33812 = inst_33829;
var inst_33813 = inst_33831;
var inst_33814 = (0);
var state_33859__$1 = (function (){var statearr_33878 = state_33859;
(statearr_33878[(8)] = inst_33811);

(statearr_33878[(10)] = inst_33813);

(statearr_33878[(11)] = inst_33812);

(statearr_33878[(12)] = inst_33814);

return statearr_33878;
})();
var statearr_33879_33912 = state_33859__$1;
(statearr_33879_33912[(2)] = null);

(statearr_33879_33912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (3))){
var inst_33857 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33859__$1,inst_33857);
} else {
if((state_val_33860 === (12))){
var inst_33845 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
var statearr_33880_33913 = state_33859__$1;
(statearr_33880_33913[(2)] = inst_33845);

(statearr_33880_33913[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (2))){
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33859__$1,(4),in$);
} else {
if((state_val_33860 === (23))){
var inst_33853 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
var statearr_33881_33914 = state_33859__$1;
(statearr_33881_33914[(2)] = inst_33853);

(statearr_33881_33914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (19))){
var inst_33840 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
var statearr_33882_33915 = state_33859__$1;
(statearr_33882_33915[(2)] = inst_33840);

(statearr_33882_33915[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (11))){
var inst_33811 = (state_33859[(8)]);
var inst_33825 = (state_33859[(7)]);
var inst_33825__$1 = cljs.core.seq.call(null,inst_33811);
var state_33859__$1 = (function (){var statearr_33883 = state_33859;
(statearr_33883[(7)] = inst_33825__$1);

return statearr_33883;
})();
if(inst_33825__$1){
var statearr_33884_33916 = state_33859__$1;
(statearr_33884_33916[(1)] = (14));

} else {
var statearr_33885_33917 = state_33859__$1;
(statearr_33885_33917[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (9))){
var inst_33847 = (state_33859[(2)]);
var inst_33848 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33859__$1 = (function (){var statearr_33886 = state_33859;
(statearr_33886[(15)] = inst_33847);

return statearr_33886;
})();
if(cljs.core.truth_(inst_33848)){
var statearr_33887_33918 = state_33859__$1;
(statearr_33887_33918[(1)] = (21));

} else {
var statearr_33888_33919 = state_33859__$1;
(statearr_33888_33919[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (5))){
var inst_33803 = cljs.core.async.close_BANG_.call(null,out);
var state_33859__$1 = state_33859;
var statearr_33889_33920 = state_33859__$1;
(statearr_33889_33920[(2)] = inst_33803);

(statearr_33889_33920[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (14))){
var inst_33825 = (state_33859[(7)]);
var inst_33827 = cljs.core.chunked_seq_QMARK_.call(null,inst_33825);
var state_33859__$1 = state_33859;
if(inst_33827){
var statearr_33890_33921 = state_33859__$1;
(statearr_33890_33921[(1)] = (17));

} else {
var statearr_33891_33922 = state_33859__$1;
(statearr_33891_33922[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (16))){
var inst_33843 = (state_33859[(2)]);
var state_33859__$1 = state_33859;
var statearr_33892_33923 = state_33859__$1;
(statearr_33892_33923[(2)] = inst_33843);

(statearr_33892_33923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33860 === (10))){
var inst_33812 = (state_33859[(11)]);
var inst_33814 = (state_33859[(12)]);
var inst_33819 = cljs.core._nth.call(null,inst_33812,inst_33814);
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33859__$1,(13),out,inst_33819);
} else {
if((state_val_33860 === (18))){
var inst_33825 = (state_33859[(7)]);
var inst_33834 = cljs.core.first.call(null,inst_33825);
var state_33859__$1 = state_33859;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33859__$1,(20),out,inst_33834);
} else {
if((state_val_33860 === (8))){
var inst_33813 = (state_33859[(10)]);
var inst_33814 = (state_33859[(12)]);
var inst_33816 = (inst_33814 < inst_33813);
var inst_33817 = inst_33816;
var state_33859__$1 = state_33859;
if(cljs.core.truth_(inst_33817)){
var statearr_33893_33924 = state_33859__$1;
(statearr_33893_33924[(1)] = (10));

} else {
var statearr_33894_33925 = state_33859__$1;
(statearr_33894_33925[(1)] = (11));

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
});})(c__24018__auto__))
;
return ((function (switch__23953__auto__,c__24018__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23954__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23954__auto____0 = (function (){
var statearr_33898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33898[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23954__auto__);

(statearr_33898[(1)] = (1));

return statearr_33898;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23954__auto____1 = (function (state_33859){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_33859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e33899){if((e33899 instanceof Object)){
var ex__23957__auto__ = e33899;
var statearr_33900_33926 = state_33859;
(statearr_33900_33926[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33927 = state_33859;
state_33859 = G__33927;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23954__auto__ = function(state_33859){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23954__auto____1.call(this,state_33859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23954__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23954__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto__))
})();
var state__24020__auto__ = (function (){var statearr_33901 = f__24019__auto__.call(null);
(statearr_33901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto__);

return statearr_33901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto__))
);

return c__24018__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args33928 = [];
var len__20610__auto___33931 = arguments.length;
var i__20611__auto___33932 = (0);
while(true){
if((i__20611__auto___33932 < len__20610__auto___33931)){
args33928.push((arguments[i__20611__auto___33932]));

var G__33933 = (i__20611__auto___33932 + (1));
i__20611__auto___33932 = G__33933;
continue;
} else {
}
break;
}

var G__33930 = args33928.length;
switch (G__33930) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33928.length)].join('')));

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
var args33935 = [];
var len__20610__auto___33938 = arguments.length;
var i__20611__auto___33939 = (0);
while(true){
if((i__20611__auto___33939 < len__20610__auto___33938)){
args33935.push((arguments[i__20611__auto___33939]));

var G__33940 = (i__20611__auto___33939 + (1));
i__20611__auto___33939 = G__33940;
continue;
} else {
}
break;
}

var G__33937 = args33935.length;
switch (G__33937) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33935.length)].join('')));

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
var args33942 = [];
var len__20610__auto___33993 = arguments.length;
var i__20611__auto___33994 = (0);
while(true){
if((i__20611__auto___33994 < len__20610__auto___33993)){
args33942.push((arguments[i__20611__auto___33994]));

var G__33995 = (i__20611__auto___33994 + (1));
i__20611__auto___33994 = G__33995;
continue;
} else {
}
break;
}

var G__33944 = args33942.length;
switch (G__33944) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33942.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24018__auto___33997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___33997,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___33997,out){
return (function (state_33968){
var state_val_33969 = (state_33968[(1)]);
if((state_val_33969 === (7))){
var inst_33963 = (state_33968[(2)]);
var state_33968__$1 = state_33968;
var statearr_33970_33998 = state_33968__$1;
(statearr_33970_33998[(2)] = inst_33963);

(statearr_33970_33998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (1))){
var inst_33945 = null;
var state_33968__$1 = (function (){var statearr_33971 = state_33968;
(statearr_33971[(7)] = inst_33945);

return statearr_33971;
})();
var statearr_33972_33999 = state_33968__$1;
(statearr_33972_33999[(2)] = null);

(statearr_33972_33999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (4))){
var inst_33948 = (state_33968[(8)]);
var inst_33948__$1 = (state_33968[(2)]);
var inst_33949 = (inst_33948__$1 == null);
var inst_33950 = cljs.core.not.call(null,inst_33949);
var state_33968__$1 = (function (){var statearr_33973 = state_33968;
(statearr_33973[(8)] = inst_33948__$1);

return statearr_33973;
})();
if(inst_33950){
var statearr_33974_34000 = state_33968__$1;
(statearr_33974_34000[(1)] = (5));

} else {
var statearr_33975_34001 = state_33968__$1;
(statearr_33975_34001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (6))){
var state_33968__$1 = state_33968;
var statearr_33976_34002 = state_33968__$1;
(statearr_33976_34002[(2)] = null);

(statearr_33976_34002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (3))){
var inst_33965 = (state_33968[(2)]);
var inst_33966 = cljs.core.async.close_BANG_.call(null,out);
var state_33968__$1 = (function (){var statearr_33977 = state_33968;
(statearr_33977[(9)] = inst_33965);

return statearr_33977;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33968__$1,inst_33966);
} else {
if((state_val_33969 === (2))){
var state_33968__$1 = state_33968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33968__$1,(4),ch);
} else {
if((state_val_33969 === (11))){
var inst_33948 = (state_33968[(8)]);
var inst_33957 = (state_33968[(2)]);
var inst_33945 = inst_33948;
var state_33968__$1 = (function (){var statearr_33978 = state_33968;
(statearr_33978[(10)] = inst_33957);

(statearr_33978[(7)] = inst_33945);

return statearr_33978;
})();
var statearr_33979_34003 = state_33968__$1;
(statearr_33979_34003[(2)] = null);

(statearr_33979_34003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (9))){
var inst_33948 = (state_33968[(8)]);
var state_33968__$1 = state_33968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33968__$1,(11),out,inst_33948);
} else {
if((state_val_33969 === (5))){
var inst_33948 = (state_33968[(8)]);
var inst_33945 = (state_33968[(7)]);
var inst_33952 = cljs.core._EQ_.call(null,inst_33948,inst_33945);
var state_33968__$1 = state_33968;
if(inst_33952){
var statearr_33981_34004 = state_33968__$1;
(statearr_33981_34004[(1)] = (8));

} else {
var statearr_33982_34005 = state_33968__$1;
(statearr_33982_34005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (10))){
var inst_33960 = (state_33968[(2)]);
var state_33968__$1 = state_33968;
var statearr_33983_34006 = state_33968__$1;
(statearr_33983_34006[(2)] = inst_33960);

(statearr_33983_34006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33969 === (8))){
var inst_33945 = (state_33968[(7)]);
var tmp33980 = inst_33945;
var inst_33945__$1 = tmp33980;
var state_33968__$1 = (function (){var statearr_33984 = state_33968;
(statearr_33984[(7)] = inst_33945__$1);

return statearr_33984;
})();
var statearr_33985_34007 = state_33968__$1;
(statearr_33985_34007[(2)] = null);

(statearr_33985_34007[(1)] = (2));


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
});})(c__24018__auto___33997,out))
;
return ((function (switch__23953__auto__,c__24018__auto___33997,out){
return (function() {
var cljs$core$async$state_machine__23954__auto__ = null;
var cljs$core$async$state_machine__23954__auto____0 = (function (){
var statearr_33989 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33989[(0)] = cljs$core$async$state_machine__23954__auto__);

(statearr_33989[(1)] = (1));

return statearr_33989;
});
var cljs$core$async$state_machine__23954__auto____1 = (function (state_33968){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_33968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e33990){if((e33990 instanceof Object)){
var ex__23957__auto__ = e33990;
var statearr_33991_34008 = state_33968;
(statearr_33991_34008[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34009 = state_33968;
state_33968 = G__34009;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$state_machine__23954__auto__ = function(state_33968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23954__auto____1.call(this,state_33968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23954__auto____0;
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23954__auto____1;
return cljs$core$async$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___33997,out))
})();
var state__24020__auto__ = (function (){var statearr_33992 = f__24019__auto__.call(null);
(statearr_33992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___33997);

return statearr_33992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___33997,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args34010 = [];
var len__20610__auto___34080 = arguments.length;
var i__20611__auto___34081 = (0);
while(true){
if((i__20611__auto___34081 < len__20610__auto___34080)){
args34010.push((arguments[i__20611__auto___34081]));

var G__34082 = (i__20611__auto___34081 + (1));
i__20611__auto___34081 = G__34082;
continue;
} else {
}
break;
}

var G__34012 = args34010.length;
switch (G__34012) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34010.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24018__auto___34084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___34084,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___34084,out){
return (function (state_34050){
var state_val_34051 = (state_34050[(1)]);
if((state_val_34051 === (7))){
var inst_34046 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
var statearr_34052_34085 = state_34050__$1;
(statearr_34052_34085[(2)] = inst_34046);

(statearr_34052_34085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (1))){
var inst_34013 = (new Array(n));
var inst_34014 = inst_34013;
var inst_34015 = (0);
var state_34050__$1 = (function (){var statearr_34053 = state_34050;
(statearr_34053[(7)] = inst_34015);

(statearr_34053[(8)] = inst_34014);

return statearr_34053;
})();
var statearr_34054_34086 = state_34050__$1;
(statearr_34054_34086[(2)] = null);

(statearr_34054_34086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (4))){
var inst_34018 = (state_34050[(9)]);
var inst_34018__$1 = (state_34050[(2)]);
var inst_34019 = (inst_34018__$1 == null);
var inst_34020 = cljs.core.not.call(null,inst_34019);
var state_34050__$1 = (function (){var statearr_34055 = state_34050;
(statearr_34055[(9)] = inst_34018__$1);

return statearr_34055;
})();
if(inst_34020){
var statearr_34056_34087 = state_34050__$1;
(statearr_34056_34087[(1)] = (5));

} else {
var statearr_34057_34088 = state_34050__$1;
(statearr_34057_34088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (15))){
var inst_34040 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
var statearr_34058_34089 = state_34050__$1;
(statearr_34058_34089[(2)] = inst_34040);

(statearr_34058_34089[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (13))){
var state_34050__$1 = state_34050;
var statearr_34059_34090 = state_34050__$1;
(statearr_34059_34090[(2)] = null);

(statearr_34059_34090[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (6))){
var inst_34015 = (state_34050[(7)]);
var inst_34036 = (inst_34015 > (0));
var state_34050__$1 = state_34050;
if(cljs.core.truth_(inst_34036)){
var statearr_34060_34091 = state_34050__$1;
(statearr_34060_34091[(1)] = (12));

} else {
var statearr_34061_34092 = state_34050__$1;
(statearr_34061_34092[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (3))){
var inst_34048 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34050__$1,inst_34048);
} else {
if((state_val_34051 === (12))){
var inst_34014 = (state_34050[(8)]);
var inst_34038 = cljs.core.vec.call(null,inst_34014);
var state_34050__$1 = state_34050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34050__$1,(15),out,inst_34038);
} else {
if((state_val_34051 === (2))){
var state_34050__$1 = state_34050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34050__$1,(4),ch);
} else {
if((state_val_34051 === (11))){
var inst_34030 = (state_34050[(2)]);
var inst_34031 = (new Array(n));
var inst_34014 = inst_34031;
var inst_34015 = (0);
var state_34050__$1 = (function (){var statearr_34062 = state_34050;
(statearr_34062[(7)] = inst_34015);

(statearr_34062[(8)] = inst_34014);

(statearr_34062[(10)] = inst_34030);

return statearr_34062;
})();
var statearr_34063_34093 = state_34050__$1;
(statearr_34063_34093[(2)] = null);

(statearr_34063_34093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (9))){
var inst_34014 = (state_34050[(8)]);
var inst_34028 = cljs.core.vec.call(null,inst_34014);
var state_34050__$1 = state_34050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34050__$1,(11),out,inst_34028);
} else {
if((state_val_34051 === (5))){
var inst_34015 = (state_34050[(7)]);
var inst_34014 = (state_34050[(8)]);
var inst_34023 = (state_34050[(11)]);
var inst_34018 = (state_34050[(9)]);
var inst_34022 = (inst_34014[inst_34015] = inst_34018);
var inst_34023__$1 = (inst_34015 + (1));
var inst_34024 = (inst_34023__$1 < n);
var state_34050__$1 = (function (){var statearr_34064 = state_34050;
(statearr_34064[(12)] = inst_34022);

(statearr_34064[(11)] = inst_34023__$1);

return statearr_34064;
})();
if(cljs.core.truth_(inst_34024)){
var statearr_34065_34094 = state_34050__$1;
(statearr_34065_34094[(1)] = (8));

} else {
var statearr_34066_34095 = state_34050__$1;
(statearr_34066_34095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (14))){
var inst_34043 = (state_34050[(2)]);
var inst_34044 = cljs.core.async.close_BANG_.call(null,out);
var state_34050__$1 = (function (){var statearr_34068 = state_34050;
(statearr_34068[(13)] = inst_34043);

return statearr_34068;
})();
var statearr_34069_34096 = state_34050__$1;
(statearr_34069_34096[(2)] = inst_34044);

(statearr_34069_34096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (10))){
var inst_34034 = (state_34050[(2)]);
var state_34050__$1 = state_34050;
var statearr_34070_34097 = state_34050__$1;
(statearr_34070_34097[(2)] = inst_34034);

(statearr_34070_34097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34051 === (8))){
var inst_34014 = (state_34050[(8)]);
var inst_34023 = (state_34050[(11)]);
var tmp34067 = inst_34014;
var inst_34014__$1 = tmp34067;
var inst_34015 = inst_34023;
var state_34050__$1 = (function (){var statearr_34071 = state_34050;
(statearr_34071[(7)] = inst_34015);

(statearr_34071[(8)] = inst_34014__$1);

return statearr_34071;
})();
var statearr_34072_34098 = state_34050__$1;
(statearr_34072_34098[(2)] = null);

(statearr_34072_34098[(1)] = (2));


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
});})(c__24018__auto___34084,out))
;
return ((function (switch__23953__auto__,c__24018__auto___34084,out){
return (function() {
var cljs$core$async$state_machine__23954__auto__ = null;
var cljs$core$async$state_machine__23954__auto____0 = (function (){
var statearr_34076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34076[(0)] = cljs$core$async$state_machine__23954__auto__);

(statearr_34076[(1)] = (1));

return statearr_34076;
});
var cljs$core$async$state_machine__23954__auto____1 = (function (state_34050){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_34050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e34077){if((e34077 instanceof Object)){
var ex__23957__auto__ = e34077;
var statearr_34078_34099 = state_34050;
(statearr_34078_34099[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34100 = state_34050;
state_34050 = G__34100;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$state_machine__23954__auto__ = function(state_34050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23954__auto____1.call(this,state_34050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23954__auto____0;
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23954__auto____1;
return cljs$core$async$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___34084,out))
})();
var state__24020__auto__ = (function (){var statearr_34079 = f__24019__auto__.call(null);
(statearr_34079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___34084);

return statearr_34079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___34084,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args34101 = [];
var len__20610__auto___34175 = arguments.length;
var i__20611__auto___34176 = (0);
while(true){
if((i__20611__auto___34176 < len__20610__auto___34175)){
args34101.push((arguments[i__20611__auto___34176]));

var G__34177 = (i__20611__auto___34176 + (1));
i__20611__auto___34176 = G__34177;
continue;
} else {
}
break;
}

var G__34103 = args34101.length;
switch (G__34103) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34101.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24018__auto___34179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24018__auto___34179,out){
return (function (){
var f__24019__auto__ = (function (){var switch__23953__auto__ = ((function (c__24018__auto___34179,out){
return (function (state_34145){
var state_val_34146 = (state_34145[(1)]);
if((state_val_34146 === (7))){
var inst_34141 = (state_34145[(2)]);
var state_34145__$1 = state_34145;
var statearr_34147_34180 = state_34145__$1;
(statearr_34147_34180[(2)] = inst_34141);

(statearr_34147_34180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (1))){
var inst_34104 = [];
var inst_34105 = inst_34104;
var inst_34106 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34145__$1 = (function (){var statearr_34148 = state_34145;
(statearr_34148[(7)] = inst_34106);

(statearr_34148[(8)] = inst_34105);

return statearr_34148;
})();
var statearr_34149_34181 = state_34145__$1;
(statearr_34149_34181[(2)] = null);

(statearr_34149_34181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (4))){
var inst_34109 = (state_34145[(9)]);
var inst_34109__$1 = (state_34145[(2)]);
var inst_34110 = (inst_34109__$1 == null);
var inst_34111 = cljs.core.not.call(null,inst_34110);
var state_34145__$1 = (function (){var statearr_34150 = state_34145;
(statearr_34150[(9)] = inst_34109__$1);

return statearr_34150;
})();
if(inst_34111){
var statearr_34151_34182 = state_34145__$1;
(statearr_34151_34182[(1)] = (5));

} else {
var statearr_34152_34183 = state_34145__$1;
(statearr_34152_34183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (15))){
var inst_34135 = (state_34145[(2)]);
var state_34145__$1 = state_34145;
var statearr_34153_34184 = state_34145__$1;
(statearr_34153_34184[(2)] = inst_34135);

(statearr_34153_34184[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (13))){
var state_34145__$1 = state_34145;
var statearr_34154_34185 = state_34145__$1;
(statearr_34154_34185[(2)] = null);

(statearr_34154_34185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (6))){
var inst_34105 = (state_34145[(8)]);
var inst_34130 = inst_34105.length;
var inst_34131 = (inst_34130 > (0));
var state_34145__$1 = state_34145;
if(cljs.core.truth_(inst_34131)){
var statearr_34155_34186 = state_34145__$1;
(statearr_34155_34186[(1)] = (12));

} else {
var statearr_34156_34187 = state_34145__$1;
(statearr_34156_34187[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (3))){
var inst_34143 = (state_34145[(2)]);
var state_34145__$1 = state_34145;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34145__$1,inst_34143);
} else {
if((state_val_34146 === (12))){
var inst_34105 = (state_34145[(8)]);
var inst_34133 = cljs.core.vec.call(null,inst_34105);
var state_34145__$1 = state_34145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34145__$1,(15),out,inst_34133);
} else {
if((state_val_34146 === (2))){
var state_34145__$1 = state_34145;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34145__$1,(4),ch);
} else {
if((state_val_34146 === (11))){
var inst_34109 = (state_34145[(9)]);
var inst_34113 = (state_34145[(10)]);
var inst_34123 = (state_34145[(2)]);
var inst_34124 = [];
var inst_34125 = inst_34124.push(inst_34109);
var inst_34105 = inst_34124;
var inst_34106 = inst_34113;
var state_34145__$1 = (function (){var statearr_34157 = state_34145;
(statearr_34157[(7)] = inst_34106);

(statearr_34157[(11)] = inst_34123);

(statearr_34157[(8)] = inst_34105);

(statearr_34157[(12)] = inst_34125);

return statearr_34157;
})();
var statearr_34158_34188 = state_34145__$1;
(statearr_34158_34188[(2)] = null);

(statearr_34158_34188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (9))){
var inst_34105 = (state_34145[(8)]);
var inst_34121 = cljs.core.vec.call(null,inst_34105);
var state_34145__$1 = state_34145;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34145__$1,(11),out,inst_34121);
} else {
if((state_val_34146 === (5))){
var inst_34109 = (state_34145[(9)]);
var inst_34113 = (state_34145[(10)]);
var inst_34106 = (state_34145[(7)]);
var inst_34113__$1 = f.call(null,inst_34109);
var inst_34114 = cljs.core._EQ_.call(null,inst_34113__$1,inst_34106);
var inst_34115 = cljs.core.keyword_identical_QMARK_.call(null,inst_34106,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34116 = (inst_34114) || (inst_34115);
var state_34145__$1 = (function (){var statearr_34159 = state_34145;
(statearr_34159[(10)] = inst_34113__$1);

return statearr_34159;
})();
if(cljs.core.truth_(inst_34116)){
var statearr_34160_34189 = state_34145__$1;
(statearr_34160_34189[(1)] = (8));

} else {
var statearr_34161_34190 = state_34145__$1;
(statearr_34161_34190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (14))){
var inst_34138 = (state_34145[(2)]);
var inst_34139 = cljs.core.async.close_BANG_.call(null,out);
var state_34145__$1 = (function (){var statearr_34163 = state_34145;
(statearr_34163[(13)] = inst_34138);

return statearr_34163;
})();
var statearr_34164_34191 = state_34145__$1;
(statearr_34164_34191[(2)] = inst_34139);

(statearr_34164_34191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (10))){
var inst_34128 = (state_34145[(2)]);
var state_34145__$1 = state_34145;
var statearr_34165_34192 = state_34145__$1;
(statearr_34165_34192[(2)] = inst_34128);

(statearr_34165_34192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34146 === (8))){
var inst_34109 = (state_34145[(9)]);
var inst_34113 = (state_34145[(10)]);
var inst_34105 = (state_34145[(8)]);
var inst_34118 = inst_34105.push(inst_34109);
var tmp34162 = inst_34105;
var inst_34105__$1 = tmp34162;
var inst_34106 = inst_34113;
var state_34145__$1 = (function (){var statearr_34166 = state_34145;
(statearr_34166[(7)] = inst_34106);

(statearr_34166[(14)] = inst_34118);

(statearr_34166[(8)] = inst_34105__$1);

return statearr_34166;
})();
var statearr_34167_34193 = state_34145__$1;
(statearr_34167_34193[(2)] = null);

(statearr_34167_34193[(1)] = (2));


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
});})(c__24018__auto___34179,out))
;
return ((function (switch__23953__auto__,c__24018__auto___34179,out){
return (function() {
var cljs$core$async$state_machine__23954__auto__ = null;
var cljs$core$async$state_machine__23954__auto____0 = (function (){
var statearr_34171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34171[(0)] = cljs$core$async$state_machine__23954__auto__);

(statearr_34171[(1)] = (1));

return statearr_34171;
});
var cljs$core$async$state_machine__23954__auto____1 = (function (state_34145){
while(true){
var ret_value__23955__auto__ = (function (){try{while(true){
var result__23956__auto__ = switch__23953__auto__.call(null,state_34145);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23956__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23956__auto__;
}
break;
}
}catch (e34172){if((e34172 instanceof Object)){
var ex__23957__auto__ = e34172;
var statearr_34173_34194 = state_34145;
(statearr_34173_34194[(5)] = ex__23957__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34145);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34195 = state_34145;
state_34145 = G__34195;
continue;
} else {
return ret_value__23955__auto__;
}
break;
}
});
cljs$core$async$state_machine__23954__auto__ = function(state_34145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23954__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23954__auto____1.call(this,state_34145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23954__auto____0;
cljs$core$async$state_machine__23954__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23954__auto____1;
return cljs$core$async$state_machine__23954__auto__;
})()
;})(switch__23953__auto__,c__24018__auto___34179,out))
})();
var state__24020__auto__ = (function (){var statearr_34174 = f__24019__auto__.call(null);
(statearr_34174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24018__auto___34179);

return statearr_34174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24020__auto__);
});})(c__24018__auto___34179,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map