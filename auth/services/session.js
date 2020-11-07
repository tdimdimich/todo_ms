const fs = require('fs')
const jwt = require('jsonwebtoken')

const RSA_REFRESH_PRIVATE = fs.readFileSync('config/jwt_refresh.key', 'utf8')
const RSA_REFRESH_PUBLIC = fs.readFileSync('config/jwt_refresh.pub', 'utf8')
const RSA_ACCESS_PRIVATE = fs.readFileSync('config/jwt_access.key', 'utf8')
const RSA_ACCESS_PUBLIC = fs.readFileSync('config/jwt_access.pub', 'utf8')

const REFRESH_TOKEN_TTLSEC = 14 * 24 * 60 * 60 // 14 days
const ACCESS_TOKEN_TTLSEC = 30 * 60 // 30 min


const create = async (payload) => {
	const tokens = await generateTokens(payload)
	// not implemented
	return tokens
}

const refresh = async (token, payload) => {
	const tokens = await generateTokens({ ...payload })
	// not implemented
	return tokens
}

const destroy = async (token) => {
	// not implemented
	return { refresh_token: '', refresh_expires: 0, access_token: '', access_expires: 0 }
}


const generateTokens = async (payload) => {
	const refresh_token = await signToken(payload, RSA_REFRESH_PRIVATE, REFRESH_TOKEN_TTLSEC + 10)
	const refresh_expires = REFRESH_TOKEN_TTLSEC * 1000
	const access_token = await signToken(payload, RSA_ACCESS_PRIVATE, ACCESS_TOKEN_TTLSEC + 10)
	const access_expires = ACCESS_TOKEN_TTLSEC * 1000
	return { refresh_token, refresh_expires, access_token, access_expires }
}

const signToken = (payload, secret, expires) => {
	return new Promise((resolve, reject) => {
		jwt.sign(payload, secret, {
			expiresIn: expires,
			algorithm: 'RS256',
		}, (err, token) => {
			if (err) reject(err)
			else resolve(token)
		})
	})
}

const verifyToken = async (token) => {
	return new Promise((resolve) => {
		jsonwebtoken.verify(token, AUTH_SECRET_KEY, (err, decoded) => {
			resolve(decoded)
		})
	})
}





module.exports = { create, refresh, destroy }
