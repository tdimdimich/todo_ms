import { combineReducers } from 'redux'

import TaskListReducer from 'containers/TaskList/reducer'

export default combineReducers({
	task_list: TaskListReducer,
})
