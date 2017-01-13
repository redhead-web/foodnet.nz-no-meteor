import template from '../iOInputList/newInput.html';
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

class OrganisationEditInputsController {
  constructor($mdDialog) {
    'ngInject';

    this.dialog = $mdDialog;
    this.name = 'organisationEditInputs';
  }
  modify(modifyDetails, stateChange) {
    this.modifyInputs({ modifyDetails, stateChange });
  }

  getId() {
    return Math.random();
  }

  add(targetEvent, data = { _id: this.getId() }) {
    this.dialog.show(angular.extend(dialogOptions, {
      targetEvent,
      bindToController: true,
      locals: { data, title: 'New Input' },
    })).then((input) => this.insert(input));
  }

  insert(value) {
    const modifyDetails = { type: 'insert', field: 'inputs', value };
    this.modifyInputs({ modifyDetails });
  }
}

export default OrganisationEditInputsController;
