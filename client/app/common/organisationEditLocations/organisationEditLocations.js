import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditLocationsComponent from './organisationEditLocations.component';

export default angular.module('organisationEditLocations', [
  uiRouter,
])

.component('organisationEditLocations', organisationEditLocationsComponent)

.name;
