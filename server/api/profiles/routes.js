/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const profileFixture = require('../db/profiles');

router.get('/:profileId', (req, res) => {
  res.json(res.json(profileFixture[0]));
});

module.exports = router;
