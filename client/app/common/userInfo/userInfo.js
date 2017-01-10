import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userInfoComponent from './userInfo.component';

export default angular.module('userInfo', [
  uiRouter,
])

.component('userInfo', userInfoComponent)

.name;
