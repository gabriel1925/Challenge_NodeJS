const user = {}
const userModels = require('../models/user.models')

user.singup =async  (credentials)=>{
    // verify the credentials
    let verifyCredentials = (credentials)=>{
        if(credentials.name && credentials.password && credentials.mail){
            return true
        }else{
            return false
        }
    }
    
}


module.exports = user