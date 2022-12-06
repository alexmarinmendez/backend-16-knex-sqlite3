const options = require('./options/sqlite3.config');
const knex = require('knex');

const database = knex(options);

database.from('cars').select('*')
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => database.destroy())
