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
return (function (state_67971){
var state_val_67972 = (state_67971[(1)]);
if((state_val_67972 === (1))){
var state_67971__$1 = state_67971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67971__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_67972 === (2))){
var inst_67969 = (state_67971[(2)]);
var state_67971__$1 = state_67971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67971__$1,inst_67969);
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
var statearr_67976 = [null,null,null,null,null,null,null];
(statearr_67976[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__);

(statearr_67976[(1)] = (1));

return statearr_67976;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1 = (function (state_67971){
while(true){
var ret_value__22644__auto__ = (function (){try{while(true){
var result__22645__auto__ = switch__22642__auto__.call(null,state_67971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22645__auto__;
}
break;
}
}catch (e67977){if((e67977 instanceof Object)){
var ex__22646__auto__ = e67977;
var statearr_67978_67980 = state_67971;
(statearr_67978_67980[(5)] = ex__22646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67981 = state_67971;
state_67971 = G__67981;
continue;
} else {
return ret_value__22644__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__ = function(state_67971){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1.call(this,state_67971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__22643__auto__;
})()
;})(switch__22642__auto__,c__22663__auto__,event))
})();
var state__22665__auto__ = (function (){var statearr_67979 = f__22664__auto__.call(null);
(statearr_67979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22663__auto__);

return statearr_67979;
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
return React.DOM.ul(null,(function (){var iter__20305__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__67987(s__67988){
return (new cljs.core.LazySeq(null,(function (){
var s__67988__$1 = s__67988;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__67988__$1);
if(temp__4425__auto__){
var s__67988__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__67988__$2)){
var c__20303__auto__ = cljs.core.chunk_first.call(null,s__67988__$2);
var size__20304__auto__ = cljs.core.count.call(null,c__20303__auto__);
var b__67990 = cljs.core.chunk_buffer.call(null,size__20304__auto__);
if((function (){var i__67989 = (0);
while(true){
if((i__67989 < size__20304__auto__)){
var rindidate = cljs.core._nth.call(null,c__20303__auto__,i__67989);
cljs.core.chunk_append.call(null,b__67990,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__67989,rindidate,c__20303__auto__,size__20304__auto__,b__67990,s__67988__$2,temp__4425__auto__){
return (function (p1__67982_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__67982_SHARP_,rindidate);
});})(i__67989,rindidate,c__20303__auto__,size__20304__auto__,b__67990,s__67988__$2,temp__4425__auto__))
},"delete")));

var G__67991 = (i__67989 + (1));
i__67989 = G__67991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67990),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__67987.call(null,cljs.core.chunk_rest.call(null,s__67988__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67990),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__67988__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__67988__$2,temp__4425__auto__){
return (function (p1__67982_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__67982_SHARP_,rindidate);
});})(rindidate,s__67988__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__67987.call(null,cljs.core.rest.call(null,s__67988__$2)));
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
if(typeof p3r50na.apps.bookof5rinds.client.core.t68026 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t68026 = (function (app,state,owner,meta68027){
this.app = app;
this.state = state;
this.owner = owner;
this.meta68027 = meta68027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t68026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68028,meta68027__$1){
var self__ = this;
var _68028__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t68026(self__.app,self__.state,self__.owner,meta68027__$1));
});

p3r50na.apps.bookof5rinds.client.core.t68026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68028){
var self__ = this;
var _68028__$1 = this;
return self__.meta68027;
});

p3r50na.apps.bookof5rinds.client.core.t68026.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t68026.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__22663__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22663__auto__,___$1){
return (function (){
var f__22664__auto__ = (function (){var switch__22642__auto__ = ((function (c__22663__auto__,___$1){
return (function (state_68043){
var state_val_68044 = (state_68043[(1)]);
if((state_val_68044 === (1))){
var state_68043__$1 = state_68043;
var statearr_68045_68059 = state_68043__$1;
(statearr_68045_68059[(2)] = null);

(statearr_68045_68059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68044 === (2))){
var state_68043__$1 = state_68043;
var statearr_68046_68060 = state_68043__$1;
(statearr_68046_68060[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68044 === (3))){
var inst_68041 = (state_68043[(2)]);
var state_68043__$1 = state_68043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68043__$1,inst_68041);
} else {
if((state_val_68044 === (4))){
var state_68043__$1 = state_68043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68043__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_68044 === (5))){
var state_68043__$1 = state_68043;
var statearr_68048_68061 = state_68043__$1;
(statearr_68048_68061[(2)] = null);

(statearr_68048_68061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68044 === (6))){
var inst_68039 = (state_68043[(2)]);
var state_68043__$1 = state_68043;
var statearr_68049_68062 = state_68043__$1;
(statearr_68049_68062[(2)] = inst_68039);

(statearr_68049_68062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68044 === (7))){
var inst_68032 = (state_68043[(2)]);
var inst_68033 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_68032);
var inst_68034 = (function (){var event = inst_68032;
var newstate = inst_68033;
return ((function (event,newstate,inst_68032,inst_68033,state_val_68044,c__22663__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_68032,inst_68033,state_val_68044,c__22663__auto__,___$1))
})();
var inst_68035 = om.core.update_state_BANG_.call(null,self__.owner,inst_68034);
var state_68043__$1 = (function (){var statearr_68050 = state_68043;
(statearr_68050[(7)] = inst_68035);

return statearr_68050;
})();
var statearr_68051_68063 = state_68043__$1;
(statearr_68051_68063[(2)] = null);

(statearr_68051_68063[(1)] = (2));


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
var statearr_68055 = [null,null,null,null,null,null,null,null];
(statearr_68055[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__);

(statearr_68055[(1)] = (1));

return statearr_68055;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1 = (function (state_68043){
while(true){
var ret_value__22644__auto__ = (function (){try{while(true){
var result__22645__auto__ = switch__22642__auto__.call(null,state_68043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22645__auto__;
}
break;
}
}catch (e68056){if((e68056 instanceof Object)){
var ex__22646__auto__ = e68056;
var statearr_68057_68064 = state_68043;
(statearr_68057_68064[(5)] = ex__22646__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22644__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68065 = state_68043;
state_68043 = G__68065;
continue;
} else {
return ret_value__22644__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__ = function(state_68043){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1.call(this,state_68043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22643__auto__;
})()
;})(switch__22642__auto__,c__22663__auto__,___$1))
})();
var state__22665__auto__ = (function (){var statearr_68058 = f__22664__auto__.call(null);
(statearr_68058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22663__auto__);

return statearr_68058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22665__auto__);
});})(c__22663__auto__,___$1))
);

return c__22663__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t68026.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t68026.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__67992_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__67992_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,null));
});

p3r50na.apps.bookof5rinds.client.core.t68026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta68027","meta68027",-450004208,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t68026.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t68026.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t68026";

p3r50na.apps.bookof5rinds.client.core.t68026.cljs$lang$ctorPrWriter = (function (this__20131__auto__,writer__20132__auto__,opt__20133__auto__){
return cljs.core._write.call(null,writer__20132__auto__,"p3r50na.apps.bookof5rinds.client.core/t68026");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t68026 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t68026(app__$1,state__$1,owner__$1,meta68027){
return (new p3r50na.apps.bookof5rinds.client.core.t68026(app__$1,state__$1,owner__$1,meta68027));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t68026(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map