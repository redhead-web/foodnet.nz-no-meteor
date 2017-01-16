class OrganisationEditTeamController {
  constructor() {
    this.name = 'organisationEditTeam';
  }

  modify(modifyDetails, stateChange) {
    this.modifyTeam({ modifyDetails, stateChange });
  }

  add() {
    const modifyDetails = { type: 'none', passData: { teamMember: {}, index: false } };
    const stateChange = 'team member';
    this.modifyTeam({ modifyDetails, stateChange });
  }
}

export default OrganisationEditTeamController;
