const bcrypt = require('bcrypt');
const User= require('../models/User');


const inscription =  (req, res) => {

    const {lastName, firstName, mail, number, password, passwordDouble } = req.body;
    
    bcrypt.hash(password, 10)
     .then(hash => {
        console.log(hash)
        const user = new User({
            lastName,
            firstName, 
            mail, 
            number, 
            password: hash,
            passwordDouble: hash,
        });  
        console.log(user); 
        if (password!== passwordDouble) {
            res.status(400).json({message : "Veuillez indiquez le même mot de passe"});
        } else {
            user.save()
              .then(() => res.status(201).json({message: 'inscription faite'}))
              console.log(user);
        }
       
     })
     .catch(error => res.status(500).json({error}));
    
} 

module.exports.inscription = inscription;