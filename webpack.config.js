
var webpack = require("webpack")
var path = require("path")

module.exports = {


  devtool: 'source-map',


  entry: {
    'client': path.join(__dirname, 'src/client/client.js'),
  },


  output: {
    filename: 'js/[name].js',
    sourceMapFilename: "[name].js.map",
    path: path.join(__dirname, 'assets/'),
    publicPath: "/assets/"
  },


  module: {
    
    loaders: [
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          "presets": ["react", "es2015-node5", "es2016-node5"]
        }
      }
    ]
    
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
