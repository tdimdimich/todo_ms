import React from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleTaskState } from './actions'

import { selectTaskById } from './selectors'

const TaskItem = ({ id }) => {
	const dispatch = useDispatch()
	const task = useSelector(selectTaskById(id))
	
	const toggleState = useCallback(() => dispatch(toggleTaskState(id)))
	
	return (
		<li class="list-group-item">
			{ task.name }
			<div class="btn-group float-right" role="group" aria-label="Basic example">
				<button class="btn btn-success btn-sm"><i class="fa fa-check"></i></button>
				<button class="btn btn-secondary btn-sm"><i class="fa fa-times"></i></button>
				<button class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
				<button class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
			</div>
		</li>
	)
}

export default TaskItem

