'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserInventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users', key: 'id' }
      },
      card_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Cards', key: 'id' }
      },
      condition_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'CardConditions', key: 'id' }
      },
      grading_company_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'GradingCompanies', key: 'id' }
      },
      grade_value: {
        type: Sequelize.DECIMAL
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      obtained_date: Sequelize.DATE,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('UserInventories');
  }
};
