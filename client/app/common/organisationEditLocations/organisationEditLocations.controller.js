class OrganisationEditLocationsController {
  constructor() {
    this.name = 'organisationEditLocations';
  }

  delete(index) {
    const modifyDetails = { type: 'remove', field: 'locations', index };
    const stateChange = false;
    this.modifyLocations({ modifyDetails, stateChange });
  }

  edit(location, index) {
    const modifyDetails = { type: 'none', passData: { location, index } };
    const stateChange = 'locations form';
    this.modifyLocations({ modifyDetails, stateChange });
  }
  add() {
    const modifyDetails = { type: 'none', passData: { location: {} } };
    const stateChange = 'locations form';
    this.modifyLocations({ modifyDetails, stateChange });
  }
}

export default OrganisationEditLocationsController;
