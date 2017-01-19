class OrganisationEditTeamMemberController {
  constructor() {
    this.name = 'organisationEditTeamMember';
  }

  $onInit() {
    if (!this.teamMember._id) {
      this.isNew = true;
    }
  }

  getId() {
    return Math.random();
  }

  modify(value) {
    const stateChange = 'team';
    if (this.isNew) {
      const modifyDetails = { type: 'insert', field: 'team', value: { _id: this.getId(), name: this.teamMember.name, jobTitle: this.teamMember.jobTitle, email: this.teamMember.email } };
      this.modifyTeamMember({ modifyDetails, stateChange });
    } else {
      const modifyDetails = { type: 'update', field: 'team', index: this.index, value };
      this.modifyTeamMember({ modifyDetails, stateChange });
    }
  }
}

export default OrganisationEditTeamMemberController;
