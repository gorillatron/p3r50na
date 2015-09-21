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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20149__auto__,k31554,else__20150__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
var G__31556 = (((k31554 instanceof cljs.core.Keyword))?k31554.fqn:null);
switch (G__31556) {
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
return cljs.core.get.call(null,self__.__extmap,k31554,else__20150__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31553){
var self__ = this;
var G__31553__$1 = this;
return (new cljs.core.RecordIter((0),G__31553__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20154__auto__,k__20155__auto__,G__31553){
var self__ = this;
var this__20154__auto____$1 = this;
var pred__31557 = cljs.core.keyword_identical_QMARK_;
var expr__31558 = k__20155__auto__;
if(cljs.core.truth_(pred__31557.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__31558))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__31553,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31557.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__31558))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__31553,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31557.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__31558))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__31553,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31557.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__31558))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,G__31553,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20155__auto__,G__31553),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20146__auto__,G__31553){
var self__ = this;
var this__20146__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,G__31553,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__31555){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__31555),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__31555),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__31555),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__31555),null,cljs.core.dissoc.call(null,G__31555,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.map_matrix = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"w","w",354169001)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"g","g",1738089905)], null)], null)], null);
p3r50na.apps.bookof5rinds.client.game.component.blocksize = ((10) | (0));
p3r50na.apps.bookof5rinds.client.game.component.map_size = (function p3r50na$apps$bookof5rinds$client$game$component$map_size(map_matrix,blocksize){
cljs.core.println.call(null,cljs.core.count.call(null,cljs.core.first.call(null,map_matrix)));

var x = (blocksize * cljs.core.count.call(null,cljs.core.first.call(null,map_matrix)));
var y = (blocksize * cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.first.call(null,map_matrix))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.frame_rate.call(null,(60));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player((30),(30),(10),(2),null,null,null)),new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null);
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(0));

var map__31563 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__31563__$1 = ((((!((map__31563 == null)))?((((map__31563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31563):map__31563);
var x = cljs.core.get.call(null,map__31563__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31563__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__31563__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return quil.core.rect.call(null,x,y,size,size);
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__31568 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__31568__$1 = ((((!((map__31568 == null)))?((((map__31568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31568):map__31568);
var x = cljs.core.get.call(null,map__31568__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__31568__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__31568__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
return cljs.core.reduce.call(null,((function (map__31568,map__31568__$1,x,y,speed){
return (function (state__$1,controll){
var G__31570 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__31570) {
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
});})(map__31568,map__31568__$1,x,y,speed))
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
cljs.core.println.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_matrix));
p3r50na.apps.bookof5rinds.client.game.component.hello = (function p3r50na$apps$bookof5rinds$client$game$component$hello(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__31572__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__31572 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31573__i = 0, G__31573__a = new Array(arguments.length -  0);
while (G__31573__i < G__31573__a.length) {G__31573__a[G__31573__i] = arguments[G__31573__i + 0]; ++G__31573__i;}
  args = new cljs.core.IndexedSeq(G__31573__a,0);
} 
return G__31572__delegate.call(this,args);};
G__31572.cljs$lang$maxFixedArity = 0;
G__31572.cljs$lang$applyTo = (function (arglist__31574){
var args = cljs.core.seq(arglist__31574);
return G__31572__delegate(args);
});
G__31572.cljs$core$IFn$_invoke$arity$variadic = G__31572__delegate;
return G__31572;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.component.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_matrix,p3r50na.apps.bookof5rinds.client.game.component.blocksize),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__31575__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__31575 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31576__i = 0, G__31576__a = new Array(arguments.length -  0);
while (G__31576__i < G__31576__a.length) {G__31576__a[G__31576__i] = arguments[G__31576__i + 0]; ++G__31576__i;}
  args = new cljs.core.IndexedSeq(G__31576__a,0);
} 
return G__31575__delegate.call(this,args);};
G__31575.cljs$lang$maxFixedArity = 0;
G__31575.cljs$lang$applyTo = (function (arglist__31577){
var args = cljs.core.seq(arglist__31577);
return G__31575__delegate(args);
});
G__31575.cljs$core$IFn$_invoke$arity$variadic = G__31575__delegate;
return G__31575;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__31578__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__31578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31579__i = 0, G__31579__a = new Array(arguments.length -  0);
while (G__31579__i < G__31579__a.length) {G__31579__a[G__31579__i] = arguments[G__31579__i + 0]; ++G__31579__i;}
  args = new cljs.core.IndexedSeq(G__31579__a,0);
} 
return G__31578__delegate.call(this,args);};
G__31578.cljs$lang$maxFixedArity = 0;
G__31578.cljs$lang$applyTo = (function (arglist__31580){
var args = cljs.core.seq(arglist__31580);
return G__31578__delegate(args);
});
G__31578.cljs$core$IFn$_invoke$arity$variadic = G__31578__delegate;
return G__31578;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__31581__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__31581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31582__i = 0, G__31582__a = new Array(arguments.length -  0);
while (G__31582__i < G__31582__a.length) {G__31582__a[G__31582__i] = arguments[G__31582__i + 0]; ++G__31582__i;}
  args = new cljs.core.IndexedSeq(G__31582__a,0);
} 
return G__31581__delegate.call(this,args);};
G__31581.cljs$lang$maxFixedArity = 0;
G__31581.cljs$lang$applyTo = (function (arglist__31583){
var args = cljs.core.seq(arglist__31583);
return G__31581__delegate(args);
});
G__31581.cljs$core$IFn$_invoke$arity$variadic = G__31581__delegate;
return G__31581;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__31584__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__31584 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31585__i = 0, G__31585__a = new Array(arguments.length -  0);
while (G__31585__i < G__31585__a.length) {G__31585__a[G__31585__i] = arguments[G__31585__i + 0]; ++G__31585__i;}
  args = new cljs.core.IndexedSeq(G__31585__a,0);
} 
return G__31584__delegate.call(this,args);};
G__31584.cljs$lang$maxFixedArity = 0;
G__31584.cljs$lang$applyTo = (function (arglist__31586){
var args = cljs.core.seq(arglist__31586);
return G__31584__delegate(args);
});
G__31584.cljs$core$IFn$_invoke$arity$variadic = G__31584__delegate;
return G__31584;
})()
:p3r50na.apps.bookof5rinds.client.game.component.draw));
});
goog.exportSymbol('p3r50na.apps.bookof5rinds.client.game.component.hello', p3r50na.apps.bookof5rinds.client.game.component.hello);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23438__23439__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__23438__23439__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p3r50na.apps.bookof5rinds.client.game.component.hello,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t31590 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t31590 = (function (game_component,meta31591){
this.game_component = game_component;
this.meta31591 = meta31591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t31590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31592,meta31591__$1){
var self__ = this;
var _31592__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t31590(self__.game_component,meta31591__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t31590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31592){
var self__ = this;
var _31592__$1 = this;
return self__.meta31591;
});

p3r50na.apps.bookof5rinds.client.game.component.t31590.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t31590.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.hello.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t31590.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t31590.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas"}));
});

p3r50na.apps.bookof5rinds.client.game.component.t31590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta31591","meta31591",256116799,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t31590.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t31590.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t31590";

p3r50na.apps.bookof5rinds.client.game.component.t31590.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t31590");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t31590 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t31590(game_component__$1,meta31591){
return (new p3r50na.apps.bookof5rinds.client.game.component.t31590(game_component__$1,meta31591));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t31590(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map