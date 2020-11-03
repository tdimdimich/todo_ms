
const ROOT_DIR = process.cwd()

module.exports = {
	mode: 'development',
	// devtool: 'source-map',
	devtool: 'inline-source-map',
	entry: {
		main: './scripts/browser/index.js',
	},
	output: {
		publicPath: '/',
		path: `${ROOT_DIR}/.build/`,
		filename: '[name].js',
		// chunkFilename: '[name].js',
		chunkFilename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			config: `${ROOT_DIR}/config/`,
			components: `${ROOT_DIR}/components/`,
			containers: `${ROOT_DIR}/containers/`,
			pages: `${ROOT_DIR}/pages/`,
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: false,
						cacheDirectory: true,
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [
							'react-html-attrs',
							'@babel/plugin-transform-runtime',
							'@babel/plugin-proposal-class-properties',
							'@babel/plugin-transform-modules-commonjs',
							'@babel/plugin-proposal-export-default-from',
							'@babel/plugin-syntax-dynamic-import',
						],
					}
				}
			},
		]
	},
	plugins: [
	],
}
