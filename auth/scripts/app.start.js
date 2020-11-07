require('module-alias/register')
require('config/constants')
const createApp = require('./app.create')

const app = createApp()
app.listen(80, () => {
	console.log('Server started')
})

