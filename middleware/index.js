const { middlewareBase } = require('./middleware_base');

function logged(req, res, next) {
  middlewareBase(res, req, next, () => true);
}


module.exports.logged = logged;
