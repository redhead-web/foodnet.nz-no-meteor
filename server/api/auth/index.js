const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authenticationMiddleware = require('./middleware');
const router = require('./routes');
const driver = require('../neo4j');
const utils = require('../db/utils');
const bcrypt = require('bcrypt');

function findUser(emailAddress, callback) {
  const session = driver.session();
  const email = emailAddress.toLowerCase();
  const query = 'MATCH (n:Person { email: {email} }) ' +
                'RETURN n._id as _id, n.name as name, n.email as email, n.hashedPassword as hashedPassword';
  session.run(query, { email }).then((result) => {
    const user = utils.toCollection(result.records)[0];
    console.log(user);
    session.close();

    if (user) {
      return callback(null, user);
    }
    return callback(null);
  }).catch((err) => callback(err));
}

passport.serializeUser((user, cb) => {
  cb(null, user.email);
});

passport.deserializeUser((username, cb) => {
  findUser(username, cb);
});


function initPassport(app) {
  passport.use(new LocalStrategy(
    (username, plainTextPassword, done) => {
      findUser(username, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        return bcrypt.compare(plainTextPassword, user.hashedPassword).then((result) => {
          if (result) {
            const u = user;
            delete u.hashedPassword;
            return done(null, u);
          }
          return done(null, false);
        }).catch((error) => done(error));
      });
    }
  ));
  passport.authenticationMiddleware = authenticationMiddleware;
  app.use('/auth', router);
}

module.exports = initPassport;
