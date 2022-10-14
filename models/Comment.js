const mongoose = require ('../mongodb');

const comment = mongoose.Schema({
    comment: {type: String},
});

module.exports = mongoose.model('comment', comment);