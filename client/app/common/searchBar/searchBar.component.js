import template from './searchBar.html';
import controller from './searchBar.controller';
import './searchBar.scss';

const searchBarComponent = {
  restrict: 'E',
  bindings: {
    onSearch: '&',
  },
  template,
  controller,
};

export default searchBarComponent;
