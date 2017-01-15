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
    const modifyDetails = { type: 'none', data: { location, index } };
    const stateChange = 'locationsForm';
    this.modifyLocations({ modifyDetails, stateChange });
  }
}

export default OrganisationEditLocationsController;
