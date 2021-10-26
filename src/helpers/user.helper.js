const user = {}
const userModels = require('../models/user.models')
const jwt = require('jsonwebtoken')
const keys= require('../server/keys')

user.singup =async  (credentials)=>{
    // check if the credentials are valid
    if(verifyCredentials(credentials)){
        // check if the user already exists
        let userExists = await user.getUserByMail(credentials.mail)
        if(!userExists){
            // create the user
            console.log(credentials)
            let userObject = {"name": credentials.name, "mail": credentials.mail, "password": credentials.password}
            let newUser =await new userModels(userObject)
            console.log(newUser)
            if(newUser){
                newUser.password = await newUser.encryptPassword(credentials.password)
                // encrypt the token
                let newUserJWT =  user.createToken(newUser)
                let usUserDb=await newUser.save()
                .then(user=>{
                    return user
                })
                .catch(err=>{
                    console.log(err)
                    return false
                })
                
                return newUserJWT
            }else{
                // error creating the user
                return {error: 'Error creating the user'}
            }
        }else{
            // user already exists
            return {error: 'User already exists'}
        }
    }else{
        // credentials are not valid
        return {error: 'Credentials are not valid'}
    }
    function verifyCredentials(credentials){
        if(credentials.mail.length > 5 && credentials.password.length > 6  && credentials.name.length > 4){
            // credentials are valid
            return true
        }else{
            // credentials are not valid
            return false
        }
    }
    
}
user.getUserByMail = async (mail)=>{
    // get the user by mail
    console.log(mail)
    let findUser= await userModels.findOne({'mail': mail})
    if(findUser!=null){
        return true
    }else{
        return false
    }
    console.log(findUser)
    return findUser
}
user.singin = async (credentials)=>{
    // check the credentials
    console.log(credentials)
       // verify user in db
        let userDb = await userModels.findOne({"mail":credentials.mail})
            if(userDb){
                // check if the password is correct
                let passwordCorrect = await userDb.machPassword(credentials.password)
                if(passwordCorrect){
                    // create the token
                    let token = await user.createToken(userDb)
                    return {token}
                }else{
                    // password is incorrect
                    return {error: 'Password is incorrect'}
                }
            }
    return userDb
}
// create the token
user.createToken=(user)=>{
    const token =jwt.sign({
        user
    },keys.jwt.secret,{
        expiresIn: '1h'
    })
    return token
}
// refrshing the token
user.refreshToken=(user)=>{
    const newToken =jwt.sign({ user },keys.jwt.secret,{
        expiresIn: '1h'
    })
    return newToken
}
// decode the token
user.decodeToken=(token)=>{
    let decoded = jwt.verify(token,keys.jwt.secret)
    return decoded
}
user.logout=(token)=>{
    // delete the token
    return true
}
module.exports = user