const index = {} 
const jwt = require('jsonwebtoken')
// Controllers index
index.index = (req,res)=>{ 
    res.json({
        message:'Views'
    })
} 


module.exports = index 
