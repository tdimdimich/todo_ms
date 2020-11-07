
exports.up = async (knex) => {
	await knex.schema.createTable('session', (table) => {
		table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
		table.uuid('user_id').notNullable()
		table.uuid('token_id').notNullable()
		table.integer('version').notNullable().default(1)
		table.timestamp('created_at')
		table.timestamp('updated_at')
		table.timestamp('deleted_at')
	})
}

exports.down = async (knex) => {
	await knex.schema.dropTable('session')
}

