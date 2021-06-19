const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 0,
        max: 5
    },
    type: {
        type: String,
        required: true,
        min: 3
    }
});

mongoose.model('Food', foodSchema);