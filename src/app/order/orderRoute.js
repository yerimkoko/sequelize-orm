const orderController = require('./orderController');
const jwtMiddleware = require('../../middlewares/jwtMiddleware');
const validateRequest = require('../../middlewares/requestValidator');

module.exports = function (app) {
  app.post(
    '/api/v1/order',
    jwtMiddleware,
    validateRequest('body', ['storeId']),
    orderController.orderListByMemberIdAndStoreId
  );
};
