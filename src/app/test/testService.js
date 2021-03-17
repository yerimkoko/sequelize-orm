const { logger } = require('../../../config/winston');
const baseResponse = require('../../../config/baseResponseStatus');
const { response } = require('../../../config/response');
const { errResponse } = require('../../../config/response');

const { Test } = require('../../models');

exports.saveTest = async function (name) {
  try {
    await Test.create({ name: name });
  } catch (err) {
    logger.error(`App - createUser Service error\n: ${err.message}`);
    return errResponse(baseResponse.DB_ERROR);
  }
};
