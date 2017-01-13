import template from './iOOutputList.html';
import controller from './iOOutputList.controller';
import './iOOutputList.scss';

const iOOutputListComponent = {
  restrict: 'E',
  bindings: {
    onModify: '&',
    outputs: '<',
    pageOwned: '<',
    hideHeader: '<',
  },
  template,
  controller,
};

export default iOOutputListComponent;
