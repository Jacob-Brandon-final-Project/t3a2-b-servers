const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
    // User who owns the cart
    userId: {
        type: String
    },
    // Array of items in the cart
    items: [{
        // ID of the product
        productId: {
            type: String
        },
        // Name of the product
        name: String,
        // Quantity of the product in the cart
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less than 1.'],
            default: 1
        },
        // Price of the product
        price: Number
    }],
    // Total bill amount for the cart
    bill: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = Cart= mongoose.model('cart', CartSchema);