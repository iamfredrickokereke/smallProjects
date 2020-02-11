//const http = require("http")
const path = require("path")
const expressEdge = require("express-edge")
//const { config, engine } = require('express-edge')
const express = require("express")
const app = new express()



// set a public asset directory
app.use(express.static("public"))


// Configure Edge if need to
//config({ cache: process.env.NODE_ENV === 'production' });

// Automatically sets view engine and adds dot notation to app.render
app.use(expressEdge.engine);
app.set('views', `${__dirname}/views`);

// //use express express edge for template engine
// app.use(expressEdge)

// //set views

// app.set('views', `${__dirname}/views`)


app.get('/', (request, response) => {
   // response.sendFile(path.resolve(__dirname, 'pages/index.html'))
   response.render('index')
})

app.get('/about', (request, response) => {
    //response.sendFile(path.resolve(__dirname, 'pages/about.html'))

    response.render('about')
    
})

app.get('/post', (request, response) => {
    //response.sendFile(path.resolve(__dirname, 'pages/post.html'))

    response.render('post')
})

app.get('/contact', (request, response) => {
    //response.sendFile(path.resolve(__dirname, 'pages/contact.html'))
    response.render('contact')
})

app.listen(4000, () => { console.log("App is listening on port: 4000")})