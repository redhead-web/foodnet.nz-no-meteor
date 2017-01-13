import template from './newInput.html';
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

class IOInputListController {
  constructor($state, $mdDialog) {
    'ngInject';

    this.go = $state.go;
    this.dialog = $mdDialog;
    this.name = 'iOInputList';
  }

  click(targetEvent, data, index) {
    if (this.pageOwned) {
      // TODO modify data in popup
      this.dialog.show(angular.extend(dialogOptions, {
        targetEvent,
        bindToController: true,
        locals: { data, title: 'Edit Input' },
      })).then((input) => this.update(index, input));
    } else {
      this.go('search', { q: data.name, input: true });
    }
  }

  delete(index) {
    const modifyDetails = { type: 'remove', field: 'inputs', index };
    this.onModify({ modifyDetails });
  }

  update(index, value) {
    const modifyDetails = { type: 'update', field: 'inputs', index, value };
    this.onModify({ modifyDetails });
  }
}

export default IOInputListController;
