const Knex = require('knex');

// Initialize knex.
const knex = Knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'iksanfib',
    database: 'fbl'
  }
});

// Give the knex object to objection.
module.exports = knex;