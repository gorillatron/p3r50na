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
var c__23303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23303__auto__,event){
return (function (){
var f__23304__auto__ = (function (){var switch__23282__auto__ = ((function (c__23303__auto__,event){
return (function (state_23841){
var state_val_23842 = (state_23841[(1)]);
if((state_val_23842 === (1))){
var state_23841__$1 = state_23841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23841__$1,(2),p3r50na.apps.bookof5rinds.client.core.comm,event);
} else {
if((state_val_23842 === (2))){
var inst_23839 = (state_23841[(2)]);
var state_23841__$1 = state_23841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23841__$1,inst_23839);
} else {
return null;
}
}
});})(c__23303__auto__,event))
;
return ((function (switch__23282__auto__,c__23303__auto__,event){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto____0 = (function (){
var statearr_23846 = [null,null,null,null,null,null,null];
(statearr_23846[(0)] = p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto__);

(statearr_23846[(1)] = (1));

return statearr_23846;
});
var p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto____1 = (function (state_23841){
while(true){
var ret_value__23284__auto__ = (function (){try{while(true){
var result__23285__auto__ = switch__23282__auto__.call(null,state_23841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23285__auto__;
}
break;
}
}catch (e23847){if((e23847 instanceof Object)){
var ex__23286__auto__ = e23847;
var statearr_23848_23850 = state_23841;
(statearr_23848_23850[(5)] = ex__23286__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23851 = state_23841;
state_23841 = G__23851;
continue;
} else {
return ret_value__23284__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto__ = function(state_23841){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto____1.call(this,state_23841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto____0;
p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto____1;
return p3r50na$apps$bookof5rinds$client$core$state_machine__23283__auto__;
})()
;})(switch__23282__auto__,c__23303__auto__,event))
})();
var state__23305__auto__ = (function (){var statearr_23849 = f__23304__auto__.call(null);
(statearr_23849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23303__auto__);

return statearr_23849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23305__auto__);
});})(c__23303__auto__,event))
);

return c__23303__auto__;
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
return React.DOM.ul(null,(function (){var iter__20309__auto__ = (function p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__23857(s__23858){
return (new cljs.core.LazySeq(null,(function (){
var s__23858__$1 = s__23858;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23858__$1);
if(temp__4425__auto__){
var s__23858__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23858__$2)){
var c__20307__auto__ = cljs.core.chunk_first.call(null,s__23858__$2);
var size__20308__auto__ = cljs.core.count.call(null,c__20307__auto__);
var b__23860 = cljs.core.chunk_buffer.call(null,size__20308__auto__);
if((function (){var i__23859 = (0);
while(true){
if((i__23859 < size__20308__auto__)){
var rindidate = cljs.core._nth.call(null,c__20307__auto__,i__23859);
cljs.core.chunk_append.call(null,b__23860,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (i__23859,rindidate,c__20307__auto__,size__20308__auto__,b__23860,s__23858__$2,temp__4425__auto__){
return (function (p1__23852_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__23852_SHARP_,rindidate);
});})(i__23859,rindidate,c__20307__auto__,size__20308__auto__,b__23860,s__23858__$2,temp__4425__auto__))
},"delete")));

var G__23861 = (i__23859 + (1));
i__23859 = G__23861;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23860),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__23857.call(null,cljs.core.chunk_rest.call(null,s__23858__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23860),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__23858__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate),React.DOM.button({"onClick": ((function (rindidate,s__23858__$2,temp__4425__auto__){
return (function (p1__23852_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.on_delete_rind_handler.call(null,p1__23852_SHARP_,rindidate);
});})(rindidate,s__23858__$2,temp__4425__auto__))
},"delete")),p3r50na$apps$bookof5rinds$client$core$rindidate_list_$_iter__23857.call(null,cljs.core.rest.call(null,s__23858__$2)));
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
if(typeof p3r50na.apps.bookof5rinds.client.core.t23896 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.core.t23896 = (function (app,state,owner,meta23897){
this.app = app;
this.state = state;
this.owner = owner;
this.meta23897 = meta23897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.core.t23896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23898,meta23897__$1){
var self__ = this;
var _23898__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.core.t23896(self__.app,self__.state,self__.owner,meta23897__$1));
});

p3r50na.apps.bookof5rinds.client.core.t23896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23898){
var self__ = this;
var _23898__$1 = this;
return self__.meta23897;
});

p3r50na.apps.bookof5rinds.client.core.t23896.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.core.t23896.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23303__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23303__auto__,___$1){
return (function (){
var f__23304__auto__ = (function (){var switch__23282__auto__ = ((function (c__23303__auto__,___$1){
return (function (state_23913){
var state_val_23914 = (state_23913[(1)]);
if((state_val_23914 === (1))){
var state_23913__$1 = state_23913;
var statearr_23915_23929 = state_23913__$1;
(statearr_23915_23929[(2)] = null);

(statearr_23915_23929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (2))){
var state_23913__$1 = state_23913;
var statearr_23916_23930 = state_23913__$1;
(statearr_23916_23930[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (3))){
var inst_23911 = (state_23913[(2)]);
var state_23913__$1 = state_23913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23913__$1,inst_23911);
} else {
if((state_val_23914 === (4))){
var state_23913__$1 = state_23913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23913__$1,(7),p3r50na.apps.bookof5rinds.client.core.comm);
} else {
if((state_val_23914 === (5))){
var state_23913__$1 = state_23913;
var statearr_23918_23931 = state_23913__$1;
(statearr_23918_23931[(2)] = null);

(statearr_23918_23931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (6))){
var inst_23909 = (state_23913[(2)]);
var state_23913__$1 = state_23913;
var statearr_23919_23932 = state_23913__$1;
(statearr_23919_23932[(2)] = inst_23909);

(statearr_23919_23932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23914 === (7))){
var inst_23902 = (state_23913[(2)]);
var inst_23903 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_23902);
var inst_23904 = (function (){var event = inst_23902;
var newstate = inst_23903;
return ((function (event,newstate,inst_23902,inst_23903,state_val_23914,c__23303__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_23902,inst_23903,state_val_23914,c__23303__auto__,___$1))
})();
var inst_23905 = om.core.update_state_BANG_.call(null,self__.owner,inst_23904);
var state_23913__$1 = (function (){var statearr_23920 = state_23913;
(statearr_23920[(7)] = inst_23905);

return statearr_23920;
})();
var statearr_23921_23933 = state_23913__$1;
(statearr_23921_23933[(2)] = null);

(statearr_23921_23933[(1)] = (2));


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
});})(c__23303__auto__,___$1))
;
return ((function (switch__23282__auto__,c__23303__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto__ = null;
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto____0 = (function (){
var statearr_23925 = [null,null,null,null,null,null,null,null];
(statearr_23925[(0)] = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto__);

(statearr_23925[(1)] = (1));

return statearr_23925;
});
var p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto____1 = (function (state_23913){
while(true){
var ret_value__23284__auto__ = (function (){try{while(true){
var result__23285__auto__ = switch__23282__auto__.call(null,state_23913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23285__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23285__auto__;
}
break;
}
}catch (e23926){if((e23926 instanceof Object)){
var ex__23286__auto__ = e23926;
var statearr_23927_23934 = state_23913;
(statearr_23927_23934[(5)] = ex__23286__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23284__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23935 = state_23913;
state_23913 = G__23935;
continue;
} else {
return ret_value__23284__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto__ = function(state_23913){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto____1.call(this,state_23913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto____0;
p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto____1;
return p3r50na$apps$bookof5rinds$client$core$app_$_state_machine__23283__auto__;
})()
;})(switch__23282__auto__,c__23303__auto__,___$1))
})();
var state__23305__auto__ = (function (){var statearr_23928 = f__23304__auto__.call(null);
(statearr_23928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23303__auto__);

return statearr_23928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23305__auto__);
});})(c__23303__auto__,___$1))
);

return c__23303__auto__;
});

p3r50na.apps.bookof5rinds.client.core.t23896.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.core.t23896.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__23862_SHARP_){
return p3r50na.apps.bookof5rinds.client.core.handle_new_rind_keydown.call(null,p1__23862_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.core.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)),om.core.build.call(null,p3r50na.apps.bookof5rinds.client.game.component.game_component,p3r50na.apps.bookof5rinds.client.core.socket));
});

p3r50na.apps.bookof5rinds.client.core.t23896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta23897","meta23897",1161213108,null)], null);
});

p3r50na.apps.bookof5rinds.client.core.t23896.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.core.t23896.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client.core/t23896";

p3r50na.apps.bookof5rinds.client.core.t23896.cljs$lang$ctorPrWriter = (function (this__20135__auto__,writer__20136__auto__,opt__20137__auto__){
return cljs.core._write.call(null,writer__20136__auto__,"p3r50na.apps.bookof5rinds.client.core/t23896");
});

p3r50na.apps.bookof5rinds.client.core.__GT_t23896 = (function p3r50na$apps$bookof5rinds$client$core$app_$___GT_t23896(app__$1,state__$1,owner__$1,meta23897){
return (new p3r50na.apps.bookof5rinds.client.core.t23896(app__$1,state__$1,owner__$1,meta23897));
});

}

return (new p3r50na.apps.bookof5rinds.client.core.t23896(p3r50na$apps$bookof5rinds$client$core$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.core.app,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map