const memberController = require('./memberController');
const jwtMiddleware = require('../../middlewares/jwtMiddleware');
const validateRequest = require('../../middlewares/requestValidator');

module.exports = function (app) {
  app.post(
    '/api/v1/signUp',
    validateRequest('body', [
      'email',
      'password',
      'nickname',
      'phoneNumber',
      'birth',
    ]),
    memberController.signUp
  );

  app.post(
    '/api/v1/login',
    validateRequest('body', ['email', 'password']),
    memberController.login
  );

  app.put(
    '/api/v1/member',
    jwtMiddleware,
    validateRequest('body', ['nickname']),
    memberController.updateMemberInfo
  );

  app.post(
    '/api/v1/signup/verfiy/email',
    validateRequest('body', ['email']),
    memberController.verfiyEmail
  );
};
