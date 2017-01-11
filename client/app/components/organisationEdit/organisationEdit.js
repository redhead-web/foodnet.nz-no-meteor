import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditComponent from './organisationEdit.component';

export default angular.module('organisationEdit', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('organisationEdit', {
      url: '/organisationEdit',
      component: 'organisationEdit',
    });
})

.component('organisationEdit', organisationEditComponent)

.name;
