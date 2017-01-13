class IOOutputListController {
  constructor() {
    this.name = 'iOOutputList';
  }
  delete(index) {
    const modifyDetails = { type: 'remove', field: 'outputs', index };
    this.onModify({ modifyDetails });
  }

  update(index, value) {
    const modifyDetails = { type: 'update', field: 'outputs', index, value };
    this.onModify({ modifyDetails });
  }
  insert(value) {
    const modifyDetails = { type: 'insert', field: 'outputs', value };
    this.onModify({ modifyDetails });
  }
}

export default IOOutputListController;
