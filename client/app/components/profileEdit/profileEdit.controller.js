class ProfileEditController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'profileEdit';
    this.editType = 'profile';
    this.userActive = $stateParams.userId;
  }
}

export default ProfileEditController;
