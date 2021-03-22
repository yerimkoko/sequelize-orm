const { success, fail } = require('../../common/response');
const storeService = require('./storeService');
const { BadRequsetException } = require('../../common/baseException');

const isNotIncludeOrderBy = (orderBy) => {
  return !['tip', 'time', 'default'].includes(orderBy);
};

exports.retrieveDefaultStores = async function (req, res) {
  try {
    const { category, orderBy } = req.query;

    if (isNotIncludeOrderBy(orderBy)) {
      return res
        .status(200)
        .send(
          fail(
            new BadRequsetException(
              '잘못된 orderBy [tip, time, default] 중 선택'
            )
          )
        );
    }

    // 배달 팁
    if (orderBy == 'tip') {
      const response = await storeService.retrieveDefaultStoresOrderByDeliveryTip(
        category
      );
      return res.status(200).send(success(response));
    }

    // 배달 시간
    if (orderBy == 'time') {
      const response = await storeService.retrieveDefaultStoresOrderByDeliveryTime(
        category
      );
      return res.status(200).send(success(response));
    }

    // 기본
    const response = await storeService.retrieveDefaultStores(category);
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
