const { ConflictException } = require('../../common/baseException');
const { Member } = require('../../models');
const crypto = require('crypto');

exports.signUp = async function (email, password, nickname, phoneNumber) {
  const findMember = await Member.findOne({
    where: {
      email: email,
    },
  });

  if (findMember) {
    throw new ConflictException('이미 가입된 회원입니다.');
  }

  const hashedPassword = crypto
    .createHash('sha512')
    .update(password)
    .digest('hex');

  await Member.create({
    email: email,
    password: hashedPassword,
    nickname: nickname,
    phoneNumber: phoneNumber,
  });
};
