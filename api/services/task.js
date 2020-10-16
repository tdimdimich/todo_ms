
const taskRepository = {
	sequence: 0,
	data: [],
}


const validateTask = (task) => {
	if (!R.is(Object, task)) return false
	return true
}


export const create = async (task) => {
	await sleep(100)
	const createdTask = { ...task, id: ++taskRepository.sequence }
	taskRepository.data.push(createdTask)
	return createdTask
}

export const findAll = async () => {
	await sleep(100)
	return taskRepository.data
}

