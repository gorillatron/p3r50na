
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
        include: /src/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader'
        ]
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        HOST: "client"
      }
    })
]

})


export default function attachTo(server) {

  server.use(devMiddleware(compile, {
    publicPath: "/assets/"
  }))

  return server
}
