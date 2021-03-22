const storeController = require('./storeController');
const validateRequest = require('../../middlewares/requestValidator');

module.exports = function (app) {
  app.get(
    '/api/v1/store',
    validateRequest('query', ['category']),
    storeController.getStores
  );

  app.get(
    '/api/v1/store/menu-list',
    validateRequest('query', ['storeId']),
    storeController.getStoreMenuDetail
  );
};
