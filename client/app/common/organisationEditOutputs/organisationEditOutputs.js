import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditOutputsComponent from './organisationEditOutputs.component';

export default angular.module('organisationEditOutputs', [
  uiRouter,
])

.component('organisationEditOutputs', organisationEditOutputsComponent)

.name;
