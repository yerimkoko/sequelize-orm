const { QueryTypes } = require('sequelize');
const { ConflictException } = require('../../common/baseException');
const { Store, sequelize } = require('../../models');
const StoreMenuList = require('../../models/StoreMenuList');
const { storeInfoResponse } = require('./dto/storeInfoResponse');
const { getStores } = require('./storeController');

exports.getStores = async function (category) {
  const findStores = await Store.findAll({ where: { category: category } });

  return findStores.map((store) => {
    return storeInfoResponse(store);
  });
};

exports.getStoresDetail = async function (storeId) {
  const getStoresQuery = await sequelize.query(
    `SELECT s.id, s.name as store_name, s.number, comment, menu_name, menu_price, menu_comment
    from store as s 
    LEFT JOIN storeMenuList as l
    ON s.id = l.store_id
    where s.id = ${storeId}`
  );

  return getStoresQuery[0];
};
