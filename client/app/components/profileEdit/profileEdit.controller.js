class ProfileEditController {
  constructor($stateParams, $mdDialog) {
    'ngInject';

    this.name = 'profileEdit';

    // set up variables for profileEdit page
    this.editType = 'profile';
    this.mdDialog = $mdDialog;
    this.userActive = $stateParams.userId;
  }

  modifyProfile(modifyDetails, stateChange) {
    for (let index = 0; index < modifyDetails.length; index += 1) {
      const modify = modifyDetails[index];
      if (modify.type === 'remove') {
        this.profileData.person[modify.field] = '';
      } else if (modify.type === 'update') {
        this.profileData.person[modify.field] = modify.value;
      }
    }
    if (stateChange) {
      this.editType = stateChange;
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
    if (stateChange) {
      this.editType = stateChange;
    }
  }
}

export default ProfileEditController;
