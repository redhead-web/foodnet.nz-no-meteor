class SearchSuggestionsController {
  constructor($rootScope) {
    'ngInject';

    this.name = 'searchSuggestions';
    this.suggestions = $rootScope.currentUser.profile.searchHistory;
  }
}

export default SearchSuggestionsController;
