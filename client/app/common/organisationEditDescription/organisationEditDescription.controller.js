class OrganisationEditDescriptionController {
  constructor() {
    this.name = 'organisationEditDescription';
  }

  modify() {
    const modifyDetails = [
      { type: 'modify', field: 'description', fieldType: 'value', value: this.organisation.description },
    ];
    this.modifyOrganisation({ modifyDetails });
  }
}

export default OrganisationEditDescriptionController;
