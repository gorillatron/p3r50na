(ns clj-p3r50na.core

  (:gen-class)

  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.reload :as reload])

  (:use [compojure.route :only [files not-found]]
        [compojure.handler :only [site]] ; form, query params decode; cookie; session, etc
        [compojure.core :only [defroutes GET POST DELETE ANY context]]
        org.httpkit.server))



(defroutes all-routes
  (GET "/" [] "show-landing-page yooo")
  (route/files "/static/") ;; static file url prefix /static, in `public` folder
  (route/not-found "<p>Page not found.</p>")) ;; all other, return 404



(defn -main [& args] ;; entry point, lein run will pick up and start from here
  (let [handler (reload/wrap-reload (site #'all-routes))]
  (run-server handler {:port 8080})))
