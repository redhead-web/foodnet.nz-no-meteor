class OrganisationEditBasicController {
  constructor() {
    this.name = 'organisationEditBasic';
  }

  modify() {
    const modifyDetails = [
      { type: 'modify', field: 'name', fieldType: 'value', value: this.organisation.name },
      { type: 'modify', field: 'type', fieldType: 'value', value: this.organisation.type },
      { type: 'modify', field: 'registration', fieldType: 'value', value: this.organisation.registration },
      { type: 'modify', field: 'gstReg', fieldType: 'value', value: this.organisation.gstReg },
      { type: 'modify', field: 'gstNum', fieldType: 'value', value: this.organisation.gstNum },
    ];
    this.modifyOrganisation({ modifyDetails });
  }
}

export default OrganisationEditBasicController;
