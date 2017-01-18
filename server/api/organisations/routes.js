/* eslint-disable new-cap, prefer-arrow-callback, no-plusplus, no-underscore-dangle */
const express = require('express');
const router = express.Router();
const organisationsFixture = require('../db/organisations');

const driver = require('../neo4j');
const utils = require('../db/utils');

router.get('/newest', (req, res, next) => {
  const session = driver.session();
  const query = 'MATCH (n:Organisation) RETURN n.name AS name, n._id AS _id LIMIT 10';
  session.run(query).then((result) => {
    const data = { organisations: utils.toCollection(result.records) };
    res.json(data);
    session.close();
  }, (error) => {
    next(error);
  });

  // res.json({ organisations: [
  //   { _id: 'someId', name: 'Super Awesome Company', tags: ['carrots'] },
  //   { _id: 'someOtherId', name: 'A Company', tags: ['beans'] },
  //   { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
  //   { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  // ] });
});

router.get('/popular', (req, res) => {
  res.json({ organisations: [
    { _id: 'someId', name: 'Super Awesome Company', tags: ['carrots'] },
    { _id: 'someOtherI', name: 'A Company', tags: ['beans'] },
    { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
    { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  ] });
});

router.get('/auth', (req, res) => {
  res.json({ organisations: [
    { _id: 'someId', name: 'Super Awesome Company', tags: ['carrots'] },
    { _id: 'someOtherI', name: 'A Company', tags: ['beans'] },
    { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
    { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  ] });
});

router.get('/bookmarks', (req, res) => {
  res.json({ organisations: [
    { _id: 'someId', name: 'Super Awesome Company', tags: ['carrots'] },
    { _id: 'someOtherId', name: 'A Company', tags: ['beans'] },
    { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
    { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  ] });
});

router.get('/one/:organisationId', (req, res) => {
  res.json(organisationsFixture[0]);
});

module.exports = router;
