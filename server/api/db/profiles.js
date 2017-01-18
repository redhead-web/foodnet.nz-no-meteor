const faker = require('faker');

module.exports = [
  {
    person: {
      _id: faker.random.number(),
      emails: [{ address: faker.internet.email(), verified: false }],
      profile: {
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        address: { vacinity: faker.address.streetAddress() },
        description: { short: faker.company.bs() },
        social: { email: faker.internet.email(), facebook: faker.internet.url(), twitter: faker.internet.url(), instagram: faker.internet.url(), youtube: faker.internet.url() },
      },
    },
    skillsSummary: { seniorSkills: 6, intermediateSkills: 3, juniorSkills: 2, qualifications: 2 },
    skills: [{ _id: faker.random.number(), name: faker.random.word(), description: faker.name.jobDescriptor(), level: 'Senior' }, { _id: faker.random.number(), name: faker.random.word(), description: faker.name.jobDescriptor(), level: 'Intermediate' }],
    qualifications: [
    { _id: faker.random.number(), name: 'Bachelor of Arts', institute: faker.company.companyName() },
    { _id: faker.random.number(), name: 'Certificate of Awesome', institute: faker.company.companyName() },
    ],
    organisationsSummary: { workingAt: 1, workedAt: 4, owned: 1 },
    organisations: [
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    ],
  },
  {
    person: {
      _id: faker.random.number(),
      emails: [{ address: faker.internet.email(), verified: false }],
      profile: {
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        address: { vacinity: faker.address.streetAddress() },
        description: { short: faker.company.bs() },
        social: { email: faker.internet.email(), facebook: faker.internet.url(), twitter: faker.internet.url(), instagram: faker.internet.url(), youtube: faker.internet.url() },
      },
    },
    skillsSummary: { seniorSkills: 6, intermediateSkills: 3, juniorSkills: 2, qualifications: 2 },
    skills: [{ _id: faker.random.number(), name: faker.random.word(), description: faker.name.jobDescriptor(), level: 'Senior' }, { _id: faker.random.number(), name: faker.random.word(), description: faker.name.jobDescriptor(), level: 'Intermediate' }],
    qualifications: [
    { _id: faker.random.number(), name: 'Bachelor of Arts', institute: faker.company.companyName() },
    { _id: faker.random.number(), name: 'Certificate of Awesome', institute: faker.company.companyName() },
    ],
    organisationsSummary: { workingAt: 1, workedAt: 4, owned: 1 },
    organisations: [
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    ],
  },
  {
    person: {
      _id: faker.random.number(),
      emails: [{ address: faker.internet.email(), verified: false }],
      profile: {
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        address: { vacinity: faker.address.streetAddress() },
        description: { short: faker.company.bs() },
        social: { email: faker.internet.email(), facebook: faker.internet.url(), twitter: faker.internet.url(), instagram: faker.internet.url(), youtube: faker.internet.url() },
      },
    },
    skillsSummary: { seniorSkills: 6, intermediateSkills: 3, juniorSkills: 2, qualifications: 2 },
    skills: [{ _id: faker.random.number(), name: faker.random.word(), description: faker.name.jobDescriptor(), level: 'Senior' }, { _id: faker.random.number(), name: faker.random.word(), description: faker.name.jobDescriptor(), level: 'Intermediate' }],
    qualifications: [
    { _id: faker.random.number(), name: 'Bachelor of Arts', institute: faker.company.companyName() },
    { _id: faker.random.number(), name: 'Certificate of Awesome', institute: faker.company.companyName() },
    ],
    organisationsSummary: { workingAt: 1, workedAt: 4, owned: 1 },
    organisations: [
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    ],
  },
  {
    person: {
      _id: faker.random.number(),
      emails: [{ address: faker.internet.email(), verified: false }],
      profile: {
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        address: { vacinity: faker.address.streetAddress() },
        description: { short: faker.company.bs() },
        social: { email: faker.internet.email(), facebook: faker.internet.url(), twitter: faker.internet.url(), instagram: faker.internet.url(), youtube: faker.internet.url() },
      },
    },
    skillsSummary: { seniorSkills: 6, intermediateSkills: 3, juniorSkills: 2, qualifications: 2 },
    skills: [{ _id: faker.random.number(), name: faker.random.word(), description: faker.name.jobDescriptor(), level: 'Senior' }, { _id: faker.random.number(), name: faker.random.word(), description: faker.name.jobDescriptor(), level: 'Intermediate' }],
    qualifications: [
    { _id: faker.random.number(), name: 'Bachelor of Arts', institute: faker.company.companyName() },
    { _id: faker.random.number(), name: 'Certificate of Awesome', institute: faker.company.companyName() },
    ],
    organisationsSummary: { workingAt: 1, workedAt: 4, owned: 1 },
    organisations: [
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    { _id: faker.random.number(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    ],
  },
];
