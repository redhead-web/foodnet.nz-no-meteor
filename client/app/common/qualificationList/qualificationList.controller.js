import template from '../buttonPopup/template.html';
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

class QualificationListController {
  constructor($state, $mdDialog) {
    'ngInject';

    this.name = 'qualificationList';
    this.fields = [
      { model: 'name', label: 'Qualification', type: 'text' },
      { model: 'institute', label: 'Institute', type: 'text' },
    ];
    this.dialog = $mdDialog;
    this.go = $state.go;
  }

  click(targetEvent, data, index) {
    if (this.pageOwned) {
      // TODO modify data in popup
      this.dialog.show(angular.extend(dialogOptions, {
        targetEvent,
        bindToController: true,
        locals: { fields: this.fields, data, title: 'Edit' },
      })).then((item) => this.update(index, item));
    } else {
      this.go('search', { q: data.name, [this.fieldName]: true });
    }
  }

  delete(index, value) {
    const modifyDetails = { type: 'remove', field: 'qualifications', index, value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }

  update(index, value) {
    const modifyDetails = { type: 'update', field: 'qualifications', index, value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }

  insert(value) {
    const modifyDetails = { type: 'insert', field: 'qualifications', value };
    const stateChange = false;
    this.onModify({ modifyDetails, stateChange });
  }
}

export default QualificationListController;
