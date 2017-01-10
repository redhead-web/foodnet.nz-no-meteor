import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileComponent from './profile.component';

export default angular.module('profile', [
  uiRouter,
])

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('profile', {
      url: '/profile',
      component: 'profile',
    });
})

.component('profile', profileComponent)

.name;
