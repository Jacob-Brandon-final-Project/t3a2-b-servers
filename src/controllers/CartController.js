const Cart = require('../models/CartModels');
const axios = require('axios');

// Get all Carts
const getAllCarts = async (req, res) => {
    try {
        const resonse = await axios.get('https://localhost:3000/carts');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error'})
    }
};

// Create a new cart 
const createCart = async (req, res) => {
    const { userId, items } = req.body;
    try {
        const response = await axios.post('https://localhost:3000/carts', { userId, items });
        res.status(201).json(response.data);
    } catch (error) {
        res.staus(500).json({ error: 'Internal server error'});
    }
}