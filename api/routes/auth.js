import { Router } from 'express'

import { AUTH_COOKIE_KEY, AUTH_COOKIE_TIME } from 'config/constants'

import User from 'models/User'
import { generateToken } from 'services/auth'


const router = Router()


router.get('/current', async (req, res) => {
	res.json(req.user)
})

router.post('/signup', async (req, res) => {
	const { username, password } = req.body
	const { _id } = await new User({ username, password }).save()
	const user = await User.findOne({ _id })
	await setCookieJwtToken(res, { id: user._id })
	res.json({ user })
})

router.post('/login', async (req, res) => {
	const { username, password } = req.body
	const user = await User.findOne({ username, password })
	if (!user) return res.status(401).json({ error: 'wrong username or password' })
	await setCookieJwtToken(res, { id: user._id })
	res.json({ user })
})


const setCookieJwtToken = async (res, payload) => {
	const token = await generateToken(payload, AUTH_COOKIE_TIME)
	res.cookie(AUTH_COOKIE_KEY, token, { maxAge: AUTH_COOKIE_TIME * 1000, httpOnly: true })
}



export default router


