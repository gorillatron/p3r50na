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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20149__auto__,k62348,else__20150__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
var G__62350 = (((k62348 instanceof cljs.core.Keyword))?k62348.fqn:null);
switch (G__62350) {
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
return cljs.core.get.call(null,self__.__extmap,k62348,else__20150__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__62347){
var self__ = this;
var G__62347__$1 = this;
return (new cljs.core.RecordIter((0),G__62347__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20154__auto__,k__20155__auto__,G__62347){
var self__ = this;
var this__20154__auto____$1 = this;
var pred__62351 = cljs.core.keyword_identical_QMARK_;
var expr__62352 = k__20155__auto__;
if(cljs.core.truth_(pred__62351.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__62352))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__62347,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62351.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__62352))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__62347,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62351.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__62352))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__62347,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__62351.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__62352))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,G__62347,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20155__auto__,G__62347),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20146__auto__,G__62347){
var self__ = this;
var this__20146__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,G__62347,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__62349){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__62349),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__62349),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__62349),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__62349),null,cljs.core.dissoc.call(null,G__62349,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
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
var seq__62355_62359 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__62356_62360 = null;
var count__62357_62361 = (0);
var i__62358_62362 = (0);
while(true){
if((i__62358_62362 < count__62357_62361)){
var wall_62363 = cljs.core._nth.call(null,chunk__62356_62360,i__62358_62362);
cljs.core.println.call(null,wall_62363);

var G__62364 = seq__62355_62359;
var G__62365 = chunk__62356_62360;
var G__62366 = count__62357_62361;
var G__62367 = (i__62358_62362 + (1));
seq__62355_62359 = G__62364;
chunk__62356_62360 = G__62365;
count__62357_62361 = G__62366;
i__62358_62362 = G__62367;
continue;
} else {
var temp__4425__auto___62368 = cljs.core.seq.call(null,seq__62355_62359);
if(temp__4425__auto___62368){
var seq__62355_62369__$1 = temp__4425__auto___62368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62355_62369__$1)){
var c__20336__auto___62370 = cljs.core.chunk_first.call(null,seq__62355_62369__$1);
var G__62371 = cljs.core.chunk_rest.call(null,seq__62355_62369__$1);
var G__62372 = c__20336__auto___62370;
var G__62373 = cljs.core.count.call(null,c__20336__auto___62370);
var G__62374 = (0);
seq__62355_62359 = G__62371;
chunk__62356_62360 = G__62372;
count__62357_62361 = G__62373;
i__62358_62362 = G__62374;
continue;
} else {
var wall_62375 = cljs.core.first.call(null,seq__62355_62369__$1);
cljs.core.println.call(null,wall_62375);

var G__62376 = cljs.core.next.call(null,seq__62355_62369__$1);
var G__62377 = null;
var G__62378 = (0);
var G__62379 = (0);
seq__62355_62359 = G__62376;
chunk__62356_62360 = G__62377;
count__62357_62361 = G__62378;
i__62358_62362 = G__62379;
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

var seq__62386_62392 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__62387_62393 = null;
var count__62388_62394 = (0);
var i__62389_62395 = (0);
while(true){
if((i__62389_62395 < count__62388_62394)){
var wall_62396 = cljs.core._nth.call(null,chunk__62387_62393,i__62389_62395);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_62396),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_62396),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__62397 = seq__62386_62392;
var G__62398 = chunk__62387_62393;
var G__62399 = count__62388_62394;
var G__62400 = (i__62389_62395 + (1));
seq__62386_62392 = G__62397;
chunk__62387_62393 = G__62398;
count__62388_62394 = G__62399;
i__62389_62395 = G__62400;
continue;
} else {
var temp__4425__auto___62401 = cljs.core.seq.call(null,seq__62386_62392);
if(temp__4425__auto___62401){
var seq__62386_62402__$1 = temp__4425__auto___62401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62386_62402__$1)){
var c__20336__auto___62403 = cljs.core.chunk_first.call(null,seq__62386_62402__$1);
var G__62404 = cljs.core.chunk_rest.call(null,seq__62386_62402__$1);
var G__62405 = c__20336__auto___62403;
var G__62406 = cljs.core.count.call(null,c__20336__auto___62403);
var G__62407 = (0);
seq__62386_62392 = G__62404;
chunk__62387_62393 = G__62405;
count__62388_62394 = G__62406;
i__62389_62395 = G__62407;
continue;
} else {
var wall_62408 = cljs.core.first.call(null,seq__62386_62402__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_62408),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_62408),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__62409 = cljs.core.next.call(null,seq__62386_62402__$1);
var G__62410 = null;
var G__62411 = (0);
var G__62412 = (0);
seq__62386_62392 = G__62409;
chunk__62387_62393 = G__62410;
count__62388_62394 = G__62411;
i__62389_62395 = G__62412;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(0));

var map__62390 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__62390__$1 = ((((!((map__62390 == null)))?((((map__62390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62390):map__62390);
var x = cljs.core.get.call(null,map__62390__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__62390__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__62390__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return quil.core.rect.call(null,x,y,size,size);
});
p3r50na.apps.bookof5rinds.client.game.component.comp_intersections = (function p3r50na$apps$bookof5rinds$client$game$component$comp_intersections(walls,player){
var iter__20305__auto__ = (function p3r50na$apps$bookof5rinds$client$game$component$comp_intersections_$_iter__62433(s__62434){
return (new cljs.core.LazySeq(null,(function (){
var s__62434__$1 = s__62434;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__62434__$1);
if(temp__4425__auto__){
var s__62434__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__62434__$2)){
var c__20303__auto__ = cljs.core.chunk_first.call(null,s__62434__$2);
var size__20304__auto__ = cljs.core.count.call(null,c__20303__auto__);
var b__62436 = cljs.core.chunk_buffer.call(null,size__20304__auto__);
if((function (){var i__62435 = (0);
while(true){
if((i__62435 < size__20304__auto__)){
var wall = cljs.core._nth.call(null,c__20303__auto__,i__62435);
cljs.core.chunk_append.call(null,b__62436,(function (){var map__62445 = player;
var map__62445__$1 = ((((!((map__62445 == null)))?((((map__62445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62445):map__62445);
var px = cljs.core.get.call(null,map__62445__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__62445__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__62445__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__62446 = wall;
var map__62446__$1 = ((((!((map__62446 == null)))?((((map__62446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62446):map__62446);
var wx = cljs.core.get.call(null,map__62446__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var wy = cljs.core.get.call(null,map__62446__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((px > (wx + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((px + psize) < wx)) || ((py > (wy + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((py + psize) < wy));
})());

var G__62453 = (i__62435 + (1));
i__62435 = G__62453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62436),p3r50na$apps$bookof5rinds$client$game$component$comp_intersections_$_iter__62433.call(null,cljs.core.chunk_rest.call(null,s__62434__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62436),null);
}
} else {
var wall = cljs.core.first.call(null,s__62434__$2);
return cljs.core.cons.call(null,(function (){var map__62449 = player;
var map__62449__$1 = ((((!((map__62449 == null)))?((((map__62449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62449):map__62449);
var px = cljs.core.get.call(null,map__62449__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__62449__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var psize = cljs.core.get.call(null,map__62449__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__62450 = wall;
var map__62450__$1 = ((((!((map__62450 == null)))?((((map__62450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62450):map__62450);
var wx = cljs.core.get.call(null,map__62450__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var wy = cljs.core.get.call(null,map__62450__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return ((px > (wx + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((px + psize) < wx)) || ((py > (wy + p3r50na.apps.bookof5rinds.client.game.component.blocksize))) || (((py + psize) < wy));
})(),p3r50na$apps$bookof5rinds$client$game$component$comp_intersections_$_iter__62433.call(null,cljs.core.rest.call(null,s__62434__$2)));
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
var map__62457 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__62457__$1 = ((((!((map__62457 == null)))?((((map__62457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62457):map__62457);
var x = cljs.core.get.call(null,map__62457__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__62457__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__62457__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__62457,map__62457__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__62459 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__62459) {
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
});})(map__62457,map__62457__$1,x,y,speed))
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
var G__62461__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__62461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62462__i = 0, G__62462__a = new Array(arguments.length -  0);
while (G__62462__i < G__62462__a.length) {G__62462__a[G__62462__i] = arguments[G__62462__i + 0]; ++G__62462__i;}
  args = new cljs.core.IndexedSeq(G__62462__a,0);
} 
return G__62461__delegate.call(this,args);};
G__62461.cljs$lang$maxFixedArity = 0;
G__62461.cljs$lang$applyTo = (function (arglist__62463){
var args = cljs.core.seq(arglist__62463);
return G__62461__delegate(args);
});
G__62461.cljs$core$IFn$_invoke$arity$variadic = G__62461__delegate;
return G__62461;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.component.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_matrix,p3r50na.apps.bookof5rinds.client.game.component.blocksize),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__62464__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__62464 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62465__i = 0, G__62465__a = new Array(arguments.length -  0);
while (G__62465__i < G__62465__a.length) {G__62465__a[G__62465__i] = arguments[G__62465__i + 0]; ++G__62465__i;}
  args = new cljs.core.IndexedSeq(G__62465__a,0);
} 
return G__62464__delegate.call(this,args);};
G__62464.cljs$lang$maxFixedArity = 0;
G__62464.cljs$lang$applyTo = (function (arglist__62466){
var args = cljs.core.seq(arglist__62466);
return G__62464__delegate(args);
});
G__62464.cljs$core$IFn$_invoke$arity$variadic = G__62464__delegate;
return G__62464;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__62467__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__62467 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62468__i = 0, G__62468__a = new Array(arguments.length -  0);
while (G__62468__i < G__62468__a.length) {G__62468__a[G__62468__i] = arguments[G__62468__i + 0]; ++G__62468__i;}
  args = new cljs.core.IndexedSeq(G__62468__a,0);
} 
return G__62467__delegate.call(this,args);};
G__62467.cljs$lang$maxFixedArity = 0;
G__62467.cljs$lang$applyTo = (function (arglist__62469){
var args = cljs.core.seq(arglist__62469);
return G__62467__delegate(args);
});
G__62467.cljs$core$IFn$_invoke$arity$variadic = G__62467__delegate;
return G__62467;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__62470__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__62470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62471__i = 0, G__62471__a = new Array(arguments.length -  0);
while (G__62471__i < G__62471__a.length) {G__62471__a[G__62471__i] = arguments[G__62471__i + 0]; ++G__62471__i;}
  args = new cljs.core.IndexedSeq(G__62471__a,0);
} 
return G__62470__delegate.call(this,args);};
G__62470.cljs$lang$maxFixedArity = 0;
G__62470.cljs$lang$applyTo = (function (arglist__62472){
var args = cljs.core.seq(arglist__62472);
return G__62470__delegate(args);
});
G__62470.cljs$core$IFn$_invoke$arity$variadic = G__62470__delegate;
return G__62470;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__62473__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__62473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62474__i = 0, G__62474__a = new Array(arguments.length -  0);
while (G__62474__i < G__62474__a.length) {G__62474__a[G__62474__i] = arguments[G__62474__i + 0]; ++G__62474__i;}
  args = new cljs.core.IndexedSeq(G__62474__a,0);
} 
return G__62473__delegate.call(this,args);};
G__62473.cljs$lang$maxFixedArity = 0;
G__62473.cljs$lang$applyTo = (function (arglist__62475){
var args = cljs.core.seq(arglist__62475);
return G__62473__delegate(args);
});
G__62473.cljs$core$IFn$_invoke$arity$variadic = G__62473__delegate;
return G__62473;
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
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t62479 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t62479 = (function (game_component,meta62480){
this.game_component = game_component;
this.meta62480 = meta62480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t62479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62481,meta62480__$1){
var self__ = this;
var _62481__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t62479(self__.game_component,meta62480__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t62479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62481){
var self__ = this;
var _62481__$1 = this;
return self__.meta62480;
});

p3r50na.apps.bookof5rinds.client.game.component.t62479.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t62479.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.hello.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t62479.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t62479.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t62479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta62480","meta62480",2052995297,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t62479.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t62479.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t62479";

p3r50na.apps.bookof5rinds.client.game.component.t62479.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t62479");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t62479 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t62479(game_component__$1,meta62480){
return (new p3r50na.apps.bookof5rinds.client.game.component.t62479(game_component__$1,meta62480));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t62479(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map