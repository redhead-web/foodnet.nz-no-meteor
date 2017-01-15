/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

router.get('/:profileId', (req, res) => {
  res.json({
    person: {
      _id: 'someId',
      emails: [{ address: 'sean@maplekiwi.com', verified: false }],
      profile: {
        name: 'Sean Stanley',
        phone: '0210409066',
        address: { vacinity: 'Whangarei, Northland' },
        description: { short: 'I am good at everything' },
        social: { email: 'email@email.com', facebook: 'facebook link', twitter: 'twitter link', instagram: 'instagram link', youtube: 'youtube link' },
      },
    },
    skillsSummary: { seniorSkills: 6, intermediateSkills: 3, juniorSkills: 2, qualifications: 2 },
    skills: [{ _id: 'someId', name: 'leetHaxoring', description: 'spooon!', level: 'Senior' }, { _id: 'someOtherId', name: 'Java', description: 'spooon!', level: 'Intermediate' }],
    qualifications: [
      { _id: 1, name: 'Bachelor of Arts', institute: 'NorthTec' },
      { _id: 2, name: 'Certificate of Awesome', institute: 'My mother' },
    ],
    organisationsSummary: { workingAt: 1, workedAt: 4, owned: 1 },
    organisations: [
      { _id: 'someId', name: 'Super Awesome Company', tags: 'carrots', jobTitle: 'some title' },
      { _id: 'someOtherId', name: 'A Company', tags: 'beans', jobTitle: 'some title' },
      { _id: 'someMoreId', name: 'Another Company', tags: 'HTML', jobTitle: 'some title' },
      { _id: 'someAlternateId', name: 'Yet Another Company', tags: 'Lamb', jobTitle: 'some title' },
    ],
  });
});

module.exports = router;
