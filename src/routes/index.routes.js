const {Router} = require('express')
const indexController = require('../controllers/index.controller')  
const index = Router() 
  
index.get('/',indexController.index) 
  
  
module.exports = index 
