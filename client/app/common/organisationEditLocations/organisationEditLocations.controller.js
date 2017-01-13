class OrganisationEditLocationsController {
  constructor() {
    this.name = 'organisationEditLocations';
  }

  delete(index) {
    const modifyDetails = [{ type: 'remove', field: 'locations', fieldType: 'array', index }];
    const stateChange = false;
    this.modifyOrganisation({ modifyDetails, stateChange });
  }
}

export default OrganisationEditLocationsController;
