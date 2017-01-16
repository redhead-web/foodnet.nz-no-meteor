import template from './template.html';
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

class ButtonPopupController {
  constructor($mdDialog) {
    'ngInject';

    this.name = 'buttonPopup';
    this.dialog = $mdDialog;
  }

  getId() {
    return Math.random();
  }

  add(targetEvent, data = { _id: this.getId() }) {
    this.dialog.show(angular.extend(dialogOptions, {
      targetEvent,
      bindToController: true,
      locals: { fields: this.fields, data, title: `New ${this.listName.slice(0, -1)}` }, // get input rather than inputs
    })).then((input) => this.insert(input));
  }

  insert(value) {
    const modifyDetails = { type: 'insert', field: this.listName, value };
    const stateChange = false;
    this.onComplete({ modifyDetails, stateChange });
  }
}

export default ButtonPopupController;
