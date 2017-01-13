class SearchBarController {
  constructor($rootScope, $state, $stateParams) {
    'ngInject';

    this.searchFilter = $stateParams.q || '';
    this.back = () => $state.go($rootScope.lastState.state || 'home', $rootScope.lastState.params);
    this.name = 'searchBar';
    this.search = (query) => {
      this.onSearch({ query });
    };
  }
}

export default SearchBarController;
