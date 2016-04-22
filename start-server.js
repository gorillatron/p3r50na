
//TODO!: Implement logging for uncaught rejections and exceptions

process.on('unhandledRejection', (reason, p) => {
  console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason)
})

process.on('uncaughtException', (exception) => {
  console.log("Unhandled exception at: ", exception)
})


require("babel-register")
require("babel-polyfill")

var server = require("./src/server")

server.spawn({
  port: 3000,
  env: 'development'
})
