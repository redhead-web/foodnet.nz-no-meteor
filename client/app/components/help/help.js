import angular from 'angular';
import uiRouter from 'angular-ui-router';
import helpComponent from './help.component';

export default angular.module('help', [
  uiRouter,
])

.component('help', helpComponent)
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('help', {
      url: '/help',
      component: 'help',
    });
})

.name;
