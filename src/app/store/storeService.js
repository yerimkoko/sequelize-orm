const { ConflictException } = require('../../common/baseException');
const { Store } = require('../../models');
const { storeInfoResponse } = require('./dto/storeInfoResponse');

exports.getStores = async function (category) {
  const findStores = await Store.findAll({ where: { category: category } });

  return findStores.map((store) => {
    return storeInfoResponse(store);
  });
};
