class ProfileEditSkillsController {
  constructor() {
    this.name = 'profileEditSkills';
  }

  modify(modifyDetails, stateChange) {
    this.modifySkills({ modifyDetails, stateChange });
  }
}

export default ProfileEditSkillsController;
