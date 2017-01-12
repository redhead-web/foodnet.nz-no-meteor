class ProfileController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'profile';

    // set up variables for profile page
    this.userActive = $stateParams.userId;
  }
}

export default ProfileController;
