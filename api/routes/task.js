import { Router } from 'express'
import * as TaskService from '../services/task.js'


const router = Router()



router.get('/', async (req, res) => {
	const list = await TaskService.findAll()
	res.json({ items: list })
})


router.get('/create', async (req, res) => {
	const { name = 'new', state = 'open' } = req.query
	const task = await TaskService.create({ name, state })
	res.json({ status: 'done', task })
})




export default router


