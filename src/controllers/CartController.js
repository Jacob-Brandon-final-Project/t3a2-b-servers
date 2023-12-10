const Cart = require('../models/CartModels');


// Get all Carts
const getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'});
    }
};

// Get a specific cart by ID
const getCartById = async (req, res) => {
    const { cartId } = req.params;
    try {
        const cart = await Cart.findById(cartId);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'});
    }
};

// Create a new cart 
const createCart = async (req, res) => {
    const { userId, items } = req.body;
    try {
        const newCart = new Cart({ userId, items });
        const savedCart = await newCart.save();
        res.status(201).json(savedCart);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'});
    }
};

// Update a cart
const updateCart = async (req, res) => {
    const { cartId } = req.params;
    const { items } = req.body;
    try {
        const updateCart = await Cart.findByIdAndUpdate(cartId, { items }, { new: true});
        res.json(updateCart);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'});
    }
};

// Delete a cart
const deleteCart = async (req, res) => {
    const { cartId } = req.params;
    try {
        await Cart.findByIdAndDelete(cartId);
        res.json({ message: 'Cart deleted successfully'});
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'});
    };
};

module.exports = { getAllCarts, getCartById, createCart, updateCart, deleteCart}