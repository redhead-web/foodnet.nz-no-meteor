
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const passport = require('passport');
const app = express();
require('./auth')(app);

module.exports = () => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    // use a proper database to store sessions. Can't use Neo4J unfortunately
    const options = {}; // TODO add redis options;
    app.use(session({
      store: new RedisStore(options),
      secret: 'keyboard cat',
    }));
  } else {
    app.use(session({
      secret: 'keyboard cat',
    }));
  }

  app.use(passport.initialize());
  app.use(passport.session());

  return app;
};
