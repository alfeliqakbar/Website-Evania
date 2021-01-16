const mysql = require('mysql')

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database: 'evania_db'
})

database.connect((error) => {
    if(error) throw error
    console.log('Database connected!')
})

module.exports = database