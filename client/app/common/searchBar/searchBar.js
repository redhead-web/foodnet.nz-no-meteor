import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchBarComponent from './searchBar.component';

export default angular.module('searchBar', [
  uiRouter,
])

.component('searchBar', searchBarComponent)

.name;
