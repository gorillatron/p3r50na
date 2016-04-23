
import Koa             from 'koa'
import serve           from 'koa-static'
import webpackServer   from './webpack-server'
import render          from './render'


export async function spawn(config) {

  const server = new Koa()

  if(process.env.NODE_ENV === "production") {
    server.use(serve("assets/"))
  }
  if(process.env.NODE_ENV === "development") {
    webpackServer(server)
  }

  server.use(render)

  server.listen(config.port)

  return server
}
