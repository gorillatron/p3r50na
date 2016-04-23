
import React                                  from "react"
import {RouterContext, match}                 from "react-router"
import {createStore}                          from 'redux'
import {renderToString}                       from "react-dom/server"
import createMemoryHistory                    from 'history/lib/createMemoryHistory'
import {syncHistoryWithStore}                 from 'react-router-redux'
import reducers                               from '../reducers'
import routes                                 from "../routes"
import Root                                   from "../components/Root"
import layout                                 from "./templates/layouts/default"


export default async function reactRender(ctx, next) {

  const store = createStore(reducers)
  const memoryHistory = createMemoryHistory(ctx.originalUrl)
  const history = syncHistoryWithStore(memoryHistory, store)

  const data = await route(history, store, routes)

  ctx.status = 200
  ctx.body = layout(data)

}


function route(history, store, routes) {
  return new Promise((resolve, reject) => {

    match({history, routes},
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

        resolve({content, store_state})
      })

  })
}
