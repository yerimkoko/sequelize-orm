const storeController = require('./storeController');
const validateRequest = require('../../middlewares/requestValidator');

module.exports = function (app) {
  app.get(
    '/api/v1/store',
    validateRequest('query', ['category']),
    storeController.retrieveDefaultStores
  );

  app.get(
    '/api/v1/store/tip',
    validateRequest('query', ['category']),
    storeController.retrieveDefaultStoresOrderByDeliveryTip
  );

  app.get(
    '/api/v1/store/time',
    validateRequest('query', ['category']),
    storeController.retrieveDefaultStoresOrderByDeliveryTime
  );

  app.get(
    '/api/v1/store/menu-list',
    validateRequest('query', ['storeId']),
    storeController.getStoreMenuDetail
  );
};
