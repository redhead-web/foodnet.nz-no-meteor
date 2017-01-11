import angular from 'angular';
import uiRouter from 'angular-ui-router';
import logInComponent from './logIn.component';

export default angular.module('logIn', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('logIn', {
      url: '/logIn',
      component: 'logIn',
    });
})

.component('logIn', logInComponent)

.name;
