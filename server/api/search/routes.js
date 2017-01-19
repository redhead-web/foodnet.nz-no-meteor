/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
// const filter = require('lodash').filter;
const driver = require('../neo4j');
const utils = require('../db/utils');

/*
const testOrganisations = [
  {
    _id: 'someId',
    name: 'Whangarei Food Co-op',
    tags: 'carrots',
    banner: 'http://lorempixel.com/400/200/business',
    inputsCount: 5,
    outputsCount: 400,
  },
  {
    _id: 'someId2',
    name: 'Whangarei Growers Market',
    tags: 'celery',
    banner: 'http://lorempixel.com/400/200/nature',
    inputsCount: 10,
    outputsCount: 1000,
  },
];
*/

router.get('/common', (req, res) => {
  res.json(['Carrots', 'Organic Fertilizer', 'Lamb Mince', 'Tomatoes', 'Websites', 'Packaging', 'HTML', 'Lettuce', 'Organic Sweeteners']);
});

router.get('/', (req, res) => {
  const session = driver.session();
  const query = 'MATCH (n:Organisation) ' +
                'RETURN n.name AS name, n._id AS _id LIMIT 10 ';

  session.run(query).then((result) => {
    const data = { organisations: utils.toCollection(result.records) };
    res.json(data);
    session.close();
  }, (error) => {
    const data = { error };
    res.json(data);
  });
});

module.exports = router;
