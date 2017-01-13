class OrganisationEditLinksController {
  constructor() {
    this.name = 'organisationEditLinks';
  }

  modify() {
    const modifyDetails = [
      { type: 'modify', field: 'emails', fieldType: 'value', value: this.organisation.emails },
      { type: 'modify', field: 'social', fieldType: 'value', value: this.organisation.social },
    ];
    this.modifyOrganisation({ modifyDetails });
  }
}

export default OrganisationEditLinksController;
