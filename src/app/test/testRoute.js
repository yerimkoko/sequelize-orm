const testController = require('./testController');

module.exports = function (app) {
  app.post('/api/v1/test', testController.saveTest);

  app.get('/api/v1/test', testController.retrieveAllTest);
};
