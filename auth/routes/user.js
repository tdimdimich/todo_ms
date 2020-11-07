const router = require('express').Router()

const userService = require('../services/user')


router.get('/', async (req, res) => {
	const list = await userService.findAll()
	res.json([{ list }])
})



module.exports = router
