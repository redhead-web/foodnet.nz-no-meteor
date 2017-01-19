/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const driver = require('../neo4j');

router.get('/:profileId', (req, res) => {
  const session = driver.session();
  const query = 'MATCH (n:Person { _id: {_id} }) ' +
                'RETURN n AS person';

  session.run(query, { _id: req.params.profileId }).then((result) => {
    const data = result.records;
    res.json(data);
    session.close();
  }, (error) => {
    const data = { error };
    res.json(data);
  });
});

module.exports = router;
