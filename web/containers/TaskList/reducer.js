import * as R from 'ramda'
import { UPDATE_TASK_LIST } from './constants'

const initial = {
	list: [],
	map: {},
}

const listId = R.map(R.prop('id'))
const mapById = (list) => R.zipObj(listId(list), list)

export default (state = initial, action) => {
	switch (action.type) {
		
		case UPDATE_TASK_LIST: {
			const list = listId(action.payload.items)
			const map = mapById(action.payload.items)
			return { ...state, list, map }
		}
		
	}
	return state
}
