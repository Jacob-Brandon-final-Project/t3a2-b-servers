const Cart = require('../models/CartModels');
const axios = require('axios');

// Get all Carts
const getAllCarts = async (req, res) => {
    try {
        const response = await axios.get('https://localhost:3000/carts');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'});
    }
};

// Get a specific cart by ID
const getCartById = async (req, res) => {
    const { cartId } = req.params;
    try {
        const response = await axios.get(`https://localhost:3000/carts/${cartId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'});
    }
};

// Create a new cart 
const createCart = async (req, res) => {
    const { userId, items } = req.body;
    try {
        const response = await axios.post('https://localhost:3000/carts', { userId, items });
        res.status(201).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'});
    }
};

// Update a cart
const updateCart = async (req, res) => {
    const { cartId } = req.params;
    const { items } = req.body;
    try {
        const response = await axios.put(`https://localhost:3000/carts/${cartId}`, { items });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'});
    }
};

// Delete a cart
const deleteCart = async (req, res) => {
    const { cartId } = req.params;
    try {
        const response= await axios.delete(`https://localhost:3000/carts/${cartId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'});
    };
};

module.exports = { getAllCarts, getCartById, createCart, updateCart, deleteCart}