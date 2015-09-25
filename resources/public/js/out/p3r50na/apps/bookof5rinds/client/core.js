// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('p3r50na.apps.bookof5rinds.client.game.component');
cljs.core.enable_console_print_BANG_.call(null);
p3r50na.apps.bookof5rinds.client.core.comm = cljs.core.async.chan.call(null);
p3r50na.apps.bookof5rinds.client.core.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
p3r50na.apps.bookof5rinds.client.core.socket.onopen = (function (e){
return null;
});
p3r50na.apps.bookof5rinds.client.core.socket.onerror = (function (){
alert("error");

return console.log(arguments$);
});
p3r50na.apps.bookof5rinds.client.core.socket.onmessage = (function (e){
var event = cljs.core.js__GT_clj.call(null,JSON.parse(e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var c__23656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23656__auto__,event){
return (function (){
var f__23657__auto__ = (function (){var switch__23591__auto__ = ((function (c__23656__auto__,event){
return (function (state_27488){
var state_val_27489 = (state_27488[(1)]);
if((state_val_27489 === (1))){
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27488__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_27489 === (2))){
var inst_27486 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27488__$1,inst_27486);
} else {
return null;
}
}
});})(c__23656__auto__,event))
;
return ((function (switch__23591__auto__,c__23656__auto__,event){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto____0 = (function (){
var statearr_27493 = [null,null,null,null,null,null,null];
(statearr_27493[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto__);

(statearr_27493[(1)] = (1));

return statearr_27493;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto____1 = (function (state_27488){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_27488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e27494){if((e27494 instanceof Object)){
var ex__23595__auto__ = e27494;
var statearr_27495_27497 = state_27488;
(statearr_27495_27497[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27498 = state_27488;
state_27488 = G__27498;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto__ = function(state_27488){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto____1.call(this,state_27488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto__,event))
})();
var state__23658__auto__ = (function (){var statearr_27496 = f__23657__auto__.call(null);
(statearr_27496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto__);

return statearr_27496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23658__auto__);
});})(c__23656__auto__,event))
);

return c__23656__auto__;
});
p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown = (function p3r50na$apps$bookof5rinds$client$core$handle_new_rind_keydown(e,state,owner){
if((e.keyCode === (13))){
var name = e.target.value;
if(((4) > cljs.core.count.call(null,name))){
return alert("Rind name muyst be longer than 4 characters");
} else {
var new_rind = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
var message = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"create-rind",new cljs.core.Keyword(null,"data","data",-232669377),new_rind], null);
return p3r50na.apps.bookof5rinds.client.core.socket.send(JSON.stringify(cljs.core.clj__GT_js.call(null,message)));
}
} else {
return null;
}
});
p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler = (function p3r50na$apps$bookof5rinds$client$core$on_delete_rind_handler(e,rindidate){
return p3r50na.apps.bookof5rinds.client.core.socket.send(JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"remove-rind",new cljs.core.Keyword(null,"data","data",-232669377),rindidate], null))));
});
p3r50na.apps.bookof5rinds.client.core.rindidate_list = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list(rindidates){
return React.DOM.ul(null,(function (){var iter__20309__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__27504(s__27505){
return (new cljs.core.LazySeq(null,(function (){
var s__27505__$1 = s__27505;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27505__$1);
if(temp__4425__auto__){
var s__27505__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27505__$2)){
var c__20307__auto__ = cljs.core.chunk_first.call(null,s__27505__$2);
var size__20308__auto__ = cljs.core.count.call(null,c__20307__auto__);
var b__27507 = cljs.core.chunk_buffer.call(null,size__20308__auto__);
if((function (){var i__27506 = (0);
while(true){
if((i__27506 < size__20308__auto__)){
var rindidate = cljs.core._nth.call(null,c__20307__auto__,i__27506);
cljs.core.chunk_append.call(null,b__27507,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__27506,rindidate,c__20307__auto__,size__20308__auto__,b__27507,s__27505__$2,temp__4425__auto__){
return (function (p1__27499_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__27499_SHARP_,rindidate);
});})(i__27506,rindidate,c__20307__auto__,size__20308__auto__,b__27507,s__27505__$2,temp__4425__auto__))
},"delete")));

var G__27508 = (i__27506 + (1));
i__27506 = G__27508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27507),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__27504.call(null,cljs.core.chunk_rest.call(null,s__27505__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27507),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__27505__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__27505__$2,temp__4425__auto__){
return (function (p1__27499_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__27499_SHARP_,rindidate);
});})(rindidate,s__27505__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__27504.call(null,cljs.core.rest.call(null,s__27505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20309__auto__.call(null,rindidates);
})());
});
p3r50na.apps.bookof5rinds.client.core.app = (function p3r50na$apps$bookof5rinds$client$core$app(state,owner){
if(typeof p3r50na.apps.bookof5rinds.client.core.t27543 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t27543 = (function (app,state,owner,meta27544){
this.app = app;
this.state = state;
this.owner = owner;
this.meta27544 = meta27544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t27543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27545,meta27544__$1){
var self__ = this;
var _27545__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t27543(self__.app,self__.state,self__.owner,meta27544__$1));
});

p3r50na.apps.bookof5rinds.client.core.t27543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27545){
var self__ = this;
var _27545__$1 = this;
return self__.meta27544;
});

p3r50na.apps.bookof5rinds.client.core.t27543.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t27543.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23656__auto__,___$1){
return (function (){
var f__23657__auto__ = (function (){var switch__23591__auto__ = ((function (c__23656__auto__,___$1){
return (function (state_27560){
var state_val_27561 = (state_27560[(1)]);
if((state_val_27561 === (1))){
var state_27560__$1 = state_27560;
var statearr_27562_27576 = state_27560__$1;
(statearr_27562_27576[(2)] = null);

(statearr_27562_27576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (2))){
var state_27560__$1 = state_27560;
var statearr_27563_27577 = state_27560__$1;
(statearr_27563_27577[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (3))){
var inst_27558 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27560__$1,inst_27558);
} else {
if((state_val_27561 === (4))){
var state_27560__$1 = state_27560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27560__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_27561 === (5))){
var state_27560__$1 = state_27560;
var statearr_27565_27578 = state_27560__$1;
(statearr_27565_27578[(2)] = null);

(statearr_27565_27578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (6))){
var inst_27556 = (state_27560[(2)]);
var state_27560__$1 = state_27560;
var statearr_27566_27579 = state_27560__$1;
(statearr_27566_27579[(2)] = inst_27556);

(statearr_27566_27579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27561 === (7))){
var inst_27549 = (state_27560[(2)]);
var inst_27550 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_27549);
var inst_27551 = (function (){var event = inst_27549;
var newstate = inst_27550;
return ((function (event,newstate,inst_27549,inst_27550,state_val_27561,c__23656__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_27549,inst_27550,state_val_27561,c__23656__auto__,___$1))
})();
var inst_27552 = om.core.update_state_BANG_.call(null,self__.owner,inst_27551);
var state_27560__$1 = (function (){var statearr_27567 = state_27560;
(statearr_27567[(7)] = inst_27552);

return statearr_27567;
})();
var statearr_27568_27580 = state_27560__$1;
(statearr_27568_27580[(2)] = null);

(statearr_27568_27580[(1)] = (2));


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
var statearr_27572 = [null,null,null,null,null,null,null,null];
(statearr_27572[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__);

(statearr_27572[(1)] = (1));

return statearr_27572;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1 = (function (state_27560){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_27560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e27573){if((e27573 instanceof Object)){
var ex__23595__auto__ = e27573;
var statearr_27574_27581 = state_27560;
(statearr_27574_27581[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27582 = state_27560;
state_27560 = G__27582;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__ = function(state_27560){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1.call(this,state_27560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto__,___$1))
})();
var state__23658__auto__ = (function (){var statearr_27575 = f__23657__auto__.call(null);
(statearr_27575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto__);

return statearr_27575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23658__auto__);
});})(c__23656__auto__,___$1))
);

return c__23656__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t27543.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t27543.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__27509_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__27509_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,p3r50na.apps.bookof5rinds.client.core.socket));
});

p3r50na.apps.bookof5rinds.client.core.t27543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta27544","meta27544",1342978798,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t27543.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t27543.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t27543";

p3r50na.apps.bookof5rinds.client.core.t27543.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.core/t27543");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t27543 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t27543(app__$1,state__$1,owner__$1,meta27544){
return (new p3r50na.apps.bookof5rinds.client.core.t27543(app__$1,state__$1,owner__$1,meta27544));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t27543(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map