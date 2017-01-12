class SearchBarController {
  constructor($rootScope, $state) {
    'ngInject';

    this.back = () => $state.go($rootScope.lastState.state || 'home', $rootScope.lastState.params);
    this.name = 'searchBar';
  }
}

export default SearchBarController;
