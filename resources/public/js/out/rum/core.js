// Compiled by ClojureScript 1.7.48 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('sablono.core');
var last_id_21919 = cljs.core.volatile_BANG_.call(null,(0));
rum.core.next_id = ((function (last_id_21919){
return (function rum$core$next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_21919,(cljs.core._deref.call(null,last_id_21919) + (1)));
});})(last_id_21919))
;
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.id = (function rum$core$id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.core.state.call(null,comp)));
});
rum.core.collect = (function rum$core$collect(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
rum.core.call_all = (function rum$core$call_all(){
var args__19974__auto__ = [];
var len__19967__auto___21923 = arguments.length;
var i__19968__auto___21924 = (0);
while(true){
if((i__19968__auto___21924 < len__19967__auto___21923)){
args__19974__auto__.push((arguments[i__19968__auto___21924]));

var G__21925 = (i__19968__auto___21924 + (1));
i__19968__auto___21924 = G__21925;
continue;
} else {
}
break;
}

var argseq__19975__auto__ = ((((2) < args__19974__auto__.length))?(new cljs.core.IndexedSeq(args__19974__auto__.slice((2)),(0))):null);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19975__auto__);
});

rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.core.call_all.cljs$lang$maxFixedArity = (2);

rum.core.call_all.cljs$lang$applyTo = (function (seq21920){
var G__21921 = cljs.core.first.call(null,seq21920);
var seq21920__$1 = cljs.core.next.call(null,seq21920);
var G__21922 = cljs.core.first.call(null,seq21920__$1);
var seq21920__$2 = cljs.core.next.call(null,seq21920__$1);
return rum.core.call_all.cljs$core$IFn$_invoke$arity$variadic(G__21921,G__21922,seq21920__$2);
});
rum.core.build_class = (function rum$core$build_class(classes,display_name){
if(cljs.core.sequential_QMARK_.call(null,classes)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.Symbol(null,"classes","classes",-616631259,null))))].join('')));
}

var init = rum.core.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.core.collect.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var will_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-update","will-update",328062998),classes);
var render = cljs.core.first.call(null,rum.core.collect.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render){
return (function (p1__21927_SHARP_,p2__21926_SHARP_){
return p2__21926_SHARP_.call(null,p1__21927_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render))
,render,rum.core.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var did_update = rum.core.collect.call(null,new cljs.core.Keyword(null,"did-update","did-update",-2143702256),classes);
var will_unmount = rum.core.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount){
return (function (props){
return rum.core.call_all.call(null,(props[":rum/initial-state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount))
;
var child_context_types = rum.core.collect.call(null,new cljs.core.Keyword(null,"child-context-types","child-context-types",1863743773),classes);
var child_context = rum.core.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),classes);
var context_types = rum.core.collect.call(null,new cljs.core.Keyword(null,"context-types","context-types",1252270646),classes);
return React.createClass({"componentDidUpdate": ((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "childContextTypes": ((cljs.core.empty_QMARK_.call(null,child_context_types))?null:cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.merge,child_context_types))), "displayName": display_name, "contextTypes": ((cljs.core.empty_QMARK_.call(null,context_types))?null:cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.merge,context_types))), "componentWillUnmount": ((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "componentWillReceiveProps": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__21929_SHARP_,p2__21928_SHARP_){
return p2__21928_SHARP_.call(null,old_state,p1__21929_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
,next_state,transfer_state);
return this$.setState({":rum/state": cljs.core.volatile_BANG_.call(null,next_state__$1)});
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "shouldComponentUpdate": ((cljs.core.empty_QMARK_.call(null,should_update))?cljs.core.constantly.call(null,true):((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__18928__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__21930_SHARP_){
return p1__21930_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
,should_update);
if(cljs.core.truth_(or__18928__auto__)){
return or__18928__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "render": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__21933 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__21933,(0),null);
var next_state = cljs.core.nth.call(null,vec__21933,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "getChildContext": ((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (p1__21931_SHARP_){
return p1__21931_SHARP_.call(null,state);
});})(state,this$,init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "componentWillUpdate": ((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.core.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "getInitialState": ((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.core.next_id.call(null)], null),props__GT_state.call(null,props));
return {":rum/state": cljs.core.volatile_BANG_.call(null,state)};
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
, "componentDidMount": ((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
), "componentWillMount": ((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.core.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,will_update,render,wrapped_render,did_update,will_unmount,props__GT_state,child_context_types,child_context,context_types))
)});
});
rum.core.schedule = (function (){var or__18928__auto__ = (function (){var and__18916__auto__ = typeof window !== 'undefined';
if(and__18916__auto__){
var or__18928__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__18928__auto__)){
return or__18928__auto__;
} else {
var or__18928__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__18928__auto____$1)){
return or__18928__auto____$1;
} else {
var or__18928__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__18928__auto____$2)){
return or__18928__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__18916__auto__;
}
})();
if(cljs.core.truth_(or__18928__auto__)){
return or__18928__auto__;
} else {
return ((function (or__18928__auto__){
return (function (p1__21934_SHARP_){
return setTimeout(p1__21934_SHARP_,(16));
});
;})(or__18928__auto__))
}
})();
rum.core.compare_by = (function rum$core$compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.core.empty_queue = cljs.core.sorted_set_by.call(null,rum.core.compare_by.call(null,rum.core.id));
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

var seq__21941 = cljs.core.seq.call(null,queue);
var chunk__21943 = null;
var count__21944 = (0);
var i__21945 = (0);
while(true){
if((i__21945 < count__21944)){
var comp = cljs.core._nth.call(null,chunk__21943,i__21945);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__21947 = seq__21941;
var G__21948 = chunk__21943;
var G__21949 = count__21944;
var G__21950 = (i__21945 + (1));
seq__21941 = G__21947;
chunk__21943 = G__21948;
count__21944 = G__21949;
i__21945 = G__21950;
continue;
} else {
var G__21951 = seq__21941;
var G__21952 = chunk__21943;
var G__21953 = count__21944;
var G__21954 = (i__21945 + (1));
seq__21941 = G__21951;
chunk__21943 = G__21952;
count__21944 = G__21953;
i__21945 = G__21954;
continue;
}
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21941);
if(temp__4425__auto__){
var seq__21941__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21941__$1)){
var c__19712__auto__ = cljs.core.chunk_first.call(null,seq__21941__$1);
var G__21955 = cljs.core.chunk_rest.call(null,seq__21941__$1);
var G__21956 = c__19712__auto__;
var G__21957 = cljs.core.count.call(null,c__19712__auto__);
var G__21958 = (0);
seq__21941 = G__21955;
chunk__21943 = G__21956;
count__21944 = G__21957;
i__21945 = G__21958;
continue;
} else {
var comp = cljs.core.first.call(null,seq__21941__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__21959 = cljs.core.next.call(null,seq__21941__$1);
var G__21960 = null;
var G__21961 = (0);
var G__21962 = (0);
seq__21941 = G__21959;
chunk__21943 = G__21960;
count__21944 = G__21961;
i__21945 = G__21962;
continue;
} else {
var G__21963 = cljs.core.next.call(null,seq__21941__$1);
var G__21964 = null;
var G__21965 = (0);
var G__21966 = (0);
seq__21941 = G__21963;
chunk__21943 = G__21964;
count__21944 = G__21965;
i__21945 = G__21966;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
rum.core.mount = (function rum$core$mount(component,node){
return React.render(component,node);
});
rum.core.render__GT_mixin = (function rum$core$render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_state__GT_mixin = (function rum$core$render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.render_comp__GT_mixin = (function rum$core$render_comp__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.core.args__GT_state = (function rum$core$args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
rum.core.element = (function rum$core$element(){
var args__19974__auto__ = [];
var len__19967__auto___21972 = arguments.length;
var i__19968__auto___21973 = (0);
while(true){
if((i__19968__auto___21973 < len__19967__auto___21972)){
args__19974__auto__.push((arguments[i__19968__auto___21973]));

var G__21974 = (i__19968__auto___21973 + (1));
i__19968__auto___21973 = G__21974;
continue;
} else {
}
break;
}

var argseq__19975__auto__ = ((((2) < args__19974__auto__.length))?(new cljs.core.IndexedSeq(args__19974__auto__.slice((2)),(0))):null);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19975__auto__);
});

rum.core.element.cljs$core$IFn$_invoke$arity$variadic = (function (class$,state,p__21970){
var vec__21971 = p__21970;
var props = cljs.core.nth.call(null,vec__21971,(0),null);
var props__$1 = (function (){var or__18928__auto__ = props;
if(cljs.core.truth_(or__18928__auto__)){
return or__18928__auto__;
} else {
return {};
}
})();
(props__$1[":rum/initial-state"] = state);

return React.createElement(class$,props__$1);
});

rum.core.element.cljs$lang$maxFixedArity = (2);

rum.core.element.cljs$lang$applyTo = (function (seq21967){
var G__21968 = cljs.core.first.call(null,seq21967);
var seq21967__$1 = cljs.core.next.call(null,seq21967);
var G__21969 = cljs.core.first.call(null,seq21967__$1);
var seq21967__$2 = cljs.core.next.call(null,seq21967__$1);
return rum.core.element.cljs$core$IFn$_invoke$arity$variadic(G__21968,G__21969,seq21967__$2);
});
rum.core.ctor__GT_class = (function rum$core$ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.core.with_key = (function rum$core$with_key(element,key){
return React.cloneElement(element,{"key": key},null);
});
rum.core.with_ref = (function rum$core$with_ref(element,ref){
return React.cloneElement(element,{"ref": ref},null);
});
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Adds an atom to component’s state that can be used as local state.
 * Atom is stored under key `:rum/local`.
 * Component will be automatically re-rendered if atom’s value changes
 */
rum.core.local = (function rum$core$local(){
var args__19974__auto__ = [];
var len__19967__auto___21979 = arguments.length;
var i__19968__auto___21980 = (0);
while(true){
if((i__19968__auto___21980 < len__19967__auto___21979)){
args__19974__auto__.push((arguments[i__19968__auto___21980]));

var G__21981 = (i__19968__auto___21980 + (1));
i__19968__auto___21980 = G__21981;
continue;
} else {
}
break;
}

var argseq__19975__auto__ = ((((1) < args__19974__auto__.length))?(new cljs.core.IndexedSeq(args__19974__auto__.slice((1)),(0))):null);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19975__auto__);
});

rum.core.local.cljs$core$IFn$_invoke$arity$variadic = (function (initial,p__21977){
var vec__21978 = p__21977;
var key = cljs.core.nth.call(null,vec__21978,(0),null);
var key__$1 = (function (){var or__18928__auto__ = key;
if(cljs.core.truth_(or__18928__auto__)){
return or__18928__auto__;
} else {
return new cljs.core.Keyword("rum","local","rum/local",-1497916586);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),((function (key__$1,vec__21978,key){
return (function (old,new$){
return cljs.core.assoc.call(null,new$,key__$1,old.call(null,key__$1));
});})(key__$1,vec__21978,key))
,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),((function (key__$1,vec__21978,key){
return (function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key__$1,((function (local_state,component,key__$1,vec__21978,key){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component,key__$1,vec__21978,key))
);

return cljs.core.assoc.call(null,state,key__$1,local_state);
});})(key__$1,vec__21978,key))
], null);
});

rum.core.local.cljs$lang$maxFixedArity = (1);

rum.core.local.cljs$lang$applyTo = (function (seq21975){
var G__21976 = cljs.core.first.call(null,seq21975);
var seq21975__$1 = cljs.core.next.call(null,seq21975);
return rum.core.local.cljs$core$IFn$_invoke$arity$variadic(G__21976,seq21975__$1);
});
rum.core.reactive_key = (function rum$core$reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_21982 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__21983 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__21983,(0),null);
var next_state = cljs.core.nth.call(null,vec__21983,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = rum.core.reactive_key.call(null,state);
var seq__21984_21996 = cljs.core.seq.call(null,old_reactions);
var chunk__21985_21997 = null;
var count__21986_21998 = (0);
var i__21987_21999 = (0);
while(true){
if((i__21987_21999 < count__21986_21998)){
var ref_22000 = cljs.core._nth.call(null,chunk__21985_21997,i__21987_21999);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_22000)){
} else {
cljs.core.remove_watch.call(null,ref_22000,key);
}

var G__22001 = seq__21984_21996;
var G__22002 = chunk__21985_21997;
var G__22003 = count__21986_21998;
var G__22004 = (i__21987_21999 + (1));
seq__21984_21996 = G__22001;
chunk__21985_21997 = G__22002;
count__21986_21998 = G__22003;
i__21987_21999 = G__22004;
continue;
} else {
var temp__4425__auto___22005 = cljs.core.seq.call(null,seq__21984_21996);
if(temp__4425__auto___22005){
var seq__21984_22006__$1 = temp__4425__auto___22005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21984_22006__$1)){
var c__19712__auto___22007 = cljs.core.chunk_first.call(null,seq__21984_22006__$1);
var G__22008 = cljs.core.chunk_rest.call(null,seq__21984_22006__$1);
var G__22009 = c__19712__auto___22007;
var G__22010 = cljs.core.count.call(null,c__19712__auto___22007);
var G__22011 = (0);
seq__21984_21996 = G__22008;
chunk__21985_21997 = G__22009;
count__21986_21998 = G__22010;
i__21987_21999 = G__22011;
continue;
} else {
var ref_22012 = cljs.core.first.call(null,seq__21984_22006__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_22012)){
} else {
cljs.core.remove_watch.call(null,ref_22012,key);
}

var G__22013 = cljs.core.next.call(null,seq__21984_22006__$1);
var G__22014 = null;
var G__22015 = (0);
var G__22016 = (0);
seq__21984_21996 = G__22013;
chunk__21985_21997 = G__22014;
count__21986_21998 = G__22015;
i__21987_21999 = G__22016;
continue;
}
} else {
}
}
break;
}

var seq__21988_22017 = cljs.core.seq.call(null,new_reactions);
var chunk__21989_22018 = null;
var count__21990_22019 = (0);
var i__21991_22020 = (0);
while(true){
if((i__21991_22020 < count__21990_22019)){
var ref_22021 = cljs.core._nth.call(null,chunk__21989_22018,i__21991_22020);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_22021)){
} else {
cljs.core.add_watch.call(null,ref_22021,key,((function (seq__21988_22017,chunk__21989_22018,count__21990_22019,i__21991_22020,ref_22021,comp,old_reactions,vec__21983,dom,next_state,new_reactions,key,_STAR_reactions_STAR_21982){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__21988_22017,chunk__21989_22018,count__21990_22019,i__21991_22020,ref_22021,comp,old_reactions,vec__21983,dom,next_state,new_reactions,key,_STAR_reactions_STAR_21982))
);
}

var G__22022 = seq__21988_22017;
var G__22023 = chunk__21989_22018;
var G__22024 = count__21990_22019;
var G__22025 = (i__21991_22020 + (1));
seq__21988_22017 = G__22022;
chunk__21989_22018 = G__22023;
count__21990_22019 = G__22024;
i__21991_22020 = G__22025;
continue;
} else {
var temp__4425__auto___22026 = cljs.core.seq.call(null,seq__21988_22017);
if(temp__4425__auto___22026){
var seq__21988_22027__$1 = temp__4425__auto___22026;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21988_22027__$1)){
var c__19712__auto___22028 = cljs.core.chunk_first.call(null,seq__21988_22027__$1);
var G__22029 = cljs.core.chunk_rest.call(null,seq__21988_22027__$1);
var G__22030 = c__19712__auto___22028;
var G__22031 = cljs.core.count.call(null,c__19712__auto___22028);
var G__22032 = (0);
seq__21988_22017 = G__22029;
chunk__21989_22018 = G__22030;
count__21990_22019 = G__22031;
i__21991_22020 = G__22032;
continue;
} else {
var ref_22033 = cljs.core.first.call(null,seq__21988_22027__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_22033)){
} else {
cljs.core.add_watch.call(null,ref_22033,key,((function (seq__21988_22017,chunk__21989_22018,count__21990_22019,i__21991_22020,ref_22033,seq__21988_22027__$1,temp__4425__auto___22026,comp,old_reactions,vec__21983,dom,next_state,new_reactions,key,_STAR_reactions_STAR_21982){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__21988_22017,chunk__21989_22018,count__21990_22019,i__21991_22020,ref_22033,seq__21988_22027__$1,temp__4425__auto___22026,comp,old_reactions,vec__21983,dom,next_state,new_reactions,key,_STAR_reactions_STAR_21982))
);
}

var G__22034 = cljs.core.next.call(null,seq__21988_22027__$1);
var G__22035 = null;
var G__22036 = (0);
var G__22037 = (0);
seq__21988_22017 = G__22034;
chunk__21989_22018 = G__22035;
count__21990_22019 = G__22036;
i__21991_22020 = G__22037;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_21982;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_22038 = rum.core.reactive_key.call(null,state);
var seq__21992_22039 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__21993_22040 = null;
var count__21994_22041 = (0);
var i__21995_22042 = (0);
while(true){
if((i__21995_22042 < count__21994_22041)){
var ref_22043 = cljs.core._nth.call(null,chunk__21993_22040,i__21995_22042);
cljs.core.remove_watch.call(null,ref_22043,key_22038);

var G__22044 = seq__21992_22039;
var G__22045 = chunk__21993_22040;
var G__22046 = count__21994_22041;
var G__22047 = (i__21995_22042 + (1));
seq__21992_22039 = G__22044;
chunk__21993_22040 = G__22045;
count__21994_22041 = G__22046;
i__21995_22042 = G__22047;
continue;
} else {
var temp__4425__auto___22048 = cljs.core.seq.call(null,seq__21992_22039);
if(temp__4425__auto___22048){
var seq__21992_22049__$1 = temp__4425__auto___22048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21992_22049__$1)){
var c__19712__auto___22050 = cljs.core.chunk_first.call(null,seq__21992_22049__$1);
var G__22051 = cljs.core.chunk_rest.call(null,seq__21992_22049__$1);
var G__22052 = c__19712__auto___22050;
var G__22053 = cljs.core.count.call(null,c__19712__auto___22050);
var G__22054 = (0);
seq__21992_22039 = G__22051;
chunk__21993_22040 = G__22052;
count__21994_22041 = G__22053;
i__21995_22042 = G__22054;
continue;
} else {
var ref_22055 = cljs.core.first.call(null,seq__21992_22049__$1);
cljs.core.remove_watch.call(null,ref_22055,key_22038);

var G__22056 = cljs.core.next.call(null,seq__21992_22049__$1);
var G__22057 = null;
var G__22058 = (0);
var G__22059 = (0);
seq__21992_22039 = G__22056;
chunk__21993_22040 = G__22057;
count__21994_22041 = G__22058;
i__21995_22042 = G__22059;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.core.react = (function rum$core$react(ref){
cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});

/**
* @constructor
*/
rum.core.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
})
rum.core.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.core.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.core.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = self__.getter.call(null,oldp);
var new$ = self__.getter.call(null,newp);
if(cljs.core.not_EQ_.call(null,old,new$)){
return f.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.core.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.core.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.core.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.core.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.core.LensCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

rum.core.LensCursor.cljs$lang$type = true;

rum.core.LensCursor.cljs$lang$ctorStr = "rum.core/LensCursor";

rum.core.LensCursor.cljs$lang$ctorPrWriter = (function (this__19507__auto__,writer__19508__auto__,opt__19509__auto__){
return cljs.core._write.call(null,writer__19508__auto__,"rum.core/LensCursor");
});

rum.core.__GT_LensCursor = (function rum$core$__GT_LensCursor(parent,getter,setter){
return (new rum.core.LensCursor(parent,getter,setter));
});

rum.core.cursor = (function rum$core$cursor(ref,path){
var getter = (function (p1__22060_SHARP_){
return cljs.core.get_in.call(null,p1__22060_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__22061_SHARP_,p2__22062_SHARP_){
return cljs.core.assoc_in.call(null,p1__22061_SHARP_,path,p2__22062_SHARP_);
});})(getter))
;
if((ref instanceof rum.core.LensCursor)){
return (new rum.core.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
var focus__$2 = ref.setter.call(null,where,focus__$1);
return focus__$2;
});})(getter,setter))
));
} else {
return (new rum.core.LensCursor(ref,getter,setter));
}
});
rum.core.deref_args = (function rum$core$deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__22063_SHARP_){
if(((!((p1__22063_SHARP_ == null)))?((((p1__22063_SHARP_.cljs$lang$protocol_mask$partition0$ & (32768))) || (p1__22063_SHARP_.cljs$core$IDeref$))?true:(((!p1__22063_SHARP_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__22063_SHARP_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,p1__22063_SHARP_))){
return cljs.core.deref.call(null,p1__22063_SHARP_);
} else {
return p1__22063_SHARP_;
}
}),xs);
});
rum.core.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__22066 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__22066,(0),null);
var next_state = cljs.core.nth.call(null,vec__22066,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.core.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.core.cursored_key = (function rum$core$cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.core.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__22067_22083 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__22069_22084 = null;
var count__22070_22085 = (0);
var i__22071_22086 = (0);
while(true){
if((i__22071_22086 < count__22070_22085)){
var arg_22087 = cljs.core._nth.call(null,chunk__22069_22084,i__22071_22086);
if(((!((arg_22087 == null)))?((((arg_22087.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_22087.cljs$core$IWatchable$))?true:(((!arg_22087.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_22087):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_22087))){
cljs.core.add_watch.call(null,arg_22087,rum.core.cursored_key.call(null,state),((function (seq__22067_22083,chunk__22069_22084,count__22070_22085,i__22071_22086,arg_22087){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__22067_22083,chunk__22069_22084,count__22070_22085,i__22071_22086,arg_22087))
);

var G__22088 = seq__22067_22083;
var G__22089 = chunk__22069_22084;
var G__22090 = count__22070_22085;
var G__22091 = (i__22071_22086 + (1));
seq__22067_22083 = G__22088;
chunk__22069_22084 = G__22089;
count__22070_22085 = G__22090;
i__22071_22086 = G__22091;
continue;
} else {
var G__22092 = seq__22067_22083;
var G__22093 = chunk__22069_22084;
var G__22094 = count__22070_22085;
var G__22095 = (i__22071_22086 + (1));
seq__22067_22083 = G__22092;
chunk__22069_22084 = G__22093;
count__22070_22085 = G__22094;
i__22071_22086 = G__22095;
continue;
}
} else {
var temp__4425__auto___22096 = cljs.core.seq.call(null,seq__22067_22083);
if(temp__4425__auto___22096){
var seq__22067_22097__$1 = temp__4425__auto___22096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22067_22097__$1)){
var c__19712__auto___22098 = cljs.core.chunk_first.call(null,seq__22067_22097__$1);
var G__22099 = cljs.core.chunk_rest.call(null,seq__22067_22097__$1);
var G__22100 = c__19712__auto___22098;
var G__22101 = cljs.core.count.call(null,c__19712__auto___22098);
var G__22102 = (0);
seq__22067_22083 = G__22099;
chunk__22069_22084 = G__22100;
count__22070_22085 = G__22101;
i__22071_22086 = G__22102;
continue;
} else {
var arg_22103 = cljs.core.first.call(null,seq__22067_22097__$1);
if(((!((arg_22103 == null)))?((((arg_22103.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_22103.cljs$core$IWatchable$))?true:(((!arg_22103.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_22103):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_22103))){
cljs.core.add_watch.call(null,arg_22103,rum.core.cursored_key.call(null,state),((function (seq__22067_22083,chunk__22069_22084,count__22070_22085,i__22071_22086,arg_22103,seq__22067_22097__$1,temp__4425__auto___22096){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__22067_22083,chunk__22069_22084,count__22070_22085,i__22071_22086,arg_22103,seq__22067_22097__$1,temp__4425__auto___22096))
);

var G__22104 = cljs.core.next.call(null,seq__22067_22097__$1);
var G__22105 = null;
var G__22106 = (0);
var G__22107 = (0);
seq__22067_22083 = G__22104;
chunk__22069_22084 = G__22105;
count__22070_22085 = G__22106;
i__22071_22086 = G__22107;
continue;
} else {
var G__22108 = cljs.core.next.call(null,seq__22067_22097__$1);
var G__22109 = null;
var G__22110 = (0);
var G__22111 = (0);
seq__22067_22083 = G__22108;
chunk__22069_22084 = G__22109;
count__22070_22085 = G__22110;
i__22071_22086 = G__22111;
continue;
}
}
} else {
}
}
break;
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var seq__22075_22112 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__22077_22113 = null;
var count__22078_22114 = (0);
var i__22079_22115 = (0);
while(true){
if((i__22079_22115 < count__22078_22114)){
var arg_22116 = cljs.core._nth.call(null,chunk__22077_22113,i__22079_22115);
if(((!((arg_22116 == null)))?((((arg_22116.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_22116.cljs$core$IWatchable$))?true:(((!arg_22116.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_22116):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_22116))){
cljs.core.remove_watch.call(null,arg_22116,rum.core.cursored_key.call(null,state));

var G__22117 = seq__22075_22112;
var G__22118 = chunk__22077_22113;
var G__22119 = count__22078_22114;
var G__22120 = (i__22079_22115 + (1));
seq__22075_22112 = G__22117;
chunk__22077_22113 = G__22118;
count__22078_22114 = G__22119;
i__22079_22115 = G__22120;
continue;
} else {
var G__22121 = seq__22075_22112;
var G__22122 = chunk__22077_22113;
var G__22123 = count__22078_22114;
var G__22124 = (i__22079_22115 + (1));
seq__22075_22112 = G__22121;
chunk__22077_22113 = G__22122;
count__22078_22114 = G__22123;
i__22079_22115 = G__22124;
continue;
}
} else {
var temp__4425__auto___22125 = cljs.core.seq.call(null,seq__22075_22112);
if(temp__4425__auto___22125){
var seq__22075_22126__$1 = temp__4425__auto___22125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22075_22126__$1)){
var c__19712__auto___22127 = cljs.core.chunk_first.call(null,seq__22075_22126__$1);
var G__22128 = cljs.core.chunk_rest.call(null,seq__22075_22126__$1);
var G__22129 = c__19712__auto___22127;
var G__22130 = cljs.core.count.call(null,c__19712__auto___22127);
var G__22131 = (0);
seq__22075_22112 = G__22128;
chunk__22077_22113 = G__22129;
count__22078_22114 = G__22130;
i__22079_22115 = G__22131;
continue;
} else {
var arg_22132 = cljs.core.first.call(null,seq__22075_22126__$1);
if(((!((arg_22132 == null)))?((((arg_22132.cljs$lang$protocol_mask$partition1$ & (2))) || (arg_22132.cljs$core$IWatchable$))?true:(((!arg_22132.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_22132):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,arg_22132))){
cljs.core.remove_watch.call(null,arg_22132,rum.core.cursored_key.call(null,state));

var G__22133 = cljs.core.next.call(null,seq__22075_22126__$1);
var G__22134 = null;
var G__22135 = (0);
var G__22136 = (0);
seq__22075_22112 = G__22133;
chunk__22077_22113 = G__22134;
count__22078_22114 = G__22135;
i__22079_22115 = G__22136;
continue;
} else {
var G__22137 = cljs.core.next.call(null,seq__22075_22126__$1);
var G__22138 = null;
var G__22139 = (0);
var G__22140 = (0);
seq__22075_22112 = G__22137;
chunk__22077_22113 = G__22138;
count__22078_22114 = G__22139;
i__22079_22115 = G__22140;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);

//# sourceMappingURL=core.js.map