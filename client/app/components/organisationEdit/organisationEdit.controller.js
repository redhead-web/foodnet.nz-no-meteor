class OrganisationEditController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'organisationEdit';

    // set up variables for organisationEdit page
    this.editType = 'organisation';
    this.data = false;
    this.organisationActive = $stateParams.organisationId;
  }

  modifyOrganisation(modifyDetails, stateChange) {
    for (let index = 0; index < modifyDetails.length; index += 1) {
      if (modify.data) { this.passData = modify.passData; } else { this.data = false; }
      const modify = modifyDetails[index];
      if (modify.type === 'remove') {
        this.organisationData.organisation[modify.field] = '';
      } else if (modify.type === 'update') {
        this.organisationData.organisation[modify.field] = modify.value;
      }
    }
    if (stateChange) {
      this.editType = stateChange;
    }
  }

  modifyLists(modifyDetails, stateChange) {
    if (modifyDetails.passData) { this.data = modifyDetails.passData; } else { this.data = false; }
    switch (modifyDetails.type) {
      case 'insert':
        this.organisationData[modifyDetails.field].push(modifyDetails.value);
        break;
      case 'update':
        this.organisationData[modifyDetails.field][modifyDetails.index] = modifyDetails.value;
        break;
      case 'remove':
        this.organisationData[modifyDetails.field].splice(modifyDetails.index, 1);
        break;
      case 'none':
        break;
      default:
    }
    if (stateChange) {
      this.editType = stateChange;
    }
  }

  back() {
    if (this.editType === 'team member') {
      this.editType = 'team';
    } else if (this.editType === 'locations form') {
      this.editType = 'locations';
    } else {
      this.editType = 'organisation';
    }
  }
}

export default OrganisationEditController;
