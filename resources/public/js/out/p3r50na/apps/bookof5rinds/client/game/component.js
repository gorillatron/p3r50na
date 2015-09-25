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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20153__auto__,k125014,else__20154__auto__){
var self__ = this;
var this__20153__auto____$1 = this;
var G__125016 = (((k125014 instanceof cljs.core.Keyword))?k125014.fqn:null);
switch (G__125016) {
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
return cljs.core.get.call(null,self__.__extmap,k125014,else__20154__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__125013){
var self__ = this;
var G__125013__$1 = this;
return (new cljs.core.RecordIter((0),G__125013__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20158__auto__,k__20159__auto__,G__125013){
var self__ = this;
var this__20158__auto____$1 = this;
var pred__125017 = cljs.core.keyword_identical_QMARK_;
var expr__125018 = k__20159__auto__;
if(cljs.core.truth_(pred__125017.call(null,new cljs.core.Keyword(null,"player","player",-97687400),expr__125018))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(G__125013,self__.remote_players,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__125017.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),expr__125018))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,G__125013,self__.bullets,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__125017.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),expr__125018))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,G__125013,self__.map,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__125017.call(null,new cljs.core.Keyword(null,"map","map",1371690461),expr__125018))){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,G__125013,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20159__auto__,G__125013),null));
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

p3r50na.apps.bookof5rinds.client.game.component.GameState.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20150__auto__,G__125013){
var self__ = this;
var this__20150__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(self__.player,self__.remote_players,self__.bullets,self__.map,G__125013,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_GameState = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_GameState(G__125015){
return (new p3r50na.apps.bookof5rinds.client.game.component.GameState(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(G__125015),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(G__125015),new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(G__125015),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(G__125015),null,cljs.core.dissoc.call(null,G__125015,new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"bullets","bullets",1734809024),new cljs.core.Keyword(null,"map","map",1371690461)),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20153__auto__,k125022,else__20154__auto__){
var self__ = this;
var this__20153__auto____$1 = this;
var G__125024 = (((k125022 instanceof cljs.core.Keyword))?k125022.fqn:null);
switch (G__125024) {
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
return cljs.core.get.call(null,self__.__extmap,k125022,else__20154__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__125021){
var self__ = this;
var G__125021__$1 = this;
return (new cljs.core.RecordIter((0),G__125021__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20158__auto__,k__20159__auto__,G__125021){
var self__ = this;
var this__20158__auto____$1 = this;
var pred__125025 = cljs.core.keyword_identical_QMARK_;
var expr__125026 = k__20159__auto__;
if(cljs.core.truth_(pred__125025.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__125026))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__125021,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__125025.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__125026))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,G__125021,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__125025.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__125026))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,G__125021,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__125025.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__125026))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,G__125021,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__125025.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__125026))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,G__125021,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20159__auto__,G__125021),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20150__auto__,G__125021){
var self__ = this;
var this__20150__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__125021,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__125023){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__125023),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__125023),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__125023),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__125023),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__125023),null,cljs.core.dissoc.call(null,G__125023,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player("gorillatron",(5),(5),(10),(2),null,null,null)),new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"map","map",1371690461),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1], null));
p3r50na.apps.bookof5rinds.client.game.component.game_loop = p3r50na.apps.bookof5rinds.client.game.engine.create_loop.call(null,cljs.core.deref.call(null,p3r50na.apps.bookof5rinds.client.game.component.state));
p3r50na.apps.bookof5rinds.client.game.component.controller = new cljs.core.Keyword(null,"controller","controller",2013778659).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_loop);
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.frame_rate.call(null,(60));

var c__23656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23656__auto__){
return (function (){
var f__23657__auto__ = (function (){var switch__23591__auto__ = ((function (c__23656__auto__){
return (function (state_125071){
var state_val_125072 = (state_125071[(1)]);
if((state_val_125072 === (1))){
var state_125071__$1 = state_125071;
var statearr_125073_125087 = state_125071__$1;
(statearr_125073_125087[(2)] = null);

(statearr_125073_125087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125072 === (2))){
var state_125071__$1 = state_125071;
var statearr_125074_125088 = state_125071__$1;
(statearr_125074_125088[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125072 === (3))){
var inst_125069 = (state_125071[(2)]);
var state_125071__$1 = state_125071;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_125071__$1,inst_125069);
} else {
if((state_val_125072 === (4))){
var inst_125060 = new cljs.core.Keyword(null,"render-chan","render-chan",667311808).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.component.game_loop);
var state_125071__$1 = state_125071;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_125071__$1,(7),inst_125060);
} else {
if((state_val_125072 === (5))){
var state_125071__$1 = state_125071;
var statearr_125076_125089 = state_125071__$1;
(statearr_125076_125089[(2)] = null);

(statearr_125076_125089[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125072 === (6))){
var inst_125067 = (state_125071[(2)]);
var state_125071__$1 = state_125071;
var statearr_125077_125090 = state_125071__$1;
(statearr_125077_125090[(2)] = inst_125067);

(statearr_125077_125090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_125072 === (7))){
var inst_125062 = (state_125071[(2)]);
var inst_125063 = cljs.core.reset_BANG_.call(null,p3r50na.apps.bookof5rinds.client.game.component.state,inst_125062);
var state_125071__$1 = (function (){var statearr_125078 = state_125071;
(statearr_125078[(7)] = inst_125063);

return statearr_125078;
})();
var statearr_125079_125091 = state_125071__$1;
(statearr_125079_125091[(2)] = null);

(statearr_125079_125091[(1)] = (2));


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
});})(c__23656__auto__))
;
return ((function (switch__23591__auto__,c__23656__auto__){
return (function() {
var p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto__ = null;
var p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto____0 = (function (){
var statearr_125083 = [null,null,null,null,null,null,null,null];
(statearr_125083[(0)] = p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto__);

(statearr_125083[(1)] = (1));

return statearr_125083;
});
var p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto____1 = (function (state_125071){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_125071);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e125084){if((e125084 instanceof Object)){
var ex__23595__auto__ = e125084;
var statearr_125085_125092 = state_125071;
(statearr_125085_125092[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_125071);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e125084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__125093 = state_125071;
state_125071 = G__125093;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto__ = function(state_125071){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto____1.call(this,state_125071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$game$component$setup_$_state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto__))
})();
var state__23658__auto__ = (function (){var statearr_125086 = f__23657__auto__.call(null);
(statearr_125086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto__);

return statearr_125086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23658__auto__);
});})(c__23656__auto__))
);

return c__23656__auto__;
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(){
var state = cljs.core.deref.call(null,p3r50na.apps.bookof5rinds.client.game.component.state);
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

quil.core.stroke.call(null,(0),(0),(0));

var seq__125108_125122 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.map.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)));
var chunk__125109_125123 = null;
var count__125110_125124 = (0);
var i__125111_125125 = (0);
while(true){
if((i__125111_125125 < count__125110_125124)){
var wall_125126 = cljs.core._nth.call(null,chunk__125109_125123,i__125111_125125);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_125126),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_125126),(20),(20));

var G__125127 = seq__125108_125122;
var G__125128 = chunk__125109_125123;
var G__125129 = count__125110_125124;
var G__125130 = (i__125111_125125 + (1));
seq__125108_125122 = G__125127;
chunk__125109_125123 = G__125128;
count__125110_125124 = G__125129;
i__125111_125125 = G__125130;
continue;
} else {
var temp__4425__auto___125131 = cljs.core.seq.call(null,seq__125108_125122);
if(temp__4425__auto___125131){
var seq__125108_125132__$1 = temp__4425__auto___125131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125108_125132__$1)){
var c__20340__auto___125133 = cljs.core.chunk_first.call(null,seq__125108_125132__$1);
var G__125134 = cljs.core.chunk_rest.call(null,seq__125108_125132__$1);
var G__125135 = c__20340__auto___125133;
var G__125136 = cljs.core.count.call(null,c__20340__auto___125133);
var G__125137 = (0);
seq__125108_125122 = G__125134;
chunk__125109_125123 = G__125135;
count__125110_125124 = G__125136;
i__125111_125125 = G__125137;
continue;
} else {
var wall_125138 = cljs.core.first.call(null,seq__125108_125132__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_125138),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_125138),(20),(20));

var G__125139 = cljs.core.next.call(null,seq__125108_125132__$1);
var G__125140 = null;
var G__125141 = (0);
var G__125142 = (0);
seq__125108_125122 = G__125139;
chunk__125109_125123 = G__125140;
count__125110_125124 = G__125141;
i__125111_125125 = G__125142;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__125112_125143 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__125112_125144__$1 = ((((!((map__125112_125143 == null)))?((((map__125112_125143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__125112_125143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__125112_125143):map__125112_125143);
var x_125145 = cljs.core.get.call(null,map__125112_125144__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_125146 = cljs.core.get.call(null,map__125112_125144__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_125147 = cljs.core.get.call(null,map__125112_125144__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_125145,y_125146,size_125147,size_125147);

var seq__125114 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state));
var chunk__125115 = null;
var count__125116 = (0);
var i__125117 = (0);
while(true){
if((i__125117 < count__125116)){
var bullet = cljs.core._nth.call(null,chunk__125115,i__125117);
var map__125118_125148 = bullet;
var map__125118_125149__$1 = ((((!((map__125118_125148 == null)))?((((map__125118_125148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__125118_125148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__125118_125148):map__125118_125148);
var bx_125150 = cljs.core.get.call(null,map__125118_125149__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_125151 = cljs.core.get.call(null,map__125118_125149__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_125152 = cljs.core.get.call(null,map__125118_125149__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_125150,by_125151,size_125152,size_125152);

var G__125153 = seq__125114;
var G__125154 = chunk__125115;
var G__125155 = count__125116;
var G__125156 = (i__125117 + (1));
seq__125114 = G__125153;
chunk__125115 = G__125154;
count__125116 = G__125155;
i__125117 = G__125156;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__125114);
if(temp__4425__auto__){
var seq__125114__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__125114__$1)){
var c__20340__auto__ = cljs.core.chunk_first.call(null,seq__125114__$1);
var G__125157 = cljs.core.chunk_rest.call(null,seq__125114__$1);
var G__125158 = c__20340__auto__;
var G__125159 = cljs.core.count.call(null,c__20340__auto__);
var G__125160 = (0);
seq__125114 = G__125157;
chunk__125115 = G__125158;
count__125116 = G__125159;
i__125117 = G__125160;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__125114__$1);
var map__125120_125161 = bullet;
var map__125120_125162__$1 = ((((!((map__125120_125161 == null)))?((((map__125120_125161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__125120_125161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__125120_125161):map__125120_125161);
var bx_125163 = cljs.core.get.call(null,map__125120_125162__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_125164 = cljs.core.get.call(null,map__125120_125162__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_125165 = cljs.core.get.call(null,map__125120_125162__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_125163,by_125164,size_125165,size_125165);

var G__125166 = cljs.core.next.call(null,seq__125114__$1);
var G__125167 = null;
var G__125168 = (0);
var G__125169 = (0);
seq__125114 = G__125166;
chunk__125115 = G__125167;
count__125116 = G__125168;
i__125117 = G__125169;
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
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__125170_SHARP_){
return cljs.core.conj.call(null,p1__125170_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(event){
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,(function (p1__125171_SHARP_){
return cljs.core.disj.call(null,p1__125171_SHARP_,quil.core.key_as_keyword.call(null).call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
}));
});
p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked = (function p3r50na$apps$bookof5rinds$client$game$component$on_mouse_clicked(state,event){
var map__125177 = event;
var map__125177__$1 = ((((!((map__125177 == null)))?((((map__125177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__125177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__125177):map__125177);
var mx = cljs.core.get.call(null,map__125177__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__125177__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__125178 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__125178__$1 = ((((!((map__125178 == null)))?((((map__125178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__125178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__125178):map__125178);
var px = cljs.core.get.call(null,map__125178__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__125178__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__125178__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
var bullet = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),(2),new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"fired-by","fired-by",988297261),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)], null);
return p3r50na.apps.bookof5rinds.client.game.component.controller.call(null,((function (map__125177,map__125177__$1,mx,my,map__125178,map__125178__$1,px,py,ps,start,bullet){
return (function (p1__125172_SHARP_){
return cljs.core.conj.call(null,p1__125172_SHARP_,new cljs.core.Keyword(null,"bullet-fired","bullet-fired",221306794));
});})(map__125177,map__125177__$1,mx,my,map__125178,map__125178__$1,px,py,ps,start,bullet))
);
});
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked))?(function() { 
var G__125181__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__125181 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__125182__i = 0, G__125182__a = new Array(arguments.length -  0);
while (G__125182__i < G__125182__a.length) {G__125182__a[G__125182__i] = arguments[G__125182__i + 0]; ++G__125182__i;}
  args = new cljs.core.IndexedSeq(G__125182__a,0);
} 
return G__125181__delegate.call(this,args);};
G__125181.cljs$lang$maxFixedArity = 0;
G__125181.cljs$lang$applyTo = (function (arglist__125183){
var args = cljs.core.seq(arglist__125183);
return G__125181__delegate(args);
});
G__125181.cljs$core$IFn$_invoke$arity$variadic = G__125181__delegate;
return G__125181;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"size","size",1098693007),p3r50na.apps.bookof5rinds.client.game.map.map_size.call(null,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__125184__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__125184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__125185__i = 0, G__125185__a = new Array(arguments.length -  0);
while (G__125185__i < G__125185__a.length) {G__125185__a[G__125185__i] = arguments[G__125185__i + 0]; ++G__125185__i;}
  args = new cljs.core.IndexedSeq(G__125185__a,0);
} 
return G__125184__delegate.call(this,args);};
G__125184.cljs$lang$maxFixedArity = 0;
G__125184.cljs$lang$applyTo = (function (arglist__125186){
var args = cljs.core.seq(arglist__125186);
return G__125184__delegate(args);
});
G__125184.cljs$core$IFn$_invoke$arity$variadic = G__125184__delegate;
return G__125184;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__125187__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__125187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__125188__i = 0, G__125188__a = new Array(arguments.length -  0);
while (G__125188__i < G__125188__a.length) {G__125188__a[G__125188__i] = arguments[G__125188__i + 0]; ++G__125188__i;}
  args = new cljs.core.IndexedSeq(G__125188__a,0);
} 
return G__125187__delegate.call(this,args);};
G__125187.cljs$lang$maxFixedArity = 0;
G__125187.cljs$lang$applyTo = (function (arglist__125189){
var args = cljs.core.seq(arglist__125189);
return G__125187__delegate(args);
});
G__125187.cljs$core$IFn$_invoke$arity$variadic = G__125187__delegate;
return G__125187;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__125190__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__125190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__125191__i = 0, G__125191__a = new Array(arguments.length -  0);
while (G__125191__i < G__125191__a.length) {G__125191__a[G__125191__i] = arguments[G__125191__i + 0]; ++G__125191__i;}
  args = new cljs.core.IndexedSeq(G__125191__a,0);
} 
return G__125190__delegate.call(this,args);};
G__125190.cljs$lang$maxFixedArity = 0;
G__125190.cljs$lang$applyTo = (function (arglist__125192){
var args = cljs.core.seq(arglist__125192);
return G__125190__delegate(args);
});
G__125190.cljs$core$IFn$_invoke$arity$variadic = G__125190__delegate;
return G__125190;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__125193__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__125193 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__125194__i = 0, G__125194__a = new Array(arguments.length -  0);
while (G__125194__i < G__125194__a.length) {G__125194__a[G__125194__i] = arguments[G__125194__i + 0]; ++G__125194__i;}
  args = new cljs.core.IndexedSeq(G__125194__a,0);
} 
return G__125193__delegate.call(this,args);};
G__125193.cljs$lang$maxFixedArity = 0;
G__125193.cljs$lang$applyTo = (function (arglist__125195){
var args = cljs.core.seq(arglist__125195);
return G__125193__delegate(args);
});
G__125193.cljs$core$IFn$_invoke$arity$variadic = G__125193__delegate;
return G__125193;
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
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t125199 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t125199 = (function (game_component,meta125200){
this.game_component = game_component;
this.meta125200 = meta125200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t125199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_125201,meta125200__$1){
var self__ = this;
var _125201__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t125199(self__.game_component,meta125200__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t125199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_125201){
var self__ = this;
var _125201__$1 = this;
return self__.meta125200;
});

p3r50na.apps.bookof5rinds.client.game.component.t125199.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t125199.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t125199.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t125199.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t125199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta125200","meta125200",1445218602,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t125199.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t125199.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t125199";

p3r50na.apps.bookof5rinds.client.game.component.t125199.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t125199");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t125199 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t125199(game_component__$1,meta125200){
return (new p3r50na.apps.bookof5rinds.client.game.component.t125199(game_component__$1,meta125200));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t125199(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map