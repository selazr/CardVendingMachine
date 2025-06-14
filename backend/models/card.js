module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING
  }, {});

  Card.associate = models => {
    Card.hasMany(models.UserInventory, { foreignKey: 'card_id' });
  };

  return Card;
};
