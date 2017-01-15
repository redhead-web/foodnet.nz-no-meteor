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
        if (modify.fieldType === 'array') {
          this.organisationData.organisation[modify.field].splice(modify.index, 1);
        } else if (modify.fieldType === 'value') {
          this.organisationData.organisation[modify.field] = '';
        }
      } else if (modify.type === 'update') {
        if (modify.fieldType === 'array') {
          this.organisationData.organisation[modify.field][modifyDetails.index] = modifyDetails.value;
        } else if (modify.fieldType === 'value') {
          this.organisationData.organisation[modify.field] = modify.value;
        }
      } else if (modify.type === 'insert') {
        if (modify.fieldType === 'array') {
          this.organisationData.organisation[modify.field][modifyDetails.index].push(modifyDetails.value);
        } else if (modify.fieldType === 'value') {
          // add value should never be called
        }
      }
    }
    if (stateChange) {
      this.editType = stateChange;
    }
  }

  modifyTeamMember(modifyDetails, stateChange) {
    // modify team member
    if (stateChange) {
      this.editType = stateChange;
    }
  }

  modifyLists(modifyDetails, stateChange) {
    console.log(modifyDetails);
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
        this.data = modifyDetails.data;
        break;
      default:
    }
    if (stateChange) {
      this.editType = stateChange;
    }
  }
}

export default OrganisationEditController;
