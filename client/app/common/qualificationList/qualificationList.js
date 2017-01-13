import angular from 'angular';
import uiRouter from 'angular-ui-router';
import qualificationListComponent from './qualificationList.component';

export default angular.module('qualificationList', [
  uiRouter,
])

.component('qualificationList', qualificationListComponent)

.name;
