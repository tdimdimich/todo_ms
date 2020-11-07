const fs = require('fs')
const jwt = require('jsonwebtoken')
const AUTH_COOKIE = 'access_token'
const AUTH_RSAKEY = fs.readFileSync('config/jwt_access.pub', 'utf8')

const identUser = (token, cb) => {
	if (!token) return cb(null)
	jwt.verify(token, AUTH_RSAKEY, (err, decoded) => {
		cb(decoded)
	})
}

module.exports = (req, res, next) => {
	identUser(req.cookies[AUTH_COOKIE], (payload) => {
		req.user = payload || {}
		next()
	})
}
