class ProfileController {
  constructor() {
    this.name = 'profile';

    // set up variables for profile page
    this.searchFilter = '';
    this.searchActive = false;

    // ----- TODO: these need to be passed in through root scope -----
    this.userActive = true;
    this.user = { _id: 'someId', emails: [{ address: 'admin@admin.co.nz' }], profile: { name: 'Some Name', phone: '021 111 1111', email: 'some@email.co.nz', address: { vacinity: 'Whangarei, Northland' }, description: { short: 'I am good at everything' } } };
    this.userSkillsSummary = { seniorSkills: 6, intermediateSkills: 3, juniorSkills: 2, qualifications: 2 };
    this.userSkills = [{ _id: 'someId', name: 'leetHaxoring', description: 'spooon!', level: 'Senior' }, { _id: 'someOtherId', name: 'Java', description: 'spooon!', level: 'Intermediate' }];
    this.userOrganisationsSummary = { workingAt: 1, workedAt: 4, owned: 1 };
    this.userOrganisations = [{ _id: 'someId', name: 'Super Awesome Company', tags: 'carrots' }, { _id: 'someOtherId', name: 'A Company', tags: 'beans' }, { _id: 'someMoreId', name: 'Another Company', tags: 'HTML' }, { _id: 'someAlternateId', name: 'Yet Another Company', tags: 'Lamb' }];
  }
}

export default ProfileController;
