import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationInfoComponent from './organisationInfo.component';

export default angular.module('organisationInfo', [
  uiRouter,
])

.component('organisationInfo', organisationInfoComponent)

.name;
