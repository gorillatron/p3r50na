// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.game.engine');
goog.require('cljs.core');
goog.require('p3r50na.apps.bookof5rinds.client.game.maps.level1');
goog.require('p3r50na.apps.bookof5rinds.client.game.collision');
goog.require('om.dom');
goog.require('p3r50na.apps.bookof5rinds.client.game.map');
goog.require('quil.core');
goog.require('cljs.core.async');
goog.require('quil.middleware');
goog.require('om.core');
p3r50na.apps.bookof5rinds.client.game.engine.apply_controll = (function p3r50na$apps$bookof5rinds$client$game$engine$apply_controll(state){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state))){
return state;
} else {
var map__123953 = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var map__123953__$1 = ((((!((map__123953 == null)))?((((map__123953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__123953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__123953):map__123953);
var x = cljs.core.get.call(null,map__123953__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__123953__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var speed = cljs.core.get.call(null,map__123953__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var newstate = cljs.core.reduce.call(null,((function (map__123953,map__123953__$1,x,y,speed){
return (function (state__$1,controll){
var newstate = (function (){var G__123955 = (((controll instanceof cljs.core.Keyword))?controll.fqn:null);
switch (G__123955) {
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
if(cljs.core.truth_((function (){var or__19556__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(newstate),p3r50na.apps.bookof5rinds.client.game.map.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1)),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state__$1)));
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
});})(map__123953,map__123953__$1,x,y,speed))
,state,new cljs.core.Keyword(null,"controlls","controlls",-310267444).cljs$core$IFn$_invoke$arity$1(state));
return newstate;
}
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_location(bullet){
var map__123961 = bullet;
var map__123961__$1 = ((((!((map__123961 == null)))?((((map__123961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__123961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__123961):map__123961);
var speed = cljs.core.get.call(null,map__123961__$1,new cljs.core.Keyword(null,"speed","speed",1257663751));
var vec__123962 = cljs.core.get.call(null,map__123961__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var bx = cljs.core.nth.call(null,vec__123962,(0),null);
var by = cljs.core.nth.call(null,vec__123962,(1),null);
var lx = cljs.core.get.call(null,map__123961__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ly = cljs.core.get.call(null,map__123961__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__123963 = cljs.core.get.call(null,map__123961__$1,new cljs.core.Keyword(null,"goal","goal",-2073396501));
var gx = cljs.core.nth.call(null,vec__123963,(0),null);
var gy = cljs.core.nth.call(null,vec__123963,(1),null);
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
p3r50na.apps.bookof5rinds.client.game.engine.update_bullets = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullets(state){
return cljs.core.filter.call(null,(function (bullet){
return cljs.core.not.call(null,(function (){var or__19556__auto__ = p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_blocks_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.map.walls.call(null,new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"blocksize","blocksize",-1737805231).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(state)));
if(cljs.core.truth_(or__19556__auto__)){
return or__19556__auto__;
} else {
return p3r50na.apps.bookof5rinds.client.game.collision.rect_intersects_boundary_QMARK_.call(null,bullet,p3r50na.apps.bookof5rinds.client.game.maps.level1.level1);
}
})());
}),cljs.core.map.call(null,p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_location,new cljs.core.Keyword(null,"bullets","bullets",1734809024).cljs$core$IFn$_invoke$arity$1(state)));
});
p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_locations = (function p3r50na$apps$bookof5rinds$client$game$engine$update_bullet_locations(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"bullets","bullets",1734809024),p3r50na.apps.bookof5rinds.client.game.engine.update_bullets.call(null,state));
});
p3r50na.apps.bookof5rinds.client.game.engine.update_state = (function p3r50na$apps$bookof5rinds$client$game$engine$update_state(state){
var oldstate = state;
var newstate = p3r50na.apps.bookof5rinds.client.game.engine.apply_controll.call(null,p3r50na.apps.bookof5rinds.client.game.engine.update_bullet_locations.call(null,state));
return newstate;
});
p3r50na.apps.bookof5rinds.client.game.engine.create_loop = (function p3r50na$apps$bookof5rinds$client$game$engine$create_loop(state){
var render_chan = cljs.core.async.chan.call(null);
var controlls = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var c__23656__auto___124025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23656__auto___124025,render_chan,controlls){
return (function (){
var f__23657__auto__ = (function (){var switch__23591__auto__ = ((function (c__23656__auto___124025,render_chan,controlls){
return (function (state_124010){
var state_val_124011 = (state_124010[(1)]);
if((state_val_124011 === (1))){
var inst_123995 = state;
var state_124010__$1 = (function (){var statearr_124012 = state_124010;
(statearr_124012[(7)] = inst_123995);

return statearr_124012;
})();
var statearr_124013_124026 = state_124010__$1;
(statearr_124013_124026[(2)] = null);

(statearr_124013_124026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_124011 === (2))){
var inst_123999 = (state_124010[(8)]);
var inst_123995 = (state_124010[(7)]);
var inst_123997 = p3r50na.apps.bookof5rinds.client.game.engine.update_state.call(null,inst_123995);
var inst_123998 = cljs.core.deref.call(null,controlls);
var inst_123999__$1 = cljs.core.assoc.call(null,inst_123997,new cljs.core.Keyword(null,"controlls","controlls",-310267444),inst_123998);
var state_124010__$1 = (function (){var statearr_124014 = state_124010;
(statearr_124014[(8)] = inst_123999__$1);

return statearr_124014;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_124010__$1,(4),render_chan,inst_123999__$1);
} else {
if((state_val_124011 === (3))){
var inst_124008 = (state_124010[(2)]);
var state_124010__$1 = state_124010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_124010__$1,inst_124008);
} else {
if((state_val_124011 === (4))){
var inst_124001 = (state_124010[(2)]);
var inst_124002 = ((1000) / (60));
var inst_124003 = cljs.core.async.timeout.call(null,inst_124002);
var state_124010__$1 = (function (){var statearr_124015 = state_124010;
(statearr_124015[(9)] = inst_124001);

return statearr_124015;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_124010__$1,(5),inst_124003);
} else {
if((state_val_124011 === (5))){
var inst_123999 = (state_124010[(8)]);
var inst_124005 = (state_124010[(2)]);
var inst_123995 = inst_123999;
var state_124010__$1 = (function (){var statearr_124016 = state_124010;
(statearr_124016[(7)] = inst_123995);

(statearr_124016[(10)] = inst_124005);

return statearr_124016;
})();
var statearr_124017_124027 = state_124010__$1;
(statearr_124017_124027[(2)] = null);

(statearr_124017_124027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__23656__auto___124025,render_chan,controlls))
;
return ((function (switch__23591__auto__,c__23656__auto___124025,render_chan,controlls){
return (function() {
var p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__ = null;
var p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____0 = (function (){
var statearr_124021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_124021[(0)] = p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__);

(statearr_124021[(1)] = (1));

return statearr_124021;
});
var p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____1 = (function (state_124010){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_124010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e124022){if((e124022 instanceof Object)){
var ex__23595__auto__ = e124022;
var statearr_124023_124028 = state_124010;
(statearr_124023_124028[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_124010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e124022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__124029 = state_124010;
state_124010 = G__124029;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__ = function(state_124010){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____1.call(this,state_124010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$game$engine$create_loop_$_state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto___124025,render_chan,controlls))
})();
var state__23658__auto__ = (function (){var statearr_124024 = f__23657__auto__.call(null);
(statearr_124024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto___124025);

return statearr_124024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23658__auto__);
});})(c__23656__auto___124025,render_chan,controlls))
);


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render-chan","render-chan",667311808),render_chan,new cljs.core.Keyword(null,"controller","controller",2013778659),((function (render_chan,controlls){
return (function (mutator){
return cljs.core.reset_BANG_.call(null,controlls,mutator.call(null,cljs.core.deref.call(null,controlls)));
});})(render_chan,controlls))
], null);
});

//# sourceMappingURL=engine.js.map