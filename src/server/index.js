
import Koa                                    from "koa"
import React                                  from "react"
import {RouterContext, match}                 from "react-router"
import {createStore,combineReducers}          from 'redux'
import {renderToString}                       from "react-dom/server"
import createHistory                          from 'history/lib/createMemoryHistory'
import {syncHistoryWithStore}                 from 'react-router-redux'
import reducers                               from '../reducers'
import componentroutes                        from "../components/componentroutes"
import Client                                 from "../containers/Client"
import webpackServer                          from "./webpack-server"
import layout                                 from "./templates/layouts/default"


export async function spawn(config) {

  const server = new Koa()

  if(config.env == 'development') {
    webpackServer(server)
  }

  server.use(function* () {

    const store = createStore(reducers)

    const history = syncHistoryWithStore(
      createHistory(this.originalUrl),
      store
    )

    yield new Promise((resolve, reject) => {
      match({routes: componentroutes, history: history},
        (error, redirectLocation, renderProps) => {

          if(error) {
            console.error(error)
          }

          const store_state = store.getState()

          const content = renderToString(
            <Client store={store}>
              <RouterContext {...renderProps} />
            </Client>
          )

          this.body = layout({content, store_state})

          resolve()
        })
    })

  })

  server.listen(config.port)

  return server
}