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
var c__22664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22664__auto__,event){
return (function (){
var f__22665__auto__ = (function (){var switch__22643__auto__ = ((function (c__22664__auto__,event){
return (function (state_58364){
var state_val_58365 = (state_58364[(1)]);
if((state_val_58365 === (1))){
var state_58364__$1 = state_58364;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_58364__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_58365 === (2))){
var inst_58362 = (state_58364[(2)]);
var state_58364__$1 = state_58364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58364__$1,inst_58362);
} else {
return null;
}
}
});})(c__22664__auto__,event))
;
return ((function (switch__22643__auto__,c__22664__auto__,event){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto____0 = (function (){
var statearr_58369 = [null,null,null,null,null,null,null];
(statearr_58369[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto__);

(statearr_58369[(1)] = (1));

return statearr_58369;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto____1 = (function (state_58364){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_58364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e58370){if((e58370 instanceof Object)){
var ex__22647__auto__ = e58370;
var statearr_58371_58373 = state_58364;
(statearr_58371_58373[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58374 = state_58364;
state_58364 = G__58374;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto__ = function(state_58364){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto____1.call(this,state_58364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22664__auto__,event))
})();
var state__22666__auto__ = (function (){var statearr_58372 = f__22665__auto__.call(null);
(statearr_58372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22664__auto__);

return statearr_58372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22666__auto__);
});})(c__22664__auto__,event))
);

return c__22664__auto__;
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
return React.DOM.ul(null,(function (){var iter__20306__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__58380(s__58381){
return (new cljs.core.LazySeq(null,(function (){
var s__58381__$1 = s__58381;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__58381__$1);
if(temp__4425__auto__){
var s__58381__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__58381__$2)){
var c__20304__auto__ = cljs.core.chunk_first.call(null,s__58381__$2);
var size__20305__auto__ = cljs.core.count.call(null,c__20304__auto__);
var b__58383 = cljs.core.chunk_buffer.call(null,size__20305__auto__);
if((function (){var i__58382 = (0);
while(true){
if((i__58382 < size__20305__auto__)){
var rindidate = cljs.core._nth.call(null,c__20304__auto__,i__58382);
cljs.core.chunk_append.call(null,b__58383,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__58382,rindidate,c__20304__auto__,size__20305__auto__,b__58383,s__58381__$2,temp__4425__auto__){
return (function (p1__58375_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__58375_SHARP_,rindidate);
});})(i__58382,rindidate,c__20304__auto__,size__20305__auto__,b__58383,s__58381__$2,temp__4425__auto__))
},"delete")));

var G__58384 = (i__58382 + (1));
i__58382 = G__58384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58383),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__58380.call(null,cljs.core.chunk_rest.call(null,s__58381__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58383),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__58381__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__58381__$2,temp__4425__auto__){
return (function (p1__58375_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__58375_SHARP_,rindidate);
});})(rindidate,s__58381__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__58380.call(null,cljs.core.rest.call(null,s__58381__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20306__auto__.call(null,rindidates);
})());
});
p3r50na.apps.bookof5rinds.client.core.app = (function p3r50na$apps$bookof5rinds$client$core$app(state,owner){
if(typeof p3r50na.apps.bookof5rinds.client.core.t58419 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t58419 = (function (app,state,owner,meta58420){
this.app = app;
this.state = state;
this.owner = owner;
this.meta58420 = meta58420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t58419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58421,meta58420__$1){
var self__ = this;
var _58421__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t58419(self__.app,self__.state,self__.owner,meta58420__$1));
});

p3r50na.apps.bookof5rinds.client.core.t58419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58421){
var self__ = this;
var _58421__$1 = this;
return self__.meta58420;
});

p3r50na.apps.bookof5rinds.client.core.t58419.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t58419.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__22664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22664__auto__,___$1){
return (function (){
var f__22665__auto__ = (function (){var switch__22643__auto__ = ((function (c__22664__auto__,___$1){
return (function (state_58436){
var state_val_58437 = (state_58436[(1)]);
if((state_val_58437 === (1))){
var state_58436__$1 = state_58436;
var statearr_58438_58452 = state_58436__$1;
(statearr_58438_58452[(2)] = null);

(statearr_58438_58452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58437 === (2))){
var state_58436__$1 = state_58436;
var statearr_58439_58453 = state_58436__$1;
(statearr_58439_58453[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58437 === (3))){
var inst_58434 = (state_58436[(2)]);
var state_58436__$1 = state_58436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58436__$1,inst_58434);
} else {
if((state_val_58437 === (4))){
var state_58436__$1 = state_58436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58436__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_58437 === (5))){
var state_58436__$1 = state_58436;
var statearr_58441_58454 = state_58436__$1;
(statearr_58441_58454[(2)] = null);

(statearr_58441_58454[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58437 === (6))){
var inst_58432 = (state_58436[(2)]);
var state_58436__$1 = state_58436;
var statearr_58442_58455 = state_58436__$1;
(statearr_58442_58455[(2)] = inst_58432);

(statearr_58442_58455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58437 === (7))){
var inst_58425 = (state_58436[(2)]);
var inst_58426 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_58425);
var inst_58427 = (function (){var event = inst_58425;
var newstate = inst_58426;
return ((function (event,newstate,inst_58425,inst_58426,state_val_58437,c__22664__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_58425,inst_58426,state_val_58437,c__22664__auto__,___$1))
})();
var inst_58428 = om.core.update_state_BANG_.call(null,self__.owner,inst_58427);
var state_58436__$1 = (function (){var statearr_58443 = state_58436;
(statearr_58443[(7)] = inst_58428);

return statearr_58443;
})();
var statearr_58444_58456 = state_58436__$1;
(statearr_58444_58456[(2)] = null);

(statearr_58444_58456[(1)] = (2));


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
});})(c__22664__auto__,___$1))
;
return ((function (switch__22643__auto__,c__22664__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto____0 = (function (){
var statearr_58448 = [null,null,null,null,null,null,null,null];
(statearr_58448[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto__);

(statearr_58448[(1)] = (1));

return statearr_58448;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto____1 = (function (state_58436){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_58436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e58449){if((e58449 instanceof Object)){
var ex__22647__auto__ = e58449;
var statearr_58450_58457 = state_58436;
(statearr_58450_58457[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58458 = state_58436;
state_58436 = G__58458;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto__ = function(state_58436){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto____1.call(this,state_58436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22664__auto__,___$1))
})();
var state__22666__auto__ = (function (){var statearr_58451 = f__22665__auto__.call(null);
(statearr_58451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22664__auto__);

return statearr_58451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22666__auto__);
});})(c__22664__auto__,___$1))
);

return c__22664__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t58419.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t58419.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__58385_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__58385_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,p3r50na.apps.bookof5rinds.client.core.socket));
});

p3r50na.apps.bookof5rinds.client.core.t58419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta58420","meta58420",-445104496,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t58419.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t58419.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t58419";

p3r50na.apps.bookof5rinds.client.core.t58419.cljs$lang$ctorPrWriter = (function (this__20132__auto__,writer__20133__auto__,opt__20134__auto__){
return cljs.core._write.call(null,writer__20133__auto__,"p3r50na.apps.bookof5rinds.client.core/t58419");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t58419 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t58419(app__$1,state__$1,owner__$1,meta58420){
return (new p3r50na.apps.bookof5rinds.client.core.t58419(app__$1,state__$1,owner__$1,meta58420));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t58419(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map