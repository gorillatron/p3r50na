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
return (function (state_57998){
var state_val_57999 = (state_57998[(1)]);
if((state_val_57999 === (1))){
var state_57998__$1 = state_57998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_57998__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_57999 === (2))){
var inst_57996 = (state_57998[(2)]);
var state_57998__$1 = state_57998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57998__$1,inst_57996);
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
var statearr_58003 = [null,null,null,null,null,null,null];
(statearr_58003[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto__);

(statearr_58003[(1)] = (1));

return statearr_58003;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto____1 = (function (state_57998){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_57998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e58004){if((e58004 instanceof Object)){
var ex__22647__auto__ = e58004;
var statearr_58005_58007 = state_57998;
(statearr_58005_58007[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58008 = state_57998;
state_57998 = G__58008;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto__ = function(state_57998){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto____1.call(this,state_57998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22664__auto__,event))
})();
var state__22666__auto__ = (function (){var statearr_58006 = f__22665__auto__.call(null);
(statearr_58006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22664__auto__);

return statearr_58006;
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
return React.DOM.ul(null,(function (){var iter__20306__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__58014(s__58015){
return (new cljs.core.LazySeq(null,(function (){
var s__58015__$1 = s__58015;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__58015__$1);
if(temp__4425__auto__){
var s__58015__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__58015__$2)){
var c__20304__auto__ = cljs.core.chunk_first.call(null,s__58015__$2);
var size__20305__auto__ = cljs.core.count.call(null,c__20304__auto__);
var b__58017 = cljs.core.chunk_buffer.call(null,size__20305__auto__);
if((function (){var i__58016 = (0);
while(true){
if((i__58016 < size__20305__auto__)){
var rindidate = cljs.core._nth.call(null,c__20304__auto__,i__58016);
cljs.core.chunk_append.call(null,b__58017,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__58016,rindidate,c__20304__auto__,size__20305__auto__,b__58017,s__58015__$2,temp__4425__auto__){
return (function (p1__58009_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__58009_SHARP_,rindidate);
});})(i__58016,rindidate,c__20304__auto__,size__20305__auto__,b__58017,s__58015__$2,temp__4425__auto__))
},"delete")));

var G__58018 = (i__58016 + (1));
i__58016 = G__58018;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58017),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__58014.call(null,cljs.core.chunk_rest.call(null,s__58015__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58017),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__58015__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__58015__$2,temp__4425__auto__){
return (function (p1__58009_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__58009_SHARP_,rindidate);
});})(rindidate,s__58015__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__58014.call(null,cljs.core.rest.call(null,s__58015__$2)));
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
if(typeof p3r50na.apps.bookof5rinds.client.core.t58053 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t58053 = (function (app,state,owner,meta58054){
this.app = app;
this.state = state;
this.owner = owner;
this.meta58054 = meta58054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t58053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58055,meta58054__$1){
var self__ = this;
var _58055__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t58053(self__.app,self__.state,self__.owner,meta58054__$1));
});

p3r50na.apps.bookof5rinds.client.core.t58053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58055){
var self__ = this;
var _58055__$1 = this;
return self__.meta58054;
});

p3r50na.apps.bookof5rinds.client.core.t58053.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t58053.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__22664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22664__auto__,___$1){
return (function (){
var f__22665__auto__ = (function (){var switch__22643__auto__ = ((function (c__22664__auto__,___$1){
return (function (state_58070){
var state_val_58071 = (state_58070[(1)]);
if((state_val_58071 === (1))){
var state_58070__$1 = state_58070;
var statearr_58072_58086 = state_58070__$1;
(statearr_58072_58086[(2)] = null);

(statearr_58072_58086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (2))){
var state_58070__$1 = state_58070;
var statearr_58073_58087 = state_58070__$1;
(statearr_58073_58087[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (3))){
var inst_58068 = (state_58070[(2)]);
var state_58070__$1 = state_58070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58070__$1,inst_58068);
} else {
if((state_val_58071 === (4))){
var state_58070__$1 = state_58070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58070__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_58071 === (5))){
var state_58070__$1 = state_58070;
var statearr_58075_58088 = state_58070__$1;
(statearr_58075_58088[(2)] = null);

(statearr_58075_58088[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (6))){
var inst_58066 = (state_58070[(2)]);
var state_58070__$1 = state_58070;
var statearr_58076_58089 = state_58070__$1;
(statearr_58076_58089[(2)] = inst_58066);

(statearr_58076_58089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58071 === (7))){
var inst_58059 = (state_58070[(2)]);
var inst_58060 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_58059);
var inst_58061 = (function (){var event = inst_58059;
var newstate = inst_58060;
return ((function (event,newstate,inst_58059,inst_58060,state_val_58071,c__22664__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_58059,inst_58060,state_val_58071,c__22664__auto__,___$1))
})();
var inst_58062 = om.core.update_state_BANG_.call(null,self__.owner,inst_58061);
var state_58070__$1 = (function (){var statearr_58077 = state_58070;
(statearr_58077[(7)] = inst_58062);

return statearr_58077;
})();
var statearr_58078_58090 = state_58070__$1;
(statearr_58078_58090[(2)] = null);

(statearr_58078_58090[(1)] = (2));


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
var statearr_58082 = [null,null,null,null,null,null,null,null];
(statearr_58082[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto__);

(statearr_58082[(1)] = (1));

return statearr_58082;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto____1 = (function (state_58070){
while(true){
var ret_value__22645__auto__ = (function (){try{while(true){
var result__22646__auto__ = switch__22643__auto__.call(null,state_58070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22646__auto__;
}
break;
}
}catch (e58083){if((e58083 instanceof Object)){
var ex__22647__auto__ = e58083;
var statearr_58084_58091 = state_58070;
(statearr_58084_58091[(5)] = ex__22647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58092 = state_58070;
state_58070 = G__58092;
continue;
} else {
return ret_value__22645__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto__ = function(state_58070){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto____1.call(this,state_58070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__22644__auto__;
})()
;})(switch__22643__auto__,c__22664__auto__,___$1))
})();
var state__22666__auto__ = (function (){var statearr_58085 = f__22665__auto__.call(null);
(statearr_58085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22664__auto__);

return statearr_58085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22666__auto__);
});})(c__22664__auto__,___$1))
);

return c__22664__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t58053.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t58053.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__58019_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__58019_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,p3r50na.apps.bookof5rinds.client.core.socket));
});

p3r50na.apps.bookof5rinds.client.core.t58053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta58054","meta58054",62458993,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t58053.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t58053.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t58053";

p3r50na.apps.bookof5rinds.client.core.t58053.cljs$lang$ctorPrWriter = (function (this__20132__auto__,writer__20133__auto__,opt__20134__auto__){
return cljs.core._write.call(null,writer__20133__auto__,"p3r50na.apps.bookof5rinds.client.core/t58053");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t58053 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t58053(app__$1,state__$1,owner__$1,meta58054){
return (new p3r50na.apps.bookof5rinds.client.core.t58053(app__$1,state__$1,owner__$1,meta58054));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t58053(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map