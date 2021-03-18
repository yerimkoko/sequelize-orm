const memberController = require('./memberController');
const jwtMiddleware = require('../../middlewares/jwtMiddleware');

module.exports = function (app) {
  app.post('/api/v1/signUp', memberController.signUp);

  app.post('/api/v1/login', memberController.login);

  // app.put(
  //   '/api/v1/updateMember',
  //   jwtMiddleware,
  //   memberController.updateMemberInfo
  // );

  app.post('/api/v1/signup/verfiy/email', memberController.verfiyEmail);
};
