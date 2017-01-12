class SearchController {
  constructor($stateParams, $http, $timeout) {
    'ngInject';

    this.name = 'search';
    this.searchFilter = $stateParams.searchFilter;

    this.get = $http.get;
    this.$timeout = $timeout;

    // ----- TODO: these need to be passed in through root scope -----
    this.organisations = [{ _id: 'someId', name: 'Super Awesome Company', tags: 'carrots' }, { _id: 'someOtherId', name: 'A Company', tags: 'beans' }, { _id: 'someMoreId', name: 'Another Company', tags: 'HTML' }, { _id: 'someAlternateId', name: 'Yet Another Company', tags: 'Lamb' }];
  }
  setFilter(suggestion) {
    this.searchFilter = suggestion;
  }

  search(query) {
    this.searchFilter = query;
    this.loading = true;
    // simulate long search
    this.$timeout(() => this.get('/api/search', { params: { q: query } })
    .then((response) => {
      this.searchResults = response.data;
    }),
    300 + (Math.random() * (3000 - 300)));
  }
}

export default SearchController;
