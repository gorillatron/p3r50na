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
if(typeof p3r50na.apps.bookof5rinds.client.core.t115789 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t115789 = (function (app,state,owner,meta115790){
this.app = app;
this.state = state;
this.owner = owner;
this.meta115790 = meta115790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t115789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_115791,meta115790__$1){
var self__ = this;
var _115791__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t115789(self__.app,self__.state,self__.owner,meta115790__$1));
});

p3r50na.apps.bookof5rinds.client.core.t115789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_115791){
var self__ = this;
var _115791__$1 = this;
return self__.meta115790;
});

p3r50na.apps.bookof5rinds.client.core.t115789.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t115789.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23302__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23302__auto__,___$1){
return (function (){
var f__23303__auto__ = (function (){var switch__23281__auto__ = ((function (c__23302__auto__,___$1){
return (function (state_115806){
var state_val_115807 = (state_115806[(1)]);
if((state_val_115807 === (1))){
var state_115806__$1 = state_115806;
var statearr_115808_115822 = state_115806__$1;
(statearr_115808_115822[(2)] = null);

(statearr_115808_115822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115807 === (2))){
var state_115806__$1 = state_115806;
var statearr_115809_115823 = state_115806__$1;
(statearr_115809_115823[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115807 === (3))){
var inst_115804 = (state_115806[(2)]);
var state_115806__$1 = state_115806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_115806__$1,inst_115804);
} else {
if((state_val_115807 === (4))){
var state_115806__$1 = state_115806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_115806__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_115807 === (5))){
var state_115806__$1 = state_115806;
var statearr_115811_115824 = state_115806__$1;
(statearr_115811_115824[(2)] = null);

(statearr_115811_115824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115807 === (6))){
var inst_115802 = (state_115806[(2)]);
var state_115806__$1 = state_115806;
var statearr_115812_115825 = state_115806__$1;
(statearr_115812_115825[(2)] = inst_115802);

(statearr_115812_115825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_115807 === (7))){
var inst_115795 = (state_115806[(2)]);
var inst_115796 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_115795);
var inst_115797 = (function (){var event = inst_115795;
var newstate = inst_115796;
return ((function (event,newstate,inst_115795,inst_115796,state_val_115807,c__23302__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_115795,inst_115796,state_val_115807,c__23302__auto__,___$1))
})();
var inst_115798 = om.core.update_state_BANG_.call(null,self__.owner,inst_115797);
var state_115806__$1 = (function (){var statearr_115813 = state_115806;
(statearr_115813[(7)] = inst_115798);

return statearr_115813;
})();
var statearr_115814_115826 = state_115806__$1;
(statearr_115814_115826[(2)] = null);

(statearr_115814_115826[(1)] = (2));


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
var statearr_115818 = [null,null,null,null,null,null,null,null];
(statearr_115818[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__);

(statearr_115818[(1)] = (1));

return statearr_115818;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____1 = (function (state_115806){
while(true){
var ret_value__23283__auto__ = (function (){try{while(true){
var result__23284__auto__ = switch__23281__auto__.call(null,state_115806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23284__auto__;
}
break;
}
}catch (e115819){if((e115819 instanceof Object)){
var ex__23285__auto__ = e115819;
var statearr_115820_115827 = state_115806;
(statearr_115820_115827[(5)] = ex__23285__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_115806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e115819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23283__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__115828 = state_115806;
state_115806 = G__115828;
continue;
} else {
return ret_value__23283__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__ = function(state_115806){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____1.call(this,state_115806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23282__auto__;
})()
;})(switch__23281__auto__,c__23302__auto__,___$1))
})();
var state__23304__auto__ = (function (){var statearr_115821 = f__23303__auto__.call(null);
(statearr_115821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23302__auto__);

return statearr_115821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23304__auto__);
});})(c__23302__auto__,___$1))
);

return c__23302__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t115789.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t115789.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t115789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta115790","meta115790",-1695545924,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t115789.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t115789.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t115789";

p3r50na.apps.bookof5rinds.client.core.t115789.cljs$lang$ctorPrWriter = (function (this__20134__auto__,writer__20135__auto__,opt__20136__auto__){
return cljs.core._write.call(null,writer__20135__auto__,"p3r50na.apps.bookof5rinds.client.core/t115789");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t115789 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t115789(app__$1,state__$1,owner__$1,meta115790){
return (new p3r50na.apps.bookof5rinds.client.core.t115789(app__$1,state__$1,owner__$1,meta115790));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t115789(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map