import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchCommonComponent from './searchCommon.component';

export default angular.module('searchCommon', [
  uiRouter,
])

.component('searchCommon', searchCommonComponent)

.name;
