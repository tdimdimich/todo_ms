

describe('app', () => {
	
	it('status is ok', async () => {
		await request(app).get('/status').expect(200).expect({ status: 'ok' })
	})
	
})

