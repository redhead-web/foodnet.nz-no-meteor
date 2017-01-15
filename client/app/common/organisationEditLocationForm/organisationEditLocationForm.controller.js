class OrganisationEditLocationFormController {
  constructor() {
    this.name = 'organisationEditLocationForm';
  }

  $onInit() {
    if (!this.location) {
      this.isNew = true;
    }
  }

  save(location, index) {
    const stateChange = 'locationsForm';
    if (this.isNew) {
      const modifyDetails = { type: 'update', field: 'locations', index, value: location };
      this.modifyList({ modifyDetails, stateChange });
    } else {
      const modifyDetails = { type: 'update', field: 'locations', index, value: location };
      this.modifyList({ modifyDetails, stateChange });
    }
  }
}

export default OrganisationEditLocationFormController;
