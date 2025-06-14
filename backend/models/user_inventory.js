module.exports = (sequelize, DataTypes) => {
  const UserInventory = sequelize.define('UserInventory', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    grade_value: DataTypes.DECIMAL,
    obtained_date: DataTypes.DATE
  }, {});

  UserInventory.associate = models => {
    UserInventory.belongsTo(models.User, { foreignKey: 'user_id' });
    UserInventory.belongsTo(models.Card, { foreignKey: 'card_id' });
    UserInventory.belongsTo(models.CardCondition, { foreignKey: 'condition_id' });
    UserInventory.belongsTo(models.GradingCompany, { foreignKey: 'grading_company_id' });
  };

  return UserInventory;
};
