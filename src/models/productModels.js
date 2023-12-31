const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    // Unique identifier
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
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