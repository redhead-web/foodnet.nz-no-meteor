import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationDashboardHomeComponent from './organisationDashboardHome.component';

export default angular.module('organisationDashboardHome', [
  uiRouter,
])

.component('organisationDashboardHome', organisationDashboardHomeComponent)

.name;
