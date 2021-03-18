const { Test } = require('../../models');
const { sequelize } = require('../../models');

exports.saveTest = async function (name, price, profileUrl) {
  const findTest = await Test.findOne({
    where: {
      name: name,
    },
  });
  if (findTest) {
    throw new ConflictExceptio('이미 존재하는 테스트 입니다');
  }

  await Test.create({
    name: name,
    price: price,
    profileUrl: profileUrl,
  });
};

exports.retrieveAllTest = async function () {
  //   return await Test.findAll();
  const result = await sequelize.query('SELECT * FROM test');
  return result[0];
};
