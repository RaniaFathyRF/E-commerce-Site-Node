import Stripe from "stripe";
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const payStripe =async (req, res) => {
    const { amount, currency, source, description } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method: source,
            description,
            confirm: true,
        });

        res.json({ success: true, paymentIntent });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { payStripe };
