import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'ng-focus-if';
import searchBarComponent from './searchBar.component';

export default angular.module('searchBar', [
  uiRouter,
  'focus-if',
])

.component('searchBar', searchBarComponent)

.name;
