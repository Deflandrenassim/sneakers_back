const moongoose  = require('../mongodb');
const uniqueValidator = require('mongoose-unique-validator');

const inscription = moongoose.Schema({
    
    lastName: {type: String, required: true},
    firstName: {type: String, required: true},
    mail: {type: String, required: true, unique: true},
    number: {type: Number, required: true},
    password: {type: String, required: true},
    passwordDouble: {type: String, required: true},

})
inscription.plugin(uniqueValidator);

module.exports = moongoose.model('inscription', inscription);