
import Koa             from "koa"
import React           from "react"
import ReactRouter     from "react-router"
import componentroutes from "../components/componentroutes"
import ServerRendered  from "../containers/ServerRendered"


export async function spawn(config) {

  const server = Koa()

  server.use(function* (next) {

    try {

      const html = yield (new Promise((resolve) => {

        ReactRouter.run(componentroutes, this.originalUrl, (RootComponent) => {

          const html = React.renderToString(React.createElement(RootComponent, {
            ContainerComponent: ServerRendered
          }))
          
          resolve(html)
        })

      }))

      this.body = html

    }
    catch(exception) {

      console.debug("error", exception)
      next(exception)

    }

  })

  server.listen(config.port)

  return server
}
