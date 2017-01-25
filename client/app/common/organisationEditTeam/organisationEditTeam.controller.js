class OrganisationEditTeamController {
  constructor() {
    this.name = 'organisationEditTeam';
  }

  modify(modifyDetails, stateChange) {
    this.modifyTeam({ modifyDetails, stateChange });
  }

  add() {
    const modifyDetails = { type: 'none', passData: { teamMember: { name: '' }, index: false } };
    const stateChange = 'teamMember';
    this.modifyTeam({ modifyDetails, stateChange });
  }
}

export default OrganisationEditTeamController;
