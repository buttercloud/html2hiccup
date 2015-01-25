// Compiled by ClojureScript 0.0-2371
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.text = (function text(elem){var or__3640__auto__ = elem.textContent;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return elem.innerText;
}
});
dommy.core.html = (function html(elem){return elem.innerHTML;
});
dommy.core.value = (function value(elem){return elem.value;
});
dommy.core.class$ = (function class$(elem){return elem.className;
});
dommy.core.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){var pixels = dommy.core.style.call(null,elem,k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto__ = elem.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(c__$1);
} else
{var temp__4126__auto__ = dommy.core.class$.call(null,elem);if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){var r = elem.getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function parent(elem){return elem.parentNode;
});
dommy.core.children = (function children(elem){return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__6655_SHARP_){return !((p1__6655_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){if(cljs.core.truth_(ancestor.contains))
{return ancestor.contains(descendant);
} else
{if(cljs.core.truth_(ancestor.compareDocumentPosition))
{return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else
{return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){if(!((void 0 === elem.textContent)))
{elem.textContent = text;
} else
{elem.innerText = text;
}
return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){elem.innerHTML = html;
return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){elem.value = value;
return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var style = elem.style;var seq__6662_6668 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6663_6669 = null;var count__6664_6670 = (0);var i__6665_6671 = (0);while(true){
if((i__6665_6671 < count__6664_6670))
{var vec__6666_6672 = cljs.core._nth.call(null,chunk__6663_6669,i__6665_6671);var k_6673 = cljs.core.nth.call(null,vec__6666_6672,(0),null);var v_6674 = cljs.core.nth.call(null,vec__6666_6672,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6673),v_6674);
{
var G__6675 = seq__6662_6668;
var G__6676 = chunk__6663_6669;
var G__6677 = count__6664_6670;
var G__6678 = (i__6665_6671 + (1));
seq__6662_6668 = G__6675;
chunk__6663_6669 = G__6676;
count__6664_6670 = G__6677;
i__6665_6671 = G__6678;
continue;
}
} else
{var temp__4126__auto___6679 = cljs.core.seq.call(null,seq__6662_6668);if(temp__4126__auto___6679)
{var seq__6662_6680__$1 = temp__4126__auto___6679;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6662_6680__$1))
{var c__4410__auto___6681 = cljs.core.chunk_first.call(null,seq__6662_6680__$1);{
var G__6682 = cljs.core.chunk_rest.call(null,seq__6662_6680__$1);
var G__6683 = c__4410__auto___6681;
var G__6684 = cljs.core.count.call(null,c__4410__auto___6681);
var G__6685 = (0);
seq__6662_6668 = G__6682;
chunk__6663_6669 = G__6683;
count__6664_6670 = G__6684;
i__6665_6671 = G__6685;
continue;
}
} else
{var vec__6667_6686 = cljs.core.first.call(null,seq__6662_6680__$1);var k_6687 = cljs.core.nth.call(null,vec__6667_6686,(0),null);var v_6688 = cljs.core.nth.call(null,vec__6667_6686,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_6687),v_6688);
{
var G__6689 = cljs.core.next.call(null,seq__6662_6680__$1);
var G__6690 = null;
var G__6691 = (0);
var G__6692 = (0);
seq__6662_6668 = G__6689;
chunk__6663_6669 = G__6690;
count__6664_6670 = G__6691;
i__6665_6671 = G__6692;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6693){
var elem = cljs.core.first(arglist__6693);
var kvs = cljs.core.rest(arglist__6693);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__6700_6706 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__6701_6707 = null;var count__6702_6708 = (0);var i__6703_6709 = (0);while(true){
if((i__6703_6709 < count__6702_6708))
{var vec__6704_6710 = cljs.core._nth.call(null,chunk__6701_6707,i__6703_6709);var k_6711 = cljs.core.nth.call(null,vec__6704_6710,(0),null);var v_6712 = cljs.core.nth.call(null,vec__6704_6710,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_6711,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6712)+"px"));
{
var G__6713 = seq__6700_6706;
var G__6714 = chunk__6701_6707;
var G__6715 = count__6702_6708;
var G__6716 = (i__6703_6709 + (1));
seq__6700_6706 = G__6713;
chunk__6701_6707 = G__6714;
count__6702_6708 = G__6715;
i__6703_6709 = G__6716;
continue;
}
} else
{var temp__4126__auto___6717 = cljs.core.seq.call(null,seq__6700_6706);if(temp__4126__auto___6717)
{var seq__6700_6718__$1 = temp__4126__auto___6717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6700_6718__$1))
{var c__4410__auto___6719 = cljs.core.chunk_first.call(null,seq__6700_6718__$1);{
var G__6720 = cljs.core.chunk_rest.call(null,seq__6700_6718__$1);
var G__6721 = c__4410__auto___6719;
var G__6722 = cljs.core.count.call(null,c__4410__auto___6719);
var G__6723 = (0);
seq__6700_6706 = G__6720;
chunk__6701_6707 = G__6721;
count__6702_6708 = G__6722;
i__6703_6709 = G__6723;
continue;
}
} else
{var vec__6705_6724 = cljs.core.first.call(null,seq__6700_6718__$1);var k_6725 = cljs.core.nth.call(null,vec__6705_6724,(0),null);var v_6726 = cljs.core.nth.call(null,vec__6705_6724,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_6725,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_6726)+"px"));
{
var G__6727 = cljs.core.next.call(null,seq__6700_6718__$1);
var G__6728 = null;
var G__6729 = (0);
var G__6730 = (0);
seq__6700_6706 = G__6727;
chunk__6701_6707 = G__6728;
count__6702_6708 = G__6729;
i__6703_6709 = G__6730;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__6731){
var elem = cljs.core.first(arglist__6731);
var kvs = cljs.core.rest(arglist__6731);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){var k__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__6740 = elem;(G__6740[k__$1] = v);
return G__6740;
} else
{var G__6741 = elem;G__6741.setAttribute(k__$1,v);
return G__6741;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__6748__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__6742_6749 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__6743_6750 = null;var count__6744_6751 = (0);var i__6745_6752 = (0);while(true){
if((i__6745_6752 < count__6744_6751))
{var vec__6746_6753 = cljs.core._nth.call(null,chunk__6743_6750,i__6745_6752);var k_6754__$1 = cljs.core.nth.call(null,vec__6746_6753,(0),null);var v_6755__$1 = cljs.core.nth.call(null,vec__6746_6753,(1),null);set_attr_BANG_.call(null,elem,k_6754__$1,v_6755__$1);
{
var G__6756 = seq__6742_6749;
var G__6757 = chunk__6743_6750;
var G__6758 = count__6744_6751;
var G__6759 = (i__6745_6752 + (1));
seq__6742_6749 = G__6756;
chunk__6743_6750 = G__6757;
count__6744_6751 = G__6758;
i__6745_6752 = G__6759;
continue;
}
} else
{var temp__4126__auto___6760 = cljs.core.seq.call(null,seq__6742_6749);if(temp__4126__auto___6760)
{var seq__6742_6761__$1 = temp__4126__auto___6760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6742_6761__$1))
{var c__4410__auto___6762 = cljs.core.chunk_first.call(null,seq__6742_6761__$1);{
var G__6763 = cljs.core.chunk_rest.call(null,seq__6742_6761__$1);
var G__6764 = c__4410__auto___6762;
var G__6765 = cljs.core.count.call(null,c__4410__auto___6762);
var G__6766 = (0);
seq__6742_6749 = G__6763;
chunk__6743_6750 = G__6764;
count__6744_6751 = G__6765;
i__6745_6752 = G__6766;
continue;
}
} else
{var vec__6747_6767 = cljs.core.first.call(null,seq__6742_6761__$1);var k_6768__$1 = cljs.core.nth.call(null,vec__6747_6767,(0),null);var v_6769__$1 = cljs.core.nth.call(null,vec__6747_6767,(1),null);set_attr_BANG_.call(null,elem,k_6768__$1,v_6769__$1);
{
var G__6770 = cljs.core.next.call(null,seq__6742_6761__$1);
var G__6771 = null;
var G__6772 = (0);
var G__6773 = (0);
seq__6742_6749 = G__6770;
chunk__6743_6750 = G__6771;
count__6744_6751 = G__6772;
i__6745_6752 = G__6773;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6748 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__6748__delegate.call(this,elem,k,v,kvs);};
G__6748.cljs$lang$maxFixedArity = 3;
G__6748.cljs$lang$applyTo = (function (arglist__6774){
var elem = cljs.core.first(arglist__6774);
arglist__6774 = cljs.core.next(arglist__6774);
var k = cljs.core.first(arglist__6774);
arglist__6774 = cljs.core.next(arglist__6774);
var v = cljs.core.first(arglist__6774);
var kvs = cljs.core.rest(arglist__6774);
return G__6748__delegate(elem,k,v,kvs);
});
G__6748.cljs$core$IFn$_invoke$arity$variadic = G__6748__delegate;
return G__6748;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var k_6783__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_6783__$1)))
{dommy.core.set_class_BANG_.call(null,elem,"");
} else
{elem.removeAttribute(k_6783__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__6784__delegate = function (elem,k,ks){var seq__6779_6785 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__6780_6786 = null;var count__6781_6787 = (0);var i__6782_6788 = (0);while(true){
if((i__6782_6788 < count__6781_6787))
{var k_6789__$1 = cljs.core._nth.call(null,chunk__6780_6786,i__6782_6788);remove_attr_BANG_.call(null,elem,k_6789__$1);
{
var G__6790 = seq__6779_6785;
var G__6791 = chunk__6780_6786;
var G__6792 = count__6781_6787;
var G__6793 = (i__6782_6788 + (1));
seq__6779_6785 = G__6790;
chunk__6780_6786 = G__6791;
count__6781_6787 = G__6792;
i__6782_6788 = G__6793;
continue;
}
} else
{var temp__4126__auto___6794 = cljs.core.seq.call(null,seq__6779_6785);if(temp__4126__auto___6794)
{var seq__6779_6795__$1 = temp__4126__auto___6794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6779_6795__$1))
{var c__4410__auto___6796 = cljs.core.chunk_first.call(null,seq__6779_6795__$1);{
var G__6797 = cljs.core.chunk_rest.call(null,seq__6779_6795__$1);
var G__6798 = c__4410__auto___6796;
var G__6799 = cljs.core.count.call(null,c__4410__auto___6796);
var G__6800 = (0);
seq__6779_6785 = G__6797;
chunk__6780_6786 = G__6798;
count__6781_6787 = G__6799;
i__6782_6788 = G__6800;
continue;
}
} else
{var k_6801__$1 = cljs.core.first.call(null,seq__6779_6795__$1);remove_attr_BANG_.call(null,elem,k_6801__$1);
{
var G__6802 = cljs.core.next.call(null,seq__6779_6795__$1);
var G__6803 = null;
var G__6804 = (0);
var G__6805 = (0);
seq__6779_6785 = G__6802;
chunk__6780_6786 = G__6803;
count__6781_6787 = G__6804;
i__6782_6788 = G__6805;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6784 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6784__delegate.call(this,elem,k,ks);};
G__6784.cljs$lang$maxFixedArity = 2;
G__6784.cljs$lang$applyTo = (function (arglist__6806){
var elem = cljs.core.first(arglist__6806);
arglist__6806 = cljs.core.next(arglist__6806);
var k = cljs.core.first(arglist__6806);
var ks = cljs.core.rest(arglist__6806);
return G__6784__delegate(elem,k,ks);
});
G__6784.cljs$core$IFn$_invoke$arity$variadic = G__6784__delegate;
return G__6784;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){if(add_QMARK_)
{return dommy.core.set_attr_BANG_.call(null,elem,k);
} else
{return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___6831 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6831))
{var class_list_6832 = temp__4124__auto___6831;var seq__6819_6833 = cljs.core.seq.call(null,classes__$1);var chunk__6820_6834 = null;var count__6821_6835 = (0);var i__6822_6836 = (0);while(true){
if((i__6822_6836 < count__6821_6835))
{var c_6837 = cljs.core._nth.call(null,chunk__6820_6834,i__6822_6836);class_list_6832.add(c_6837);
{
var G__6838 = seq__6819_6833;
var G__6839 = chunk__6820_6834;
var G__6840 = count__6821_6835;
var G__6841 = (i__6822_6836 + (1));
seq__6819_6833 = G__6838;
chunk__6820_6834 = G__6839;
count__6821_6835 = G__6840;
i__6822_6836 = G__6841;
continue;
}
} else
{var temp__4126__auto___6842 = cljs.core.seq.call(null,seq__6819_6833);if(temp__4126__auto___6842)
{var seq__6819_6843__$1 = temp__4126__auto___6842;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6819_6843__$1))
{var c__4410__auto___6844 = cljs.core.chunk_first.call(null,seq__6819_6843__$1);{
var G__6845 = cljs.core.chunk_rest.call(null,seq__6819_6843__$1);
var G__6846 = c__4410__auto___6844;
var G__6847 = cljs.core.count.call(null,c__4410__auto___6844);
var G__6848 = (0);
seq__6819_6833 = G__6845;
chunk__6820_6834 = G__6846;
count__6821_6835 = G__6847;
i__6822_6836 = G__6848;
continue;
}
} else
{var c_6849 = cljs.core.first.call(null,seq__6819_6843__$1);class_list_6832.add(c_6849);
{
var G__6850 = cljs.core.next.call(null,seq__6819_6843__$1);
var G__6851 = null;
var G__6852 = (0);
var G__6853 = (0);
seq__6819_6833 = G__6850;
chunk__6820_6834 = G__6851;
count__6821_6835 = G__6852;
i__6822_6836 = G__6853;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__6823_6854 = cljs.core.seq.call(null,classes__$1);var chunk__6824_6855 = null;var count__6825_6856 = (0);var i__6826_6857 = (0);while(true){
if((i__6826_6857 < count__6825_6856))
{var c_6858 = cljs.core._nth.call(null,chunk__6824_6855,i__6826_6857);var class_name_6859 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6859,c_6858)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6859 === ""))?c_6858:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6859)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_6858))));
}
{
var G__6860 = seq__6823_6854;
var G__6861 = chunk__6824_6855;
var G__6862 = count__6825_6856;
var G__6863 = (i__6826_6857 + (1));
seq__6823_6854 = G__6860;
chunk__6824_6855 = G__6861;
count__6825_6856 = G__6862;
i__6826_6857 = G__6863;
continue;
}
} else
{var temp__4126__auto___6864 = cljs.core.seq.call(null,seq__6823_6854);if(temp__4126__auto___6864)
{var seq__6823_6865__$1 = temp__4126__auto___6864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6823_6865__$1))
{var c__4410__auto___6866 = cljs.core.chunk_first.call(null,seq__6823_6865__$1);{
var G__6867 = cljs.core.chunk_rest.call(null,seq__6823_6865__$1);
var G__6868 = c__4410__auto___6866;
var G__6869 = cljs.core.count.call(null,c__4410__auto___6866);
var G__6870 = (0);
seq__6823_6854 = G__6867;
chunk__6824_6855 = G__6868;
count__6825_6856 = G__6869;
i__6826_6857 = G__6870;
continue;
}
} else
{var c_6871 = cljs.core.first.call(null,seq__6823_6865__$1);var class_name_6872 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_6872,c_6871)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_6872 === ""))?c_6871:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_6872)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_6871))));
}
{
var G__6873 = cljs.core.next.call(null,seq__6823_6865__$1);
var G__6874 = null;
var G__6875 = (0);
var G__6876 = (0);
seq__6823_6854 = G__6873;
chunk__6824_6855 = G__6874;
count__6825_6856 = G__6875;
i__6826_6857 = G__6876;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem;
});
var add_class_BANG___3 = (function() { 
var G__6877__delegate = function (elem,classes,more_classes){var seq__6827_6878 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__6828_6879 = null;var count__6829_6880 = (0);var i__6830_6881 = (0);while(true){
if((i__6830_6881 < count__6829_6880))
{var c_6882 = cljs.core._nth.call(null,chunk__6828_6879,i__6830_6881);add_class_BANG_.call(null,elem,c_6882);
{
var G__6883 = seq__6827_6878;
var G__6884 = chunk__6828_6879;
var G__6885 = count__6829_6880;
var G__6886 = (i__6830_6881 + (1));
seq__6827_6878 = G__6883;
chunk__6828_6879 = G__6884;
count__6829_6880 = G__6885;
i__6830_6881 = G__6886;
continue;
}
} else
{var temp__4126__auto___6887 = cljs.core.seq.call(null,seq__6827_6878);if(temp__4126__auto___6887)
{var seq__6827_6888__$1 = temp__4126__auto___6887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6827_6888__$1))
{var c__4410__auto___6889 = cljs.core.chunk_first.call(null,seq__6827_6888__$1);{
var G__6890 = cljs.core.chunk_rest.call(null,seq__6827_6888__$1);
var G__6891 = c__4410__auto___6889;
var G__6892 = cljs.core.count.call(null,c__4410__auto___6889);
var G__6893 = (0);
seq__6827_6878 = G__6890;
chunk__6828_6879 = G__6891;
count__6829_6880 = G__6892;
i__6830_6881 = G__6893;
continue;
}
} else
{var c_6894 = cljs.core.first.call(null,seq__6827_6888__$1);add_class_BANG_.call(null,elem,c_6894);
{
var G__6895 = cljs.core.next.call(null,seq__6827_6888__$1);
var G__6896 = null;
var G__6897 = (0);
var G__6898 = (0);
seq__6827_6878 = G__6895;
chunk__6828_6879 = G__6896;
count__6829_6880 = G__6897;
i__6830_6881 = G__6898;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__6877 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6877__delegate.call(this,elem,classes,more_classes);};
G__6877.cljs$lang$maxFixedArity = 2;
G__6877.cljs$lang$applyTo = (function (arglist__6899){
var elem = cljs.core.first(arglist__6899);
arglist__6899 = cljs.core.next(arglist__6899);
var classes = cljs.core.first(arglist__6899);
var more_classes = cljs.core.rest(arglist__6899);
return G__6877__delegate(elem,classes,more_classes);
});
G__6877.cljs$core$IFn$_invoke$arity$variadic = G__6877__delegate;
return G__6877;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___6908 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6908))
{var class_list_6909 = temp__4124__auto___6908;class_list_6909.remove(c__$1);
} else
{var class_name_6910 = dommy.core.class$.call(null,elem);var new_class_name_6911 = dommy.utils.remove_class_str.call(null,class_name_6910,c__$1);if((class_name_6910 === new_class_name_6911))
{} else
{dommy.core.set_class_BANG_.call(null,elem,new_class_name_6911);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__6912__delegate = function (elem,class$,classes){var seq__6904 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__6905 = null;var count__6906 = (0);var i__6907 = (0);while(true){
if((i__6907 < count__6906))
{var c = cljs.core._nth.call(null,chunk__6905,i__6907);remove_class_BANG_.call(null,elem,c);
{
var G__6913 = seq__6904;
var G__6914 = chunk__6905;
var G__6915 = count__6906;
var G__6916 = (i__6907 + (1));
seq__6904 = G__6913;
chunk__6905 = G__6914;
count__6906 = G__6915;
i__6907 = G__6916;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6904);if(temp__4126__auto__)
{var seq__6904__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6904__$1))
{var c__4410__auto__ = cljs.core.chunk_first.call(null,seq__6904__$1);{
var G__6917 = cljs.core.chunk_rest.call(null,seq__6904__$1);
var G__6918 = c__4410__auto__;
var G__6919 = cljs.core.count.call(null,c__4410__auto__);
var G__6920 = (0);
seq__6904 = G__6917;
chunk__6905 = G__6918;
count__6906 = G__6919;
i__6907 = G__6920;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6904__$1);remove_class_BANG_.call(null,elem,c);
{
var G__6921 = cljs.core.next.call(null,seq__6904__$1);
var G__6922 = null;
var G__6923 = (0);
var G__6924 = (0);
seq__6904 = G__6921;
chunk__6905 = G__6922;
count__6906 = G__6923;
i__6907 = G__6924;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__6912 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6912__delegate.call(this,elem,class$,classes);};
G__6912.cljs$lang$maxFixedArity = 2;
G__6912.cljs$lang$applyTo = (function (arglist__6925){
var elem = cljs.core.first(arglist__6925);
arglist__6925 = cljs.core.next(arglist__6925);
var class$ = cljs.core.first(arglist__6925);
var classes = cljs.core.rest(arglist__6925);
return G__6912__delegate(elem,class$,classes);
});
G__6912.cljs$core$IFn$_invoke$arity$variadic = G__6912__delegate;
return G__6912;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___6926 = elem.classList;if(cljs.core.truth_(temp__4124__auto___6926))
{var class_list_6927 = temp__4124__auto___6926;class_list_6927.toggle(c__$1);
} else
{toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}
return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){if(add_QMARK_)
{dommy.core.add_class_BANG_.call(null,elem,class$);
} else
{dommy.core.remove_class_BANG_.call(null,elem,class$);
}
return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));if((window.innerHeight < (top + elem.offsetHeight)))
{return elem.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__6933 = parent;G__6933.appendChild(child);
return G__6933;
});
var append_BANG___3 = (function() { 
var G__6938__delegate = function (parent,child,more_children){var seq__6934_6939 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6935_6940 = null;var count__6936_6941 = (0);var i__6937_6942 = (0);while(true){
if((i__6937_6942 < count__6936_6941))
{var c_6943 = cljs.core._nth.call(null,chunk__6935_6940,i__6937_6942);append_BANG_.call(null,parent,c_6943);
{
var G__6944 = seq__6934_6939;
var G__6945 = chunk__6935_6940;
var G__6946 = count__6936_6941;
var G__6947 = (i__6937_6942 + (1));
seq__6934_6939 = G__6944;
chunk__6935_6940 = G__6945;
count__6936_6941 = G__6946;
i__6937_6942 = G__6947;
continue;
}
} else
{var temp__4126__auto___6948 = cljs.core.seq.call(null,seq__6934_6939);if(temp__4126__auto___6948)
{var seq__6934_6949__$1 = temp__4126__auto___6948;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6934_6949__$1))
{var c__4410__auto___6950 = cljs.core.chunk_first.call(null,seq__6934_6949__$1);{
var G__6951 = cljs.core.chunk_rest.call(null,seq__6934_6949__$1);
var G__6952 = c__4410__auto___6950;
var G__6953 = cljs.core.count.call(null,c__4410__auto___6950);
var G__6954 = (0);
seq__6934_6939 = G__6951;
chunk__6935_6940 = G__6952;
count__6936_6941 = G__6953;
i__6937_6942 = G__6954;
continue;
}
} else
{var c_6955 = cljs.core.first.call(null,seq__6934_6949__$1);append_BANG_.call(null,parent,c_6955);
{
var G__6956 = cljs.core.next.call(null,seq__6934_6949__$1);
var G__6957 = null;
var G__6958 = (0);
var G__6959 = (0);
seq__6934_6939 = G__6956;
chunk__6935_6940 = G__6957;
count__6936_6941 = G__6958;
i__6937_6942 = G__6959;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__6938 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6938__delegate.call(this,parent,child,more_children);};
G__6938.cljs$lang$maxFixedArity = 2;
G__6938.cljs$lang$applyTo = (function (arglist__6960){
var parent = cljs.core.first(arglist__6960);
arglist__6960 = cljs.core.next(arglist__6960);
var child = cljs.core.first(arglist__6960);
var more_children = cljs.core.rest(arglist__6960);
return G__6938__delegate(parent,child,more_children);
});
G__6938.cljs$core$IFn$_invoke$arity$variadic = G__6938__delegate;
return G__6938;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var G__6966 = parent;G__6966.insertBefore(child,parent.firstChild);
return G__6966;
});
var prepend_BANG___3 = (function() { 
var G__6971__delegate = function (parent,child,more_children){var seq__6967_6972 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__6968_6973 = null;var count__6969_6974 = (0);var i__6970_6975 = (0);while(true){
if((i__6970_6975 < count__6969_6974))
{var c_6976 = cljs.core._nth.call(null,chunk__6968_6973,i__6970_6975);prepend_BANG_.call(null,parent,c_6976);
{
var G__6977 = seq__6967_6972;
var G__6978 = chunk__6968_6973;
var G__6979 = count__6969_6974;
var G__6980 = (i__6970_6975 + (1));
seq__6967_6972 = G__6977;
chunk__6968_6973 = G__6978;
count__6969_6974 = G__6979;
i__6970_6975 = G__6980;
continue;
}
} else
{var temp__4126__auto___6981 = cljs.core.seq.call(null,seq__6967_6972);if(temp__4126__auto___6981)
{var seq__6967_6982__$1 = temp__4126__auto___6981;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6967_6982__$1))
{var c__4410__auto___6983 = cljs.core.chunk_first.call(null,seq__6967_6982__$1);{
var G__6984 = cljs.core.chunk_rest.call(null,seq__6967_6982__$1);
var G__6985 = c__4410__auto___6983;
var G__6986 = cljs.core.count.call(null,c__4410__auto___6983);
var G__6987 = (0);
seq__6967_6972 = G__6984;
chunk__6968_6973 = G__6985;
count__6969_6974 = G__6986;
i__6970_6975 = G__6987;
continue;
}
} else
{var c_6988 = cljs.core.first.call(null,seq__6967_6982__$1);prepend_BANG_.call(null,parent,c_6988);
{
var G__6989 = cljs.core.next.call(null,seq__6967_6982__$1);
var G__6990 = null;
var G__6991 = (0);
var G__6992 = (0);
seq__6967_6972 = G__6989;
chunk__6968_6973 = G__6990;
count__6969_6974 = G__6991;
i__6970_6975 = G__6992;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__6971 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__6971__delegate.call(this,parent,child,more_children);};
G__6971.cljs$lang$maxFixedArity = 2;
G__6971.cljs$lang$applyTo = (function (arglist__6993){
var parent = cljs.core.first(arglist__6993);
arglist__6993 = cljs.core.next(arglist__6993);
var child = cljs.core.first(arglist__6993);
var more_children = cljs.core.rest(arglist__6993);
return G__6971__delegate(parent,child,more_children);
});
G__6971.cljs$core$IFn$_invoke$arity$variadic = G__6971__delegate;
return G__6971;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var p = dommy.core.parent.call(null,other);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.insertBefore(elem,other);
return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___6994 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___6994))
{var next_6995 = temp__4124__auto___6994;dommy.core.insert_before_BANG_.call(null,elem,next_6995);
} else
{dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}
return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.replaceChild(new$,elem);
return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){var G__6997 = p;G__6997.removeChild(elem);
return G__6997;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__6998){var vec__6999 = p__6998;var special_mouse_event = cljs.core.nth.call(null,vec__6999,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__6999,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__6999,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__6999,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__3640__auto__ = event.selectedTarget;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__3628__auto__ = related_target;if(cljs.core.truth_(and__3628__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__3628__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__6999,special_mouse_event,real_mouse_event))
});})(vec__6999,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,elem,event.target,selector);if(cljs.core.truth_((function (){var and__3628__auto__ = selected_target;if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__3628__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__3640__auto__ = elem.dommyEventListeners;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = elem;return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__7000){
var elem = cljs.core.first(arglist__7000);
arglist__7000 = cljs.core.next(arglist__7000);
var f = cljs.core.first(arglist__7000);
var args = cljs.core.rest(arglist__7000);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__7024_7047 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7048 = cljs.core.nth.call(null,vec__7024_7047,(0),null);var selector_7049 = cljs.core.nth.call(null,vec__7024_7047,(1),null);var seq__7025_7050 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7032_7051 = null;var count__7033_7052 = (0);var i__7034_7053 = (0);while(true){
if((i__7034_7053 < count__7033_7052))
{var vec__7041_7054 = cljs.core._nth.call(null,chunk__7032_7051,i__7034_7053);var orig_type_7055 = cljs.core.nth.call(null,vec__7041_7054,(0),null);var f_7056 = cljs.core.nth.call(null,vec__7041_7054,(1),null);var seq__7035_7057 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7055,new cljs.core.PersistentArrayMap.fromArray([orig_type_7055,cljs.core.identity], true, false)));var chunk__7037_7058 = null;var count__7038_7059 = (0);var i__7039_7060 = (0);while(true){
if((i__7039_7060 < count__7038_7059))
{var vec__7042_7061 = cljs.core._nth.call(null,chunk__7037_7058,i__7039_7060);var actual_type_7062 = cljs.core.nth.call(null,vec__7042_7061,(0),null);var factory_7063 = cljs.core.nth.call(null,vec__7042_7061,(1),null);var canonical_f_7064 = (cljs.core.truth_(selector_7049)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7048,selector_7049):cljs.core.identity).call(null,factory_7063.call(null,f_7056));dommy.core.update_event_listeners_BANG_.call(null,elem_7048,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7049,actual_type_7062,f_7056], null),canonical_f_7064);
if(cljs.core.truth_(elem_7048.addEventListener))
{elem_7048.addEventListener(cljs.core.name.call(null,actual_type_7062),canonical_f_7064);
} else
{elem_7048.attachEvent(cljs.core.name.call(null,actual_type_7062),canonical_f_7064);
}
{
var G__7065 = seq__7035_7057;
var G__7066 = chunk__7037_7058;
var G__7067 = count__7038_7059;
var G__7068 = (i__7039_7060 + (1));
seq__7035_7057 = G__7065;
chunk__7037_7058 = G__7066;
count__7038_7059 = G__7067;
i__7039_7060 = G__7068;
continue;
}
} else
{var temp__4126__auto___7069 = cljs.core.seq.call(null,seq__7035_7057);if(temp__4126__auto___7069)
{var seq__7035_7070__$1 = temp__4126__auto___7069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7035_7070__$1))
{var c__4410__auto___7071 = cljs.core.chunk_first.call(null,seq__7035_7070__$1);{
var G__7072 = cljs.core.chunk_rest.call(null,seq__7035_7070__$1);
var G__7073 = c__4410__auto___7071;
var G__7074 = cljs.core.count.call(null,c__4410__auto___7071);
var G__7075 = (0);
seq__7035_7057 = G__7072;
chunk__7037_7058 = G__7073;
count__7038_7059 = G__7074;
i__7039_7060 = G__7075;
continue;
}
} else
{var vec__7043_7076 = cljs.core.first.call(null,seq__7035_7070__$1);var actual_type_7077 = cljs.core.nth.call(null,vec__7043_7076,(0),null);var factory_7078 = cljs.core.nth.call(null,vec__7043_7076,(1),null);var canonical_f_7079 = (cljs.core.truth_(selector_7049)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7048,selector_7049):cljs.core.identity).call(null,factory_7078.call(null,f_7056));dommy.core.update_event_listeners_BANG_.call(null,elem_7048,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7049,actual_type_7077,f_7056], null),canonical_f_7079);
if(cljs.core.truth_(elem_7048.addEventListener))
{elem_7048.addEventListener(cljs.core.name.call(null,actual_type_7077),canonical_f_7079);
} else
{elem_7048.attachEvent(cljs.core.name.call(null,actual_type_7077),canonical_f_7079);
}
{
var G__7080 = cljs.core.next.call(null,seq__7035_7070__$1);
var G__7081 = null;
var G__7082 = (0);
var G__7083 = (0);
seq__7035_7057 = G__7080;
chunk__7037_7058 = G__7081;
count__7038_7059 = G__7082;
i__7039_7060 = G__7083;
continue;
}
}
} else
{}
}
break;
}
{
var G__7084 = seq__7025_7050;
var G__7085 = chunk__7032_7051;
var G__7086 = count__7033_7052;
var G__7087 = (i__7034_7053 + (1));
seq__7025_7050 = G__7084;
chunk__7032_7051 = G__7085;
count__7033_7052 = G__7086;
i__7034_7053 = G__7087;
continue;
}
} else
{var temp__4126__auto___7088 = cljs.core.seq.call(null,seq__7025_7050);if(temp__4126__auto___7088)
{var seq__7025_7089__$1 = temp__4126__auto___7088;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7025_7089__$1))
{var c__4410__auto___7090 = cljs.core.chunk_first.call(null,seq__7025_7089__$1);{
var G__7091 = cljs.core.chunk_rest.call(null,seq__7025_7089__$1);
var G__7092 = c__4410__auto___7090;
var G__7093 = cljs.core.count.call(null,c__4410__auto___7090);
var G__7094 = (0);
seq__7025_7050 = G__7091;
chunk__7032_7051 = G__7092;
count__7033_7052 = G__7093;
i__7034_7053 = G__7094;
continue;
}
} else
{var vec__7044_7095 = cljs.core.first.call(null,seq__7025_7089__$1);var orig_type_7096 = cljs.core.nth.call(null,vec__7044_7095,(0),null);var f_7097 = cljs.core.nth.call(null,vec__7044_7095,(1),null);var seq__7026_7098 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7096,new cljs.core.PersistentArrayMap.fromArray([orig_type_7096,cljs.core.identity], true, false)));var chunk__7028_7099 = null;var count__7029_7100 = (0);var i__7030_7101 = (0);while(true){
if((i__7030_7101 < count__7029_7100))
{var vec__7045_7102 = cljs.core._nth.call(null,chunk__7028_7099,i__7030_7101);var actual_type_7103 = cljs.core.nth.call(null,vec__7045_7102,(0),null);var factory_7104 = cljs.core.nth.call(null,vec__7045_7102,(1),null);var canonical_f_7105 = (cljs.core.truth_(selector_7049)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7048,selector_7049):cljs.core.identity).call(null,factory_7104.call(null,f_7097));dommy.core.update_event_listeners_BANG_.call(null,elem_7048,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7049,actual_type_7103,f_7097], null),canonical_f_7105);
if(cljs.core.truth_(elem_7048.addEventListener))
{elem_7048.addEventListener(cljs.core.name.call(null,actual_type_7103),canonical_f_7105);
} else
{elem_7048.attachEvent(cljs.core.name.call(null,actual_type_7103),canonical_f_7105);
}
{
var G__7106 = seq__7026_7098;
var G__7107 = chunk__7028_7099;
var G__7108 = count__7029_7100;
var G__7109 = (i__7030_7101 + (1));
seq__7026_7098 = G__7106;
chunk__7028_7099 = G__7107;
count__7029_7100 = G__7108;
i__7030_7101 = G__7109;
continue;
}
} else
{var temp__4126__auto___7110__$1 = cljs.core.seq.call(null,seq__7026_7098);if(temp__4126__auto___7110__$1)
{var seq__7026_7111__$1 = temp__4126__auto___7110__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7026_7111__$1))
{var c__4410__auto___7112 = cljs.core.chunk_first.call(null,seq__7026_7111__$1);{
var G__7113 = cljs.core.chunk_rest.call(null,seq__7026_7111__$1);
var G__7114 = c__4410__auto___7112;
var G__7115 = cljs.core.count.call(null,c__4410__auto___7112);
var G__7116 = (0);
seq__7026_7098 = G__7113;
chunk__7028_7099 = G__7114;
count__7029_7100 = G__7115;
i__7030_7101 = G__7116;
continue;
}
} else
{var vec__7046_7117 = cljs.core.first.call(null,seq__7026_7111__$1);var actual_type_7118 = cljs.core.nth.call(null,vec__7046_7117,(0),null);var factory_7119 = cljs.core.nth.call(null,vec__7046_7117,(1),null);var canonical_f_7120 = (cljs.core.truth_(selector_7049)?cljs.core.partial.call(null,dommy.core.live_listener,elem_7048,selector_7049):cljs.core.identity).call(null,factory_7119.call(null,f_7097));dommy.core.update_event_listeners_BANG_.call(null,elem_7048,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7049,actual_type_7118,f_7097], null),canonical_f_7120);
if(cljs.core.truth_(elem_7048.addEventListener))
{elem_7048.addEventListener(cljs.core.name.call(null,actual_type_7118),canonical_f_7120);
} else
{elem_7048.attachEvent(cljs.core.name.call(null,actual_type_7118),canonical_f_7120);
}
{
var G__7121 = cljs.core.next.call(null,seq__7026_7111__$1);
var G__7122 = null;
var G__7123 = (0);
var G__7124 = (0);
seq__7026_7098 = G__7121;
chunk__7028_7099 = G__7122;
count__7029_7100 = G__7123;
i__7030_7101 = G__7124;
continue;
}
}
} else
{}
}
break;
}
{
var G__7125 = cljs.core.next.call(null,seq__7025_7089__$1);
var G__7126 = null;
var G__7127 = (0);
var G__7128 = (0);
seq__7025_7050 = G__7125;
chunk__7032_7051 = G__7126;
count__7033_7052 = G__7127;
i__7034_7053 = G__7128;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__7129){
var elem_sel = cljs.core.first(arglist__7129);
var type_fs = cljs.core.rest(arglist__7129);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__7153_7176 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7177 = cljs.core.nth.call(null,vec__7153_7176,(0),null);var selector_7178 = cljs.core.nth.call(null,vec__7153_7176,(1),null);var seq__7154_7179 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7161_7180 = null;var count__7162_7181 = (0);var i__7163_7182 = (0);while(true){
if((i__7163_7182 < count__7162_7181))
{var vec__7170_7183 = cljs.core._nth.call(null,chunk__7161_7180,i__7163_7182);var orig_type_7184 = cljs.core.nth.call(null,vec__7170_7183,(0),null);var f_7185 = cljs.core.nth.call(null,vec__7170_7183,(1),null);var seq__7164_7186 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7184,new cljs.core.PersistentArrayMap.fromArray([orig_type_7184,cljs.core.identity], true, false)));var chunk__7166_7187 = null;var count__7167_7188 = (0);var i__7168_7189 = (0);while(true){
if((i__7168_7189 < count__7167_7188))
{var vec__7171_7190 = cljs.core._nth.call(null,chunk__7166_7187,i__7168_7189);var actual_type_7191 = cljs.core.nth.call(null,vec__7171_7190,(0),null);var __7192 = cljs.core.nth.call(null,vec__7171_7190,(1),null);var keys_7193 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7178,actual_type_7191,f_7185], null);var canonical_f_7194 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7177),keys_7193);dommy.core.update_event_listeners_BANG_.call(null,elem_7177,dommy.utils.dissoc_in,keys_7193);
if(cljs.core.truth_(elem_7177.removeEventListener))
{elem_7177.removeEventListener(cljs.core.name.call(null,actual_type_7191),canonical_f_7194);
} else
{elem_7177.detachEvent(cljs.core.name.call(null,actual_type_7191),canonical_f_7194);
}
{
var G__7195 = seq__7164_7186;
var G__7196 = chunk__7166_7187;
var G__7197 = count__7167_7188;
var G__7198 = (i__7168_7189 + (1));
seq__7164_7186 = G__7195;
chunk__7166_7187 = G__7196;
count__7167_7188 = G__7197;
i__7168_7189 = G__7198;
continue;
}
} else
{var temp__4126__auto___7199 = cljs.core.seq.call(null,seq__7164_7186);if(temp__4126__auto___7199)
{var seq__7164_7200__$1 = temp__4126__auto___7199;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7164_7200__$1))
{var c__4410__auto___7201 = cljs.core.chunk_first.call(null,seq__7164_7200__$1);{
var G__7202 = cljs.core.chunk_rest.call(null,seq__7164_7200__$1);
var G__7203 = c__4410__auto___7201;
var G__7204 = cljs.core.count.call(null,c__4410__auto___7201);
var G__7205 = (0);
seq__7164_7186 = G__7202;
chunk__7166_7187 = G__7203;
count__7167_7188 = G__7204;
i__7168_7189 = G__7205;
continue;
}
} else
{var vec__7172_7206 = cljs.core.first.call(null,seq__7164_7200__$1);var actual_type_7207 = cljs.core.nth.call(null,vec__7172_7206,(0),null);var __7208 = cljs.core.nth.call(null,vec__7172_7206,(1),null);var keys_7209 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7178,actual_type_7207,f_7185], null);var canonical_f_7210 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7177),keys_7209);dommy.core.update_event_listeners_BANG_.call(null,elem_7177,dommy.utils.dissoc_in,keys_7209);
if(cljs.core.truth_(elem_7177.removeEventListener))
{elem_7177.removeEventListener(cljs.core.name.call(null,actual_type_7207),canonical_f_7210);
} else
{elem_7177.detachEvent(cljs.core.name.call(null,actual_type_7207),canonical_f_7210);
}
{
var G__7211 = cljs.core.next.call(null,seq__7164_7200__$1);
var G__7212 = null;
var G__7213 = (0);
var G__7214 = (0);
seq__7164_7186 = G__7211;
chunk__7166_7187 = G__7212;
count__7167_7188 = G__7213;
i__7168_7189 = G__7214;
continue;
}
}
} else
{}
}
break;
}
{
var G__7215 = seq__7154_7179;
var G__7216 = chunk__7161_7180;
var G__7217 = count__7162_7181;
var G__7218 = (i__7163_7182 + (1));
seq__7154_7179 = G__7215;
chunk__7161_7180 = G__7216;
count__7162_7181 = G__7217;
i__7163_7182 = G__7218;
continue;
}
} else
{var temp__4126__auto___7219 = cljs.core.seq.call(null,seq__7154_7179);if(temp__4126__auto___7219)
{var seq__7154_7220__$1 = temp__4126__auto___7219;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7154_7220__$1))
{var c__4410__auto___7221 = cljs.core.chunk_first.call(null,seq__7154_7220__$1);{
var G__7222 = cljs.core.chunk_rest.call(null,seq__7154_7220__$1);
var G__7223 = c__4410__auto___7221;
var G__7224 = cljs.core.count.call(null,c__4410__auto___7221);
var G__7225 = (0);
seq__7154_7179 = G__7222;
chunk__7161_7180 = G__7223;
count__7162_7181 = G__7224;
i__7163_7182 = G__7225;
continue;
}
} else
{var vec__7173_7226 = cljs.core.first.call(null,seq__7154_7220__$1);var orig_type_7227 = cljs.core.nth.call(null,vec__7173_7226,(0),null);var f_7228 = cljs.core.nth.call(null,vec__7173_7226,(1),null);var seq__7155_7229 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_7227,new cljs.core.PersistentArrayMap.fromArray([orig_type_7227,cljs.core.identity], true, false)));var chunk__7157_7230 = null;var count__7158_7231 = (0);var i__7159_7232 = (0);while(true){
if((i__7159_7232 < count__7158_7231))
{var vec__7174_7233 = cljs.core._nth.call(null,chunk__7157_7230,i__7159_7232);var actual_type_7234 = cljs.core.nth.call(null,vec__7174_7233,(0),null);var __7235 = cljs.core.nth.call(null,vec__7174_7233,(1),null);var keys_7236 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7178,actual_type_7234,f_7228], null);var canonical_f_7237 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7177),keys_7236);dommy.core.update_event_listeners_BANG_.call(null,elem_7177,dommy.utils.dissoc_in,keys_7236);
if(cljs.core.truth_(elem_7177.removeEventListener))
{elem_7177.removeEventListener(cljs.core.name.call(null,actual_type_7234),canonical_f_7237);
} else
{elem_7177.detachEvent(cljs.core.name.call(null,actual_type_7234),canonical_f_7237);
}
{
var G__7238 = seq__7155_7229;
var G__7239 = chunk__7157_7230;
var G__7240 = count__7158_7231;
var G__7241 = (i__7159_7232 + (1));
seq__7155_7229 = G__7238;
chunk__7157_7230 = G__7239;
count__7158_7231 = G__7240;
i__7159_7232 = G__7241;
continue;
}
} else
{var temp__4126__auto___7242__$1 = cljs.core.seq.call(null,seq__7155_7229);if(temp__4126__auto___7242__$1)
{var seq__7155_7243__$1 = temp__4126__auto___7242__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7155_7243__$1))
{var c__4410__auto___7244 = cljs.core.chunk_first.call(null,seq__7155_7243__$1);{
var G__7245 = cljs.core.chunk_rest.call(null,seq__7155_7243__$1);
var G__7246 = c__4410__auto___7244;
var G__7247 = cljs.core.count.call(null,c__4410__auto___7244);
var G__7248 = (0);
seq__7155_7229 = G__7245;
chunk__7157_7230 = G__7246;
count__7158_7231 = G__7247;
i__7159_7232 = G__7248;
continue;
}
} else
{var vec__7175_7249 = cljs.core.first.call(null,seq__7155_7243__$1);var actual_type_7250 = cljs.core.nth.call(null,vec__7175_7249,(0),null);var __7251 = cljs.core.nth.call(null,vec__7175_7249,(1),null);var keys_7252 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_7178,actual_type_7250,f_7228], null);var canonical_f_7253 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_7177),keys_7252);dommy.core.update_event_listeners_BANG_.call(null,elem_7177,dommy.utils.dissoc_in,keys_7252);
if(cljs.core.truth_(elem_7177.removeEventListener))
{elem_7177.removeEventListener(cljs.core.name.call(null,actual_type_7250),canonical_f_7253);
} else
{elem_7177.detachEvent(cljs.core.name.call(null,actual_type_7250),canonical_f_7253);
}
{
var G__7254 = cljs.core.next.call(null,seq__7155_7243__$1);
var G__7255 = null;
var G__7256 = (0);
var G__7257 = (0);
seq__7155_7229 = G__7254;
chunk__7157_7230 = G__7255;
count__7158_7231 = G__7256;
i__7159_7232 = G__7257;
continue;
}
}
} else
{}
}
break;
}
{
var G__7258 = cljs.core.next.call(null,seq__7154_7220__$1);
var G__7259 = null;
var G__7260 = (0);
var G__7261 = (0);
seq__7154_7179 = G__7258;
chunk__7161_7180 = G__7259;
count__7162_7181 = G__7260;
i__7163_7182 = G__7261;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__7262){
var elem_sel = cljs.core.first(arglist__7262);
var type_fs = cljs.core.rest(arglist__7262);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__7270_7277 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_7278 = cljs.core.nth.call(null,vec__7270_7277,(0),null);var selector_7279 = cljs.core.nth.call(null,vec__7270_7277,(1),null);var seq__7271_7280 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__7272_7281 = null;var count__7273_7282 = (0);var i__7274_7283 = (0);while(true){
if((i__7274_7283 < count__7273_7282))
{var vec__7275_7284 = cljs.core._nth.call(null,chunk__7272_7281,i__7274_7283);var type_7285 = cljs.core.nth.call(null,vec__7275_7284,(0),null);var f_7286 = cljs.core.nth.call(null,vec__7275_7284,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_7285,((function (seq__7271_7280,chunk__7272_7281,count__7273_7282,i__7274_7283,vec__7275_7284,type_7285,f_7286,vec__7270_7277,elem_7278,selector_7279){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7285,this_fn);
return f_7286.call(null,e);
});})(seq__7271_7280,chunk__7272_7281,count__7273_7282,i__7274_7283,vec__7275_7284,type_7285,f_7286,vec__7270_7277,elem_7278,selector_7279))
);
{
var G__7287 = seq__7271_7280;
var G__7288 = chunk__7272_7281;
var G__7289 = count__7273_7282;
var G__7290 = (i__7274_7283 + (1));
seq__7271_7280 = G__7287;
chunk__7272_7281 = G__7288;
count__7273_7282 = G__7289;
i__7274_7283 = G__7290;
continue;
}
} else
{var temp__4126__auto___7291 = cljs.core.seq.call(null,seq__7271_7280);if(temp__4126__auto___7291)
{var seq__7271_7292__$1 = temp__4126__auto___7291;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7271_7292__$1))
{var c__4410__auto___7293 = cljs.core.chunk_first.call(null,seq__7271_7292__$1);{
var G__7294 = cljs.core.chunk_rest.call(null,seq__7271_7292__$1);
var G__7295 = c__4410__auto___7293;
var G__7296 = cljs.core.count.call(null,c__4410__auto___7293);
var G__7297 = (0);
seq__7271_7280 = G__7294;
chunk__7272_7281 = G__7295;
count__7273_7282 = G__7296;
i__7274_7283 = G__7297;
continue;
}
} else
{var vec__7276_7298 = cljs.core.first.call(null,seq__7271_7292__$1);var type_7299 = cljs.core.nth.call(null,vec__7276_7298,(0),null);var f_7300 = cljs.core.nth.call(null,vec__7276_7298,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_7299,((function (seq__7271_7280,chunk__7272_7281,count__7273_7282,i__7274_7283,vec__7276_7298,type_7299,f_7300,seq__7271_7292__$1,temp__4126__auto___7291,vec__7270_7277,elem_7278,selector_7279){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_7299,this_fn);
return f_7300.call(null,e);
});})(seq__7271_7280,chunk__7272_7281,count__7273_7282,i__7274_7283,vec__7276_7298,type_7299,f_7300,seq__7271_7292__$1,temp__4126__auto___7291,vec__7270_7277,elem_7278,selector_7279))
);
{
var G__7301 = cljs.core.next.call(null,seq__7271_7292__$1);
var G__7302 = null;
var G__7303 = (0);
var G__7304 = (0);
seq__7271_7280 = G__7301;
chunk__7272_7281 = G__7302;
count__7273_7282 = G__7303;
i__7274_7283 = G__7304;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__7305){
var elem_sel = cljs.core.first(arglist__7305);
var type_fs = cljs.core.rest(arglist__7305);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;

//# sourceMappingURL=core.js.map