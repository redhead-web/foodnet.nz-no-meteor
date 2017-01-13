class OrganisationEditOutputsController {
  constructor() {
    this.name = 'organisationEditOutputs';
  }
  modify(modifyDetails) {
    this.modifyOutputs({ modifyDetails });
  }
}

export default OrganisationEditOutputsController;
