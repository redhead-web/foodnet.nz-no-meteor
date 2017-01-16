class ProfileEditQualificationsController {
  constructor() {
    this.name = 'profileEditQualifications';
  }

  modify(modifyDetails, stateChange) {
    this.modifyQualifications({ modifyDetails, stateChange });
  }
}

export default ProfileEditQualificationsController;
