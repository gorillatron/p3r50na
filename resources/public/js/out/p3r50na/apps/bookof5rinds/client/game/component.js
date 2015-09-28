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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k23866,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__23868 = (((k23866 instanceof cljs.core.Keyword))?k23866.fqn:null);
switch (G__23868) {
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
return cljs.core.get.call(null,self__.__extmap,k23866,else__20153__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23865){
var self__ = this;
var G__23865__$1 = this;
return (new cljs.core.RecordIter((0),G__23865__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__23865){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__23869 = cljs.core.keyword_identical_QMARK_;
var expr__23870 = k__20158__auto__;
if(cljs.core.truth_(pred__23869.call(null,new cljs.core.Keyword(null,"player","player",-97687400),expr__23870))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(G__23865,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23869.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),expr__23870))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,G__23865,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23869.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),expr__23870))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,G__23865,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23869.call(null,new cljs.core.Keyword(null,"map","map",1371690461),expr__23870))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,G__23865,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__23865),null));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__23865){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,G__23865,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_GameState(G__23867){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(G__23867),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(G__23867),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(G__23867),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(G__23867),null,cljs.core.dissoc.call(null,G__23867,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20152__auto__,k23874,else__20153__auto__){
var self__ = this;
var this__20152__auto____$1 = this;
var G__23876 = (((k23874 instanceof cljs.core.Keyword))?k23874.fqn:null);
switch (G__23876) {
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
return cljs.core.get.call(null,self__.__extmap,k23874,else__20153__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23873){
var self__ = this;
var G__23873__$1 = this;
return (new cljs.core.RecordIter((0),G__23873__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20157__auto__,k__20158__auto__,G__23873){
var self__ = this;
var this__20157__auto____$1 = this;
var pred__23877 = cljs.core.keyword_identical_QMARK_;
var expr__23878 = k__20158__auto__;
if(cljs.core.truth_(pred__23877.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__23878))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__23873,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23877.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__23878))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,G__23873,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23877.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__23878))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,G__23873,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23877.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__23878))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,G__23873,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__23877.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__23878))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,G__23873,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20158__auto__,G__23873),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20149__auto__,G__23873){
var self__ = this;
var this__20149__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__23873,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__23875){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__23875),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__23875),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__23875),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__23875),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__23875),null,cljs.core.dissoc.call(null,G__23875,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
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
var walls = p3r50na.apps.bookof5rinds.client.game.level.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

quil.core.stroke.call(null,(0),(0),(0));

var seq__23895_23909 = cljs.core.seq.call(null,walls);
var chunk__23896_23910 = null;
var count__23897_23911 = (0);
var i__23898_23912 = (0);
while(true){
if((i__23898_23912 < count__23897_23911)){
var wall_23913 = cljs.core._nth.call(null,chunk__23896_23910,i__23898_23912);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_23913),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_23913),(20),(20));

var G__23914 = seq__23895_23909;
var G__23915 = chunk__23896_23910;
var G__23916 = count__23897_23911;
var G__23917 = (i__23898_23912 + (1));
seq__23895_23909 = G__23914;
chunk__23896_23910 = G__23915;
count__23897_23911 = G__23916;
i__23898_23912 = G__23917;
continue;
} else {
var temp__4425__auto___23918 = cljs.core.seq.call(null,seq__23895_23909);
if(temp__4425__auto___23918){
var seq__23895_23919__$1 = temp__4425__auto___23918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23895_23919__$1)){
var c__20339__auto___23920 = cljs.core.chunk_first.call(null,seq__23895_23919__$1);
var G__23921 = cljs.core.chunk_rest.call(null,seq__23895_23919__$1);
var G__23922 = c__20339__auto___23920;
var G__23923 = cljs.core.count.call(null,c__20339__auto___23920);
var G__23924 = (0);
seq__23895_23909 = G__23921;
chunk__23896_23910 = G__23922;
count__23897_23911 = G__23923;
i__23898_23912 = G__23924;
continue;
} else {
var wall_23925 = cljs.core.first.call(null,seq__23895_23919__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_23925),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_23925),(20),(20));

var G__23926 = cljs.core.next.call(null,seq__23895_23919__$1);
var G__23927 = null;
var G__23928 = (0);
var G__23929 = (0);
seq__23895_23909 = G__23926;
chunk__23896_23910 = G__23927;
count__23897_23911 = G__23928;
i__23898_23912 = G__23929;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__23899_23930 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__23899_23931__$1 = ((((!((map__23899_23930 == null)))?((((map__23899_23930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23899_23930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23899_23930):map__23899_23930);
var x_23932 = cljs.core.get.call(null,map__23899_23931__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_23933 = cljs.core.get.call(null,map__23899_23931__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_23934 = cljs.core.get.call(null,map__23899_23931__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_23932,y_23933,size_23934,size_23934);

var seq__23901 = cljs.core.seq.call(null,bullets);
var chunk__23902 = null;
var count__23903 = (0);
var i__23904 = (0);
while(true){
if((i__23904 < count__23903)){
var bullet = cljs.core._nth.call(null,chunk__23902,i__23904);
var map__23905_23935 = bullet;
var map__23905_23936__$1 = ((((!((map__23905_23935 == null)))?((((map__23905_23935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23905_23935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23905_23935):map__23905_23935);
var bx_23937 = cljs.core.get.call(null,map__23905_23936__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_23938 = cljs.core.get.call(null,map__23905_23936__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_23939 = cljs.core.get.call(null,map__23905_23936__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_23937,by_23938,size_23939,size_23939);

var G__23940 = seq__23901;
var G__23941 = chunk__23902;
var G__23942 = count__23903;
var G__23943 = (i__23904 + (1));
seq__23901 = G__23940;
chunk__23902 = G__23941;
count__23903 = G__23942;
i__23904 = G__23943;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23901);
if(temp__4425__auto__){
var seq__23901__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23901__$1)){
var c__20339__auto__ = cljs.core.chunk_first.call(null,seq__23901__$1);
var G__23944 = cljs.core.chunk_rest.call(null,seq__23901__$1);
var G__23945 = c__20339__auto__;
var G__23946 = cljs.core.count.call(null,c__20339__auto__);
var G__23947 = (0);
seq__23901 = G__23944;
chunk__23902 = G__23945;
count__23903 = G__23946;
i__23904 = G__23947;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__23901__$1);
var map__23907_23948 = bullet;
var map__23907_23949__$1 = ((((!((map__23907_23948 == null)))?((((map__23907_23948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23907_23948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23907_23948):map__23907_23948);
var bx_23950 = cljs.core.get.call(null,map__23907_23949__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_23951 = cljs.core.get.call(null,map__23907_23949__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_23952 = cljs.core.get.call(null,map__23907_23949__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_23950,by_23951,size_23952,size_23952);

var G__23953 = cljs.core.next.call(null,seq__23901__$1);
var G__23954 = null;
var G__23955 = (0);
var G__23956 = (0);
seq__23901 = G__23953;
chunk__23902 = G__23954;
count__23903 = G__23955;
i__23904 = G__23956;
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
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__23957_SHARP_){
return cljs.core.conj.call(null,p1__23957_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__23958_SHARP_){
return cljs.core.disj.call(null,p1__23958_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
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
var G__23959__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__23959 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23960__i = 0, G__23960__a = new Array(arguments.length -  0);
while (G__23960__i < G__23960__a.length) {G__23960__a[G__23960__i] = arguments[G__23960__i + 0]; ++G__23960__i;}
  args = new cljs.core.IndexedSeq(G__23960__a,0);
} 
return G__23959__delegate.call(this,args);};
G__23959.cljs$lang$maxFixedArity = 0;
G__23959.cljs$lang$applyTo = (function (arglist__23961){
var args = cljs.core.seq(arglist__23961);
return G__23959__delegate(args);
});
G__23959.cljs$core$IFn$_invoke$arity$variadic = G__23959__delegate;
return G__23959;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.level.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.levels.level1.level1),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__23962__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__23962 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23963__i = 0, G__23963__a = new Array(arguments.length -  0);
while (G__23963__i < G__23963__a.length) {G__23963__a[G__23963__i] = arguments[G__23963__i + 0]; ++G__23963__i;}
  args = new cljs.core.IndexedSeq(G__23963__a,0);
} 
return G__23962__delegate.call(this,args);};
G__23962.cljs$lang$maxFixedArity = 0;
G__23962.cljs$lang$applyTo = (function (arglist__23964){
var args = cljs.core.seq(arglist__23964);
return G__23962__delegate(args);
});
G__23962.cljs$core$IFn$_invoke$arity$variadic = G__23962__delegate;
return G__23962;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__23965__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__23965 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23966__i = 0, G__23966__a = new Array(arguments.length -  0);
while (G__23966__i < G__23966__a.length) {G__23966__a[G__23966__i] = arguments[G__23966__i + 0]; ++G__23966__i;}
  args = new cljs.core.IndexedSeq(G__23966__a,0);
} 
return G__23965__delegate.call(this,args);};
G__23965.cljs$lang$maxFixedArity = 0;
G__23965.cljs$lang$applyTo = (function (arglist__23967){
var args = cljs.core.seq(arglist__23967);
return G__23965__delegate(args);
});
G__23965.cljs$core$IFn$_invoke$arity$variadic = G__23965__delegate;
return G__23965;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__23968__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__23968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23969__i = 0, G__23969__a = new Array(arguments.length -  0);
while (G__23969__i < G__23969__a.length) {G__23969__a[G__23969__i] = arguments[G__23969__i + 0]; ++G__23969__i;}
  args = new cljs.core.IndexedSeq(G__23969__a,0);
} 
return G__23968__delegate.call(this,args);};
G__23968.cljs$lang$maxFixedArity = 0;
G__23968.cljs$lang$applyTo = (function (arglist__23970){
var args = cljs.core.seq(arglist__23970);
return G__23968__delegate(args);
});
G__23968.cljs$core$IFn$_invoke$arity$variadic = G__23968__delegate;
return G__23968;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__23971__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__23971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23972__i = 0, G__23972__a = new Array(arguments.length -  0);
while (G__23972__i < G__23972__a.length) {G__23972__a[G__23972__i] = arguments[G__23972__i + 0]; ++G__23972__i;}
  args = new cljs.core.IndexedSeq(G__23972__a,0);
} 
return G__23971__delegate.call(this,args);};
G__23971.cljs$lang$maxFixedArity = 0;
G__23971.cljs$lang$applyTo = (function (arglist__23973){
var args = cljs.core.seq(arglist__23973);
return G__23971__delegate(args);
});
G__23971.cljs$core$IFn$_invoke$arity$variadic = G__23971__delegate;
return G__23971;
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
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t23977 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t23977 = (function (game_component,meta23978){
this.game_component = game_component;
this.meta23978 = meta23978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t23977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23979,meta23978__$1){
var self__ = this;
var _23979__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t23977(self__.game_component,meta23978__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t23977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23979){
var self__ = this;
var _23979__$1 = this;
return self__.meta23978;
});

p3r50na.apps.bookof5rinds.client.game.component.t23977.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t23977.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t23977.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t23977.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t23977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta23978","meta23978",-1021457622,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t23977.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t23977.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t23977";

p3r50na.apps.bookof5rinds.client.game.component.t23977.cljs$lang$ctorPrWriter = (function (this__20134__auto__,writer__20135__auto__,opt__20136__auto__){
return cljs.core._write.call(null,writer__20135__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t23977");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t23977 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t23977(game_component__$1,meta23978){
return (new p3r50na.apps.bookof5rinds.client.game.component.t23977(game_component__$1,meta23978));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t23977(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map