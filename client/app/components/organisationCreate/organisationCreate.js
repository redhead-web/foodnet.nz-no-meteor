import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationCreateComponent from './organisationCreate.component';

export default angular.module('organisationCreate', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('organisationCreate', {
      url: '/organisationCreate',
      component: 'organisationCreate',
    });
})

.component('organisationCreate', organisationCreateComponent)

.name;
