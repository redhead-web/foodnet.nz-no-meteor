class SearchController {
  constructor($stateParams) {
    'ngInject';

    this.name = 'search';
    this.searchFilter = $stateParams.searchFilter;

    // ----- TODO: these need to be passed in through root scope -----
    this.userActive = 'someId';
    this.user = { _id: 'someId', emails: [{ address: 'admin@admin.co.nz' }] };
    this.organisations = [{ _id: 'someId', name: 'Super Awesome Company', tags: 'carrots' }, { _id: 'someOtherId', name: 'A Company', tags: 'beans' }, { _id: 'someMoreId', name: 'Another Company', tags: 'HTML' }, { _id: 'someAlternateId', name: 'Yet Another Company', tags: 'Lamb' }];
  }
  setFilter(suggestion) {
    this.searchFilter = suggestion;
  }
}

export default SearchController;
