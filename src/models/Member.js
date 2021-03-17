module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'member',
    {
      id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
      nickname: { type: DataTypes.STRING(50), alowNull: false },
      email: { type: DataTypes.STRING(50), allowNull: false },
      password: { type: DataTypes.STRING(200), allowNull: false },
      profileUrl: { type: DataTypes.STRING(300) },
      phoneNumber: { type: DataTypes.STRING(50) },
      isDeleted: { type: DataTypes.BOOLEAN, defaultValues: false },
    },
    { underscored: true, timestamps: true, freezeTableName: true }
  );
};
