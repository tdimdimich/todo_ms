const webpack = require('webpack')
const config = require('./config.js')


const compiler = webpack(config)

const watching = compiler.watch({
	aggregateTimeout: 300,
	poll: undefined
}, (err, stats) => {
	
	
	// if (err) console.error(err.stack || err)
	// if (err && err.details) console.error(err.details)
	// if (stats.hasErrors()) console.error(stats.toJson().errors)
	// if (stats.hasWarnings()) console.warn(tats.toJson().warnings)
		
		
	// console.log(stats);

	// process.stdout.write(stats.toString() + '\n')
	console.log(stats.toString({
		cached: false,
		cachedAssets: false,
		chunks: false,
		modules: false,
		colors: true,
		assetsSort: "name",
	}))
	
});


