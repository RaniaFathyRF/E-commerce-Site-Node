
const express = require('express');
const { payStripe } = require('../controllers/paymentController.js');
const router = express.Router();

router.post('/pay', payStripe);

module.exports = router;
