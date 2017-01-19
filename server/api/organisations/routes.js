/* eslint-disable new-cap, prefer-arrow-callback, no-plusplus, no-underscore-dangle */
const express = require('express');
const router = express.Router();
// const organisationsFixture = require('../db/organisations');

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
});

router.get('/popular', (req, res, next) => {
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
  //   { _id: 'someOtherI', name: 'A Company', tags: ['beans'] },
  //   { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
  //   { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  // ] });
});

router.get('/auth', (req, res, next) => {
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
  //   { _id: 'someOtherI', name: 'A Company', tags: ['beans'] },
  //   { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
  //   { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  // ] });
});

router.get('/bookmarks', (req, res, next) => {
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

router.get('/one/:organisationId', (req, res, next) => {
  const session = driver.session();
  const query = 'MATCH (n:Organisation { _id: {_id} }), ' +
  '(l:Location)<-[:OCCUPIES]-(n), ' +
  '(i:Resource)-[:INPUTS]->(n), ' +
  '(o:Resource)<-[:OUTPUTS]-(n), ' +
  '(p:Person)-[t:TEAM_OF]->(n) ' +
  'RETURN n as organisation, l as locations, i as inputs, o as outputs, { _id: p._id, name: p.name, jobTitle: t.jobTitle } as team';
  session.run(query, { _id: req.params.organisationId }).then((result) => {
    const data = utils.toCollection(result.records)[0];
    res.json(data);
    session.close();
  }, (error) => {
    next(error);
  });
  // res.json(organisationsFixture[0]);
});

router.post('/create', (req, res) => {
  console.log(req.data);
  // const session = driver.session();
  // const query = 'MATCH (n:Organisation) RETURN n.name AS name, n._id AS _id LIMIT 10';


  res.json({
    error: 'No data',
  });
});

module.exports = router;
