class ProfileEditBasicController {
  constructor() {
    this.name = 'profileEditBasic';
  }

  modify() {
    const modifyDetails = [
      { type: 'modify', field: 'name', fieldType: 'value', fieldPlacement: 'profile', value: this.user.profile.name },
      { type: 'modify', field: 'emails', fieldType: 'value', fieldPlacement: 'base', value: this.user.emails },
      { type: 'modify', field: 'phone', fieldType: 'value', fieldPlacement: 'profile', value: this.user.profile.phone },
      { type: 'modify', field: 'address', fieldType: 'value', fieldPlacement: 'profile', value: this.user.profile.address },
    ];
    const stateChange = true;
    this.modifyProfile({ modifyDetails, stateChange });
  }
}

export default ProfileEditBasicController;
