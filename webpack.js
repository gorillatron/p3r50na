
var path = require("path")

console.log(path.join(__dirname, 'assets/'))

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
      }
    ]
  }

}
