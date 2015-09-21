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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20149__auto__,k70106,else__20150__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
var G__70108 = (((k70106 instanceof cljs.core.Keyword))?k70106.fqn:null);
switch (G__70108) {
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
return cljs.core.get.call(null,self__.__extmap,k70106,else__20150__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__70105){
var self__ = this;
var G__70105__$1 = this;
return (new cljs.core.RecordIter((0),G__70105__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20154__auto__,k__20155__auto__,G__70105){
var self__ = this;
var this__20154__auto____$1 = this;
var pred__70109 = cljs.core.keyword_identical_QMARK_;
var expr__70110 = k__20155__auto__;
if(cljs.core.truth_(pred__70109.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__70110))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__70105,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70109.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__70110))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__70105,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70109.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__70110))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__70105,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__70109.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__70110))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,G__70105,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20155__auto__,G__70105),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20146__auto__,G__70105){
var self__ = this;
var this__20146__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,G__70105,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__70107){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__70107),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__70107),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__70107),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__70107),null,cljs.core.dissoc.call(null,G__70107,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.map_matrix = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null)], null)], null);
p3r50na.apps.bookof5rinds.client.game.component.blocksize = ((20) | (0));
p3r50na.apps.bookof5rinds.client.game.component.map_size = (function p3r50na$apps$bookof5rinds$client$game$component$map_size(map_matrix,blocksize){
var x = (blocksize * cljs.core.count.call(null,cljs.core.first.call(null,map_matrix)));
var y = (blocksize * cljs.core.count.call(null,map_matrix));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.frame_rate.call(null,(60));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player((0),(0),(10),(2),null,null,null)),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new p3r50na.apps.bookof5rinds.client.game.component.Player((100),(50),(10),(2),null,null,null))], null),new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null);
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
var seq__70113_70117 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__70114_70118 = null;
var count__70115_70119 = (0);
var i__70116_70120 = (0);
while(true){
if((i__70116_70120 < count__70115_70119)){
var wall_70121 = cljs.core._nth.call(null,chunk__70114_70118,i__70116_70120);
cljs.core.println.call(null,wall_70121);

var G__70122 = seq__70113_70117;
var G__70123 = chunk__70114_70118;
var G__70124 = count__70115_70119;
var G__70125 = (i__70116_70120 + (1));
seq__70113_70117 = G__70122;
chunk__70114_70118 = G__70123;
count__70115_70119 = G__70124;
i__70116_70120 = G__70125;
continue;
} else {
var temp__4425__auto___70126 = cljs.core.seq.call(null,seq__70113_70117);
if(temp__4425__auto___70126){
var seq__70113_70127__$1 = temp__4425__auto___70126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70113_70127__$1)){
var c__20336__auto___70128 = cljs.core.chunk_first.call(null,seq__70113_70127__$1);
var G__70129 = cljs.core.chunk_rest.call(null,seq__70113_70127__$1);
var G__70130 = c__20336__auto___70128;
var G__70131 = cljs.core.count.call(null,c__20336__auto___70128);
var G__70132 = (0);
seq__70113_70117 = G__70129;
chunk__70114_70118 = G__70130;
count__70115_70119 = G__70131;
i__70116_70120 = G__70132;
continue;
} else {
var wall_70133 = cljs.core.first.call(null,seq__70113_70127__$1);
cljs.core.println.call(null,wall_70133);

var G__70134 = cljs.core.next.call(null,seq__70113_70127__$1);
var G__70135 = null;
var G__70136 = (0);
var G__70137 = (0);
seq__70113_70117 = G__70134;
chunk__70114_70118 = G__70135;
count__70115_70119 = G__70136;
i__70116_70120 = G__70137;
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

var seq__70152_70166 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__70153_70167 = null;
var count__70154_70168 = (0);
var i__70155_70169 = (0);
while(true){
if((i__70155_70169 < count__70154_70168)){
var wall_70170 = cljs.core._nth.call(null,chunk__70153_70167,i__70155_70169);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_70170),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_70170),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__70171 = seq__70152_70166;
var G__70172 = chunk__70153_70167;
var G__70173 = count__70154_70168;
var G__70174 = (i__70155_70169 + (1));
seq__70152_70166 = G__70171;
chunk__70153_70167 = G__70172;
count__70154_70168 = G__70173;
i__70155_70169 = G__70174;
continue;
} else {
var temp__4425__auto___70175 = cljs.core.seq.call(null,seq__70152_70166);
if(temp__4425__auto___70175){
var seq__70152_70176__$1 = temp__4425__auto___70175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70152_70176__$1)){
var c__20336__auto___70177 = cljs.core.chunk_first.call(null,seq__70152_70176__$1);
var G__70178 = cljs.core.chunk_rest.call(null,seq__70152_70176__$1);
var G__70179 = c__20336__auto___70177;
var G__70180 = cljs.core.count.call(null,c__20336__auto___70177);
var G__70181 = (0);
seq__70152_70166 = G__70178;
chunk__70153_70167 = G__70179;
count__70154_70168 = G__70180;
i__70155_70169 = G__70181;
continue;
} else {
var wall_70182 = cljs.core.first.call(null,seq__70152_70176__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_70182),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_70182),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__70183 = cljs.core.next.call(null,seq__70152_70176__$1);
var G__70184 = null;
var G__70185 = (0);
var G__70186 = (0);
seq__70152_70166 = G__70183;
chunk__70153_70167 = G__70184;
count__70154_70168 = G__70185;
i__70155_70169 = G__70186;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(0));

var seq__70156_70187 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var chunk__70157_70188 = null;
var count__70158_70189 = (0);
var i__70159_70190 = (0);
while(true){
if((i__70159_70190 < count__70158_70189)){
var remote_player_70191 = cljs.core._nth.call(null,chunk__70157_70188,i__70159_70190);
var map__70160_70192 = remote_player_70191;
var map__70160_70193__$1 = ((((!((map__70160_70192 == null)))?((((map__70160_70192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70160_70192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70160_70192):map__70160_70192);
var x_70194 = cljs.core.get.call(null,map__70160_70193__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_70195 = cljs.core.get.call(null,map__70160_70193__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_70196 = cljs.core.get.call(null,map__70160_70193__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_70194,y_70195,size_70196,size_70196);

var G__70197 = seq__70156_70187;
var G__70198 = chunk__70157_70188;
var G__70199 = count__70158_70189;
var G__70200 = (i__70159_70190 + (1));
seq__70156_70187 = G__70197;
chunk__70157_70188 = G__70198;
count__70158_70189 = G__70199;
i__70159_70190 = G__70200;
continue;
} else {
var temp__4425__auto___70201 = cljs.core.seq.call(null,seq__70156_70187);
if(temp__4425__auto___70201){
var seq__70156_70202__$1 = temp__4425__auto___70201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70156_70202__$1)){
var c__20336__auto___70203 = cljs.core.chunk_first.call(null,seq__70156_70202__$1);
var G__70204 = cljs.core.chunk_rest.call(null,seq__70156_70202__$1);
var G__70205 = c__20336__auto___70203;
var G__70206 = cljs.core.count.call(null,c__20336__auto___70203);
var G__70207 = (0);
seq__70156_70187 = G__70204;
chunk__70157_70188 = G__70205;
count__70158_70189 = G__70206;
i__70159_70190 = G__70207;
continue;
} else {
var remote_player_70208 = cljs.core.first.call(null,seq__70156_70202__$1);
var map__70162_70209 = remote_player_70208;
var map__70162_70210__$1 = ((((!((map__70162_70209 == null)))?((((map__70162_70209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70162_70209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70162_70209):map__70162_70209);
var x_70211 = cljs.core.get.call(null,map__70162_70210__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_70212 = cljs.core.get.call(null,map__70162_70210__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_70213 = cljs.core.get.call(null,map__70162_70210__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_70211,y_70212,size_70213,size_70213);

var G__70214 = cljs.core.next.call(null,seq__70156_70202__$1);
var G__70215 = null;
var G__70216 = (0);
var G__70217 = (0);
seq__70156_70187 = G__70214;
chunk__70157_70188 = G__70215;
count__70158_70189 = G__70216;
i__70159_70190 = G__70217;
continue;
}
} else {
}
}
break;
}

var map__70164 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__70164__$1 = ((((!((map__70164 == null)))?((((map__70164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70164):map__70164);
var x = cljs.core.get.call(null,map__70164__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__70164__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__70164__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return quil.core.rect.call(null,x,y,size,size);
});
p3r50na.apps.bookof5rinds.client.game.component.comp_intersections = (function p3r50na$apps$bookof5rinds$client$game$component$comp_intersections(walls,player){
var iter__20305__auto__ = (function p3r50na$apps$bookof5rinds$client$game$component$comp_intersections_$_iter__70238(s__70239){
return (new cljs.core.LazySeq(null,(function (){
var s__70239__$1 = s__70239;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__70239__$1);
if(temp__4425__auto__){
var s__70239__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70239__$2)){
var c__20303__auto__ = cljs.core.chunk_first.call(null,s__70239__$2);
var size__20304__auto__ = cljs.core.count.call(null,c__20303__auto__);
var b__70241 = cljs.core.chunk_buffer.call(null,size__20304__auto__);
if((function (){var i__70240 = (0);
while(true){
if((i__70240 < size__20304__auto__)){
var wall = cljs.core._nth.call(null,c__20303__auto__,i__70240);
cljs.core.chunk_append.call(null,b__70241,(function (){var map__70250 = player;
var map__70250__$1 = ((((!((map__70250 == null)))?((((map__70250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70250):map__70250);
var px = cljs.core.get.call(null,map__70250__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__70250__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__70250__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__70251 = wall;
var map__70251__$1 = ((((!((map__70251 == null)))?((((map__70251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70251):map__70251);
var wx = cljs.core.get.call(null,map__70251__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var wy = cljs.core.get.call(null,map__70251__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((px > (wx + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((px + psize) < wx)) || ((py > (wy + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((py + psize) < wy));
})());

var G__70258 = (i__70240 + (1));
i__70240 = G__70258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70241),p3r50na$apps$bookof5rinds$client$game$component$comp_intersections_$_iter__70238.call(null,cljs.core.chunk_rest.call(null,s__70239__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70241),null);
}
} else {
var wall = cljs.core.first.call(null,s__70239__$2);
return cljs.core.cons.call(null,(function (){var map__70254 = player;
var map__70254__$1 = ((((!((map__70254 == null)))?((((map__70254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70254):map__70254);
var px = cljs.core.get.call(null,map__70254__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__70254__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__70254__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__70255 = wall;
var map__70255__$1 = ((((!((map__70255 == null)))?((((map__70255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70255):map__70255);
var wx = cljs.core.get.call(null,map__70255__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var wy = cljs.core.get.call(null,map__70255__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((px > (wx + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((px + psize) < wx)) || ((py > (wy + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((py + psize) < wy));
})(),p3r50na$apps$bookof5rinds$client$game$component$comp_intersections_$_iter__70238.call(null,cljs.core.rest.call(null,s__70239__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20305__auto__.call(null,walls);
});
p3r50na.apps.bookof5rinds.client.game.component.intersects_wall_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$component$intersects_wall_QMARK_(state){
var intersections = p3r50na.apps.bookof5rinds.client.game.component.comp_intersections.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));
var nri = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.false_QMARK_,intersections));
return ((0) < nri);
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__70262 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__70262__$1 = ((((!((map__70262 == null)))?((((map__70262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70262):map__70262);
var x = cljs.core.get.call(null,map__70262__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__70262__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__70262__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__70262,map__70262__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__70264 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__70264) {
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
})();
if(cljs.core.truth_(p3r50na.apps.bookof5rinds.client.game.component.intersects_wall_QMARK_.call(null,newstate))){
return state__$1;
} else {
return newstate;
}
});})(map__70262,map__70262__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
return newstate;
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
var G__70266__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__70266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70267__i = 0, G__70267__a = new Array(arguments.length -  0);
while (G__70267__i < G__70267__a.length) {G__70267__a[G__70267__i] = arguments[G__70267__i + 0]; ++G__70267__i;}
  args = new cljs.core.IndexedSeq(G__70267__a,0);
} 
return G__70266__delegate.call(this,args);};
G__70266.cljs$lang$maxFixedArity = 0;
G__70266.cljs$lang$applyTo = (function (arglist__70268){
var args = cljs.core.seq(arglist__70268);
return G__70266__delegate(args);
});
G__70266.cljs$core$IFn$_invoke$arity$variadic = G__70266__delegate;
return G__70266;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.component.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_matrix,p3r50na.apps.bookof5rinds.client.game.component.blocksize),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__70269__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__70269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70270__i = 0, G__70270__a = new Array(arguments.length -  0);
while (G__70270__i < G__70270__a.length) {G__70270__a[G__70270__i] = arguments[G__70270__i + 0]; ++G__70270__i;}
  args = new cljs.core.IndexedSeq(G__70270__a,0);
} 
return G__70269__delegate.call(this,args);};
G__70269.cljs$lang$maxFixedArity = 0;
G__70269.cljs$lang$applyTo = (function (arglist__70271){
var args = cljs.core.seq(arglist__70271);
return G__70269__delegate(args);
});
G__70269.cljs$core$IFn$_invoke$arity$variadic = G__70269__delegate;
return G__70269;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__70272__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__70272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70273__i = 0, G__70273__a = new Array(arguments.length -  0);
while (G__70273__i < G__70273__a.length) {G__70273__a[G__70273__i] = arguments[G__70273__i + 0]; ++G__70273__i;}
  args = new cljs.core.IndexedSeq(G__70273__a,0);
} 
return G__70272__delegate.call(this,args);};
G__70272.cljs$lang$maxFixedArity = 0;
G__70272.cljs$lang$applyTo = (function (arglist__70274){
var args = cljs.core.seq(arglist__70274);
return G__70272__delegate(args);
});
G__70272.cljs$core$IFn$_invoke$arity$variadic = G__70272__delegate;
return G__70272;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__70275__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__70275 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70276__i = 0, G__70276__a = new Array(arguments.length -  0);
while (G__70276__i < G__70276__a.length) {G__70276__a[G__70276__i] = arguments[G__70276__i + 0]; ++G__70276__i;}
  args = new cljs.core.IndexedSeq(G__70276__a,0);
} 
return G__70275__delegate.call(this,args);};
G__70275.cljs$lang$maxFixedArity = 0;
G__70275.cljs$lang$applyTo = (function (arglist__70277){
var args = cljs.core.seq(arglist__70277);
return G__70275__delegate(args);
});
G__70275.cljs$core$IFn$_invoke$arity$variadic = G__70275__delegate;
return G__70275;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__70278__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__70278 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70279__i = 0, G__70279__a = new Array(arguments.length -  0);
while (G__70279__i < G__70279__a.length) {G__70279__a[G__70279__i] = arguments[G__70279__i + 0]; ++G__70279__i;}
  args = new cljs.core.IndexedSeq(G__70279__a,0);
} 
return G__70278__delegate.call(this,args);};
G__70278.cljs$lang$maxFixedArity = 0;
G__70278.cljs$lang$applyTo = (function (arglist__70280){
var args = cljs.core.seq(arglist__70280);
return G__70278__delegate(args);
});
G__70278.cljs$core$IFn$_invoke$arity$variadic = G__70278__delegate;
return G__70278;
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
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t70284 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t70284 = (function (game_component,meta70285){
this.game_component = game_component;
this.meta70285 = meta70285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t70284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70286,meta70285__$1){
var self__ = this;
var _70286__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t70284(self__.game_component,meta70285__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t70284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70286){
var self__ = this;
var _70286__$1 = this;
return self__.meta70285;
});

p3r50na.apps.bookof5rinds.client.game.component.t70284.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t70284.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.hello.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t70284.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t70284.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t70284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta70285","meta70285",1632359496,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t70284.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t70284.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t70284";

p3r50na.apps.bookof5rinds.client.game.component.t70284.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t70284");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t70284 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t70284(game_component__$1,meta70285){
return (new p3r50na.apps.bookof5rinds.client.game.component.t70284(game_component__$1,meta70285));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t70284(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map