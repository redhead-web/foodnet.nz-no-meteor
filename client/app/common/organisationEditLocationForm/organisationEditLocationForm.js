import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditLocationFormComponent from './organisationEditLocationForm.component';

export default angular.module('organisationEditLocationForm', [
  uiRouter,
])

.component('organisationEditLocationForm', organisationEditLocationFormComponent)

.name;
