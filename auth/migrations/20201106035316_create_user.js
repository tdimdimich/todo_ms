
exports.up = async (knex) => {
	await knex.schema.createTable('user', (table) => {
		table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
		// table.string('email').notNullable().unique()
		table.string('username').notNullable().unique()
		table.string('password_hash').notNullable().default('')
		table.jsonb('roles').notNullable().default('[]')
		table.jsonb('info').notNullable().default('{}')
		table.timestamp('created_at')
		table.timestamp('updated_at')
		table.timestamp('deleted_at')
	})
}

exports.down = async (knex) => {
	await knex.schema.dropTable('user')
}

