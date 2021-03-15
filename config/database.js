const mysql = require('mysql2/promise');
const { logger } = require('./winston');

// TODO: 본인의 DB 계정 입력
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: '0217',
  database: 'baemin_db',
});

// const pool = mysql.createPool({
//   host: 'gomdol.czlvihmuuxgk.ap-northeast-2.rds.amazonaws.com',
//   user: 'admin',
//   port: '3306',
//   password: 'rhaehf!123',
//   database: 'baemin_db',
// });

module.exports = {
  pool: pool,
};
