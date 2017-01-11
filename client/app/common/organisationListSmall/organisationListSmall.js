import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationListSmallComponent from './organisationListSmall.component';

export default angular.module('organisationListSmall', [
  uiRouter,
])

.component('organisationListSmall', organisationListSmallComponent)

.name;
