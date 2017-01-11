import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditInputsComponent from './organisationEditInputs.component';

export default angular.module('organisationEditInputs', [
  uiRouter,
])

.component('organisationEditInputs', organisationEditInputsComponent)

.name;
