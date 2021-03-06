const Sequelize = require('sequelize');
const config = require('../config/config.json')[process.env.NODE_ENV];

const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// DB랑 모델이랑 자동으로 매핑해주는 설정입니다. (무조건 로컬에서만 사용해야함)
if (process.env.NODE_ENV == 'local') {
  sequelize.sync({ force: true });
} else {
  sequelize.sync({ alter: true });
}

// 이곳에서 테이블을 매핑해줍니다
db.Member = require('./Member')(sequelize, Sequelize);
db.Store = require('./Store')(sequelize, Sequelize);
db.StoreMenuList = require('./StoreMenuList')(sequelize, Sequelize);
db.OrderMenu = require('./OrderMenu')(sequelize, Sequelize);
db.OrderList = require('./OrderList')(sequelize, Sequelize);

module.exports = db;
