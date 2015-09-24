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
return (function (state_28995){
var state_val_28996 = (state_28995[(1)]);
if((state_val_28996 === (1))){
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28995__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_28996 === (2))){
var inst_28993 = (state_28995[(2)]);
var state_28995__$1 = state_28995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28995__$1,inst_28993);
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
var statearr_29000 = [null,null,null,null,null,null,null];
(statearr_29000[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto__);

(statearr_29000[(1)] = (1));

return statearr_29000;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto____1 = (function (state_28995){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_28995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e29001){if((e29001 instanceof Object)){
var ex__23595__auto__ = e29001;
var statearr_29002_29004 = state_28995;
(statearr_29002_29004[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29005 = state_28995;
state_28995 = G__29005;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto__ = function(state_28995){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto____1.call(this,state_28995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto__,event))
})();
var state__23658__auto__ = (function (){var statearr_29003 = f__23657__auto__.call(null);
(statearr_29003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto__);

return statearr_29003;
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
return React.DOM.ul(null,(function (){var iter__20309__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__29011(s__29012){
return (new cljs.core.LazySeq(null,(function (){
var s__29012__$1 = s__29012;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__29012__$1);
if(temp__4425__auto__){
var s__29012__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29012__$2)){
var c__20307__auto__ = cljs.core.chunk_first.call(null,s__29012__$2);
var size__20308__auto__ = cljs.core.count.call(null,c__20307__auto__);
var b__29014 = cljs.core.chunk_buffer.call(null,size__20308__auto__);
if((function (){var i__29013 = (0);
while(true){
if((i__29013 < size__20308__auto__)){
var rindidate = cljs.core._nth.call(null,c__20307__auto__,i__29013);
cljs.core.chunk_append.call(null,b__29014,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__29013,rindidate,c__20307__auto__,size__20308__auto__,b__29014,s__29012__$2,temp__4425__auto__){
return (function (p1__29006_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__29006_SHARP_,rindidate);
});})(i__29013,rindidate,c__20307__auto__,size__20308__auto__,b__29014,s__29012__$2,temp__4425__auto__))
},"delete")));

var G__29015 = (i__29013 + (1));
i__29013 = G__29015;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29014),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__29011.call(null,cljs.core.chunk_rest.call(null,s__29012__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29014),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__29012__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__29012__$2,temp__4425__auto__){
return (function (p1__29006_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__29006_SHARP_,rindidate);
});})(rindidate,s__29012__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__29011.call(null,cljs.core.rest.call(null,s__29012__$2)));
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
if(typeof p3r50na.apps.bookof5rinds.client.core.t29050 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t29050 = (function (app,state,owner,meta29051){
this.app = app;
this.state = state;
this.owner = owner;
this.meta29051 = meta29051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t29050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29052,meta29051__$1){
var self__ = this;
var _29052__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t29050(self__.app,self__.state,self__.owner,meta29051__$1));
});

p3r50na.apps.bookof5rinds.client.core.t29050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29052){
var self__ = this;
var _29052__$1 = this;
return self__.meta29051;
});

p3r50na.apps.bookof5rinds.client.core.t29050.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t29050.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23656__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23656__auto__,___$1){
return (function (){
var f__23657__auto__ = (function (){var switch__23591__auto__ = ((function (c__23656__auto__,___$1){
return (function (state_29067){
var state_val_29068 = (state_29067[(1)]);
if((state_val_29068 === (1))){
var state_29067__$1 = state_29067;
var statearr_29069_29083 = state_29067__$1;
(statearr_29069_29083[(2)] = null);

(statearr_29069_29083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (2))){
var state_29067__$1 = state_29067;
var statearr_29070_29084 = state_29067__$1;
(statearr_29070_29084[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (3))){
var inst_29065 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29067__$1,inst_29065);
} else {
if((state_val_29068 === (4))){
var state_29067__$1 = state_29067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29067__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_29068 === (5))){
var state_29067__$1 = state_29067;
var statearr_29072_29085 = state_29067__$1;
(statearr_29072_29085[(2)] = null);

(statearr_29072_29085[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (6))){
var inst_29063 = (state_29067[(2)]);
var state_29067__$1 = state_29067;
var statearr_29073_29086 = state_29067__$1;
(statearr_29073_29086[(2)] = inst_29063);

(statearr_29073_29086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29068 === (7))){
var inst_29056 = (state_29067[(2)]);
var inst_29057 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_29056);
var inst_29058 = (function (){var event = inst_29056;
var newstate = inst_29057;
return ((function (event,newstate,inst_29056,inst_29057,state_val_29068,c__23656__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_29056,inst_29057,state_val_29068,c__23656__auto__,___$1))
})();
var inst_29059 = om.core.update_state_BANG_.call(null,self__.owner,inst_29058);
var state_29067__$1 = (function (){var statearr_29074 = state_29067;
(statearr_29074[(7)] = inst_29059);

return statearr_29074;
})();
var statearr_29075_29087 = state_29067__$1;
(statearr_29075_29087[(2)] = null);

(statearr_29075_29087[(1)] = (2));


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
var statearr_29079 = [null,null,null,null,null,null,null,null];
(statearr_29079[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__);

(statearr_29079[(1)] = (1));

return statearr_29079;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1 = (function (state_29067){
while(true){
var ret_value__23593__auto__ = (function (){try{while(true){
var result__23594__auto__ = switch__23591__auto__.call(null,state_29067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23594__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23594__auto__;
}
break;
}
}catch (e29080){if((e29080 instanceof Object)){
var ex__23595__auto__ = e29080;
var statearr_29081_29088 = state_29067;
(statearr_29081_29088[(5)] = ex__23595__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23593__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29089 = state_29067;
state_29067 = G__29089;
continue;
} else {
return ret_value__23593__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__ = function(state_29067){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1.call(this,state_29067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23592__auto__;
})()
;})(switch__23591__auto__,c__23656__auto__,___$1))
})();
var state__23658__auto__ = (function (){var statearr_29082 = f__23657__auto__.call(null);
(statearr_29082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23656__auto__);

return statearr_29082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23658__auto__);
});})(c__23656__auto__,___$1))
);

return c__23656__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t29050.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t29050.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__29016_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__29016_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,p3r50na.apps.bookof5rinds.client.core.socket));
});

p3r50na.apps.bookof5rinds.client.core.t29050.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta29051","meta29051",1832081340,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t29050.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t29050.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t29050";

p3r50na.apps.bookof5rinds.client.core.t29050.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.core/t29050");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t29050 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t29050(app__$1,state__$1,owner__$1,meta29051){
return (new p3r50na.apps.bookof5rinds.client.core.t29050(app__$1,state__$1,owner__$1,meta29051));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t29050(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map