class ProfileEditController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'profileEdit';

    // set up variables for profileEdit page
    this.editType = 'profile';
    this.userActive = $stateParams.userId;
  }
}

export default ProfileEditController;
