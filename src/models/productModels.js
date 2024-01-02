const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    // Title of the item
    name: {
        type: String,
        required: true
    },
    // Description of the item
    description: {
        type: String,
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    // Price of the item
    price: {
        type: Number,
        required: true,
    },
});

module.exports = Product = mongoose.model('Product', ProductSchema);