module.exports = (sequelize, DataTypes) => {
  const GradingCompany = sequelize.define('GradingCompany', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});

  GradingCompany.associate = models => {
    GradingCompany.hasMany(models.UserInventory, { foreignKey: 'grading_company_id' });
  };

  return GradingCompany;
};
