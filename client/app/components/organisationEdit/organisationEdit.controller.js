class OrganisationEditController {
  constructor($stateParams, $http) {
    'ngInject';

    this.name = 'organisationEdit';

    // set up variables for organisationEdit page
    this.editType = 'organisation';
    this.data = false;
    this.http = $http;
    this.organisationActive = $stateParams.organisationId;
    this.paths = {
      organisation: {
        root: true,
        title: 'Organisation Settings',
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
      const modify = modifyDetails[index];
      if (modify.data) { this.passData = modify.passData; } else { this.data = false; }
      this.organisationData.organisation[modify.field] = modify.value;
      const databaseObject = { _id: this.organisationActive, update: { [modify.field]: modify.value }, type: 'property' };
      this.http.post('/api/organisations/update', databaseObject).then(() => {
        console.log('update success');
      }, (err) => console.log(err));
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

    if (modifyDetails.type !== 'none') {
      const databaseObject = { _id: this.organisationActive, operation: modifyDetails.type, type: 'relationship', listName: modifyDetails.field, update: modifyDetails.value };
      this.http.post('/api/organisations/update', databaseObject).then(() => {
      }, (err) => console.log(err));
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
