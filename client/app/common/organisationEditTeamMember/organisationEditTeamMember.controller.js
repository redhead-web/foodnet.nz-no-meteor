class OrganisationEditTeamMemberController {
  constructor(Search) {
    'ngInject';

    this.name = 'organisationEditTeamMember';

    this.querySearch = (field, query, organisationId) => Search.autocomplete(field, query, organisationId);
  }

  $onInit() {
    this.searchText = this.teamMember.name;
  }

  updateFields(newInfo) {
    this.teamMember._id = newInfo._id;

    if (newInfo.name) {
      this.teamMember.name = newInfo.name;
    }
    if (newInfo.jobTitle) {
      this.teamMember.jobTitle = newInfo.jobTitle;
    }
    if (newInfo.email) {
      this.teamMember.email = newInfo.email;
    }
    if (newInfo.permission) {
      this.teamMember.permissions = newInfo.permissions;
    }
  }

  modify(value) {
    const stateChange = 'team';
    if (!this.teamMember._id) {
      const modifyDetails = { type: 'insert', field: 'team', value: { name: this.teamMember.name, jobTitle: this.teamMember.jobTitle, permissions: this.teamMember.permissions, email: this.teamMember.email } };
      this.modifyTeamMember({ modifyDetails, stateChange });
    } else {
      const modifyDetails = { type: 'update', field: 'team', index: this.index, value };
      this.modifyTeamMember({ modifyDetails, stateChange });
    }
  }
}

export default OrganisationEditTeamMemberController;
