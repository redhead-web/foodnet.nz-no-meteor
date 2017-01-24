class SearchController {
  constructor($stateParams, $http, $timeout) {
    'ngInject';

    this.name = 'search';
    this.searchFilter = $stateParams.q;

    this.get = $http.get;
    this.$timeout = $timeout;
  }
  setFilter(suggestion) {
    this.searchFilter = suggestion;
  }

  search(query) {
    this.searchFilter = query;
    this.loading = true;
    this.get('/api/search', { params: { q: query } })
    .then((response) => {
      this.searchResults = response.data;
    });
  }
}

export default SearchController;
