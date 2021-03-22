const { fail } = require('../common/response');
const { BadRequsetException } = require('../common/baseException');

module.exports = validateRequest = (field, params) => {
  return function (req, res, next) {
    try {
      for (const param in params) {
        if (!(params[param] in req[field])) {
          return res
            .status(200)
            .send(
              fail(new BadRequsetException(`${params[param]}을 입력해주세요.`))
            );
        }
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
