class OrganisationEditLocationsController {
  constructor() {
    this.name = 'organisationEditLocations';
  }

  deleteLocation(index) {
    const modifyDetails = [{ type: 'delete', field: 'locations', index }];
    this.modifyOrganistion({ modifyDetails });
  }
}

export default OrganisationEditLocationsController;
