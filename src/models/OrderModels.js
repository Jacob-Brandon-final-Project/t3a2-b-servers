const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    // User ID who made the order
    userId: {
        type: String,
    },
    // Array of items in the order
    items: [{
        // Product ID of the item
        productId: {
            type: String,
        },
        // Name of the product
        name: String,
        // Quantity of the product ordered
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less than 1.']
        },
        // Price of the product
        price: Number
    }],
    // Totl bill of the order
    bill: {
        type: Number,
        required: true
    },
    // Date when the order was added
    date_added: {
        type: Date,
        default: Date.now // Default is the current date and time
    }
})

module.exports = Order = mongoose.model('order',OrderSchema);