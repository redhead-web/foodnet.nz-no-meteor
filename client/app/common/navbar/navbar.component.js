import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.scss';

const navbarComponent = {
  restrict: 'E',
  bindings: {
    userData: '<',
    title: '@',
    searchFilter: '=',
    searchActive: '=',
    searchDisabled: '<',
    pageOwned: '<',
    pageType: '@',
    pageId: '<',
  },
  template,
  controller,
};

export default navbarComponent;
