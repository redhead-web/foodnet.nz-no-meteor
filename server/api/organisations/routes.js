/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

router.get('/:organisationId', (req, res) => {
  res.json({
    organisation: {
      _id: 'someId',
      name: 'Whangarei Food Co-op',
      tags: 'carrots',
      tagLine: 'Local - Fresh - Affordable',
      description: { short: 'spoon hammer fork', long: 'spoon hammer fork mustard cheese' },
      locations: [{ address: '1 woods road', headOffice: true }, { address: 'some place else' }],
      openingHours: 'Tuesdays 3-6pm',
      type: 'Co-operitive Company',
      registration: 'Company Registration Number',
      gstReg: false,
      gstNum: 'GST Number',
      website: 'https://foodcoop.nz',
    },
    inputs: [{ _id: 'someId', name: 'carots' }, { _id: 'someOtherId', name: 'beatroot' }],
    outputs: [{ _id: 'someId', name: 'carots' }, { _id: 'someOtherId', name: 'beatroot' }],
    team: [{ _id: 'someId', name: 'Sean Stanley', roles: ['Administrator'] }, { _id: 'someId', name: 'Matt Stanley', roles: ['Director'] }, { _id: 'someId', name: 'Clive McKeg', roles: ['Director'] }],
  });
});

module.exports = router;
