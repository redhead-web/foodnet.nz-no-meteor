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

  modify() {
    const stateChange = 'team';
    if (this.isNew) {
      const modifyDetails = { type: 'insert', field: 'team', value: { _id: this.getId(), name: this.teamMember.name, jobTitle: this.teamMember.jobTitle, emails: this.teamMember.emails } };
      this.modifyTeamMember({ modifyDetails, stateChange });
    } else {
      const modifyDetails = { type: 'update', field: 'team', index: this.index, value: { _id: this.teamMember._id, name: this.teamMember.name, jobTitle: this.teamMember.jobTitle, emails: this.teamMember.emails } };
      this.modifyTeamMember({ modifyDetails, stateChange });
    }
  }
}

export default OrganisationEditTeamMemberController;
