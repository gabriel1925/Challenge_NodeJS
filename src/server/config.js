const express = require('express')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')
const cors = require('cors')
  
module.exports = app => { 
    // initiliazations
    app.set('port', process.env.PORT || 3000) 
    // settings 
    app.use(express.static(path.join(__dirname,'../views'))) 
    app.use('/public',express.static(path.join(__dirname,'../public'))) 
    app.use(cors())
      
      
    // middlewares 
    app.use(morgan('dev')) 
    app.use(express.json()) 
    app.use(express.urlencoded({extended:true})) 


    // routes 
    fs.readdirSync(path.join(__dirname,'../routes')).forEach(file => {
        let files=file.substring(0, file.length -3)
        app.use(require('../routes/'+files))
      });
      
      
      
      
    return app 
} 
