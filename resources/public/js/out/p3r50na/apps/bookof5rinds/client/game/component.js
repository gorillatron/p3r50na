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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k56343,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__56345 = (((k56343 instanceof cljs.core.Keyword))?k56343.fqn:null);
switch (G__56345) {
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
return cljs.core.get.call(null,self__.__extmap,k56343,else__20153__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56342){
var self__ = this;
var G__56342__$1 = this;
return (new cljs.core.RecordIter((0),G__56342__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__56342){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__56346 = cljs.core.keyword_identical_QMARK_;
var expr__56347 = k__20158__auto__;
if(cljs.core.truth_(pred__56346.call(null,new cljs.core.Keyword(null,"player","player",-97687400),expr__56347))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(G__56342,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56346.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),expr__56347))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,G__56342,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56346.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),expr__56347))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,G__56342,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56346.call(null,new cljs.core.Keyword(null,"map","map",1371690461),expr__56347))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,G__56342,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__56342),null));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__56342){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,G__56342,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_GameState(G__56344){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(G__56344),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(G__56344),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(G__56344),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(G__56344),null,cljs.core.dissoc.call(null,G__56344,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)),null));
});


/**
* @constructor
* @param {*} name
* @param {*} x
* @param {*} y
* @param {*} size
* @param {*} speed
* @param {*} hp
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
p3r50na.apps.bookof5rinds.client.game.component.Player = (function (name,x,y,size,speed,hp,__meta,__extmap,__hash){
this.name = name;
this.x = x;
this.y = y;
this.size = size;
this.speed = speed;
this.hp = hp;
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k56351,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__56353 = (((k56351 instanceof cljs.core.Keyword))?k56351.fqn:null);
switch (G__56353) {
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
case "hp":
return self__.hp;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k56351,else__20153__auto__);

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
return cljs.core.pr_sequential_writer.call(null,writer__20165__auto__,pr_pair__20167__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.Player{",", ","}",opts__20166__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hp","hp",-1541237831),self__.hp],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56350){
var self__ = this;
var G__56350__$1 = this;
return (new cljs.core.RecordIter((0),G__56350__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20148__auto__){
var self__ = this;
var this__20148__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20144__auto__){
var self__ = this;
var this__20144__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.hp,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20154__auto__){
var self__ = this;
var this__20154__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"hp","hp",-1541237831),null], null), null),k__20160__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20159__auto____$1),self__.__meta),k__20160__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.hp,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20160__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__56350){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__56354 = cljs.core.keyword_identical_QMARK_;
var expr__56355 = k__20158__auto__;
if(cljs.core.truth_(pred__56354.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__56355))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__56350,self__.x,self__.y,self__.size,self__.speed,self__.hp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56354.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__56355))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,G__56350,self__.y,self__.size,self__.speed,self__.hp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56354.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__56355))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,G__56350,self__.size,self__.speed,self__.hp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56354.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__56355))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,G__56350,self__.speed,self__.hp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56354.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__56355))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,G__56350,self__.hp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56354.call(null,new cljs.core.Keyword(null,"hp","hp",-1541237831),expr__56355))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__56350,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.hp,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__56350),null));
}
}
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20162__auto__){
var self__ = this;
var this__20162__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hp","hp",-1541237831),self__.hp],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__56350){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.hp,G__56350,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null),new cljs.core.Symbol(null,"hp","hp",99293696,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrSeq = (function (this__20184__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrWriter = (function (this__20184__auto__,writer__20185__auto__){
return cljs.core._write.call(null,writer__20185__auto__,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_Player(name,x,y,size,speed,hp){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(name,x,y,size,speed,hp,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__56352){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__56352),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__56352),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__56352),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__56352),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__56352),new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(G__56352),null,cljs.core.dissoc.call(null,G__56352,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751),new cljs.core.Keyword(null,"hp","hp",-1541237831)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.game_simulation = p3r50na.apps.bookof5rinds.client.game.engine.create_simulation.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player([cljs.core.str("gorilla"),cljs.core.str(cljs.core.rand.call(null,(100)))].join(''),cljs.core.rand.call(null,(100)),cljs.core.rand.call(null,(100)),(10),(1),(150),null,null,null)),new cljs.core.Keyword(null,"map","map",1371690461),p3r50na.apps.bookof5rinds.client.game.levels.level1.level1], null));
p3r50na.apps.bookof5rinds.client.game.component.next_frame = new cljs.core.Keyword(null,"next-frame","next-frame",-636070893).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.controller = new cljs.core.Keyword(null,"controller","controller",2013778659).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.add_event = new cljs.core.Keyword(null,"add-event","add-event",938429088).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.update_channel = new cljs.core.Keyword(null,"update-channel","update-channel",579422).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_simulation);
p3r50na.apps.bookof5rinds.client.game.component.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
var c__22666__auto___56388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22666__auto___56388){
return (function (){
var f__22667__auto__ = (function (){var switch__22645__auto__ = ((function (c__22666__auto___56388){
return (function (state_56372){
var state_val_56373 = (state_56372[(1)]);
if((state_val_56373 === (1))){
var state_56372__$1 = state_56372;
var statearr_56374_56389 = state_56372__$1;
(statearr_56374_56389[(2)] = null);

(statearr_56374_56389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (2))){
var state_56372__$1 = state_56372;
var statearr_56375_56390 = state_56372__$1;
(statearr_56375_56390[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (3))){
var inst_56370 = (state_56372[(2)]);
var state_56372__$1 = state_56372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56372__$1,inst_56370);
} else {
if((state_val_56373 === (4))){
var state_56372__$1 = state_56372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56372__$1,(7),p3r50na.apps.bookof5rinds.client.game.component.update_channel);
} else {
if((state_val_56373 === (5))){
var state_56372__$1 = state_56372;
var statearr_56377_56391 = state_56372__$1;
(statearr_56377_56391[(2)] = null);

(statearr_56377_56391[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (6))){
var inst_56368 = (state_56372[(2)]);
var state_56372__$1 = state_56372;
var statearr_56378_56392 = state_56372__$1;
(statearr_56378_56392[(2)] = inst_56368);

(statearr_56378_56392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56373 === (7))){
var inst_56361 = (state_56372[(2)]);
var inst_56362 = cljs.core.clj__GT_js.call(null,inst_56361);
var inst_56363 = JSON.stringify(inst_56362);
var inst_56364 = p3r50na.apps.bookof5rinds.client.game.component.socket.send(inst_56363);
var state_56372__$1 = (function (){var statearr_56379 = state_56372;
(statearr_56379[(7)] = inst_56364);

return statearr_56379;
})();
var statearr_56380_56393 = state_56372__$1;
(statearr_56380_56393[(2)] = null);

(statearr_56380_56393[(1)] = (2));


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
});})(c__22666__auto___56388))
;
return ((function (switch__22645__auto__,c__22666__auto___56388){
return (function() {
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto__ = null;
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto____0 = (function (){
var statearr_56384 = [null,null,null,null,null,null,null,null];
(statearr_56384[(0)] = p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto__);

(statearr_56384[(1)] = (1));

return statearr_56384;
});
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto____1 = (function (state_56372){
while(true){
var ret_value__22647__auto__ = (function (){try{while(true){
var result__22648__auto__ = switch__22645__auto__.call(null,state_56372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22648__auto__;
}
break;
}
}catch (e56385){if((e56385 instanceof Object)){
var ex__22649__auto__ = e56385;
var statearr_56386_56394 = state_56372;
(statearr_56386_56394[(5)] = ex__22649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56395 = state_56372;
state_56372 = G__56395;
continue;
} else {
return ret_value__22647__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto__ = function(state_56372){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto____1.call(this,state_56372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto____0;
p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto____1;
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__22646__auto__;
})()
;})(switch__22645__auto__,c__22666__auto___56388))
})();
var state__22668__auto__ = (function (){var statearr_56387 = f__22667__auto__.call(null);
(statearr_56387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22666__auto___56388);

return statearr_56387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22668__auto__);
});})(c__22666__auto___56388))
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
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var bullets = new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state);
var remote_players = cljs.core.vals.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var remote_bullets = new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516).cljs$core$IFn$_invoke$arity$1(state);
var hp = new cljs.core.Keyword(null,"hp","hp",-1541237831).cljs$core$IFn$_invoke$arity$1(player);
var walls = p3r50na.apps.bookof5rinds.client.game.level.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
if((hp < (0))){
quil.core.background.call(null,(230),(40),(40));

quil.core.text_size.call(null,(40));

return quil.core.text.call(null,"GAME OVER",(100),(100));
} else {
quil.core.background.call(null,(255));

quil.core.stroke.call(null,(50),(200),(50));

quil.core.fill.call(null,(80),(250),(80));

quil.core.rect.call(null,(5),(350),hp,(5));

quil.core.stroke.call(null,(0),(0),(0));

quil.core.fill.call(null,(200),(200),(200));

var seq__56426_56456 = cljs.core.seq.call(null,walls);
var chunk__56427_56457 = null;
var count__56428_56458 = (0);
var i__56429_56459 = (0);
while(true){
if((i__56429_56459 < count__56428_56458)){
var wall_56460 = cljs.core._nth.call(null,chunk__56427_56457,i__56429_56459);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_56460),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_56460),(20),(20));

var G__56461 = seq__56426_56456;
var G__56462 = chunk__56427_56457;
var G__56463 = count__56428_56458;
var G__56464 = (i__56429_56459 + (1));
seq__56426_56456 = G__56461;
chunk__56427_56457 = G__56462;
count__56428_56458 = G__56463;
i__56429_56459 = G__56464;
continue;
} else {
var temp__4425__auto___56465 = cljs.core.seq.call(null,seq__56426_56456);
if(temp__4425__auto___56465){
var seq__56426_56466__$1 = temp__4425__auto___56465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56426_56466__$1)){
var c__20339__auto___56467 = cljs.core.chunk_first.call(null,seq__56426_56466__$1);
var G__56468 = cljs.core.chunk_rest.call(null,seq__56426_56466__$1);
var G__56469 = c__20339__auto___56467;
var G__56470 = cljs.core.count.call(null,c__20339__auto___56467);
var G__56471 = (0);
seq__56426_56456 = G__56468;
chunk__56427_56457 = G__56469;
count__56428_56458 = G__56470;
i__56429_56459 = G__56471;
continue;
} else {
var wall_56472 = cljs.core.first.call(null,seq__56426_56466__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_56472),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_56472),(20),(20));

var G__56473 = cljs.core.next.call(null,seq__56426_56466__$1);
var G__56474 = null;
var G__56475 = (0);
var G__56476 = (0);
seq__56426_56456 = G__56473;
chunk__56427_56457 = G__56474;
count__56428_56458 = G__56475;
i__56429_56459 = G__56476;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__56430_56477 = player;
var map__56430_56478__$1 = ((((!((map__56430_56477 == null)))?((((map__56430_56477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56430_56477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56430_56477):map__56430_56477);
var x_56479 = cljs.core.get.call(null,map__56430_56478__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_56480 = cljs.core.get.call(null,map__56430_56478__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_56481 = cljs.core.get.call(null,map__56430_56478__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_56479,y_56480,size_56481,size_56481);

var seq__56432_56482 = cljs.core.seq.call(null,bullets);
var chunk__56433_56483 = null;
var count__56434_56484 = (0);
var i__56435_56485 = (0);
while(true){
if((i__56435_56485 < count__56434_56484)){
var bullet_56486 = cljs.core._nth.call(null,chunk__56433_56483,i__56435_56485);
var map__56436_56487 = bullet_56486;
var map__56436_56488__$1 = ((((!((map__56436_56487 == null)))?((((map__56436_56487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56436_56487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56436_56487):map__56436_56487);
var bx_56489 = cljs.core.get.call(null,map__56436_56488__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_56490 = cljs.core.get.call(null,map__56436_56488__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_56491 = cljs.core.get.call(null,map__56436_56488__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_56489,by_56490,size_56491,size_56491);

var G__56492 = seq__56432_56482;
var G__56493 = chunk__56433_56483;
var G__56494 = count__56434_56484;
var G__56495 = (i__56435_56485 + (1));
seq__56432_56482 = G__56492;
chunk__56433_56483 = G__56493;
count__56434_56484 = G__56494;
i__56435_56485 = G__56495;
continue;
} else {
var temp__4425__auto___56496 = cljs.core.seq.call(null,seq__56432_56482);
if(temp__4425__auto___56496){
var seq__56432_56497__$1 = temp__4425__auto___56496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56432_56497__$1)){
var c__20339__auto___56498 = cljs.core.chunk_first.call(null,seq__56432_56497__$1);
var G__56499 = cljs.core.chunk_rest.call(null,seq__56432_56497__$1);
var G__56500 = c__20339__auto___56498;
var G__56501 = cljs.core.count.call(null,c__20339__auto___56498);
var G__56502 = (0);
seq__56432_56482 = G__56499;
chunk__56433_56483 = G__56500;
count__56434_56484 = G__56501;
i__56435_56485 = G__56502;
continue;
} else {
var bullet_56503 = cljs.core.first.call(null,seq__56432_56497__$1);
var map__56438_56504 = bullet_56503;
var map__56438_56505__$1 = ((((!((map__56438_56504 == null)))?((((map__56438_56504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56438_56504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56438_56504):map__56438_56504);
var bx_56506 = cljs.core.get.call(null,map__56438_56505__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_56507 = cljs.core.get.call(null,map__56438_56505__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_56508 = cljs.core.get.call(null,map__56438_56505__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_56506,by_56507,size_56508,size_56508);

var G__56509 = cljs.core.next.call(null,seq__56432_56497__$1);
var G__56510 = null;
var G__56511 = (0);
var G__56512 = (0);
seq__56432_56482 = G__56509;
chunk__56433_56483 = G__56510;
count__56434_56484 = G__56511;
i__56435_56485 = G__56512;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(200),(30),(30));

quil.core.stroke.call(null,(200),(30),(30));

var seq__56440_56513 = cljs.core.seq.call(null,remote_players);
var chunk__56441_56514 = null;
var count__56442_56515 = (0);
var i__56443_56516 = (0);
while(true){
if((i__56443_56516 < count__56442_56515)){
var remote_player_56517 = cljs.core._nth.call(null,chunk__56441_56514,i__56443_56516);
var map__56444_56518 = remote_player_56517;
var map__56444_56519__$1 = ((((!((map__56444_56518 == null)))?((((map__56444_56518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56444_56518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56444_56518):map__56444_56518);
var x_56520 = cljs.core.get.call(null,map__56444_56519__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_56521 = cljs.core.get.call(null,map__56444_56519__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_56522 = cljs.core.get.call(null,map__56444_56519__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var hp_56523__$1 = cljs.core.get.call(null,map__56444_56519__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
if((hp_56523__$1 > (0))){
quil.core.rect.call(null,x_56520,y_56521,size_56522,size_56522);
} else {
}

var G__56524 = seq__56440_56513;
var G__56525 = chunk__56441_56514;
var G__56526 = count__56442_56515;
var G__56527 = (i__56443_56516 + (1));
seq__56440_56513 = G__56524;
chunk__56441_56514 = G__56525;
count__56442_56515 = G__56526;
i__56443_56516 = G__56527;
continue;
} else {
var temp__4425__auto___56528 = cljs.core.seq.call(null,seq__56440_56513);
if(temp__4425__auto___56528){
var seq__56440_56529__$1 = temp__4425__auto___56528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56440_56529__$1)){
var c__20339__auto___56530 = cljs.core.chunk_first.call(null,seq__56440_56529__$1);
var G__56531 = cljs.core.chunk_rest.call(null,seq__56440_56529__$1);
var G__56532 = c__20339__auto___56530;
var G__56533 = cljs.core.count.call(null,c__20339__auto___56530);
var G__56534 = (0);
seq__56440_56513 = G__56531;
chunk__56441_56514 = G__56532;
count__56442_56515 = G__56533;
i__56443_56516 = G__56534;
continue;
} else {
var remote_player_56535 = cljs.core.first.call(null,seq__56440_56529__$1);
var map__56446_56536 = remote_player_56535;
var map__56446_56537__$1 = ((((!((map__56446_56536 == null)))?((((map__56446_56536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56446_56536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56446_56536):map__56446_56536);
var x_56538 = cljs.core.get.call(null,map__56446_56537__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_56539 = cljs.core.get.call(null,map__56446_56537__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_56540 = cljs.core.get.call(null,map__56446_56537__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var hp_56541__$1 = cljs.core.get.call(null,map__56446_56537__$1,new cljs.core.Keyword(null,"hp","hp",-1541237831));
if((hp_56541__$1 > (0))){
quil.core.rect.call(null,x_56538,y_56539,size_56540,size_56540);
} else {
}

var G__56542 = cljs.core.next.call(null,seq__56440_56529__$1);
var G__56543 = null;
var G__56544 = (0);
var G__56545 = (0);
seq__56440_56513 = G__56542;
chunk__56441_56514 = G__56543;
count__56442_56515 = G__56544;
i__56443_56516 = G__56545;
continue;
}
} else {
}
}
break;
}

var seq__56448 = cljs.core.seq.call(null,remote_bullets);
var chunk__56449 = null;
var count__56450 = (0);
var i__56451 = (0);
while(true){
if((i__56451 < count__56450)){
var bullet = cljs.core._nth.call(null,chunk__56449,i__56451);
var map__56452_56546 = bullet;
var map__56452_56547__$1 = ((((!((map__56452_56546 == null)))?((((map__56452_56546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56452_56546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56452_56546):map__56452_56546);
var bx_56548 = cljs.core.get.call(null,map__56452_56547__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_56549 = cljs.core.get.call(null,map__56452_56547__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_56550 = cljs.core.get.call(null,map__56452_56547__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_56548,by_56549,size_56550,size_56550);

var G__56551 = seq__56448;
var G__56552 = chunk__56449;
var G__56553 = count__56450;
var G__56554 = (i__56451 + (1));
seq__56448 = G__56551;
chunk__56449 = G__56552;
count__56450 = G__56553;
i__56451 = G__56554;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__56448);
if(temp__4425__auto__){
var seq__56448__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56448__$1)){
var c__20339__auto__ = cljs.core.chunk_first.call(null,seq__56448__$1);
var G__56555 = cljs.core.chunk_rest.call(null,seq__56448__$1);
var G__56556 = c__20339__auto__;
var G__56557 = cljs.core.count.call(null,c__20339__auto__);
var G__56558 = (0);
seq__56448 = G__56555;
chunk__56449 = G__56556;
count__56450 = G__56557;
i__56451 = G__56558;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__56448__$1);
var map__56454_56559 = bullet;
var map__56454_56560__$1 = ((((!((map__56454_56559 == null)))?((((map__56454_56559.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56454_56559.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56454_56559):map__56454_56559);
var bx_56561 = cljs.core.get.call(null,map__56454_56560__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_56562 = cljs.core.get.call(null,map__56454_56560__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_56563 = cljs.core.get.call(null,map__56454_56560__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_56561,by_56562,size_56563,size_56563);

var G__56564 = cljs.core.next.call(null,seq__56448__$1);
var G__56565 = null;
var G__56566 = (0);
var G__56567 = (0);
seq__56448 = G__56564;
chunk__56449 = G__56565;
count__56450 = G__56566;
i__56451 = G__56567;
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
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__56568_SHARP_){
return cljs.core.conj.call(null,p1__56568_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__56569_SHARP_){
return cljs.core.disj.call(null,p1__56569_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
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
var G__56570__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__56570 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56571__i = 0, G__56571__a = new Array(arguments.length -  0);
while (G__56571__i < G__56571__a.length) {G__56571__a[G__56571__i] = arguments[G__56571__i + 0]; ++G__56571__i;}
  args = new cljs.core.IndexedSeq(G__56571__a,0);
} 
return G__56570__delegate.call(this,args);};
G__56570.cljs$lang$maxFixedArity = 0;
G__56570.cljs$lang$applyTo = (function (arglist__56572){
var args = cljs.core.seq(arglist__56572);
return G__56570__delegate(args);
});
G__56570.cljs$core$IFn$_invoke$arity$variadic = G__56570__delegate;
return G__56570;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.level.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.levels.level1.level1),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__56573__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__56573 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56574__i = 0, G__56574__a = new Array(arguments.length -  0);
while (G__56574__i < G__56574__a.length) {G__56574__a[G__56574__i] = arguments[G__56574__i + 0]; ++G__56574__i;}
  args = new cljs.core.IndexedSeq(G__56574__a,0);
} 
return G__56573__delegate.call(this,args);};
G__56573.cljs$lang$maxFixedArity = 0;
G__56573.cljs$lang$applyTo = (function (arglist__56575){
var args = cljs.core.seq(arglist__56575);
return G__56573__delegate(args);
});
G__56573.cljs$core$IFn$_invoke$arity$variadic = G__56573__delegate;
return G__56573;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__56576__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__56576 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56577__i = 0, G__56577__a = new Array(arguments.length -  0);
while (G__56577__i < G__56577__a.length) {G__56577__a[G__56577__i] = arguments[G__56577__i + 0]; ++G__56577__i;}
  args = new cljs.core.IndexedSeq(G__56577__a,0);
} 
return G__56576__delegate.call(this,args);};
G__56576.cljs$lang$maxFixedArity = 0;
G__56576.cljs$lang$applyTo = (function (arglist__56578){
var args = cljs.core.seq(arglist__56578);
return G__56576__delegate(args);
});
G__56576.cljs$core$IFn$_invoke$arity$variadic = G__56576__delegate;
return G__56576;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__56579__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__56579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56580__i = 0, G__56580__a = new Array(arguments.length -  0);
while (G__56580__i < G__56580__a.length) {G__56580__a[G__56580__i] = arguments[G__56580__i + 0]; ++G__56580__i;}
  args = new cljs.core.IndexedSeq(G__56580__a,0);
} 
return G__56579__delegate.call(this,args);};
G__56579.cljs$lang$maxFixedArity = 0;
G__56579.cljs$lang$applyTo = (function (arglist__56581){
var args = cljs.core.seq(arglist__56581);
return G__56579__delegate(args);
});
G__56579.cljs$core$IFn$_invoke$arity$variadic = G__56579__delegate;
return G__56579;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__56582__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__56582 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56583__i = 0, G__56583__a = new Array(arguments.length -  0);
while (G__56583__i < G__56583__a.length) {G__56583__a[G__56583__i] = arguments[G__56583__i + 0]; ++G__56583__i;}
  args = new cljs.core.IndexedSeq(G__56583__a,0);
} 
return G__56582__delegate.call(this,args);};
G__56582.cljs$lang$maxFixedArity = 0;
G__56582.cljs$lang$applyTo = (function (arglist__56584){
var args = cljs.core.seq(arglist__56584);
return G__56582__delegate(args);
});
G__56582.cljs$core$IFn$_invoke$arity$variadic = G__56582__delegate;
return G__56582;
})()
:p3r50na.apps.bookof5rinds.client.game.component.draw));
});
goog.exportSymbol('p3r50na.apps.bookof5rinds.client.game.component.game_renderer', p3r50na.apps.bookof5rinds.client.game.component.game_renderer);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__23409__23410__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__23409__23410__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p3r50na.apps.bookof5rinds.client.game.component.game_renderer,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t56588 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t56588 = (function (game_component,meta56589){
this.game_component = game_component;
this.meta56589 = meta56589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t56588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56590,meta56589__$1){
var self__ = this;
var _56590__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t56588(self__.game_component,meta56589__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t56588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56590){
var self__ = this;
var _56590__$1 = this;
return self__.meta56589;
});

p3r50na.apps.bookof5rinds.client.game.component.t56588.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t56588.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t56588.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t56588.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t56588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta56589","meta56589",865428389,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t56588.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t56588.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t56588";

p3r50na.apps.bookof5rinds.client.game.component.t56588.cljs$lang$ctorPrWriter = (function (this__20134__auto__,writer__20135__auto__,opt__20136__auto__){
return cljs.core._write.call(null,writer__20135__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t56588");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t56588 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t56588(game_component__$1,meta56589){
return (new p3r50na.apps.bookof5rinds.client.game.component.t56588(game_component__$1,meta56589));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t56588(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map