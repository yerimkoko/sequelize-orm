const { success, fail } = require('../../common/response');
const storeService = require('./storeService');

exports.retrieveDefaultStores = async function (req, res) {
  try {
    const { category } = req.query;

    const response = await storeService.retrieveDefaultStores(category);
    return res.status(200).send(success(response));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};

exports.retrieveStoresOrderByDeliveryTip = async function (req, res) {
  try {
    const { category } = req.query;

    const response = await storeService.retrieveDefaultStoresOrderByDeliveryTip(
      category
    );
    return res.status(200).send(success(response));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};

exports.retrieveStoresOrderByDeliveryTime = async function (req, res) {
  try {
    const { category } = req.query;

    const response = await storeService.retrieveDefaultStoresOrderByDeliveryTime(
      category
    );
    return res.status(200).send(success(response));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};

exports.searchStore = async function (req, res) {
  try {
    const { keyword } = req.query;
    const response = await storeService.searchStore(keyword);
    return res.status(200).send(success(response));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};

exports.getStoreMenuDetail = async function (req, res) {
  try {
    const { storeId } = req.query;
    const response = await storeService.getStoresDetail(storeId);
    return res.status(200).send(success(response));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};
