const testService = require('./testService');
const { success, fail } = require('../../common/response');

exports.saveTest = async function (req, res) {
  try {
    const { name, price, profileUrl } = req.body;
    // 검증 로직이 필요하겠죠?

    await testService.saveTest(name, price, profileUrl);

    return res.status(200).send(success('OK'));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};

exports.retrieveAllTest = async function (req, res) {
  try {
    const response = await testService.retrieveAllTest();
    return res.status(200).send(success(response));
  } catch (error) {
    console.error(error);
    res.status(500).send('에러가 발생하였습니다');
  }
};
