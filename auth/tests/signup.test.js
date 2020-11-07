const { ObjectId } = require('bson')

const generateUsername = () => new ObjectId()

describe('signup', () => {
	
	it('username required', async () => {
		const agent = createAgent()
		const oid = generateUsername()
		const form = { username: '   ', password: oid }
		const res = await agent.post('/api/auth/signup').send(form).expect(422)
		expect(res.body).toMatchObject({ errors: [{ field: 'username' }]})
	})
	
	it('password required', async () => {
		const agent = createAgent()
		const oid = generateUsername()
		const form = { username: oid }
		const res = await agent.post('/api/auth/signup').send(form).expect(422)
		expect(res.body).toMatchObject({ errors: [{ field: 'password' }]})
	})
	
	it('create user', async () => {
		const agent = createAgent()
		const oid = generateUsername()
		const form = { username: oid, password: oid }
		const res = await agent.post('/api/auth/signup').send(form).expect(201)
		// console.log(res.body)
		// console.log(res.headers)
	})
	
})


