module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'test',
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(10), allowNull: false },
      price: { type: DataTypes.INTEGER },
      profileUrl: { type: DataTypes.STRING(300) },
    },
    { underscored: true, timestamps: true, freezeTableName: true }
  );
};
