
import path                  from "path"
import webpack               from 'webpack'
import { devMiddleware }     from 'koa-webpack-middleware'


const compile = webpack({

  context: path.join(__dirname, "../../"),

  entry: {
    'client': ['./src/client/index.js']
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, "../../assets")
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          "presets": ["react", "es2015-node5", "es2016-node5"]
        }
      }
    ]
  }

})


export default function attachTo(server) {

  server.use(devMiddleware(compile, {
    publicPath: "/assets/"
  }))

  return server
}
