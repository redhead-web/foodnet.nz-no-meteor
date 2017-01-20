class ProfileEditController {
  constructor($stateParams, $mdDialog, $http) {
    'ngInject';

    this.name = 'profileEdit';

    // set up variables for profileEdit page
    this.editType = 'profile';
    this.mdDialog = $mdDialog;
    this.http = $http;
    this.userActive = $stateParams.userId;
    this.data = false;

    this.paths = {
      profile: {
        root: true,
        title: 'Profile Settings',
      },
      basic: {
        title: 'Basic Details',
      },
      organisations: {
        title: 'Organisations',
      },
      organisation: {
        title: 'Organisation Settings',
        parent: 'organisations',
      },
      skills: {
        title: 'Your Skills',
      },
      qualifications: {
        title: 'Your Qualifications',
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
      this.editType = 'profile';
    }
  }

  modifyProfile(modifyDetails, stateChange) {
    for (let index = 0; index < modifyDetails.length; index += 1) {
      const modify = modifyDetails[index];
      this.profileData.person[modify.field] = modify.value;
      const databaseObject = { _id: this.userActive, update: { [modify.field]: modify.value }, type: 'property' };
      this.http.post('/api/profiles/update', databaseObject).then(() => {
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
        this.profileData[modifyDetails.field].push(modifyDetails.value);
        break;
      case 'update':
        this.profileData[modifyDetails.field][modifyDetails.index] = modifyDetails.value;
        break;
      case 'remove':
        if (modifyDetails.field === 'organisations') {
          // Appending dialog to document.body to cover sidenav in docs app
          const confirm = this.mdDialog.confirm()
          .title('Would you like to move this job to previous employment?')
          .textContent('This will keep an employment history')
          .ariaLabel('previous employment')
          .ok('Yes')
          .cancel('No');

          this.mdDialog.show(confirm).then(() => {
            console.log('move to previous');
          }, () => {
            console.log('do not move to previous');
          });
        }
        this.profileData[modifyDetails.field].splice(modifyDetails.index, 1);
        break;
      default:
    }

    if (modifyDetails.type !== 'none') {
      const databaseObject = { _id: this.userActive, operation: modifyDetails.type, type: 'relationship', listName: modifyDetails.field, update: modifyDetails.value };
      this.http.post('/api/profiles/update', databaseObject).then(() => {
        console.log('success');
      }, (err) => console.log(err));
    }

    if (stateChange) {
      this.editType = stateChange;
    }
  }
}

export default ProfileEditController;
