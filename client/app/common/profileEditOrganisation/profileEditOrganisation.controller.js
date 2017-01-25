class ProfileEditOrganisationController {
  constructor(Search) {
    'ngInject';

    this.name = 'profileEditOrganisation';

    this.querySearch = (field, query) => Search.autocomplete(field, query);
  }

  $onInit() {
    this.searchText = this.organisation.name;
  }

  updateFields(newInfo) {
    this.organisation._id = newInfo._id;

    if (newInfo.name) {
      this.organisation.name = newInfo.name;
    }
    if (newInfo.jobTitle) {
      this.organisation.jobTitle = newInfo.jobTitle;
    }
    if (newInfo.emails) {
      this.organisation.emails = newInfo.emails;
    }
  }

  modify(value) {
    const stateChange = 'organisations';
    if (!this.organisation._id) {
      const modifyDetails = { type: 'insert', field: 'organisations', value: { name: this.organisation.name, jobTitle: this.organisation.jobTitle, emails: this.organisation.emails } };
      this.modifyOrganisation({ modifyDetails, stateChange });
    } else {
      const modifyDetails = { type: 'update', field: 'organisations', index: this.index, value };
      this.modifyOrganisation({ modifyDetails, stateChange });
    }
  }
}

export default ProfileEditOrganisationController;
