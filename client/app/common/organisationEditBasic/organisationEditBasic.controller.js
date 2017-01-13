class OrganisationEditBasicController {
  constructor() {
    this.name = 'organisationEditBasic';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'name', fieldType: 'value', value: this.organisation.name },
      { type: 'update', field: 'type', fieldType: 'value', value: this.organisation.type },
      { type: 'update', field: 'registration', fieldType: 'value', value: this.organisation.registration },
      { type: 'update', field: 'gstReg', fieldType: 'value', value: this.organisation.gstReg },
      { type: 'update', field: 'gstNum', fieldType: 'value', value: this.organisation.gstNum },
    ];
    const stateChange = true;
    this.modifyOrganisation({ modifyDetails, stateChange });
  }
}

export default OrganisationEditBasicController;
