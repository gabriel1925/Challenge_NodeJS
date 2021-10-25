const express = require('express')
const path = require('path')
const fs = require('fs')
// const cookieParser = require('cookie.parser')
const morgan = require('morgan')
  
module.exports = app => { 
    // initiliazations
    app.set('port', process.env.PORT || 3000) 
    // passport 
    // settings 
    app.use(express.static(path.join(__dirname,'../views'))) 
    app.use('/public',express.static(path.join(__dirname,'../public'))) 
      
      
    // middlewares 
    app.use(morgan('dev')) 
    app.use(express.json()) 
    app.use(express.urlencoded({extended:true})) 

    // app.use(cookieParser())

    // routes 
    fs.readdirSync(path.join(__dirname,'../routes')).forEach(file => {
        let files=file.substring(0, file.length -3)
        app.use(require('../routes/'+files))
      });
      
            // app.use(require('../routes/index.routes')) 
      
      
      
    return app 
} 
