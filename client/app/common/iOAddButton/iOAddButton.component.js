import template from './iOAddButton.html';
import controller from './iOAddButton.controller';
import './iOAddButton.scss';

const iOAddButtonComponent = {
  restrict: 'E',
  bindings: {
    onAdd: '&',
    fieldName: '@',
  },
  template,
  controller,
};

export default iOAddButtonComponent;
