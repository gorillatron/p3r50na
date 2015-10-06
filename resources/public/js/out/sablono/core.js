// Compiled by ClojureScript 1.7.48 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__22145__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__22144 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__22144,(0),null);
var body = cljs.core.nthnext.call(null,vec__22144,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__22145 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22146__i = 0, G__22146__a = new Array(arguments.length -  0);
while (G__22146__i < G__22146__a.length) {G__22146__a[G__22146__i] = arguments[G__22146__i + 0]; ++G__22146__i;}
  args = new cljs.core.IndexedSeq(G__22146__a,0);
} 
return G__22145__delegate.call(this,args);};
G__22145.cljs$lang$maxFixedArity = 0;
G__22145.cljs$lang$applyTo = (function (arglist__22147){
var args = cljs.core.seq(arglist__22147);
return G__22145__delegate(args);
});
G__22145.cljs$core$IFn$_invoke$arity$variadic = G__22145__delegate;
return G__22145;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19681__auto__ = (function sablono$core$update_arglists_$_iter__22152(s__22153){
return (new cljs.core.LazySeq(null,(function (){
var s__22153__$1 = s__22153;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22153__$1);
if(temp__4425__auto__){
var s__22153__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22153__$2)){
var c__19679__auto__ = cljs.core.chunk_first.call(null,s__22153__$2);
var size__19680__auto__ = cljs.core.count.call(null,c__19679__auto__);
var b__22155 = cljs.core.chunk_buffer.call(null,size__19680__auto__);
if((function (){var i__22154 = (0);
while(true){
if((i__22154 < size__19680__auto__)){
var args = cljs.core._nth.call(null,c__19679__auto__,i__22154);
cljs.core.chunk_append.call(null,b__22155,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__22156 = (i__22154 + (1));
i__22154 = G__22156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22155),sablono$core$update_arglists_$_iter__22152.call(null,cljs.core.chunk_rest.call(null,s__22153__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22155),null);
}
} else {
var args = cljs.core.first.call(null,s__22153__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__22152.call(null,cljs.core.rest.call(null,s__22153__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19681__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(){
var args__19974__auto__ = [];
var len__19967__auto___22162 = arguments.length;
var i__19968__auto___22163 = (0);
while(true){
if((i__19968__auto___22163 < len__19967__auto___22162)){
args__19974__auto__.push((arguments[i__19968__auto___22163]));

var G__22164 = (i__19968__auto___22163 + (1));
i__19968__auto___22163 = G__22164;
continue;
} else {
}
break;
}

var argseq__19975__auto__ = ((((0) < args__19974__auto__.length))?(new cljs.core.IndexedSeq(args__19974__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19975__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19681__auto__ = (function sablono$core$iter__22158(s__22159){
return (new cljs.core.LazySeq(null,(function (){
var s__22159__$1 = s__22159;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22159__$1);
if(temp__4425__auto__){
var s__22159__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22159__$2)){
var c__19679__auto__ = cljs.core.chunk_first.call(null,s__22159__$2);
var size__19680__auto__ = cljs.core.count.call(null,c__19679__auto__);
var b__22161 = cljs.core.chunk_buffer.call(null,size__19680__auto__);
if((function (){var i__22160 = (0);
while(true){
if((i__22160 < size__19680__auto__)){
var style = cljs.core._nth.call(null,c__19679__auto__,i__22160);
cljs.core.chunk_append.call(null,b__22161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__22165 = (i__22160 + (1));
i__22160 = G__22165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22161),sablono$core$iter__22158.call(null,cljs.core.chunk_rest.call(null,s__22159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22161),null);
}
} else {
var style = cljs.core.first.call(null,s__22159__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__22158.call(null,cljs.core.rest.call(null,s__22159__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19681__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq22157){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22157));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to22166 = (function sablono$core$link_to22166(){
var args__19974__auto__ = [];
var len__19967__auto___22169 = arguments.length;
var i__19968__auto___22170 = (0);
while(true){
if((i__19968__auto___22170 < len__19967__auto___22169)){
args__19974__auto__.push((arguments[i__19968__auto___22170]));

var G__22171 = (i__19968__auto___22170 + (1));
i__19968__auto___22170 = G__22171;
continue;
} else {
}
break;
}

var argseq__19975__auto__ = ((((1) < args__19974__auto__.length))?(new cljs.core.IndexedSeq(args__19974__auto__.slice((1)),(0))):null);
return sablono.core.link_to22166.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19975__auto__);
});

sablono.core.link_to22166.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to22166.cljs$lang$maxFixedArity = (1);

sablono.core.link_to22166.cljs$lang$applyTo = (function (seq22167){
var G__22168 = cljs.core.first.call(null,seq22167);
var seq22167__$1 = cljs.core.next.call(null,seq22167);
return sablono.core.link_to22166.cljs$core$IFn$_invoke$arity$variadic(G__22168,seq22167__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to22166);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to22172 = (function sablono$core$mail_to22172(){
var args__19974__auto__ = [];
var len__19967__auto___22177 = arguments.length;
var i__19968__auto___22178 = (0);
while(true){
if((i__19968__auto___22178 < len__19967__auto___22177)){
args__19974__auto__.push((arguments[i__19968__auto___22178]));

var G__22179 = (i__19968__auto___22178 + (1));
i__19968__auto___22178 = G__22179;
continue;
} else {
}
break;
}

var argseq__19975__auto__ = ((((1) < args__19974__auto__.length))?(new cljs.core.IndexedSeq(args__19974__auto__.slice((1)),(0))):null);
return sablono.core.mail_to22172.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19975__auto__);
});

sablono.core.mail_to22172.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__22175){
var vec__22176 = p__22175;
var content = cljs.core.nth.call(null,vec__22176,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18928__auto__ = content;
if(cljs.core.truth_(or__18928__auto__)){
return or__18928__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to22172.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to22172.cljs$lang$applyTo = (function (seq22173){
var G__22174 = cljs.core.first.call(null,seq22173);
var seq22173__$1 = cljs.core.next.call(null,seq22173);
return sablono.core.mail_to22172.cljs$core$IFn$_invoke$arity$variadic(G__22174,seq22173__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to22172);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list22180 = (function sablono$core$unordered_list22180(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19681__auto__ = (function sablono$core$unordered_list22180_$_iter__22185(s__22186){
return (new cljs.core.LazySeq(null,(function (){
var s__22186__$1 = s__22186;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22186__$1);
if(temp__4425__auto__){
var s__22186__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22186__$2)){
var c__19679__auto__ = cljs.core.chunk_first.call(null,s__22186__$2);
var size__19680__auto__ = cljs.core.count.call(null,c__19679__auto__);
var b__22188 = cljs.core.chunk_buffer.call(null,size__19680__auto__);
if((function (){var i__22187 = (0);
while(true){
if((i__22187 < size__19680__auto__)){
var x = cljs.core._nth.call(null,c__19679__auto__,i__22187);
cljs.core.chunk_append.call(null,b__22188,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22189 = (i__22187 + (1));
i__22187 = G__22189;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22188),sablono$core$unordered_list22180_$_iter__22185.call(null,cljs.core.chunk_rest.call(null,s__22186__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22188),null);
}
} else {
var x = cljs.core.first.call(null,s__22186__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list22180_$_iter__22185.call(null,cljs.core.rest.call(null,s__22186__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19681__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list22180);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list22190 = (function sablono$core$ordered_list22190(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19681__auto__ = (function sablono$core$ordered_list22190_$_iter__22195(s__22196){
return (new cljs.core.LazySeq(null,(function (){
var s__22196__$1 = s__22196;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22196__$1);
if(temp__4425__auto__){
var s__22196__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22196__$2)){
var c__19679__auto__ = cljs.core.chunk_first.call(null,s__22196__$2);
var size__19680__auto__ = cljs.core.count.call(null,c__19679__auto__);
var b__22198 = cljs.core.chunk_buffer.call(null,size__19680__auto__);
if((function (){var i__22197 = (0);
while(true){
if((i__22197 < size__19680__auto__)){
var x = cljs.core._nth.call(null,c__19679__auto__,i__22197);
cljs.core.chunk_append.call(null,b__22198,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__22199 = (i__22197 + (1));
i__22197 = G__22199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22198),sablono$core$ordered_list22190_$_iter__22195.call(null,cljs.core.chunk_rest.call(null,s__22196__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22198),null);
}
} else {
var x = cljs.core.first.call(null,s__22196__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list22190_$_iter__22195.call(null,cljs.core.rest.call(null,s__22196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19681__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list22190);
/**
 * Create an image element.
 */
sablono.core.image22200 = (function sablono$core$image22200(){
var args22201 = [];
var len__19967__auto___22204 = arguments.length;
var i__19968__auto___22205 = (0);
while(true){
if((i__19968__auto___22205 < len__19967__auto___22204)){
args22201.push((arguments[i__19968__auto___22205]));

var G__22206 = (i__19968__auto___22205 + (1));
i__19968__auto___22205 = G__22206;
continue;
} else {
}
break;
}

var G__22203 = args22201.length;
switch (G__22203) {
case 1:
return sablono.core.image22200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image22200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22201.length)].join('')));

}
});

sablono.core.image22200.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image22200.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image22200.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image22200);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__22208_SHARP_,p2__22209_SHARP_){
return [cljs.core.str(p1__22208_SHARP_),cljs.core.str("["),cljs.core.str(p2__22209_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__22210_SHARP_,p2__22211_SHARP_){
return [cljs.core.str(p1__22210_SHARP_),cljs.core.str("-"),cljs.core.str(p2__22211_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field22212 = (function sablono$core$color_field22212(){
var args22213 = [];
var len__19967__auto___22280 = arguments.length;
var i__19968__auto___22281 = (0);
while(true){
if((i__19968__auto___22281 < len__19967__auto___22280)){
args22213.push((arguments[i__19968__auto___22281]));

var G__22282 = (i__19968__auto___22281 + (1));
i__19968__auto___22281 = G__22282;
continue;
} else {
}
break;
}

var G__22215 = args22213.length;
switch (G__22215) {
case 1:
return sablono.core.color_field22212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field22212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22213.length)].join('')));

}
});

sablono.core.color_field22212.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.color_field22212.call(null,name__21625__auto__,null);
});

sablono.core.color_field22212.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.color_field22212.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field22212);

/**
 * Creates a date input field.
 */
sablono.core.date_field22216 = (function sablono$core$date_field22216(){
var args22217 = [];
var len__19967__auto___22284 = arguments.length;
var i__19968__auto___22285 = (0);
while(true){
if((i__19968__auto___22285 < len__19967__auto___22284)){
args22217.push((arguments[i__19968__auto___22285]));

var G__22286 = (i__19968__auto___22285 + (1));
i__19968__auto___22285 = G__22286;
continue;
} else {
}
break;
}

var G__22219 = args22217.length;
switch (G__22219) {
case 1:
return sablono.core.date_field22216.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field22216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22217.length)].join('')));

}
});

sablono.core.date_field22216.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.date_field22216.call(null,name__21625__auto__,null);
});

sablono.core.date_field22216.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.date_field22216.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field22216);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field22220 = (function sablono$core$datetime_field22220(){
var args22221 = [];
var len__19967__auto___22288 = arguments.length;
var i__19968__auto___22289 = (0);
while(true){
if((i__19968__auto___22289 < len__19967__auto___22288)){
args22221.push((arguments[i__19968__auto___22289]));

var G__22290 = (i__19968__auto___22289 + (1));
i__19968__auto___22289 = G__22290;
continue;
} else {
}
break;
}

var G__22223 = args22221.length;
switch (G__22223) {
case 1:
return sablono.core.datetime_field22220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field22220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22221.length)].join('')));

}
});

sablono.core.datetime_field22220.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.datetime_field22220.call(null,name__21625__auto__,null);
});

sablono.core.datetime_field22220.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.datetime_field22220.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field22220);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field22224 = (function sablono$core$datetime_local_field22224(){
var args22225 = [];
var len__19967__auto___22292 = arguments.length;
var i__19968__auto___22293 = (0);
while(true){
if((i__19968__auto___22293 < len__19967__auto___22292)){
args22225.push((arguments[i__19968__auto___22293]));

var G__22294 = (i__19968__auto___22293 + (1));
i__19968__auto___22293 = G__22294;
continue;
} else {
}
break;
}

var G__22227 = args22225.length;
switch (G__22227) {
case 1:
return sablono.core.datetime_local_field22224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field22224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22225.length)].join('')));

}
});

sablono.core.datetime_local_field22224.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.datetime_local_field22224.call(null,name__21625__auto__,null);
});

sablono.core.datetime_local_field22224.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.datetime_local_field22224.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field22224);

/**
 * Creates a email input field.
 */
sablono.core.email_field22228 = (function sablono$core$email_field22228(){
var args22229 = [];
var len__19967__auto___22296 = arguments.length;
var i__19968__auto___22297 = (0);
while(true){
if((i__19968__auto___22297 < len__19967__auto___22296)){
args22229.push((arguments[i__19968__auto___22297]));

var G__22298 = (i__19968__auto___22297 + (1));
i__19968__auto___22297 = G__22298;
continue;
} else {
}
break;
}

var G__22231 = args22229.length;
switch (G__22231) {
case 1:
return sablono.core.email_field22228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field22228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22229.length)].join('')));

}
});

sablono.core.email_field22228.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.email_field22228.call(null,name__21625__auto__,null);
});

sablono.core.email_field22228.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.email_field22228.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field22228);

/**
 * Creates a file input field.
 */
sablono.core.file_field22232 = (function sablono$core$file_field22232(){
var args22233 = [];
var len__19967__auto___22300 = arguments.length;
var i__19968__auto___22301 = (0);
while(true){
if((i__19968__auto___22301 < len__19967__auto___22300)){
args22233.push((arguments[i__19968__auto___22301]));

var G__22302 = (i__19968__auto___22301 + (1));
i__19968__auto___22301 = G__22302;
continue;
} else {
}
break;
}

var G__22235 = args22233.length;
switch (G__22235) {
case 1:
return sablono.core.file_field22232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field22232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22233.length)].join('')));

}
});

sablono.core.file_field22232.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.file_field22232.call(null,name__21625__auto__,null);
});

sablono.core.file_field22232.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.file_field22232.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field22232);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field22236 = (function sablono$core$hidden_field22236(){
var args22237 = [];
var len__19967__auto___22304 = arguments.length;
var i__19968__auto___22305 = (0);
while(true){
if((i__19968__auto___22305 < len__19967__auto___22304)){
args22237.push((arguments[i__19968__auto___22305]));

var G__22306 = (i__19968__auto___22305 + (1));
i__19968__auto___22305 = G__22306;
continue;
} else {
}
break;
}

var G__22239 = args22237.length;
switch (G__22239) {
case 1:
return sablono.core.hidden_field22236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field22236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22237.length)].join('')));

}
});

sablono.core.hidden_field22236.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.hidden_field22236.call(null,name__21625__auto__,null);
});

sablono.core.hidden_field22236.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.hidden_field22236.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field22236);

/**
 * Creates a month input field.
 */
sablono.core.month_field22240 = (function sablono$core$month_field22240(){
var args22241 = [];
var len__19967__auto___22308 = arguments.length;
var i__19968__auto___22309 = (0);
while(true){
if((i__19968__auto___22309 < len__19967__auto___22308)){
args22241.push((arguments[i__19968__auto___22309]));

var G__22310 = (i__19968__auto___22309 + (1));
i__19968__auto___22309 = G__22310;
continue;
} else {
}
break;
}

var G__22243 = args22241.length;
switch (G__22243) {
case 1:
return sablono.core.month_field22240.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field22240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22241.length)].join('')));

}
});

sablono.core.month_field22240.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.month_field22240.call(null,name__21625__auto__,null);
});

sablono.core.month_field22240.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.month_field22240.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field22240);

/**
 * Creates a number input field.
 */
sablono.core.number_field22244 = (function sablono$core$number_field22244(){
var args22245 = [];
var len__19967__auto___22312 = arguments.length;
var i__19968__auto___22313 = (0);
while(true){
if((i__19968__auto___22313 < len__19967__auto___22312)){
args22245.push((arguments[i__19968__auto___22313]));

var G__22314 = (i__19968__auto___22313 + (1));
i__19968__auto___22313 = G__22314;
continue;
} else {
}
break;
}

var G__22247 = args22245.length;
switch (G__22247) {
case 1:
return sablono.core.number_field22244.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field22244.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22245.length)].join('')));

}
});

sablono.core.number_field22244.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.number_field22244.call(null,name__21625__auto__,null);
});

sablono.core.number_field22244.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.number_field22244.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field22244);

/**
 * Creates a password input field.
 */
sablono.core.password_field22248 = (function sablono$core$password_field22248(){
var args22249 = [];
var len__19967__auto___22316 = arguments.length;
var i__19968__auto___22317 = (0);
while(true){
if((i__19968__auto___22317 < len__19967__auto___22316)){
args22249.push((arguments[i__19968__auto___22317]));

var G__22318 = (i__19968__auto___22317 + (1));
i__19968__auto___22317 = G__22318;
continue;
} else {
}
break;
}

var G__22251 = args22249.length;
switch (G__22251) {
case 1:
return sablono.core.password_field22248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field22248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22249.length)].join('')));

}
});

sablono.core.password_field22248.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.password_field22248.call(null,name__21625__auto__,null);
});

sablono.core.password_field22248.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.password_field22248.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field22248);

/**
 * Creates a range input field.
 */
sablono.core.range_field22252 = (function sablono$core$range_field22252(){
var args22253 = [];
var len__19967__auto___22320 = arguments.length;
var i__19968__auto___22321 = (0);
while(true){
if((i__19968__auto___22321 < len__19967__auto___22320)){
args22253.push((arguments[i__19968__auto___22321]));

var G__22322 = (i__19968__auto___22321 + (1));
i__19968__auto___22321 = G__22322;
continue;
} else {
}
break;
}

var G__22255 = args22253.length;
switch (G__22255) {
case 1:
return sablono.core.range_field22252.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field22252.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22253.length)].join('')));

}
});

sablono.core.range_field22252.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.range_field22252.call(null,name__21625__auto__,null);
});

sablono.core.range_field22252.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.range_field22252.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field22252);

/**
 * Creates a search input field.
 */
sablono.core.search_field22256 = (function sablono$core$search_field22256(){
var args22257 = [];
var len__19967__auto___22324 = arguments.length;
var i__19968__auto___22325 = (0);
while(true){
if((i__19968__auto___22325 < len__19967__auto___22324)){
args22257.push((arguments[i__19968__auto___22325]));

var G__22326 = (i__19968__auto___22325 + (1));
i__19968__auto___22325 = G__22326;
continue;
} else {
}
break;
}

var G__22259 = args22257.length;
switch (G__22259) {
case 1:
return sablono.core.search_field22256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field22256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22257.length)].join('')));

}
});

sablono.core.search_field22256.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.search_field22256.call(null,name__21625__auto__,null);
});

sablono.core.search_field22256.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.search_field22256.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field22256);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field22260 = (function sablono$core$tel_field22260(){
var args22261 = [];
var len__19967__auto___22328 = arguments.length;
var i__19968__auto___22329 = (0);
while(true){
if((i__19968__auto___22329 < len__19967__auto___22328)){
args22261.push((arguments[i__19968__auto___22329]));

var G__22330 = (i__19968__auto___22329 + (1));
i__19968__auto___22329 = G__22330;
continue;
} else {
}
break;
}

var G__22263 = args22261.length;
switch (G__22263) {
case 1:
return sablono.core.tel_field22260.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field22260.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22261.length)].join('')));

}
});

sablono.core.tel_field22260.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.tel_field22260.call(null,name__21625__auto__,null);
});

sablono.core.tel_field22260.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.tel_field22260.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field22260);

/**
 * Creates a text input field.
 */
sablono.core.text_field22264 = (function sablono$core$text_field22264(){
var args22265 = [];
var len__19967__auto___22332 = arguments.length;
var i__19968__auto___22333 = (0);
while(true){
if((i__19968__auto___22333 < len__19967__auto___22332)){
args22265.push((arguments[i__19968__auto___22333]));

var G__22334 = (i__19968__auto___22333 + (1));
i__19968__auto___22333 = G__22334;
continue;
} else {
}
break;
}

var G__22267 = args22265.length;
switch (G__22267) {
case 1:
return sablono.core.text_field22264.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field22264.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22265.length)].join('')));

}
});

sablono.core.text_field22264.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.text_field22264.call(null,name__21625__auto__,null);
});

sablono.core.text_field22264.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.text_field22264.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field22264);

/**
 * Creates a time input field.
 */
sablono.core.time_field22268 = (function sablono$core$time_field22268(){
var args22269 = [];
var len__19967__auto___22336 = arguments.length;
var i__19968__auto___22337 = (0);
while(true){
if((i__19968__auto___22337 < len__19967__auto___22336)){
args22269.push((arguments[i__19968__auto___22337]));

var G__22338 = (i__19968__auto___22337 + (1));
i__19968__auto___22337 = G__22338;
continue;
} else {
}
break;
}

var G__22271 = args22269.length;
switch (G__22271) {
case 1:
return sablono.core.time_field22268.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field22268.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22269.length)].join('')));

}
});

sablono.core.time_field22268.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.time_field22268.call(null,name__21625__auto__,null);
});

sablono.core.time_field22268.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.time_field22268.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field22268);

/**
 * Creates a url input field.
 */
sablono.core.url_field22272 = (function sablono$core$url_field22272(){
var args22273 = [];
var len__19967__auto___22340 = arguments.length;
var i__19968__auto___22341 = (0);
while(true){
if((i__19968__auto___22341 < len__19967__auto___22340)){
args22273.push((arguments[i__19968__auto___22341]));

var G__22342 = (i__19968__auto___22341 + (1));
i__19968__auto___22341 = G__22342;
continue;
} else {
}
break;
}

var G__22275 = args22273.length;
switch (G__22275) {
case 1:
return sablono.core.url_field22272.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field22272.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22273.length)].join('')));

}
});

sablono.core.url_field22272.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.url_field22272.call(null,name__21625__auto__,null);
});

sablono.core.url_field22272.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.url_field22272.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field22272);

/**
 * Creates a week input field.
 */
sablono.core.week_field22276 = (function sablono$core$week_field22276(){
var args22277 = [];
var len__19967__auto___22344 = arguments.length;
var i__19968__auto___22345 = (0);
while(true){
if((i__19968__auto___22345 < len__19967__auto___22344)){
args22277.push((arguments[i__19968__auto___22345]));

var G__22346 = (i__19968__auto___22345 + (1));
i__19968__auto___22345 = G__22346;
continue;
} else {
}
break;
}

var G__22279 = args22277.length;
switch (G__22279) {
case 1:
return sablono.core.week_field22276.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field22276.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22277.length)].join('')));

}
});

sablono.core.week_field22276.cljs$core$IFn$_invoke$arity$1 = (function (name__21625__auto__){
return sablono.core.week_field22276.call(null,name__21625__auto__,null);
});

sablono.core.week_field22276.cljs$core$IFn$_invoke$arity$2 = (function (name__21625__auto__,value__21626__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__21625__auto__,value__21626__auto__);
});

sablono.core.week_field22276.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field22276);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box22348 = (function sablono$core$check_box22348(){
var args22349 = [];
var len__19967__auto___22352 = arguments.length;
var i__19968__auto___22353 = (0);
while(true){
if((i__19968__auto___22353 < len__19967__auto___22352)){
args22349.push((arguments[i__19968__auto___22353]));

var G__22354 = (i__19968__auto___22353 + (1));
i__19968__auto___22353 = G__22354;
continue;
} else {
}
break;
}

var G__22351 = args22349.length;
switch (G__22351) {
case 1:
return sablono.core.check_box22348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box22348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box22348.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22349.length)].join('')));

}
});

sablono.core.check_box22348.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box22348.call(null,name,null);
});

sablono.core.check_box22348.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box22348.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box22348.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box22348.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box22348);
/**
 * Creates a radio button.
 */
sablono.core.radio_button22356 = (function sablono$core$radio_button22356(){
var args22357 = [];
var len__19967__auto___22360 = arguments.length;
var i__19968__auto___22361 = (0);
while(true){
if((i__19968__auto___22361 < len__19967__auto___22360)){
args22357.push((arguments[i__19968__auto___22361]));

var G__22362 = (i__19968__auto___22361 + (1));
i__19968__auto___22361 = G__22362;
continue;
} else {
}
break;
}

var G__22359 = args22357.length;
switch (G__22359) {
case 1:
return sablono.core.radio_button22356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button22356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button22356.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22357.length)].join('')));

}
});

sablono.core.radio_button22356.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button22356.call(null,group,null);
});

sablono.core.radio_button22356.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button22356.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button22356.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button22356.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button22356);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options22364 = (function sablono$core$select_options22364(coll){
var iter__19681__auto__ = (function sablono$core$select_options22364_$_iter__22373(s__22374){
return (new cljs.core.LazySeq(null,(function (){
var s__22374__$1 = s__22374;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__22374__$1);
if(temp__4425__auto__){
var s__22374__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__22374__$2)){
var c__19679__auto__ = cljs.core.chunk_first.call(null,s__22374__$2);
var size__19680__auto__ = cljs.core.count.call(null,c__19679__auto__);
var b__22376 = cljs.core.chunk_buffer.call(null,size__19680__auto__);
if((function (){var i__22375 = (0);
while(true){
if((i__22375 < size__19680__auto__)){
var x = cljs.core._nth.call(null,c__19679__auto__,i__22375);
cljs.core.chunk_append.call(null,b__22376,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22379 = x;
var text = cljs.core.nth.call(null,vec__22379,(0),null);
var val = cljs.core.nth.call(null,vec__22379,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22379,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options22364.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__22381 = (i__22375 + (1));
i__22375 = G__22381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22376),sablono$core$select_options22364_$_iter__22373.call(null,cljs.core.chunk_rest.call(null,s__22374__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22376),null);
}
} else {
var x = cljs.core.first.call(null,s__22374__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__22380 = x;
var text = cljs.core.nth.call(null,vec__22380,(0),null);
var val = cljs.core.nth.call(null,vec__22380,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__22380,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options22364.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options22364_$_iter__22373.call(null,cljs.core.rest.call(null,s__22374__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19681__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options22364);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down22382 = (function sablono$core$drop_down22382(){
var args22383 = [];
var len__19967__auto___22386 = arguments.length;
var i__19968__auto___22387 = (0);
while(true){
if((i__19968__auto___22387 < len__19967__auto___22386)){
args22383.push((arguments[i__19968__auto___22387]));

var G__22388 = (i__19968__auto___22387 + (1));
i__19968__auto___22387 = G__22388;
continue;
} else {
}
break;
}

var G__22385 = args22383.length;
switch (G__22385) {
case 2:
return sablono.core.drop_down22382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down22382.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22383.length)].join('')));

}
});

sablono.core.drop_down22382.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down22382.call(null,name,options,null);
});

sablono.core.drop_down22382.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down22382.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down22382);
/**
 * Creates a text area element.
 */
sablono.core.text_area22390 = (function sablono$core$text_area22390(){
var args22391 = [];
var len__19967__auto___22394 = arguments.length;
var i__19968__auto___22395 = (0);
while(true){
if((i__19968__auto___22395 < len__19967__auto___22394)){
args22391.push((arguments[i__19968__auto___22395]));

var G__22396 = (i__19968__auto___22395 + (1));
i__19968__auto___22395 = G__22396;
continue;
} else {
}
break;
}

var G__22393 = args22391.length;
switch (G__22393) {
case 1:
return sablono.core.text_area22390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area22390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22391.length)].join('')));

}
});

sablono.core.text_area22390.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area22390.call(null,name,null);
});

sablono.core.text_area22390.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area22390.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area22390);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label22398 = (function sablono$core$label22398(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label22398);
/**
 * Creates a submit button.
 */
sablono.core.submit_button22399 = (function sablono$core$submit_button22399(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button22399);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button22400 = (function sablono$core$reset_button22400(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button22400);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to22401 = (function sablono$core$form_to22401(){
var args__19974__auto__ = [];
var len__19967__auto___22406 = arguments.length;
var i__19968__auto___22407 = (0);
while(true){
if((i__19968__auto___22407 < len__19967__auto___22406)){
args__19974__auto__.push((arguments[i__19968__auto___22407]));

var G__22408 = (i__19968__auto___22407 + (1));
i__19968__auto___22407 = G__22408;
continue;
} else {
}
break;
}

var argseq__19975__auto__ = ((((1) < args__19974__auto__.length))?(new cljs.core.IndexedSeq(args__19974__auto__.slice((1)),(0))):null);
return sablono.core.form_to22401.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19975__auto__);
});

sablono.core.form_to22401.cljs$core$IFn$_invoke$arity$variadic = (function (p__22404,body){
var vec__22405 = p__22404;
var method = cljs.core.nth.call(null,vec__22405,(0),null);
var action = cljs.core.nth.call(null,vec__22405,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to22401.cljs$lang$maxFixedArity = (1);

sablono.core.form_to22401.cljs$lang$applyTo = (function (seq22402){
var G__22403 = cljs.core.first.call(null,seq22402);
var seq22402__$1 = cljs.core.next.call(null,seq22402);
return sablono.core.form_to22401.cljs$core$IFn$_invoke$arity$variadic(G__22403,seq22402__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to22401);

//# sourceMappingURL=core.js.map