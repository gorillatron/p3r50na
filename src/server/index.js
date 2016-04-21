
import Koa                                from "koa"
import React                              from "react"
import {RouterContext, match}             from "react-router"
import componentroutes                    from "../components/componentroutes"
import ServerRendered                     from "../containers/ServerRendered"
import {renderToString}                   from "react-dom/server"


export async function spawn(config) {

  const server = Koa()

  server.use(function* (next) {

     yield new Promise((resolve, reject) => {
      match({routes: componentroutes, location: this.originalUrl}, (error, redirectLocation, renderProps) => {
        if (error) {
          this.status = 500
          this.body = error.message
        } else if (redirectLocation) {
          this.redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          this.status = 200
          this.body = renderToString(<RouterContext {...renderProps} />)
        } else {
          this.status = 404
          this.body = "404"
        }

        resolve()
      })
    })

  })

  server.listen(config.port)

  return server
}
