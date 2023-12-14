const express = require('express');
const router = express.Router();
const cartController = require('../controllers/CartController');

// Define the routes
router.get('/carts', cartController.getAllCarts);
router.get('/cart/:cartId', cartController.getCartById);
router.post('/cart', cartController.createCart);
router.put('/cart/:cartId', cartController.updateCart);
router.delete('/cart/:cartId', cartController.deleteCart);

module.exports = router 
