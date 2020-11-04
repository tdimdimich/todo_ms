import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'


import { MONGODB_URL } from 'config/constants'

export default async () => {
	const app = express()
	await mongoose.connect(MONGODB_URL, { useNewUrlParser: true })
	
	app.use(cookieParser())
	app.use(bodyParser.json())
	
	app.use(require('middlewares/authenticate').default)
	
	app.use('/api/auth', require('routes/auth').default)
	
	app.use(errorHandler)
	app.use(notFoundHandler)

	return app
}


const errorHandler = (err, req, res, next) => {
	console.error(err)
	res.status(err.status || 500).send({ error: err.message })
}

const notFoundHandler = (req, res) => {
	res.status(404).send({ error: "not found" })
}
