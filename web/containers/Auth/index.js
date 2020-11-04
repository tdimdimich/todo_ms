import asyncmodule from 'lib/asyncmodule'
import AuthProvider from './AuthProvider'
import { STORE_NAME } from './constants'
import { selectAuthUser } from './selectors'
import { logout, fetchUser } from './actions'
import reducer from './reducer'

export default asyncmodule(() => ({
	default: AuthProvider,
	initialize: async ({ store }) => {
		store.injectReducer(STORE_NAME, reducer)
		await store.dispatch(fetchUser())
	}
}))

export { 
	selectAuthUser,
	fetchUser,
	logout,
}

