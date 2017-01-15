class OrganisationEditBasicController {
  constructor() {
    this.name = 'organisationEditBasic';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'name', value: this.organisation.name },
      { type: 'update', field: 'type', value: this.organisation.type },
      { type: 'update', field: 'registration', value: this.organisation.registration },
      { type: 'update', field: 'gstReg', value: this.organisation.gstReg },
      { type: 'update', field: 'gstNum', value: this.organisation.gstNum },
    ];
    const stateChange = 'organisation';
    this.modifyOrganisation({ modifyDetails, stateChange });
  }
}

export default OrganisationEditBasicController;
