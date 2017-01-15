/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

router.get('/newest', (req, res) => {
  res.json({ organisations: [
    { _id: 'someId', name: 'Super Awesome Company', tags: ['carrots'] },
    { _id: 'someOtherId', name: 'A Company', tags: ['beans'] },
    { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
    { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  ] });
});

router.get('/popular', (req, res) => {
  res.json({ organisations: [
    { _id: 'someId', name: 'Super Awesome Company', tags: ['carrots'] },
    { _id: 'someOtherI', name: 'A Company', tags: ['beans'] },
    { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
    { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  ] });
});

router.get('/bookmarks', (req, res) => {
  res.json({ organisations: [
    { _id: 'someId', name: 'Super Awesome Company', tags: ['carrots'] },
    { _id: 'someOtherId', name: 'A Company', tags: ['beans'] },
    { _id: 'someMoreId', name: 'Another Company', tags: ['HTML'] },
    { _id: 'someAlternateId', name: 'Yet Another Company', tags: ['Lamb'] },
  ] });
});

router.get('/one/:organisationId', (req, res) => {
  res.json({
    organisation: {
      _id: 'someId',
      name: 'Whangarei Food Co-op',
      emails: [{ address: 'email@email.com', primaryContact: 'true' }],
      banner: 'http://lorempixel.com/400/200/nature',
      tags: 'carrots',
      tagLine: 'Local - Fresh - Affordable',
      description: { short: 'spoon hammer fork', long: 'spoon hammer fork mustard cheese' },
      openingHours: 'Tuesdays 3-6pm',
      type: 'Co-operitive Company',
      registration: 'Company Registration Number',
      gstReg: false,
      gstNum: 'GST Number',
      website: 'https://foodcoop.nz',
      social: { facebook: 'facebook link', twitter: 'twitter link', instagram: 'instagram link', youtube: 'youtube link' },
    },
    locations: [{ address: '1 woods road', headOffice: true }, { address: 'some place else' }],
    inputs: [{ _id: 'someId', name: 'carots', provider: 'Northland Naturals' }, { _id: 'someOtherId', name: 'beatroot', provider: 'Northland Naturals' }],
    outputs: [{ _id: 'someId', name: 'carots' }, { _id: 'someOtherId', name: 'beatroot' }],
    team: [{ _id: 'someId', name: 'Sean Stanley', roles: ['Administrator'] }, { _id: 'someId', name: 'Matt Stanley', roles: ['Director'] }, { _id: 'someId', name: 'Clive McKeg', roles: ['Director'] }],
  });
});

module.exports = router;
