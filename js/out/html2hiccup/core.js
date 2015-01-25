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
{html2hiccup.core.cm = CodeMirror.fromTextArea(document.getElementById("to-txt"),{"readOnly": true, "tabSize": (2), "indentWithTabs": false, "mode": "clojure", "lineNumbers": true});
}
html2hiccup.core.handle_parse = (function handle_parse(e){var hiccup = clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,hickory.core.as_hiccup.call(null,hickory.core.parse.call(null,e.target.value))))),/\"(\s*\\n\s*(\w)*)*\"/,"$2"),/\[/,"\n["),/ \{\}/,"");html2hiccup.core.cm.setValue(hiccup);
html2hiccup.core.cm.execCommand("selectAll");
return html2hiccup.core.cm.execCommand("indentAuto");
});
dommy.core.listen_BANG_.call(null,document.getElementById("from-txt"),new cljs.core.Keyword(null,"keyup","keyup",-794526927),html2hiccup.core.handle_parse);

//# sourceMappingURL=core.js.map