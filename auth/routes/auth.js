const router = require('express').Router()
const ah = require('express-async-handler')
const bodyValidator = require('middlewares/bodyValidator')
const User = require('services/user')
const Session = require('services/session')

const REFRESH_TOKEN_COOKIE = 'refresh_token'
const REFRESH_TOKEN_PARAMS = { httpOnly: true, path: '/api/auth/' }
const ACCESS_TOKEN_COOKIE = 'access_token'
const ACCESS_TOKEN_PARAMS = { httpOnly: true }



router.get('/current', (req, res) => {
	res.send(req.user)
})


const SignupSchema = {
	username: { type: 'string', trim: true, lowercase: true },
	password: { type: 'string' },
}
const SIGNUP_EXISTS_ERRORS = [{ type: 'exists', field: 'username', message: 'Already exists' }]
router.post('/signup', bodyValidator(SignupSchema), ah(async (req, res) => {
	const { username, password } = req.body
	
	const exists = await User.findByUsername(username)
	if (exists) return res.status(409).send({ errors: SIGNUP_EXISTS_ERRORS })
		
	const user = await User.create({ username, password })

	const payload = { ...user }
	const { refresh_token, refresh_expires, access_token, access_expires } = await Session.create(payload)
	
	res.cookie(REFRESH_TOKEN_COOKIE, refresh_token, {...REFRESH_TOKEN_PARAMS, maxAge: refresh_expires})
	res.cookie(ACCESS_TOKEN_COOKIE, access_token, {...ACCESS_TOKEN_PARAMS, maxAge: access_expires})
	res.status(201).send({ user: payload })
}))


const LoginSchema = {
	username: { type: 'string', trim: true, lowercase: true },
	password: { type: 'string' },
}
const LOGIN_FAILED_ERRORS = [{ type: 'failed', field: 'password', message: 'Incorrect username or password' }]
router.post('/login', bodyValidator(LoginSchema), ah(async (req, res) => {
	const { username, password } = req.body
	
	const user = await User.findByCredentials(username, password)
	if (!user) return res.status(422).send({ errors: LOGIN_FAILED_ERRORS })
	
	const payload = { ...user }
	const { refresh_token, refresh_expires, access_token, access_expires } = await Session.create(payload)
	
	res.cookie(REFRESH_TOKEN_COOKIE, refresh_token, {...REFRESH_TOKEN_PARAMS, maxAge: refresh_expires})
	res.cookie(ACCESS_TOKEN_COOKIE, access_token, {...ACCESS_TOKEN_PARAMS, maxAge: access_expires})
	res.send({ user: payload })
}))

router.post('/logout', ah(async (req, res) => {
	const token = req.cookies[REFRESH_TOKEN_COOKIE]
	
	const { refresh_token, refresh_expires, access_token, access_expires } = await Session.destroy(token)
	res.cookie(REFRESH_TOKEN_COOKIE, refresh_token, {...REFRESH_TOKEN_PARAMS, maxAge: refresh_expires})
	res.cookie(ACCESS_TOKEN_COOKIE, access_token, {...ACCESS_TOKEN_PARAMS, maxAge: access_expires})
	res.send({})
}))

router.post('/refresh', ah(async (req, res) => {
	const { id } = req.user
	if (!id) return res.status(403).send()
	
	const user = await User.findById(id)

	const token = req.cookies[REFRESH_TOKEN_COOKIE]
	const payload = { ...user }
	const { refresh_token, refresh_expires, access_token, access_expires } = await Session.refresh(token, payload)
	
	res.cookie(REFRESH_TOKEN_COOKIE, refresh_token, {...REFRESH_TOKEN_PARAMS, maxAge: refresh_expires})
	res.cookie(ACCESS_TOKEN_COOKIE, access_token, {...ACCESS_TOKEN_PARAMS, maxAge: access_expires})
	res.send({ user: payload })
}))

const generateTokens = async (payload) => {
	
}

const setCookieJwtToken = async (res, payload) => {
	const token = await generateToken(payload, AUTH_COOKIE_TIME)
	res.cookie(AUTH_COOKIE_KEY, token, { maxAge: AUTH_COOKIE_TIME * 1000, httpOnly: true })
}



module.exports = router
