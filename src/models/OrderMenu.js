module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'orderMenu',
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      orderListId: { type: DataTypes.BIGINT },
      menuId: { type: DataTypes.BIGINT },
      cnt: { type: DataTypes.INTEGER(100), defaultValue: 1 },
      price: { type: DataTypes.INTEGER(100) },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    { underscored: true, timestamps: true, freezeTableName: true }
  );
};
