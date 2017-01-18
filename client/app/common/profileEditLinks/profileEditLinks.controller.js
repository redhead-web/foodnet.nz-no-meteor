class ProfileEditLinksController {
  constructor() {
    this.name = 'profileEditLinks';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'facebook', value: this.user.facebook },
      { type: 'update', field: 'twitter', value: this.user.twitter },
      { type: 'update', field: 'instagram', value: this.user.instagram },
      { type: 'update', field: 'youtube', value: this.user.youtube },
    ];
    const stateChange = 'profile';
    this.modifyProfile({ modifyDetails, stateChange });
  }
}

export default ProfileEditLinksController;
