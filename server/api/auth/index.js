const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authenticationMiddleware = require('./middleware');
const router = require('./routes');
const find = require('lodash').find;


const testUser = {
  emails: [
    { address: 'sean@maplekiwi.com', verified: false },
  ],
  password: 'test-password',
  profile: {
    name: 'Sean Stanley',
    searchHistory: [
      'carrots',
      'apples',
      'Alex Mason',
      'Redhead Web',
      'Chicken',
    ],
  },
  id: 1,
};

function findUser(email, callback) {
  if (find(testUser.emails, { address: email.toLowerCase() })) {
    return callback(null, testUser);
  }
  return callback(null);
}

passport.serializeUser((user, cb) => {
  cb(null, user.emails[0].address);
});

passport.deserializeUser((username, cb) => {
  console.log(username);
  findUser(username, cb);
});


function initPassport(app) {
  passport.use(new LocalStrategy(
    (username, password, done) => {
      findUser(username, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (password !== user.password) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  ));
  passport.authenticationMiddleware = authenticationMiddleware;
  app.use('/auth', router);
}

module.exports = initPassport;
