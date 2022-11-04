const jwt = require('jsonwebtoken');
const { UserController } = require('../models/User');

const middlewareBase = (res, req, next, conditionFunction) => {
  const authHeader = req.headers['authorization'];
  console.log("authHeader" + authHeader);
  const token = authHeader && authHeader.split(' ')[1];
  console.log("token" + token);
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    UserController.getOne({ id: user.id }).then((loadedUser) => {
        console.log(loadedUser);
      if (!conditionFunction(loadedUser)) return res.sendStatus(401);
      req.user = loadedUser;
      next();
    })
      .catch(() => res.sendStatus(401));
  });
};

module.exports.middlewareBase = middlewareBase;