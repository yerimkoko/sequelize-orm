const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
const path = require('path');
const config = require('../config/config.json')[process.env.NODE_ENV];

const pool = mysql.createPool({
  host: config.host,
  user: config.username,
  port: 3306,
  password: config.password,
  database: config.database,
});

module.exports = {
  pool: pool,
};
