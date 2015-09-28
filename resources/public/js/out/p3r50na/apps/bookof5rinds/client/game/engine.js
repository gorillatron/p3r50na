// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.engine');
goog.require('cljs.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('om.dom');
goog.require('quil.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.level');
goog.require('cljs.core.async');
goog.require('wagjo.data.array');
goog.require('quil.middleware');
goog.require('om.core');
p3r50na.apps.bookof5rinds.client.game.engine.wallsm = cljs.core.memoize.call(null,p3r50na.apps.bookof5rinds.client.game.level.walls);
p3r50na.apps.bookof5rinds.client.game.engine.apply_controlls = (function p3r50na$apps$bookof5rinds$client$game$engine$apply_controlls(state,controlls){

if(cljs.core.empty_QMARK_.call(null,controlls)){
return state;
} else {
var map__77279 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__77279__$1 = ((((!((map__77279 == null)))?((((map__77279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77279):map__77279);
var x = cljs.core.get.call(null,map__77279__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__77279__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__77279__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__77279,map__77279__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__77281 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__77281) {
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
});})(map__77279,map__77279__$1,x,y,speed))
,state,controlls);
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_location(bullet){
var map__77287 = bullet;
var map__77287__$1 = ((((!((map__77287 == null)))?((((map__77287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77287):map__77287);
var speed = cljs.core.get.call(null,map__77287__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__77288 = cljs.core.get.call(null,map__77287__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__77288,(0),null);
var by = cljs.core.nth.call(null,vec__77288,(1),null);
var lx = cljs.core.get.call(null,map__77287__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__77287__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__77289 = cljs.core.get.call(null,map__77287__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__77289,(0),null);
var gy = cljs.core.nth.call(null,vec__77289,(1),null);
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
return cljs.core.not.call(null,(function (){var or__19555__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.engine.wallsm.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(or__19555__auto__)){
return or__19555__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state));
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
var map__77295 = event;
var map__77295__$1 = ((((!((map__77295 == null)))?((((map__77295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77295):map__77295);
var mx = cljs.core.get.call(null,map__77295__$1,new cljs.core.Keyword(null,"mx","mx",-199887020));
var my = cljs.core.get.call(null,map__77295__$1,new cljs.core.Keyword(null,"my","my",-1055703269));
var map__77296 = player;
var map__77296__$1 = ((((!((map__77296 == null)))?((((map__77296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77296):map__77296);
var px = cljs.core.get.call(null,map__77296__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__77296__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__77296__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var start = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px + (ps / (2))),(py + (ps / (2)))], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.get.call(null,start,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.get.call(null,start,(1)),new cljs.core.Keyword(null,"fired-by","fired-by",988297261),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(p3r50na.apps.bookof5rinds.client.game.engine.state),new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"goal","goal",-2073396501),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null),new cljs.core.Keyword(null,"speed","speed",1257663751),1.3,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null);
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
var G__77300 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event);
switch (G__77300) {
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
var c__23302__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23302__auto__,oplayer,nplayer){
return (function (){
var f__23303__auto__ = (function (){var switch__23281__auto__ = ((function (c__23302__auto__,oplayer,nplayer){
return (function (state_77497){
var state_val_77498 = (state_77497[(1)]);
if((state_val_77498 === (7))){
var inst_77495 = (state_77497[(2)]);
var state_77497__$1 = state_77497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_77497__$1,inst_77495);
} else {
if((state_val_77498 === (20))){
var inst_77488 = (state_77497[(2)]);
var state_77497__$1 = state_77497;
var statearr_77499_77542 = state_77497__$1;
(statearr_77499_77542[(2)] = inst_77488);

(statearr_77499_77542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (1))){
var inst_77422 = cljs.core.not_EQ_.call(null,oplayer,nplayer);
var state_77497__$1 = state_77497;
if(inst_77422){
var statearr_77500_77543 = state_77497__$1;
(statearr_77500_77543[(1)] = (2));

} else {
var statearr_77501_77544 = state_77497__$1;
(statearr_77501_77544[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (24))){
var inst_77481 = (state_77497[(2)]);
var state_77497__$1 = state_77497;
var statearr_77502_77545 = state_77497__$1;
(statearr_77502_77545[(2)] = inst_77481);

(statearr_77502_77545[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (4))){
var inst_77431 = (state_77497[(2)]);
var inst_77436 = cljs.core.seq.call(null,events);
var inst_77437 = inst_77436;
var inst_77438 = null;
var inst_77439 = (0);
var inst_77440 = (0);
var state_77497__$1 = (function (){var statearr_77503 = state_77497;
(statearr_77503[(7)] = inst_77440);

(statearr_77503[(8)] = inst_77437);

(statearr_77503[(9)] = inst_77431);

(statearr_77503[(10)] = inst_77439);

(statearr_77503[(11)] = inst_77438);

return statearr_77503;
})();
var statearr_77504_77546 = state_77497__$1;
(statearr_77504_77546[(2)] = null);

(statearr_77504_77546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (15))){
var inst_77462 = (state_77497[(12)]);
var inst_77464 = cljs.core.chunked_seq_QMARK_.call(null,inst_77462);
var state_77497__$1 = state_77497;
if(inst_77464){
var statearr_77508_77547 = state_77497__$1;
(statearr_77508_77547[(1)] = (18));

} else {
var statearr_77509_77548 = state_77497__$1;
(statearr_77509_77548[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (21))){
var inst_77471 = (state_77497[(13)]);
var inst_77475 = [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"bullet","bullet",726988937)];
var inst_77476 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(old_state);
var inst_77477 = p3r50na.apps.bookof5rinds.client.game.engine.player_event__GT_bullet.call(null,inst_77476,inst_77471);
var inst_77478 = ["bullet-fired",inst_77477];
var inst_77479 = cljs.core.PersistentHashMap.fromArrays(inst_77475,inst_77478);
var state_77497__$1 = state_77497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77497__$1,(24),channel,inst_77479);
} else {
if((state_val_77498 === (13))){
var inst_77440 = (state_77497[(7)]);
var inst_77437 = (state_77497[(8)]);
var inst_77439 = (state_77497[(10)]);
var inst_77438 = (state_77497[(11)]);
var inst_77458 = (state_77497[(2)]);
var inst_77459 = (inst_77440 + (1));
var tmp77505 = inst_77437;
var tmp77506 = inst_77439;
var tmp77507 = inst_77438;
var inst_77437__$1 = tmp77505;
var inst_77438__$1 = tmp77507;
var inst_77439__$1 = tmp77506;
var inst_77440__$1 = inst_77459;
var state_77497__$1 = (function (){var statearr_77510 = state_77497;
(statearr_77510[(14)] = inst_77458);

(statearr_77510[(7)] = inst_77440__$1);

(statearr_77510[(8)] = inst_77437__$1);

(statearr_77510[(10)] = inst_77439__$1);

(statearr_77510[(11)] = inst_77438__$1);

return statearr_77510;
})();
var statearr_77511_77549 = state_77497__$1;
(statearr_77511_77549[(2)] = null);

(statearr_77511_77549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (22))){
var state_77497__$1 = state_77497;
var statearr_77512_77550 = state_77497__$1;
(statearr_77512_77550[(2)] = null);

(statearr_77512_77550[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (6))){
var inst_77440 = (state_77497[(7)]);
var inst_77439 = (state_77497[(10)]);
var inst_77442 = (inst_77440 < inst_77439);
var inst_77443 = inst_77442;
var state_77497__$1 = state_77497;
if(cljs.core.truth_(inst_77443)){
var statearr_77513_77551 = state_77497__$1;
(statearr_77513_77551[(1)] = (8));

} else {
var statearr_77514_77552 = state_77497__$1;
(statearr_77514_77552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (17))){
var inst_77491 = (state_77497[(2)]);
var state_77497__$1 = state_77497;
var statearr_77515_77553 = state_77497__$1;
(statearr_77515_77553[(2)] = inst_77491);

(statearr_77515_77553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (3))){
var state_77497__$1 = state_77497;
var statearr_77516_77554 = state_77497__$1;
(statearr_77516_77554[(2)] = null);

(statearr_77516_77554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (12))){
var state_77497__$1 = state_77497;
var statearr_77517_77555 = state_77497__$1;
(statearr_77517_77555[(2)] = null);

(statearr_77517_77555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (2))){
var inst_77424 = [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"player","player",-97687400)];
var inst_77425 = ["player-change",nplayer];
var inst_77426 = cljs.core.PersistentHashMap.fromArrays(inst_77424,inst_77425);
var state_77497__$1 = state_77497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77497__$1,(5),channel,inst_77426);
} else {
if((state_val_77498 === (23))){
var inst_77462 = (state_77497[(12)]);
var inst_77484 = (state_77497[(2)]);
var inst_77485 = cljs.core.next.call(null,inst_77462);
var inst_77437 = inst_77485;
var inst_77438 = null;
var inst_77439 = (0);
var inst_77440 = (0);
var state_77497__$1 = (function (){var statearr_77518 = state_77497;
(statearr_77518[(7)] = inst_77440);

(statearr_77518[(8)] = inst_77437);

(statearr_77518[(15)] = inst_77484);

(statearr_77518[(10)] = inst_77439);

(statearr_77518[(11)] = inst_77438);

return statearr_77518;
})();
var statearr_77519_77556 = state_77497__$1;
(statearr_77519_77556[(2)] = null);

(statearr_77519_77556[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (19))){
var inst_77462 = (state_77497[(12)]);
var inst_77471 = (state_77497[(13)]);
var inst_77471__$1 = cljs.core.first.call(null,inst_77462);
var inst_77472 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_77471__$1);
var inst_77473 = cljs.core._EQ_.call(null,inst_77472,"player-fired-bullet");
var state_77497__$1 = (function (){var statearr_77520 = state_77497;
(statearr_77520[(13)] = inst_77471__$1);

return statearr_77520;
})();
if(inst_77473){
var statearr_77521_77557 = state_77497__$1;
(statearr_77521_77557[(1)] = (21));

} else {
var statearr_77522_77558 = state_77497__$1;
(statearr_77522_77558[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (11))){
var inst_77445 = (state_77497[(16)]);
var inst_77449 = [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"bullet","bullet",726988937)];
var inst_77450 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(old_state);
var inst_77451 = p3r50na.apps.bookof5rinds.client.game.engine.player_event__GT_bullet.call(null,inst_77450,inst_77445);
var inst_77452 = ["bullet-fired",inst_77451];
var inst_77453 = cljs.core.PersistentHashMap.fromArrays(inst_77449,inst_77452);
var state_77497__$1 = state_77497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_77497__$1,(14),channel,inst_77453);
} else {
if((state_val_77498 === (9))){
var inst_77437 = (state_77497[(8)]);
var inst_77462 = (state_77497[(12)]);
var inst_77462__$1 = cljs.core.seq.call(null,inst_77437);
var state_77497__$1 = (function (){var statearr_77523 = state_77497;
(statearr_77523[(12)] = inst_77462__$1);

return statearr_77523;
})();
if(inst_77462__$1){
var statearr_77524_77559 = state_77497__$1;
(statearr_77524_77559[(1)] = (15));

} else {
var statearr_77525_77560 = state_77497__$1;
(statearr_77525_77560[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (5))){
var inst_77428 = (state_77497[(2)]);
var state_77497__$1 = state_77497;
var statearr_77526_77561 = state_77497__$1;
(statearr_77526_77561[(2)] = inst_77428);

(statearr_77526_77561[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (14))){
var inst_77455 = (state_77497[(2)]);
var state_77497__$1 = state_77497;
var statearr_77527_77562 = state_77497__$1;
(statearr_77527_77562[(2)] = inst_77455);

(statearr_77527_77562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (16))){
var state_77497__$1 = state_77497;
var statearr_77528_77563 = state_77497__$1;
(statearr_77528_77563[(2)] = null);

(statearr_77528_77563[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (10))){
var inst_77493 = (state_77497[(2)]);
var state_77497__$1 = state_77497;
var statearr_77529_77564 = state_77497__$1;
(statearr_77529_77564[(2)] = inst_77493);

(statearr_77529_77564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (18))){
var inst_77462 = (state_77497[(12)]);
var inst_77466 = cljs.core.chunk_first.call(null,inst_77462);
var inst_77467 = cljs.core.chunk_rest.call(null,inst_77462);
var inst_77468 = cljs.core.count.call(null,inst_77466);
var inst_77437 = inst_77467;
var inst_77438 = inst_77466;
var inst_77439 = inst_77468;
var inst_77440 = (0);
var state_77497__$1 = (function (){var statearr_77530 = state_77497;
(statearr_77530[(7)] = inst_77440);

(statearr_77530[(8)] = inst_77437);

(statearr_77530[(10)] = inst_77439);

(statearr_77530[(11)] = inst_77438);

return statearr_77530;
})();
var statearr_77531_77565 = state_77497__$1;
(statearr_77531_77565[(2)] = null);

(statearr_77531_77565[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_77498 === (8))){
var inst_77445 = (state_77497[(16)]);
var inst_77440 = (state_77497[(7)]);
var inst_77438 = (state_77497[(11)]);
var inst_77445__$1 = cljs.core._nth.call(null,inst_77438,inst_77440);
var inst_77446 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_77445__$1);
var inst_77447 = cljs.core._EQ_.call(null,inst_77446,"player-fired-bullet");
var state_77497__$1 = (function (){var statearr_77532 = state_77497;
(statearr_77532[(16)] = inst_77445__$1);

return statearr_77532;
})();
if(inst_77447){
var statearr_77533_77566 = state_77497__$1;
(statearr_77533_77566[(1)] = (11));

} else {
var statearr_77534_77567 = state_77497__$1;
(statearr_77534_77567[(1)] = (12));

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
});})(c__23302__auto__,oplayer,nplayer))
;
return ((function (switch__23281__auto__,c__23302__auto__,oplayer,nplayer){
return (function() {
var p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto__ = null;
var p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto____0 = (function (){
var statearr_77538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_77538[(0)] = p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto__);

(statearr_77538[(1)] = (1));

return statearr_77538;
});
var p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto____1 = (function (state_77497){
while(true){
var ret_value__23283__auto__ = (function (){try{while(true){
var result__23284__auto__ = switch__23281__auto__.call(null,state_77497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23284__auto__;
}
break;
}
}catch (e77539){if((e77539 instanceof Object)){
var ex__23285__auto__ = e77539;
var statearr_77540_77568 = state_77497;
(statearr_77540_77568[(5)] = ex__23285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_77497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e77539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__77569 = state_77497;
state_77497 = G__77569;
continue;
} else {
return ret_value__23283__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto__ = function(state_77497){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto____1.call(this,state_77497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto____0;
p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto____1;
return p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto__;
})()
;})(switch__23281__auto__,c__23302__auto__,oplayer,nplayer))
})();
var state__23304__auto__ = (function (){var statearr_77541 = f__23303__auto__.call(null);
(statearr_77541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23302__auto__);

return statearr_77541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23304__auto__);
});})(c__23302__auto__,oplayer,nplayer))
);

return c__23302__auto__;
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
var new_state__$2 = p3r50na.apps.bookof5rinds.client.game.engine.update_objects.call(null,new_state__$1);
p3r50na.apps.bookof5rinds.client.game.engine.send_updates_BANG_.call(null,update_channel,cljs.core.deref.call(null,old_state),new_state__$2,cljs.core.deref.call(null,events));

cljs.core.reset_BANG_.call(null,events,cljs.core.PersistentVector.EMPTY);

cljs.core.reset_BANG_.call(null,old_state,new_state__$2);

return new_state__$2;
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