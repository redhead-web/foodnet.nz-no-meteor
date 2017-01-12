import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import OrgansationFactory from '../organisation/organisation.factory';
import SearchFactory from '../search/search.factory';

const homeModule = angular.module('home', [
  uiRouter,
])

.factory('Organisation', OrgansationFactory)
.factory('Search', SearchFactory)

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve: {
        organisationsNewest: (Organisation) => Organisation.getNewestData(),
        organisationsPopular: (Organisation) => Organisation.getPopularData(),
        commonSearches: (Search) => Search.getCommonData(),
      },
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
