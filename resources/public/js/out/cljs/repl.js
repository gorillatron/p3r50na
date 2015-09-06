// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30376_30390 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30377_30391 = null;
var count__30378_30392 = (0);
var i__30379_30393 = (0);
while(true){
if((i__30379_30393 < count__30378_30392)){
var f_30394 = cljs.core._nth.call(null,chunk__30377_30391,i__30379_30393);
cljs.core.println.call(null,"  ",f_30394);

var G__30395 = seq__30376_30390;
var G__30396 = chunk__30377_30391;
var G__30397 = count__30378_30392;
var G__30398 = (i__30379_30393 + (1));
seq__30376_30390 = G__30395;
chunk__30377_30391 = G__30396;
count__30378_30392 = G__30397;
i__30379_30393 = G__30398;
continue;
} else {
var temp__4425__auto___30399 = cljs.core.seq.call(null,seq__30376_30390);
if(temp__4425__auto___30399){
var seq__30376_30400__$1 = temp__4425__auto___30399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30376_30400__$1)){
var c__20355__auto___30401 = cljs.core.chunk_first.call(null,seq__30376_30400__$1);
var G__30402 = cljs.core.chunk_rest.call(null,seq__30376_30400__$1);
var G__30403 = c__20355__auto___30401;
var G__30404 = cljs.core.count.call(null,c__20355__auto___30401);
var G__30405 = (0);
seq__30376_30390 = G__30402;
chunk__30377_30391 = G__30403;
count__30378_30392 = G__30404;
i__30379_30393 = G__30405;
continue;
} else {
var f_30406 = cljs.core.first.call(null,seq__30376_30400__$1);
cljs.core.println.call(null,"  ",f_30406);

var G__30407 = cljs.core.next.call(null,seq__30376_30400__$1);
var G__30408 = null;
var G__30409 = (0);
var G__30410 = (0);
seq__30376_30390 = G__30407;
chunk__30377_30391 = G__30408;
count__30378_30392 = G__30409;
i__30379_30393 = G__30410;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30411 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__19571__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__19571__auto__)){
return or__19571__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30411);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30411)))?cljs.core.second.call(null,arglists_30411):arglists_30411));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30380 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30381 = null;
var count__30382 = (0);
var i__30383 = (0);
while(true){
if((i__30383 < count__30382)){
var vec__30384 = cljs.core._nth.call(null,chunk__30381,i__30383);
var name = cljs.core.nth.call(null,vec__30384,(0),null);
var map__30385 = cljs.core.nth.call(null,vec__30384,(1),null);
var map__30385__$1 = ((((!((map__30385 == null)))?((((map__30385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30385):map__30385);
var doc = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30385__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30412 = seq__30380;
var G__30413 = chunk__30381;
var G__30414 = count__30382;
var G__30415 = (i__30383 + (1));
seq__30380 = G__30412;
chunk__30381 = G__30413;
count__30382 = G__30414;
i__30383 = G__30415;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30380);
if(temp__4425__auto__){
var seq__30380__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30380__$1)){
var c__20355__auto__ = cljs.core.chunk_first.call(null,seq__30380__$1);
var G__30416 = cljs.core.chunk_rest.call(null,seq__30380__$1);
var G__30417 = c__20355__auto__;
var G__30418 = cljs.core.count.call(null,c__20355__auto__);
var G__30419 = (0);
seq__30380 = G__30416;
chunk__30381 = G__30417;
count__30382 = G__30418;
i__30383 = G__30419;
continue;
} else {
var vec__30387 = cljs.core.first.call(null,seq__30380__$1);
var name = cljs.core.nth.call(null,vec__30387,(0),null);
var map__30388 = cljs.core.nth.call(null,vec__30387,(1),null);
var map__30388__$1 = ((((!((map__30388 == null)))?((((map__30388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30388):map__30388);
var doc = cljs.core.get.call(null,map__30388__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30388__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30420 = cljs.core.next.call(null,seq__30380__$1);
var G__30421 = null;
var G__30422 = (0);
var G__30423 = (0);
seq__30380 = G__30420;
chunk__30381 = G__30421;
count__30382 = G__30422;
i__30383 = G__30423;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map