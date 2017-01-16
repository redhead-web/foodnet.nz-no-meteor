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
  saveCompanyAvatar(data) {
    console.log(data); // http response from cloudinary
  }
}

export default OrganisationEditBrandingController;
