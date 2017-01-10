import angular from 'angular';
import uiRouter from 'angular-ui-router';
import iOOutputListComponent from './iOOutputList.component';

export default angular.module('iOOutputList', [
  uiRouter,
])

.component('iOOutputList', iOOutputListComponent)

.name;
