class OrganisationEditController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'organisationEdit';

    // set up variables for organisationEdit page
    this.editType = 'organisation';
    this.organisationActive = $stateParams.organisationId;
  }

  modifyOrganisation(modifyDetails) {
    for (let index = 0; index < modifyDetails.length; index += 1) {
      const modify = modifyDetails[index];
      if (modify.type === 'delete') {
        if (modify.fieldType === 'array') {
          this.organisationData.organisation[modify.field].splice(modify.index, 1);
        } else if (modify.fieldType === 'value') {
          this.organisationData.organisation[modify.field] = '';
        }
      } else if (modify.type === 'modify') {
        if (modify.fieldType === 'array') {
          // modify array
        } else if (modify.fieldType === 'value') {
          this.organisationData.organisation[modify.field] = modify.value;
        }
      } else if (modify.type === 'add') {
        if (modify.fieldType === 'array') {
          // add to array
        } else if (modify.fieldType === 'value') {
          // create value
        }
      }
    }
  }
}

export default OrganisationEditController;
