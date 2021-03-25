const { OrderList, StoreMenuList, OrderMenu } = require('../../models');
const { NotFoundException } = require('../../common/baseException');

exports.orderList = async function (memberId, storeId, orders) {
  const orderList = await OrderList.create({
    memberId: memberId,
    storeId: storeId,
  });

  for (let i = 0; i < orders.length; i++) {
    const menu = await StoreMenuList.findOne({
      where: {
        id: orders[i].menuId,
      },
    });

    if (!menu) {
      throw new NotFoundException('해당하는 메뉴가 존재하지 않습니다');
    }

    await OrderMenu.create({
      orderListId: orderList.id,
      menuId: orders[i].menuId,
      cnt: orders[i].cnt,
      price: menu.price,
    });
  }
};
