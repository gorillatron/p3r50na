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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20149__auto__,k67785,else__20150__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
var G__67787 = (((k67785 instanceof cljs.core.Keyword))?k67785.fqn:null);
switch (G__67787) {
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
return cljs.core.get.call(null,self__.__extmap,k67785,else__20150__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67784){
var self__ = this;
var G__67784__$1 = this;
return (new cljs.core.RecordIter((0),G__67784__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20154__auto__,k__20155__auto__,G__67784){
var self__ = this;
var this__20154__auto____$1 = this;
var pred__67788 = cljs.core.keyword_identical_QMARK_;
var expr__67789 = k__20155__auto__;
if(cljs.core.truth_(pred__67788.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__67789))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__67784,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67788.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__67789))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__67784,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67788.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__67789))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__67784,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__67788.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__67789))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,G__67784,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20155__auto__,G__67784),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20146__auto__,G__67784){
var self__ = this;
var this__20146__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,G__67784,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__67786){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__67786),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__67786),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__67786),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__67786),null,cljs.core.dissoc.call(null,G__67786,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
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
var seq__67792_67796 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__67793_67797 = null;
var count__67794_67798 = (0);
var i__67795_67799 = (0);
while(true){
if((i__67795_67799 < count__67794_67798)){
var wall_67800 = cljs.core._nth.call(null,chunk__67793_67797,i__67795_67799);
cljs.core.println.call(null,wall_67800);

var G__67801 = seq__67792_67796;
var G__67802 = chunk__67793_67797;
var G__67803 = count__67794_67798;
var G__67804 = (i__67795_67799 + (1));
seq__67792_67796 = G__67801;
chunk__67793_67797 = G__67802;
count__67794_67798 = G__67803;
i__67795_67799 = G__67804;
continue;
} else {
var temp__4425__auto___67805 = cljs.core.seq.call(null,seq__67792_67796);
if(temp__4425__auto___67805){
var seq__67792_67806__$1 = temp__4425__auto___67805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67792_67806__$1)){
var c__20336__auto___67807 = cljs.core.chunk_first.call(null,seq__67792_67806__$1);
var G__67808 = cljs.core.chunk_rest.call(null,seq__67792_67806__$1);
var G__67809 = c__20336__auto___67807;
var G__67810 = cljs.core.count.call(null,c__20336__auto___67807);
var G__67811 = (0);
seq__67792_67796 = G__67808;
chunk__67793_67797 = G__67809;
count__67794_67798 = G__67810;
i__67795_67799 = G__67811;
continue;
} else {
var wall_67812 = cljs.core.first.call(null,seq__67792_67806__$1);
cljs.core.println.call(null,wall_67812);

var G__67813 = cljs.core.next.call(null,seq__67792_67806__$1);
var G__67814 = null;
var G__67815 = (0);
var G__67816 = (0);
seq__67792_67796 = G__67813;
chunk__67793_67797 = G__67814;
count__67794_67798 = G__67815;
i__67795_67799 = G__67816;
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

var seq__67831_67845 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__67832_67846 = null;
var count__67833_67847 = (0);
var i__67834_67848 = (0);
while(true){
if((i__67834_67848 < count__67833_67847)){
var wall_67849 = cljs.core._nth.call(null,chunk__67832_67846,i__67834_67848);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_67849),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_67849),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__67850 = seq__67831_67845;
var G__67851 = chunk__67832_67846;
var G__67852 = count__67833_67847;
var G__67853 = (i__67834_67848 + (1));
seq__67831_67845 = G__67850;
chunk__67832_67846 = G__67851;
count__67833_67847 = G__67852;
i__67834_67848 = G__67853;
continue;
} else {
var temp__4425__auto___67854 = cljs.core.seq.call(null,seq__67831_67845);
if(temp__4425__auto___67854){
var seq__67831_67855__$1 = temp__4425__auto___67854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67831_67855__$1)){
var c__20336__auto___67856 = cljs.core.chunk_first.call(null,seq__67831_67855__$1);
var G__67857 = cljs.core.chunk_rest.call(null,seq__67831_67855__$1);
var G__67858 = c__20336__auto___67856;
var G__67859 = cljs.core.count.call(null,c__20336__auto___67856);
var G__67860 = (0);
seq__67831_67845 = G__67857;
chunk__67832_67846 = G__67858;
count__67833_67847 = G__67859;
i__67834_67848 = G__67860;
continue;
} else {
var wall_67861 = cljs.core.first.call(null,seq__67831_67855__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_67861),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_67861),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__67862 = cljs.core.next.call(null,seq__67831_67855__$1);
var G__67863 = null;
var G__67864 = (0);
var G__67865 = (0);
seq__67831_67845 = G__67862;
chunk__67832_67846 = G__67863;
count__67833_67847 = G__67864;
i__67834_67848 = G__67865;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(0));

var seq__67835_67866 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var chunk__67836_67867 = null;
var count__67837_67868 = (0);
var i__67838_67869 = (0);
while(true){
if((i__67838_67869 < count__67837_67868)){
var remote_player_67870 = cljs.core._nth.call(null,chunk__67836_67867,i__67838_67869);
var map__67839_67871 = remote_player_67870;
var map__67839_67872__$1 = ((((!((map__67839_67871 == null)))?((((map__67839_67871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67839_67871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67839_67871):map__67839_67871);
var x_67873 = cljs.core.get.call(null,map__67839_67872__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_67874 = cljs.core.get.call(null,map__67839_67872__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_67875 = cljs.core.get.call(null,map__67839_67872__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_67873,y_67874,size_67875,size_67875);

var G__67876 = seq__67835_67866;
var G__67877 = chunk__67836_67867;
var G__67878 = count__67837_67868;
var G__67879 = (i__67838_67869 + (1));
seq__67835_67866 = G__67876;
chunk__67836_67867 = G__67877;
count__67837_67868 = G__67878;
i__67838_67869 = G__67879;
continue;
} else {
var temp__4425__auto___67880 = cljs.core.seq.call(null,seq__67835_67866);
if(temp__4425__auto___67880){
var seq__67835_67881__$1 = temp__4425__auto___67880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67835_67881__$1)){
var c__20336__auto___67882 = cljs.core.chunk_first.call(null,seq__67835_67881__$1);
var G__67883 = cljs.core.chunk_rest.call(null,seq__67835_67881__$1);
var G__67884 = c__20336__auto___67882;
var G__67885 = cljs.core.count.call(null,c__20336__auto___67882);
var G__67886 = (0);
seq__67835_67866 = G__67883;
chunk__67836_67867 = G__67884;
count__67837_67868 = G__67885;
i__67838_67869 = G__67886;
continue;
} else {
var remote_player_67887 = cljs.core.first.call(null,seq__67835_67881__$1);
var map__67841_67888 = remote_player_67887;
var map__67841_67889__$1 = ((((!((map__67841_67888 == null)))?((((map__67841_67888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67841_67888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67841_67888):map__67841_67888);
var x_67890 = cljs.core.get.call(null,map__67841_67889__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_67891 = cljs.core.get.call(null,map__67841_67889__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_67892 = cljs.core.get.call(null,map__67841_67889__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_67890,y_67891,size_67892,size_67892);

var G__67893 = cljs.core.next.call(null,seq__67835_67881__$1);
var G__67894 = null;
var G__67895 = (0);
var G__67896 = (0);
seq__67835_67866 = G__67893;
chunk__67836_67867 = G__67894;
count__67837_67868 = G__67895;
i__67838_67869 = G__67896;
continue;
}
} else {
}
}
break;
}

var map__67843 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__67843__$1 = ((((!((map__67843 == null)))?((((map__67843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67843):map__67843);
var x = cljs.core.get.call(null,map__67843__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__67843__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__67843__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return quil.core.rect.call(null,x,y,size,size);
});
p3r50na.apps.bookof5rinds.client.game.component.comp_intersections = (function p3r50na$apps$bookof5rinds$client$game$component$comp_intersections(walls,player){
var iter__20305__auto__ = (function p3r50na$apps$bookof5rinds$client$game$component$comp_intersections_$_iter__67917(s__67918){
return (new cljs.core.LazySeq(null,(function (){
var s__67918__$1 = s__67918;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__67918__$1);
if(temp__4425__auto__){
var s__67918__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67918__$2)){
var c__20303__auto__ = cljs.core.chunk_first.call(null,s__67918__$2);
var size__20304__auto__ = cljs.core.count.call(null,c__20303__auto__);
var b__67920 = cljs.core.chunk_buffer.call(null,size__20304__auto__);
if((function (){var i__67919 = (0);
while(true){
if((i__67919 < size__20304__auto__)){
var wall = cljs.core._nth.call(null,c__20303__auto__,i__67919);
cljs.core.chunk_append.call(null,b__67920,(function (){var map__67929 = player;
var map__67929__$1 = ((((!((map__67929 == null)))?((((map__67929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67929):map__67929);
var px = cljs.core.get.call(null,map__67929__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__67929__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__67929__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__67930 = wall;
var map__67930__$1 = ((((!((map__67930 == null)))?((((map__67930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67930):map__67930);
var wx = cljs.core.get.call(null,map__67930__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var wy = cljs.core.get.call(null,map__67930__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((px > (wx + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((px + psize) < wx)) || ((py > (wy + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((py + psize) < wy));
})());

var G__67937 = (i__67919 + (1));
i__67919 = G__67937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67920),p3r50na$apps$bookof5rinds$client$game$component$comp_intersections_$_iter__67917.call(null,cljs.core.chunk_rest.call(null,s__67918__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67920),null);
}
} else {
var wall = cljs.core.first.call(null,s__67918__$2);
return cljs.core.cons.call(null,(function (){var map__67933 = player;
var map__67933__$1 = ((((!((map__67933 == null)))?((((map__67933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67933):map__67933);
var px = cljs.core.get.call(null,map__67933__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__67933__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__67933__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__67934 = wall;
var map__67934__$1 = ((((!((map__67934 == null)))?((((map__67934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67934):map__67934);
var wx = cljs.core.get.call(null,map__67934__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var wy = cljs.core.get.call(null,map__67934__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((px > (wx + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((px + psize) < wx)) || ((py > (wy + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((py + psize) < wy));
})(),p3r50na$apps$bookof5rinds$client$game$component$comp_intersections_$_iter__67917.call(null,cljs.core.rest.call(null,s__67918__$2)));
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
var map__67941 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__67941__$1 = ((((!((map__67941 == null)))?((((map__67941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67941):map__67941);
var x = cljs.core.get.call(null,map__67941__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__67941__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__67941__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__67941,map__67941__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__67943 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__67943) {
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
});})(map__67941,map__67941__$1,x,y,speed))
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
var G__67945__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__67945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67946__i = 0, G__67946__a = new Array(arguments.length -  0);
while (G__67946__i < G__67946__a.length) {G__67946__a[G__67946__i] = arguments[G__67946__i + 0]; ++G__67946__i;}
  args = new cljs.core.IndexedSeq(G__67946__a,0);
} 
return G__67945__delegate.call(this,args);};
G__67945.cljs$lang$maxFixedArity = 0;
G__67945.cljs$lang$applyTo = (function (arglist__67947){
var args = cljs.core.seq(arglist__67947);
return G__67945__delegate(args);
});
G__67945.cljs$core$IFn$_invoke$arity$variadic = G__67945__delegate;
return G__67945;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.component.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_matrix,p3r50na.apps.bookof5rinds.client.game.component.blocksize),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__67948__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__67948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67949__i = 0, G__67949__a = new Array(arguments.length -  0);
while (G__67949__i < G__67949__a.length) {G__67949__a[G__67949__i] = arguments[G__67949__i + 0]; ++G__67949__i;}
  args = new cljs.core.IndexedSeq(G__67949__a,0);
} 
return G__67948__delegate.call(this,args);};
G__67948.cljs$lang$maxFixedArity = 0;
G__67948.cljs$lang$applyTo = (function (arglist__67950){
var args = cljs.core.seq(arglist__67950);
return G__67948__delegate(args);
});
G__67948.cljs$core$IFn$_invoke$arity$variadic = G__67948__delegate;
return G__67948;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__67951__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__67951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67952__i = 0, G__67952__a = new Array(arguments.length -  0);
while (G__67952__i < G__67952__a.length) {G__67952__a[G__67952__i] = arguments[G__67952__i + 0]; ++G__67952__i;}
  args = new cljs.core.IndexedSeq(G__67952__a,0);
} 
return G__67951__delegate.call(this,args);};
G__67951.cljs$lang$maxFixedArity = 0;
G__67951.cljs$lang$applyTo = (function (arglist__67953){
var args = cljs.core.seq(arglist__67953);
return G__67951__delegate(args);
});
G__67951.cljs$core$IFn$_invoke$arity$variadic = G__67951__delegate;
return G__67951;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__67954__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__67954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67955__i = 0, G__67955__a = new Array(arguments.length -  0);
while (G__67955__i < G__67955__a.length) {G__67955__a[G__67955__i] = arguments[G__67955__i + 0]; ++G__67955__i;}
  args = new cljs.core.IndexedSeq(G__67955__a,0);
} 
return G__67954__delegate.call(this,args);};
G__67954.cljs$lang$maxFixedArity = 0;
G__67954.cljs$lang$applyTo = (function (arglist__67956){
var args = cljs.core.seq(arglist__67956);
return G__67954__delegate(args);
});
G__67954.cljs$core$IFn$_invoke$arity$variadic = G__67954__delegate;
return G__67954;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__67957__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__67957 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67958__i = 0, G__67958__a = new Array(arguments.length -  0);
while (G__67958__i < G__67958__a.length) {G__67958__a[G__67958__i] = arguments[G__67958__i + 0]; ++G__67958__i;}
  args = new cljs.core.IndexedSeq(G__67958__a,0);
} 
return G__67957__delegate.call(this,args);};
G__67957.cljs$lang$maxFixedArity = 0;
G__67957.cljs$lang$applyTo = (function (arglist__67959){
var args = cljs.core.seq(arglist__67959);
return G__67957__delegate(args);
});
G__67957.cljs$core$IFn$_invoke$arity$variadic = G__67957__delegate;
return G__67957;
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
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t67963 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t67963 = (function (game_component,meta67964){
this.game_component = game_component;
this.meta67964 = meta67964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t67963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67965,meta67964__$1){
var self__ = this;
var _67965__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t67963(self__.game_component,meta67964__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t67963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67965){
var self__ = this;
var _67965__$1 = this;
return self__.meta67964;
});

p3r50na.apps.bookof5rinds.client.game.component.t67963.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t67963.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.hello.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t67963.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t67963.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t67963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta67964","meta67964",1107549428,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t67963.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t67963.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t67963";

p3r50na.apps.bookof5rinds.client.game.component.t67963.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t67963");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t67963 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t67963(game_component__$1,meta67964){
return (new p3r50na.apps.bookof5rinds.client.game.component.t67963(game_component__$1,meta67964));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t67963(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map