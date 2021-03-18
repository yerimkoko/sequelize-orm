const { error } = require('winston');
const { success, fail } = require('../../common/response');
const memberService = require('./memberService');

exports.signUp = async function (req, res) {
  try {
    const { email, password, nickname, phoneNumber, birth } = req.body;

    await memberService.signUp(email, password, nickname, phoneNumber, birth);

    return res.status(200).send(success('OK!'));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};

exports.login = async function (req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return send('이메일 혹은 비밀번호를 입력해주세요!');
    }
    const response = await memberService.login(email, password);

    return res.status(200).send(success(response));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};

exports.updateMemberInfo = async function (req, res) {
  try {
    const { nickname, phoneNumber, profileUrl } = req.body;
    const id = req.userId;
    await memberService.updateMember(nickname, phoneNumber, profileUrl, id);
    return res.status(200).send(success('OK'));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};

exports.verfiyEmail = async function (req, res) {
  try {
    const { email } = req.body;
    await memberService.verifyEmail(email);
    return res.status(200).send(success('OK'));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};
