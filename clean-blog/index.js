const http = require("http")
const path = require("path")
const express = require("express")
const app = new express()


app.use(express.static("public"))


app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/about', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/'))
})

app.get('/post', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/'))
})

app.get('/contact', (request, response) =>{
    response.sendFile(path.resolve(__dirname, 'pages/'))
})

app.listen(4000, () => { console.log("App is listening on port: 4000")})