const auth = {}
const userHelper = require('./user.helper')
const keys = require('../server/keys')
const jwt = require('jsonwebtoken')
// separate the bearer token from the authorization header
auth.isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        // console.log(token)
        req.token = auth.verifyToken(req, res, token)
        // console.log(req.token)
        next()
    } else {
        res.sendStatus(403)
    }
}
auth.refreshToken = (req, res, authData) => {
const user = authData
const token = jwt.sign({ user }, keys.jwt.secret, { expiresIn: '1h' })
return token

}
auth.verifyToken = (req,res,token) => {   
    return jwt.verify(token, keys.jwt.secret, (err, authData) => {
        if (err) {
            res.sendStatus(403)
        } else {
            authData = auth.refreshToken(req, res, authData)
            return authData
        }
    })
}




module.exports = auth