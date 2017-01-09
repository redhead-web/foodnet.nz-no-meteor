import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loginButtonComponent from './loginButton.component';

export default angular.module('loginButton', [
  uiRouter,
])

.component('loginButton', loginButtonComponent)

.name;
