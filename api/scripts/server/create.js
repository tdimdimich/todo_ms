
import express from 'express'

export default async () => {
	const app = express()
	
	
	app.use('/api/task', require('routes/task').default)
	
	
	


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
