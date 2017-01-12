/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
// const filter = require('lodash').filter;

const testOrganisations = [
  {
    organisation: {
      _id: 'someId',
      name: 'Whangarei Food Co-op',
      tags: 'carrots',
      banner: 'http://lorempixel.com/400/200/business',
    },
    inputsCount: 5,
    outputs: 400,
  },
  {
    organisation: {
      _id: 'someId2',
      name: 'Whangarei Growers Market',
      tags: 'celery',
      banner: 'http://lorempixel.com/400/200/nature',
    },
    inputsCount: 10,
    outputs: 1000,
  },
];

router.get('/', (req, res) => {
  // const results = filter(testOrganisations, req.query.q);
  res.json(testOrganisations);
});

module.exports = router;