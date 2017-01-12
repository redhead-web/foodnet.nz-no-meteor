import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchComponent from './search.component';

export default angular.module('search', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('search', {
      url: '/search/:searchFilter',
      component: 'search',
    });
})

.component('search', searchComponent)

.name;
