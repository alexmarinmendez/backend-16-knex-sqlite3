const options = {
    client: 'sqlite3',
    connection: {
        filename: './db/cars.sqlite'
    },
    useNullAsDefault: true
}

module.exports = options;