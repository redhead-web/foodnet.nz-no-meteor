import template from './iOInputList.html';
import controller from './iOInputList.controller';
import './iOInputList.scss';

const iOInputListComponent = {
  restrict: 'E',
  bindings: {
    inputs: '<',
  },
  template,
  controller,
};

export default iOInputListComponent;
