// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
p3r50na.apps.bookof5rinds.client.rindidates = (function p3r50na$apps$bookof5rinds$client$rindidates(data){
return React.DOM.ul(null,(function (){var iter__20324__auto__ = (function p3r50na$apps$bookof5rinds$client$rindidates_$_iter__24289(s__24290){
return (new cljs.core.LazySeq(null,(function (){
var s__24290__$1 = s__24290;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24290__$1);
if(temp__4425__auto__){
var s__24290__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24290__$2)){
var c__20322__auto__ = cljs.core.chunk_first.call(null,s__24290__$2);
var size__20323__auto__ = cljs.core.count.call(null,c__20322__auto__);
var b__24292 = cljs.core.chunk_buffer.call(null,size__20323__auto__);
if((function (){var i__24291 = (0);
while(true){
if((i__24291 < size__20323__auto__)){
var rindidate = cljs.core._nth.call(null,c__20322__auto__,i__24291);
cljs.core.chunk_append.call(null,b__24292,React.DOM.li(null,rindidate));

var G__24293 = (i__24291 + (1));
i__24291 = G__24293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24292),p3r50na$apps$bookof5rinds$client$rindidates_$_iter__24289.call(null,cljs.core.chunk_rest.call(null,s__24290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24292),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__24290__$2);
return cljs.core.cons.call(null,React.DOM.li(null,rindidate),p3r50na$apps$bookof5rinds$client$rindidates_$_iter__24289.call(null,cljs.core.rest.call(null,s__24290__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20324__auto__.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(data));
})());
});
p3r50na.apps.bookof5rinds.client.widget = (function p3r50na$apps$bookof5rinds$client$widget(data,owner){
if(typeof p3r50na.apps.bookof5rinds.client.t24297 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.t24297 = (function (widget,data,owner,meta24298){
this.widget = widget;
this.data = data;
this.owner = owner;
this.meta24298 = meta24298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.t24297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24299,meta24298__$1){
var self__ = this;
var _24299__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.t24297(self__.widget,self__.data,self__.owner,meta24298__$1));
});

p3r50na.apps.bookof5rinds.client.t24297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24299){
var self__ = this;
var _24299__$1 = this;
return self__.meta24298;
});

p3r50na.apps.bookof5rinds.client.t24297.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.t24297.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,p3r50na.apps.bookof5rinds.client.rindidates.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rindidates","rindidates",445830364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)], null)),React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

p3r50na.apps.bookof5rinds.client.t24297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta24298","meta24298",629975904,null)], null);
});

p3r50na.apps.bookof5rinds.client.t24297.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.t24297.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client/t24297";

p3r50na.apps.bookof5rinds.client.t24297.cljs$lang$ctorPrWriter = (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"p3r50na.apps.bookof5rinds.client/t24297");
});

p3r50na.apps.bookof5rinds.client.__GT_t24297 = (function p3r50na$apps$bookof5rinds$client$widget_$___GT_t24297(widget__$1,data__$1,owner__$1,meta24298){
return (new p3r50na.apps.bookof5rinds.client.t24297(widget__$1,data__$1,owner__$1,meta24298));
});

}

return (new p3r50na.apps.bookof5rinds.client.t24297(p3r50na$apps$bookof5rinds$client$widget,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello worlds waaat!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=client.js.map