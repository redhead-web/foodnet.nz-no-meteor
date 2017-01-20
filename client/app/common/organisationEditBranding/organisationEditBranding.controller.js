
class OrganisationEditBrandingController {
  constructor() {
    this.name = 'organisationEditBranding';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'tagLine', value: this.organisation.tagLine },
      { type: 'update', field: 'description', value: this.organisation.shortDescription },
    ];
    const stateChange = 'organisation';
    this.modifyOrganisation({ modifyDetails, stateChange });
  }

  imageSave(data, field) {
    const fieldPublicId = `${field}publicId`;
    const modifyDetails = [
      { type: 'update', field, value: data.data.secure_url },
      { type: 'update', field: fieldPublicId, value: data.data.public_id },
    ];
    const stateChange = false;
    this.modifyOrganisation({ modifyDetails, stateChange });
  }

  imageDelete(field) {
    const fieldPublicId = `${field}publicId`;
    const modifyDetails = [
      { type: 'remove', field, value: false },
      { type: 'remove', field: fieldPublicId, value: false },
    ];
    const stateChange = false;
    this.modifyOrganisation({ modifyDetails, stateChange });
  }

  imageError(error) {
    console.log(error);
  }
}

export default OrganisationEditBrandingController;
