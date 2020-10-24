import { Router } from 'express'
import TaskController from 'controllers/task'



const router = Router()


router.get('/', async (req, res) => {
	const list = await TaskController.findAll()
	res.json({ items: list })
})

router.get('/create', async (req, res) => {
	const { name = 'new', state = 'open' } = req.query
	const task = await TaskController.create({ name, state })
	res.json({ status: 'done', task })
})


export default router


