class ProfileEditBasicController {
  constructor() {
    this.name = 'profileEditBasic';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'name', fieldType: 'value', fieldPlacement: 'profile', value: this.user.profile.name },
      { type: 'update', field: 'emails', fieldType: 'value', fieldPlacement: 'base', value: this.user.emails },
      { type: 'update', field: 'phone', fieldType: 'value', fieldPlacement: 'profile', value: this.user.profile.phone },
      { type: 'update', field: 'address', fieldType: 'value', fieldPlacement: 'profile', value: this.user.profile.address },
    ];
    const stateChange = 'profile';
    this.modifyProfile({ modifyDetails, stateChange });
  }
}

export default ProfileEditBasicController;
