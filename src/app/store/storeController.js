const { success, fail } = require('../../common/response');
const storeService = require('./storeService');
const { error } = require('winston');
exports.getStore = async function (req, res) {
  try {
    const { category } = req.query;
    const response = await storeService.list(category);
    if (!response) {
      return send('아무것도 없습니다!');
    }
    return res.statu(200).send(success(response));
  } catch (error) {
    res.status(error.status).send(fail(error));
  }
};
