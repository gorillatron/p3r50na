// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.component');
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20153__auto__,k86064,else__20154__auto__){
var self__ = this;
var this__20153__auto____$1 = this;
var G__86066 = (((k86064 instanceof cljs.core.Keyword))?k86064.fqn:null);
switch (G__86066) {
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
return cljs.core.get.call(null,self__.__extmap,k86064,else__20154__auto__);

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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__86063){
var self__ = this;
var G__86063__$1 = this;
return (new cljs.core.RecordIter((0),G__86063__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20158__auto__,k__20159__auto__,G__86063){
var self__ = this;
var this__20158__auto____$1 = this;
var pred__86067 = cljs.core.keyword_identical_QMARK_;
var expr__86068 = k__20159__auto__;
if(cljs.core.truth_(pred__86067.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__86068))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__86063,self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86067.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__86068))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,G__86063,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86067.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__86068))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,G__86063,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86067.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__86068))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,G__86063,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__86067.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__86068))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,G__86063,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20159__auto__,G__86063),null));
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

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20150__auto__,G__86063){
var self__ = this;
var this__20150__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.name,self__.x,self__.y,self__.size,self__.speed,G__86063,self__.__extmap,self__.__hash));
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

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__86065){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__86065),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__86065),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__86065),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__86065),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__86065),null,cljs.core.dissoc.call(null,G__86065,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.blocksize = new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_matrix = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.walls = p3r50na.apps.bookof5rinds.client.game.map.block_of_type.call(null,new cljs.core.Keyword(null,"w","w",354169001),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
p3r50na.apps.bookof5rinds.client.game.component.rnd_string = (function p3r50na$apps$bookof5rinds$client$game$component$rnd_string(){
var args86071 = [];
var len__20595__auto___86074 = arguments.length;
var i__20596__auto___86075 = (0);
while(true){
if((i__20596__auto___86075 < len__20595__auto___86074)){
args86071.push((arguments[i__20596__auto___86075]));

var G__86076 = (i__20596__auto___86075 + (1));
i__20596__auto___86075 = G__86076;
continue;
} else {
}
break;
}

var G__86073 = args86071.length;
switch (G__86073) {
case 0:
return p3r50na.apps.bookof5rinds.client.game.component.rnd_string.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return p3r50na.apps.bookof5rinds.client.game.component.rnd_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args86071.length)].join('')));

}
});

p3r50na.apps.bookof5rinds.client.game.component.rnd_string.cljs$core$IFn$_invoke$arity$0 = (function (){
return p3r50na.apps.bookof5rinds.client.game.component.rnd_string.call(null,(8));
});

p3r50na.apps.bookof5rinds.client.game.component.rnd_string.cljs$core$IFn$_invoke$arity$1 = (function (n){
var chars = cljs.core.map.call(null,cljs.core.char$,cljs.core.range.call(null,(33),(127)));
var rstr = cljs.core.take.call(null,n,cljs.core.repeatedly.call(null,((function (chars){
return (function (){
return cljs.core.rand_nth.call(null,chars);
});})(chars))
));
return cljs.core.reduce.call(null,cljs.core.str,rstr);
});

p3r50na.apps.bookof5rinds.client.game.component.rnd_string.cljs$lang$maxFixedArity = 1;
p3r50na.apps.bookof5rinds.client.game.component.namo = p3r50na.apps.bookof5rinds.client.game.component.rnd_string.call(null);
p3r50na.apps.bookof5rinds.client.game.component.remote_players = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
p3r50na.apps.bookof5rinds.client.game.component.remote_player_bullets = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
p3r50na.apps.bookof5rinds.client.game.component.remote_player_update = (function p3r50na$apps$bookof5rinds$client$game$component$remote_player_update(player){
return cljs.core.swap_BANG_.call(null,p3r50na.apps.bookof5rinds.client.game.component.remote_players,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(player),player);
});
p3r50na.apps.bookof5rinds.client.game.component.remote_player_fire_bullet = (function p3r50na$apps$bookof5rinds$client$game$component$remote_player_fire_bullet(bullet){
return cljs.core.swap_BANG_.call(null,p3r50na.apps.bookof5rinds.client.game.component.remote_player_bullets,cljs.core.conj,bullet);
});
p3r50na.apps.bookof5rinds.client.game.component.socket.onmessage = (function (e){
var event = cljs.core.js__GT_clj.call(null,JSON.parse(e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var G__86078 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(event);
switch (G__86078) {
case "player-update-state":
return p3r50na.apps.bookof5rinds.client.game.component.remote_player_update.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(event));

break;
case "player-fired-bullet":
return p3r50na.apps.bookof5rinds.client.game.component.remote_player_fire_bullet.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(event));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(event))].join('')));

}
});
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.frame_rate.call(null,(60));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player(p3r50na.apps.bookof5rinds.client.game.component.namo,(5),(5),(10),(2),null,null,null)),new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null);
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

quil.core.stroke.call(null,(0),(0),(0));

var seq__86112_86144 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__86113_86145 = null;
var count__86114_86146 = (0);
var i__86115_86147 = (0);
while(true){
if((i__86115_86147 < count__86114_86146)){
var wall_86148 = cljs.core._nth.call(null,chunk__86113_86145,i__86115_86147);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_86148),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_86148),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__86149 = seq__86112_86144;
var G__86150 = chunk__86113_86145;
var G__86151 = count__86114_86146;
var G__86152 = (i__86115_86147 + (1));
seq__86112_86144 = G__86149;
chunk__86113_86145 = G__86150;
count__86114_86146 = G__86151;
i__86115_86147 = G__86152;
continue;
} else {
var temp__4425__auto___86153 = cljs.core.seq.call(null,seq__86112_86144);
if(temp__4425__auto___86153){
var seq__86112_86154__$1 = temp__4425__auto___86153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86112_86154__$1)){
var c__20340__auto___86155 = cljs.core.chunk_first.call(null,seq__86112_86154__$1);
var G__86156 = cljs.core.chunk_rest.call(null,seq__86112_86154__$1);
var G__86157 = c__20340__auto___86155;
var G__86158 = cljs.core.count.call(null,c__20340__auto___86155);
var G__86159 = (0);
seq__86112_86144 = G__86156;
chunk__86113_86145 = G__86157;
count__86114_86146 = G__86158;
i__86115_86147 = G__86159;
continue;
} else {
var wall_86160 = cljs.core.first.call(null,seq__86112_86154__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_86160),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_86160),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__86161 = cljs.core.next.call(null,seq__86112_86154__$1);
var G__86162 = null;
var G__86163 = (0);
var G__86164 = (0);
seq__86112_86144 = G__86161;
chunk__86113_86145 = G__86162;
count__86114_86146 = G__86163;
i__86115_86147 = G__86164;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(255),(90),(20));

quil.core.stroke.call(null,(255),(90),(20));

var seq__86116_86165 = cljs.core.seq.call(null,cljs.core.deref.call(null,p3r50na.apps.bookof5rinds.client.game.component.remote_players));
var chunk__86117_86166 = null;
var count__86118_86167 = (0);
var i__86119_86168 = (0);
while(true){
if((i__86119_86168 < count__86118_86167)){
var vec__86120_86169 = cljs.core._nth.call(null,chunk__86117_86166,i__86119_86168);
var name_86170 = cljs.core.nth.call(null,vec__86120_86169,(0),null);
var remote_player_86171 = cljs.core.nth.call(null,vec__86120_86169,(1),null);
var map__86121_86172 = remote_player_86171;
var map__86121_86173__$1 = ((((!((map__86121_86172 == null)))?((((map__86121_86172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86121_86172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86121_86172):map__86121_86172);
var x_86174 = cljs.core.get.call(null,map__86121_86173__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_86175 = cljs.core.get.call(null,map__86121_86173__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_86176 = cljs.core.get.call(null,map__86121_86173__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_86174,y_86175,size_86176,size_86176);

var G__86177 = seq__86116_86165;
var G__86178 = chunk__86117_86166;
var G__86179 = count__86118_86167;
var G__86180 = (i__86119_86168 + (1));
seq__86116_86165 = G__86177;
chunk__86117_86166 = G__86178;
count__86118_86167 = G__86179;
i__86119_86168 = G__86180;
continue;
} else {
var temp__4425__auto___86181 = cljs.core.seq.call(null,seq__86116_86165);
if(temp__4425__auto___86181){
var seq__86116_86182__$1 = temp__4425__auto___86181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86116_86182__$1)){
var c__20340__auto___86183 = cljs.core.chunk_first.call(null,seq__86116_86182__$1);
var G__86184 = cljs.core.chunk_rest.call(null,seq__86116_86182__$1);
var G__86185 = c__20340__auto___86183;
var G__86186 = cljs.core.count.call(null,c__20340__auto___86183);
var G__86187 = (0);
seq__86116_86165 = G__86184;
chunk__86117_86166 = G__86185;
count__86118_86167 = G__86186;
i__86119_86168 = G__86187;
continue;
} else {
var vec__86123_86188 = cljs.core.first.call(null,seq__86116_86182__$1);
var name_86189 = cljs.core.nth.call(null,vec__86123_86188,(0),null);
var remote_player_86190 = cljs.core.nth.call(null,vec__86123_86188,(1),null);
var map__86124_86191 = remote_player_86190;
var map__86124_86192__$1 = ((((!((map__86124_86191 == null)))?((((map__86124_86191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86124_86191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86124_86191):map__86124_86191);
var x_86193 = cljs.core.get.call(null,map__86124_86192__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_86194 = cljs.core.get.call(null,map__86124_86192__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_86195 = cljs.core.get.call(null,map__86124_86192__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_86193,y_86194,size_86195,size_86195);

var G__86196 = cljs.core.next.call(null,seq__86116_86182__$1);
var G__86197 = null;
var G__86198 = (0);
var G__86199 = (0);
seq__86116_86165 = G__86196;
chunk__86117_86166 = G__86197;
count__86118_86167 = G__86198;
i__86119_86168 = G__86199;
continue;
}
} else {
}
}
break;
}

var seq__86126_86200 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516).cljs$core$IFn$_invoke$arity$1(state));
var chunk__86127_86201 = null;
var count__86128_86202 = (0);
var i__86129_86203 = (0);
while(true){
if((i__86129_86203 < count__86128_86202)){
var bullet_86204 = cljs.core._nth.call(null,chunk__86127_86201,i__86129_86203);
var map__86130_86205 = bullet_86204;
var map__86130_86206__$1 = ((((!((map__86130_86205 == null)))?((((map__86130_86205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86130_86205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86130_86205):map__86130_86205);
var bx_86207 = cljs.core.get.call(null,map__86130_86206__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_86208 = cljs.core.get.call(null,map__86130_86206__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_86209 = cljs.core.get.call(null,map__86130_86206__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_86207,by_86208,size_86209,size_86209);

var G__86210 = seq__86126_86200;
var G__86211 = chunk__86127_86201;
var G__86212 = count__86128_86202;
var G__86213 = (i__86129_86203 + (1));
seq__86126_86200 = G__86210;
chunk__86127_86201 = G__86211;
count__86128_86202 = G__86212;
i__86129_86203 = G__86213;
continue;
} else {
var temp__4425__auto___86214 = cljs.core.seq.call(null,seq__86126_86200);
if(temp__4425__auto___86214){
var seq__86126_86215__$1 = temp__4425__auto___86214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86126_86215__$1)){
var c__20340__auto___86216 = cljs.core.chunk_first.call(null,seq__86126_86215__$1);
var G__86217 = cljs.core.chunk_rest.call(null,seq__86126_86215__$1);
var G__86218 = c__20340__auto___86216;
var G__86219 = cljs.core.count.call(null,c__20340__auto___86216);
var G__86220 = (0);
seq__86126_86200 = G__86217;
chunk__86127_86201 = G__86218;
count__86128_86202 = G__86219;
i__86129_86203 = G__86220;
continue;
} else {
var bullet_86221 = cljs.core.first.call(null,seq__86126_86215__$1);
var map__86132_86222 = bullet_86221;
var map__86132_86223__$1 = ((((!((map__86132_86222 == null)))?((((map__86132_86222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86132_86222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86132_86222):map__86132_86222);
var bx_86224 = cljs.core.get.call(null,map__86132_86223__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_86225 = cljs.core.get.call(null,map__86132_86223__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_86226 = cljs.core.get.call(null,map__86132_86223__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_86224,by_86225,size_86226,size_86226);

var G__86227 = cljs.core.next.call(null,seq__86126_86215__$1);
var G__86228 = null;
var G__86229 = (0);
var G__86230 = (0);
seq__86126_86200 = G__86227;
chunk__86127_86201 = G__86228;
count__86128_86202 = G__86229;
i__86129_86203 = G__86230;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__86134_86231 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__86134_86232__$1 = ((((!((map__86134_86231 == null)))?((((map__86134_86231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86134_86231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86134_86231):map__86134_86231);
var x_86233 = cljs.core.get.call(null,map__86134_86232__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_86234 = cljs.core.get.call(null,map__86134_86232__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_86235 = cljs.core.get.call(null,map__86134_86232__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_86233,y_86234,size_86235,size_86235);

var seq__86136 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state));
var chunk__86137 = null;
var count__86138 = (0);
var i__86139 = (0);
while(true){
if((i__86139 < count__86138)){
var bullet = cljs.core._nth.call(null,chunk__86137,i__86139);
var map__86140_86236 = bullet;
var map__86140_86237__$1 = ((((!((map__86140_86236 == null)))?((((map__86140_86236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86140_86236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86140_86236):map__86140_86236);
var bx_86238 = cljs.core.get.call(null,map__86140_86237__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_86239 = cljs.core.get.call(null,map__86140_86237__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_86240 = cljs.core.get.call(null,map__86140_86237__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_86238,by_86239,size_86240,size_86240);

var G__86241 = seq__86136;
var G__86242 = chunk__86137;
var G__86243 = count__86138;
var G__86244 = (i__86139 + (1));
seq__86136 = G__86241;
chunk__86137 = G__86242;
count__86138 = G__86243;
i__86139 = G__86244;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__86136);
if(temp__4425__auto__){
var seq__86136__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86136__$1)){
var c__20340__auto__ = cljs.core.chunk_first.call(null,seq__86136__$1);
var G__86245 = cljs.core.chunk_rest.call(null,seq__86136__$1);
var G__86246 = c__20340__auto__;
var G__86247 = cljs.core.count.call(null,c__20340__auto__);
var G__86248 = (0);
seq__86136 = G__86245;
chunk__86137 = G__86246;
count__86138 = G__86247;
i__86139 = G__86248;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__86136__$1);
var map__86142_86249 = bullet;
var map__86142_86250__$1 = ((((!((map__86142_86249 == null)))?((((map__86142_86249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86142_86249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86142_86249):map__86142_86249);
var bx_86251 = cljs.core.get.call(null,map__86142_86250__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_86252 = cljs.core.get.call(null,map__86142_86250__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_86253 = cljs.core.get.call(null,map__86142_86250__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_86251,by_86252,size_86253,size_86253);

var G__86254 = cljs.core.next.call(null,seq__86136__$1);
var G__86255 = null;
var G__86256 = (0);
var G__86257 = (0);
seq__86136 = G__86254;
chunk__86137 = G__86255;
count__86138 = G__86256;
i__86139 = G__86257;
continue;
}
} else {
return null;
}
}
break;
}
});
p3r50na.apps.bookof5rinds.client.game.component.send_player_state_report = (function p3r50na$apps$bookof5rinds$client$game$component$send_player_state_report(player){
return p3r50na.apps.bookof5rinds.client.game.component.socket.send(JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"player-state-report",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"player","player",-97687400),player], null)], null))));
});
p3r50na.apps.bookof5rinds.client.game.component.send_player_fired_bullet = (function p3r50na$apps$bookof5rinds$client$game$component$send_player_fired_bullet(bullet){
return p3r50na.apps.bookof5rinds.client.game.component.socket.send(JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"player-fired-bullet",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bullet","bullet",726988937),bullet], null)], null))));
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__86261 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__86261__$1 = ((((!((map__86261 == null)))?((((map__86261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86261):map__86261);
var x = cljs.core.get.call(null,map__86261__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__86261__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__86261__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__86261,map__86261__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__86263 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__86263) {
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
if(cljs.core.truth_((function (){var or__19556__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.component.walls,p3r50na.apps.bookof5rinds.client.game.component.blocksize);
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
});})(map__86261,map__86261__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
if(!(cljs.core._EQ_.call(null,newstate,state))){
p3r50na.apps.bookof5rinds.client.game.component.send_player_state_report.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate));
} else {
}

return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullet_location(bullet){
var map__86269 = bullet;
var map__86269__$1 = ((((!((map__86269 == null)))?((((map__86269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86269):map__86269);
var speed = cljs.core.get.call(null,map__86269__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__86270 = cljs.core.get.call(null,map__86269__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__86270,(0),null);
var by = cljs.core.nth.call(null,vec__86270,(1),null);
var lx = cljs.core.get.call(null,map__86269__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__86269__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__86271 = cljs.core.get.call(null,map__86269__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__86271,(0),null);
var gy = cljs.core.nth.call(null,vec__86271,(1),null);
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
p3r50na.apps.bookof5rinds.client.game.component.update_bullets = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullets(old_bullets){
return cljs.core.filter.call(null,(function (bullet){
return cljs.core.not.call(null,(function (){var or__19556__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.component.walls,p3r50na.apps.bookof5rinds.client.game.component.blocksize);
if(cljs.core.truth_(or__19556__auto__)){
return or__19556__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})());
}),cljs.core.map.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location,old_bullets));
});
p3r50na.apps.bookof5rinds.client.game.component.update_player_bullet_locations = (function p3r50na$apps$bookof5rinds$client$game$component$update_player_bullet_locations(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024),p3r50na.apps.bookof5rinds.client.game.component.update_bullets.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state)));
});
p3r50na.apps.bookof5rinds.client.game.component.update_remote_player_bullet_locations = (function p3r50na$apps$bookof5rinds$client$game$component$update_remote_player_bullet_locations(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516),p3r50na.apps.bookof5rinds.client.game.component.update_bullets.call(null,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516).cljs$core$IFn$_invoke$arity$1(state)));
});
p3r50na.apps.bookof5rinds.client.game.component.cupdate = (function p3r50na$apps$bookof5rinds$client$game$component$cupdate(state){
var oldstate = state;
var newstate = p3r50na.apps.bookof5rinds.client.game.component.apply_controll.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_player_bullet_locations.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_remote_player_bullet_locations.call(null,state)));
cljs.core.reset_BANG_.call(null,p3r50na.apps.bookof5rinds.client.game.component.remote_player_bullets,cljs.core.PersistentVector.EMPTY);

return newstate;
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_down = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_down(state,event){
var keycode = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(event);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controlls","controlls",-310267444)], null),cljs.core.conj,keycode.call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
});
p3r50na.apps.bookof5rinds.client.game.component.on_key_up = (function p3r50na$apps$bookof5rinds$client$game$component$on_key_up(state){
var keycode = quil.core.key_as_keyword.call(null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controlls","controlls",-310267444)], null),cljs.core.disj,keycode.call(null,p3r50na.apps.bookof5rinds.client.game.component.controll_mapping));
});
p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked = (function p3r50na$apps$bookof5rinds$client$game$component$on_mouse_clicked(state,event){
var map__86277 = event;
var map__86277__$1 = ((((!((map__86277 == null)))?((((map__86277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86277):map__86277);
var mx = cljs.core.get.call(null,map__86277__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__86277__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__86278 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__86278__$1 = ((((!((map__86278 == null)))?((((map__86278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__86278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86278):map__86278);
var px = cljs.core.get.call(null,map__86278__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__86278__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__86278__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
var bullet = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),(2),new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"fired-by","fired-by",988297261),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)], null);
p3r50na.apps.bookof5rinds.client.game.component.send_player_fired_bullet.call(null,bullet);

return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullets","bullets",1734809024)], null),cljs.core.conj,bullet);
});
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked))?(function() { 
var G__86281__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__86281 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86282__i = 0, G__86282__a = new Array(arguments.length -  0);
while (G__86282__i < G__86282__a.length) {G__86282__a[G__86282__i] = arguments[G__86282__i + 0]; ++G__86282__i;}
  args = new cljs.core.IndexedSeq(G__86282__a,0);
} 
return G__86281__delegate.call(this,args);};
G__86281.cljs$lang$maxFixedArity = 0;
G__86281.cljs$lang$applyTo = (function (arglist__86283){
var args = cljs.core.seq(arglist__86283);
return G__86281__delegate(args);
});
G__86281.cljs$core$IFn$_invoke$arity$variadic = G__86281__delegate;
return G__86281;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__86284__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__86284 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86285__i = 0, G__86285__a = new Array(arguments.length -  0);
while (G__86285__i < G__86285__a.length) {G__86285__a[G__86285__i] = arguments[G__86285__i + 0]; ++G__86285__i;}
  args = new cljs.core.IndexedSeq(G__86285__a,0);
} 
return G__86284__delegate.call(this,args);};
G__86284.cljs$lang$maxFixedArity = 0;
G__86284.cljs$lang$applyTo = (function (arglist__86286){
var args = cljs.core.seq(arglist__86286);
return G__86284__delegate(args);
});
G__86284.cljs$core$IFn$_invoke$arity$variadic = G__86284__delegate;
return G__86284;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size))?(function() { 
var G__86287__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size,args);
};
var G__86287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86288__i = 0, G__86288__a = new Array(arguments.length -  0);
while (G__86288__i < G__86288__a.length) {G__86288__a[G__86288__i] = arguments[G__86288__i + 0]; ++G__86288__i;}
  args = new cljs.core.IndexedSeq(G__86288__a,0);
} 
return G__86287__delegate.call(this,args);};
G__86287.cljs$lang$maxFixedArity = 0;
G__86287.cljs$lang$applyTo = (function (arglist__86289){
var args = cljs.core.seq(arglist__86289);
return G__86287__delegate(args);
});
G__86287.cljs$core$IFn$_invoke$arity$variadic = G__86287__delegate;
return G__86287;
})()
:p3r50na.apps.bookof5rinds.client.game.component.map_size),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__86290__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__86290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86291__i = 0, G__86291__a = new Array(arguments.length -  0);
while (G__86291__i < G__86291__a.length) {G__86291__a[G__86291__i] = arguments[G__86291__i + 0]; ++G__86291__i;}
  args = new cljs.core.IndexedSeq(G__86291__a,0);
} 
return G__86290__delegate.call(this,args);};
G__86290.cljs$lang$maxFixedArity = 0;
G__86290.cljs$lang$applyTo = (function (arglist__86292){
var args = cljs.core.seq(arglist__86292);
return G__86290__delegate(args);
});
G__86290.cljs$core$IFn$_invoke$arity$variadic = G__86290__delegate;
return G__86290;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__86293__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__86293 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86294__i = 0, G__86294__a = new Array(arguments.length -  0);
while (G__86294__i < G__86294__a.length) {G__86294__a[G__86294__i] = arguments[G__86294__i + 0]; ++G__86294__i;}
  args = new cljs.core.IndexedSeq(G__86294__a,0);
} 
return G__86293__delegate.call(this,args);};
G__86293.cljs$lang$maxFixedArity = 0;
G__86293.cljs$lang$applyTo = (function (arglist__86295){
var args = cljs.core.seq(arglist__86295);
return G__86293__delegate(args);
});
G__86293.cljs$core$IFn$_invoke$arity$variadic = G__86293__delegate;
return G__86293;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__86296__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__86296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86297__i = 0, G__86297__a = new Array(arguments.length -  0);
while (G__86297__i < G__86297__a.length) {G__86297__a[G__86297__i] = arguments[G__86297__i + 0]; ++G__86297__i;}
  args = new cljs.core.IndexedSeq(G__86297__a,0);
} 
return G__86296__delegate.call(this,args);};
G__86296.cljs$lang$maxFixedArity = 0;
G__86296.cljs$lang$applyTo = (function (arglist__86298){
var args = cljs.core.seq(arglist__86298);
return G__86296__delegate(args);
});
G__86296.cljs$core$IFn$_invoke$arity$variadic = G__86296__delegate;
return G__86296;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__86299__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__86299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__86300__i = 0, G__86300__a = new Array(arguments.length -  0);
while (G__86300__i < G__86300__a.length) {G__86300__a[G__86300__i] = arguments[G__86300__i + 0]; ++G__86300__i;}
  args = new cljs.core.IndexedSeq(G__86300__a,0);
} 
return G__86299__delegate.call(this,args);};
G__86299.cljs$lang$maxFixedArity = 0;
G__86299.cljs$lang$applyTo = (function (arglist__86301){
var args = cljs.core.seq(arglist__86301);
return G__86299__delegate(args);
});
G__86299.cljs$core$IFn$_invoke$arity$variadic = G__86299__delegate;
return G__86299;
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
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t86305 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t86305 = (function (game_component,meta86306){
this.game_component = game_component;
this.meta86306 = meta86306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t86305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_86307,meta86306__$1){
var self__ = this;
var _86307__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t86305(self__.game_component,meta86306__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t86305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_86307){
var self__ = this;
var _86307__$1 = this;
return self__.meta86306;
});

p3r50na.apps.bookof5rinds.client.game.component.t86305.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t86305.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t86305.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t86305.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t86305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"meta86306","meta86306",1560147389,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t86305.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t86305.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t86305";

p3r50na.apps.bookof5rinds.client.game.component.t86305.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t86305");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t86305 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t86305(game_component__$1,meta86306){
return (new p3r50na.apps.bookof5rinds.client.game.component.t86305(game_component__$1,meta86306));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t86305(p3r50na$apps$bookof5rinds$client$game$component$game_component,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map