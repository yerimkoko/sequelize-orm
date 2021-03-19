const storeController = require('./storeController');

module.exports = function (app) {
  app.get('/api/v1/store', storeController.getStores);
};
