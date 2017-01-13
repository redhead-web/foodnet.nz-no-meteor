class OrganisationEditLinksController {
  constructor() {
    this.name = 'organisationEditLinks';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'emails', fieldType: 'value', value: this.organisation.emails },
      { type: 'update', field: 'social', fieldType: 'value', value: this.organisation.social },
    ];
    const stateChange = true;
    this.modifyOrganisation({ modifyDetails, stateChange });
  }
}

export default OrganisationEditLinksController;
