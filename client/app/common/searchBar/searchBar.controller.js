class SearchBarController {
  constructor($history) {
    'ngInject';

    this.back = () => $history.back();
    this.name = 'searchBar';
  }
}

export default SearchBarController;
