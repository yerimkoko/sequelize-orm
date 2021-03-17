const storeService = require('../../app/Store/storeService');
const baseResponse = require('../../../config/baseResponseStatus');
const { response, errResponse } = require('../../../config/response');

const regexEmail = require('regex-email');

exports.postStores = async function (req, res) {
  const {
    name,
    number,
    comment,
    category,
    min_delivery,
    max_delivery,
    max_tip,
    min_tip,
  } = req.body;
  const userId = req.userId;
  if (
    !name ||
    !number ||
    !comment ||
    !category ||
    !min_delivery ||
    !min_tip ||
    !max_delivery ||
    !max_tip
  ) {
    return res.send(response(baseResponse.VALUES_EMPTY));
  }
  if (email.length > 30)
    return res.send(response(baseResponse.SIGNUP_EMAIL_LENGTH));

  if (!regexEmail.test(email))
    return res.send(response(baseResponse.SIGNUP_EMAIL_ERROR_TYPE));

  const postStore = await storeService.createStore(
    name,
    number,
    comment,
    category,
    min_tip,
    min_delivery,
    max_tip,
    max_delivery,
    userId
  );

  return res.send(postStore);
};
