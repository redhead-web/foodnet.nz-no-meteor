import angular from 'angular';
import uiRouter from 'angular-ui-router';
import logInComponent from './logIn.component';
import User from '../../common/user/user';

export default angular.module('logIn', [
  uiRouter,
  User,
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
