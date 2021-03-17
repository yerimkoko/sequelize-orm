module.exports = function (app) {
  const test = require('./testController');

  app.post('/test', test.saveTest);
};
