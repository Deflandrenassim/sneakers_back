const express = require('express');
const { routes } = require('./handler/routes/routes.js');

const router = express.Router();

routes(router);


module.exports = router; 