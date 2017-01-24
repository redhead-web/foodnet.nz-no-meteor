/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const driver = require('../neo4j');
const utils = require('../db/utils');
const getAutocomplete = require('./controllers').getAutocomplete;

router.get('/common', (req, res) => {
  res.json(['Carrots', 'Organic Fertilizer', 'Lamb Mince', 'Tomatoes', 'Websites', 'Packaging', 'HTML', 'Lettuce', 'Organic Sweeteners']);
});

// {person: 'name of person searching', organisation: 'organisation searched for', searchTerm: 'search term used', timestamp: 'time of search'}
router.post('/save', (req, res, next) => {
  const data = req.body;
  const session = driver.session();
  const query = 'MERGE (:Person { _id: {data}.person } )-[search:SEARCHED_FOR { searchTerm: {data}.searchTerm }]->(:Organisation { _id: {data}.organisation }) ' +
                'ON CREATE SET search.timestamp = {data}.timestamp ' +
                'ON MATCH SET search.timestamp = {data}.timestamp';
  session.run(query, { data }).then(() => {
    session.close();
    res.json({});
  }, next);
});

router.get('/', (req, res, next) => {
  const session = driver.session();
  const query = 'MATCH (n:Organisation) ' +
                'WHERE lower(n.name) CONTAINS lower({ q }) ' +
                'RETURN n.name AS name, n._id AS _id, n.tagLine AS tagLine, n.avatar AS avatar, n.banner AS banner LIMIT 10 ';

  session.run(query, { q: req.query.q }).then((result) => {
    const data = { organisations: utils.toCollection(result.records) };
    res.json(data);
    session.close();
  }, next);
});

router.get('/inputs', getAutocomplete);

module.exports = router;
