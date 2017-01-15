class OrganisationEditLocationFormController {
  constructor() {
    this.name = 'organisationEditLocationForm';
    this.daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }

  $onInit() {
    if (!this.location.index) {
      this.isNew = true;
    }
  }

  save(location, index) {
    const stateChange = 'locations';
    if (this.isNew) {
      const modifyDetails = { type: 'insert', field: 'locations', value: location };
      this.modifyLocation({ modifyDetails, stateChange });
    } else {
      const modifyDetails = { type: 'update', field: 'locations', index, value: location };
      this.modifyLocation({ modifyDetails, stateChange });
    }
  }
}

export default OrganisationEditLocationFormController;
