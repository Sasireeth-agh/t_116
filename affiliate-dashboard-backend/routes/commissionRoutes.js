const express = require('express');
const { updateCommissionRate, getCommissionRates } = require('../controllers/commissionController');
const router = express.Router();

router.post('/update', updateCommissionRate);
router.get('/view', getCommissionRates);

module.exports = router;
