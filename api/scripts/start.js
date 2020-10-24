import 'config/constants'
import createServer from './server/create'

;(async () => {
	const app = await createServer()
	app.listen(80)
})()
