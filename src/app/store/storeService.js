const { ConflictException } = require('../../common/baseException');
const { Store } = require('../../models');
exports.list = async function (category) {
  const findStore = await Store.findAll(
    {
      attributes: [
        'id',
        'name',
        'number',
        'comment',
        'minDelivery',
        'maxDelivery',
        'minTip',
        'maxTip',
      ],
    },
    { where: { category: category } }
  );

  if (!findStore) {
    throw new ConflictException('해당되는 가게가 없습니다.');
  }
};
