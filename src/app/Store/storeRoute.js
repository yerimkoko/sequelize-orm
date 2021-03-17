module.exports = function (app) {
  const jwtMiddleware = require('../../../config/jwtMiddleware');
  const store = require('./storeController');

  // 가게 등록 api
  app.post('api/v1/stores', jwtMiddleware, store.postStores);
};
