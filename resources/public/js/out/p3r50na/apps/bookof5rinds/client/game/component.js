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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k115508,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__115510 = (((k115508 instanceof cljs.core.Keyword))?k115508.fqn:null);
switch (G__115510) {
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
return cljs.core.get.call(null,self__.__extmap,k115508,else__20153__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__115507){
var self__ = this;
var G__115507__$1 = this;
return (new cljs.core.RecordIter((0),G__115507__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__115507){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__115511 = cljs.core.keyword_identical_QMARK_;
var expr__115512 = k__20158__auto__;
if(cljs.core.truth_(pred__115511.call(null,new cljs.core.Keyword(null,"player","player",-97687400),expr__115512))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(G__115507,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115511.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),expr__115512))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,G__115507,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115511.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),expr__115512))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,G__115507,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115511.call(null,new cljs.core.Keyword(null,"map","map",1371690461),expr__115512))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,G__115507,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__115507),null));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__115507){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,G__115507,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_GameState(G__115509){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(G__115509),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(G__115509),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(G__115509),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(G__115509),null,cljs.core.dissoc.call(null,G__115509,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k115516,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__115518 = (((k115516 instanceof cljs.core.Keyword))?k115516.fqn:null);
switch (G__115518) {
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
return cljs.core.get.call(null,self__.__extmap,k115516,else__20153__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__115515){
var self__ = this;
var G__115515__$1 = this;
return (new cljs.core.RecordIter((0),G__115515__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__115515){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__115519 = cljs.core.keyword_identical_QMARK_;
var expr__115520 = k__20158__auto__;
if(cljs.core.truth_(pred__115519.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__115520))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__115515,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115519.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__115520))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,G__115515,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115519.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__115520))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,G__115515,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115519.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__115520))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,G__115515,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__115519.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__115520))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,G__115515,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__115515),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__115515){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__115515,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__115517){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__115517),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__115517),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__115517),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__115517),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__115517),null,cljs.core.dissoc.call(null,G__115517,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.game_simulation = p3r50na.apps.bookof5rinds.client.game.engine.create_simulation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player([cljs.core.str("gorilla"),cljs.core.str(cljs.core.rand.call(null,(100)))].join(''),cljs.core.rand.call(null,(100)),cljs.core.rand.call(null,(100)),(10),(1),null,null,null)),new cljs.core.Keyword(null,"map","map",1371690461),p3r50na.apps.bookof5rinds.client.game.levels.level1.level1], null));
p3r50na.apps.bookof5rinds.client.game.component.next_frame = new cljs.core.Keyword(null,"next-frame","next-frame",-636070893).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.controller = new cljs.core.Keyword(null,"controller","controller",2013778659).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.add_event = new cljs.core.Keyword(null,"add-event","add-event",938429088).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.update_channel = new cljs.core.Keyword(null,"update-channel","update-channel",579422).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
var c__23302__auto___115553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23302__auto___115553){
return (function (){
var f__23303__auto__ = (function (){var switch__23281__auto__ = ((function (c__23302__auto___115553){
return (function (state_115537){
var state_val_115538 = (state_115537[(1)]);
if((state_val_115538 === (1))){
var state_115537__$1 = state_115537;
var statearr_115539_115554 = state_115537__$1;
(statearr_115539_115554[(2)] = null);

(statearr_115539_115554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115538 === (2))){
var state_115537__$1 = state_115537;
var statearr_115540_115555 = state_115537__$1;
(statearr_115540_115555[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115538 === (3))){
var inst_115535 = (state_115537[(2)]);
var state_115537__$1 = state_115537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_115537__$1,inst_115535);
} else {
if((state_val_115538 === (4))){
var state_115537__$1 = state_115537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_115537__$1,(7),p3r50na.apps.bookof5rinds.client.game.component.update_channel);
} else {
if((state_val_115538 === (5))){
var state_115537__$1 = state_115537;
var statearr_115542_115556 = state_115537__$1;
(statearr_115542_115556[(2)] = null);

(statearr_115542_115556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115538 === (6))){
var inst_115533 = (state_115537[(2)]);
var state_115537__$1 = state_115537;
var statearr_115543_115557 = state_115537__$1;
(statearr_115543_115557[(2)] = inst_115533);

(statearr_115543_115557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115538 === (7))){
var inst_115526 = (state_115537[(2)]);
var inst_115527 = cljs.core.clj__GT_js.call(null,inst_115526);
var inst_115528 = JSON.stringify(inst_115527);
var inst_115529 = p3r50na.apps.bookof5rinds.client.game.component.socket.send(inst_115528);
var state_115537__$1 = (function (){var statearr_115544 = state_115537;
(statearr_115544[(7)] = inst_115529);

return statearr_115544;
})();
var statearr_115545_115558 = state_115537__$1;
(statearr_115545_115558[(2)] = null);

(statearr_115545_115558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23302__auto___115553))
;
return ((function (switch__23281__auto__,c__23302__auto___115553){
return (function() {
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__ = null;
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____0 = (function (){
var statearr_115549 = [null,null,null,null,null,null,null,null];
(statearr_115549[(0)] = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__);

(statearr_115549[(1)] = (1));

return statearr_115549;
});
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____1 = (function (state_115537){
while(true){
var ret_value__23283__auto__ = (function (){try{while(true){
var result__23284__auto__ = switch__23281__auto__.call(null,state_115537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23284__auto__;
}
break;
}
}catch (e115550){if((e115550 instanceof Object)){
var ex__23285__auto__ = e115550;
var statearr_115551_115559 = state_115537;
(statearr_115551_115559[(5)] = ex__23285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_115537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e115550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115560 = state_115537;
state_115537 = G__115560;
continue;
} else {
return ret_value__23283__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__ = function(state_115537){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____1.call(this,state_115537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____0;
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto____1;
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23282__auto__;
})()
;})(switch__23281__auto__,c__23302__auto___115553))
})();
var state__23304__auto__ = (function (){var statearr_115552 = f__23303__auto__.call(null);
(statearr_115552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23302__auto___115553);

return statearr_115552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23304__auto__);
});})(c__23302__auto___115553))
);

(p3r50na.apps.bookof5rinds.client.game.component.socket["onmessage"] = (function (message){
var event = cljs.core.js__GT_clj.call(null,JSON.parse(message.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
return p3r50na.apps.bookof5rinds.client.game.component.add_event.call(null,event);
}));
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.smooth.call(null);

return quil.core.frame_rate.call(null,(60));
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(){
var state = p3r50na.apps.bookof5rinds.client.game.component.next_frame.call(null);
var bullets = new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state);
var remote_players = cljs.core.vals.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var remote_bullets = new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516).cljs$core$IFn$_invoke$arity$1(state);
var hits_taken_count = cljs.core.count.call(null,new cljs.core.Keyword(null,"hits-taken","hits-taken",2058952709).cljs$core$IFn$_invoke$arity$1(state));
var life = ((150) - ((4) * hits_taken_count));
var walls = p3r50na.apps.bookof5rinds.client.game.level.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
if((life < (0))){
quil.core.background.call(null,(230),(40),(40));

quil.core.text_size.call(null,(40));

return quil.core.text.call(null,"GAME OVER",(100),(100));
} else {
quil.core.background.call(null,(255));

quil.core.stroke.call(null,(50),(200),(50));

quil.core.fill.call(null,(80),(250),(80));

quil.core.rect.call(null,(5),(350),life,(5));

quil.core.stroke.call(null,(0),(0),(0));

quil.core.fill.call(null,(200),(200),(200));

var seq__115591_115621 = cljs.core.seq.call(null,walls);
var chunk__115592_115622 = null;
var count__115593_115623 = (0);
var i__115594_115624 = (0);
while(true){
if((i__115594_115624 < count__115593_115623)){
var wall_115625 = cljs.core._nth.call(null,chunk__115592_115622,i__115594_115624);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_115625),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_115625),(20),(20));

var G__115626 = seq__115591_115621;
var G__115627 = chunk__115592_115622;
var G__115628 = count__115593_115623;
var G__115629 = (i__115594_115624 + (1));
seq__115591_115621 = G__115626;
chunk__115592_115622 = G__115627;
count__115593_115623 = G__115628;
i__115594_115624 = G__115629;
continue;
} else {
var temp__4425__auto___115630 = cljs.core.seq.call(null,seq__115591_115621);
if(temp__4425__auto___115630){
var seq__115591_115631__$1 = temp__4425__auto___115630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__115591_115631__$1)){
var c__20339__auto___115632 = cljs.core.chunk_first.call(null,seq__115591_115631__$1);
var G__115633 = cljs.core.chunk_rest.call(null,seq__115591_115631__$1);
var G__115634 = c__20339__auto___115632;
var G__115635 = cljs.core.count.call(null,c__20339__auto___115632);
var G__115636 = (0);
seq__115591_115621 = G__115633;
chunk__115592_115622 = G__115634;
count__115593_115623 = G__115635;
i__115594_115624 = G__115636;
continue;
} else {
var wall_115637 = cljs.core.first.call(null,seq__115591_115631__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_115637),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_115637),(20),(20));

var G__115638 = cljs.core.next.call(null,seq__115591_115631__$1);
var G__115639 = null;
var G__115640 = (0);
var G__115641 = (0);
seq__115591_115621 = G__115638;
chunk__115592_115622 = G__115639;
count__115593_115623 = G__115640;
i__115594_115624 = G__115641;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__115595_115642 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__115595_115643__$1 = ((((!((map__115595_115642 == null)))?((((map__115595_115642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115595_115642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115595_115642):map__115595_115642);
var x_115644 = cljs.core.get.call(null,map__115595_115643__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_115645 = cljs.core.get.call(null,map__115595_115643__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_115646 = cljs.core.get.call(null,map__115595_115643__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_115644,y_115645,size_115646,size_115646);

var seq__115597_115647 = cljs.core.seq.call(null,bullets);
var chunk__115598_115648 = null;
var count__115599_115649 = (0);
var i__115600_115650 = (0);
while(true){
if((i__115600_115650 < count__115599_115649)){
var bullet_115651 = cljs.core._nth.call(null,chunk__115598_115648,i__115600_115650);
var map__115601_115652 = bullet_115651;
var map__115601_115653__$1 = ((((!((map__115601_115652 == null)))?((((map__115601_115652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115601_115652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115601_115652):map__115601_115652);
var bx_115654 = cljs.core.get.call(null,map__115601_115653__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_115655 = cljs.core.get.call(null,map__115601_115653__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_115656 = cljs.core.get.call(null,map__115601_115653__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_115654,by_115655,size_115656,size_115656);

var G__115657 = seq__115597_115647;
var G__115658 = chunk__115598_115648;
var G__115659 = count__115599_115649;
var G__115660 = (i__115600_115650 + (1));
seq__115597_115647 = G__115657;
chunk__115598_115648 = G__115658;
count__115599_115649 = G__115659;
i__115600_115650 = G__115660;
continue;
} else {
var temp__4425__auto___115661 = cljs.core.seq.call(null,seq__115597_115647);
if(temp__4425__auto___115661){
var seq__115597_115662__$1 = temp__4425__auto___115661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__115597_115662__$1)){
var c__20339__auto___115663 = cljs.core.chunk_first.call(null,seq__115597_115662__$1);
var G__115664 = cljs.core.chunk_rest.call(null,seq__115597_115662__$1);
var G__115665 = c__20339__auto___115663;
var G__115666 = cljs.core.count.call(null,c__20339__auto___115663);
var G__115667 = (0);
seq__115597_115647 = G__115664;
chunk__115598_115648 = G__115665;
count__115599_115649 = G__115666;
i__115600_115650 = G__115667;
continue;
} else {
var bullet_115668 = cljs.core.first.call(null,seq__115597_115662__$1);
var map__115603_115669 = bullet_115668;
var map__115603_115670__$1 = ((((!((map__115603_115669 == null)))?((((map__115603_115669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115603_115669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115603_115669):map__115603_115669);
var bx_115671 = cljs.core.get.call(null,map__115603_115670__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_115672 = cljs.core.get.call(null,map__115603_115670__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_115673 = cljs.core.get.call(null,map__115603_115670__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_115671,by_115672,size_115673,size_115673);

var G__115674 = cljs.core.next.call(null,seq__115597_115662__$1);
var G__115675 = null;
var G__115676 = (0);
var G__115677 = (0);
seq__115597_115647 = G__115674;
chunk__115598_115648 = G__115675;
count__115599_115649 = G__115676;
i__115600_115650 = G__115677;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(200),(30),(30));

quil.core.stroke.call(null,(200),(30),(30));

var seq__115605_115678 = cljs.core.seq.call(null,remote_players);
var chunk__115606_115679 = null;
var count__115607_115680 = (0);
var i__115608_115681 = (0);
while(true){
if((i__115608_115681 < count__115607_115680)){
var remote_player_115682 = cljs.core._nth.call(null,chunk__115606_115679,i__115608_115681);
var map__115609_115683 = remote_player_115682;
var map__115609_115684__$1 = ((((!((map__115609_115683 == null)))?((((map__115609_115683.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115609_115683.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115609_115683):map__115609_115683);
var x_115685 = cljs.core.get.call(null,map__115609_115684__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_115686 = cljs.core.get.call(null,map__115609_115684__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_115687 = cljs.core.get.call(null,map__115609_115684__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_115685,y_115686,size_115687,size_115687);

var G__115688 = seq__115605_115678;
var G__115689 = chunk__115606_115679;
var G__115690 = count__115607_115680;
var G__115691 = (i__115608_115681 + (1));
seq__115605_115678 = G__115688;
chunk__115606_115679 = G__115689;
count__115607_115680 = G__115690;
i__115608_115681 = G__115691;
continue;
} else {
var temp__4425__auto___115692 = cljs.core.seq.call(null,seq__115605_115678);
if(temp__4425__auto___115692){
var seq__115605_115693__$1 = temp__4425__auto___115692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__115605_115693__$1)){
var c__20339__auto___115694 = cljs.core.chunk_first.call(null,seq__115605_115693__$1);
var G__115695 = cljs.core.chunk_rest.call(null,seq__115605_115693__$1);
var G__115696 = c__20339__auto___115694;
var G__115697 = cljs.core.count.call(null,c__20339__auto___115694);
var G__115698 = (0);
seq__115605_115678 = G__115695;
chunk__115606_115679 = G__115696;
count__115607_115680 = G__115697;
i__115608_115681 = G__115698;
continue;
} else {
var remote_player_115699 = cljs.core.first.call(null,seq__115605_115693__$1);
var map__115611_115700 = remote_player_115699;
var map__115611_115701__$1 = ((((!((map__115611_115700 == null)))?((((map__115611_115700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115611_115700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115611_115700):map__115611_115700);
var x_115702 = cljs.core.get.call(null,map__115611_115701__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_115703 = cljs.core.get.call(null,map__115611_115701__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_115704 = cljs.core.get.call(null,map__115611_115701__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_115702,y_115703,size_115704,size_115704);

var G__115705 = cljs.core.next.call(null,seq__115605_115693__$1);
var G__115706 = null;
var G__115707 = (0);
var G__115708 = (0);
seq__115605_115678 = G__115705;
chunk__115606_115679 = G__115706;
count__115607_115680 = G__115707;
i__115608_115681 = G__115708;
continue;
}
} else {
}
}
break;
}

var seq__115613 = cljs.core.seq.call(null,remote_bullets);
var chunk__115614 = null;
var count__115615 = (0);
var i__115616 = (0);
while(true){
if((i__115616 < count__115615)){
var bullet = cljs.core._nth.call(null,chunk__115614,i__115616);
var map__115617_115709 = bullet;
var map__115617_115710__$1 = ((((!((map__115617_115709 == null)))?((((map__115617_115709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115617_115709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115617_115709):map__115617_115709);
var bx_115711 = cljs.core.get.call(null,map__115617_115710__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_115712 = cljs.core.get.call(null,map__115617_115710__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_115713 = cljs.core.get.call(null,map__115617_115710__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_115711,by_115712,size_115713,size_115713);

var G__115714 = seq__115613;
var G__115715 = chunk__115614;
var G__115716 = count__115615;
var G__115717 = (i__115616 + (1));
seq__115613 = G__115714;
chunk__115614 = G__115715;
count__115615 = G__115716;
i__115616 = G__115717;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__115613);
if(temp__4425__auto__){
var seq__115613__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__115613__$1)){
var c__20339__auto__ = cljs.core.chunk_first.call(null,seq__115613__$1);
var G__115718 = cljs.core.chunk_rest.call(null,seq__115613__$1);
var G__115719 = c__20339__auto__;
var G__115720 = cljs.core.count.call(null,c__20339__auto__);
var G__115721 = (0);
seq__115613 = G__115718;
chunk__115614 = G__115719;
count__115615 = G__115720;
i__115616 = G__115721;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__115613__$1);
var map__115619_115722 = bullet;
var map__115619_115723__$1 = ((((!((map__115619_115722 == null)))?((((map__115619_115722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__115619_115722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115619_115722):map__115619_115722);
var bx_115724 = cljs.core.get.call(null,map__115619_115723__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_115725 = cljs.core.get.call(null,map__115619_115723__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_115726 = cljs.core.get.call(null,map__115619_115723__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_115724,by_115725,size_115726,size_115726);

var G__115727 = cljs.core.next.call(null,seq__115613__$1);
var G__115728 = null;
var G__115729 = (0);
var G__115730 = (0);
seq__115613 = G__115727;
chunk__115614 = G__115728;
count__115615 = G__115729;
i__115616 = G__115730;
continue;
}
} else {
return null;
}
}
break;
}
}
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_down = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_down(){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__115731_SHARP_){
return cljs.core.conj.call(null,p1__115731_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__115732_SHARP_){
return cljs.core.disj.call(null,p1__115732_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
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
var G__115733__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__115733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__115734__i = 0, G__115734__a = new Array(arguments.length -  0);
while (G__115734__i < G__115734__a.length) {G__115734__a[G__115734__i] = arguments[G__115734__i + 0]; ++G__115734__i;}
  args = new cljs.core.IndexedSeq(G__115734__a,0);
} 
return G__115733__delegate.call(this,args);};
G__115733.cljs$lang$maxFixedArity = 0;
G__115733.cljs$lang$applyTo = (function (arglist__115735){
var args = cljs.core.seq(arglist__115735);
return G__115733__delegate(args);
});
G__115733.cljs$core$IFn$_invoke$arity$variadic = G__115733__delegate;
return G__115733;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.level.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.levels.level1.level1),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__115736__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__115736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__115737__i = 0, G__115737__a = new Array(arguments.length -  0);
while (G__115737__i < G__115737__a.length) {G__115737__a[G__115737__i] = arguments[G__115737__i + 0]; ++G__115737__i;}
  args = new cljs.core.IndexedSeq(G__115737__a,0);
} 
return G__115736__delegate.call(this,args);};
G__115736.cljs$lang$maxFixedArity = 0;
G__115736.cljs$lang$applyTo = (function (arglist__115738){
var args = cljs.core.seq(arglist__115738);
return G__115736__delegate(args);
});
G__115736.cljs$core$IFn$_invoke$arity$variadic = G__115736__delegate;
return G__115736;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__115739__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__115739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__115740__i = 0, G__115740__a = new Array(arguments.length -  0);
while (G__115740__i < G__115740__a.length) {G__115740__a[G__115740__i] = arguments[G__115740__i + 0]; ++G__115740__i;}
  args = new cljs.core.IndexedSeq(G__115740__a,0);
} 
return G__115739__delegate.call(this,args);};
G__115739.cljs$lang$maxFixedArity = 0;
G__115739.cljs$lang$applyTo = (function (arglist__115741){
var args = cljs.core.seq(arglist__115741);
return G__115739__delegate(args);
});
G__115739.cljs$core$IFn$_invoke$arity$variadic = G__115739__delegate;
return G__115739;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__115742__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__115742 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__115743__i = 0, G__115743__a = new Array(arguments.length -  0);
while (G__115743__i < G__115743__a.length) {G__115743__a[G__115743__i] = arguments[G__115743__i + 0]; ++G__115743__i;}
  args = new cljs.core.IndexedSeq(G__115743__a,0);
} 
return G__115742__delegate.call(this,args);};
G__115742.cljs$lang$maxFixedArity = 0;
G__115742.cljs$lang$applyTo = (function (arglist__115744){
var args = cljs.core.seq(arglist__115744);
return G__115742__delegate(args);
});
G__115742.cljs$core$IFn$_invoke$arity$variadic = G__115742__delegate;
return G__115742;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__115745__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__115745 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__115746__i = 0, G__115746__a = new Array(arguments.length -  0);
while (G__115746__i < G__115746__a.length) {G__115746__a[G__115746__i] = arguments[G__115746__i + 0]; ++G__115746__i;}
  args = new cljs.core.IndexedSeq(G__115746__a,0);
} 
return G__115745__delegate.call(this,args);};
G__115745.cljs$lang$maxFixedArity = 0;
G__115745.cljs$lang$applyTo = (function (arglist__115747){
var args = cljs.core.seq(arglist__115747);
return G__115745__delegate(args);
});
G__115745.cljs$core$IFn$_invoke$arity$variadic = G__115745__delegate;
return G__115745;
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
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t115751 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t115751 = (function (game_component,meta115752){
this.game_component = game_component;
this.meta115752 = meta115752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t115751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_115753,meta115752__$1){
var self__ = this;
var _115753__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t115751(self__.game_component,meta115752__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t115751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_115753){
var self__ = this;
var _115753__$1 = this;
return self__.meta115752;
});

p3r50na.apps.bookof5rinds.client.game.component.t115751.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t115751.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t115751.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t115751.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t115751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta115752","meta115752",573474201,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t115751.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t115751.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t115751";

p3r50na.apps.bookof5rinds.client.game.component.t115751.cljs$lang$ctorPrWriter = (function (this__20134__auto__,writer__20135__auto__,opt__20136__auto__){
return cljs.core._write.call(null,writer__20135__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t115751");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t115751 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t115751(game_component__$1,meta115752){
return (new p3r50na.apps.bookof5rinds.client.game.component.t115751(game_component__$1,meta115752));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t115751(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map