/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

router.get('/skills/:personId/', (req, res) => {
  res.json(
    {
      skills: [{ _id: 'someId', name: 'leetHaxoring', level: 'Senior' }, { _id: 'someOtherId', name: 'Java', level: 'Intermediate' }],
      qualifications: [{ _id: 'someId', name: 'Certificate of Awesome', institute: 'NorthTec' }, { _id: 'someOtherId', name: 'Bachelor of Asskicking', institute: 'West Auckland' }],
    }
  );
});

module.exports = router;
