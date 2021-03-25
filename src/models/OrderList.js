module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'orderList',
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      memberId: { type: DataTypes.BIGINT },
      storeId: { type: DataTypes.BIGINT },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    { underscored: true, timestamps: true, freezeTableName: true }
  );
};
