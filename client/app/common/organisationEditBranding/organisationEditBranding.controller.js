class OrganisationEditBrandingController {
  constructor() {
    this.name = 'organisationEditBranding';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'tagLine', fieldType: 'value', value: this.organisation.tagLine },
      { type: 'update', field: 'description', fieldType: 'value', value: this.organisation.description },
    ];
    const stateChange = true;
    this.modifyOrganisation({ modifyDetails, stateChange });
  }
}

export default OrganisationEditBrandingController;
