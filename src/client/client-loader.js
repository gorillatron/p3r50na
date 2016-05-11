
// This script loads the client script itself
// Keep this lightweight so that we can do loading animations and such

const script = document.createElement("script")

script.type = "text/javascript"
script.src = "/js/client.js"

// Loading the script starts when the
// script tag is inserted into the page

document.body.appendChild(script)
