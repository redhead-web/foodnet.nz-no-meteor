class OrganisationEditDescriptionController {
  constructor() {
    this.name = 'organisationEditDescription';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'description', fieldType: 'value', value: this.organisation.description },
    ];
    const stateChange = 'organisation';
    this.modifyOrganisation({ modifyDetails, stateChange });
  }
}

export default OrganisationEditDescriptionController;
