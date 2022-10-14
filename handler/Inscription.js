const bcrypt = require('bcrypt');
const modelInscription = require('../models/Inscription');


const inscription = (req, res) => {

    const {lastName, firstName, mail, number, password, passwordDouble } = req.body;
    
    bcrypt.hash(password, 10)
     .then(hash => {
        console.log(hash)
        const user = new modelInscription ({
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
        }
       
     })
     .catch(error => res.status(500).json({error}));
    
} 
const login = (req, res ) => {
    const { verificationMail , verificationPassword } = req.body; 
    console.log({ verificationMail: verificationMail })
    modelInscription.findOne({ mail : verificationMail })
    .then(user => {
        if( user.mail === null) {
            res.status(401).json({message: 'identifiant incorrect'})
        } else {
            bcrypt.compare(verificationPassword, user.password)
            .then(valid => {
                console.log({valid})
                if( !valid) {
                    res.status(401).json({message: 'mot de passe  incorrect' })
                }
            })
            .catch(error => {
                res.status(500).json({ error})
            })
        }
    })
    .catch(error => {
        res.status(500).json( { error });
    })
    
}

module.exports.inscription = inscription;
module.exports.login = login;