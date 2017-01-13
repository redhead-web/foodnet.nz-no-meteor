class IOOutputListController {
  constructor() {
    this.name = 'iOOutputList';
  }

  delete(index) {
    const modifyDetails = { type: 'remove', field: 'outputs', index };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }

  update(index, value) {
    const modifyDetails = { type: 'update', field: 'outputs', index, value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
  insert(value) {
    const modifyDetails = { type: 'insert', field: 'outputs', value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
}

export default IOOutputListController;
