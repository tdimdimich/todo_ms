import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TaskItem from './TaskItem'

import { fetchTaskList } from './actions'
import { selectTaskList } from './selectors'

const TaskList = () => {
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(fetchTaskList())
	}, [])
	
	const list = useSelector(selectTaskList) || []
	
	return (
		<div>
			<ul class="list-group">
				{ list.map((id) => <TaskItem key={id} id={id} />) }
			</ul>
		</div>
	)
}

export default TaskList


