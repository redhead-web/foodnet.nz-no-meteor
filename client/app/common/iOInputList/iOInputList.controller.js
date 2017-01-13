class IOInputListController {
  constructor() {
    this.name = 'iOInputList';
  }

  delete(index) {
    const modifyDetails = [{ type: 'delete', field: 'inputs', fieldType: 'array', index }];
    this.modifyOrganisation({ modifyDetails });
  }
}

export default IOInputListController;
