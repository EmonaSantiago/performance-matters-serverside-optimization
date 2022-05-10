// require('dotenv').config()
// const express = require('express')

// const app = express()

// // Stel ejs in als template engine
// app.set('view engine', 'ejs')
// app.set('views', './views')

// // Stel een static map in
// app.use(express.static('public'))

// // Maak een route voor de index
// app.get('/', function (req, res) {
//   // res.send('Hello world!')
//   res.render('index', {
//     pageTitle: 'Performance Optimalisatie',
//   })
// })

// // Zwengel de server aan
// app.set('port', process.env.PORT || 8000)
// const server = app.listen(app.get('port'), function () {
//   console.log(`Application started on port: ${app.get('port')}`)
// })

const { Router } = require('express');
const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express(); 
const url = "https://chipr.api.fdnd.nl/v1/project"


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('');

app.get("/", (request, response) => {
     //1. Fetch projects from chippr API
     fetch(url)
     .then(response => response.json())
     .then(projects => {
          //2. Render results in Html
          console.log(projects)
          response.render('index', {projects: projects.data})
     })
     .catch(err => console.log(err))

});

app.get("/:id", (request, response) => {
     fetch(url)
     .then(response => response.json())
     .then(projects => {
          //2. Render results in Html
          console.log(projects)
          response.render('detail', {projects: projects.data[0],
          })
     })
     .catch(err => console.log(err))

});

app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost:3000`)) 


