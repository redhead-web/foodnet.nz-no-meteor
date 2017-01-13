import template from './iOInputList.html';
import controller from './iOInputList.controller';
import './iOInputList.scss';

const iOInputListComponent = {
  restrict: 'E',
  bindings: {
    modifyOrganisation: '&',
    inputs: '<',
    pageOwned: '<',
    hideHeader: '<',
  },
  template,
  controller,
};

export default iOInputListComponent;
