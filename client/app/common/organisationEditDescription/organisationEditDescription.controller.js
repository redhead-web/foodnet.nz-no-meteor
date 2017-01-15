class OrganisationEditDescriptionController {
  constructor() {
    this.name = 'organisationEditDescription';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'description', value: this.organisation.description },
    ];
    const stateChange = 'organisation';
    this.modifyOrganisation({ modifyDetails, stateChange });
  }
}

export default OrganisationEditDescriptionController;
