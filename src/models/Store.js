module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'store',
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(50) },
      number: { type: DataTypes.STRING(50) },
      category: { type: DataTypes.STRING(30) },
      minDelivery: { type: DataTypes.INTEGER(10) },
      maxDelivery: { type: DataTypes.INTEGER(10) },
      minTip: { type: DataTypes.INTEGER(10) },
      maxTip: { type: DataTypes.INTEGER(10) },
      comment: { type: DataTypes.STRING(300) },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
    },
    { underscored: true, timestamps: true, freezeTableName: true }
  );
};
