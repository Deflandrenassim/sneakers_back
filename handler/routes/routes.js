const Sneakers = require('../Sneaker');
const Inscription = require('../Inscription');
const Comment = require('../Comment');
const Connexion = require('../Connexion');
const middleware = require('../../middleware/middleware_base');


const routes = (router) => {
    router.get('/sneakers/', middleware.middlewareBase, Sneakers.readSneakers);
    router.post('/sneakers/', middleware.middlewareBase, Sneakers.createSneakers);
    router.get('/sneakers/:id', middleware.middlewareBase, Sneakers.readbyIdSneakers);
    router.put('/sneakers/:id', middleware.middlewareBase, Sneakers.readUpdateSneakers);
    router.delete('/sneakers/:id', middleware.middlewareBase, Sneakers.deleteSneakers);
    router.post('/inscription/', middleware.middlewareBase, Inscription.inscription);
    router.post('/login/', middleware.middlewareBase, Connexion.Authentification);
    router.post('/sneakers/:id', middleware.middlewareBase, Comment.PostComment);
    router.post('/sneakers/:id', middleware.middlewareBase, Comment.GetComments);
};

module.exports.routes = routes;