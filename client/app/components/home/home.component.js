import template from './home.html';
import controller from './home.controller';
import './home.scss';

const homeComponent = {
  restrict: 'E',
  bindings: {
    organisationsNewest: '<',
    organisationsPopular: '<',
    commonSearches: '<',
  },
  template,
  controller,
};

export default homeComponent;
