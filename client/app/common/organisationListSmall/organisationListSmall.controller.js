class OrganisationListSmallController {
  constructor() {
    this.name = 'organisationListSmall';
  }

  delete(index) {
    const modifyDetails = { type: 'remove', field: 'organisations', index };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }

  update(index, value) {
    const modifyDetails = { type: 'update', field: 'organisations', index, value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }

  insert(value) {
    const modifyDetails = { type: 'insert', field: 'organisations', value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
}

export default OrganisationListSmallController;
