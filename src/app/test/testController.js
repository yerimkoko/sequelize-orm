const testService = require('./testService');
const baseResponse = require('../../../config/baseResponseStatus');
const { response, errResponse } = require('../../../config/response');

exports.saveTest = async function (req, res) {
  const { name } = req.body;

  await testService.saveTest(name);

  return res.status(200).send('OK');
};
