const jwt = require('jsonwebtoken');
const {
  ConflictException,
  NotFoundException,
} = require('../../common/baseException');
const { Member } = require('../../models');
const secret_config = require('../../config/secret');
const PasswordUtils = require('../../utils/passwordUtils');

exports.signUp = async function (
  email,
  password,
  nickname,
  phoneNumber,
  birth
) {
  const findMember = await Member.findOne({
    where: {
      email: email,
    },
  });

  if (findMember) {
    throw new ConflictException('이미 가입된 회원입니다.');
  }

  const hashedPassword = PasswordUtils.encodedPassword(password);

  await Member.create({
    email: email,
    password: hashedPassword,
    nickname: nickname,
    phoneNumber: phoneNumber,
    birth: birth,
  });
};

exports.login = async function (email, password) {
  const hashedPassword = PasswordUtils.encodedPassword(password);

  const loginMember = await Member.findOne({
    where: {
      email: email,
      password: hashedPassword,
      isDeleted: 0,
    },
  });

  if (!loginMember) {
    throw new ConflictException('가입되어 있지 않은 회원입니다.');
  }

  const token = jwt.sign(
    {
      userId: loginMember.id,
    }, // 토큰의 내용(payload)
    secret_config.jwtsecret, // 비밀키
    {
      expiresIn: '30d',
      subject: 'yerim',
    } // 유효 기간 365일
  );

  return token;
};

exports.updateMember = async function (nickname, phoneNumber, profileUrl, id) {
  const findMember = await Member.findOne({
    where: {
      id: id,
    },
  });

  if (!findMember) {
    throw new NotFoundException('해당하는 멤버는 존재하지 않습니다.');
  }
  await findMember.update({
    nickname: nickname,
    phoneNumber: phoneNumber,
    profileUrl: profileUrl,
  });
};

exports.verifyEmail = async function (email) {
  const findMember = await Member.findOne({
    where: {
      email: email,
    },
  });
  if (findMember) {
    throw new ConflictException('이미 존재하는 이메일 입니다.');
  }
};
