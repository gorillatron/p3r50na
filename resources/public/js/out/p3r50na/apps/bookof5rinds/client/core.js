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
var c__22663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22663__auto__,event){
return (function (){
var f__22664__auto__ = (function (){var switch__22642__auto__ = ((function (c__22663__auto__,event){
return (function (state_70292){
var state_val_70293 = (state_70292[(1)]);
if((state_val_70293 === (1))){
var state_70292__$1 = state_70292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70292__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_70293 === (2))){
var inst_70290 = (state_70292[(2)]);
var state_70292__$1 = state_70292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70292__$1,inst_70290);
} else {
return null;
}
}
});})(c__22663__auto__,event))
;
return ((function (switch__22642__auto__,c__22663__auto__,event){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0 = (function (){
var statearr_70297 = [null,null,null,null,null,null,null];
(statearr_70297[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__);

(statearr_70297[(1)] = (1));

return statearr_70297;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1 = (function (state_70292){
while(true){
var ret_value__22644__auto__ = (function (){try{while(true){
var result__22645__auto__ = switch__22642__auto__.call(null,state_70292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22645__auto__;
}
break;
}
}catch (e70298){if((e70298 instanceof Object)){
var ex__22646__auto__ = e70298;
var statearr_70299_70301 = state_70292;
(statearr_70299_70301[(5)] = ex__22646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70302 = state_70292;
state_70292 = G__70302;
continue;
} else {
return ret_value__22644__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__ = function(state_70292){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1.call(this,state_70292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__;
})()
;})(switch__22642__auto__,c__22663__auto__,event))
})();
var state__22665__auto__ = (function (){var statearr_70300 = f__22664__auto__.call(null);
(statearr_70300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22663__auto__);

return statearr_70300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22665__auto__);
});})(c__22663__auto__,event))
);

return c__22663__auto__;
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
return React.DOM.ul(null,(function (){var iter__20305__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__70308(s__70309){
return (new cljs.core.LazySeq(null,(function (){
var s__70309__$1 = s__70309;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__70309__$1);
if(temp__4425__auto__){
var s__70309__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70309__$2)){
var c__20303__auto__ = cljs.core.chunk_first.call(null,s__70309__$2);
var size__20304__auto__ = cljs.core.count.call(null,c__20303__auto__);
var b__70311 = cljs.core.chunk_buffer.call(null,size__20304__auto__);
if((function (){var i__70310 = (0);
while(true){
if((i__70310 < size__20304__auto__)){
var rindidate = cljs.core._nth.call(null,c__20303__auto__,i__70310);
cljs.core.chunk_append.call(null,b__70311,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__70310,rindidate,c__20303__auto__,size__20304__auto__,b__70311,s__70309__$2,temp__4425__auto__){
return (function (p1__70303_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__70303_SHARP_,rindidate);
});})(i__70310,rindidate,c__20303__auto__,size__20304__auto__,b__70311,s__70309__$2,temp__4425__auto__))
},"delete")));

var G__70312 = (i__70310 + (1));
i__70310 = G__70312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70311),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__70308.call(null,cljs.core.chunk_rest.call(null,s__70309__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70311),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__70309__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__70309__$2,temp__4425__auto__){
return (function (p1__70303_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__70303_SHARP_,rindidate);
});})(rindidate,s__70309__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__70308.call(null,cljs.core.rest.call(null,s__70309__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20305__auto__.call(null,rindidates);
})());
});
p3r50na.apps.bookof5rinds.client.core.app = (function p3r50na$apps$bookof5rinds$client$core$app(state,owner){
if(typeof p3r50na.apps.bookof5rinds.client.core.t70347 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t70347 = (function (app,state,owner,meta70348){
this.app = app;
this.state = state;
this.owner = owner;
this.meta70348 = meta70348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t70347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70349,meta70348__$1){
var self__ = this;
var _70349__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t70347(self__.app,self__.state,self__.owner,meta70348__$1));
});

p3r50na.apps.bookof5rinds.client.core.t70347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70349){
var self__ = this;
var _70349__$1 = this;
return self__.meta70348;
});

p3r50na.apps.bookof5rinds.client.core.t70347.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t70347.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__22663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22663__auto__,___$1){
return (function (){
var f__22664__auto__ = (function (){var switch__22642__auto__ = ((function (c__22663__auto__,___$1){
return (function (state_70364){
var state_val_70365 = (state_70364[(1)]);
if((state_val_70365 === (1))){
var state_70364__$1 = state_70364;
var statearr_70366_70380 = state_70364__$1;
(statearr_70366_70380[(2)] = null);

(statearr_70366_70380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70365 === (2))){
var state_70364__$1 = state_70364;
var statearr_70367_70381 = state_70364__$1;
(statearr_70367_70381[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70365 === (3))){
var inst_70362 = (state_70364[(2)]);
var state_70364__$1 = state_70364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70364__$1,inst_70362);
} else {
if((state_val_70365 === (4))){
var state_70364__$1 = state_70364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70364__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_70365 === (5))){
var state_70364__$1 = state_70364;
var statearr_70369_70382 = state_70364__$1;
(statearr_70369_70382[(2)] = null);

(statearr_70369_70382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70365 === (6))){
var inst_70360 = (state_70364[(2)]);
var state_70364__$1 = state_70364;
var statearr_70370_70383 = state_70364__$1;
(statearr_70370_70383[(2)] = inst_70360);

(statearr_70370_70383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70365 === (7))){
var inst_70353 = (state_70364[(2)]);
var inst_70354 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_70353);
var inst_70355 = (function (){var event = inst_70353;
var newstate = inst_70354;
return ((function (event,newstate,inst_70353,inst_70354,state_val_70365,c__22663__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_70353,inst_70354,state_val_70365,c__22663__auto__,___$1))
})();
var inst_70356 = om.core.update_state_BANG_.call(null,self__.owner,inst_70355);
var state_70364__$1 = (function (){var statearr_70371 = state_70364;
(statearr_70371[(7)] = inst_70356);

return statearr_70371;
})();
var statearr_70372_70384 = state_70364__$1;
(statearr_70372_70384[(2)] = null);

(statearr_70372_70384[(1)] = (2));


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
});})(c__22663__auto__,___$1))
;
return ((function (switch__22642__auto__,c__22663__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0 = (function (){
var statearr_70376 = [null,null,null,null,null,null,null,null];
(statearr_70376[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__);

(statearr_70376[(1)] = (1));

return statearr_70376;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1 = (function (state_70364){
while(true){
var ret_value__22644__auto__ = (function (){try{while(true){
var result__22645__auto__ = switch__22642__auto__.call(null,state_70364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22645__auto__;
}
break;
}
}catch (e70377){if((e70377 instanceof Object)){
var ex__22646__auto__ = e70377;
var statearr_70378_70385 = state_70364;
(statearr_70378_70385[(5)] = ex__22646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70386 = state_70364;
state_70364 = G__70386;
continue;
} else {
return ret_value__22644__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__ = function(state_70364){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1.call(this,state_70364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__;
})()
;})(switch__22642__auto__,c__22663__auto__,___$1))
})();
var state__22665__auto__ = (function (){var statearr_70379 = f__22664__auto__.call(null);
(statearr_70379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22663__auto__);

return statearr_70379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22665__auto__);
});})(c__22663__auto__,___$1))
);

return c__22663__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t70347.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t70347.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__70313_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__70313_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t70347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta70348","meta70348",395012948,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t70347.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t70347.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t70347";

p3r50na.apps.bookof5rinds.client.core.t70347.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client.core/t70347");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t70347 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t70347(app__$1,state__$1,owner__$1,meta70348){
return (new p3r50na.apps.bookof5rinds.client.core.t70347(app__$1,state__$1,owner__$1,meta70348));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t70347(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map