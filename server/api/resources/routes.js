/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

router.get('/inputs/:organisationId/', (req, res) => {
  res.json([
    { _id: 'someId', name: 'carots', provider: 'Northland Naturals' },
    { _id: 'someOtherId', name: 'beatroot', provider: 'Northland Naturals' },
  ]);
});

router.get('/outputs/:organisationId/', (req, res) => {
  res.json([
    { _id: 'someId', name: 'carots', count: 12 },
    { _id: 'someOtherId', name: 'beatroot', count: 4 },
  ]);
});

module.exports = router;
