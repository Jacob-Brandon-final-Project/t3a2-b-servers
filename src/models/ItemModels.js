const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    // Title of the item
    title: {
        type: String,
        required: true
    },
    // Description of the item
    description: {
        type: String,
        required: true
    },
    // Category of the item
    category: {
        type: String,
        required: true,
    },
    stockQuantity: {
        type: number
    },
    // Price of the item
    price: {
        type: Number,
        required: true,
    },
    // Date when the item was added
    date_added: {
        type: Date,
        default: Date.now
    },
});

module.exports = Item = mongoose.model('item',ItemSchema);