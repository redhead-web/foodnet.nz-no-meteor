import template from './template.html';
import angular from 'angular';

const dialogOptions = {
  template,
  controllerAs: '$ctrl',
  controller($mdDialog, $timeout, Search) {
    'ngInject';

    this.answer = (answer) => {
      $mdDialog.hide(answer);
    };
    this.cancel = () => {
      $mdDialog.cancel();
    };

    // this.resources = [
    //   { name: 'bananas' },
    //   { name: 'brownies' },
    //   { name: 'coffee' },
    // ];

    this.querySearch = (field, query) => Search.autocomplete(field, query);
      // uncomment below to test the autocomplete with local data.
      // { const results = query ? this.resources.filter(createFilterFor(query)) : this.resources;
      // const deferred = $q.defer();
      // // simulate a data call
      // $timeout(() => deferred.resolve(results), Math.random() * 1000, false);
      // return deferred.promise; };

    /**
     * Create filter function for a query string
     */
    // function createFilterFor(query) {
    //   const lowercaseQuery = angular.lowercase(query);
    //
    //   return function filterFn(resource) {
    //     return (resource.name.indexOf(lowercaseQuery) === 0);
    //   };
    // }
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
