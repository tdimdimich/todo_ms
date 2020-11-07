const { ObjectId } = require('bson')
const generateUsername = () => new ObjectId()


describe('auth', () => {
	
	it('signup-login-lodout', async () => {
		const actor = createAgent()
		const username = generateUsername()
		const password = username
		
		// check guest
		res = await actor.get('/api/auth/current').expect(200)
		expect(res.body.id).toBeUndefined()
		
		// signup
		form = { username, password }
		res = await actor.post('/api/auth/signup').send(form).expect(201)
		// check authorized
		res = await actor.get('/api/auth/current').expect(200)
		expect(typeof res.body.id).toBe('string')
		expect(res.body).toMatchObject({ username })
		
		// logout
		res = await actor.post('/api/auth/logout').expect(200)
		// check guest
		res = await actor.get('/api/auth/current').expect(200)
		expect(res.body.id).toBeUndefined()
		
		// login
		form = { username, password }
		res = await actor.post('/api/auth/login').send(form).expect(200)
		// check
		res = await actor.get('/api/auth/current').expect(200)
		expect(typeof res.body.id).toBe('string')
		expect(res.body).toMatchObject({ username })
		
		// logout
		res = await actor.post('/api/auth/logout').expect(200)
		// check guest
		res = await actor.get('/api/auth/current').expect(200)
		expect(res.body.id).toBeUndefined()
		
	})
	
	it('signup-refresh', async () => {
		const actor = createAgent()
		const username = generateUsername()
		const password = username
		
		// signup
		form = { username, password }
		res = await actor.post('/api/auth/signup').send(form).expect(201)
		// check authorized
		res = await actor.get('/api/auth/current').expect(200)
		expect(typeof res.body.id).toBe('string')
		expect(res.body).toMatchObject({ username })
		
		// refresh
		res = await actor.post('/api/auth/refresh').expect(200)
		// check authorized
		res = await actor.get('/api/auth/current').expect(200)
		expect(typeof res.body.id).toBe('string')
		expect(res.body).toMatchObject({ username })
	})
	
})
