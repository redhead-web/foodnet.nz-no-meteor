import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationLocationComponent from './organisationLocation.component';

export default angular.module('organisationLocation', [
  uiRouter,
])

.component('organisationLocation', organisationLocationComponent)

.name;
