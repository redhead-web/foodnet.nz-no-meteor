class OrganisationEditDescriptionController {
  constructor() {
    this.name = 'organisationEditDescription';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'description', fieldType: 'value', value: this.organisation.description },
    ];
    const stateChange = true;
    this.modifyOrganisation({ modifyDetails, stateChange });
  }
}

export default OrganisationEditDescriptionController;
