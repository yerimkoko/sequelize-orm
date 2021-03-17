module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'test',
    {
      name: { type: DataTypes.STRING(10), allowNull: false },
    },
    { timestamps: false, freezeTableName: true }
  );
};
