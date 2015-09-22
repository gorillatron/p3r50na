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
var c__23616__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23616__auto__,event){
return (function (){
var f__23617__auto__ = (function (){var switch__23551__auto__ = ((function (c__23616__auto__,event){
return (function (state_39850){
var state_val_39851 = (state_39850[(1)]);
if((state_val_39851 === (1))){
var state_39850__$1 = state_39850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39850__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_39851 === (2))){
var inst_39848 = (state_39850[(2)]);
var state_39850__$1 = state_39850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39850__$1,inst_39848);
} else {
return null;
}
}
});})(c__23616__auto__,event))
;
return ((function (switch__23551__auto__,c__23616__auto__,event){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto____0 = (function (){
var statearr_39855 = [null,null,null,null,null,null,null];
(statearr_39855[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto__);

(statearr_39855[(1)] = (1));

return statearr_39855;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto____1 = (function (state_39850){
while(true){
var ret_value__23553__auto__ = (function (){try{while(true){
var result__23554__auto__ = switch__23551__auto__.call(null,state_39850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23554__auto__;
}
break;
}
}catch (e39856){if((e39856 instanceof Object)){
var ex__23555__auto__ = e39856;
var statearr_39857_39859 = state_39850;
(statearr_39857_39859[(5)] = ex__23555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39860 = state_39850;
state_39850 = G__39860;
continue;
} else {
return ret_value__23553__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto__ = function(state_39850){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto____1.call(this,state_39850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__23552__auto__;
})()
;})(switch__23551__auto__,c__23616__auto__,event))
})();
var state__23618__auto__ = (function (){var statearr_39858 = f__23617__auto__.call(null);
(statearr_39858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23616__auto__);

return statearr_39858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23618__auto__);
});})(c__23616__auto__,event))
);

return c__23616__auto__;
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
return React.DOM.ul(null,(function (){var iter__20306__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__39866(s__39867){
return (new cljs.core.LazySeq(null,(function (){
var s__39867__$1 = s__39867;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__39867__$1);
if(temp__4425__auto__){
var s__39867__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39867__$2)){
var c__20304__auto__ = cljs.core.chunk_first.call(null,s__39867__$2);
var size__20305__auto__ = cljs.core.count.call(null,c__20304__auto__);
var b__39869 = cljs.core.chunk_buffer.call(null,size__20305__auto__);
if((function (){var i__39868 = (0);
while(true){
if((i__39868 < size__20305__auto__)){
var rindidate = cljs.core._nth.call(null,c__20304__auto__,i__39868);
cljs.core.chunk_append.call(null,b__39869,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__39868,rindidate,c__20304__auto__,size__20305__auto__,b__39869,s__39867__$2,temp__4425__auto__){
return (function (p1__39861_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__39861_SHARP_,rindidate);
});})(i__39868,rindidate,c__20304__auto__,size__20305__auto__,b__39869,s__39867__$2,temp__4425__auto__))
},"delete")));

var G__39870 = (i__39868 + (1));
i__39868 = G__39870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39869),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__39866.call(null,cljs.core.chunk_rest.call(null,s__39867__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39869),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__39867__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__39867__$2,temp__4425__auto__){
return (function (p1__39861_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__39861_SHARP_,rindidate);
});})(rindidate,s__39867__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__39866.call(null,cljs.core.rest.call(null,s__39867__$2)));
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
if(typeof p3r50na.apps.bookof5rinds.client.core.t39905 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t39905 = (function (app,state,owner,meta39906){
this.app = app;
this.state = state;
this.owner = owner;
this.meta39906 = meta39906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t39905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39907,meta39906__$1){
var self__ = this;
var _39907__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t39905(self__.app,self__.state,self__.owner,meta39906__$1));
});

p3r50na.apps.bookof5rinds.client.core.t39905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39907){
var self__ = this;
var _39907__$1 = this;
return self__.meta39906;
});

p3r50na.apps.bookof5rinds.client.core.t39905.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t39905.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23616__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23616__auto__,___$1){
return (function (){
var f__23617__auto__ = (function (){var switch__23551__auto__ = ((function (c__23616__auto__,___$1){
return (function (state_39922){
var state_val_39923 = (state_39922[(1)]);
if((state_val_39923 === (1))){
var state_39922__$1 = state_39922;
var statearr_39924_39938 = state_39922__$1;
(statearr_39924_39938[(2)] = null);

(statearr_39924_39938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39923 === (2))){
var state_39922__$1 = state_39922;
var statearr_39925_39939 = state_39922__$1;
(statearr_39925_39939[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39923 === (3))){
var inst_39920 = (state_39922[(2)]);
var state_39922__$1 = state_39922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39922__$1,inst_39920);
} else {
if((state_val_39923 === (4))){
var state_39922__$1 = state_39922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39922__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_39923 === (5))){
var state_39922__$1 = state_39922;
var statearr_39927_39940 = state_39922__$1;
(statearr_39927_39940[(2)] = null);

(statearr_39927_39940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39923 === (6))){
var inst_39918 = (state_39922[(2)]);
var state_39922__$1 = state_39922;
var statearr_39928_39941 = state_39922__$1;
(statearr_39928_39941[(2)] = inst_39918);

(statearr_39928_39941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39923 === (7))){
var inst_39911 = (state_39922[(2)]);
var inst_39912 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_39911);
var inst_39913 = (function (){var event = inst_39911;
var newstate = inst_39912;
return ((function (event,newstate,inst_39911,inst_39912,state_val_39923,c__23616__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_39911,inst_39912,state_val_39923,c__23616__auto__,___$1))
})();
var inst_39914 = om.core.update_state_BANG_.call(null,self__.owner,inst_39913);
var state_39922__$1 = (function (){var statearr_39929 = state_39922;
(statearr_39929[(7)] = inst_39914);

return statearr_39929;
})();
var statearr_39930_39942 = state_39922__$1;
(statearr_39930_39942[(2)] = null);

(statearr_39930_39942[(1)] = (2));


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
});})(c__23616__auto__,___$1))
;
return ((function (switch__23551__auto__,c__23616__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto____0 = (function (){
var statearr_39934 = [null,null,null,null,null,null,null,null];
(statearr_39934[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto__);

(statearr_39934[(1)] = (1));

return statearr_39934;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto____1 = (function (state_39922){
while(true){
var ret_value__23553__auto__ = (function (){try{while(true){
var result__23554__auto__ = switch__23551__auto__.call(null,state_39922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23554__auto__;
}
break;
}
}catch (e39935){if((e39935 instanceof Object)){
var ex__23555__auto__ = e39935;
var statearr_39936_39943 = state_39922;
(statearr_39936_39943[(5)] = ex__23555__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39944 = state_39922;
state_39922 = G__39944;
continue;
} else {
return ret_value__23553__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto__ = function(state_39922){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto____1.call(this,state_39922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23552__auto__;
})()
;})(switch__23551__auto__,c__23616__auto__,___$1))
})();
var state__23618__auto__ = (function (){var statearr_39937 = f__23617__auto__.call(null);
(statearr_39937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23616__auto__);

return statearr_39937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23618__auto__);
});})(c__23616__auto__,___$1))
);

return c__23616__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t39905.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t39905.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__39871_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__39871_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,p3r50na.apps.bookof5rinds.client.core.socket));
});

p3r50na.apps.bookof5rinds.client.core.t39905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta39906","meta39906",1632292978,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t39905.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t39905.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t39905";

p3r50na.apps.bookof5rinds.client.core.t39905.cljs$lang$ctorPrWriter = (function (this__20132__auto__,writer__20133__auto__,opt__20134__auto__){
return cljs.core._write.call(null,writer__20133__auto__,"p3r50na.apps.bookof5rinds.client.core/t39905");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t39905 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t39905(app__$1,state__$1,owner__$1,meta39906){
return (new p3r50na.apps.bookof5rinds.client.core.t39905(app__$1,state__$1,owner__$1,meta39906));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t39905(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map