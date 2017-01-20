class ProfileEditOrganisationController {
  constructor() {
    this.name = 'profileEditOrganisation';
  }

  $onInit() {
    console.log(this.organisation);
    if (!this.organisation._id) {
      this.isNew = true;
    }
  }

  getId() {
    return Math.random();
  }

  modify(value) {
    const stateChange = 'organisations';
    if (this.isNew) {
      const modifyDetails = { type: 'insert', field: 'organisations', value: { name: this.organisation.name, jobTitle: this.organisation.jobTitle, emails: this.organisation.email } };
      this.modifyOrganisation({ modifyDetails, stateChange });
    } else {
      const modifyDetails = { type: 'update', field: 'organisations', index: this.index, value };
      this.modifyOrganisation({ modifyDetails, stateChange });
    }
  }
}

export default ProfileEditOrganisationController;
