import axios from 'axios'
import { routerActions } from 'connected-react-router'

import { fetchUser } from 'containers/Auth'

export const login = (values) => async (dispatch) => {
	const res = await axios.post('/api/auth/login', values)
	if (res.status === 200) {
		dispatch(routerActions.push('/'))
		dispatch(fetchUser())
	}
}
