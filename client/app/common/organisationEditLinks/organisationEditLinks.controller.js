class OrganisationEditLinksController {
  constructor() {
    this.name = 'organisationEditLinks';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'emails', value: this.organisation.emails },
      { type: 'update', field: 'social', value: this.organisation.social },
    ];
    const stateChange = 'organisation';
    this.modifyOrganisation({ modifyDetails, stateChange });
  }
}

export default OrganisationEditLinksController;
