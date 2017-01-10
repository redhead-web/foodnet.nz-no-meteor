import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationListComponent from './organisationList.component';

export default angular.module('organisationList', [
  uiRouter,
])

.component('organisationList', organisationListComponent)

.name;
