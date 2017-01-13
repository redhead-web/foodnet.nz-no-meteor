class OrganisationEditInputsController {
  constructor() {
    this.name = 'organisationEditInputs';
  }
  modify(modifyDetails, stateChange) {
    this.modifyInputs({ modifyDetails, stateChange });
  }
}

export default OrganisationEditInputsController;
