const http = require("http")
const path = require("path")
const express = require("express")
const app = new express()

app.listen(4000, () => { console.log("App is listening on port 4000")})