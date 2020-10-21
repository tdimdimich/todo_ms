import { STORE_NAME } from './constants'

export const selectTaskItems = (state) => state[STORE_NAME].items

