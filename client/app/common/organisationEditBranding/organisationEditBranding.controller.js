class OrganisationEditBrandingController {
  constructor() {
    this.name = 'organisationEditBranding';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'tagLine', value: this.organisation.tagLine },
      { type: 'update', field: 'description', value: this.organisation.description },
    ];
    const stateChange = 'organisation';
    this.modifyOrganisation({ modifyDetails, stateChange });
  }
}

export default OrganisationEditBrandingController;
