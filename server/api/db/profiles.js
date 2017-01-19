const faker = require('faker');

module.exports = [
  {
    person: {
      _id: faker.random.uuid(),
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      description: faker.company.bs(),
      email: faker.internet.email(),
      facebook: faker.internet.url(),
      twitter: faker.internet.url(),
      instagram: faker.internet.url(),
      youtube: faker.internet.url(),
    },
    skillsSummary: { seniorSkills: 6, intermediateSkills: 3, juniorSkills: 2, qualifications: 2 },
    organisationsSummary: { workingAt: 1, workedAt: 4, owned: 1 },
    skills: [
      { _id: '145-541', name: 'Doom!', description: 'Bring doom to all', level: 'Senior' },
      { _id: '145-542', name: 'Awesomeness', description: 'bring awesomeness to all', level: 'Intermediate' }],
    qualifications: [
      { _id: '145-541', name: 'Bachelor of Arts', institute: 'NorthTech' },
      { _id: '145-542', name: 'Certificate of Awesome', institute: 'Waikato University' },
    ],
    organisations: [
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    ],
  },
  {
    person: {
      _id: faker.random.uuid(),
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      description: faker.company.bs(),
      email: faker.internet.email(),
      facebook: faker.internet.url(),
      twitter: faker.internet.url(),
      instagram: faker.internet.url(),
      youtube: faker.internet.url(),
    },
    skillsSummary: { seniorSkills: 6, intermediateSkills: 3, juniorSkills: 2, qualifications: 2 },
    organisationsSummary: { workingAt: 1, workedAt: 4, owned: 1 },
    skills: [
      { _id: '145-543', name: 'Leet Haxoring', description: 'Hax', level: 'Senior' },
      { _id: '145-542', name: 'Awesomeness', description: 'bring awesomeness to all', level: 'Intermediate' }],
    qualifications: [
      { _id: '145-541', name: 'Bachelor of Arts', institute: 'NorthTech' },
      { _id: '145-543', name: 'Certificate of Doom', institute: 'Your Mum' },
    ],
    organisations: [
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    ],
  },
  {
    person: {
      _id: faker.random.uuid(),
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      description: faker.company.bs(),
      email: faker.internet.email(),
      facebook: faker.internet.url(),
      twitter: faker.internet.url(),
      instagram: faker.internet.url(),
      youtube: faker.internet.url(),
    },
    skillsSummary: { seniorSkills: 6, intermediateSkills: 3, juniorSkills: 2, qualifications: 2 },
    organisationsSummary: { workingAt: 1, workedAt: 4, owned: 1 },
    skills: [
      { _id: '145-541', name: 'Doom!', description: 'Bring doom to all', level: 'Senior' },
      { _id: '145-544', name: 'Prettyness', description: 'Bling', level: 'Intermediate' }],
    qualifications: [
      { _id: '145-543', name: 'Certificate of Doom', institute: 'Your Mum' },
      { _id: '145-544', name: 'Certificate of Superness', institute: 'Waikato University' },
    ],
    organisations: [
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    ],
  },
  {
    person: {
      _id: faker.random.uuid(),
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      address: faker.address.streetAddress(),
      description: faker.company.bs(),
      email: faker.internet.email(),
      facebook: faker.internet.url(),
      twitter: faker.internet.url(),
      instagram: faker.internet.url(),
      youtube: faker.internet.url(),
    },
    skillsSummary: { seniorSkills: 6, intermediateSkills: 3, juniorSkills: 2, qualifications: 2 },
    organisationsSummary: { workingAt: 1, workedAt: 4, owned: 1 },
    skills: [
      { _id: '145-541', name: 'Prettyness', description: 'Bling', level: 'Intermediate' },
      { _id: '145-542', name: 'Awesomeness', description: 'bring awesomeness to all', level: 'Intermediate' }],
    qualifications: [
      { _id: '145-541', name: 'Certificate of Superness', institute: 'Waikato University' },
      { _id: '145-542', name: 'Certificate of Awesome', institute: 'Waikato University' },
    ],
    organisations: [
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
      { _id: faker.random.uuid(), name: faker.company.companyName(), tags: faker.random.word(), jobTitle: faker.name.jobTitle() },
    ],
  },
];
