const { success, fail } = require('../../common/response');
const memberService = require('./memberService');

exports.signUp = async function (req, res) {
  try {
    const { email, password, nickname, phoneNumber } = req.body;

    await memberService.signUp(email, password, nickname, phoneNumber);

    return res.status(200).send(success('OK!'));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};

exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;

    const response = await memberService.login(email, password);

    return res.status(200).send(success(response));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};
