const { UserInventory, Card, CardCondition, GradingCompany } = require('../models');

exports.listInventory = async (req, res) => {
  try {
    const userId = req.params.userId;
    const inventory = await UserInventory.findAll({
      where: { user_id: userId },
      include: [Card, CardCondition, GradingCompany]
    });
    res.json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addCard = async (req, res) => {
  try {
    const item = await UserInventory.create(req.body);
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCard = async (req, res) => {
  try {
    const id = req.params.id;
    await UserInventory.update(req.body, { where: { id } });
    const item = await UserInventory.findByPk(id);
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
