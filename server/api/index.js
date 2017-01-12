
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const RedisStore = require('connect-redis')(session);
const passport = require('passport');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

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

require('./auth')(app);
app.use('/organisations', require('./organisations').router);
app.use('/resources', require('./resources').router);
app.use('/profiles', require('./profiles').router);
app.use('/search', require('./search').router);

module.exports = app;
