import template from './searchCommon.html';
import controller from './searchCommon.controller';
import './searchCommon.scss';

const searchCommonComponent = {
  restrict: 'E',
  bindings: {
    commonSearches: '<',
    searchFilter: '=',
    searchActive: '=',
  },
  template,
  controller,
};

export default searchCommonComponent;
