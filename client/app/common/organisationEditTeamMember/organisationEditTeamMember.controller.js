class OrganisationEditTeamMemberController {
  constructor() {
    this.name = 'organisationEditTeamMember';
  }

  modify() {
    const modifyDetails = {

    };
    const stateChange = 'team';
    this.modifyTeamMember({ modifyDetails, stateChange });
  }
}

export default OrganisationEditTeamMemberController;
