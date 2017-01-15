class ProfileEditBasicController {
  constructor() {
    this.name = 'profileEditBasic';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'name', fieldPlacement: 'profile', value: this.user.profile.name },
      { type: 'update', field: 'emails', fieldPlacement: 'base', value: this.user.emails },
      { type: 'update', field: 'phone', fieldPlacement: 'profile', value: this.user.profile.phone },
      { type: 'update', field: 'address', fieldPlacement: 'profile', value: this.user.profile.address },
    ];
    const stateChange = 'profile';
    this.modifyProfile({ modifyDetails, stateChange });
  }
}

export default ProfileEditBasicController;
