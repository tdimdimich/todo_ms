const bcrypt = require('bcryptjs')
const knex = require('lib/knex')

const TABLE = 'user'
const SELECT_FIELDS = ['id', 'username', 'roles', 'created_at']

const query = () => knex.select(SELECT_FIELDS).from(TABLE)

const findAll = async (params) => {
	const q = query()
	if (params) q.where(params)
	return await q
}

const findOne = async (params) => {
	const q = query()
	if (params) q.where(params)
	return await q.first()
}

const findById = async (id) => {
	return findOne({ id })
}

const findByUsername = async (username) => {
	return findOne({ username })
}

const findByCredentials = async (username, password) => {
	const user = await knex(TABLE).where({ username }).first()
	if (!user) return null
	const check = await bcrypt.compare(password, user.password_hash)
	if (!check) return null
	return await findById(user.id)
}

const create = async (values) => {
	const { password, ...model } = values
	model.password_hash = await bcrypt.hash(password, 8)
	model.created_at = knex.raw('now()')
	model.updated_at = knex.raw('now()')
	const [ id ] = await knex(TABLE).insert(model).returning('id')
	return await findById(id)
}

const verifyPassword = async (password, hash) => {
	return await bcrypt.compare(password, hash)
}



module.exports = {
	create,
	findAll,
	findOne,
	findById,
	findByUsername,
	findByCredentials,
}
