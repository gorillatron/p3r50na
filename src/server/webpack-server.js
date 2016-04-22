
import path                  from "path"
import webpack               from 'webpack'
import webpackconfig         from '../../webpack.config'
import { devMiddleware }     from 'koa-webpack-middleware'

const compile = webpack(webpackconfig)

export default function attachTo(server) {

  server.use(devMiddleware(compile, {}))

  return server
}
