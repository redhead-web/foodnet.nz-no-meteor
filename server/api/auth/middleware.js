/* eslint consistent-return:0 */
module.exports = function authenticationMiddleware() {
  return function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).end();
  };
};
