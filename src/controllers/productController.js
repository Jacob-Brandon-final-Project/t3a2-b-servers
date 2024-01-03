const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Product = require('../models/productModels');

// Get all products
router.get('/AllItems', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// get a specific product
router.get('/:id', async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.json(res.product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
    
});

// Create a product
router.post('/create', async (req, res) => {
    console.log(req.body);

    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        stockQuantity: req.body.stockQuantity,
        price: req.body.price,
        category: req.body.category
    });
    // Log product._id after the object is created:
    console.log(product._id);
    

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            {_id: req.params.id },
            { $set: req.body },
            { new: true }
        ).exec();
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id });
        if (product) {
            await product.deleteOne({ _id: req.params.id });
            res.json({ message: 'Product Deleted' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;