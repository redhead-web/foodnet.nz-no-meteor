import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationComponent from './organisation.component';

export default angular.module('organisation', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('organisation', {
      url: '/organisation',
      component: 'organisation',
    });
})

.component('organisation', organisationComponent)

.name;
