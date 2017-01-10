import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationSplashComponent from './organisationSplash.component';

export default angular.module('organisationSplash', [
  uiRouter,
])

.component('organisationSplash', organisationSplashComponent)

.name;
