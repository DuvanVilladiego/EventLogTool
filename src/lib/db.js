// lib/db.js

const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'registration',
  password: 'root',
  port: 5432, // Puerto predeterminado para PostgreSQL
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}
