
var webpack = require("webpack")
var path = require("path")
var rucksack = require("rucksack-css")
var cssnesting = require("postcss-nesting")
var cssmodules = require("postcss-modules")
var cssvariables = require("postcss-css-variables")

module.exports = {

  devtool: 'source-map',

  entry: {
    'client-loader': path.join(__dirname, 'src/client/client-loader.js'),
    'client': path.join(__dirname, 'src/client/client.js'),
  },

  output: {
    filename: 'js/[name].js',
    sourceMapFilename: "[name].js.map",
    path: path.join(__dirname, 'assets/')
  },

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
    return [cssmodules, cssvariables, cssnesting, rucksack]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        "NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        "HOST": JSON.stringify("client")
      }
    })
  ]

}
