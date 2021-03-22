const storeController = require('./storeController');

module.exports = function (app) {
  app.get('/api/v1/store', storeController.getStores);
};

module.exports = function (app) {
  app.get('/api/v1/store/list', storeController.getStoreMenuList);
};

module.exports = function (app) {
  app.get('/api/v1/store/menu-list', storeController.getStoreMenuDetail);
};
