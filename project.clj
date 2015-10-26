(defproject p3r50na "0.1.0-SNAPSHOT"

  :description "FIXME: write description"

  :url "http://example.com/FIXME"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :repositories {"my.datomic.com" {:url "https://my.datomic.com/repo"
                                   :username "jornandretangen@gmail.com"
                                   :password "a044b928-a372-49b8-8171-8ad3158ec5a3"}}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/tools.logging "0.3.1"]
                 [rum "0.4.2"]
                 [com.stuartsierra/component "0.2.3"]
                 [http-kit "2.1.18"]
                 [compojure "1.4.0"]
                 [javax.servlet/servlet-api "2.5"]
                 [ring/ring-devel "1.4.0"]
                 [ring/ring-core "1.4.0"]
                 [reloaded.repl "0.1.0"]
                 [hiccup "1.0.5"]
                 [figwheel-sidecar "0.4.0"]
                 [lein-less "1.7.5"]
                 [lein-cljsbuild "1.1.0"]
                 [environ "1.0.1"]
                 [com.datomic/datomic-pro "0.9.5327"]
                 [lein-npm "0.6.1"]]

  :main ^:skip-aot p3r50na.core

  :min-lein-version "2.0.0"

  :plugins [[environ/environ.lein "0.3.1"]]

  :hooks [environ.leiningen.hooks]

  :uberjar-name "p3r50na.standalone.jar"

  :less {:source-paths ["src/p3r50na/less/"]
         :target-path "public/css/"}



  :target-path "target/%s"

  :cljsbuild {:builds [{:source-paths ["src/p3r50na/client"]
                        :figwheel true
                        :compiler {:output-to "resources/public/js/p3r50na.client.core.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :main "p3r50na.client.core"
                                   :asset-path "/js/out"
                                   :recompile-dependents true
                                   :source-map true}}]}

  :profiles {:dev {:plugins []
                   :main user
                   :source-paths ["dev"]}})
