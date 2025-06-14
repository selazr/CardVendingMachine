const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const auth = require('../middleware/auth');

router.get('/:userId', auth, inventoryController.listInventory);
router.post('/', auth, inventoryController.addCard);
router.put('/:id', auth, inventoryController.updateCard);

module.exports = router;
