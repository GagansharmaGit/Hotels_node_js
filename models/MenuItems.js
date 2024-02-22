const mongoose = require("mongoose");

const MenuItemsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    taste: {
        type: String,
        enum: ['Sweet', 'Spicy', 'Sour'],
        required: true,
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
});

const MenuItem = mongoose.model('MenuItem', MenuItemsSchema); // Fix the model name here

module.exports = MenuItem;
