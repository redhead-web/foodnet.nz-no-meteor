import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileEditOrganisationComponent from './profileEditOrganisation.component';

export default angular.module('profileEditOrganisation', [
  uiRouter,
])

.component('profileEditOrganisation', profileEditOrganisationComponent)

.name;
