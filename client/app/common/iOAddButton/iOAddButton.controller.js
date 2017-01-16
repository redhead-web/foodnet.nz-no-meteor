import template from '../iOAddButton/newIO.html';
import angular from 'angular';

const dialogOptions = {
  template,
  controllerAs: '$ctrl',
  controller($mdDialog) {
    'ngInject';

    this.answer = (answer) => {
      $mdDialog.hide(answer);
    };
    this.cancel = () => {
      $mdDialog.cancel();
    };
  },
};

class IOAddButtonController {
  constructor($mdDialog) {
    'ngInject';

    this.dialog = $mdDialog;
    this.name = 'iOAddButton';
  }
  getId() {
    return Math.random();
  }
  add(targetEvent, data = { _id: this.getId() }) {
    this.dialog.show(angular.extend(dialogOptions, {
      targetEvent,
      bindToController: true,
      locals: { data, title: `New ${this.fieldName.slice(0, -1)}` }, // get input rather than inputs
    })).then((input) => this.insert(input));
  }
  insert(value) {
    const modifyDetails = { type: 'insert', field: this.fieldName, value };
    const stateChange = false;
    this.onAdd({ modifyDetails, stateChange });
  }
}

export default IOAddButtonController;
