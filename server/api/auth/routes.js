/* eslint-disable new-cap */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const authMiddleware = require('./middleware');
const bcrypt = require('bcrypt');
const driver = require('../neo4j');
const faker = require('faker');
const utils = require('../db/utils');

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

router.post('/register', (req, res, next) => {
  const session = driver.session();
  const user = req.body;
  if (!user.password || !user.email) {
    next('no password or email provided');
  }

  bcrypt.hash(user.password, 10).then((result) => {
    delete user.password;
    user._id = faker.random.uuid();
    user.hashedPassword = result;
    user.created = new Date().getTime();
    const query = 'MERGE (p:Person {_id: {user}._id }) ON CREATE SET p += {user} RETURN p._id as _id, p.name as name, p.email as email';
    session.run(query, { user }).then((results) => {
      const data = utils.toCollection(results.records)[0];
      res.json(data);
    });
  }).catch((err) => next(err));
});

router.post('/update', (req, res, next) => {
  const data = req.body;
  const session = driver.session();
  const authorisation = true;  // check here if you are allowed to edit permissions
  let query = '';

  if (authorisation) {
    if (data.operation === 'insert' || data.operation === 'update') {
      query = 'MATCH (person:Person { _id: {data}.person._id } ) ' +
              'MATCH (organisation:Organisation { _id: {data}.organisation._id } ) ' +
              'MERGE ((person)-[r:PERMISSIONS]->(organisation)) ' +
              'ON CREATE SET r.auth = {data}.auth ' +
              'ON MATCH SET r.auth = {data}.auth ';
    } else if (data.operation === 'remove') {
      query = 'MATCH ( :Person { _id: {data}.person._id })-[r:PERMISSIONS]->( :Organisation { _id: {data}.organisation._id } ) ' +
              'DELETE r';
    }

    session.run(query, { data }).then(() => {
      session.close();
      res.json({});
    }, (error) => {
      console.log(error);
      next(error);
    });
  }
});

module.exports = router;
