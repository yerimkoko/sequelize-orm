const { error } = require('winston');
const { success, fail } = require('../../common/response');
const memberService = require('./memberService');

exports.signUp = async function (req, res) {
  try {
    const { email, password, nickname, phoneNumber, birth } = req.body;
    if (!email || !password || !nickname || !phoneNumber || !birth) {
      return res.send('필수 입력 값들을 입력해주세요!');
    }
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
    const { nickname, password, phoneNumber, profileUrl } = req.body;
    const id = req.userId;
    await memberService.updateMember(
      nickname,
      password,
      phoneNumber,
      profileUrl,
      id
    );
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
