goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../dommy/utils.js", ['dommy.utils'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../dommy/core.js", ['dommy.core'], ['cljs.core', 'dommy.utils', 'clojure.string']);
goog.addDependency("../clojure/zip.js", ['clojure.zip'], ['cljs.core']);
goog.addDependency("../hickory/utils.js", ['hickory.utils'], ['goog.string', 'cljs.core', 'clojure.string']);
goog.addDependency("../hickory/core.js", ['hickory.core'], ['clojure.zip', 'goog.string', 'cljs.core', 'hickory.utils']);
goog.addDependency("../html2hiccup/core.js", ['html2hiccup.core'], ['cljs.core', 'dommy.core', 'clojure.string', 'hickory.core']);