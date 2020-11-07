module.exports = {
	client: 'pg',
	connection: process.env.POSTGRES_URL,
	migrations: { tableName: 'migration' },
}
