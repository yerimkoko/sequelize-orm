const storeController = require('./storeController');
const validateRequest = require('../../middlewares/requestValidator');

module.exports = function (app) {
  // 기본 음식점 리스트 조회
  app.get(
    '/api/v1/store',
    validateRequest('query', ['category']),
    storeController.retrieveDefaultStores
  );

  // 배달 팁 기준 음식점 리스트 조회
  app.get(
    '/api/v1/store/tip',
    validateRequest('query', ['category']),
    storeController.retrieveStoresOrderByDeliveryTip
  );

  // 배달 시간 기준 음식점 리스트 조회
  app.get(
    '/api/v1/store/time',
    validateRequest('query', ['category']),
    storeController.retrieveStoresOrderByDeliveryTime
  );

  // 음식점 검색 API
  app.get(
    '/api/v1/store/search',
    validateRequest('query', ['keyword']),
    storeController.searchStore
  );

  app.get(
    '/api/v1/store/menu-list',
    validateRequest('query', ['storeId']),
    storeController.getStoreMenuDetail
  );
};
