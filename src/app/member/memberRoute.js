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
    '/api/v1/signup/verify/email',
    validateRequest('body', ['email']),
    memberController.verfiyEmail
  );

  app.get('/api/v1/member', jwtMiddleware, memberController.getMemberInfo);
};
