import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditBasicComponent from './organisationEditBasic.component';

export default angular.module('organisationEditBasic', [
  uiRouter,
])

.component('organisationEditBasic', organisationEditBasicComponent)

.name;
