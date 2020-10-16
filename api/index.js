import express from 'express'
import { Router } from 'express'
import Ramda from 'ramda'


import taskRouter from './routes/task.js'


global.R = Ramda
global.sleep = (t) => new Promise((r) => setTimeout(r, t))


const app = express()
const api = Router()

app.use('/api', api)

api.use('/task', taskRouter)



app.use((err, req, res, next) => {
	console.error(err)
	res.status(err.status || 500).send({ error: err.message })
})

app.use((req, res) => {
	res.status(404).send({ error: "not found" })
})


app.listen(80, () => {
	console.log('Server started')
})

