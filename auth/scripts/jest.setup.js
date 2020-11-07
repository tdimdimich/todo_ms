require('module-alias/register')
require('config/constants')

const createApp = require('./app.create')
const knex = require('lib/knex')
const request = require('supertest')

global.app = createApp()
global.request = request
global.createAgent = () => request.agent(app)

afterAll(async () => {
	await knex.destroy()
	// await new Promise((r) => knex.destroy(r))
})
