import template from './searchSuggestions.html';
import controller from './searchSuggestions.controller';
import './searchSuggestions.scss';

const searchSuggestionsComponent = {
  restrict: 'E',
  bindings: { setSearchFilter: '&' },
  template,
  controller,
};

export default searchSuggestionsComponent;
