class SkillListController {
  constructor() {
    this.name = 'skillList';
  }

  delete(index) {
    const modifyDetails = { type: 'remove', field: 'qualifications', index };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }

  update(index, value) {
    const modifyDetails = { type: 'update', field: 'qualifications', index, value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }

  insert(value) {
    const modifyDetails = { type: 'insert', field: 'qualifications', value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
}

export default SkillListController;
