const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const authenticationMiddleware = require('./middleware');
const router = require('./routes');
const find = require('lodash').find;
const driver = require('../neo4j');


const testUser = {
  id: 1,
  emails: [{ address: 'sean@maplekiwi.com', verified: false }],
  password: 'test-password',
  profile: {
    name: 'Sean Stanley',
    phone: '0210409066',
    address: { vacinity: 'Whangarei, Northland' },
    description: { short: 'I am good at everything' },
    social: { email: 'email@email.com', facebook: 'facebook link', twitter: 'twitter link', instagram: 'instagram link', youtube: 'youtube link' },
    bookmarks: ['someId', 'someOtherId'],
    searchHistory: ['carrots', 'apples', 'Alex Mason', 'Redhead Web', 'Chicken'],
  },
};

function findUser(email, callback) {
  const session = driver.session();
  const query = 'MATCH (n:Person { email: {email} }) ' +
                'RETURN n AS person';

  session.run(query, { email }).then((result) => {
    const user = result.records;
    console.log(user);
    // log in using user
  }, (error) => {
    console.log(error);
  });

  if (find(testUser.emails, { address: email.toLowerCase() })) {
    return callback(null, testUser);
  }
  return callback(null);
}

passport.serializeUser((user, cb) => {
  cb(null, user.emails[0].address);
});

passport.deserializeUser((username, cb) => {
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
