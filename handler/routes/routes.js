const Sneakers = require('../Sneaker');
const Inscription = require('../Inscription');
const Comment = require('../Comment');
const Connexion = require('../Connexion');

const routes = (router) => {
    router.get('/sneakers/', Sneakers.readSneakers);
    router.post('/sneakers/', Sneakers.createSneakers);
    router.get('/sneakers/:id', Sneakers.readbyIdSneakers);
    router.put('/sneakers/:id', Sneakers.readUpdateSneakers);
    router.delete('/sneakers/:id', Sneakers.deleteSneakers);
    router.post('/inscription/', Inscription.inscription);
    router.post('/login/', Inscription.login);
    router.post('/sneakers/:id', Comment.PostComment);
    router.post('/sneakers/:id', Comment.GetComment);
    router.get('/login/', Connexion.Authentification);
};

module.exports.routes = routes;