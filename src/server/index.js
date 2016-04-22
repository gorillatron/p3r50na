
import Koa                                from "koa"
import React                              from "react"
import {Router, match}                    from "react-router"
import {createStore}                      from 'redux'
import {renderToString}                   from "react-dom/server"
import reducers                           from '../reducers'
import componentroutes                    from "../components/componentroutes"
import ServerRendered                     from "../containers/ServerRendered"
import webpackServer                      from "./webpack-server"



export async function spawn(config) {

  const server = new Koa()


  if(config.env == 'development') {
    webpackServer(server)
  }

  server.use(function* () {

    if(this.originalUrl.match("assets")) {
      return
    }

    // TODO!: pass history so that we can augment it with redux store

     yield new Promise((resolve, reject) => {
      match({routes: componentroutes, location: this.originalUrl},
        (error, redirectLocation, renderProps) => {

          if(error) {
            console.error(error)
          }

          const store = createStore(reducers)

          this.body = renderToString(
            <ServerRendered store={store}>
              <Router {...renderProps} />
            </ServerRendered>
          )

          resolve()
        })
    })

  })

  server.listen(config.port)

  return server
}
