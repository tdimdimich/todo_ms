const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const requestTimeout = require('connect-timeout')


module.exports = () => {
	const app = express()
	
	app.use(cookieParser())
	app.use(bodyParser.json())
	app.use(requestTimeout('10s'))

	app.use(require('middlewares/authenticate'))
	
	app.get('/status', (req, res) => res.json({ status: 'ok' }))
	app.use('/api/auth', require('../routes/auth'))
	app.use('/api/auth/user', require('../routes/user'))
	
	app.use(require('../middlewares/errorHandler'))
	app.use(require('../middlewares/notFoundHandler'))

	return app
}
