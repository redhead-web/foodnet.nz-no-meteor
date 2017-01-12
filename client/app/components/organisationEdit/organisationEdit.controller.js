class OrganisationEditController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'organisationEdit';

    // set up variables for organisationEdit page
    this.editType = 'organisation';
    this.organisationActive = $stateParams.organisationId;
  }
}

export default OrganisationEditController;
