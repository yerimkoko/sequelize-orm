const storeInfoResponse = (store) => {
  return {
    id: store.id,
    name: store.name,
    number: store.number,
    comment: store.comment,
    minDelivery: store.minDelivery,
    maxDelivery: store.maxDelivery,
    minTip: store.minTip,
    maxTip: store.minTip,
    category: store.category,
    minimumOrder: store.minimumOrder,
  };
};

module.exports = {
  storeInfoResponse,
};
