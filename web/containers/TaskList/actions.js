import axios from 'axios'
import { UPDATE_TASK_LIST } from './constants'


export const fetchTaskList = () => async (dispatch, getState) => {
	const res = await axios.get('/api/task')
	dispatch({ type: UPDATE_TASK_LIST, payload: res.data })
}

