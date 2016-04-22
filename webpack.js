
var webpack = require("webpack")
var path = require("path")
var rucksack = require("rucksack-css")
var cssnesting = require("postcss-nesting")

module.exports = {

  entry: {
    client: path.join(__dirname, 'src/client/index.js'),
  },

  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, 'assets/')
  },

  devtools: "sourcemaps",

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          "presets": ["react", "es2015-node5", "es2016-node5"]
        }
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      }
    ]
  },

  postcss: function () {
    return [cssnesting, rucksack]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV,
        HOST: 'client'
      }
    })
  ]

}
