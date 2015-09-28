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
var map__107772 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__107772__$1 = ((((!((map__107772 == null)))?((((map__107772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107772):map__107772);
var x = cljs.core.get.call(null,map__107772__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__107772__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__107772__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__107772,map__107772__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__107774 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__107774) {
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
});})(map__107772,map__107772__$1,x,y,speed))
,state,controlls);
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_location(bullet){
var map__107780 = bullet;
var map__107780__$1 = ((((!((map__107780 == null)))?((((map__107780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107780):map__107780);
var speed = cljs.core.get.call(null,map__107780__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__107781 = cljs.core.get.call(null,map__107780__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__107781,(0),null);
var by = cljs.core.nth.call(null,vec__107781,(1),null);
var lx = cljs.core.get.call(null,map__107780__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__107780__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__107782 = cljs.core.get.call(null,map__107780__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__107782,(0),null);
var gy = cljs.core.nth.call(null,vec__107782,(1),null);
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
var map__107788 = event;
var map__107788__$1 = ((((!((map__107788 == null)))?((((map__107788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107788):map__107788);
var mx = cljs.core.get.call(null,map__107788__$1,new cljs.core.Keyword(null,"mx","mx",-199887020));
var my = cljs.core.get.call(null,map__107788__$1,new cljs.core.Keyword(null,"my","my",-1055703269));
var map__107789 = player;
var map__107789__$1 = ((((!((map__107789 == null)))?((((map__107789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__107789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__107789):map__107789);
var px = cljs.core.get.call(null,map__107789__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__107789__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ps = cljs.core.get.call(null,map__107789__$1,new cljs.core.Keyword(null,"size","size",1098693007));
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
var G__107793 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(event);
switch (G__107793) {
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"player","player",-97687400),null,new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"hits-taken","hits-taken",2058952709),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"bullets","bullets",1734809024),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"remote-players","remote-players",1446934658),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"controlls","controlls",-310267444),cljs.core.PersistentHashSet.EMPTY], null),state);
});
p3r50na.apps.bookof5rinds.client.game.engine.send_updates_BANG_ = (function p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG_(channel,old_state,new_state,events){
var oplayer = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(old_state);
var nplayer = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(new_state);
var c__23302__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23302__auto__,oplayer,nplayer){
return (function (){
var f__23303__auto__ = (function (){var switch__23281__auto__ = ((function (c__23302__auto__,oplayer,nplayer){
return (function (state_107990){
var state_val_107991 = (state_107990[(1)]);
if((state_val_107991 === (7))){
var inst_107988 = (state_107990[(2)]);
var state_107990__$1 = state_107990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_107990__$1,inst_107988);
} else {
if((state_val_107991 === (20))){
var inst_107981 = (state_107990[(2)]);
var state_107990__$1 = state_107990;
var statearr_107992_108035 = state_107990__$1;
(statearr_107992_108035[(2)] = inst_107981);

(statearr_107992_108035[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (1))){
var inst_107915 = cljs.core.not_EQ_.call(null,oplayer,nplayer);
var state_107990__$1 = state_107990;
if(inst_107915){
var statearr_107993_108036 = state_107990__$1;
(statearr_107993_108036[(1)] = (2));

} else {
var statearr_107994_108037 = state_107990__$1;
(statearr_107994_108037[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (24))){
var inst_107974 = (state_107990[(2)]);
var state_107990__$1 = state_107990;
var statearr_107995_108038 = state_107990__$1;
(statearr_107995_108038[(2)] = inst_107974);

(statearr_107995_108038[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (4))){
var inst_107924 = (state_107990[(2)]);
var inst_107929 = cljs.core.seq.call(null,events);
var inst_107930 = inst_107929;
var inst_107931 = null;
var inst_107932 = (0);
var inst_107933 = (0);
var state_107990__$1 = (function (){var statearr_107996 = state_107990;
(statearr_107996[(7)] = inst_107931);

(statearr_107996[(8)] = inst_107924);

(statearr_107996[(9)] = inst_107932);

(statearr_107996[(10)] = inst_107933);

(statearr_107996[(11)] = inst_107930);

return statearr_107996;
})();
var statearr_107997_108039 = state_107990__$1;
(statearr_107997_108039[(2)] = null);

(statearr_107997_108039[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (15))){
var inst_107955 = (state_107990[(12)]);
var inst_107957 = cljs.core.chunked_seq_QMARK_.call(null,inst_107955);
var state_107990__$1 = state_107990;
if(inst_107957){
var statearr_108001_108040 = state_107990__$1;
(statearr_108001_108040[(1)] = (18));

} else {
var statearr_108002_108041 = state_107990__$1;
(statearr_108002_108041[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (21))){
var inst_107964 = (state_107990[(13)]);
var inst_107968 = [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"bullet","bullet",726988937)];
var inst_107969 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(old_state);
var inst_107970 = p3r50na.apps.bookof5rinds.client.game.engine.player_event__GT_bullet.call(null,inst_107969,inst_107964);
var inst_107971 = ["bullet-fired",inst_107970];
var inst_107972 = cljs.core.PersistentHashMap.fromArrays(inst_107968,inst_107971);
var state_107990__$1 = state_107990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_107990__$1,(24),channel,inst_107972);
} else {
if((state_val_107991 === (13))){
var inst_107931 = (state_107990[(7)]);
var inst_107932 = (state_107990[(9)]);
var inst_107933 = (state_107990[(10)]);
var inst_107930 = (state_107990[(11)]);
var inst_107951 = (state_107990[(2)]);
var inst_107952 = (inst_107933 + (1));
var tmp107998 = inst_107931;
var tmp107999 = inst_107932;
var tmp108000 = inst_107930;
var inst_107930__$1 = tmp108000;
var inst_107931__$1 = tmp107998;
var inst_107932__$1 = tmp107999;
var inst_107933__$1 = inst_107952;
var state_107990__$1 = (function (){var statearr_108003 = state_107990;
(statearr_108003[(7)] = inst_107931__$1);

(statearr_108003[(14)] = inst_107951);

(statearr_108003[(9)] = inst_107932__$1);

(statearr_108003[(10)] = inst_107933__$1);

(statearr_108003[(11)] = inst_107930__$1);

return statearr_108003;
})();
var statearr_108004_108042 = state_107990__$1;
(statearr_108004_108042[(2)] = null);

(statearr_108004_108042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (22))){
var state_107990__$1 = state_107990;
var statearr_108005_108043 = state_107990__$1;
(statearr_108005_108043[(2)] = null);

(statearr_108005_108043[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (6))){
var inst_107932 = (state_107990[(9)]);
var inst_107933 = (state_107990[(10)]);
var inst_107935 = (inst_107933 < inst_107932);
var inst_107936 = inst_107935;
var state_107990__$1 = state_107990;
if(cljs.core.truth_(inst_107936)){
var statearr_108006_108044 = state_107990__$1;
(statearr_108006_108044[(1)] = (8));

} else {
var statearr_108007_108045 = state_107990__$1;
(statearr_108007_108045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (17))){
var inst_107984 = (state_107990[(2)]);
var state_107990__$1 = state_107990;
var statearr_108008_108046 = state_107990__$1;
(statearr_108008_108046[(2)] = inst_107984);

(statearr_108008_108046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (3))){
var state_107990__$1 = state_107990;
var statearr_108009_108047 = state_107990__$1;
(statearr_108009_108047[(2)] = null);

(statearr_108009_108047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (12))){
var state_107990__$1 = state_107990;
var statearr_108010_108048 = state_107990__$1;
(statearr_108010_108048[(2)] = null);

(statearr_108010_108048[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (2))){
var inst_107917 = [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"player","player",-97687400)];
var inst_107918 = ["player-change",nplayer];
var inst_107919 = cljs.core.PersistentHashMap.fromArrays(inst_107917,inst_107918);
var state_107990__$1 = state_107990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_107990__$1,(5),channel,inst_107919);
} else {
if((state_val_107991 === (23))){
var inst_107955 = (state_107990[(12)]);
var inst_107977 = (state_107990[(2)]);
var inst_107978 = cljs.core.next.call(null,inst_107955);
var inst_107930 = inst_107978;
var inst_107931 = null;
var inst_107932 = (0);
var inst_107933 = (0);
var state_107990__$1 = (function (){var statearr_108011 = state_107990;
(statearr_108011[(7)] = inst_107931);

(statearr_108011[(15)] = inst_107977);

(statearr_108011[(9)] = inst_107932);

(statearr_108011[(10)] = inst_107933);

(statearr_108011[(11)] = inst_107930);

return statearr_108011;
})();
var statearr_108012_108049 = state_107990__$1;
(statearr_108012_108049[(2)] = null);

(statearr_108012_108049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (19))){
var inst_107964 = (state_107990[(13)]);
var inst_107955 = (state_107990[(12)]);
var inst_107964__$1 = cljs.core.first.call(null,inst_107955);
var inst_107965 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_107964__$1);
var inst_107966 = cljs.core._EQ_.call(null,inst_107965,"player-fired-bullet");
var state_107990__$1 = (function (){var statearr_108013 = state_107990;
(statearr_108013[(13)] = inst_107964__$1);

return statearr_108013;
})();
if(inst_107966){
var statearr_108014_108050 = state_107990__$1;
(statearr_108014_108050[(1)] = (21));

} else {
var statearr_108015_108051 = state_107990__$1;
(statearr_108015_108051[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (11))){
var inst_107938 = (state_107990[(16)]);
var inst_107942 = [new cljs.core.Keyword(null,"update","update",1045576396),new cljs.core.Keyword(null,"bullet","bullet",726988937)];
var inst_107943 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(old_state);
var inst_107944 = p3r50na.apps.bookof5rinds.client.game.engine.player_event__GT_bullet.call(null,inst_107943,inst_107938);
var inst_107945 = ["bullet-fired",inst_107944];
var inst_107946 = cljs.core.PersistentHashMap.fromArrays(inst_107942,inst_107945);
var state_107990__$1 = state_107990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_107990__$1,(14),channel,inst_107946);
} else {
if((state_val_107991 === (9))){
var inst_107955 = (state_107990[(12)]);
var inst_107930 = (state_107990[(11)]);
var inst_107955__$1 = cljs.core.seq.call(null,inst_107930);
var state_107990__$1 = (function (){var statearr_108016 = state_107990;
(statearr_108016[(12)] = inst_107955__$1);

return statearr_108016;
})();
if(inst_107955__$1){
var statearr_108017_108052 = state_107990__$1;
(statearr_108017_108052[(1)] = (15));

} else {
var statearr_108018_108053 = state_107990__$1;
(statearr_108018_108053[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (5))){
var inst_107921 = (state_107990[(2)]);
var state_107990__$1 = state_107990;
var statearr_108019_108054 = state_107990__$1;
(statearr_108019_108054[(2)] = inst_107921);

(statearr_108019_108054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (14))){
var inst_107948 = (state_107990[(2)]);
var state_107990__$1 = state_107990;
var statearr_108020_108055 = state_107990__$1;
(statearr_108020_108055[(2)] = inst_107948);

(statearr_108020_108055[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (16))){
var state_107990__$1 = state_107990;
var statearr_108021_108056 = state_107990__$1;
(statearr_108021_108056[(2)] = null);

(statearr_108021_108056[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (10))){
var inst_107986 = (state_107990[(2)]);
var state_107990__$1 = state_107990;
var statearr_108022_108057 = state_107990__$1;
(statearr_108022_108057[(2)] = inst_107986);

(statearr_108022_108057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (18))){
var inst_107955 = (state_107990[(12)]);
var inst_107959 = cljs.core.chunk_first.call(null,inst_107955);
var inst_107960 = cljs.core.chunk_rest.call(null,inst_107955);
var inst_107961 = cljs.core.count.call(null,inst_107959);
var inst_107930 = inst_107960;
var inst_107931 = inst_107959;
var inst_107932 = inst_107961;
var inst_107933 = (0);
var state_107990__$1 = (function (){var statearr_108023 = state_107990;
(statearr_108023[(7)] = inst_107931);

(statearr_108023[(9)] = inst_107932);

(statearr_108023[(10)] = inst_107933);

(statearr_108023[(11)] = inst_107930);

return statearr_108023;
})();
var statearr_108024_108058 = state_107990__$1;
(statearr_108024_108058[(2)] = null);

(statearr_108024_108058[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_107991 === (8))){
var inst_107931 = (state_107990[(7)]);
var inst_107938 = (state_107990[(16)]);
var inst_107933 = (state_107990[(10)]);
var inst_107938__$1 = cljs.core._nth.call(null,inst_107931,inst_107933);
var inst_107939 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(inst_107938__$1);
var inst_107940 = cljs.core._EQ_.call(null,inst_107939,"player-fired-bullet");
var state_107990__$1 = (function (){var statearr_108025 = state_107990;
(statearr_108025[(16)] = inst_107938__$1);

return statearr_108025;
})();
if(inst_107940){
var statearr_108026_108059 = state_107990__$1;
(statearr_108026_108059[(1)] = (11));

} else {
var statearr_108027_108060 = state_107990__$1;
(statearr_108027_108060[(1)] = (12));

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
var statearr_108031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_108031[(0)] = p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto__);

(statearr_108031[(1)] = (1));

return statearr_108031;
});
var p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto____1 = (function (state_107990){
while(true){
var ret_value__23283__auto__ = (function (){try{while(true){
var result__23284__auto__ = switch__23281__auto__.call(null,state_107990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23284__auto__;
}
break;
}
}catch (e108032){if((e108032 instanceof Object)){
var ex__23285__auto__ = e108032;
var statearr_108033_108061 = state_107990;
(statearr_108033_108061[(5)] = ex__23285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_107990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e108032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__108062 = state_107990;
state_107990 = G__108062;
continue;
} else {
return ret_value__23283__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto__ = function(state_107990){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto____1.call(this,state_107990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto____0;
p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto____1;
return p3r50na$apps$bookof5rinds$client$game$engine$send_updates_BANG__$_state_machine__23282__auto__;
})()
;})(switch__23281__auto__,c__23302__auto__,oplayer,nplayer))
})();
var state__23304__auto__ = (function (){var statearr_108034 = f__23303__auto__.call(null);
(statearr_108034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23302__auto__);

return statearr_108034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23304__auto__);
});})(c__23302__auto__,oplayer,nplayer))
);

return c__23302__auto__;
});
p3r50na.apps.bookof5rinds.client.game.engine.take_hits = (function p3r50na$apps$bookof5rinds$client$game$engine$take_hits(state){
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var remote_bullets = new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516).cljs$core$IFn$_invoke$arity$1(state);
var map__108065 = cljs.core.group_by.call(null,cljs.core.partial.call(null,p3r50na.apps.bookof5rinds.client.game.collision.intersects_QMARK_,player),remote_bullets);
var map__108065__$1 = ((((!((map__108065 == null)))?((((map__108065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__108065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__108065):map__108065);
var hits = cljs.core.get.call(null,map__108065__$1,false);
var misses = cljs.core.get.call(null,map__108065__$1,true);
return cljs.core.update.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"remote-bullets","remote-bullets",147368516),misses),new cljs.core.Keyword(null,"hits-taken","hits-taken",2058952709),cljs.core.concat,hits);
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
var new_state__$3 = p3r50na.apps.bookof5rinds.client.game.engine.take_hits.call(null,new_state__$2);
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