class IOInputListController {
  constructor() {
    this.name = 'iOInputList';
  }

  delete(index) {
    const modifyDetails = { type: 'remove', field: 'inputs', index };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }

  update(index, value) {
    const modifyDetails = { type: 'update', field: 'inputs', index, value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
  insert(value) {
    const modifyDetails = { type: 'insert', field: 'inputs', value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
}

export default IOInputListController;
