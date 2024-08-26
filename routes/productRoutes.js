const express = require('express');
const {
    listProducts,
    getProduct,
    addProduct,
    deleteProduct,
    updateProductPrice
} = require('../controllers/productController.js');
const {protect} = require('../middlewares/auth.js');
const router = express.Router();

// Fetch all products
router.get('/list/',  listProducts);

// Fetch single product
router.get('/:id',  getProduct);

// add new product
router.post('/add/',  addProduct);
// delete product
router.delete('/delete/:id',  deleteProduct);
// update product
router.put('/update/:id',  updateProductPrice);

module.exports = router;
