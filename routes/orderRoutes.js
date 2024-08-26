const express = require('express');
const { createOrder, listOrders, getOrder, orderDelivered, deleteOrder } = require('../controllers/orderController.js');
const {protect} = require('../middlewares/auth.js');

const router = express.Router();

// Create new order
router.post('/add', createOrder);

// Fetch all orders
router.get('/list', listOrders);

// Fetch single order
router.get('/:id', getOrder);

// Update order
router.put('/update/:id', orderDelivered);

// Delete order
router.delete('/delete/:id', deleteOrder);

module.exports = router;
