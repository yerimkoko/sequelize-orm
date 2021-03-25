const { success, fail } = require('../../common/response');
const orderService = require('./orderService');

exports.orderListByMemberIdAndStoreId = async function (req, res) {
  try {
    const memberId = req.userId;
    const { storeId, orders } = req.body;

    await orderService.orderList(memberId, storeId, orders);

    return res.status(200).send(success('ok!'));
  } catch (error) {
    console.error(error);
    res.status(error.status).send(fail(error));
  }
};
