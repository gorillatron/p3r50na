
const script = document.createElement("script")

script.type = "text/javascript"
script.src = "/js/client.js"

// TODO:! lock the interface and unlock on client loaded

script.addEventListener("load", (event) => {
  console.log("client loaded")
})

document.body.appendChild(script)
