import jsonwebtoken from 'jsonwebtoken'

import { AUTH_SECRET_KEY } from 'config/constants'



export const generateToken = (payload, expires) => {
	return new Promise((resolve, reject) => {
		jsonwebtoken.sign(payload, AUTH_SECRET_KEY, {
			expiresIn: expires,
		}, (err, token) => {
			if (err) reject(err)
			else resolve(token)
		})
	})
}

export const verifyToken = async (token) => {
	return new Promise((resolve) => {
		jsonwebtoken.verify(token, AUTH_SECRET_KEY, (err, decoded) => {
			resolve(decoded)
		})
	})
}



