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
    organisationsSummary: { workingAt: 1, workedAt: 4, owned: 1 },
    organisations: [{ _id: 'someId', name: 'Super Awesome Company', tags: 'carrots' }, { _id: 'someOtherId', name: 'A Company', tags: 'beans' }, { _id: 'someMoreId', name: 'Another Company', tags: 'HTML' }, { _id: 'someAlternateId', name: 'Yet Another Company', tags: 'Lamb' }],
  });
});

module.exports = router;
