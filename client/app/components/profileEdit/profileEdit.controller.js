class ProfileEditController {
  constructor() {
    this.name = 'profileEdit';
    this.editType = 'profile';

    // ----- TODO: these need to be passed in through root scope -----
    this.userActive = true;
    this.user = { _id: 'someId', emails: [{ primaryContact: 'true', address: 'admin@admin.co.nz' }], profile: { name: 'some person', phone: '09 434 660', address: 'some address', social: { email: 'email@email.com', facebook: 'facebook link', twitter: 'twitter link', instagram: 'instagram link', youtube: 'youtube link' } } };
    this.pageOwned = true;
    this.userSkills = [{ _id: 'someId', name: 'leetHaxoring', description: 'spooon!', level: 'Senior' }, { _id: 'someOtherId', name: 'Java', description: 'spooon!', level: 'Intermediate' }];
    this.userOrganisations = [{ _id: 'someId', name: 'Super Awesome Company', tags: 'carrots', tagLine: 'Local - Fresh - Affordable' }, { _id: 'someOtherId', name: 'A Company', tags: 'beans', tagLine: 'Local - Fresh - Affordable' }, { _id: 'someMoreId', name: 'Another Company', tags: 'HTML' }, { _id: 'someAlternateId', name: 'Yet Another Company', tags: 'Lamb', tagLine: 'Local - Fresh - Affordable' }];
  }
}

export default ProfileEditController;
