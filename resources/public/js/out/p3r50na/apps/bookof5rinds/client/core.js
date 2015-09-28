// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('p3r50na.apps.bookof5rinds.client.game.component');
cljs.core.enable_console_print_BANG_.call(null);
p3r50na.apps.bookof5rinds.client.core.comm = cljs.core.async.chan.call(null);
p3r50na.apps.bookof5rinds.client.core.app = (function p3r50na$apps$bookof5rinds$client$core$app(state,owner){
if(typeof p3r50na.apps.bookof5rinds.client.core.t26291 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t26291 = (function (app,state,owner,meta26292){
this.app = app;
this.state = state;
this.owner = owner;
this.meta26292 = meta26292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t26291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26293,meta26292__$1){
var self__ = this;
var _26293__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t26291(self__.app,self__.state,self__.owner,meta26292__$1));
});

p3r50na.apps.bookof5rinds.client.core.t26291.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26293){
var self__ = this;
var _26293__$1 = this;
return self__.meta26292;
});

p3r50na.apps.bookof5rinds.client.core.t26291.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t26291.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23302__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23302__auto__,___$1){
return (function (){
var f__23303__auto__ = (function (){var switch__23281__auto__ = ((function (c__23302__auto__,___$1){
return (function (state_26308){
var state_val_26309 = (state_26308[(1)]);
if((state_val_26309 === (1))){
var state_26308__$1 = state_26308;
var statearr_26310_26324 = state_26308__$1;
(statearr_26310_26324[(2)] = null);

(statearr_26310_26324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (2))){
var state_26308__$1 = state_26308;
var statearr_26311_26325 = state_26308__$1;
(statearr_26311_26325[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (3))){
var inst_26306 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26308__$1,inst_26306);
} else {
if((state_val_26309 === (4))){
var state_26308__$1 = state_26308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26308__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_26309 === (5))){
var state_26308__$1 = state_26308;
var statearr_26313_26326 = state_26308__$1;
(statearr_26313_26326[(2)] = null);

(statearr_26313_26326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (6))){
var inst_26304 = (state_26308[(2)]);
var state_26308__$1 = state_26308;
var statearr_26314_26327 = state_26308__$1;
(statearr_26314_26327[(2)] = inst_26304);

(statearr_26314_26327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26309 === (7))){
var inst_26297 = (state_26308[(2)]);
var inst_26298 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_26297);
var inst_26299 = (function (){var event = inst_26297;
var newstate = inst_26298;
return ((function (event,newstate,inst_26297,inst_26298,state_val_26309,c__23302__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_26297,inst_26298,state_val_26309,c__23302__auto__,___$1))
})();
var inst_26300 = om.core.update_state_BANG_.call(null,self__.owner,inst_26299);
var state_26308__$1 = (function (){var statearr_26315 = state_26308;
(statearr_26315[(7)] = inst_26300);

return statearr_26315;
})();
var statearr_26316_26328 = state_26308__$1;
(statearr_26316_26328[(2)] = null);

(statearr_26316_26328[(1)] = (2));


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
});})(c__23302__auto__,___$1))
;
return ((function (switch__23281__auto__,c__23302__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____0 = (function (){
var statearr_26320 = [null,null,null,null,null,null,null,null];
(statearr_26320[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__);

(statearr_26320[(1)] = (1));

return statearr_26320;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____1 = (function (state_26308){
while(true){
var ret_value__23283__auto__ = (function (){try{while(true){
var result__23284__auto__ = switch__23281__auto__.call(null,state_26308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23284__auto__;
}
break;
}
}catch (e26321){if((e26321 instanceof Object)){
var ex__23285__auto__ = e26321;
var statearr_26322_26329 = state_26308;
(statearr_26322_26329[(5)] = ex__23285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26330 = state_26308;
state_26308 = G__26330;
continue;
} else {
return ret_value__23283__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__ = function(state_26308){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____1.call(this,state_26308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__;
})()
;})(switch__23281__auto__,c__23302__auto__,___$1))
})();
var state__23304__auto__ = (function (){var statearr_26323 = f__23303__auto__.call(null);
(statearr_26323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23302__auto__);

return statearr_26323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23304__auto__);
});})(c__23302__auto__,___$1))
);

return c__23302__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t26291.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t26291.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t26291.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta26292","meta26292",1266051460,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t26291.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t26291.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t26291";

p3r50na.apps.bookof5rinds.client.core.t26291.cljs$lang$ctorPrWriter = (function (this__20134__auto__,writer__20135__auto__,opt__20136__auto__){
return cljs.core._write.call(null,writer__20135__auto__,"p3r50na.apps.bookof5rinds.client.core/t26291");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t26291 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t26291(app__$1,state__$1,owner__$1,meta26292){
return (new p3r50na.apps.bookof5rinds.client.core.t26291(app__$1,state__$1,owner__$1,meta26292));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t26291(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map