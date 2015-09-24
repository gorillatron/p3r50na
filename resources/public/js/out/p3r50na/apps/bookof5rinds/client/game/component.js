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
p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20151__auto__,k__20152__auto__){
var self__ = this;
var this__20151__auto____$1 = this;
return cljs.core._lookup.call(null,this__20151__auto____$1,k__20152__auto__,null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20153__auto__,k28806,else__20154__auto__){
var self__ = this;
var this__20153__auto____$1 = this;
var G__28808 = (((k28806 instanceof cljs.core.Keyword))?k28806.fqn:null);
switch (G__28808) {
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
return cljs.core.get.call(null,self__.__extmap,k28806,else__20154__auto__);

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
return cljs.core.pr_sequential_writer.call(null,writer__20166__auto__,pr_pair__20168__auto__,"#p3r50na.apps.bookof5rinds.client.game.component.Player{",", ","}",opts__20167__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$ = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28805){
var self__ = this;
var G__28805__$1 = this;
return (new cljs.core.RecordIter((0),G__28805__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20149__auto__){
var self__ = this;
var this__20149__auto____$1 = this;
return self__.__meta;
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20145__auto__){
var self__ = this;
var this__20145__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,self__.__hash));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20155__auto__){
var self__ = this;
var this__20155__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"speed","speed",1257663751),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__20161__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20160__auto____$1),self__.__meta),k__20161__auto__);
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20161__auto__)),null));
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20158__auto__,k__20159__auto__,G__28805){
var self__ = this;
var this__20158__auto____$1 = this;
var pred__28809 = cljs.core.keyword_identical_QMARK_;
var expr__28810 = k__20159__auto__;
if(cljs.core.truth_(pred__28809.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__28810))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(G__28805,self__.y,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28809.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__28810))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,G__28805,self__.size,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28809.call(null,new cljs.core.Keyword(null,"size","size",1098693007),expr__28810))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,G__28805,self__.speed,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28809.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),expr__28810))){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,G__28805,self__.__meta,self__.__extmap,null));
} else {
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20159__auto__,G__28805),null));
}
}
}
}
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20163__auto__){
var self__ = this;
var this__20163__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1098693007),self__.size],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"speed","speed",1257663751),self__.speed],null))], null),self__.__extmap));
});

p3r50na.apps.bookof5rinds.client.game.component.Player.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20150__auto__,G__28805){
var self__ = this;
var this__20150__auto____$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(self__.x,self__.y,self__.size,self__.speed,G__28805,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"speed","speed",-1396772018,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrSeq = (function (this__20185__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.Player.cljs$lang$ctorPrWriter = (function (this__20185__auto__,writer__20186__auto__){
return cljs.core._write.call(null,writer__20186__auto__,"p3r50na.apps.bookof5rinds.client.game.component/Player");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$__GT_Player(x,y,size,speed){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(x,y,size,speed,null,null,null));
});

p3r50na.apps.bookof5rinds.client.game.component.map__GT_Player = (function p3r50na$apps$bookof5rinds$client$game$component$map__GT_Player(G__28807){
return (new p3r50na.apps.bookof5rinds.client.game.component.Player(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__28807),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__28807),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(G__28807),new cljs.core.Keyword(null,"speed","speed",1257663751).cljs$core$IFn$_invoke$arity$1(G__28807),null,cljs.core.dissoc.call(null,G__28807,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"speed","speed",1257663751)),null));
});

p3r50na.apps.bookof5rinds.client.game.component.controll_mapping = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"left","left",-399115937)], null);
p3r50na.apps.bookof5rinds.client.game.component.blocksize = new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_matrix = new cljs.core.Keyword(null,"matrix","matrix",803137200).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.map_size = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.walls = p3r50na.apps.bookof5rinds.client.game.map.block_of_type.call(null,new cljs.core.Keyword(null,"w","w",354169001),p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
p3r50na.apps.bookof5rinds.client.game.component.setup = (function p3r50na$apps$bookof5rinds$client$game$component$setup(){
quil.core.frame_rate.call(null,(120));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"player","player",-97687400),(new p3r50na.apps.bookof5rinds.client.game.component.Player((5),(5),(10),(1),null,null,null)),new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null);
});
p3r50na.apps.bookof5rinds.client.game.component.draw = (function p3r50na$apps$bookof5rinds$client$game$component$draw(state){
quil.core.background.call(null,(255));

quil.core.fill.call(null,(200),(200),(200));

quil.core.stroke.call(null,(0),(0),(0));

var seq__28835_28857 = cljs.core.seq.call(null,p3r50na.apps.bookof5rinds.client.game.component.walls);
var chunk__28836_28858 = null;
var count__28837_28859 = (0);
var i__28838_28860 = (0);
while(true){
if((i__28838_28860 < count__28837_28859)){
var wall_28861 = cljs.core._nth.call(null,chunk__28836_28858,i__28838_28860);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_28861),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_28861),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__28862 = seq__28835_28857;
var G__28863 = chunk__28836_28858;
var G__28864 = count__28837_28859;
var G__28865 = (i__28838_28860 + (1));
seq__28835_28857 = G__28862;
chunk__28836_28858 = G__28863;
count__28837_28859 = G__28864;
i__28838_28860 = G__28865;
continue;
} else {
var temp__4425__auto___28866 = cljs.core.seq.call(null,seq__28835_28857);
if(temp__4425__auto___28866){
var seq__28835_28867__$1 = temp__4425__auto___28866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28835_28867__$1)){
var c__20340__auto___28868 = cljs.core.chunk_first.call(null,seq__28835_28867__$1);
var G__28869 = cljs.core.chunk_rest.call(null,seq__28835_28867__$1);
var G__28870 = c__20340__auto___28868;
var G__28871 = cljs.core.count.call(null,c__20340__auto___28868);
var G__28872 = (0);
seq__28835_28857 = G__28869;
chunk__28836_28858 = G__28870;
count__28837_28859 = G__28871;
i__28838_28860 = G__28872;
continue;
} else {
var wall_28873 = cljs.core.first.call(null,seq__28835_28867__$1);
quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(wall_28873),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(wall_28873),p3r50na.apps.bookof5rinds.client.game.component.blocksize,p3r50na.apps.bookof5rinds.client.game.component.blocksize);

var G__28874 = cljs.core.next.call(null,seq__28835_28867__$1);
var G__28875 = null;
var G__28876 = (0);
var G__28877 = (0);
seq__28835_28857 = G__28874;
chunk__28836_28858 = G__28875;
count__28837_28859 = G__28876;
i__28838_28860 = G__28877;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(255),(90),(20));

quil.core.stroke.call(null,(255),(90),(20));

var seq__28839_28878 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
var chunk__28840_28879 = null;
var count__28841_28880 = (0);
var i__28842_28881 = (0);
while(true){
if((i__28842_28881 < count__28841_28880)){
var remote_player_28882 = cljs.core._nth.call(null,chunk__28840_28879,i__28842_28881);
var map__28843_28883 = remote_player_28882;
var map__28843_28884__$1 = ((((!((map__28843_28883 == null)))?((((map__28843_28883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28843_28883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28843_28883):map__28843_28883);
var x_28885 = cljs.core.get.call(null,map__28843_28884__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_28886 = cljs.core.get.call(null,map__28843_28884__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_28887 = cljs.core.get.call(null,map__28843_28884__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_28885,y_28886,size_28887,size_28887);

var G__28888 = seq__28839_28878;
var G__28889 = chunk__28840_28879;
var G__28890 = count__28841_28880;
var G__28891 = (i__28842_28881 + (1));
seq__28839_28878 = G__28888;
chunk__28840_28879 = G__28889;
count__28841_28880 = G__28890;
i__28842_28881 = G__28891;
continue;
} else {
var temp__4425__auto___28892 = cljs.core.seq.call(null,seq__28839_28878);
if(temp__4425__auto___28892){
var seq__28839_28893__$1 = temp__4425__auto___28892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28839_28893__$1)){
var c__20340__auto___28894 = cljs.core.chunk_first.call(null,seq__28839_28893__$1);
var G__28895 = cljs.core.chunk_rest.call(null,seq__28839_28893__$1);
var G__28896 = c__20340__auto___28894;
var G__28897 = cljs.core.count.call(null,c__20340__auto___28894);
var G__28898 = (0);
seq__28839_28878 = G__28895;
chunk__28840_28879 = G__28896;
count__28841_28880 = G__28897;
i__28842_28881 = G__28898;
continue;
} else {
var remote_player_28899 = cljs.core.first.call(null,seq__28839_28893__$1);
var map__28845_28900 = remote_player_28899;
var map__28845_28901__$1 = ((((!((map__28845_28900 == null)))?((((map__28845_28900.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28845_28900.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28845_28900):map__28845_28900);
var x_28902 = cljs.core.get.call(null,map__28845_28901__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_28903 = cljs.core.get.call(null,map__28845_28901__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_28904 = cljs.core.get.call(null,map__28845_28901__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,x_28902,y_28903,size_28904,size_28904);

var G__28905 = cljs.core.next.call(null,seq__28839_28893__$1);
var G__28906 = null;
var G__28907 = (0);
var G__28908 = (0);
seq__28839_28878 = G__28905;
chunk__28840_28879 = G__28906;
count__28841_28880 = G__28907;
i__28842_28881 = G__28908;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(130),(130),(130));

quil.core.stroke.call(null,(150),(150),(150));

var seq__28847_28909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state));
var chunk__28848_28910 = null;
var count__28849_28911 = (0);
var i__28850_28912 = (0);
while(true){
if((i__28850_28912 < count__28849_28911)){
var bullet_28913 = cljs.core._nth.call(null,chunk__28848_28910,i__28850_28912);
var map__28851_28914 = bullet_28913;
var map__28851_28915__$1 = ((((!((map__28851_28914 == null)))?((((map__28851_28914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28851_28914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28851_28914):map__28851_28914);
var bx_28916 = cljs.core.get.call(null,map__28851_28915__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_28917 = cljs.core.get.call(null,map__28851_28915__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_28918 = cljs.core.get.call(null,map__28851_28915__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_28916,by_28917,size_28918,size_28918);

var G__28919 = seq__28847_28909;
var G__28920 = chunk__28848_28910;
var G__28921 = count__28849_28911;
var G__28922 = (i__28850_28912 + (1));
seq__28847_28909 = G__28919;
chunk__28848_28910 = G__28920;
count__28849_28911 = G__28921;
i__28850_28912 = G__28922;
continue;
} else {
var temp__4425__auto___28923 = cljs.core.seq.call(null,seq__28847_28909);
if(temp__4425__auto___28923){
var seq__28847_28924__$1 = temp__4425__auto___28923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28847_28924__$1)){
var c__20340__auto___28925 = cljs.core.chunk_first.call(null,seq__28847_28924__$1);
var G__28926 = cljs.core.chunk_rest.call(null,seq__28847_28924__$1);
var G__28927 = c__20340__auto___28925;
var G__28928 = cljs.core.count.call(null,c__20340__auto___28925);
var G__28929 = (0);
seq__28847_28909 = G__28926;
chunk__28848_28910 = G__28927;
count__28849_28911 = G__28928;
i__28850_28912 = G__28929;
continue;
} else {
var bullet_28930 = cljs.core.first.call(null,seq__28847_28924__$1);
var map__28853_28931 = bullet_28930;
var map__28853_28932__$1 = ((((!((map__28853_28931 == null)))?((((map__28853_28931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28853_28931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28853_28931):map__28853_28931);
var bx_28933 = cljs.core.get.call(null,map__28853_28932__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var by_28934 = cljs.core.get.call(null,map__28853_28932__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size_28935 = cljs.core.get.call(null,map__28853_28932__$1,new cljs.core.Keyword(null,"size","size",1098693007));
quil.core.rect.call(null,bx_28933,by_28934,size_28935,size_28935);

var G__28936 = cljs.core.next.call(null,seq__28847_28924__$1);
var G__28937 = null;
var G__28938 = (0);
var G__28939 = (0);
seq__28847_28909 = G__28936;
chunk__28848_28910 = G__28937;
count__28849_28911 = G__28938;
i__28850_28912 = G__28939;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(50),(120),(190));

quil.core.stroke.call(null,(50),(120),(190));

var map__28855 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__28855__$1 = ((((!((map__28855 == null)))?((((map__28855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28855):map__28855);
var x = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return quil.core.rect.call(null,x,y,size,size);
});
p3r50na.apps.bookof5rinds.client.game.component.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$component$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__28943 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__28943__$1 = ((((!((map__28943 == null)))?((((map__28943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28943):map__28943);
var x = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__28943,map__28943__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__28945 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__28945) {
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
});})(map__28943,map__28943__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullet_location(bullet){
var map__28951 = bullet;
var map__28951__$1 = ((((!((map__28951 == null)))?((((map__28951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28951):map__28951);
var speed = cljs.core.get.call(null,map__28951__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__28952 = cljs.core.get.call(null,map__28951__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__28952,(0),null);
var by = cljs.core.nth.call(null,vec__28952,(1),null);
var lx = cljs.core.get.call(null,map__28951__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__28951__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__28953 = cljs.core.get.call(null,map__28951__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__28953,(0),null);
var gy = cljs.core.nth.call(null,vec__28953,(1),null);
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
p3r50na.apps.bookof5rinds.client.game.component.update_bullet_locations = (function p3r50na$apps$bookof5rinds$client$game$component$update_bullet_locations(state){
var new_bullets = cljs.core.filter.call(null,(function (bullet){
return cljs.core.not.call(null,(function (){var or__19556__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.component.walls,p3r50na.apps.bookof5rinds.client.game.component.blocksize);
if(cljs.core.truth_(or__19556__auto__)){
return or__19556__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})());
}),cljs.core.map.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_bullet_location,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state)));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024),new_bullets);
});
p3r50na.apps.bookof5rinds.client.game.component.cupdate = (function p3r50na$apps$bookof5rinds$client$game$component$cupdate(state){
var oldstate = state;
var newstate = p3r50na.apps.bookof5rinds.client.game.component.apply_controll.call(null,p3r50na.apps.bookof5rinds.client.game.component.update_bullet_locations.call(null,state));
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
var map__28959 = event;
var map__28959__$1 = ((((!((map__28959 == null)))?((((map__28959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28959):map__28959);
var mx = cljs.core.get.call(null,map__28959__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var my = cljs.core.get.call(null,map__28959__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__28960 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__28960__$1 = ((((!((map__28960 == null)))?((((map__28960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28960):map__28960);
var px = cljs.core.get.call(null,map__28960__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__28960__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__28960__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullets","bullets",1734809024)], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),1.4,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null));
});
p3r50na.apps.bookof5rinds.client.game.component.game_renderer = (function p3r50na$apps$bookof5rinds$client$game$component$game_renderer(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked))?(function() { 
var G__28963__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked,args);
};
var G__28963 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28964__i = 0, G__28964__a = new Array(arguments.length -  0);
while (G__28964__i < G__28964__a.length) {G__28964__a[G__28964__i] = arguments[G__28964__i + 0]; ++G__28964__i;}
  args = new cljs.core.IndexedSeq(G__28964__a,0);
} 
return G__28963__delegate.call(this,args);};
G__28963.cljs$lang$maxFixedArity = 0;
G__28963.cljs$lang$applyTo = (function (arglist__28965){
var args = cljs.core.seq(arglist__28965);
return G__28963__delegate(args);
});
G__28963.cljs$core$IFn$_invoke$arity$variadic = G__28963__delegate;
return G__28963;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_mouse_clicked),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate))?(function() { 
var G__28966__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.cupdate,args);
};
var G__28966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28967__i = 0, G__28967__a = new Array(arguments.length -  0);
while (G__28967__i < G__28967__a.length) {G__28967__a[G__28967__i] = arguments[G__28967__i + 0]; ++G__28967__i;}
  args = new cljs.core.IndexedSeq(G__28967__a,0);
} 
return G__28966__delegate.call(this,args);};
G__28966.cljs$lang$maxFixedArity = 0;
G__28966.cljs$lang$applyTo = (function (arglist__28968){
var args = cljs.core.seq(arglist__28968);
return G__28966__delegate(args);
});
G__28966.cljs$core$IFn$_invoke$arity$variadic = G__28966__delegate;
return G__28966;
})()
:p3r50na.apps.bookof5rinds.client.game.component.cupdate),new cljs.core.Keyword(null,"size","size",1098693007),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size))?(function() { 
var G__28969__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.map_size,args);
};
var G__28969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28970__i = 0, G__28970__a = new Array(arguments.length -  0);
while (G__28970__i < G__28970__a.length) {G__28970__a[G__28970__i] = arguments[G__28970__i + 0]; ++G__28970__i;}
  args = new cljs.core.IndexedSeq(G__28970__a,0);
} 
return G__28969__delegate.call(this,args);};
G__28969.cljs$lang$maxFixedArity = 0;
G__28969.cljs$lang$applyTo = (function (arglist__28971){
var args = cljs.core.seq(arglist__28971);
return G__28969__delegate(args);
});
G__28969.cljs$core$IFn$_invoke$arity$variadic = G__28969__delegate;
return G__28969;
})()
:p3r50na.apps.bookof5rinds.client.game.component.map_size),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup))?(function() { 
var G__28972__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.setup,args);
};
var G__28972 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28973__i = 0, G__28973__a = new Array(arguments.length -  0);
while (G__28973__i < G__28973__a.length) {G__28973__a[G__28973__i] = arguments[G__28973__i + 0]; ++G__28973__i;}
  args = new cljs.core.IndexedSeq(G__28973__a,0);
} 
return G__28972__delegate.call(this,args);};
G__28972.cljs$lang$maxFixedArity = 0;
G__28972.cljs$lang$applyTo = (function (arglist__28974){
var args = cljs.core.seq(arglist__28974);
return G__28972__delegate(args);
});
G__28972.cljs$core$IFn$_invoke$arity$variadic = G__28972__delegate;
return G__28972;
})()
:p3r50na.apps.bookof5rinds.client.game.component.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"host","host",-1558485167),"game-canvas",new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down))?(function() { 
var G__28975__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_down,args);
};
var G__28975 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28976__i = 0, G__28976__a = new Array(arguments.length -  0);
while (G__28976__i < G__28976__a.length) {G__28976__a[G__28976__i] = arguments[G__28976__i + 0]; ++G__28976__i;}
  args = new cljs.core.IndexedSeq(G__28976__a,0);
} 
return G__28975__delegate.call(this,args);};
G__28975.cljs$lang$maxFixedArity = 0;
G__28975.cljs$lang$applyTo = (function (arglist__28977){
var args = cljs.core.seq(arglist__28977);
return G__28975__delegate(args);
});
G__28975.cljs$core$IFn$_invoke$arity$variadic = G__28975__delegate;
return G__28975;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_down),new cljs.core.Keyword(null,"key-released","key-released",215919828),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up))?(function() { 
var G__28978__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.on_key_up,args);
};
var G__28978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28979__i = 0, G__28979__a = new Array(arguments.length -  0);
while (G__28979__i < G__28979__a.length) {G__28979__a[G__28979__i] = arguments[G__28979__i + 0]; ++G__28979__i;}
  args = new cljs.core.IndexedSeq(G__28979__a,0);
} 
return G__28978__delegate.call(this,args);};
G__28978.cljs$lang$maxFixedArity = 0;
G__28978.cljs$lang$applyTo = (function (arglist__28980){
var args = cljs.core.seq(arglist__28980);
return G__28978__delegate(args);
});
G__28978.cljs$core$IFn$_invoke$arity$variadic = G__28978__delegate;
return G__28978;
})()
:p3r50na.apps.bookof5rinds.client.game.component.on_key_up),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw))?(function() { 
var G__28981__delegate = function (args){
return cljs.core.apply.call(null,p3r50na.apps.bookof5rinds.client.game.component.draw,args);
};
var G__28981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28982__i = 0, G__28982__a = new Array(arguments.length -  0);
while (G__28982__i < G__28982__a.length) {G__28982__a[G__28982__i] = arguments[G__28982__i + 0]; ++G__28982__i;}
  args = new cljs.core.IndexedSeq(G__28982__a,0);
} 
return G__28981__delegate.call(this,args);};
G__28981.cljs$lang$maxFixedArity = 0;
G__28981.cljs$lang$applyTo = (function (arglist__28983){
var args = cljs.core.seq(arglist__28983);
return G__28981__delegate(args);
});
G__28981.cljs$core$IFn$_invoke$arity$variadic = G__28981__delegate;
return G__28981;
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
p3r50na.apps.bookof5rinds.client.game.component.game_component = (function p3r50na$apps$bookof5rinds$client$game$component$game_component(socket){
if(typeof p3r50na.apps.bookof5rinds.client.game.component.t28987 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.game.component.t28987 = (function (game_component,socket,meta28988){
this.game_component = game_component;
this.socket = socket;
this.meta28988 = meta28988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.game.component.t28987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28989,meta28988__$1){
var self__ = this;
var _28989__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.game.component.t28987(self__.game_component,self__.socket,meta28988__$1));
});

p3r50na.apps.bookof5rinds.client.game.component.t28987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28989){
var self__ = this;
var _28989__$1 = this;
return self__.meta28988;
});

p3r50na.apps.bookof5rinds.client.game.component.t28987.prototype.om$core$IDidMount$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t28987.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return p3r50na.apps.bookof5rinds.client.game.component.game_renderer.call(null);
});

p3r50na.apps.bookof5rinds.client.game.component.t28987.prototype.om$core$IRender$ = true;

p3r50na.apps.bookof5rinds.client.game.component.t28987.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,React.DOM.h1(null,"game"),React.DOM.canvas({"id": "game-canvas", "style": {"border": "1px solid gray"}}));
});

p3r50na.apps.bookof5rinds.client.game.component.t28987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"game-component","game-component",-175136358,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"socket","socket",1699668590,null)], null)))], null)),new cljs.core.Symbol(null,"socket","socket",1699668590,null),new cljs.core.Symbol(null,"meta28988","meta28988",693460696,null)], null);
});

p3r50na.apps.bookof5rinds.client.game.component.t28987.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.game.component.t28987.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.game.component/t28987";

p3r50na.apps.bookof5rinds.client.game.component.t28987.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.game.component/t28987");
});

p3r50na.apps.bookof5rinds.client.game.component.__GT_t28987 = (function p3r50na$apps$bookof5rinds$client$game$component$game_component_$___GT_t28987(game_component__$1,socket__$1,meta28988){
return (new p3r50na.apps.bookof5rinds.client.game.component.t28987(game_component__$1,socket__$1,meta28988));
});

}

return (new p3r50na.apps.bookof5rinds.client.game.component.t28987(p3r50na$apps$bookof5rinds$client$game$component$game_component,socket,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=component.js.map