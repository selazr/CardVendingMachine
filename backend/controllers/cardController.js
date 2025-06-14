const { Card, UserInventory, CardCondition, GradingCompany } = require('../models');
const { Op } = require('sequelize');

exports.listByCondition = async (req, res) => {
  try {
    const conditionId = req.params.conditionId;
    const cards = await Card.findAll({
      include: [{
        model: UserInventory,
        where: { condition_id: conditionId }
      }]
    });
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listByGrade = async (req, res) => {
  try {
    const { company_id, grade } = req.query;
    const where = {};
    if (company_id) where.grading_company_id = company_id;
    if (grade) where.grade_value = grade;

    const cards = await Card.findAll({
      include: [{ model: UserInventory, where, include: [GradingCompany] }]
    });
    res.json(cards);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
