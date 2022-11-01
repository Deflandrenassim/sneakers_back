const mongoose = require('../mongodb')

const sneakers = mongoose.Schema({
    id: { type: String, required: true },
    picture: { type: String },
    name: { type: String, required: true },
    marque: { type: String, required: true },
    size: { type: Number, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('sneakers', sneakers);