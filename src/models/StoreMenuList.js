module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'storeMenuList',
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      storeId: { type: DataTypes.BIGINT },
      price: { type: DataTypes.INTEGER(30) },
      name: { type: DataTypes.STRING(50) },
      category: { type: DataTypes.STRING(30) },
      comment: { type: DataTypes.STRING(300) },
      profileUrl: { type: DataTypes.STRING(300) },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    { underscored: true, timestamps: true, freezeTableName: true }
  );
};
