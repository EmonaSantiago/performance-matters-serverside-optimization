
const { Router } = require('express');
const express = require('express');
const compression = require('compression')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const app = express(); 
const url = "https://chipr.api.fdnd.nl/v1/project"


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.set('');

app.use(compression())

app.get("/", (_request, response) => {
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

app.get("/:id", (_request, response) => {
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

// cache-control would be to set the cache header
app.use(function (_request, respond, next) {
     respond.set('Cache-control', 'public, max-age=300')
   })


app.listen(process.env.PORT || 3000, () => console.log(`App avaiable on http://localhost:3000`)) 


