const User = require('../models/User');

const Authentification = ( req, res ) => {
    console.log(req.body.verificationPassword);
    User.find()
    .then(( auth ) => res.status(200).json(auth))

}
module.exports.Authentification = Authentification;