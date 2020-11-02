
import { AUTH_COOKIE_KEY } from 'config/constants'

import User from 'models/User'
import { verifyToken } from 'services/auth'


const findUserByToken = async (token) => {
	const payload = await verifyToken(token)
	return payload && await User.findOne({ _id: payload.id })
}


export default async (req, res, next) => {
	const token = req.cookies[AUTH_COOKIE_KEY]
	if (token) {
		const user = await findUserByToken(token)
		if (user) {
			req.user = user
		} else {
			res.cookie(AUTH_COOKIE_KEY, '', { maxAge: 0 })
		}
	}
	next()
}


