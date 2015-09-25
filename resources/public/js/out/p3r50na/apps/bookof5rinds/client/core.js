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
if(typeof p3r50na.apps.bookof5rinds.client.core.t97022 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t97022 = (function (app,state,owner,meta97023){
this.app = app;
this.state = state;
this.owner = owner;
this.meta97023 = meta97023;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t97022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_97024,meta97023__$1){
var self__ = this;
var _97024__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t97022(self__.app,self__.state,self__.owner,meta97023__$1));
});

p3r50na.apps.bookof5rinds.client.core.t97022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_97024){
var self__ = this;
var _97024__$1 = this;
return self__.meta97023;
});

p3r50na.apps.bookof5rinds.client.core.t97022.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t97022.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23656__auto__,___$1){
return (function (){
var f__23657__auto__ = (function (){var switch__23591__auto__ = ((function (c__23656__auto__,___$1){
return (function (state_97039){
var state_val_97040 = (state_97039[(1)]);
if((state_val_97040 === (1))){
var state_97039__$1 = state_97039;
var statearr_97041_97055 = state_97039__$1;
(statearr_97041_97055[(2)] = null);

(statearr_97041_97055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97040 === (2))){
var state_97039__$1 = state_97039;
var statearr_97042_97056 = state_97039__$1;
(statearr_97042_97056[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97040 === (3))){
var inst_97037 = (state_97039[(2)]);
var state_97039__$1 = state_97039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_97039__$1,inst_97037);
} else {
if((state_val_97040 === (4))){
var state_97039__$1 = state_97039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_97039__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_97040 === (5))){
var state_97039__$1 = state_97039;
var statearr_97044_97057 = state_97039__$1;
(statearr_97044_97057[(2)] = null);

(statearr_97044_97057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97040 === (6))){
var inst_97035 = (state_97039[(2)]);
var state_97039__$1 = state_97039;
var statearr_97045_97058 = state_97039__$1;
(statearr_97045_97058[(2)] = inst_97035);

(statearr_97045_97058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_97040 === (7))){
var inst_97028 = (state_97039[(2)]);
var inst_97029 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_97028);
var inst_97030 = (function (){var event = inst_97028;
var newstate = inst_97029;
return ((function (event,newstate,inst_97028,inst_97029,state_val_97040,c__23656__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_97028,inst_97029,state_val_97040,c__23656__auto__,___$1))
})();
var inst_97031 = om.core.update_state_BANG_.call(null,self__.owner,inst_97030);
var state_97039__$1 = (function (){var statearr_97046 = state_97039;
(statearr_97046[(7)] = inst_97031);

return statearr_97046;
})();
var statearr_97047_97059 = state_97039__$1;
(statearr_97047_97059[(2)] = null);

(statearr_97047_97059[(1)] = (2));


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
});})(c__23656__auto__,___$1))
;
return ((function (switch__23591__auto__,c__23656__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0 = (function (){
var statearr_97051 = [null,null,null,null,null,null,null,null];
(statearr_97051[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__);

(statearr_97051[(1)] = (1));

return statearr_97051;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1 = (function (state_97039){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_97039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e97052){if((e97052 instanceof Object)){
var ex__23595__auto__ = e97052;
var statearr_97053_97060 = state_97039;
(statearr_97053_97060[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_97039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e97052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__97061 = state_97039;
state_97039 = G__97061;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__ = function(state_97039){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1.call(this,state_97039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto__,___$1))
})();
var state__23658__auto__ = (function (){var statearr_97054 = f__23657__auto__.call(null);
(statearr_97054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto__);

return statearr_97054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23658__auto__);
});})(c__23656__auto__,___$1))
);

return c__23656__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t97022.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t97022.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t97022.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta97023","meta97023",-1446074717,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t97022.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t97022.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t97022";

p3r50na.apps.bookof5rinds.client.core.t97022.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.core/t97022");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t97022 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t97022(app__$1,state__$1,owner__$1,meta97023){
return (new p3r50na.apps.bookof5rinds.client.core.t97022(app__$1,state__$1,owner__$1,meta97023));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t97022(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map