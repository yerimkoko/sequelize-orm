const { Op } = require('sequelize');
const { Store, sequelize } = require('../../models');
const { storeInfoResponse } = require('./dto/storeInfoResponse');
const { ValidationException } = require('../../common/baseException');

exports.retrieveDefaultStores = async function (category, orderBy) {
  const findStores = await Store.findAll({
    where: { category: category },
    order: [['id', 'DESC']],
  });

  return findStores.map((store) => {
    return storeInfoResponse(store);
  });
};

exports.retrieveDefaultStoresOrderByDeliveryTip = async function (category) {
  const findStores = await Store.findAll({
    where: { category: category },
    order: [['minTip', 'ASC']],
  });

  return findStores.map((store) => {
    return storeInfoResponse(store);
  });
};

exports.retrieveDefaultStoresOrderByDeliveryTime = async function (category) {
  const findStores = await Store.findAll({
    where: { category: category },
    order: [['minDelivery', 'ASC']],
  });

  return findStores.map((store) => {
    return storeInfoResponse(store);
  });
};

exports.searchStore = async function (keyword) {
  const findStores = await Store.findAll({
    where: { name: { [Op.like]: '%' + keyword + '%' } },
    order: [['id', 'DESC']],
  });

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
