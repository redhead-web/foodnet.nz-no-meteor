import template from './searchBar.html';
import controller from './searchBar.controller';
import './searchBar.scss';

const searchBarComponent = {
  restrict: 'E',
  bindings: {
    searchFilter: '=',
  },
  template,
  controller,
};

export default searchBarComponent;
