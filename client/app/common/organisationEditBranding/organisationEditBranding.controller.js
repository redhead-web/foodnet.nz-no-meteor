class OrganisationEditBrandingController {
  constructor() {
    this.name = 'organisationEditBranding';
  }

  modify() {
    const modifyDetails = [
      { type: 'modify', field: 'tagLine', fieldType: 'value', value: this.organisation.tagLine },
      { type: 'modify', field: 'description', fieldType: 'value', value: this.organisation.description },
    ];
    this.modifyOrganisation({ modifyDetails });
  }
}

export default OrganisationEditBrandingController;
