import { createStore, combineReducers, applyMiddleware } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import dynamicMiddlewares, { addMiddleware } from 'redux-dynamic-middlewares'

const logger = createLogger({ collapsed: true })

export default (initialReducers = {}, initialState = {}, initialMiddlewares = []) => {
	
	const reducers = { ...initialReducers }
	const middleware = applyMiddleware(thunk, logger, ...initialMiddlewares, dynamicMiddlewares)
	
	const store = createStore(combineReducers(reducers), initialState, middleware)
	
	store.injectReducer = (name, reducer) => {
		reducers[name] = reducer
		store.replaceReducer(combineReducers(reducers))
	}
	
	store.injectMiddleware = (middleware) => {
		addMiddleware(middleware)
	}
	
	return store
}
