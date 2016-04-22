
process.on('unhandledRejection', (reason, p) => {
    console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
    // application specific logging, throwing an error, or other logic here
});

process.on('uncaughtException', (exception) => {
    console.log("Unhandled exception at: ", exception);
    // application specific logging, throwing an error, or other logic here
});


require("babel-register")
require("babel-polyfill")

var server = require("./src/server")

server.spawn({
  port: 3000,
  env: 'development'
})
