const Knex = require('knex');

// Initialize knex.
const knex = Knex({
  client: 'mysql2',
  connection: {
    host: '159.65.7.150',
    user: 'fib',
    password: 'Pa55word!!!',
    database: 'coba'
  }
});

// Give the knex object to objection.
module.exports = knex;