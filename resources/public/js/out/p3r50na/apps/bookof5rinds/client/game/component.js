// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.component');
goog.require('cljs.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.levels.level1');
goog.require('om.dom');
goog.require('quil.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.level');
goog.require('cljs.core.async');
goog.require('p3r50na.apps.bookof5rinds.client.game.engine');
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
p3r50na.apps.bookof5rinds.client.game.component.GameState = (function (player,remote_players,bullets,map,__meta,__extmap,__hash){
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
p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20150__auto__,k__20151__auto__){
var self__ = this;
var this__20150__auto____$1 = this;
return cljs.core._lookup.call(null,this__20150__auto____$1,k__20151__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k29410,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__29412 = (((k29410 instanceof cljs.core.Keyword))?k29410.fqn:null);
switch (G__29412) {
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
return cljs.core.get.call(null,self__.__extmap,k29410,else__20153__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20164__auto__,writer__20165__auto__,opts__20166__auto__){
var self__ = this;
var this__20164__auto____$1 = this;
var pr_pair__20167__auto__ = ((function (this__20164__auto____$1){
return (function (keyval__20168__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20165__auto__,cljs.core.pr_writer,""," ","",opts__20166__auto__,keyval__20168__auto__);
});})(this__20164__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20165__auto__,pr_pair__20167__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.GameState{",", ","}",opts__20166__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player","player",-97687400),self__.player],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),self__.remote_players],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bullets","bullets",1734809024),self__.bullets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map","map",1371690461),self__.map],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29409){
var self__ = this;
var G__29409__$1 = this;
return (new cljs.core.RecordIter((0),G__29409__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20148__auto__){
var self__ = this;
var this__20148__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20144__auto__){
var self__ = this;
var this__20144__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20154__auto__){
var self__ = this;
var this__20154__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
var h__19971__auto__ = self__.__hash;
if(!((h__19971__auto__ == null))){
return h__19971__auto__;
} else {
var h__19971__auto____$1 = cljs.core.hash_imap.call(null,this__20145__auto____$1);
self__.__hash = h__19971__auto____$1;

return h__19971__auto____$1;
}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20146__auto__,other__20147__auto__){
var self__ = this;
var this__20146__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19543__auto__ = other__20147__auto__;
if(cljs.core.truth_(and__19543__auto__)){
var and__19543__auto____$1 = (this__20146__auto____$1.constructor === other__20147__auto__.constructor);
if(and__19543__auto____$1){
return cljs.core.equiv_map.call(null,this__20146__auto____$1,other__20147__auto__);
} else {
return and__19543__auto____$1;
}
} else {
return and__19543__auto__;
}
})())){
return true;
} else {
return false;
}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20159__auto__,k__20160__auto__){
var self__ = this;
var this__20159__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bullets","bullets",1734809024),null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),null,new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),k__20160__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20159__auto____$1),self__.__meta),k__20160__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20160__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__29409){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__29413 = cljs.core.keyword_identical_QMARK_;
var expr__29414 = k__20158__auto__;
if(cljs.core.truth_(pred__29413.call(null,new cljs.core.Keyword(null,"player","player",-97687400),expr__29414))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(G__29409,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29413.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),expr__29414))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,G__29409,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29413.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),expr__29414))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,G__29409,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29413.call(null,new cljs.core.Keyword(null,"map","map",1371690461),expr__29414))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,G__29409,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__29409),null));
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20162__auto__){
var self__ = this;
var this__20162__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player","player",-97687400),self__.player],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),self__.remote_players],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bullets","bullets",1734809024),self__.bullets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map","map",1371690461),self__.map],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__29409){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,G__29409,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20155__auto__,entry__20156__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20156__auto__)){
return cljs.core._assoc.call(null,this__20155__auto____$1,cljs.core._nth.call(null,entry__20156__auto__,(0)),cljs.core._nth.call(null,entry__20156__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20155__auto____$1,entry__20156__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"remote-players","remote-players",-1207501111,null),new cljs.core.Symbol(null,"bullets","bullets",-919626745,null),new cljs.core.Symbol(null,"map","map",-1282745308,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.GameState.cljs$lang$ctorPrSeq = (function (this__20184__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/GameState");
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.cljs$lang$ctorPrWriter = (function (this__20184__auto__,writer__20185__auto__){
return cljs.core._write.call(null,writer__20185__auto__,"p3r50na.apps.bookof5rinds.client.game.component/GameState");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_GameState(player,remote_players,bullets,map){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(player,remote_players,bullets,map,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_GameState(G__29411){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(G__29411),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(G__29411),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(G__29411),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(G__29411),null,cljs.core.dissoc.call(null,G__29411,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)),null));
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
p3r50na.apps.bookof5rinds.client.game.component.Player = (function (name,x,y,size,speed,__meta,__extmap,__hash){
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
p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20150__auto__,k__20151__auto__){
var self__ = this;
var this__20150__auto____$1 = this;
return cljs.core._lookup.call(null,this__20150__auto____$1,k__20151__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k29418,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__29420 = (((k29418 instanceof cljs.core.Keyword))?k29418.fqn:null);
switch (G__29420) {
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
return cljs.core.get.call(null,self__.__extmap,k29418,else__20153__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20164__auto__,writer__20165__auto__,opts__20166__auto__){
var self__ = this;
var this__20164__auto____$1 = this;
var pr_pair__20167__auto__ = ((function (this__20164__auto____$1){
return (function (keyval__20168__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20165__auto__,cljs.core.pr_writer,""," ","",opts__20166__auto__,keyval__20168__auto__);
});})(this__20164__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20165__auto__,pr_pair__20167__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.Player{",", ","}",opts__20166__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29417){
var self__ = this;
var G__29417__$1 = this;
return (new cljs.core.RecordIter((0),G__29417__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20148__auto__){
var self__ = this;
var this__20148__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20144__auto__){
var self__ = this;
var this__20144__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20154__auto__){
var self__ = this;
var this__20154__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
var h__19971__auto__ = self__.__hash;
if(!((h__19971__auto__ == null))){
return h__19971__auto__;
} else {
var h__19971__auto____$1 = cljs.core.hash_imap.call(null,this__20145__auto____$1);
self__.__hash = h__19971__auto____$1;

return h__19971__auto____$1;
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20146__auto__,other__20147__auto__){
var self__ = this;
var this__20146__auto____$1 = this;
if(cljs.core.truth_((function (){var and__19543__auto__ = other__20147__auto__;
if(cljs.core.truth_(and__19543__auto__)){
var and__19543__auto____$1 = (this__20146__auto____$1.constructor === other__20147__auto__.constructor);
if(and__19543__auto____$1){
return cljs.core.equiv_map.call(null,this__20146__auto____$1,other__20147__auto__);
} else {
return and__19543__auto____$1;
}
} else {
return and__19543__auto__;
}
})())){
return true;
} else {
return false;
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20159__auto__,k__20160__auto__){
var self__ = this;
var this__20159__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__20160__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20159__auto____$1),self__.__meta),k__20160__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20160__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__29417){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__29421 = cljs.core.keyword_identical_QMARK_;
var expr__29422 = k__20158__auto__;
if(cljs.core.truth_(pred__29421.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__29422))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__29417,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29421.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__29422))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,G__29417,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29421.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__29422))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,G__29417,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29421.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__29422))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,G__29417,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__29421.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__29422))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,G__29417,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__29417),null));
}
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20162__auto__){
var self__ = this;
var this__20162__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__29417){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__29417,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20155__auto__,entry__20156__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20156__auto__)){
return cljs.core._assoc.call(null,this__20155__auto____$1,cljs.core._nth.call(null,entry__20156__auto__,(0)),cljs.core._nth.call(null,entry__20156__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20155__auto____$1,entry__20156__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrSeq = (function (this__20184__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrWriter = (function (this__20184__auto__,writer__20185__auto__){
return cljs.core._write.call(null,writer__20185__auto__,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_Player(name,x,y,size,speed){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(name,x,y,size,speed,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__29419){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__29419),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29419),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29419),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__29419),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__29419),null,cljs.core.dissoc.call(null,G__29419,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.game_simulation = p3r50na.apps.bookof5rinds.client.game.engine.create_simulation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player("gorillatron",(5),(5),(10),(1),null,null,null)),new cljs.core.Keyword(null,"map","map",1371690461),p3r50na.apps.bookof5rinds.client.game.levels.level1.level1], null));
p3r50na.apps.bookof5rinds.client.game.component.next_frame = new cljs.core.Keyword(null,"next-frame","next-frame",-636070893).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.controller = new cljs.core.Keyword(null,"controller","controller",2013778659).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.add_event = new cljs.core.Keyword(null,"add-event","add-event",938429088).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.smooth.call(null);

return quil.core.frame_rate.call(null,(60));
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(){
var state = p3r50na.apps.bookof5rinds.client.game.component.next_frame.call(null);
var bullets = new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state);
var remote_players = cljs.core.vals.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var remote_bullets = new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516).cljs$core$IFn$_invoke$arity$1(state);
var walls = p3r50na.apps.bookof5rinds.client.game.level.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

quil.core.stroke.call(null,(0),(0),(0));

var seq__29455_29485 = cljs.core.seq.call(null,walls);
var chunk__29456_29486 = null;
var count__29457_29487 = (0);
var i__29458_29488 = (0);
while(true){
if((i__29458_29488 < count__29457_29487)){
var wall_29489 = cljs.core._nth.call(null,chunk__29456_29486,i__29458_29488);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_29489),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_29489),(20),(20));

var G__29490 = seq__29455_29485;
var G__29491 = chunk__29456_29486;
var G__29492 = count__29457_29487;
var G__29493 = (i__29458_29488 + (1));
seq__29455_29485 = G__29490;
chunk__29456_29486 = G__29491;
count__29457_29487 = G__29492;
i__29458_29488 = G__29493;
continue;
} else {
var temp__4425__auto___29494 = cljs.core.seq.call(null,seq__29455_29485);
if(temp__4425__auto___29494){
var seq__29455_29495__$1 = temp__4425__auto___29494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29455_29495__$1)){
var c__20339__auto___29496 = cljs.core.chunk_first.call(null,seq__29455_29495__$1);
var G__29497 = cljs.core.chunk_rest.call(null,seq__29455_29495__$1);
var G__29498 = c__20339__auto___29496;
var G__29499 = cljs.core.count.call(null,c__20339__auto___29496);
var G__29500 = (0);
seq__29455_29485 = G__29497;
chunk__29456_29486 = G__29498;
count__29457_29487 = G__29499;
i__29458_29488 = G__29500;
continue;
} else {
var wall_29501 = cljs.core.first.call(null,seq__29455_29495__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_29501),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_29501),(20),(20));

var G__29502 = cljs.core.next.call(null,seq__29455_29495__$1);
var G__29503 = null;
var G__29504 = (0);
var G__29505 = (0);
seq__29455_29485 = G__29502;
chunk__29456_29486 = G__29503;
count__29457_29487 = G__29504;
i__29458_29488 = G__29505;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__29459_29506 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__29459_29507__$1 = ((((!((map__29459_29506 == null)))?((((map__29459_29506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29459_29506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29459_29506):map__29459_29506);
var x_29508 = cljs.core.get.call(null,map__29459_29507__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_29509 = cljs.core.get.call(null,map__29459_29507__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_29510 = cljs.core.get.call(null,map__29459_29507__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_29508,y_29509,size_29510,size_29510);

var seq__29461_29511 = cljs.core.seq.call(null,bullets);
var chunk__29462_29512 = null;
var count__29463_29513 = (0);
var i__29464_29514 = (0);
while(true){
if((i__29464_29514 < count__29463_29513)){
var bullet_29515 = cljs.core._nth.call(null,chunk__29462_29512,i__29464_29514);
var map__29465_29516 = bullet_29515;
var map__29465_29517__$1 = ((((!((map__29465_29516 == null)))?((((map__29465_29516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29465_29516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29465_29516):map__29465_29516);
var bx_29518 = cljs.core.get.call(null,map__29465_29517__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_29519 = cljs.core.get.call(null,map__29465_29517__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_29520 = cljs.core.get.call(null,map__29465_29517__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_29518,by_29519,size_29520,size_29520);

var G__29521 = seq__29461_29511;
var G__29522 = chunk__29462_29512;
var G__29523 = count__29463_29513;
var G__29524 = (i__29464_29514 + (1));
seq__29461_29511 = G__29521;
chunk__29462_29512 = G__29522;
count__29463_29513 = G__29523;
i__29464_29514 = G__29524;
continue;
} else {
var temp__4425__auto___29525 = cljs.core.seq.call(null,seq__29461_29511);
if(temp__4425__auto___29525){
var seq__29461_29526__$1 = temp__4425__auto___29525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29461_29526__$1)){
var c__20339__auto___29527 = cljs.core.chunk_first.call(null,seq__29461_29526__$1);
var G__29528 = cljs.core.chunk_rest.call(null,seq__29461_29526__$1);
var G__29529 = c__20339__auto___29527;
var G__29530 = cljs.core.count.call(null,c__20339__auto___29527);
var G__29531 = (0);
seq__29461_29511 = G__29528;
chunk__29462_29512 = G__29529;
count__29463_29513 = G__29530;
i__29464_29514 = G__29531;
continue;
} else {
var bullet_29532 = cljs.core.first.call(null,seq__29461_29526__$1);
var map__29467_29533 = bullet_29532;
var map__29467_29534__$1 = ((((!((map__29467_29533 == null)))?((((map__29467_29533.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29467_29533.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29467_29533):map__29467_29533);
var bx_29535 = cljs.core.get.call(null,map__29467_29534__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_29536 = cljs.core.get.call(null,map__29467_29534__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_29537 = cljs.core.get.call(null,map__29467_29534__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_29535,by_29536,size_29537,size_29537);

var G__29538 = cljs.core.next.call(null,seq__29461_29526__$1);
var G__29539 = null;
var G__29540 = (0);
var G__29541 = (0);
seq__29461_29511 = G__29538;
chunk__29462_29512 = G__29539;
count__29463_29513 = G__29540;
i__29464_29514 = G__29541;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(200),(30),(30));

quil.core.stroke.call(null,(200),(30),(30));

var seq__29469_29542 = cljs.core.seq.call(null,remote_players);
var chunk__29470_29543 = null;
var count__29471_29544 = (0);
var i__29472_29545 = (0);
while(true){
if((i__29472_29545 < count__29471_29544)){
var remote_player_29546 = cljs.core._nth.call(null,chunk__29470_29543,i__29472_29545);
var map__29473_29547 = remote_player_29546;
var map__29473_29548__$1 = ((((!((map__29473_29547 == null)))?((((map__29473_29547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29473_29547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29473_29547):map__29473_29547);
var x_29549 = cljs.core.get.call(null,map__29473_29548__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_29550 = cljs.core.get.call(null,map__29473_29548__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_29551 = cljs.core.get.call(null,map__29473_29548__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_29549,y_29550,size_29551,size_29551);

var G__29552 = seq__29469_29542;
var G__29553 = chunk__29470_29543;
var G__29554 = count__29471_29544;
var G__29555 = (i__29472_29545 + (1));
seq__29469_29542 = G__29552;
chunk__29470_29543 = G__29553;
count__29471_29544 = G__29554;
i__29472_29545 = G__29555;
continue;
} else {
var temp__4425__auto___29556 = cljs.core.seq.call(null,seq__29469_29542);
if(temp__4425__auto___29556){
var seq__29469_29557__$1 = temp__4425__auto___29556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29469_29557__$1)){
var c__20339__auto___29558 = cljs.core.chunk_first.call(null,seq__29469_29557__$1);
var G__29559 = cljs.core.chunk_rest.call(null,seq__29469_29557__$1);
var G__29560 = c__20339__auto___29558;
var G__29561 = cljs.core.count.call(null,c__20339__auto___29558);
var G__29562 = (0);
seq__29469_29542 = G__29559;
chunk__29470_29543 = G__29560;
count__29471_29544 = G__29561;
i__29472_29545 = G__29562;
continue;
} else {
var remote_player_29563 = cljs.core.first.call(null,seq__29469_29557__$1);
var map__29475_29564 = remote_player_29563;
var map__29475_29565__$1 = ((((!((map__29475_29564 == null)))?((((map__29475_29564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29475_29564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29475_29564):map__29475_29564);
var x_29566 = cljs.core.get.call(null,map__29475_29565__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_29567 = cljs.core.get.call(null,map__29475_29565__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_29568 = cljs.core.get.call(null,map__29475_29565__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_29566,y_29567,size_29568,size_29568);

var G__29569 = cljs.core.next.call(null,seq__29469_29557__$1);
var G__29570 = null;
var G__29571 = (0);
var G__29572 = (0);
seq__29469_29542 = G__29569;
chunk__29470_29543 = G__29570;
count__29471_29544 = G__29571;
i__29472_29545 = G__29572;
continue;
}
} else {
}
}
break;
}

var seq__29477 = cljs.core.seq.call(null,remote_bullets);
var chunk__29478 = null;
var count__29479 = (0);
var i__29480 = (0);
while(true){
if((i__29480 < count__29479)){
var bullet = cljs.core._nth.call(null,chunk__29478,i__29480);
var map__29481_29573 = bullet;
var map__29481_29574__$1 = ((((!((map__29481_29573 == null)))?((((map__29481_29573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29481_29573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29481_29573):map__29481_29573);
var bx_29575 = cljs.core.get.call(null,map__29481_29574__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_29576 = cljs.core.get.call(null,map__29481_29574__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_29577 = cljs.core.get.call(null,map__29481_29574__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_29575,by_29576,size_29577,size_29577);

var G__29578 = seq__29477;
var G__29579 = chunk__29478;
var G__29580 = count__29479;
var G__29581 = (i__29480 + (1));
seq__29477 = G__29578;
chunk__29478 = G__29579;
count__29479 = G__29580;
i__29480 = G__29581;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29477);
if(temp__4425__auto__){
var seq__29477__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29477__$1)){
var c__20339__auto__ = cljs.core.chunk_first.call(null,seq__29477__$1);
var G__29582 = cljs.core.chunk_rest.call(null,seq__29477__$1);
var G__29583 = c__20339__auto__;
var G__29584 = cljs.core.count.call(null,c__20339__auto__);
var G__29585 = (0);
seq__29477 = G__29582;
chunk__29478 = G__29583;
count__29479 = G__29584;
i__29480 = G__29585;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__29477__$1);
var map__29483_29586 = bullet;
var map__29483_29587__$1 = ((((!((map__29483_29586 == null)))?((((map__29483_29586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29483_29586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29483_29586):map__29483_29586);
var bx_29588 = cljs.core.get.call(null,map__29483_29587__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_29589 = cljs.core.get.call(null,map__29483_29587__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_29590 = cljs.core.get.call(null,map__29483_29587__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_29588,by_29589,size_29590,size_29590);

var G__29591 = cljs.core.next.call(null,seq__29477__$1);
var G__29592 = null;
var G__29593 = (0);
var G__29594 = (0);
seq__29477 = G__29591;
chunk__29478 = G__29592;
count__29479 = G__29593;
i__29480 = G__29594;
continue;
}
} else {
return null;
}
}
break;
}
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_down = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_down(){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__29595_SHARP_){
return cljs.core.conj.call(null,p1__29595_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__29596_SHARP_){
return cljs.core.disj.call(null,p1__29596_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked = (function p3r50na$apps$bookof5rinds$client$game$component$on_mouse_clicked(){
var mx = quil.core.mouse_x.call(null);
var my = quil.core.mouse_y.call(null);
var event = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"player-fired-bullet",new cljs.core.Keyword(null,"mx","mx",-199887020),mx,new cljs.core.Keyword(null,"my","my",-1055703269),my], null);
return p3r50na.apps.bookof5rinds.client.game.component.add_event.call(null,event);
});
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked))?(function() { 
var G__29597__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__29597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29598__i = 0, G__29598__a = new Array(arguments.length -  0);
while (G__29598__i < G__29598__a.length) {G__29598__a[G__29598__i] = arguments[G__29598__i + 0]; ++G__29598__i;}
  args = new cljs.core.IndexedSeq(G__29598__a,0);
} 
return G__29597__delegate.call(this,args);};
G__29597.cljs$lang$maxFixedArity = 0;
G__29597.cljs$lang$applyTo = (function (arglist__29599){
var args = cljs.core.seq(arglist__29599);
return G__29597__delegate(args);
});
G__29597.cljs$core$IFn$_invoke$arity$variadic = G__29597__delegate;
return G__29597;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.level.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.levels.level1.level1),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__29600__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__29600 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29601__i = 0, G__29601__a = new Array(arguments.length -  0);
while (G__29601__i < G__29601__a.length) {G__29601__a[G__29601__i] = arguments[G__29601__i + 0]; ++G__29601__i;}
  args = new cljs.core.IndexedSeq(G__29601__a,0);
} 
return G__29600__delegate.call(this,args);};
G__29600.cljs$lang$maxFixedArity = 0;
G__29600.cljs$lang$applyTo = (function (arglist__29602){
var args = cljs.core.seq(arglist__29602);
return G__29600__delegate(args);
});
G__29600.cljs$core$IFn$_invoke$arity$variadic = G__29600__delegate;
return G__29600;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__29603__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__29603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29604__i = 0, G__29604__a = new Array(arguments.length -  0);
while (G__29604__i < G__29604__a.length) {G__29604__a[G__29604__i] = arguments[G__29604__i + 0]; ++G__29604__i;}
  args = new cljs.core.IndexedSeq(G__29604__a,0);
} 
return G__29603__delegate.call(this,args);};
G__29603.cljs$lang$maxFixedArity = 0;
G__29603.cljs$lang$applyTo = (function (arglist__29605){
var args = cljs.core.seq(arglist__29605);
return G__29603__delegate(args);
});
G__29603.cljs$core$IFn$_invoke$arity$variadic = G__29603__delegate;
return G__29603;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__29606__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__29606 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29607__i = 0, G__29607__a = new Array(arguments.length -  0);
while (G__29607__i < G__29607__a.length) {G__29607__a[G__29607__i] = arguments[G__29607__i + 0]; ++G__29607__i;}
  args = new cljs.core.IndexedSeq(G__29607__a,0);
} 
return G__29606__delegate.call(this,args);};
G__29606.cljs$lang$maxFixedArity = 0;
G__29606.cljs$lang$applyTo = (function (arglist__29608){
var args = cljs.core.seq(arglist__29608);
return G__29606__delegate(args);
});
G__29606.cljs$core$IFn$_invoke$arity$variadic = G__29606__delegate;
return G__29606;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__29609__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__29609 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29610__i = 0, G__29610__a = new Array(arguments.length -  0);
while (G__29610__i < G__29610__a.length) {G__29610__a[G__29610__i] = arguments[G__29610__i + 0]; ++G__29610__i;}
  args = new cljs.core.IndexedSeq(G__29610__a,0);
} 
return G__29609__delegate.call(this,args);};
G__29609.cljs$lang$maxFixedArity = 0;
G__29609.cljs$lang$applyTo = (function (arglist__29611){
var args = cljs.core.seq(arglist__29611);
return G__29609__delegate(args);
});
G__29609.cljs$core$IFn$_invoke$arity$variadic = G__29609__delegate;
return G__29609;
})()
:p3r50na.apps.bookof5rinds.client.game.component.draw));
});
goog.exportSymbol('p3r50na.apps.bookof5rinds.client.game.component.game_renderer', p3r50na.apps.bookof5rinds.client.game.component.game_renderer);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23377__23378__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__23377__23378__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p3r50na.apps.bookof5rinds.client.game.component.game_renderer,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t29615 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t29615 = (function (game_component,meta29616){
this.game_component = game_component;
this.meta29616 = meta29616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t29615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29617,meta29616__$1){
var self__ = this;
var _29617__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t29615(self__.game_component,meta29616__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t29615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29617){
var self__ = this;
var _29617__$1 = this;
return self__.meta29616;
});

p3r50na.apps.bookof5rinds.client.game.component.t29615.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t29615.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t29615.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t29615.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t29615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta29616","meta29616",752542480,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t29615.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t29615.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t29615";

p3r50na.apps.bookof5rinds.client.game.component.t29615.cljs$lang$ctorPrWriter = (function (this__20134__auto__,writer__20135__auto__,opt__20136__auto__){
return cljs.core._write.call(null,writer__20135__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t29615");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t29615 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t29615(game_component__$1,meta29616){
return (new p3r50na.apps.bookof5rinds.client.game.component.t29615(game_component__$1,meta29616));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t29615(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map