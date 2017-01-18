/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const organisationsFixture = require('../db/organisations');

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

router.get('/auth', (req, res) => {
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
  res.json(organisationsFixture[0]);
});

module.exports = router;
