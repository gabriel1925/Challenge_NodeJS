const {Schema,model}=require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    mail:{type: String, unique:true, required:true}, 
    name:{type: String, required:true,unique:false},
    password:{type: String,required:true},
    date:{type:Date,default:Date.now}
})
userSchema.methods.encryptPassword = async (password)=>{
    //encrypt password
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password,salt)
    // console.log(hash)
    return hash
}

userSchema.methods.machPassword = async function(password){
    //match password
    return await bcrypt.compare(password,this.password)
}

module.exports = model('User',userSchema)