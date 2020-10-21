import React from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider as ReduxProvider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'


import Layout from 'containers/Layout'

import reducer from './reducer'


const logger = createLogger({
	collapsed: true,
})

const middlewares = applyMiddleware(thunk, logger)


export default async () => {
	
	const store = createStore(reducer, {}, middlewares)
	
	const App = () => (
		<ReduxProvider store={store}>
			<Layout/>
		</ReduxProvider>
	)
	
	return App
}
