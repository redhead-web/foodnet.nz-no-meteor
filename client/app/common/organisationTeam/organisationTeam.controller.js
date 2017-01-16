class OrganisationTeamController {
  constructor($state) {
    'ngInject';

    this.name = 'organisationTeam';

    this.go = $state.go;
  }

  teamMemberClick(teamMember, teamMemberId, index) {
    if (this.pageOwned) {
      const modifyDetails = { type: 'none', passData: { teamMember, index } };
      const stateChange = 'teamMember';
      this.onModify({ modifyDetails, stateChange });
    } else {
      this.go('profile', { userId: teamMemberId });
    }
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
