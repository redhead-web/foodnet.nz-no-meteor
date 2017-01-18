class ProfileEditBasicController {
  constructor() {
    this.name = 'profileEditBasic';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'name', value: this.user.name },
      { type: 'update', field: 'emails', value: this.user.email },
      { type: 'update', field: 'phone', value: this.user.phone },
      { type: 'update', field: 'address', value: this.user.address },
    ];
    const stateChange = 'profile';
    this.modifyProfile({ modifyDetails, stateChange });
  }
}

export default ProfileEditBasicController;
