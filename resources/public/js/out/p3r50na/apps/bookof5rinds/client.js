// Compiled by ClojureScript 1.7.48 {}
goog.provide('p3r50na.apps.bookof5rinds.client');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
p3r50na.apps.bookof5rinds.client.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rindidates","rindidates",445830364),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"wat"], null)], null)], null));
p3r50na.apps.bookof5rinds.client.comm = cljs.core.async.chan.call(null);
p3r50na.apps.bookof5rinds.client.socket = (new WebSocket("ws://localhost:8080/book-of-5-rinds/ws"));
p3r50na.apps.bookof5rinds.client.rindidate_list = (function p3r50na$apps$bookof5rinds$client$rindidate_list(rindidates){
return React.DOM.ul(null,(function (){var iter__20291__auto__ = (function p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__35643(s__35644){
return (new cljs.core.LazySeq(null,(function (){
var s__35644__$1 = s__35644;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__35644__$1);
if(temp__4425__auto__){
var s__35644__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35644__$2)){
var c__20289__auto__ = cljs.core.chunk_first.call(null,s__35644__$2);
var size__20290__auto__ = cljs.core.count.call(null,c__20289__auto__);
var b__35646 = cljs.core.chunk_buffer.call(null,size__20290__auto__);
if((function (){var i__35645 = (0);
while(true){
if((i__35645 < size__20290__auto__)){
var rindidate = cljs.core._nth.call(null,c__20289__auto__,i__35645);
cljs.core.chunk_append.call(null,b__35646,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate)));

var G__35647 = (i__35645 + (1));
i__35645 = G__35647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35646),p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__35643.call(null,cljs.core.chunk_rest.call(null,s__35644__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35646),null);
}
} else {
var rindidate = cljs.core.first.call(null,s__35644__$2);
return cljs.core.cons.call(null,React.DOM.li(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(rindidate)),p3r50na$apps$bookof5rinds$client$rindidate_list_$_iter__35643.call(null,cljs.core.rest.call(null,s__35644__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__20291__auto__.call(null,rindidates);
})());
});
p3r50na.apps.bookof5rinds.client.handle_new_rind_keydown = (function p3r50na$apps$bookof5rinds$client$handle_new_rind_keydown(e,state,owner){
if((e.keyCode === (13))){
var name = e.target.value;
if(((4) > cljs.core.count.call(null,name))){
return alert("Rind name muyst be longer than 4 characters");
} else {
var new_rind = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
var message = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",-894540724),"create-rind",new cljs.core.Keyword(null,"data","data",-232669377),new_rind], null);
return p3r50na.apps.bookof5rinds.client.socket.send(JSON.stringify(cljs.core.clj__GT_js.call(null,message)));
}
} else {
return null;
}
});
p3r50na.apps.bookof5rinds.client.app = (function p3r50na$apps$bookof5rinds$client$app(state,owner){
if(typeof p3r50na.apps.bookof5rinds.client.t35683 !== 'undefined'){
} else {

/**
* @constructor
*/
p3r50na.apps.bookof5rinds.client.t35683 = (function (app,state,owner,meta35684){
this.app = app;
this.state = state;
this.owner = owner;
this.meta35684 = meta35684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
p3r50na.apps.bookof5rinds.client.t35683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35685,meta35684__$1){
var self__ = this;
var _35685__$1 = this;
return (new p3r50na.apps.bookof5rinds.client.t35683(self__.app,self__.state,self__.owner,meta35684__$1));
});

p3r50na.apps.bookof5rinds.client.t35683.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35685){
var self__ = this;
var _35685__$1 = this;
return self__.meta35684;
});

p3r50na.apps.bookof5rinds.client.t35683.prototype.om$core$IWillMount$ = true;

p3r50na.apps.bookof5rinds.client.t35683.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c__23602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23602__auto__,___$1){
return (function (){
var f__23603__auto__ = (function (){var switch__23537__auto__ = ((function (c__23602__auto__,___$1){
return (function (state_35701){
var state_val_35702 = (state_35701[(1)]);
if((state_val_35702 === (1))){
var state_35701__$1 = state_35701;
var statearr_35703_35717 = state_35701__$1;
(statearr_35703_35717[(2)] = null);

(statearr_35703_35717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35702 === (2))){
var state_35701__$1 = state_35701;
var statearr_35704_35718 = state_35701__$1;
(statearr_35704_35718[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35702 === (3))){
var inst_35699 = (state_35701[(2)]);
var state_35701__$1 = state_35701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35701__$1,inst_35699);
} else {
if((state_val_35702 === (4))){
var state_35701__$1 = state_35701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35701__$1,(7),p3r50na.apps.bookof5rinds.client.comm);
} else {
if((state_val_35702 === (5))){
var state_35701__$1 = state_35701;
var statearr_35706_35719 = state_35701__$1;
(statearr_35706_35719[(2)] = null);

(statearr_35706_35719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35702 === (6))){
var inst_35697 = (state_35701[(2)]);
var state_35701__$1 = state_35701;
var statearr_35707_35720 = state_35701__$1;
(statearr_35707_35720[(2)] = inst_35697);

(statearr_35707_35720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35702 === (7))){
var inst_35689 = (state_35701[(2)]);
var inst_35690 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(inst_35689);
var inst_35691 = console.log(inst_35690);
var inst_35692 = (function (){var event = inst_35689;
var newstate = inst_35690;
return ((function (event,newstate,inst_35689,inst_35690,inst_35691,state_val_35702,c__23602__auto__,___$1){
return (function (){
return newstate;
});
;})(event,newstate,inst_35689,inst_35690,inst_35691,state_val_35702,c__23602__auto__,___$1))
})();
var inst_35693 = om.core.update_state_BANG_.call(null,self__.owner,inst_35692);
var state_35701__$1 = (function (){var statearr_35708 = state_35701;
(statearr_35708[(7)] = inst_35691);

(statearr_35708[(8)] = inst_35693);

return statearr_35708;
})();
var statearr_35709_35721 = state_35701__$1;
(statearr_35709_35721[(2)] = null);

(statearr_35709_35721[(1)] = (2));


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
});})(c__23602__auto__,___$1))
;
return ((function (switch__23537__auto__,c__23602__auto__,___$1){
return (function() {
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__ = null;
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____0 = (function (){
var statearr_35713 = [null,null,null,null,null,null,null,null,null];
(statearr_35713[(0)] = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__);

(statearr_35713[(1)] = (1));

return statearr_35713;
});
var p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____1 = (function (state_35701){
while(true){
var ret_value__23539__auto__ = (function (){try{while(true){
var result__23540__auto__ = switch__23537__auto__.call(null,state_35701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23540__auto__;
}
break;
}
}catch (e35714){if((e35714 instanceof Object)){
var ex__23541__auto__ = e35714;
var statearr_35715_35722 = state_35701;
(statearr_35715_35722[(5)] = ex__23541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35723 = state_35701;
state_35701 = G__35723;
continue;
} else {
return ret_value__23539__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__ = function(state_35701){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____1.call(this,state_35701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____0;
p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto____1;
return p3r50na$apps$bookof5rinds$client$app_$_state_machine__23538__auto__;
})()
;})(switch__23537__auto__,c__23602__auto__,___$1))
})();
var state__23604__auto__ = (function (){var statearr_35716 = f__23603__auto__.call(null);
(statearr_35716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23602__auto__);

return statearr_35716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23604__auto__);
});})(c__23602__auto__,___$1))
);

return c__23602__auto__;
});

p3r50na.apps.bookof5rinds.client.t35683.prototype.om$core$IRenderState$ = true;

p3r50na.apps.bookof5rinds.client.t35683.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state__$1){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onKeyDown": ((function (this$__$1){
return (function (p1__35648_SHARP_){
return p3r50na.apps.bookof5rinds.client.handle_new_rind_keydown.call(null,p1__35648_SHARP_,state__$1,self__.owner);
});})(this$__$1))
}),p3r50na.apps.bookof5rinds.client.rindidate_list.call(null,new cljs.core.Keyword(null,"rindidates","rindidates",445830364).cljs$core$IFn$_invoke$arity$1(state__$1)));
});

p3r50na.apps.bookof5rinds.client.t35683.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta35684","meta35684",-628361989,null)], null);
});

p3r50na.apps.bookof5rinds.client.t35683.cljs$lang$type = true;

p3r50na.apps.bookof5rinds.client.t35683.cljs$lang$ctorStr = "p3r50na.apps.bookof5rinds.client/t35683";

p3r50na.apps.bookof5rinds.client.t35683.cljs$lang$ctorPrWriter = (function (this__20117__auto__,writer__20118__auto__,opt__20119__auto__){
return cljs.core._write.call(null,writer__20118__auto__,"p3r50na.apps.bookof5rinds.client/t35683");
});

p3r50na.apps.bookof5rinds.client.__GT_t35683 = (function p3r50na$apps$bookof5rinds$client$app_$___GT_t35683(app__$1,state__$1,owner__$1,meta35684){
return (new p3r50na.apps.bookof5rinds.client.t35683(app__$1,state__$1,owner__$1,meta35684));
});

}

return (new p3r50na.apps.bookof5rinds.client.t35683(p3r50na$apps$bookof5rinds$client$app,state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,p3r50na.apps.bookof5rinds.client.app,p3r50na.apps.bookof5rinds.client.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
p3r50na.apps.bookof5rinds.client.socket.onopen = (function (e){
return null;
});
p3r50na.apps.bookof5rinds.client.socket.onerror = (function (){
alert("error");

return console.log(arguments$);
});
p3r50na.apps.bookof5rinds.client.socket.onmessage = (function (e){
var event = cljs.core.js__GT_clj.call(null,JSON.parse(e.data),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var c__23602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23602__auto__,event){
return (function (){
var f__23603__auto__ = (function (){var switch__23537__auto__ = ((function (c__23602__auto__,event){
return (function (state_35727){
var state_val_35728 = (state_35727[(1)]);
if((state_val_35728 === (1))){
var state_35727__$1 = state_35727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35727__$1,(2),p3r50na.apps.bookof5rinds.client.comm,event);
} else {
if((state_val_35728 === (2))){
var inst_35725 = (state_35727[(2)]);
var state_35727__$1 = state_35727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35727__$1,inst_35725);
} else {
return null;
}
}
});})(c__23602__auto__,event))
;
return ((function (switch__23537__auto__,c__23602__auto__,event){
return (function() {
var p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__ = null;
var p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____0 = (function (){
var statearr_35732 = [null,null,null,null,null,null,null];
(statearr_35732[(0)] = p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__);

(statearr_35732[(1)] = (1));

return statearr_35732;
});
var p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____1 = (function (state_35727){
while(true){
var ret_value__23539__auto__ = (function (){try{while(true){
var result__23540__auto__ = switch__23537__auto__.call(null,state_35727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23540__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23540__auto__;
}
break;
}
}catch (e35733){if((e35733 instanceof Object)){
var ex__23541__auto__ = e35733;
var statearr_35734_35736 = state_35727;
(statearr_35734_35736[(5)] = ex__23541__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35737 = state_35727;
state_35727 = G__35737;
continue;
} else {
return ret_value__23539__auto__;
}
break;
}
});
p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__ = function(state_35727){
switch(arguments.length){
case 0:
return p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____0.call(this);
case 1:
return p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____1.call(this,state_35727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$0 = p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____0;
p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__.cljs$core$IFn$_invoke$arity$1 = p3r50na$apps$bookof5rinds$client$state_machine__23538__auto____1;
return p3r50na$apps$bookof5rinds$client$state_machine__23538__auto__;
})()
;})(switch__23537__auto__,c__23602__auto__,event))
})();
var state__23604__auto__ = (function (){var statearr_35735 = f__23603__auto__.call(null);
(statearr_35735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23602__auto__);

return statearr_35735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23604__auto__);
});})(c__23602__auto__,event))
);

return c__23602__auto__;
});

//# sourceMappingURL=client.js.map