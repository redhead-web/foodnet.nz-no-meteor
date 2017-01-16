import angular from 'angular';
import uiRouter from 'angular-ui-router';
import iOAddButtonComponent from './iOAddButton.component';

export default angular.module('iOAddButton', [
  uiRouter,
])

.component('iOAddButton', iOAddButtonComponent)

.name;
