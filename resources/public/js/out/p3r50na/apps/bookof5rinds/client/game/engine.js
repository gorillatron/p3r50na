// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.engine');
goog.require('cljs.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('om.dom');
goog.require('quil.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.level');
goog.require('cljs.core.async');
goog.require('quil.middleware');
goog.require('om.core');
p3r50na.apps.bookof5rinds.client.game.engine.wallsm = cljs.core.memoize.call(null,p3r50na.apps.bookof5rinds.client.game.level.walls);
p3r50na.apps.bookof5rinds.client.game.engine.apply_controlls = (function p3r50na$apps$bookof5rinds$client$game$engine$apply_controlls(state,controlls){

if(cljs.core.empty_QMARK_.call(null,controlls)){
return state;
} else {
var map__56045 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__56045__$1 = ((((!((map__56045 == null)))?((((map__56045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56045):map__56045);
var x = cljs.core.get.call(null,map__56045__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__56045__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__56045__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__56045,map__56045__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__56047 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__56047) {
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
if(cljs.core.truth_((function (){var or__19555__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.level.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1)),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1)));
if(cljs.core.truth_(or__19555__auto__)){
return or__19555__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1));
}
})())){
return state__$1;
} else {
return newstate;
}
});})(map__56045,map__56045__$1,x,y,speed))
,state,controlls);
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_location(bullet){
var map__56053 = bullet;
var map__56053__$1 = ((((!((map__56053 == null)))?((((map__56053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56053):map__56053);
var speed = cljs.core.get.call(null,map__56053__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__56054 = cljs.core.get.call(null,map__56053__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__56054,(0),null);
var by = cljs.core.nth.call(null,vec__56054,(1),null);
var lx = cljs.core.get.call(null,map__56053__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__56053__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__56055 = cljs.core.get.call(null,map__56053__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__56055,(0),null);
var gy = cljs.core.nth.call(null,vec__56055,(1),null);
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
p3r50na.apps.bookof5rinds.client.game.engine.bullet_intersects_QMARK_ = (function p3r50na$apps$bookof5rinds$client$game$engine$bullet_intersects_QMARK_(state,bullet){
return cljs.core.not.call(null,(function (){var or__19555__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_rects_QMARK_.call(null,bullet,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(or__19555__auto__)){
return or__19555__auto__;
} else {
var or__19555__auto____$1 = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.engine.wallsm.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(or__19555__auto____$1)){
return or__19555__auto____$1;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
}
}
})());
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullets = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullets(state,path){
return cljs.core.filterv.call(null,cljs.core.partial.call(null,p3r50na.apps.bookof5rinds.client.game.engine.bullet_intersects_QMARK_,state),cljs.core.mapv.call(null,p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location,state.call(null,path)));
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_locations = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_locations(state,path){
return cljs.core.assoc.call(null,state,path,p3r50na.apps.bookof5rinds.client.game.engine.update_bullets.call(null,state,path));
});
p3r50na.apps.bookof5rinds.client.game.engine.update_objects = (function p3r50na$apps$bookof5rinds$client$game$engine$update_objects(state){
var oldstate = state;
var new_state = p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_locations.call(null,p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_locations.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024)),new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516));
return new_state;
});
p3r50na.apps.bookof5rinds.client.game.engine.player_event__GT_bullet = (function p3r50na$apps$bookof5rinds$client$game$engine$player_event__GT_bullet(player,event){
var map__56061 = event;
var map__56061__$1 = ((((!((map__56061 == null)))?((((map__56061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56061):map__56061);
var mx = cljs.core.get.call(null,map__56061__$1,new cljs.core.Keyword(null,"mx","mx",-199887020));
var my = cljs.core.get.call(null,map__56061__$1,new cljs.core.Keyword(null,"my","my",-1055703269));
var map__56062 = player;
var map__56062__$1 = ((((!((map__56062 == null)))?((((map__56062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56062):map__56062);
var px = cljs.core.get.call(null,map__56062__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__56062__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__56062__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"fired-by","fired-by",988297261),player,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),1.3,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null);
});
p3r50na.apps.bookof5rinds.client.game.engine.player_fired_bullet = (function p3r50na$apps$bookof5rinds$client$game$engine$player_fired_bullet(state,event){
var bullet = p3r50na.apps.bookof5rinds.client.game.engine.player_event__GT_bullet.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state),event);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bullets","bullets",1734809024)], null),cljs.core.conj,bullet);
});
p3r50na.apps.bookof5rinds.client.game.engine.remote_player_change = (function p3r50na$apps$bookof5rinds$client$game$engine$remote_player_change(state,event){
var remote_player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(event));
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(remote_player)], null),remote_player);
});
p3r50na.apps.bookof5rinds.client.game.engine.remote_bullet_fired = (function p3r50na$apps$bookof5rinds$client$game$engine$remote_bullet_fired(state,event){
var bullet = new cljs.core.Keyword(null,"bullet","bullet",726988937).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(event));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516)], null),cljs.core.conj,bullet);
});
p3r50na.apps.bookof5rinds.client.game.engine.apply_events = (function p3r50na$apps$bookof5rinds$client$game$engine$apply_events(state,events){
return cljs.core.reduce.call(null,(function (state__$1,event){
var G__56066 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event);
switch (G__56066) {
case "remote-bullet-fired":
return p3r50na.apps.bookof5rinds.client.game.engine.remote_bullet_fired.call(null,state__$1,event);

break;
case "remote-player-change":
return p3r50na.apps.bookof5rinds.client.game.engine.remote_player_change.call(null,state__$1,event);

break;
case "player-fired-bullet":
return p3r50na.apps.bookof5rinds.client.game.engine.player_fired_bullet.call(null,state__$1,event);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event))].join('')));

}
}),state,events);
});
p3r50na.apps.bookof5rinds.client.game.engine.create_initial_state = (function p3r50na$apps$bookof5rinds$client$game$engine$create_initial_state(state){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null),state);
});
p3r50na.apps.bookof5rinds.client.game.engine.send_updates_BANG_ = (function p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG_(channel,old_state,new_state,events){
var oplayer = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(old_state);
var nplayer = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(new_state);
var c__22666__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22666__auto__,oplayer,nplayer){
return (function (){
var f__22667__auto__ = (function (){var switch__22645__auto__ = ((function (c__22666__auto__,oplayer,nplayer){
return (function (state_56263){
var state_val_56264 = (state_56263[(1)]);
if((state_val_56264 === (7))){
var inst_56261 = (state_56263[(2)]);
var state_56263__$1 = state_56263;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56263__$1,inst_56261);
} else {
if((state_val_56264 === (20))){
var inst_56254 = (state_56263[(2)]);
var state_56263__$1 = state_56263;
var statearr_56265_56308 = state_56263__$1;
(statearr_56265_56308[(2)] = inst_56254);

(statearr_56265_56308[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (1))){
var inst_56188 = cljs.core.not_EQ_.call(null,oplayer,nplayer);
var state_56263__$1 = state_56263;
if(inst_56188){
var statearr_56266_56309 = state_56263__$1;
(statearr_56266_56309[(1)] = (2));

} else {
var statearr_56267_56310 = state_56263__$1;
(statearr_56267_56310[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (24))){
var inst_56247 = (state_56263[(2)]);
var state_56263__$1 = state_56263;
var statearr_56268_56311 = state_56263__$1;
(statearr_56268_56311[(2)] = inst_56247);

(statearr_56268_56311[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (4))){
var inst_56197 = (state_56263[(2)]);
var inst_56202 = cljs.core.seq.call(null,events);
var inst_56203 = inst_56202;
var inst_56204 = null;
var inst_56205 = (0);
var inst_56206 = (0);
var state_56263__$1 = (function (){var statearr_56269 = state_56263;
(statearr_56269[(7)] = inst_56197);

(statearr_56269[(8)] = inst_56206);

(statearr_56269[(9)] = inst_56205);

(statearr_56269[(10)] = inst_56203);

(statearr_56269[(11)] = inst_56204);

return statearr_56269;
})();
var statearr_56270_56312 = state_56263__$1;
(statearr_56270_56312[(2)] = null);

(statearr_56270_56312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (15))){
var inst_56228 = (state_56263[(12)]);
var inst_56230 = cljs.core.chunked_seq_QMARK_.call(null,inst_56228);
var state_56263__$1 = state_56263;
if(inst_56230){
var statearr_56274_56313 = state_56263__$1;
(statearr_56274_56313[(1)] = (18));

} else {
var statearr_56275_56314 = state_56263__$1;
(statearr_56275_56314[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (21))){
var inst_56237 = (state_56263[(13)]);
var inst_56241 = [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"bullet","bullet",726988937)];
var inst_56242 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(old_state);
var inst_56243 = p3r50na.apps.bookof5rinds.client.game.engine.player_event__GT_bullet.call(null,inst_56242,inst_56237);
var inst_56244 = ["bullet-fired",inst_56243];
var inst_56245 = cljs.core.PersistentHashMap.fromArrays(inst_56241,inst_56244);
var state_56263__$1 = state_56263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56263__$1,(24),channel,inst_56245);
} else {
if((state_val_56264 === (13))){
var inst_56206 = (state_56263[(8)]);
var inst_56205 = (state_56263[(9)]);
var inst_56203 = (state_56263[(10)]);
var inst_56204 = (state_56263[(11)]);
var inst_56224 = (state_56263[(2)]);
var inst_56225 = (inst_56206 + (1));
var tmp56271 = inst_56205;
var tmp56272 = inst_56203;
var tmp56273 = inst_56204;
var inst_56203__$1 = tmp56272;
var inst_56204__$1 = tmp56273;
var inst_56205__$1 = tmp56271;
var inst_56206__$1 = inst_56225;
var state_56263__$1 = (function (){var statearr_56276 = state_56263;
(statearr_56276[(8)] = inst_56206__$1);

(statearr_56276[(14)] = inst_56224);

(statearr_56276[(9)] = inst_56205__$1);

(statearr_56276[(10)] = inst_56203__$1);

(statearr_56276[(11)] = inst_56204__$1);

return statearr_56276;
})();
var statearr_56277_56315 = state_56263__$1;
(statearr_56277_56315[(2)] = null);

(statearr_56277_56315[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (22))){
var state_56263__$1 = state_56263;
var statearr_56278_56316 = state_56263__$1;
(statearr_56278_56316[(2)] = null);

(statearr_56278_56316[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (6))){
var inst_56206 = (state_56263[(8)]);
var inst_56205 = (state_56263[(9)]);
var inst_56208 = (inst_56206 < inst_56205);
var inst_56209 = inst_56208;
var state_56263__$1 = state_56263;
if(cljs.core.truth_(inst_56209)){
var statearr_56279_56317 = state_56263__$1;
(statearr_56279_56317[(1)] = (8));

} else {
var statearr_56280_56318 = state_56263__$1;
(statearr_56280_56318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (17))){
var inst_56257 = (state_56263[(2)]);
var state_56263__$1 = state_56263;
var statearr_56281_56319 = state_56263__$1;
(statearr_56281_56319[(2)] = inst_56257);

(statearr_56281_56319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (3))){
var state_56263__$1 = state_56263;
var statearr_56282_56320 = state_56263__$1;
(statearr_56282_56320[(2)] = null);

(statearr_56282_56320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (12))){
var state_56263__$1 = state_56263;
var statearr_56283_56321 = state_56263__$1;
(statearr_56283_56321[(2)] = null);

(statearr_56283_56321[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (2))){
var inst_56190 = [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"player","player",-97687400)];
var inst_56191 = ["player-change",nplayer];
var inst_56192 = cljs.core.PersistentHashMap.fromArrays(inst_56190,inst_56191);
var state_56263__$1 = state_56263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56263__$1,(5),channel,inst_56192);
} else {
if((state_val_56264 === (23))){
var inst_56228 = (state_56263[(12)]);
var inst_56250 = (state_56263[(2)]);
var inst_56251 = cljs.core.next.call(null,inst_56228);
var inst_56203 = inst_56251;
var inst_56204 = null;
var inst_56205 = (0);
var inst_56206 = (0);
var state_56263__$1 = (function (){var statearr_56284 = state_56263;
(statearr_56284[(8)] = inst_56206);

(statearr_56284[(15)] = inst_56250);

(statearr_56284[(9)] = inst_56205);

(statearr_56284[(10)] = inst_56203);

(statearr_56284[(11)] = inst_56204);

return statearr_56284;
})();
var statearr_56285_56322 = state_56263__$1;
(statearr_56285_56322[(2)] = null);

(statearr_56285_56322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (19))){
var inst_56237 = (state_56263[(13)]);
var inst_56228 = (state_56263[(12)]);
var inst_56237__$1 = cljs.core.first.call(null,inst_56228);
var inst_56238 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_56237__$1);
var inst_56239 = cljs.core._EQ_.call(null,inst_56238,"player-fired-bullet");
var state_56263__$1 = (function (){var statearr_56286 = state_56263;
(statearr_56286[(13)] = inst_56237__$1);

return statearr_56286;
})();
if(inst_56239){
var statearr_56287_56323 = state_56263__$1;
(statearr_56287_56323[(1)] = (21));

} else {
var statearr_56288_56324 = state_56263__$1;
(statearr_56288_56324[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (11))){
var inst_56211 = (state_56263[(16)]);
var inst_56215 = [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"bullet","bullet",726988937)];
var inst_56216 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(old_state);
var inst_56217 = p3r50na.apps.bookof5rinds.client.game.engine.player_event__GT_bullet.call(null,inst_56216,inst_56211);
var inst_56218 = ["bullet-fired",inst_56217];
var inst_56219 = cljs.core.PersistentHashMap.fromArrays(inst_56215,inst_56218);
var state_56263__$1 = state_56263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_56263__$1,(14),channel,inst_56219);
} else {
if((state_val_56264 === (9))){
var inst_56203 = (state_56263[(10)]);
var inst_56228 = (state_56263[(12)]);
var inst_56228__$1 = cljs.core.seq.call(null,inst_56203);
var state_56263__$1 = (function (){var statearr_56289 = state_56263;
(statearr_56289[(12)] = inst_56228__$1);

return statearr_56289;
})();
if(inst_56228__$1){
var statearr_56290_56325 = state_56263__$1;
(statearr_56290_56325[(1)] = (15));

} else {
var statearr_56291_56326 = state_56263__$1;
(statearr_56291_56326[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (5))){
var inst_56194 = (state_56263[(2)]);
var state_56263__$1 = state_56263;
var statearr_56292_56327 = state_56263__$1;
(statearr_56292_56327[(2)] = inst_56194);

(statearr_56292_56327[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (14))){
var inst_56221 = (state_56263[(2)]);
var state_56263__$1 = state_56263;
var statearr_56293_56328 = state_56263__$1;
(statearr_56293_56328[(2)] = inst_56221);

(statearr_56293_56328[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (16))){
var state_56263__$1 = state_56263;
var statearr_56294_56329 = state_56263__$1;
(statearr_56294_56329[(2)] = null);

(statearr_56294_56329[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (10))){
var inst_56259 = (state_56263[(2)]);
var state_56263__$1 = state_56263;
var statearr_56295_56330 = state_56263__$1;
(statearr_56295_56330[(2)] = inst_56259);

(statearr_56295_56330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (18))){
var inst_56228 = (state_56263[(12)]);
var inst_56232 = cljs.core.chunk_first.call(null,inst_56228);
var inst_56233 = cljs.core.chunk_rest.call(null,inst_56228);
var inst_56234 = cljs.core.count.call(null,inst_56232);
var inst_56203 = inst_56233;
var inst_56204 = inst_56232;
var inst_56205 = inst_56234;
var inst_56206 = (0);
var state_56263__$1 = (function (){var statearr_56296 = state_56263;
(statearr_56296[(8)] = inst_56206);

(statearr_56296[(9)] = inst_56205);

(statearr_56296[(10)] = inst_56203);

(statearr_56296[(11)] = inst_56204);

return statearr_56296;
})();
var statearr_56297_56331 = state_56263__$1;
(statearr_56297_56331[(2)] = null);

(statearr_56297_56331[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56264 === (8))){
var inst_56211 = (state_56263[(16)]);
var inst_56206 = (state_56263[(8)]);
var inst_56204 = (state_56263[(11)]);
var inst_56211__$1 = cljs.core._nth.call(null,inst_56204,inst_56206);
var inst_56212 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_56211__$1);
var inst_56213 = cljs.core._EQ_.call(null,inst_56212,"player-fired-bullet");
var state_56263__$1 = (function (){var statearr_56298 = state_56263;
(statearr_56298[(16)] = inst_56211__$1);

return statearr_56298;
})();
if(inst_56213){
var statearr_56299_56332 = state_56263__$1;
(statearr_56299_56332[(1)] = (11));

} else {
var statearr_56300_56333 = state_56263__$1;
(statearr_56300_56333[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22666__auto__,oplayer,nplayer))
;
return ((function (switch__22645__auto__,c__22666__auto__,oplayer,nplayer){
return (function() {
var p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto__ = null;
var p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto____0 = (function (){
var statearr_56304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56304[(0)] = p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto__);

(statearr_56304[(1)] = (1));

return statearr_56304;
});
var p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto____1 = (function (state_56263){
while(true){
var ret_value__22647__auto__ = (function (){try{while(true){
var result__22648__auto__ = switch__22645__auto__.call(null,state_56263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22648__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22648__auto__;
}
break;
}
}catch (e56305){if((e56305 instanceof Object)){
var ex__22649__auto__ = e56305;
var statearr_56306_56334 = state_56263;
(statearr_56306_56334[(5)] = ex__22649__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56335 = state_56263;
state_56263 = G__56335;
continue;
} else {
return ret_value__22647__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto__ = function(state_56263){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto____1.call(this,state_56263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto____0;
p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto____1;
return p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__22646__auto__;
})()
;})(switch__22645__auto__,c__22666__auto__,oplayer,nplayer))
})();
var state__22668__auto__ = (function (){var statearr_56307 = f__22667__auto__.call(null);
(statearr_56307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22666__auto__);

return statearr_56307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22668__auto__);
});})(c__22666__auto__,oplayer,nplayer))
);

return c__22666__auto__;
});
p3r50na.apps.bookof5rinds.client.game.engine.take_hits = (function p3r50na$apps$bookof5rinds$client$game$engine$take_hits(state){
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var remote_bullets = new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516).cljs$core$IFn$_invoke$arity$1(state);
var map__56338 = cljs.core.group_by.call(null,cljs.core.partial.call(null,p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_,player),remote_bullets);
var map__56338__$1 = ((((!((map__56338 == null)))?((((map__56338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56338):map__56338);
var hits = cljs.core.get.call(null,map__56338__$1,false);
var misses = cljs.core.get.call(null,map__56338__$1,true);
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516),misses),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"hp","hp",-1541237831)], null),cljs.core._,((4) * cljs.core.count.call(null,hits)));
});
p3r50na.apps.bookof5rinds.client.game.engine.create_simulation = (function p3r50na$apps$bookof5rinds$client$game$engine$create_simulation(state){
var initial_state = p3r50na.apps.bookof5rinds.client.game.engine.create_initial_state.call(null,state);
var old_state = cljs.core.atom.call(null,initial_state);
var controlls = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var events = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
var update_channel = cljs.core.async.chan.call(null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"next-frame","next-frame",-636070893),((function (initial_state,old_state,controlls,events,update_channel){
return (function (){
var new_state = p3r50na.apps.bookof5rinds.client.game.engine.apply_events.call(null,cljs.core.deref.call(null,old_state),cljs.core.deref.call(null,events));
var new_state__$1 = p3r50na.apps.bookof5rinds.client.game.engine.apply_controlls.call(null,new_state,cljs.core.deref.call(null,controlls));
var new_state__$2 = p3r50na.apps.bookof5rinds.client.game.engine.take_hits.call(null,new_state__$1);
var new_state__$3 = p3r50na.apps.bookof5rinds.client.game.engine.update_objects.call(null,new_state__$2);
p3r50na.apps.bookof5rinds.client.game.engine.send_updates_BANG_.call(null,update_channel,cljs.core.deref.call(null,old_state),new_state__$3,cljs.core.deref.call(null,events));

cljs.core.reset_BANG_.call(null,events,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,old_state,new_state__$3);

return new_state__$3;
});})(initial_state,old_state,controlls,events,update_channel))
,new cljs.core.Keyword(null,"update-channel","update-channel",579422),update_channel,new cljs.core.Keyword(null,"add-event","add-event",938429088),((function (initial_state,old_state,controlls,events,update_channel){
return (function (event){
return cljs.core.swap_BANG_.call(null,events,cljs.core.conj,event);
});})(initial_state,old_state,controlls,events,update_channel))
,new cljs.core.Keyword(null,"controller","controller",2013778659),((function (initial_state,old_state,controlls,events,update_channel){
return (function (mutator){
return cljs.core.reset_BANG_.call(null,controlls,mutator.call(null,cljs.core.deref.call(null,controlls)));
});})(initial_state,old_state,controlls,events,update_channel))
], null);
});

//# sourceMappingURL=engine.js.map