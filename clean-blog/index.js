const http = require("http")
const path = require("path")
const express = require("express")
const app = new express()



app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(4000, () => { console.log("App is listening on port 4000")})