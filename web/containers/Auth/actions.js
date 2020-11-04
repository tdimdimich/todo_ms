import axios from 'axios'

import { SET_USER } from './constants'

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/auth/current')
	dispatch({ type: SET_USER, payload: res.data })
}

export const logout = () => async (dispatch) => {
	await axios.post('/api/auth/logout')
	await dispatch(fetchUser())
}


