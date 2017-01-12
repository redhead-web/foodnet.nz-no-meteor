class OrganisationEditController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'organisationEdit';

    // set up variables for organisationEdit page
    this.editType = 'organisation';
    this.organisationActive = $stateParams.organisationId;
  }

  modifyOrganistion(modifyDetails) {
    for (let index = 0; index < modifyDetails.length; index += 1) {
      const modify = modifyDetails[index];
      if (modify.type === 'delete') {
        if (modify.field === 'locations') {
          this.organisationData.organisation[modify.field].splice(modify.index, 1);
        }
      }
    }
  }
}

export default OrganisationEditController;
