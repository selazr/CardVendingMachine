module.exports = (sequelize, DataTypes) => {
  const CardCondition = sequelize.define('CardCondition', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});

  CardCondition.associate = models => {
    CardCondition.hasMany(models.UserInventory, { foreignKey: 'condition_id' });
  };

  return CardCondition;
};
