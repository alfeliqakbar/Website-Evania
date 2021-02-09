const mysql = require('mysql')

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '1234',
    database: 'evania_db'
})

database.connect((error) => {
    if(error) throw error
    console.log('Database connected!')
})

module.exports = database