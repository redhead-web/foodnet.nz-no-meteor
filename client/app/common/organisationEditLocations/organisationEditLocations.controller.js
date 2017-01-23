class OrganisationEditLocationsController {
  constructor() {
    this.name = 'organisationEditLocations';
  }

  delete(location, index) {
    const modifyDetails = { type: 'remove', field: 'locations', index, value: location };
    const stateChange = false;
    this.modifyLocations({ modifyDetails, stateChange });
  }

  edit(location, index) {
    const modifyDetails = { type: 'none', passData: { location, index } };
    const stateChange = 'locationsForm';
    this.modifyLocations({ modifyDetails, stateChange });
  }

  add() {
    const modifyDetails = { type: 'none', passData: { location: {} } };
    const stateChange = 'locationsForm';
    this.modifyLocations({ modifyDetails, stateChange });
  }
}

export default OrganisationEditLocationsController;
