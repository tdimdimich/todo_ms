

exports.up = async (knex) => {
	await knex.raw(`create extension if not exists "uuid-ossp"`)
}

exports.down = async (knex) => {}
