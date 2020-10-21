import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchTaskList } from './actions'
import { selectTaskItems } from './selectors'

const TaskList = () => {
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(fetchTaskList())
	}, [])
	
	const items = useSelector(selectTaskItems)
	
	return (
		<div>
			{items.map((task) => (
				<div key={task.id}>{ task.name }</div>
			))}
		</div>
	)
}

export default TaskList


