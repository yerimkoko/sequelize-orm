const { logger } = require('../../../config/winston');
const { pool } = require('../../../config/database');
const secret_config = require('../../../config/secret');
const userProvider = require('./userProvider');
const userDao = require('./userDao');
const baseResponse = require('../../../config/baseResponseStatus');
const { response } = require('../../../config/response');
const { errResponse } = require('../../../config/response');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { connect } = require('http2');

exports.createStore = async function (
  name,
  number,
  comment,
  category,
  min_tip,
  min_delivery,
  max_tip,
  max_delivery,
  userId
) {
  const insertStore = [
    name,
    number,
    comment,
    category,
    min_tip,
    min_delivery,
    max_delivery,
    max_tip,
    userId,
  ];
  const connection = await pool.getConnection(async (conn) => conn);

  try {
    const createStoreResult = await storeDao.save(connection, insertStore);
    return response(baseResponse.SUCCESS);
  } catch (error) {
    logger.error(`App - createStore Service error\n: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  } finally {
    connection.release();
  }
};
