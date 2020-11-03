import React from 'react'

import { Provider as ReduxProvider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { connectRouter as routerReducer, routerMiddleware } from 'connected-react-router'

import createStore from './store'
import Layout from 'containers/Layout'
import Router from 'containers/Router'


export default async () => {
	
	const history = createBrowserHistory()
	const reducers = { router: routerReducer(history) }
	const middlewares = [ routerMiddleware(history) ]
	const store = createStore(reducers, {}, middlewares)
	
	const App = () => (
		<ReduxProvider store={store}>
			<ConnectedRouter history={history}>
				<Layout>
					<Router/>
				</Layout>
			</ConnectedRouter>
		</ReduxProvider>
	)
	
	return App
}
