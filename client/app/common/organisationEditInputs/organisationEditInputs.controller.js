class OrganisationEditInputsController {
  constructor($mdDialog) {
    'ngInject';

    this.dialog = $mdDialog;
    this.name = 'organisationEditInputs';
  }
  modify(modifyDetails, stateChange) {
    this.modifyInputs({ modifyDetails, stateChange });
  }
}

export default OrganisationEditInputsController;
