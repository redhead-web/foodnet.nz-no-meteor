class ProfileEditOrganisationsController {
  constructor() {
    this.name = 'profileEditOrganisations';
  }

  modify(modifyDetails, stateChange) {
    this.modifyOrganisations({ modifyDetails, stateChange });
  }

  add() {
    const modifyDetails = { type: 'none', passData: { organisation: {}, index: false } };
    const stateChange = 'organisation';
    this.modifyOrganisations({ modifyDetails, stateChange });
  }
}

export default ProfileEditOrganisationsController;
