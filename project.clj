(defproject html2hiccup "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "src/cljs"]

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371" :scope "provided"]
                 [leiningen "2.5.0"]
                 [prismatic/dommy "1.0.0"]
                 [hickory "0.5.4"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-simpleton "1.3.0"]]

  :min-lein-version "2.5.0"

  :uberjar-name "html2hiccup.jar"

  :cljsbuild {:builds {:dev {:source-paths ["src/cljs"]
                             :compiler {:optimizations :none
                                        :output-to "js/app_dev.js"
                                        :output-dir "js/out"
                                        :pretty-print true
                                        :source-map true}}
                       :prod {:source-paths ["src/cljs"]
                              :compiler {:optimizations :advanced
                                         :output-to "js/prod/app.js"
                                         :output-dir "js/prod/out"
                                         :externs ["js/codemirror-externs.js"]
                                         :pretty-print false
                                         :closure-warnings {:externs-validation :off
                                                            :non-standard-jsdoc :off}}}}})
