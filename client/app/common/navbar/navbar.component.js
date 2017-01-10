import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.scss';

const navbarComponent = {
  restrict: 'E',
  bindings: {
    user: '<',
    userActive: '<',
    title: '@',
    searchFilter: '=',
    searchActive: '=',
    searchDisabled: '<',
  },
  template,
  controller,
};

export default navbarComponent;
