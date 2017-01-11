import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditBrandingComponent from './organisationEditBranding.component';

export default angular.module('organisationEditBranding', [
  uiRouter,
])

.component('organisationEditBranding', organisationEditBrandingComponent)

.name;
