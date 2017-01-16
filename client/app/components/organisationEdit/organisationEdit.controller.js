class OrganisationEditController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'organisationEdit';

    // set up variables for organisationEdit page
    this.editType = 'organisation';
    this.data = false;
    this.organisationActive = $stateParams.organisationId;
    this.paths = {
      organisation: {
        root: true,
        title: 'Organisation Settings!',
      },
      basic: {
        title: 'Basic Settings',
      },
      branding: {
        title: 'Organisation Brand',
      },
      locations: {
        title: 'Places of Business',
      },
      locationsForm: {
        title: 'Location Settings',
        parent: 'locations',
      },
      description: {
        title: 'Organisation Summary',
      },
      team: {
        title: 'The Team',
      },
      teamMember: {
        title: 'Team Member Settings',
        parent: 'team',
      },
      inputs: {
        title: 'Organisation Inputs',
      },
      outputs: {
        title: 'Organisation Outputs',
      },
      links: {
        title: 'Social Media Links',
      },
    };
  }

  resolveBackArrow() {
    const path = this.paths[this.editType];
    if (path.parent) {
      this.editType = path.parent;
    } else {
      this.editType = 'organisation';
    }
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

  modifyTeamMember(modifyDetails, stateChange) {
    // modify team member
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
}

export default OrganisationEditController;
