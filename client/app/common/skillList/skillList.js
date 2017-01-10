import angular from 'angular';
import uiRouter from 'angular-ui-router';
import skillListComponent from './skillList.component';

export default angular.module('skillList', [
  uiRouter,
])

.component('skillList', skillListComponent)

.name;
