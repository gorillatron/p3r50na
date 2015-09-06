// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
p3r50na.apps.bookof5rinds.client.rindidates = (function p3r50na$apps$bookof5rinds$client$rindidates(data){
return React.DOM.ul(null,cljs.core.map.call(null,(function (name){
return React.DOM.li(null,name);
}),new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(data)));
});
p3r50na.apps.bookof5rinds.client.widget = (function p3r50na$apps$bookof5rinds$client$widget(data,owner){
if(typeof p3r50na.apps.bookof5rinds.client.t26335 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.t26335 = (function (widget,data,owner,meta26336){
this.widget = widget;
this.data = data;
this.owner = owner;
this.meta26336 = meta26336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.t26335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26337,meta26336__$1){
var self__ = this;
var _26337__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.t26335(self__.widget,self__.data,self__.owner,meta26336__$1));
});

p3r50na.apps.bookof5rinds.client.t26335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26337){
var self__ = this;
var _26337__$1 = this;
return self__.meta26336;
});

p3r50na.apps.bookof5rinds.client.t26335.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.t26335.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,p3r50na.apps.bookof5rinds.client.rindidates.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rindidates","rindidates",445830364),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b"], null)], null)),React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

p3r50na.apps.bookof5rinds.client.t26335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"widget","widget",786562584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta26336","meta26336",-1530964584,null)], null);
});

p3r50na.apps.bookof5rinds.client.t26335.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.t26335.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client/t26335";

p3r50na.apps.bookof5rinds.client.t26335.cljs$lang$ctorPrWriter = (function (this__20150__auto__,writer__20151__auto__,opt__20152__auto__){
return cljs.core._write.call(null,writer__20151__auto__,"p3r50na.apps.bookof5rinds.client/t26335");
});

p3r50na.apps.bookof5rinds.client.__GT_t26335 = (function p3r50na$apps$bookof5rinds$client$widget_$___GT_t26335(widget__$1,data__$1,owner__$1,meta26336){
return (new p3r50na.apps.bookof5rinds.client.t26335(widget__$1,data__$1,owner__$1,meta26336));
});

}

return (new p3r50na.apps.bookof5rinds.client.t26335(p3r50na$apps$bookof5rinds$client$widget,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello worlds waaat!"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=client.js.map