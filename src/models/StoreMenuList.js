module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'storeMenuList',
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      storeId: { type: DataTypes.BIGINT },
      menuPrice: { type: DataTypes.INTEGER(30) },
      menuName: { type: DataTypes.STRING(50) },
      menuCategory: { type: DataTypes.STRING(30) },
      menuComment: { type: DataTypes.STRING(300) },
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
