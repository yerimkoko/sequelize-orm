const { ConflictException } = require('../../common/baseException');
const { Store } = require('../../models');
const StoreMenuList = require('../../models/StoreMenuList');
const { storeInfoResponse } = require('./dto/storeInfoResponse');
const { getStores } = require('./storeController');

exports.getStores = async function (category) {
  const findStores = await Store.findAll({ where: { category: category } });

  return findStores.map((store) => {
    return storeInfoResponse(store);
  });
};

exports.getStores = async function (storeId) {
  const getStoreMenuList = await Store.findAll({
    include: [
      {
        models: StoreMenuList,
        attributes: [
          'id',
          'price',
          'name',
          'category',
          'comment',
          'profileUrl',
        ],
      },
    ],
  });
  return getStoreMenuList;
};
