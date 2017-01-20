class ProfileEditBasicController {
  constructor() {
    this.name = 'profileEditBasic';
  }

  modify() {
    const modifyDetails = [
      { type: 'update', field: 'name', value: this.user.name },
      { type: 'update', field: 'email', value: this.user.email },
      { type: 'update', field: 'phone', value: this.user.phone },
      { type: 'update', field: 'address', value: this.user.address },
    ];
    const stateChange = 'profile';
    this.modifyProfile({ modifyDetails, stateChange });
  }

  imageSave(data, field) {
    const fieldPublicId = `${field}PublicId`;
    const modifyDetails = [
      { type: 'update', field, value: data.data.secure_url },
      { type: 'update', field: fieldPublicId, value: data.data.public_id },
    ];
    const stateChange = false;
    this.modifyProfile({ modifyDetails, stateChange });
  }

  imageDelete(field) {
    const fieldPublicId = `${field}PublicId`;
    const modifyDetails = [
      { type: 'remove', field, value: false },
      { type: 'remove', field: fieldPublicId, value: false },
    ];
    const stateChange = false;
    this.modifyProfile({ modifyDetails, stateChange });
  }

  imageError(error) {
    console.log(error);
  }
}

export default ProfileEditBasicController;
