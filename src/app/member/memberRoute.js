const memberController = require('./memberController');

module.exports = function (app) {
  app.post('/api/v1/signUp', memberController.signUp);
};
