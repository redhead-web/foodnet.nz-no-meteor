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

class IOListController {
  constructor($state, $mdDialog) {
    'ngInject';

    this.go = $state.go;
    this.dialog = $mdDialog;
    this.name = 'iOList';
  }

  click(targetEvent, data, index) {
    if (this.pageOwned) {
      // TODO modify data in popup
      this.dialog.show(angular.extend(dialogOptions, {
        targetEvent,
        bindToController: true,
        locals: { data, title: 'Edit' },
      })).then((item) => this.update(index, item));
    } else {
      this.go('search', { q: data.name, [this.fieldName]: true });
    }
  }

  delete(index) {
    const modifyDetails = { type: 'remove', field: this.fieldName, index };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }

  update(index, value) {
    const modifyDetails = { type: 'update', field: this.fieldName, index, value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
}

export default IOListController;
