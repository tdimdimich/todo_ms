import { UPDATE_TASK_LIST } from './constants'

const initial = {
	items: [],
}


export default (state = initial, action) => {
	switch (action.type) {
		
		case UPDATE_TASK_LIST: {
			return action.payload
		}
		
	}
	return state
}
