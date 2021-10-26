const auth = {}
const userHelper = require('./user.helper')
// separate the bearer token from the authorization header
auth.isAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        req.token = token
        next()
    } else {
        res.sendStatus(403)
    }
}



module.exports = auth