
const express = require('express');
const { register, login } = require('../controllers/userController');

const router = express.Router();

// Register a new user
router.post('/register', register);

// Login a user
router.post('/login', login);

module.exports = router;
