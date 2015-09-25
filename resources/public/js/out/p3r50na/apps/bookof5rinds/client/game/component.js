// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.component');
goog.require('cljs.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.maps.level1');
goog.require('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('om.dom');
goog.require('p3r50na.apps.bookof5rinds.client.game.map');
goog.require('quil.core');
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
p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20151__auto__,k__20152__auto__){
var self__ = this;
var this__20151__auto____$1 = this;
return cljs.core._lookup.call(null,this__20151__auto____$1,k__20152__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20153__auto__,k124033,else__20154__auto__){
var self__ = this;
var this__20153__auto____$1 = this;
var G__124035 = (((k124033 instanceof cljs.core.Keyword))?k124033.fqn:null);
switch (G__124035) {
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
return cljs.core.get.call(null,self__.__extmap,k124033,else__20154__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20165__auto__,writer__20166__auto__,opts__20167__auto__){
var self__ = this;
var this__20165__auto____$1 = this;
var pr_pair__20168__auto__ = ((function (this__20165__auto____$1){
return (function (keyval__20169__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,cljs.core.pr_writer,""," ","",opts__20167__auto__,keyval__20169__auto__);
});})(this__20165__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,pr_pair__20168__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.GameState{",", ","}",opts__20167__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player","player",-97687400),self__.player],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),self__.remote_players],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bullets","bullets",1734809024),self__.bullets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map","map",1371690461),self__.map],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__124032){
var self__ = this;
var G__124032__$1 = this;
return (new cljs.core.RecordIter((0),G__124032__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20149__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20155__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20146__auto__){
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20147__auto__,other__20148__auto__){
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20160__auto__,k__20161__auto__){
var self__ = this;
var this__20160__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bullets","bullets",1734809024),null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),null,new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),k__20161__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20160__auto____$1),self__.__meta),k__20161__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20161__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20158__auto__,k__20159__auto__,G__124032){
var self__ = this;
var this__20158__auto____$1 = this;
var pred__124036 = cljs.core.keyword_identical_QMARK_;
var expr__124037 = k__20159__auto__;
if(cljs.core.truth_(pred__124036.call(null,new cljs.core.Keyword(null,"player","player",-97687400),expr__124037))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(G__124032,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__124036.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),expr__124037))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,G__124032,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__124036.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),expr__124037))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,G__124032,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__124036.call(null,new cljs.core.Keyword(null,"map","map",1371690461),expr__124037))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,G__124032,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20159__auto__,G__124032),null));
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20163__auto__){
var self__ = this;
var this__20163__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"player","player",-97687400),self__.player],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),self__.remote_players],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bullets","bullets",1734809024),self__.bullets],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"map","map",1371690461),self__.map],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20150__auto__,G__124032){
var self__ = this;
var this__20150__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,G__124032,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20156__auto__,entry__20157__auto__){
var self__ = this;
var this__20156__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20157__auto__)){
return cljs.core._assoc.call(null,this__20156__auto____$1,cljs.core._nth.call(null,entry__20157__auto__,(0)),cljs.core._nth.call(null,entry__20157__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20156__auto____$1,entry__20157__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"player","player",1542844127,null),new cljs.core.Symbol(null,"remote-players","remote-players",-1207501111,null),new cljs.core.Symbol(null,"bullets","bullets",-919626745,null),new cljs.core.Symbol(null,"map","map",-1282745308,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.GameState.cljs$lang$ctorPrSeq = (function (this__20185__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/GameState");
});

p3r50na.apps.bookof5rinds.client.game.component.GameState.cljs$lang$ctorPrWriter = (function (this__20185__auto__,writer__20186__auto__){
return cljs.core._write.call(null,writer__20186__auto__,"p3r50na.apps.bookof5rinds.client.game.component/GameState");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_GameState(player,remote_players,bullets,map){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(player,remote_players,bullets,map,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_GameState(G__124034){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(G__124034),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(G__124034),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(G__124034),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(G__124034),null,cljs.core.dissoc.call(null,G__124034,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)),null));
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
p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20151__auto__,k__20152__auto__){
var self__ = this;
var this__20151__auto____$1 = this;
return cljs.core._lookup.call(null,this__20151__auto____$1,k__20152__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20153__auto__,k124041,else__20154__auto__){
var self__ = this;
var this__20153__auto____$1 = this;
var G__124043 = (((k124041 instanceof cljs.core.Keyword))?k124041.fqn:null);
switch (G__124043) {
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
return cljs.core.get.call(null,self__.__extmap,k124041,else__20154__auto__);

}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20165__auto__,writer__20166__auto__,opts__20167__auto__){
var self__ = this;
var this__20165__auto____$1 = this;
var pr_pair__20168__auto__ = ((function (this__20165__auto____$1){
return (function (keyval__20169__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,cljs.core.pr_writer,""," ","",opts__20167__auto__,keyval__20169__auto__);
});})(this__20165__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,pr_pair__20168__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.Player{",", ","}",opts__20167__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__124040){
var self__ = this;
var G__124040__$1 = this;
return (new cljs.core.RecordIter((0),G__124040__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20149__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20155__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20146__auto__){
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20147__auto__,other__20148__auto__){
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20160__auto__,k__20161__auto__){
var self__ = this;
var this__20160__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__20161__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20160__auto____$1),self__.__meta),k__20161__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20161__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20158__auto__,k__20159__auto__,G__124040){
var self__ = this;
var this__20158__auto____$1 = this;
var pred__124044 = cljs.core.keyword_identical_QMARK_;
var expr__124045 = k__20159__auto__;
if(cljs.core.truth_(pred__124044.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__124045))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__124040,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__124044.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__124045))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,G__124040,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__124044.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__124045))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,G__124040,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__124044.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__124045))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,G__124040,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__124044.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__124045))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,G__124040,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20159__auto__,G__124040),null));
}
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20163__auto__){
var self__ = this;
var this__20163__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20150__auto__,G__124040){
var self__ = this;
var this__20150__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__124040,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20156__auto__,entry__20157__auto__){
var self__ = this;
var this__20156__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20157__auto__)){
return cljs.core._assoc.call(null,this__20156__auto____$1,cljs.core._nth.call(null,entry__20157__auto__,(0)),cljs.core._nth.call(null,entry__20157__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20156__auto____$1,entry__20157__auto__);
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrSeq = (function (this__20185__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrWriter = (function (this__20185__auto__,writer__20186__auto__){
return cljs.core._write.call(null,writer__20186__auto__,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_Player(name,x,y,size,speed){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(name,x,y,size,speed,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__124042){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__124042),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__124042),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__124042),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__124042),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__124042),null,cljs.core.dissoc.call(null,G__124042,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
p3r50na.apps.bookof5rinds.client.game.component.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player("NAME",(5),(5),(10),(2),null,null,null)),new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"map","map",1371690461),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1], null));
p3r50na.apps.bookof5rinds.client.game.component.game_loop = p3r50na.apps.bookof5rinds.client.game.engine.create_loop.call(null,cljs.core.deref.call(null,p3r50na.apps.bookof5rinds.client.game.component.state));
p3r50na.apps.bookof5rinds.client.game.component.controller = new cljs.core.Keyword(null,"controller","controller",2013778659).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_loop);
var c__23656__auto___124077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23656__auto___124077){
return (function (){
var f__23657__auto__ = (function (){var switch__23591__auto__ = ((function (c__23656__auto___124077){
return (function (state_124061){
var state_val_124062 = (state_124061[(1)]);
if((state_val_124062 === (1))){
var state_124061__$1 = state_124061;
var statearr_124063_124078 = state_124061__$1;
(statearr_124063_124078[(2)] = null);

(statearr_124063_124078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124062 === (2))){
var state_124061__$1 = state_124061;
var statearr_124064_124079 = state_124061__$1;
(statearr_124064_124079[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124062 === (3))){
var inst_124059 = (state_124061[(2)]);
var state_124061__$1 = state_124061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_124061__$1,inst_124059);
} else {
if((state_val_124062 === (4))){
var inst_124050 = new cljs.core.Keyword(null,"render-chan","render-chan",667311808).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_loop);
var state_124061__$1 = state_124061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_124061__$1,(7),inst_124050);
} else {
if((state_val_124062 === (5))){
var state_124061__$1 = state_124061;
var statearr_124066_124080 = state_124061__$1;
(statearr_124066_124080[(2)] = null);

(statearr_124066_124080[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124062 === (6))){
var inst_124057 = (state_124061[(2)]);
var state_124061__$1 = state_124061;
var statearr_124067_124081 = state_124061__$1;
(statearr_124067_124081[(2)] = inst_124057);

(statearr_124067_124081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124062 === (7))){
var inst_124052 = (state_124061[(2)]);
var inst_124053 = cljs.core.reset_BANG_.call(null,p3r50na.apps.bookof5rinds.client.game.component.state,inst_124052);
var state_124061__$1 = (function (){var statearr_124068 = state_124061;
(statearr_124068[(7)] = inst_124053);

return statearr_124068;
})();
var statearr_124069_124082 = state_124061__$1;
(statearr_124069_124082[(2)] = null);

(statearr_124069_124082[(1)] = (2));


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
});})(c__23656__auto___124077))
;
return ((function (switch__23591__auto__,c__23656__auto___124077){
return (function() {
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__ = null;
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____0 = (function (){
var statearr_124073 = [null,null,null,null,null,null,null,null];
(statearr_124073[(0)] = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__);

(statearr_124073[(1)] = (1));

return statearr_124073;
});
var p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____1 = (function (state_124061){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_124061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e124074){if((e124074 instanceof Object)){
var ex__23595__auto__ = e124074;
var statearr_124075_124083 = state_124061;
(statearr_124075_124083[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__124084 = state_124061;
state_124061 = G__124084;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__ = function(state_124061){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____1.call(this,state_124061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$game$component$state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto___124077))
})();
var state__23658__auto__ = (function (){var statearr_124076 = f__23657__auto__.call(null);
(statearr_124076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto___124077);

return statearr_124076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23658__auto__);
});})(c__23656__auto___124077))
);

p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
return quil.core.frame_rate.call(null,(60));
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(){
var state = cljs.core.deref.call(null,p3r50na.apps.bookof5rinds.client.game.component.state);
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

quil.core.stroke.call(null,(0),(0),(0));

var seq__124099_124113 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.map.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)));
var chunk__124100_124114 = null;
var count__124101_124115 = (0);
var i__124102_124116 = (0);
while(true){
if((i__124102_124116 < count__124101_124115)){
var wall_124117 = cljs.core._nth.call(null,chunk__124100_124114,i__124102_124116);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_124117),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_124117),(20),(20));

var G__124118 = seq__124099_124113;
var G__124119 = chunk__124100_124114;
var G__124120 = count__124101_124115;
var G__124121 = (i__124102_124116 + (1));
seq__124099_124113 = G__124118;
chunk__124100_124114 = G__124119;
count__124101_124115 = G__124120;
i__124102_124116 = G__124121;
continue;
} else {
var temp__4425__auto___124122 = cljs.core.seq.call(null,seq__124099_124113);
if(temp__4425__auto___124122){
var seq__124099_124123__$1 = temp__4425__auto___124122;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__124099_124123__$1)){
var c__20340__auto___124124 = cljs.core.chunk_first.call(null,seq__124099_124123__$1);
var G__124125 = cljs.core.chunk_rest.call(null,seq__124099_124123__$1);
var G__124126 = c__20340__auto___124124;
var G__124127 = cljs.core.count.call(null,c__20340__auto___124124);
var G__124128 = (0);
seq__124099_124113 = G__124125;
chunk__124100_124114 = G__124126;
count__124101_124115 = G__124127;
i__124102_124116 = G__124128;
continue;
} else {
var wall_124129 = cljs.core.first.call(null,seq__124099_124123__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_124129),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_124129),(20),(20));

var G__124130 = cljs.core.next.call(null,seq__124099_124123__$1);
var G__124131 = null;
var G__124132 = (0);
var G__124133 = (0);
seq__124099_124113 = G__124130;
chunk__124100_124114 = G__124131;
count__124101_124115 = G__124132;
i__124102_124116 = G__124133;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__124103_124134 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__124103_124135__$1 = ((((!((map__124103_124134 == null)))?((((map__124103_124134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__124103_124134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__124103_124134):map__124103_124134);
var x_124136 = cljs.core.get.call(null,map__124103_124135__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_124137 = cljs.core.get.call(null,map__124103_124135__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_124138 = cljs.core.get.call(null,map__124103_124135__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_124136,y_124137,size_124138,size_124138);

var seq__124105 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state));
var chunk__124106 = null;
var count__124107 = (0);
var i__124108 = (0);
while(true){
if((i__124108 < count__124107)){
var bullet = cljs.core._nth.call(null,chunk__124106,i__124108);
var map__124109_124139 = bullet;
var map__124109_124140__$1 = ((((!((map__124109_124139 == null)))?((((map__124109_124139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__124109_124139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__124109_124139):map__124109_124139);
var bx_124141 = cljs.core.get.call(null,map__124109_124140__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_124142 = cljs.core.get.call(null,map__124109_124140__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_124143 = cljs.core.get.call(null,map__124109_124140__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_124141,by_124142,size_124143,size_124143);

var G__124144 = seq__124105;
var G__124145 = chunk__124106;
var G__124146 = count__124107;
var G__124147 = (i__124108 + (1));
seq__124105 = G__124144;
chunk__124106 = G__124145;
count__124107 = G__124146;
i__124108 = G__124147;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__124105);
if(temp__4425__auto__){
var seq__124105__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__124105__$1)){
var c__20340__auto__ = cljs.core.chunk_first.call(null,seq__124105__$1);
var G__124148 = cljs.core.chunk_rest.call(null,seq__124105__$1);
var G__124149 = c__20340__auto__;
var G__124150 = cljs.core.count.call(null,c__20340__auto__);
var G__124151 = (0);
seq__124105 = G__124148;
chunk__124106 = G__124149;
count__124107 = G__124150;
i__124108 = G__124151;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__124105__$1);
var map__124111_124152 = bullet;
var map__124111_124153__$1 = ((((!((map__124111_124152 == null)))?((((map__124111_124152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__124111_124152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__124111_124152):map__124111_124152);
var bx_124154 = cljs.core.get.call(null,map__124111_124153__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_124155 = cljs.core.get.call(null,map__124111_124153__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_124156 = cljs.core.get.call(null,map__124111_124153__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_124154,by_124155,size_124156,size_124156);

var G__124157 = cljs.core.next.call(null,seq__124105__$1);
var G__124158 = null;
var G__124159 = (0);
var G__124160 = (0);
seq__124105 = G__124157;
chunk__124106 = G__124158;
count__124107 = G__124159;
i__124108 = G__124160;
continue;
}
} else {
return null;
}
}
break;
}
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_down = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_down(event){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__124161_SHARP_){
return cljs.core.conj.call(null,p1__124161_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(event){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__124162_SHARP_){
return cljs.core.disj.call(null,p1__124162_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked = (function p3r50na$apps$bookof5rinds$client$game$component$on_mouse_clicked(state,event){
var map__124168 = event;
var map__124168__$1 = ((((!((map__124168 == null)))?((((map__124168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__124168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__124168):map__124168);
var mx = cljs.core.get.call(null,map__124168__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__124168__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__124169 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__124169__$1 = ((((!((map__124169 == null)))?((((map__124169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__124169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__124169):map__124169);
var px = cljs.core.get.call(null,map__124169__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__124169__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__124169__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
var bullet = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),(2),new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"fired-by","fired-by",988297261),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)], null);
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,((function (map__124168,map__124168__$1,mx,my,map__124169,map__124169__$1,px,py,ps,start,bullet){
return (function (p1__124163_SHARP_){
return cljs.core.conj.call(null,p1__124163_SHARP_,new cljs.core.Keyword(null,"bullet-fired","bullet-fired",221306794));
});})(map__124168,map__124168__$1,mx,my,map__124169,map__124169__$1,px,py,ps,start,bullet))
);
});
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked))?(function() { 
var G__124172__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__124172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__124173__i = 0, G__124173__a = new Array(arguments.length -  0);
while (G__124173__i < G__124173__a.length) {G__124173__a[G__124173__i] = arguments[G__124173__i + 0]; ++G__124173__i;}
  args = new cljs.core.IndexedSeq(G__124173__a,0);
} 
return G__124172__delegate.call(this,args);};
G__124172.cljs$lang$maxFixedArity = 0;
G__124172.cljs$lang$applyTo = (function (arglist__124174){
var args = cljs.core.seq(arglist__124174);
return G__124172__delegate(args);
});
G__124172.cljs$core$IFn$_invoke$arity$variadic = G__124172__delegate;
return G__124172;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.map.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__124175__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__124175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__124176__i = 0, G__124176__a = new Array(arguments.length -  0);
while (G__124176__i < G__124176__a.length) {G__124176__a[G__124176__i] = arguments[G__124176__i + 0]; ++G__124176__i;}
  args = new cljs.core.IndexedSeq(G__124176__a,0);
} 
return G__124175__delegate.call(this,args);};
G__124175.cljs$lang$maxFixedArity = 0;
G__124175.cljs$lang$applyTo = (function (arglist__124177){
var args = cljs.core.seq(arglist__124177);
return G__124175__delegate(args);
});
G__124175.cljs$core$IFn$_invoke$arity$variadic = G__124175__delegate;
return G__124175;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__124178__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__124178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__124179__i = 0, G__124179__a = new Array(arguments.length -  0);
while (G__124179__i < G__124179__a.length) {G__124179__a[G__124179__i] = arguments[G__124179__i + 0]; ++G__124179__i;}
  args = new cljs.core.IndexedSeq(G__124179__a,0);
} 
return G__124178__delegate.call(this,args);};
G__124178.cljs$lang$maxFixedArity = 0;
G__124178.cljs$lang$applyTo = (function (arglist__124180){
var args = cljs.core.seq(arglist__124180);
return G__124178__delegate(args);
});
G__124178.cljs$core$IFn$_invoke$arity$variadic = G__124178__delegate;
return G__124178;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__124181__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__124181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__124182__i = 0, G__124182__a = new Array(arguments.length -  0);
while (G__124182__i < G__124182__a.length) {G__124182__a[G__124182__i] = arguments[G__124182__i + 0]; ++G__124182__i;}
  args = new cljs.core.IndexedSeq(G__124182__a,0);
} 
return G__124181__delegate.call(this,args);};
G__124181.cljs$lang$maxFixedArity = 0;
G__124181.cljs$lang$applyTo = (function (arglist__124183){
var args = cljs.core.seq(arglist__124183);
return G__124181__delegate(args);
});
G__124181.cljs$core$IFn$_invoke$arity$variadic = G__124181__delegate;
return G__124181;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__124184__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__124184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__124185__i = 0, G__124185__a = new Array(arguments.length -  0);
while (G__124185__i < G__124185__a.length) {G__124185__a[G__124185__i] = arguments[G__124185__i + 0]; ++G__124185__i;}
  args = new cljs.core.IndexedSeq(G__124185__a,0);
} 
return G__124184__delegate.call(this,args);};
G__124184.cljs$lang$maxFixedArity = 0;
G__124184.cljs$lang$applyTo = (function (arglist__124186){
var args = cljs.core.seq(arglist__124186);
return G__124184__delegate(args);
});
G__124184.cljs$core$IFn$_invoke$arity$variadic = G__124184__delegate;
return G__124184;
})()
:p3r50na.apps.bookof5rinds.client.game.component.draw));
});
goog.exportSymbol('p3r50na.apps.bookof5rinds.client.game.component.game_renderer', p3r50na.apps.bookof5rinds.client.game.component.game_renderer);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__25984__25985__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__25984__25985__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),p3r50na.apps.bookof5rinds.client.game.component.game_renderer,new cljs.core.Keyword(null,"host-id","host-id",742376279),"game-canvas"], null));
}
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t124190 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t124190 = (function (game_component,meta124191){
this.game_component = game_component;
this.meta124191 = meta124191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t124190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_124192,meta124191__$1){
var self__ = this;
var _124192__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t124190(self__.game_component,meta124191__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t124190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_124192){
var self__ = this;
var _124192__$1 = this;
return self__.meta124191;
});

p3r50na.apps.bookof5rinds.client.game.component.t124190.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t124190.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t124190.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t124190.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t124190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta124191","meta124191",-1193970369,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t124190.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t124190.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t124190";

p3r50na.apps.bookof5rinds.client.game.component.t124190.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t124190");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t124190 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t124190(game_component__$1,meta124191){
return (new p3r50na.apps.bookof5rinds.client.game.component.t124190(game_component__$1,meta124191));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t124190(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map