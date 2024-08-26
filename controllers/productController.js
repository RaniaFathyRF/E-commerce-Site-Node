const Product = require("../models/Product");

// Fetch all products
const listProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        if(products) {
            res.status(200).json({success: true, products});
        } else {
            res.status(404).json({success: false, message: 'No products found'});
        }
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
};
// Fetch single product
const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    try {
        if (product) {
            res.status(200).json({success: true, product});
        } else {
            res.status(404).json({message: 'Product not found'});
        }
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
};
// Add product
const addProduct = async (req, res) => {

    const {
        name,
        description,
        price,
        countInStock,
        image,
    } = req.body;
    try {
        const product = await new Product({
            name,
            description,
            price,
            countInStock,
            image
        });
        await product.save();

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

};
// Delete product
const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({message: 'Product removed'});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
};
// Update product
const updateProductPrice = async (req, res) => {
    const {
        price
    } = req.body;
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            product.price = price;
            const updatedProduct = await product.save();
            res.json({message: 'Product updated Successfully', updatedProduct});
        } else {
            res.status(404).json({message: 'Product not found'});
        }
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
};
module.exports = {listProducts,getProduct,addProduct,deleteProduct,updateProductPrice}