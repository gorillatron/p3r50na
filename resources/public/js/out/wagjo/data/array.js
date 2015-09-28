// Compiled by ClojureScript 1.7.48 {}
goog.provide('wagjo.data.array');
goog.require('cljs.core');
/**
 * Returns an empty array.
 */
wagjo.data.array.empty = (function wagjo$data$array$empty(){
return [];
});
/**
 * Returns true if a is an array.
 */
wagjo.data.array.array_QMARK_ = (function wagjo$data$array$array_QMARK_(a){
return (a instanceof Array);
});
/**
 * Returns true if a is empty array or nil.
 * Faster variant of clojure.core/empty?.
 */
wagjo.data.array.empty_QMARK_ = (function wagjo$data$array$empty_QMARK_(a){
return ((a == null)) || ((a.length === (0)));
});
/**
 * Returns the number of items in the array.
 * (count nil) returns 0. Faster variant of clojure.core/count.
 */
wagjo.data.array.count = (function wagjo$data$array$count(a){
if((a == null)){
return (0);
} else {
return a.length;
}
});
/**
 * Returns the value at the index. nth throws an exception if index
 * out of bounds. Faster variant of clojure.core/nth
 */
wagjo.data.array.nth = (function wagjo$data$array$nth(a,index){
if((a == null)){
return null;
} else {
if(((index < (0))) || ((a.length <= index))){
throw "nth: Index out of bounds!";
} else {
return (a[index]);
}
}
});
/**
 * Returns the value at the index or not-found, if index
 * out of bounds. Faster variant of clojure.core/nth
 */
wagjo.data.array.nth_STAR_ = (function wagjo$data$array$nth_STAR_(a,index,not_found){
if(((a == null)) || ((index < (0))) || ((a.length <= index))){
return not_found;
} else {
return (a[index]);
}
});
/**
 * Returns the value at the index. Does not check for boundaries.
 * Faster variant of clojure.core/nth.
 */
wagjo.data.array.nth_unchecked = (function wagjo$data$array$nth_unchecked(a,index){
return (a[index]);
});
/**
 * Same as, but much more efficient than, first.
 * If the array is empty, returns nil.
 */
wagjo.data.array.peekl = (function wagjo$data$array$peekl(a){
if(wagjo.data.array.empty_QMARK_.call(null,a)){
return null;
} else {
return (a[(0)]);
}
});
/**
 * Same as, but much more efficient than, last.
 * If the array is empty, returns nil.
 */
wagjo.data.array.peekr = (function wagjo$data$array$peekr(a){
if(wagjo.data.array.empty_QMARK_.call(null,a)){
return null;
} else {
return (a[(a.length - (1))]);
}
});
wagjo.data.array.peek = wagjo.data.array.peekr;
/**
 * Same as, but much more efficient than, first.
 * Undefined behavior if the array is empty.
 */
wagjo.data.array.peekl_unchecked = (function wagjo$data$array$peekl_unchecked(a){
return (a[(0)]);
});
/**
 * Same as, but much more efficient than, last.
 * Undefined behavior if the array is empty.
 */
wagjo.data.array.peekr_unchecked = (function wagjo$data$array$peekr_unchecked(a){
return (a[(a.length - (1))]);
});
wagjo.data.array.peek_unchecked = wagjo.data.array.peekr_unchecked;
/**
 * Returns cloned copy of array.
 */
wagjo.data.array.clone = (function wagjo$data$array$clone(a){
return a.slice();
});
/**
 * Removes the last item from a. If the array is empty,
 * throws an exception. Mutates input array. Returns nil.
 */
wagjo.data.array.pop_BANG_ = (function wagjo$data$array$pop_BANG_(a){
if(wagjo.data.array.empty_QMARK_.call(null,a)){
throw "Cannot pop empty array or nil!";
} else {
a.pop();

return null;
}
});
/**
 * Sets the val at index. Mutates input array.
 * Note - index must be <= (count a). Returns nil.
 */
wagjo.data.array.assoc_BANG_ = (function wagjo$data$array$assoc_BANG_(a,index,val){
(a[index] = val);

return null;
});
/**
 * Sets the val at index. Mutates input array. f is a function that
 * will take the old value and return the new value.
 * Note - index must be < (count a). Returns nil.
 */
wagjo.data.array.update_BANG_ = (function wagjo$data$array$update_BANG_(a,index,f){
(a[index] = f.call(null,(a[index])));

return null;
});
/**
 * Appends x at array a. Mutates input array. Returns nil.
 */
wagjo.data.array.conj_BANG_ = (function wagjo$data$array$conj_BANG_(a,x){
a.push(x);

return null;
});
/**
 * Less clever array splice. Removes n elements after index
 * (including index) before inserting. Inserts just one element
 * x at index. Mutates input array. Returns array of removed items.
 */
wagjo.data.array.splice_BANG_ = (function wagjo$data$array$splice_BANG_(a,index,n,x){
return a.splice(index,n,x);
});
/**
 * Clever array splice. Works just like Array.splice()
 * (Changes the content of an array, adding new elements while removing
 * old elements). Inserts elements from xs into a at index
 * after removing n elements from that position.
 * Mutates input array. Returns array of removed items.
 */
wagjo.data.array.splice_seq_BANG_ = (function wagjo$data$array$splice_seq_BANG_(a,index,n,xs){
var sfn = a.splice;
var ar = [index,n];
return sfn.apply(a,ar.concat(cljs.core.to_array.call(null,xs)));
});
/**
 * Clever array splice. Works just like Array.splice()
 * (Changes the content of an array, adding new elements while removing
 * old elements). Inserts elements from axs into a at index
 * after removing n elements from that position.
 * Mutates input array. Returns array of removed items.
 */
wagjo.data.array.splice_arr_BANG_ = (function wagjo$data$array$splice_arr_BANG_(a,index,n,axs){
var sfn = a.splice;
var ar = [index,n];
return sfn.apply(a,ar.concat((function (){var or__19555__auto__ = axs;
if(cljs.core.truth_(or__19555__auto__)){
return or__19555__auto__;
} else {
return [];
}
})()));
});
/**
 * Inserts x into array a at index.
 * Mutates input array. Returns nil.
 */
wagjo.data.array.insert_before_BANG_ = (function wagjo$data$array$insert_before_BANG_(a,index,x){
a.splice(index,(0),x);

return null;
});
/**
 * Inserts xs into array a at index.
 * Mutates input array. Returns nil.
 */
wagjo.data.array.insert_before_seq_BANG_ = (function wagjo$data$array$insert_before_seq_BANG_(a,index,xs){
wagjo.data.array.splice_seq_BANG_.call(null,a,index,(0),xs);

return null;
});
/**
 * Inserts axs represented as array into array a at index.
 * Mutates input array. Returns nil.
 */
wagjo.data.array.insert_before_arr_BANG_ = (function wagjo$data$array$insert_before_arr_BANG_(a,index,axs){
wagjo.data.array.splice_arr_BANG_.call(null,a,index,(0),axs);

return null;
});
/**
 * Removes one item from array a at index.
 * Mutates input array. Returns the array of removed items.
 */
wagjo.data.array.remove_at_BANG_ = (function wagjo$data$array$remove_at_BANG_(a,index){
return a.splice(index,(1));
});
/**
 * Removes n items from array a starting at index.
 * Mutates input array. Returns the array of removed items.
 */
wagjo.data.array.remove_n_BANG_ = (function wagjo$data$array$remove_n_BANG_(a,index,n){
return a.splice(index,n);
});
/**
 * Removes all items from array a after index (including index).
 * Mutates input array. Returns the array of removed items.
 */
wagjo.data.array.remove_after_BANG_ = (function wagjo$data$array$remove_after_BANG_(a,index){
return a.splice(index);
});
/**
 * Removes all items from array a after index (including index).
 * Mutates input array. Returns the array of removed items.
 */
wagjo.data.array.remove_before_BANG_ = (function wagjo$data$array$remove_before_BANG_(a,index){
return a.splice((0),index);
});
/**
 * Returns the subarray of a beginning at start inclusive, and ending
 * at end, exclusive.
 */
wagjo.data.array.slice = (function wagjo$data$array$slice(a,start,end){
return a.slice(start,end);
});
/**
 * Returns the subarray of a beginning at start inclusive, until the
 * end of array.
 */
wagjo.data.array.slice_from = (function wagjo$data$array$slice_from(a,start){
return a.slice(start);
});
/**
 * Returns the subarray of a from its start, and ending
 * at end, exclusive.
 */
wagjo.data.array.slice_to = (function wagjo$data$array$slice_to(a,end){
return a.slice((0),end);
});
/**
 * Returns vector of arrays produced by splitting a at index pos.
 */
wagjo.data.array.split_at = (function wagjo$data$array$split_at(a,index){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wagjo.data.array.slice_to.call(null,a,index),wagjo.data.array.slice_from.call(null,a,index)], null);
});
/**
 * Returns new array which is a concatenation of a1 and a2.
 * Eager version of clojure.core/concat.
 */
wagjo.data.array.cat = (function wagjo$data$array$cat(a1,a2){
return a1.concat((function (){var or__19555__auto__ = a2;
if(cljs.core.truth_(or__19555__auto__)){
return or__19555__auto__;
} else {
return [];
}
})());
});
/**
 * Returns new array without first item. If the array is empty,
 * throws an exception.
 */
wagjo.data.array.popl = (function wagjo$data$array$popl(a){
if(wagjo.data.array.empty_QMARK_.call(null,a)){
throw "Cannot pop empty or nil array.";
} else {
return a.slice((1));
}
});
/**
 * Returns new array without last item. If the array is empty,
 * throws an exception.
 */
wagjo.data.array.popr = (function wagjo$data$array$popr(a){
if(wagjo.data.array.empty_QMARK_.call(null,a)){
throw "Cannot pop empty or nil array.";
} else {
return a.slice((0),(-1));
}
});
wagjo.data.array.pop = wagjo.data.array.popr;
/**
 * Returns new array without first item.
 * Undefined behavior if the array is empty.
 */
wagjo.data.array.popl_unchecked = (function wagjo$data$array$popl_unchecked(a){
return a.slice((1));
});
/**
 * Returns new array without last item.
 * Undefined behavior if the array is empty.
 */
wagjo.data.array.popr_unchecked = (function wagjo$data$array$popr_unchecked(a){
return a.slice((0),(-1));
});
wagjo.data.array.pop_unchecked = wagjo.data.array.popr_unchecked;
/**
 * Assoc[iate]. Returns a new array that contains val at index.
 * Note - index must be <= (count array).
 */
wagjo.data.array.assoc = (function wagjo$data$array$assoc(a,index,val){
var newa = wagjo.data.array.clone.call(null,a);
wagjo.data.array.assoc_BANG_.call(null,newa,index,val);

return newa;
});
/**
 * Returns a new array that contains updated val at index.
 * Note - index must be < (count array).
 */
wagjo.data.array.update = (function wagjo$data$array$update(a,index,f){
var newa = wagjo.data.array.clone.call(null,a);
wagjo.data.array.update_BANG_.call(null,newa,index,f);

return newa;
});
/**
 * conj[oin]. Returns a new array with var added to the left.
 */
wagjo.data.array.conjl = (function wagjo$data$array$conjl(a,val){
var newa = wagjo.data.array.clone.call(null,a);
wagjo.data.array.insert_before_BANG_.call(null,newa,(0),val);

return newa;
});
/**
 * conj[oin]. Returns a new array with var added to the right.
 */
wagjo.data.array.conjr = (function wagjo$data$array$conjr(a,val){
var newa = wagjo.data.array.clone.call(null,a);
wagjo.data.array.conj_BANG_.call(null,newa,val);

return newa;
});
wagjo.data.array.conj = wagjo.data.array.conjr;
/**
 * conj[oin]. Returns a new array with var-arr added to the left.
 * Order of elements is retained.
 */
wagjo.data.array.conjl_arr = (function wagjo$data$array$conjl_arr(a,val_arr){
return wagjo.data.array.cat.call(null,val_arr,a);
});
/**
 * conj[oin]. Returns a new array with var-arr added to the right.
 */
wagjo.data.array.conjr_arr = (function wagjo$data$array$conjr_arr(a,val_arr){
return wagjo.data.array.cat.call(null,a,val_arr);
});
wagjo.data.array.conj_arr = wagjo.data.array.conjr_arr;
/**
 * Returns new array with n items starting at index pos
 * replaced with val.
 */
wagjo.data.array.splice = (function wagjo$data$array$splice(a,index,n,val){
var newa = wagjo.data.array.clone.call(null,a);
wagjo.data.array.splice_BANG_.call(null,newa,index,n,val);

return newa;
});
/**
 * Returns new array with n items starting at index pos
 * replaced with items in val-arr.
 */
wagjo.data.array.splice_arr = (function wagjo$data$array$splice_arr(a,index,n,val_arr){
var newa = wagjo.data.array.clone.call(null,a);
wagjo.data.array.splice_arr_BANG_.call(null,newa,index,n,val_arr);

return newa;
});
/**
 * Returns a new array with val inserted before index.
 */
wagjo.data.array.insert_before = (function wagjo$data$array$insert_before(a,index,val){
var newa = wagjo.data.array.clone.call(null,a);
wagjo.data.array.insert_before_BANG_.call(null,newa,index,val);

return newa;
});
/**
 * Returns a new array with val-arr inserted before index.
 */
wagjo.data.array.insert_before_arr = (function wagjo$data$array$insert_before_arr(a,index,val_arr){
var newa = wagjo.data.array.clone.call(null,a);
wagjo.data.array.insert_before_arr_BANG_.call(null,newa,index,val_arr);

return newa;
});
/**
 * Returns new array with item at index position removed.
 */
wagjo.data.array.remove_at = (function wagjo$data$array$remove_at(a,index){
var newa = wagjo.data.array.clone.call(null,a);
wagjo.data.array.remove_at_BANG_.call(null,newa,index);

return newa;
});
/**
 * Returns new array with n items starting at index position
 * (index position included) removed.
 */
wagjo.data.array.remove_n = (function wagjo$data$array$remove_n(a,index,n){
var newa = wagjo.data.array.clone.call(null,a);
wagjo.data.array.remove_n_BANG_.call(null,newa,index,n);

return newa;
});
/**
 * Returns result of ripping array at index pos.
 * Returns [pre-arr item suf-arr]. Throws exception for empty array.
 */
wagjo.data.array.rip = (function wagjo$data$array$rip(a,index){
if(wagjo.data.array.empty_QMARK_.call(null,a)){
throw "Cannot rip empty or nil array!";
} else {
if((a.length === (1))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wagjo.data.array.empty.call(null),(a[(0)]),wagjo.data.array.empty.call(null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [wagjo.data.array.slice_to.call(null,a,index),(a[index]),wagjo.data.array.slice_from.call(null,a,(index + (1)))], null);

}
}
});
/**
 * Returns sewed array. Kinda opposite of rip.
 */
wagjo.data.array.sew = (function wagjo$data$array$sew(pre_arr,item_arr,suf_arr){
return pre_arr.concat((function (){var or__19555__auto__ = item_arr;
if(cljs.core.truth_(or__19555__auto__)){
return or__19555__auto__;
} else {
return [];
}
})(),(function (){var or__19555__auto__ = suf_arr;
if(cljs.core.truth_(or__19555__auto__)){
return or__19555__auto__;
} else {
return [];
}
})());
});
/**
 * Returns new array with n items trimmed from left.
 */
wagjo.data.array.triml = (function wagjo$data$array$triml(a,n){
return a.slice(n);
});
/**
 * Returns new array with n items trimmed from right.
 */
wagjo.data.array.trimr = (function wagjo$data$array$trimr(a,n){
return a.slice((0),(- n));
});
/**
 * Returns new array with nl items trimmed from left and nr items
 * trimmed from right.
 */
wagjo.data.array.trim = (function wagjo$data$array$trim(a,nl,nr){
return a.slice(nl,(- nr));
});
/**
 * Eager array map. Returns new array.
 * f takes element as an argument.
 * Eager version of clojure.core/map.
 */
wagjo.data.array.mape = (function wagjo$data$array$mape(f,a){
if((a == null)){
return null;
} else {
var a__$1 = cljs.core.aclone.call(null,a);
var i = (0);
while(true){
if((i < a__$1.length)){
var nval = f.call(null,(a__$1[i]));
(a__$1[i] = nval);

var G__24211 = (i + (1));
i = G__24211;
continue;
} else {
return a__$1;
}
break;
}
}
});
/**
 * Eager array map-indexed. Returns new array.
 * f takes two arguments, index and element.
 * Eager version of clojure.core/map-indexed.
 */
wagjo.data.array.mape_indexed = (function wagjo$data$array$mape_indexed(f,a){
if((a == null)){
return null;
} else {
var a__$1 = cljs.core.aclone.call(null,a);
var i = (0);
while(true){
if((i < a__$1.length)){
var nval = f.call(null,i,(a__$1[i]));
(a__$1[i] = nval);

var G__24212 = (i + (1));
i = G__24212;
continue;
} else {
return a__$1;
}
break;
}
}
});
/**
 * Array reduce. Faster variant of clojure.core/reduce.
 */
wagjo.data.array.reduce = (function wagjo$data$array$reduce(f,init,a){
if((a == null)){
return init;
} else {
var val = init;
var i = (0);
while(true){
if((i < a.length)){
var nval = f.call(null,val,(a[i]));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__24213 = nval;
var G__24214 = (i + (1));
val = G__24213;
i = G__24214;
continue;
}
} else {
return val;
}
break;
}
}
});
/**
 * Array reduce without starting value.
 * Faster variant of clojure.core/reduce.
 */
wagjo.data.array.reduce2 = (function wagjo$data$array$reduce2(f,a){
if(wagjo.data.array.empty_QMARK_.call(null,a)){
var r = f.call(null);
if(cljs.core.reduced_QMARK_.call(null,r)){
return cljs.core.deref.call(null,r);
} else {
return r;
}
} else {
var val = (a[(0)]);
var i = (1);
while(true){
if((i < a.length)){
var nval = f.call(null,val,(a[i]));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__24215 = nval;
var G__24216 = (i + (1));
val = G__24215;
i = G__24216;
continue;
}
} else {
return val;
}
break;
}
}
});
/**
 * Reverse array reduce. Very fast.
 */
wagjo.data.array.reduce_reverse = (function wagjo$data$array$reduce_reverse(f,init,a){
var val = init;
var i = (((a == null))?(0):a.length);
while(true){
if((i > (0))){
var i__$1 = (i - (1));
var nval = f.call(null,val,(a[i__$1]));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__24217 = nval;
var G__24218 = i__$1;
val = G__24217;
i = G__24218;
continue;
}
} else {
return val;
}
break;
}
});
/**
 * Reverse array reduce without starting value.
 * Very fast.
 */
wagjo.data.array.reduce2_reverse = (function wagjo$data$array$reduce2_reverse(f,a){
if(wagjo.data.array.empty_QMARK_.call(null,a)){
var r = f.call(null);
if(cljs.core.reduced_QMARK_.call(null,r)){
return cljs.core.deref.call(null,r);
} else {
return r;
}
} else {
var val = (a[(a.length - (1))]);
var i = (a.length - (1));
while(true){
if((i > (0))){
var i__$1 = (i - (1));
var nval = f.call(null,val,(a[i__$1]));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__24219 = nval;
var G__24220 = i__$1;
val = G__24219;
i = G__24220;
continue;
}
} else {
return val;
}
break;
}
}
});
/**
 * Array reduce-kv. Faster variant of clojure.core/reduce-kv.
 */
wagjo.data.array.reduce_kv = (function wagjo$data$array$reduce_kv(f,init,a){
if((a == null)){
return init;
} else {
var val = init;
var i = (0);
while(true){
if((i < a.length)){
var nval = f.call(null,val,i,(a[i]));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__24221 = nval;
var G__24222 = (i + (1));
val = G__24221;
i = G__24222;
continue;
}
} else {
return val;
}
break;
}
}
});
/**
 * Array reduce-kv, without starting value.
 * Faster variant of clojure.core/reduce-kv.
 */
wagjo.data.array.reduce2_kv = (function wagjo$data$array$reduce2_kv(f,a){
if(wagjo.data.array.empty_QMARK_.call(null,a)){
var r = f.call(null);
if(cljs.core.reduced_QMARK_.call(null,r)){
return cljs.core.deref.call(null,r);
} else {
return r;
}
} else {
var val = (a[(0)]);
var i = (1);
while(true){
if((i < a.length)){
var nval = f.call(null,val,i,(a[i]));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__24223 = nval;
var G__24224 = (i + (1));
val = G__24223;
i = G__24224;
continue;
}
} else {
return val;
}
break;
}
}
});
/**
 * Reverse array reduce. Very fast.
 */
wagjo.data.array.reduce_kv_reverse = (function wagjo$data$array$reduce_kv_reverse(f,init,a){
var val = init;
var i = (((a == null))?(0):a.length);
while(true){
if((i > (0))){
var i__$1 = (i - (1));
var nval = f.call(null,val,i__$1,(a[i__$1]));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__24225 = nval;
var G__24226 = i__$1;
val = G__24225;
i = G__24226;
continue;
}
} else {
return val;
}
break;
}
});
/**
 * Reverse array reduce. Very fast.
 */
wagjo.data.array.reduce2_kv_reverse = (function wagjo$data$array$reduce2_kv_reverse(f,a){
if(wagjo.data.array.empty_QMARK_.call(null,a)){
var r = f.call(null);
if(cljs.core.reduced_QMARK_.call(null,r)){
return cljs.core.deref.call(null,r);
} else {
return r;
}
} else {
var val = (a[(a.length - (1))]);
var i = (a.length - (1));
while(true){
if((i > (0))){
var i__$1 = (i - (1));
var nval = f.call(null,val,i__$1,(a[i__$1]));
if(cljs.core.reduced_QMARK_.call(null,nval)){
return cljs.core.deref.call(null,nval);
} else {
var G__24227 = nval;
var G__24228 = i__$1;
val = G__24227;
i = G__24228;
continue;
}
} else {
return val;
}
break;
}
}
});
/**
 * Returns index of val inside a.
 * Returns -1 if val was not found.
 */
wagjo.data.array.index_of = (function wagjo$data$array$index_of(a,val){
return a.indexOf(val);
});
/**
 * Returns index of val inside a, starting at
 * index-from. Returns -1 if val was not found.
 */
wagjo.data.array.index_of_from = (function wagjo$data$array$index_of_from(a,val,index_from){
return a.indexOf(val,index_from);
});

//# sourceMappingURL=array.js.map