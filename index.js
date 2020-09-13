const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/assets"))

const views = path.join(__dirname, "views")

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: views })
})
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: views })
})
app.get("/city", (req, res) => {
  res.sendFile("city.html", { root: views })
})
app.get("/architecture", (req, res) => {
  res.sendFile("architecture.html", { root: views })
})
app.get("/alumni", (req, res) => {
  res.sendFile("alumni.html", { root: views })
})
app.get("/events", (req, res) => {
  res.sendFile("events.html", { root: views })
})
app.get("/hahaharvard", (req, res) => {
  res.sendFile("hahaharvard.html", { root: views })
})

app.listen(3000)
console.log("Running at port 3000")
