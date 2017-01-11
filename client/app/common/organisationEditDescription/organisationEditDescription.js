import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditDescriptionComponent from './organisationEditDescription.component';

export default angular.module('organisationEditDescription', [
  uiRouter,
])

.component('organisationEditDescription', organisationEditDescriptionComponent)

.name;
