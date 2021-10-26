const user = {}
const userHelper = require('../helpers/user.helper')

user.singin=async(req,res)=>{
    // recive mail,password
    let User = req.body
    const userToken =await userHelper.singin(User)
    res.json({
        userToken
    })
}
user.singup = async(req,res)=>{
    // recive name,mail,password
    console.log(req.body)
    let User = req.body
    const userToken =await userHelper.singup(User)


    res.json({
        userToken
    })
}
user.logout = async(req,res)=>{
    // recive token
    let token = req.headers.authorization
    const userToken =await userHelper.logout(token)
    res.json({
        userToken
    })
}



module.exports = user