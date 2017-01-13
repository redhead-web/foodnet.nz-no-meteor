class OrganisationEditLocationsController {
  constructor() {
    this.name = 'organisationEditLocations';
  }

  delete(index) {
    const modifyDetails = [{ type: 'delete', field: 'locations', fieldType: 'array', index }];
    this.modifyOrganisation({ modifyDetails });
  }
}

export default OrganisationEditLocationsController;
