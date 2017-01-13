class ProfileEditLinksController {
  constructor() {
    this.name = 'profileEditLinks';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'social', fieldType: 'value', fieldPlacement: 'profile', value: this.user.profile.social },
    ];
    const stateChange = true;
    this.modifyProfile({ modifyDetails, stateChange });
  }
}

export default ProfileEditLinksController;
