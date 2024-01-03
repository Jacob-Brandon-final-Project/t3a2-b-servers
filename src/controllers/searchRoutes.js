const express = require('express');
const router = express.Router();
const Product = require('../models/productModels');


router.get('/search', async (req, res) => {
    const searchTerm = req.query.q;

    try {
        // Perform a database query to search for products based on the searchTerm
        const products = await Product.find({ name: { $regex: searchTerm, $options: 'i' } });

        // Return the search result as JSON
        res.json({ results: products });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occured while search for products' });
    }
});

module.exports = router;