const user = {}
const userHelper = require('../helpers/user.helper')

user.singin=async(req,res)=>{
    res.json({
        message:'ok'
    })
}
user.singup = async(req,res)=>{
    // recive name,mail,password
    console.log(req.body)
    let User = req.body
    const userToken =await userHelper.singup(user)
    res.json({
        User
    })
}


module.exports = user