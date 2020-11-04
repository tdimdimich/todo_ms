import axios from 'axios'


export const signup = (values) => async (dispatch) => {
	const res = await axios.post('/api/auth/signup', values)
	console.log(res)
}
