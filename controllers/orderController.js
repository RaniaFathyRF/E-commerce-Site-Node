const Order = require("../models/Order");
const createOrder = async (req, res) => {
    const {
        orderItems,
        user,
        shippingAddress,
        paymentMethod,
        paymentResult,
        taxPrice,
        shippingPrice,
        totalPrice
    } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400).json({message: 'No order items'});
        return;
    } else {
        const order = new Order({
            orderItems,
            user,
            shippingAddress,
            paymentMethod,
            paymentResult,
            taxPrice,
            shippingPrice,
            totalPrice
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    }
};

const listOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        if (orders) {
            res.status(200).json({success: true, orders});
        }
        res.status(404).json({success: false, message: 'No orders found'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
const getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (order) {
            res.status(200).json({success: true, order});
        } else {
            res.status(404).json({success: false, message: 'Order not found'});
        }
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
};

const orderDelivered = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);

        if (order) {
            order.isDelivered = true;
            const updatedOrder = await order.save();
            res.status(200).json({success: true, updatedOrder});
        } else {
            res.status(404).json({success: false, message: 'Order not found'});
        }
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
};

const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({success: true, message: 'Order deleted'});
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
};

module.exports = {
    createOrder,
    listOrders,
    getOrder,
    orderDelivered,
    deleteOrder
}