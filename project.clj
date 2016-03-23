(defproject html2hiccup "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "src/cljs"]

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [leiningen "2.5.0"]
                 [hickory "0.6.0"]
                 [cljsjs/codemirror "5.11.0-1"]]

  :plugins [[lein-cljsbuild "1.0.3"]
            [lein-simpleton "1.3.0"]]

  :min-lein-version "2.5.0"

  :uberjar-name "html2hiccup.jar"

  :cljsbuild {:builds {:dev {:source-paths ["src/cljs"]
                             :compiler {:optimizations :none
                                        :output-to "js/app.js"
                                        :output-dir "js/out"
                                        :pretty-print true
                                        :source-map true}}
                       :prod {:source-paths ["src/cljs"]
                              :compiler {:optimizations :advanced
                                         :output-to "js/app.js"
                                         :output-dir "js/prod/out"
                                         :pretty-print false
                                         :closure-warnings {:externs-validation :off
                                                            :non-standard-jsdoc :off}}}}})
