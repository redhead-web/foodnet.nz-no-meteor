import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationSummaryComponent from './organisationSummary.component';

export default angular.module('organisationSummary', [
  uiRouter,
])

.component('organisationSummary', organisationSummaryComponent)

.name;
