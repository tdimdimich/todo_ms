const Knex = require('knex')
const conf = require('../config/database')

module.exports = Knex(conf)

