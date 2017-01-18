import template from './iOList.html';
import controller from './iOList.controller';
import './iOList.scss';

const iOListComponent = {
  restrict: 'E',
  bindings: {
    onModify: '&',
    list: '<',
    fieldName: '@', // inputs or outputs only please
    pageOwned: '<',
    hideHeader: '<',
    header: '@',
  },
  template,
  controller,
};

export default iOListComponent;
