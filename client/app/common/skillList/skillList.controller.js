class SkillListController {
  constructor() {
    this.name = 'skillList';
  }

  delete(index) {
    const modifyDetails = { type: 'remove', field: 'skills', index };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }

  update(index, value) {
    const modifyDetails = { type: 'update', field: 'skills', index, value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }

  insert(value) {
    const modifyDetails = { type: 'insert', field: 'skills', value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
}

export default SkillListController;
