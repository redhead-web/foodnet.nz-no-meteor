import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditLinksComponent from './organisationEditLinks.component';

export default angular.module('organisationEditLinks', [
  uiRouter,
])

.component('organisationEditLinks', organisationEditLinksComponent)

.name;
