const Sneakers = require('../models/Sneaker');
const { uid } = require('uid');

const readSneakers = (req, res) => {
    Sneakers.find()
    .then(( commentaire ) => res.status(200).json(commentaire))
}

const createSneakers = (req, res) => { 
    const id = uid(4);
    console.log(id + 'console log');

    const { name , price, marque, size, picture} = req.body;
      
       const sneaker= new Sneakers ({
        id,
        name,
        marque,
        size,
        price,
        picture,
       });
      
       sneaker.save()
       .then((myComment) => {
        console.log(myComment);
        res.status(201).json(
            {   
                id: myComment.id,
                name: myComment.name,
                price: myComment.price,
                marque: myComment.marque,
                size: myComment.size,
                picture: myComment.picture,  
            }
        )
       })
}

const readUpdateSneakers = (req, res) => {
    console.log(req.body);
    Sneakers.findOneAndUpdate({ id: req.params.id },{ name: req.body.newName})
    .then(( update ) => res.status(200).json(update))
};

const readbyIdSneakers = (req,res) => {
    Sneakers.findOne({ id : req.params.id})
    .then(( commentaireId ) => res.status(200).json(commentaireId))
   //console.log(req.params.id + '--------');
};
const deleteSneakers = (req, res) => {
    Sneakers.deleteOne({id : req.params.id})
    .then(() => res.status(200).json({message:  'objet supprimé'}))
}


module.exports.readbyIdSneakers = readbyIdSneakers;
module.exports.createSneakers = createSneakers;
module.exports.readSneakers = readSneakers;
module.exports.readUpdateSneakers = readUpdateSneakers;
module.exports.deleteSneakers = deleteSneakers;