import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileEditOrganisationsComponent from './profileEditOrganisations.component';

export default angular.module('profileEditOrganisations', [
  uiRouter,
])

.component('profileEditOrganisations', profileEditOrganisationsComponent)

.name;
