import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationDashboardInfoComponent from './organisationDashboardInfo.component';

export default angular.module('organisationDashboardInfo', [
  uiRouter,
])

.component('organisationDashboardInfo', organisationDashboardInfoComponent)

.name;
