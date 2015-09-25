(defproject p3r50na "0.1.0-SNAPSHOT"

  :description "omg wtf"

  :url "http://example.com/FIXME"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/data.json "0.2.6"]
                 [org.omcljs/om "0.9.0"]
                 [com.stuartsierra/component "0.2.3"]
                 [http-kit "2.1.18"]
                 [compojure "1.4.0"]
                 [javax.servlet/servlet-api "2.5"]
                 [ring/ring-devel "1.4.0"]
                 [ring/ring-core "1.4.0"]
                 [reloaded.repl "0.1.0"]
                 [hiccup "1.0.5"]
                 [quil "2.2.6"]]

  :plugins []

  :less {:source-paths ["src/p3r50na/less/"]
         :target-path "public/css/"}

  :main p3r50na.core

  :target-path "target/%s"

  :profiles {:dev {:plugins [[lein-less "1.7.5"]
                             [lein-cljsbuild "1.1.0"]
                             [lein-npm "0.6.1"]
                             [lein-figwheel "0.3.9"]]
                   :dependencies [[reloaded.repl "0.1.0"]]
                   :source-paths ["dev"]
                   :cljsbuild {:builds [{:source-paths ["src" "dev"]
                                         :figwheel true
                                         :compiler {:output-to "resources/public/js/bookof5rinds.client.core.js"
                                                    :output-dir "resources/public/js/out"
                                                    :optimizations :none
                                                    :main "p3r50na.apps.bookof5rinds.client.core"
                                                    :asset-path "/js/out"
                                                    :recompile-dependents true
                                                    :source-map true}}]}}})
