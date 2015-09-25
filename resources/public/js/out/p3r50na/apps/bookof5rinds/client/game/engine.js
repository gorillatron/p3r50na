// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.engine');
goog.require('cljs.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.maps.level1');
goog.require('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('om.dom');
goog.require('p3r50na.apps.bookof5rinds.client.game.map');
goog.require('quil.core');
goog.require('cljs.core.async');
goog.require('quil.middleware');
goog.require('om.core');

/**
* @constructor
* @param {*} player
* @param {*} remote_players
* @param {*} bullets
* @param {*} map
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
p3r50na.apps.bookof5rinds.client.game.engine.GameState = (function (player,remote_players,bullets,map,__meta,__extmap,__hash){
this.player = player;
this.remote_players = remote_players;
this.bullets = bullets;
this.map = map;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20151__auto__,k__20152__auto__){
var self__ = this;
var this__20151__auto____$1 = this;
return cljs.core._lookup.call(null,this__20151__auto____$1,k__20152__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20153__auto__,k94811,else__20154__auto__){
var self__ = this;
var this__20153__auto____$1 = this;
var G__94813 = (((k94811 instanceof cljs.core.Keyword))?k94811.fqn:null);
switch (G__94813) {
case "player":
return self__.player;

break;
case "remote-players":
return self__.remote_players;

break;
case "bullets":
return self__.bullets;

break;
case "map":
return self__.map;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k94811,else__20154__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20165__auto__,writer__20166__auto__,opts__20167__auto__){
var self__ = this;
var this__20165__auto____$1 = this;
var pr_pair__20168__auto__ = ((function (this__20165__auto____$1){
return (function (keyval__20169__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,cljs.core.pr_writer,""," ","",opts__20167__auto__,keyval__20169__auto__);
});})(this__20165__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,pr_pair__20168__auto__,"#p3r50na.apps.bookof5rinds.client.game.engine.GameState{",", ","}",opts__20167__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player","player",-97687400),self__.player],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),self__.remote_players],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bullets","bullets",1734809024),self__.bullets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map","map",1371690461),self__.map],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__94810){
var self__ = this;
var G__94810__$1 = this;
return (new cljs.core.RecordIter((0),G__94810__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20149__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.engine.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20155__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20146__auto__){
var self__ = this;
var this__20146__auto____$1 = this;
var h__19972__auto__ = self__.__hash;
if(!((h__19972__auto__ == null))){
return h__19972__auto__;
} else {
var h__19972__auto____$1 = cljs.core.hash_imap.call(null,this__20146__auto____$1);
self__.__hash = h__19972__auto____$1;

return h__19972__auto____$1;
}
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20147__auto__,other__20148__auto__){
var self__ = this;
var this__20147__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19544__auto__ = other__20148__auto__;
if(cljs.core.truth_(and__19544__auto__)){
var and__19544__auto____$1 = (this__20147__auto____$1.constructor === other__20148__auto__.constructor);
if(and__19544__auto____$1){
return cljs.core.equiv_map.call(null,this__20147__auto____$1,other__20148__auto__);
} else {
return and__19544__auto____$1;
}
} else {
return and__19544__auto__;
}
})())){
return true;
} else {
return false;
}
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20160__auto__,k__20161__auto__){
var self__ = this;
var this__20160__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bullets","bullets",1734809024),null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),null,new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),k__20161__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20160__auto____$1),self__.__meta),k__20161__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.engine.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20161__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20158__auto__,k__20159__auto__,G__94810){
var self__ = this;
var this__20158__auto____$1 = this;
var pred__94814 = cljs.core.keyword_identical_QMARK_;
var expr__94815 = k__20159__auto__;
if(cljs.core.truth_(pred__94814.call(null,new cljs.core.Keyword(null,"player","player",-97687400),expr__94815))){
return (new p3r50na.apps.bookof5rinds.client.game.engine.GameState(G__94810,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__94814.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),expr__94815))){
return (new p3r50na.apps.bookof5rinds.client.game.engine.GameState(self__.player,G__94810,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__94814.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),expr__94815))){
return (new p3r50na.apps.bookof5rinds.client.game.engine.GameState(self__.player,self__.remote_players,G__94810,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__94814.call(null,new cljs.core.Keyword(null,"map","map",1371690461),expr__94815))){
return (new p3r50na.apps.bookof5rinds.client.game.engine.GameState(self__.player,self__.remote_players,self__.bullets,G__94810,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.engine.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20159__auto__,G__94810),null));
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20163__auto__){
var self__ = this;
var this__20163__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player","player",-97687400),self__.player],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),self__.remote_players],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bullets","bullets",1734809024),self__.bullets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map","map",1371690461),self__.map],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20150__auto__,G__94810){
var self__ = this;
var this__20150__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.engine.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,G__94810,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20156__auto__,entry__20157__auto__){
var self__ = this;
var this__20156__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20157__auto__)){
return cljs.core._assoc.call(null,this__20156__auto____$1,cljs.core._nth.call(null,entry__20157__auto__,(0)),cljs.core._nth.call(null,entry__20157__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20156__auto____$1,entry__20157__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"remote-players","remote-players",-1207501111,null),new cljs.core.Symbol(null,"bullets","bullets",-919626745,null),new cljs.core.Symbol(null,"map","map",-1282745308,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.engine.GameState.cljs$lang$ctorPrSeq = (function (this__20185__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.engine/GameState");
});

p3r50na.apps.bookof5rinds.client.game.engine.GameState.cljs$lang$ctorPrWriter = (function (this__20185__auto__,writer__20186__auto__){
return cljs.core._write.call(null,writer__20186__auto__,"p3r50na.apps.bookof5rinds.client.game.engine/GameState");
});

p3r50na.apps.bookof5rinds.client.game.engine.__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$engine$__GT_GameState(player,remote_players,bullets,map){
return (new p3r50na.apps.bookof5rinds.client.game.engine.GameState(player,remote_players,bullets,map,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.engine.map__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$engine$map__GT_GameState(G__94812){
return (new p3r50na.apps.bookof5rinds.client.game.engine.GameState(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(G__94812),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(G__94812),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(G__94812),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(G__94812),null,cljs.core.dissoc.call(null,G__94812,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)),null));
});


/**
* @constructor
* @param {*} name
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
p3r50na.apps.bookof5rinds.client.game.engine.Player = (function (name,x,y,size,speed,__meta,__extmap,__hash){
this.name = name;
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
p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20151__auto__,k__20152__auto__){
var self__ = this;
var this__20151__auto____$1 = this;
return cljs.core._lookup.call(null,this__20151__auto____$1,k__20152__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20153__auto__,k94819,else__20154__auto__){
var self__ = this;
var this__20153__auto____$1 = this;
var G__94821 = (((k94819 instanceof cljs.core.Keyword))?k94819.fqn:null);
switch (G__94821) {
case "name":
return self__.name;

break;
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
return cljs.core.get.call(null,self__.__extmap,k94819,else__20154__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20165__auto__,writer__20166__auto__,opts__20167__auto__){
var self__ = this;
var this__20165__auto____$1 = this;
var pr_pair__20168__auto__ = ((function (this__20165__auto____$1){
return (function (keyval__20169__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,cljs.core.pr_writer,""," ","",opts__20167__auto__,keyval__20169__auto__);
});})(this__20165__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,pr_pair__20168__auto__,"#p3r50na.apps.bookof5rinds.client.game.engine.Player{",", ","}",opts__20167__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__94818){
var self__ = this;
var G__94818__$1 = this;
return (new cljs.core.RecordIter((0),G__94818__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20149__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.engine.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20155__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20146__auto__){
var self__ = this;
var this__20146__auto____$1 = this;
var h__19972__auto__ = self__.__hash;
if(!((h__19972__auto__ == null))){
return h__19972__auto__;
} else {
var h__19972__auto____$1 = cljs.core.hash_imap.call(null,this__20146__auto____$1);
self__.__hash = h__19972__auto____$1;

return h__19972__auto____$1;
}
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20147__auto__,other__20148__auto__){
var self__ = this;
var this__20147__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19544__auto__ = other__20148__auto__;
if(cljs.core.truth_(and__19544__auto__)){
var and__19544__auto____$1 = (this__20147__auto____$1.constructor === other__20148__auto__.constructor);
if(and__19544__auto____$1){
return cljs.core.equiv_map.call(null,this__20147__auto____$1,other__20148__auto__);
} else {
return and__19544__auto____$1;
}
} else {
return and__19544__auto__;
}
})())){
return true;
} else {
return false;
}
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20160__auto__,k__20161__auto__){
var self__ = this;
var this__20160__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__20161__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20160__auto____$1),self__.__meta),k__20161__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.engine.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20161__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20158__auto__,k__20159__auto__,G__94818){
var self__ = this;
var this__20158__auto____$1 = this;
var pred__94822 = cljs.core.keyword_identical_QMARK_;
var expr__94823 = k__20159__auto__;
if(cljs.core.truth_(pred__94822.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__94823))){
return (new p3r50na.apps.bookof5rinds.client.game.engine.Player(G__94818,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__94822.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__94823))){
return (new p3r50na.apps.bookof5rinds.client.game.engine.Player(self__.name,G__94818,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__94822.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__94823))){
return (new p3r50na.apps.bookof5rinds.client.game.engine.Player(self__.name,self__.x,G__94818,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__94822.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__94823))){
return (new p3r50na.apps.bookof5rinds.client.game.engine.Player(self__.name,self__.x,self__.y,G__94818,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__94822.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__94823))){
return (new p3r50na.apps.bookof5rinds.client.game.engine.Player(self__.name,self__.x,self__.y,self__.size,G__94818,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.engine.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20159__auto__,G__94818),null));
}
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20163__auto__){
var self__ = this;
var this__20163__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20150__auto__,G__94818){
var self__ = this;
var this__20150__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.engine.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__94818,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20156__auto__,entry__20157__auto__){
var self__ = this;
var this__20156__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20157__auto__)){
return cljs.core._assoc.call(null,this__20156__auto____$1,cljs.core._nth.call(null,entry__20157__auto__,(0)),cljs.core._nth.call(null,entry__20157__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20156__auto____$1,entry__20157__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.engine.Player.cljs$lang$ctorPrSeq = (function (this__20185__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.engine/Player");
});

p3r50na.apps.bookof5rinds.client.game.engine.Player.cljs$lang$ctorPrWriter = (function (this__20185__auto__,writer__20186__auto__){
return cljs.core._write.call(null,writer__20186__auto__,"p3r50na.apps.bookof5rinds.client.game.engine/Player");
});

p3r50na.apps.bookof5rinds.client.game.engine.__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$engine$__GT_Player(name,x,y,size,speed){
return (new p3r50na.apps.bookof5rinds.client.game.engine.Player(name,x,y,size,speed,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.engine.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$engine$map__GT_Player(G__94820){
return (new p3r50na.apps.bookof5rinds.client.game.engine.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__94820),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__94820),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__94820),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__94820),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__94820),null,cljs.core.dissoc.call(null,G__94820,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.engine.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.engine.walls = (function p3r50na$apps$bookof5rinds$client$game$engine$walls(state){
return p3r50na.apps.bookof5rinds.client.game.map.block_of_type.call(null,new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)));
});
p3r50na.apps.bookof5rinds.client.game.engine.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$engine$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__94829 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__94829__$1 = ((((!((map__94829 == null)))?((((map__94829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94829):map__94829);
var x = cljs.core.get.call(null,map__94829__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__94829__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__94829__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__94829,map__94829__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__94831 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__94831) {
case "up":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._,speed);

break;
case "down":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._PLUS_,speed);

break;
case "left":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._,speed);

break;
case "right":
return cljs.core.update_in.call(null,state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._PLUS_,speed);

break;
default:
return state__$1;

}
})();
if(cljs.core.truth_((function (){var or__19556__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.engine.walls.call(null,state__$1),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1)));
if(cljs.core.truth_(or__19556__auto__)){
return or__19556__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})())){
return state__$1;
} else {
return newstate;
}
});})(map__94829,map__94829__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_location(bullet){
var map__94837 = bullet;
var map__94837__$1 = ((((!((map__94837 == null)))?((((map__94837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__94837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__94837):map__94837);
var speed = cljs.core.get.call(null,map__94837__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__94838 = cljs.core.get.call(null,map__94837__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__94838,(0),null);
var by = cljs.core.nth.call(null,vec__94838,(1),null);
var lx = cljs.core.get.call(null,map__94837__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__94837__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__94839 = cljs.core.get.call(null,map__94837__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__94839,(0),null);
var gy = cljs.core.nth.call(null,vec__94839,(1),null);
var dx = (gx - bx);
var dy = (gy - by);
var goal_dist = Math.sqrt(((dx * dx) + (dy * dy)));
var ratio = (speed / goal_dist);
var xm = (ratio * dx);
var ym = (ratio * dy);
var nx = (xm + lx);
var ny = (ym + ly);
return cljs.core.assoc.call(null,bullet,new cljs.core.Keyword(null,"x","x",2099068185),nx,new cljs.core.Keyword(null,"y","y",-1757859776),ny);
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullets = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullets(state){
return cljs.core.filter.call(null,(function (bullet){
return cljs.core.not.call(null,(function (){var or__19556__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.engine.walls.call(null,state),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(or__19556__auto__)){
return or__19556__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})());
}),cljs.core.map.call(null,p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state)));
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_locations = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_locations(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024),p3r50na.apps.bookof5rinds.client.game.engine.update_bullets.call(null,state));
});
p3r50na.apps.bookof5rinds.client.game.engine.update_state = (function p3r50na$apps$bookof5rinds$client$game$engine$update_state(state){
var oldstate = state;
var newstate = p3r50na.apps.bookof5rinds.client.game.engine.apply_controll.call(null,p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_locations.call(null,state));
return newstate;
});
p3r50na.apps.bookof5rinds.client.game.engine.create_loop = (function p3r50na$apps$bookof5rinds$client$game$engine$create_loop(state){
var render_chan = cljs.core.async.chan.call(null);
var c__23656__auto___94895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23656__auto___94895,render_chan){
return (function (){
var f__23657__auto__ = (function (){var switch__23591__auto__ = ((function (c__23656__auto___94895,render_chan){
return (function (state_94880){
var state_val_94881 = (state_94880[(1)]);
if((state_val_94881 === (1))){
var inst_94868 = state;
var state_94880__$1 = (function (){var statearr_94882 = state_94880;
(statearr_94882[(7)] = inst_94868);

return statearr_94882;
})();
var statearr_94883_94896 = state_94880__$1;
(statearr_94883_94896[(2)] = null);

(statearr_94883_94896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_94881 === (2))){
var inst_94868 = (state_94880[(7)]);
var inst_94870 = (state_94880[(8)]);
var inst_94870__$1 = p3r50na.apps.bookof5rinds.client.game.engine.update_state.call(null,inst_94868);
var state_94880__$1 = (function (){var statearr_94884 = state_94880;
(statearr_94884[(8)] = inst_94870__$1);

return statearr_94884;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_94880__$1,(4),render_chan,inst_94870__$1);
} else {
if((state_val_94881 === (3))){
var inst_94878 = (state_94880[(2)]);
var state_94880__$1 = state_94880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_94880__$1,inst_94878);
} else {
if((state_val_94881 === (4))){
var inst_94872 = (state_94880[(2)]);
var inst_94873 = cljs.core.async.timeout.call(null,(1000));
var state_94880__$1 = (function (){var statearr_94885 = state_94880;
(statearr_94885[(9)] = inst_94872);

return statearr_94885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_94880__$1,(5),inst_94873);
} else {
if((state_val_94881 === (5))){
var inst_94870 = (state_94880[(8)]);
var inst_94875 = (state_94880[(2)]);
var inst_94868 = inst_94870;
var state_94880__$1 = (function (){var statearr_94886 = state_94880;
(statearr_94886[(7)] = inst_94868);

(statearr_94886[(10)] = inst_94875);

return statearr_94886;
})();
var statearr_94887_94897 = state_94880__$1;
(statearr_94887_94897[(2)] = null);

(statearr_94887_94897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__23656__auto___94895,render_chan))
;
return ((function (switch__23591__auto__,c__23656__auto___94895,render_chan){
return (function() {
var p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__ = null;
var p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____0 = (function (){
var statearr_94891 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_94891[(0)] = p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__);

(statearr_94891[(1)] = (1));

return statearr_94891;
});
var p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____1 = (function (state_94880){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_94880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e94892){if((e94892 instanceof Object)){
var ex__23595__auto__ = e94892;
var statearr_94893_94898 = state_94880;
(statearr_94893_94898[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_94880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e94892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__94899 = state_94880;
state_94880 = G__94899;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__ = function(state_94880){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____1.call(this,state_94880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto___94895,render_chan))
})();
var state__23658__auto__ = (function (){var statearr_94894 = f__23657__auto__.call(null);
(statearr_94894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto___94895);

return statearr_94894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23658__auto__);
});})(c__23656__auto___94895,render_chan))
);


return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render-chan","render-chan",667311808),render_chan], null);
});

//# sourceMappingURL=engine.js.map