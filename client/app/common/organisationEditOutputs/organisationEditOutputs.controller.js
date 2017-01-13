class OrganisationEditOutputsController {
  constructor() {
    this.name = 'organisationEditOutputs';
  }
  modify(modifyDetails, stateChange) {
    this.modifyOutputs({ modifyDetails, stateChange });
  }
}

export default OrganisationEditOutputsController;
