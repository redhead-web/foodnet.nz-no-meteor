import angular from 'angular';
import uiRouter from 'angular-ui-router';
import iOInputListComponent from './iOInputList.component';

export default angular.module('iOInputList', [
  uiRouter,
])

.component('iOInputList', iOInputListComponent)

.name;
