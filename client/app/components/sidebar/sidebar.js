import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sidebarComponent from './sidebar.component';

export default angular.module('sidebar', [
  uiRouter,
])

.component('sidebar', sidebarComponent)

.name;
