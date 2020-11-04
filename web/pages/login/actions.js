import axios from 'axios'


export const login = (values) => async (dispatch) => {
	const res = await axios.post('/api/auth/login', values)
	console.log(res)
}
