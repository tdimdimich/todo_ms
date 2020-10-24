import { STORE_NAME } from './constants'

export const selectTaskList = (state) => state[STORE_NAME].list
export const selectTaskById = (id) => (state) => state[STORE_NAME].map[id]

