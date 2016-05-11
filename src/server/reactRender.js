
import React from "react"
import {Router, match} from "react-router"
import {renderToString} from "react-dom/server"
import createMemoryHistory from 'history/lib/createMemoryHistory'
import {storeFactory} from '../core/store'
import routes from "../routes"
import Root from "../components/Root"
import layout from "./templates/layouts/default"


export default async function reactRender(ctx, next) {

  const store = await storeFactory({})
  const history = createMemoryHistory(ctx.req.url)

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
            <Router {...renderProps} />
          </Root>
        )

        resolve({content, store_state})
      })

  })
}
