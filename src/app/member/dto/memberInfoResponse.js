const memberInfoResponse = (member) => {
  return {
    id: member.id,
    nickname: member.nickname,
    email: member.email,
    profileUrl: member.profileUrl,
    phoneNumber: member.phoneNumber,
  };
};

module.exports = {
  memberInfoResponse,
};
