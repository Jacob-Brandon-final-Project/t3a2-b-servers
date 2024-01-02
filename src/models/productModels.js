const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId()
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
    // Category of the item
    category: {
        type: String,
        required: true,
        enum: ['NBA', 'DBZ', 'Magic']
    }
});

module.exports = Product = mongoose.model('Product', ProductSchema);