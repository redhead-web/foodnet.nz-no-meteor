import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarAdjustComponent from './navbarAdjust.component';

export default angular.module('navbarAdjust', [
  uiRouter,
])

.component('navbarAdjust', navbarAdjustComponent)

.name;
