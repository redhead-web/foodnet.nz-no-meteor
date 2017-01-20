/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const driver = require('../neo4j');
const utils = require('../db/utils');

router.get('/common', (req, res) => {
  res.json(['Carrots', 'Organic Fertilizer', 'Lamb Mince', 'Tomatoes', 'Websites', 'Packaging', 'HTML', 'Lettuce', 'Organic Sweeteners']);
});

router.get('/', (req, res) => {
  const session = driver.session();
  const query = 'MATCH (n:Organisation) ' +
                'WHERE lower(n.name) CONTAINS lower({ q }) ' +
                'RETURN n.name AS name, n._id AS _id, n.tagLine AS tagLine, n.avatar AS avatar, n.banner AS banner LIMIT 10 ';

  session.run(query, { q: req.query.q }).then((result) => {
    const data = { organisations: utils.toCollection(result.records) };
    res.json(data);
    session.close();
  }, (error) => {
    const data = { error };
    res.json(data);
  });
});

module.exports = router;
