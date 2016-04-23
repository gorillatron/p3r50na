
require("dotenv").load()

require("babel-register")
require("babel-polyfill")

var path    = require("path")
var monfig  = require("monfig")
var server  = require("./src/server/server")


var configPath = path.join(__dirname, "/config")

monfig.build({basePath: configPath, env: process.env.NODE_ENV})
  .then(config => server.start(config))


//TODO!: Implement logging for uncaught rejections and exceptions

process.on('unhandledRejection', (reason, p) => {
  console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason)
})
process.on('uncaughtException', (exception) => {
  console.log("Unhandled exception at: ", exception)
})
