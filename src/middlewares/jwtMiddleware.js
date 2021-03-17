const jwt = require('jsonwebtoken');
const secret_config = require('../config/secret');
const { fail } = require('../common/response');
const { UnAuthorizedException } = require('../common/baseException');

const jwtMiddleware = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.query.token;
  if (!token) {
    return res
      .status(401)
      .send(
        fail(
          new UnAuthorizedException(
            '토큰이 만료되었습니다. 다시 로그인 해주세요.'
          )
        )
      );
  }

  const p = new Promise((resolve, reject) => {
    jwt.verify(token, secret_config.jwtsecret, (err, verifiedToken) => {
      if (err) reject(err);
      resolve(verifiedToken);
    });
  });

  p.then((verifiedToken) => {
    req.verifiedToken = verifiedToken;
    req.userId = verifiedToken.userId;
    next();
  }).catch((error) => {
    return res
      .status(401)
      .send(
        fail(
          new UnAuthorizedException(
            '토큰이 만료되었습니다. 다시 로그인 해주세요.'
          )
        )
      );
  });
};

module.exports = jwtMiddleware;
