class ProfileEditOrganisationsController {
  constructor() {
    this.name = 'profileEditOrganisations';
  }

  modify(modifyDetails, stateChange) {
    this.modifyOrganisations({ modifyDetails, stateChange });
  }
}

export default ProfileEditOrganisationsController;
