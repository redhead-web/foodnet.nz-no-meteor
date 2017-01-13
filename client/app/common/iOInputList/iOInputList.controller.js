class IOInputListController {
  constructor() {
    this.name = 'iOInputList';
  }

  delete(index) {
    const modifyDetails = { type: 'remove', field: 'inputs', index };
    this.onModify({ modifyDetails });
  }

  update(index, value) {
    const modifyDetails = { type: 'update', field: 'inputs', index, value };
    this.onModify({ modifyDetails });
  }
  insert(value) {
    const modifyDetails = { type: 'insert', field: 'inputs', value };
    this.onModify({ modifyDetails });
  }
}

export default IOInputListController;
