const { success, fail } = require('../../common/response');
const storeService = require('./storeService');

exports.getStores = async function (req, res) {
  try {
    const { category } = req.query;
    const response = await storeService.getStores(category);
    return res.status(200).send(success(response));
  } catch (error) {
    res.status(error.status).send(fail(error));
  }
};

exports.getStoreMenuDetail = async function (req, res) {
  try {
    const { storeId } = req.query;
    const response = await storeService.getStoresDetail(storeId);
    return res.status(200).send(success(response));
  } catch (error) {
    res.status(error.status).send(fail(error));
  }
};
