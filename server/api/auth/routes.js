/* eslint-disable new-cap */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const authMiddleware = require('./middleware');
// const bcrypt = require('bcrypt');
// const driver = require('../neo4j');

router.post('/login', passport.authenticate('local'), (req, res) => {
  const user = req.user;
  if (!user) {
    const error = new Error('Incorrect Login');
    error.status = 401;
    res.status(401).send(error);
  } else {
    delete user.hashedPassword;
    res.send(user);
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).send('loggedOut');
});

router.get('/is-signed-in', authMiddleware(), (req, res) => {
  res.send(req.user);
});

// router.post('/register', (req, res) => {
//   const session = driver.session();
//   const user = req.body;
//
// });

module.exports = router;
