
require("dotenv").load()

require("babel-register")
require("babel-polyfill")

var server = require("./src/server/server")

server.start({
  port: 3000
})


//TODO!: Implement logging for uncaught rejections and exceptions
process.on('unhandledRejection', (reason, p) => {
  console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason)
})
process.on('uncaughtException', (exception) => {
  console.log("Unhandled exception at: ", exception)
})
