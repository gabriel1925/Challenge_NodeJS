const {Router} = require('express')
const userController = require('../controllers/user.controllers')  
const user = Router() 

user.post('/singin',userController.singin) 
user.post('/singup',userController.singup)


module.exports = user 