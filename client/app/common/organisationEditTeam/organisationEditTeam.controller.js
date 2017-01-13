class OrganisationEditTeamController {
  constructor() {
    this.name = 'organisationEditTeam';
  }

  modify(modifyDetails, stateChange) {
    this.modifyTeam({ modifyDetails, stateChange });
  }
}

export default OrganisationEditTeamController;
