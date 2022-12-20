const mongoose = require('../mongodb');
const {user} = require('../models/User');
console.log(user);
const comment = mongoose.Schema({
    comment: {type: String},
    date: Date
});

module.exports = mongoose.model('comment', comment);