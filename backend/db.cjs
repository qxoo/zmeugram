const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  password: '8879',
  host: 'localhost',
  port: 5432,
  database: 'zmeugram',
})

module.exports = pool
