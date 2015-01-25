// Compiled by ClojureScript 0.0-2371
goog.provide('html2hiccup.core');
goog.require('cljs.core');
goog.require('hickory.core');
goog.require('dommy.core');
goog.require('dommy.core');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('hickory.core');
if(typeof html2hiccup.core.cm !== 'undefined')
{} else
{html2hiccup.core.cm = CodeMirror.fromTextArea((function (){var G__9963 = "to-txt";return document.getElementById(G__9963);
})(),{"readOnly": true, "tabSize": (2), "indentWithTabs": false, "mode": "clojure", "lineNumbers": true});
}
html2hiccup.core.handle_parse = (function handle_parse(e){var hiccup = clojure.string.replace(clojure.string.replace(clojure.string.replace((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(hickory.core.as_hiccup(hickory.core.parse(e.target.value))))),/\"(\s*\\n\s*(\w)*)*\"/,"$2"),/\[/,"\n["),/ \{\}/,"");html2hiccup.core.cm.setValue(hiccup);
html2hiccup.core.cm.execCommand("selectAll");
return html2hiccup.core.cm.execCommand("indentAuto");
});
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((function (){var G__9964 = "from-txt";return document.getElementById(G__9964);
})(),cljs.core.array_seq([cljs.core.constant$keyword$64,html2hiccup.core.handle_parse], 0));
