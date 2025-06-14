const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');
const auth = require('../middleware/auth');

router.get('/condition/:conditionId', auth, cardController.listByCondition);
router.get('/grade', auth, cardController.listByGrade);

module.exports = router;
