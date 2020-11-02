import { Router } from 'express'

import { AUTH_COOKIE_KEY, AUTH_COOKIE_TIME } from 'config/constants'

import User from 'models/User'
import { generateToken } from 'services/auth'


const router = Router()


router.get('/current', async (req, res) => {
	res.json(req.user)
})

router.post('/singup', async (req, res) => {
	res.json({ })
})

router.post('/login', async (req, res) => {
	const token = await generateToken({ id: user._id}, AUTH_COOKIE_TIME)
	res.cookie(AUTH_COOKIE_KEY, token, { maxAge: AUTH_COOKIE_TIME * 1000, httpOnly: true })
	res.json({ user: req.user, token })
})




export default router


