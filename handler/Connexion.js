const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Authentification = ( req, res ) => {
    const { verificationMail, verificationPassword } = req.body; 
    User.findOne({ mail : verificationMail})
    .then(user => {
        bcrypt.compare(verificationPassword, user.password)
        .then(valid => {
            console.log(valid);
            if(!valid ){
                res.status(401).json({message: 'mot de passe  incorrect' })
            } else {
                const userInfo = user
                console.log(userInfo);
                const token = generateAccessToken(user.toJSON())
                res.send({ user: userInfo, token});
            }
        })
       
   })
}
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
  }
module.exports.Authentification = Authentification;