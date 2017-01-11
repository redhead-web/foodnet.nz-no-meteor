import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileEditComponent from './profileEdit.component';

export default angular.module('profileEdit', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('profileEdit', {
      url: '/profileEdit',
      component: 'profileEdit',
    });
})

.component('profileEdit', profileEditComponent)

.name;
