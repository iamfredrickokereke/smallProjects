//const http = require("http")
const path = require("path")
const express = require("express")
const app = new express()
const expressEdge = require("express-edge")


// set a public asset directory
app.use(express.static("public"))

//use express express edge for template engine
app.use(expressEdge)

//set views

app.set('views', `${__dirname}/views`)


app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})

app.get('/about', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/about.html'))
})

app.get('/post', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/post.html'))
})

app.get('/contact', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'pages/contact.html'))
})

app.listen(4000, () => { console.log("App is listening on port: 4000")})