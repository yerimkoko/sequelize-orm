const crypto = require('crypto');

exports.encodedPassword = (password) => {
  return crypto.createHash('sha512').update(password).digest('hex');
};
