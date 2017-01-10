import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationDashboardIOComponent from './organisationDashboardIO.component';

export default angular.module('organisationDashboardIO', [
  uiRouter,
])

.component('organisationDashboardIO', organisationDashboardIOComponent)

.name;
