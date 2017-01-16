import angular from 'angular';
import uiRouter from 'angular-ui-router';
import iOListComponent from './iOList.component';

export default angular.module('iOList', [
  uiRouter,
])

.component('iOList', iOListComponent)

.name;
