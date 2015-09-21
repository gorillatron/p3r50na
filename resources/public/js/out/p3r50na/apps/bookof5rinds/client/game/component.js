// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.component');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);

p3r50na.apps.bookof5rinds.client.game.component.GameObject = {};


p3r50na.apps.bookof5rinds.client.game.component.Movable = {};


p3r50na.apps.bookof5rinds.client.game.component.Static = {};


/**
* @constructor
* @param {*} x
* @param {*} y
* @param {*} size
* @param {*} speed
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
p3r50na.apps.bookof5rinds.client.game.component.Player = (function (x,y,size,speed,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.size = size;
this.speed = speed;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20147__auto__,k__20148__auto__){
var self__ = this;
var this__20147__auto____$1 = this;
return cljs.core._lookup.call(null,this__20147__auto____$1,k__20148__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20149__auto__,k49328,else__20150__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
var G__49330 = (((k49328 instanceof cljs.core.Keyword))?k49328.fqn:null);
switch (G__49330) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
case "size":
return self__.size;

break;
case "speed":
return self__.speed;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49328,else__20150__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20161__auto__,writer__20162__auto__,opts__20163__auto__){
var self__ = this;
var this__20161__auto____$1 = this;
var pr_pair__20164__auto__ = ((function (this__20161__auto____$1){
return (function (keyval__20165__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20162__auto__,cljs.core.pr_writer,""," ","",opts__20163__auto__,keyval__20165__auto__);
});})(this__20161__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20162__auto__,pr_pair__20164__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.Player{",", ","}",opts__20163__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49327){
var self__ = this;
var G__49327__$1 = this;
return (new cljs.core.RecordIter((0),G__49327__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.p3r50na$apps$bookof5rinds$client$game$component$GameObject$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20141__auto__){
var self__ = this;
var this__20141__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20151__auto__){
var self__ = this;
var this__20151__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20142__auto__){
var self__ = this;
var this__20142__auto____$1 = this;
var h__19968__auto__ = self__.__hash;
if(!((h__19968__auto__ == null))){
return h__19968__auto__;
} else {
var h__19968__auto____$1 = cljs.core.hash_imap.call(null,this__20142__auto____$1);
self__.__hash = h__19968__auto____$1;

return h__19968__auto____$1;
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20143__auto__,other__20144__auto__){
var self__ = this;
var this__20143__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19540__auto__ = other__20144__auto__;
if(cljs.core.truth_(and__19540__auto__)){
var and__19540__auto____$1 = (this__20143__auto____$1.constructor === other__20144__auto__.constructor);
if(and__19540__auto____$1){
return cljs.core.equiv_map.call(null,this__20143__auto____$1,other__20144__auto__);
} else {
return and__19540__auto____$1;
}
} else {
return and__19540__auto__;
}
})())){
return true;
} else {
return false;
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.p3r50na$apps$bookof5rinds$client$game$component$Movable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20156__auto__,k__20157__auto__){
var self__ = this;
var this__20156__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__20157__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20156__auto____$1),self__.__meta),k__20157__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20157__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20154__auto__,k__20155__auto__,G__49327){
var self__ = this;
var this__20154__auto____$1 = this;
var pred__49331 = cljs.core.keyword_identical_QMARK_;
var expr__49332 = k__20155__auto__;
if(cljs.core.truth_(pred__49331.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49332))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__49327,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49331.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49332))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__49327,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49331.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__49332))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__49327,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49331.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__49332))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,G__49327,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20155__auto__,G__49327),null));
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20159__auto__){
var self__ = this;
var this__20159__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20146__auto__,G__49327){
var self__ = this;
var this__20146__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,G__49327,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20152__auto__,entry__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20153__auto__)){
return cljs.core._assoc.call(null,this__20152__auto____$1,cljs.core._nth.call(null,entry__20153__auto__,(0)),cljs.core._nth.call(null,entry__20153__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20152__auto____$1,entry__20153__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrSeq = (function (this__20181__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrWriter = (function (this__20181__auto__,writer__20182__auto__){
return cljs.core._write.call(null,writer__20182__auto__,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_Player(x,y,size,speed){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(x,y,size,speed,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__49329){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49329),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49329),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__49329),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__49329),null,cljs.core.dissoc.call(null,G__49329,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.map_matrix = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null)], null);
p3r50na.apps.bookof5rinds.client.game.component.blocksize = ((20) | (0));
p3r50na.apps.bookof5rinds.client.game.component.map_size = (function p3r50na$apps$bookof5rinds$client$game$component$map_size(map_matrix,blocksize){
var x = (blocksize * cljs.core.count.call(null,cljs.core.first.call(null,map_matrix)));
var y = (blocksize * cljs.core.count.call(null,map_matrix));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.frame_rate.call(null,(60));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player((0),(0),(10),(2),null,null,null)),new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null);
});
p3r50na.apps.bookof5rinds.client.game.component.walls = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.map_indexed.call(null,(function (ydx,row){
return cljs.core.map_indexed.call(null,(function (xdx,block){
var y = (ydx * p3r50na.apps.bookof5rinds.client.game.component.blocksize);
var x = (xdx * p3r50na.apps.bookof5rinds.client.game.component.blocksize);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(block))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
} else {
return null;
}
}),row);
}),p3r50na.apps.bookof5rinds.client.game.component.map_matrix)));
var seq__49335_49339 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__49336_49340 = null;
var count__49337_49341 = (0);
var i__49338_49342 = (0);
while(true){
if((i__49338_49342 < count__49337_49341)){
var wall_49343 = cljs.core._nth.call(null,chunk__49336_49340,i__49338_49342);
cljs.core.println.call(null,wall_49343);

var G__49344 = seq__49335_49339;
var G__49345 = chunk__49336_49340;
var G__49346 = count__49337_49341;
var G__49347 = (i__49338_49342 + (1));
seq__49335_49339 = G__49344;
chunk__49336_49340 = G__49345;
count__49337_49341 = G__49346;
i__49338_49342 = G__49347;
continue;
} else {
var temp__4425__auto___49348 = cljs.core.seq.call(null,seq__49335_49339);
if(temp__4425__auto___49348){
var seq__49335_49349__$1 = temp__4425__auto___49348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49335_49349__$1)){
var c__20336__auto___49350 = cljs.core.chunk_first.call(null,seq__49335_49349__$1);
var G__49351 = cljs.core.chunk_rest.call(null,seq__49335_49349__$1);
var G__49352 = c__20336__auto___49350;
var G__49353 = cljs.core.count.call(null,c__20336__auto___49350);
var G__49354 = (0);
seq__49335_49339 = G__49351;
chunk__49336_49340 = G__49352;
count__49337_49341 = G__49353;
i__49338_49342 = G__49354;
continue;
} else {
var wall_49355 = cljs.core.first.call(null,seq__49335_49349__$1);
cljs.core.println.call(null,wall_49355);

var G__49356 = cljs.core.next.call(null,seq__49335_49349__$1);
var G__49357 = null;
var G__49358 = (0);
var G__49359 = (0);
seq__49335_49339 = G__49356;
chunk__49336_49340 = G__49357;
count__49337_49341 = G__49358;
i__49338_49342 = G__49359;
continue;
}
} else {
}
}
break;
}
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

quil.core.fill.call(null,(0));

var seq__49366_49372 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__49367_49373 = null;
var count__49368_49374 = (0);
var i__49369_49375 = (0);
while(true){
if((i__49369_49375 < count__49368_49374)){
var wall_49376 = cljs.core._nth.call(null,chunk__49367_49373,i__49369_49375);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_49376),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_49376),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__49377 = seq__49366_49372;
var G__49378 = chunk__49367_49373;
var G__49379 = count__49368_49374;
var G__49380 = (i__49369_49375 + (1));
seq__49366_49372 = G__49377;
chunk__49367_49373 = G__49378;
count__49368_49374 = G__49379;
i__49369_49375 = G__49380;
continue;
} else {
var temp__4425__auto___49381 = cljs.core.seq.call(null,seq__49366_49372);
if(temp__4425__auto___49381){
var seq__49366_49382__$1 = temp__4425__auto___49381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49366_49382__$1)){
var c__20336__auto___49383 = cljs.core.chunk_first.call(null,seq__49366_49382__$1);
var G__49384 = cljs.core.chunk_rest.call(null,seq__49366_49382__$1);
var G__49385 = c__20336__auto___49383;
var G__49386 = cljs.core.count.call(null,c__20336__auto___49383);
var G__49387 = (0);
seq__49366_49372 = G__49384;
chunk__49367_49373 = G__49385;
count__49368_49374 = G__49386;
i__49369_49375 = G__49387;
continue;
} else {
var wall_49388 = cljs.core.first.call(null,seq__49366_49382__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_49388),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_49388),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__49389 = cljs.core.next.call(null,seq__49366_49382__$1);
var G__49390 = null;
var G__49391 = (0);
var G__49392 = (0);
seq__49366_49372 = G__49389;
chunk__49367_49373 = G__49390;
count__49368_49374 = G__49391;
i__49369_49375 = G__49392;
continue;
}
} else {
}
}
break;
}

var map__49370 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__49370__$1 = ((((!((map__49370 == null)))?((((map__49370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49370):map__49370);
var x = cljs.core.get.call(null,map__49370__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__49370__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__49370__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return quil.core.rect.call(null,x,y,size,size);
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__49396 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__49396__$1 = ((((!((map__49396 == null)))?((((map__49396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49396):map__49396);
var x = cljs.core.get.call(null,map__49396__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__49396__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__49396__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
return cljs.core.reduce.call(null,((function (map__49396,map__49396__$1,x,y,speed){
return (function (state__$1,controll){
var G__49398 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__49398) {
case "w":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._,speed);

break;
case "s":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,speed);

break;
case "a":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._,speed);

break;
case "d":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,speed);

break;
default:
return state__$1;

}
});})(map__49396,map__49396__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
}
});
p3r50na.apps.bookof5rinds.client.game.component.cupdate = (function p3r50na$apps$bookof5rinds$client$game$component$cupdate(state){
return p3r50na.apps.bookof5rinds.client.game.component.apply_controll.call(null,state);
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_down = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_down(state,event){
var keycode = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controlls","controlls",-310267444)], null),cljs.core.conj,keycode);
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(state){
var keycode = quil.core.key_as_keyword.call(null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controlls","controlls",-310267444)], null),cljs.core.disj,keycode);
});
cljs.core.println.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_matrix,p3r50na.apps.bookof5rinds.client.game.component.blocksize));
p3r50na.apps.bookof5rinds.client.game.component.hello = (function p3r50na$apps$bookof5rinds$client$game$component$hello(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__49400__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__49400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49401__i = 0, G__49401__a = new Array(arguments.length -  0);
while (G__49401__i < G__49401__a.length) {G__49401__a[G__49401__i] = arguments[G__49401__i + 0]; ++G__49401__i;}
  args = new cljs.core.IndexedSeq(G__49401__a,0);
} 
return G__49400__delegate.call(this,args);};
G__49400.cljs$lang$maxFixedArity = 0;
G__49400.cljs$lang$applyTo = (function (arglist__49402){
var args = cljs.core.seq(arglist__49402);
return G__49400__delegate(args);
});
G__49400.cljs$core$IFn$_invoke$arity$variadic = G__49400__delegate;
return G__49400;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.component.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_matrix,p3r50na.apps.bookof5rinds.client.game.component.blocksize),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__49403__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__49403 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49404__i = 0, G__49404__a = new Array(arguments.length -  0);
while (G__49404__i < G__49404__a.length) {G__49404__a[G__49404__i] = arguments[G__49404__i + 0]; ++G__49404__i;}
  args = new cljs.core.IndexedSeq(G__49404__a,0);
} 
return G__49403__delegate.call(this,args);};
G__49403.cljs$lang$maxFixedArity = 0;
G__49403.cljs$lang$applyTo = (function (arglist__49405){
var args = cljs.core.seq(arglist__49405);
return G__49403__delegate(args);
});
G__49403.cljs$core$IFn$_invoke$arity$variadic = G__49403__delegate;
return G__49403;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__49406__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__49406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49407__i = 0, G__49407__a = new Array(arguments.length -  0);
while (G__49407__i < G__49407__a.length) {G__49407__a[G__49407__i] = arguments[G__49407__i + 0]; ++G__49407__i;}
  args = new cljs.core.IndexedSeq(G__49407__a,0);
} 
return G__49406__delegate.call(this,args);};
G__49406.cljs$lang$maxFixedArity = 0;
G__49406.cljs$lang$applyTo = (function (arglist__49408){
var args = cljs.core.seq(arglist__49408);
return G__49406__delegate(args);
});
G__49406.cljs$core$IFn$_invoke$arity$variadic = G__49406__delegate;
return G__49406;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__49409__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__49409 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49410__i = 0, G__49410__a = new Array(arguments.length -  0);
while (G__49410__i < G__49410__a.length) {G__49410__a[G__49410__i] = arguments[G__49410__i + 0]; ++G__49410__i;}
  args = new cljs.core.IndexedSeq(G__49410__a,0);
} 
return G__49409__delegate.call(this,args);};
G__49409.cljs$lang$maxFixedArity = 0;
G__49409.cljs$lang$applyTo = (function (arglist__49411){
var args = cljs.core.seq(arglist__49411);
return G__49409__delegate(args);
});
G__49409.cljs$core$IFn$_invoke$arity$variadic = G__49409__delegate;
return G__49409;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__49412__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__49412 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49413__i = 0, G__49413__a = new Array(arguments.length -  0);
while (G__49413__i < G__49413__a.length) {G__49413__a[G__49413__i] = arguments[G__49413__i + 0]; ++G__49413__i;}
  args = new cljs.core.IndexedSeq(G__49413__a,0);
} 
return G__49412__delegate.call(this,args);};
G__49412.cljs$lang$maxFixedArity = 0;
G__49412.cljs$lang$applyTo = (function (arglist__49414){
var args = cljs.core.seq(arglist__49414);
return G__49412__delegate(args);
});
G__49412.cljs$core$IFn$_invoke$arity$variadic = G__49412__delegate;
return G__49412;
})()
:p3r50na.apps.bookof5rinds.client.game.component.draw));
});
goog.exportSymbol('p3r50na.apps.bookof5rinds.client.game.component.hello', p3r50na.apps.bookof5rinds.client.game.component.hello);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23406__23407__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__23406__23407__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p3r50na.apps.bookof5rinds.client.game.component.hello,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t49418 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t49418 = (function (game_component,meta49419){
this.game_component = game_component;
this.meta49419 = meta49419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t49418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49420,meta49419__$1){
var self__ = this;
var _49420__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t49418(self__.game_component,meta49419__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t49418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49420){
var self__ = this;
var _49420__$1 = this;
return self__.meta49419;
});

p3r50na.apps.bookof5rinds.client.game.component.t49418.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t49418.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.hello.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t49418.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t49418.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t49418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta49419","meta49419",-455103457,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t49418.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t49418.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t49418";

p3r50na.apps.bookof5rinds.client.game.component.t49418.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t49418");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t49418 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t49418(game_component__$1,meta49419){
return (new p3r50na.apps.bookof5rinds.client.game.component.t49418(game_component__$1,meta49419));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t49418(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map