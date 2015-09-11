// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
p3r50na.apps.bookof5rinds.client.now = (function p3r50na$apps$bookof5rinds$client$now(){
return cljs.core.quot.call(null,(new Date()).getTime(),(1000));
});
p3r50na.apps.bookof5rinds.client.max_id = cljs.core.atom.call(null,(0));
p3r50na.apps.bookof5rinds.client.conn = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
p3r50na.apps.bookof5rinds.client.conn.onopen = (function (e){
return p3r50na.apps.bookof5rinds.client.conn.send(JSON.stringify((function (){var obj27735 = {"command":"getall"};
return obj27735;
})()));
});
p3r50na.apps.bookof5rinds.client.conn.onerror = (function (){
alert("error");

return console.log(arguments$);
});
p3r50na.apps.bookof5rinds.client.conn.onmessage = (function (e){
var msgs = JSON.parse(e.data);
return console.log("MESSAGE:",msgs);
});
p3r50na.apps.bookof5rinds.client.rindidates = (function p3r50na$apps$bookof5rinds$client$rindidates(data){
return React.DOM.ul(null,(function (){var iter__20277__auto__ = (function p3r50na$apps$bookof5rinds$client$rindidates_$_iter__27740(s__27741){
return (new cljs.core.LazySeq(null,(function (){
var s__27741__$1 = s__27741;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27741__$1);
if(temp__4425__auto__){
var s__27741__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27741__$2)){
var c__20275__auto__ = cljs.core.chunk_first.call(null,s__27741__$2);
var size__20276__auto__ = cljs.core.count.call(null,c__20275__auto__);
var b__27743 = cljs.core.chunk_buffer.call(null,size__20276__auto__);
if((function (){var i__27742 = (0);
while(true){
if((i__27742 < size__20276__auto__)){
var rindidate = cljs.core._nth.call(null,c__20275__auto__,i__27742);
cljs.core.chunk_append.call(null,b__27743,React.DOM.li(null,rindidate));

var G__27744 = (i__27742 + (1));
i__27742 = G__27744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27743),p3r50na$apps$bookof5rinds$client$rindidates_$_iter__27740.call(null,cljs.core.chunk_rest.call(null,s__27741__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27743),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__27741__$2);
return cljs.core.cons.call(null,React.DOM.li(null,rindidate),p3r50na$apps$bookof5rinds$client$rindidates_$_iter__27740.call(null,cljs.core.rest.call(null,s__27741__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20277__auto__.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(data));
})());
});
p3r50na.apps.bookof5rinds.client.widget = (function p3r50na$apps$bookof5rinds$client$widget(data,owner){
if(typeof p3r50na.apps.bookof5rinds.client.t27748 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.t27748 = (function (widget,data,owner,meta27749){
this.widget = widget;
this.data = data;
this.owner = owner;
this.meta27749 = meta27749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.t27748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27750,meta27749__$1){
var self__ = this;
var _27750__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.t27748(self__.widget,self__.data,self__.owner,meta27749__$1));
});

p3r50na.apps.bookof5rinds.client.t27748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27750){
var self__ = this;
var _27750__$1 = this;
return self__.meta27749;
});

p3r50na.apps.bookof5rinds.client.t27748.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.t27748.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,p3r50na.apps.bookof5rinds.client.rindidates.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rindidates","rindidates",445830364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)], null)),React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

p3r50na.apps.bookof5rinds.client.t27748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta27749","meta27749",1444528122,null)], null);
});

p3r50na.apps.bookof5rinds.client.t27748.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.t27748.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client/t27748";

p3r50na.apps.bookof5rinds.client.t27748.cljs$lang$ctorPrWriter = (function (this__20103__auto__,writer__20104__auto__,opt__20105__auto__){
return cljs.core._write.call(null,writer__20104__auto__,"p3r50na.apps.bookof5rinds.client/t27748");
});

p3r50na.apps.bookof5rinds.client.__GT_t27748 = (function p3r50na$apps$bookof5rinds$client$widget_$___GT_t27748(widget__$1,data__$1,owner__$1,meta27749){
return (new p3r50na.apps.bookof5rinds.client.t27748(widget__$1,data__$1,owner__$1,meta27749));
});

}

return (new p3r50na.apps.bookof5rinds.client.t27748(p3r50na$apps$bookof5rinds$client$widget,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello worlds waaat!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=client.js.map