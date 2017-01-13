class ProfileEditController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'profileEdit';

    // set up variables for profileEdit page
    this.editType = 'profile';
    this.userActive = $stateParams.userId;
  }

  modifyProfile(modifyDetails, stateChange) {
    for (let index = 0; index < modifyDetails.length; index += 1) {
      const modify = modifyDetails[index];
      if (modify.type === 'remove') {
        if (modify.fieldType === 'array') {
          if (modify.fieldPlacement === 'profile') {
            this.profileData.person.profile[modify.field].splice(modify.index, 1);
          } else {
            this.profileData.person[modify.field].splice(modify.index, 1);
          }
        } else if (modify.fieldType === 'value') {
          if (modify.fieldPlacement === 'profile') {
            this.profileData.person.profile[modify.field] = '';
          } else {
            this.profileData.person = '';
          }
        }
      } else if (modify.type === 'update') {
        if (modify.fieldType === 'array') {
          if (modify.fieldPlacement === 'profile') {
            // modify array
          } else {
            // modify array
          }
        } else if (modify.fieldType === 'value') {
          if (modify.fieldPlacement === 'profile') {
            this.profileData.person.profile[modify.field] = modify.value;
          } else {
            this.profileData.person[modify.field] = modify.value;
          }
        }
      } else if (modify.type === 'insert') {
        if (modify.fieldType === 'array') {
          if (modify.fieldPlacement === 'profile') {
            // add too array
          } else {
            // add too array
          }
        } else if (modify.fieldType === 'value') {
          if (modify.fieldPlacement === 'profile') {
            // create value
          } else {
            // create value
          }
        }
      }
    }
    if (stateChange) {
      this.editType = 'profile';
    }
  }

  modifyLists(modifyDetails, stateChange) {
    switch (modifyDetails.type) {
      case 'insert':
        this.profileData[modifyDetails.field].push(modifyDetails.value);
        break;
      case 'update':
        this.profileData[modifyDetails.field][modifyDetails.index] = modifyDetails.value;
        break;
      case 'remove':
        this.profileData[modifyDetails.field].splice(modifyDetails.index, 1);
        break;
      default:
    }
    if (stateChange) {
      this.editType = 'organisation';
    }
  }
}

export default ProfileEditController;
