
import Koa                                    from "koa"
import serve                                  from "koa-static"
import React                                  from "react"
import {RouterContext, match}                 from "react-router"
import {createStore,combineReducers}          from 'redux'
import {renderToString}                       from "react-dom/server"
import createHistory                          from 'history/lib/createMemoryHistory'
import {syncHistoryWithStore}                 from 'react-router-redux'
import webpackServer                          from './webpack-server'
import reducers                               from '../reducers'
import componentroutes                        from "../components/componentroutes"
import Root                                   from "../components/Root"
import layout                                 from "./templates/layouts/default"


export async function spawn(config) {

  const server = new Koa()

  if(process.env.NODE_ENV === "production") {
    server.use(serve("assets/"))
  }
  else {
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
            <Root store={store}>
              <RouterContext {...renderProps} />
            </Root>
          )

          this.body = layout({content, store_state})

          resolve()
        })
    })

  })

  server.listen(config.port)

  return server
}
