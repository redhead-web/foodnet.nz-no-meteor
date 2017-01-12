class OrganisationController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'organisation';

    // set up variables for profile page
    this.organisationActive = $stateParams.organisationId;
  }
}

export default OrganisationController;
