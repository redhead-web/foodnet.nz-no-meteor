class OrganisationTeamController {
  constructor() {
    this.name = 'organisationTeam';
  }

  delete(index) {
    const modifyDetails = { type: 'remove', field: 'team', index };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
  update(index, value) {
    const modifyDetails = { type: 'update', field: 'team', index, value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
  insert(value) {
    const modifyDetails = { type: 'insert', field: 'team', value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
}

export default OrganisationTeamController;
