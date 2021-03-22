module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'order_menu',
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      listId: { type: DataTypes.BIGINT },
      menuId: { type: DataTypes.BIGINT },
      cnt: { type: DataTypes.INTEGER(100), defaultValue: 1 },
      amount: { type: DataTypes.INTEGER(100) },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    { underscored: true, timestamps: true, freezeTableName: true }
  );
};
