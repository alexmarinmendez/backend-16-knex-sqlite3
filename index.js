const options = require('./options/sqlite3.config');
const knex = require('knex');

const database = knex(options);

let cars = [
    { name: 'Volvo', price: 15000 },
    { name: 'Audi', price: 35000 },
    { name: 'Citroen', price: 25000 },
    { name: 'Hummer', price: 38000 },
    { name: 'Skoda', price: 5000 },
    { name: 'Mercedes', price: 75000 },
]
database.schema.createTable('cars', table => {
    table.increments('id');
    table.string('name', 20);
    table.integer('price');
})
    .then(() => console.log('Table created!'))
    .catch(err => console.log(err))

database('cars').insert(cars)
    .then(response => console.log(response))
    .catch(err => console.log(err))

database.from('cars').where('name', 'Audi').update({price: 36000})
    .then(() => console.log('Table updated!'))
    .catch(err => console.log(err))

database.from('cars').where('price', '<', 25000).del()
    .then(() => console.log('Row(s) deleted!'))
    .catch(err => console.log(err))
    .finally(() => database.destroy())