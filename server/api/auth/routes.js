/* eslint-disable new-cap */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const authMiddleware = require('./middleware');

router.get('/test', (req, res) => {
  res.send('test success');
});

router.get('/test-auth', authMiddleware(), (req, res) => {
  res.send('test success');
});

router.get('/test-req-user', (req, res) => {
  res.send(req.user);
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  const user = req.user;
  if (!user) {
    const error = new Error('Incorrect Login');
    error.status = 401;
    res.status(401).send(error);
  } else {
    delete user.salt;
    delete user.hash;
    res.send(user);
  }
});

router.get('/logout', (req, res) => {
  req.logout();
  res.status(200).send('loggedOut');
});

module.exports = router;
