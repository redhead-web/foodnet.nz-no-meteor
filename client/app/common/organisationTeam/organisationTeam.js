import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationTeamComponent from './organisationTeam.component';

export default angular.module('organisationTeam', [
  uiRouter,
])

.component('organisationTeam', organisationTeamComponent)

.name;
