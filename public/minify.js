const postcss = require('postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const fs = require('fs')

const cssFile = 'public/css/styles.css'
const minifyCssFile = 'public/css/style.min.css'

// Wrapped in a function so we can use async/await
fs.readFile(cssFile, async (err, data) => {
    const output = await 
// We pass in an array of the plugins we want to use: `cssnano` and `autoprefixer`
    postcss([cssnano, autoprefixer])
    .process(data)
    // The `css` property of `output` is the minified CSS as a string
    .then((data) => {
        fs.writeFile(minifyCssFile, data, (err) => {
          if (err) console.log(err)
          console.log('Successfully written minified css to ' + minifyCssFile + '.')
        })
      })
  })
  


