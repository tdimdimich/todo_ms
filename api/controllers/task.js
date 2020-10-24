
const taskRepository = {
	sequence: 0,
	data: [],
}


const validateTask = (task) => {
	if (!R.is(Object, task)) return false
	return true
}


const create = async (task) => {
	await sleep(100)
	const createdTask = { ...task, id: ++taskRepository.sequence + '' }
	taskRepository.data.push(createdTask)
	return createdTask
}

const findAll = async () => {
	await sleep(100)
	return taskRepository.data
}


export default {
	create,
	findAll,
}
